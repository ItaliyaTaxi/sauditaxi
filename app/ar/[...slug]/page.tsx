import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Clock, MapPin } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogContent } from "@/components/blog/BlogContent";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { arPages, getArPage, arPath, type ArPage } from "@/data/translations/ar";
import { pageHeroes } from "@/lib/hero";
import { getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { hotelsForCity } from "@/data/hotels";
import { airportTransferName } from "@/lib/hotel-transfers";
import { cityAirportFactsAr } from "@/lib/city-hub-facts";

const heroFor = (page: ArPage): string => {
  if (page.type === "airport" || page.type === "hotel-transfer") return pageHeroes.airport;
  if (page.type === "attraction") return page.enPath.startsWith("/madinah/") ? pageHeroes.madinah : pageHeroes.makkah;
  if (page.type === "route" || page.type === "blog") return pageHeroes.makkah;
  if (page.type === "city" || page.type === "city-hub") return pageHeroes.city;
  return pageHeroes.home;
};

/** /cities/{city} -> {city}, for the city-hub type only (enPath is always in this form). */
const citySlugFor = (page: ArPage): string => page.enPath.replace("/cities/", "");

const dict = getDictionary("ar");

export function generateStaticParams() {
  // The 41 hotel-transfer entries 301-redirect to their city-hub anchor
  // (proxy.ts, built from the same arPages array) and are excluded here —
  // see lib/city-hub-facts.ts / the "city-hub" type above. Data stays in
  // arPages (needed to build the redirect map); only static generation and
  // the sitemap (app/sitemap.ts) exclude them.
  return arPages.filter((p) => p.type !== "hotel-transfer").map((p) => ({ slug: p.slug.split("/") }));
}

// Old Arabic slugs that were only ever referenced from breadcrumbs (never
// built as real pages) but already have a live page covering the same
// topic. Redirecting avoids duplicating content that would otherwise
// cannibalize the live page for the same query. next.config.ts's
// redirects() did not reliably match these non-ASCII source paths in
// testing, so the alias is resolved here instead.
const LEGACY_AR_ALIASES: Record<string, string> = {
  "تاكسي-عمرة": "نقل-العمرة",
  "النقل-الحدودي": "النقل-عبر-الحدود",
};

// Next.js already decodes dynamic segments before they reach this component,
// so decodeURIComponent here is normally a no-op — but if a proxy/CDN layer
// ever forwards an already-decoded or malformed value, decodeURIComponent
// throws URIError, which previously propagated as an unhandled exception
// (HTTP 500) instead of a normal "page doesn't exist" 404.
function safeSlug(slugParts: string[]): string {
  const joined = slugParts.join("/");
  try {
    return decodeURIComponent(joined);
  } catch {
    return joined;
  }
}

function resolve(slugParts: string[]): ArPage | undefined {
  return getArPage(safeSlug(slugParts));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: arPath(page),
    alternateLanguages: { en: page.enPath, ar: arPath(page) },
  });
}

const serviceTypeFor = (type: ArPage["type"]): string =>
  ({
    service: "Taxi Service",
    airport: "Airport Transfer",
    city: "Taxi Service",
    route: "Intercity Transfer",
    "hotel-transfer": "Airport Transfer",
    about: "Taxi Service",
    contact: "Taxi Service",
    blog: "Taxi Service",
    attraction: "Private Transfer",
    "city-hub": "Airport Transfer",
  })[type];

export default async function ArabicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = safeSlug(slug);
  const alias = LEGACY_AR_ALIASES[key];
  // HTTP headers must be ASCII — an un-encoded Arabic destination in the
  // Location header throws (Node: "Invalid character in header content"),
  // which itself produced a 500. Percent-encode it.
  if (alias) redirect(`/ar/${encodeURIComponent(alias)}`);

  const page = resolve(slug);
  if (!page) notFound();

  const faqs = page.faqs.slice(0, 20);
  const isBookable = ["service", "airport", "city", "route", "hotel-transfer", "attraction", "city-hub"].includes(
    page.type
  );

  // city-hub: mirrors app/(main)/cities/[city]/page.tsx's structure — airport
  // facts computed from data/hotels.ts/data/airports.ts, hotel table read
  // directly from data/hotels.ts (never re-authored in Arabic), prose facts
  // from cityAirportFactsAr (a translation of cityAirportFacts, not new text).
  let hubCity: ReturnType<typeof getCity> | undefined;
  let hubAirport: ReturnType<typeof getAirport> | undefined;
  let hubHotels: ReturnType<typeof hotelsForCity> = [];
  let hubFacts: (typeof cityAirportFactsAr)[string] | undefined;
  let hubDistanceRange: { min: number; max: number } | null = null;
  let hubDurationRange: { min: number; max: number } | null = null;
  if (page.type === "city-hub") {
    const citySlug = citySlugFor(page);
    hubCity = getCity(citySlug);
    hubAirport = hubCity?.nearestAirportSlug ? getAirport(hubCity.nearestAirportSlug) : undefined;
    hubHotels = hotelsForCity(citySlug);
    hubFacts = cityAirportFactsAr[citySlug];
    const distances = hubHotels.map((h) => h.distanceKm);
    const durations = hubHotels.map((h) => h.durationMin);
    hubDistanceRange = distances.length > 0 ? { min: Math.min(...distances), max: Math.max(...distances) } : null;
    hubDurationRange = durations.length > 0 ? { min: Math.min(...durations), max: Math.max(...durations) } : null;
  }

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(page.breadcrumbs),
          serviceSchema({
            name: page.h1,
            description: page.intro,
            path: arPath(page),
            serviceType: serviceTypeFor(page.type),
            areaServed: "المملكة العربية السعودية",
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={page.h1}
        subtitle={page.intro}
        crumbs={page.breadcrumbs}
        backgroundImage={page.heroImage ?? heroFor(page)}
        backgroundAlt={page.heroAlt ?? page.h1}
        ctaLabel={dict.cta.getAQuote}
        contactLabel={dict.cta.contactUs}
        contactHref="/ar/اتصل-بنا"
        showCtas={!isBookable}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            {(page.distance || page.duration) && (
              <div className="flex flex-wrap gap-3">
                {page.duration && (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                    <Clock className="size-4 text-gold" /> {page.duration}
                  </span>
                )}
                {page.distance && (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                    <MapPin className="size-4 text-gold" /> {page.distance}
                  </span>
                )}
              </div>
            )}

            {page.type === "city-hub" && hubCity && hubAirport ? (
              <div className="mt-6 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">
                    أساسيات النقل من مطار {hubCity.name}
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {hubDistanceRange && hubDurationRange && (
                      <div className="rounded-xl border border-border bg-muted/40 p-5">
                        <h3 className="font-semibold text-navy">المسافة من {hubAirport.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          فنادقنا في {hubCity.name} ({hubHotels.length}) تبعد بين {hubDistanceRange.min}
                          {hubDistanceRange.min === hubDistanceRange.max ? "" : `–${hubDistanceRange.max}`} كم عن{" "}
                          {hubAirport.name} ({hubAirport.code}) — نحو {hubDurationRange.min}
                          {hubDurationRange.min === hubDurationRange.max ? "" : `–${hubDurationRange.max}`} دقيقة
                          بالسيارة، حسب حركة السير.
                        </p>
                      </div>
                    )}
                    <div className="rounded-xl border border-border bg-muted/40 p-5">
                      <h3 className="font-semibold text-navy">صالات {hubAirport.name}</h3>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {hubAirport.terminals.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    {hubFacts?.dropoffConstraint && (
                      <div className="rounded-xl border border-border bg-muted/40 p-5">
                        <h3 className="font-semibold text-navy">نقطة النزول</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{hubFacts.dropoffConstraint}</p>
                      </div>
                    )}
                    {hubFacts?.miqat && (
                      <div className="rounded-xl border border-border bg-muted/40 p-5">
                        <h3 className="font-semibold text-navy">الميقات</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{hubFacts.miqat}</p>
                      </div>
                    )}
                    {hubFacts?.seasonal && (
                      <div className="rounded-xl border border-border bg-muted/40 p-5 sm:col-span-2">
                        <h3 className="font-semibold text-navy">التوقيت الموسمي</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{hubFacts.seasonal}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div id="hotels" className="scroll-mt-20">
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">
                    كل فنادق {hubCity.name} التي ننقل إليها
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {hubHotels.length} فندقًا، بالاتجاهين، سعر ثابت متفق عليه قبل السفر.
                  </p>
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-white">
                    <table className="w-full min-w-[640px] text-right text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wide text-navy">
                          <th className="px-4 py-3">الفندق</th>
                          <th className="px-4 py-3">الحي</th>
                          <th className="px-4 py-3">النجوم</th>
                          <th className="px-4 py-3">المسافة</th>
                          <th className="px-4 py-3">المدة</th>
                          <th className="px-4 py-3">عرض السعر</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hubHotels.map((h) => (
                          <tr key={h.slug} className="border-b border-border last:border-0">
                            <td className="px-4 py-3 font-medium text-navy">{h.name}</td>
                            <td className="px-4 py-3 text-muted-foreground">{h.area}</td>
                            <td className="px-4 py-3 text-muted-foreground">{h.stars}★</td>
                            <td className="px-4 py-3 text-muted-foreground">{h.distanceKm} كم</td>
                            <td className="px-4 py-3 text-muted-foreground">{h.durationMin} دقيقة</td>
                            <td className="px-4 py-3">
                              <a
                                href={`/get-quote?pickup=${encodeURIComponent(hubAirport.name)}&dropoff=${encodeURIComponent(h.name)}`}
                                className="font-semibold text-navy underline decoration-dotted hover:text-gold"
                              >
                                {dict.cta.getAQuote}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : page.contentHtml ? (
              <div className="mt-6">
                <BlogContent html={page.contentHtml} />
              </div>
            ) : (
              <div className="mt-6 space-y-8">
                {page.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {isBookable && (
            <div className="lg:col-span-2">
              <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy">{dict.cta.getAQuote}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  سعر ثابت لرحلتك، نرد عليك عبر واتساب.
                </p>
                <div className="mt-4">
                  <QuoteForm serviceType={page.h1} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <VehicleOptions
        heading="اختر مركبتك"
        subheading="من السيارات الاقتصادية إلى الحافلات الصغيرة الجماعية — اختر ما يناسب مجموعتك وأمتعتك."
        background="muted"
      />
      <HowItWorks
        heading={dict.howItWorks.heading}
        subheading={dict.howItWorks.subheading}
        steps={dict.howItWorks.steps}
        stepLabel={(n) => dict.howItWorks.step.replace("{n}", String(n))}
        background="white"
      />
      <FAQSection faqs={faqs} heading={dict.faq.heading} background="muted" />
      <CTASection
        title="هل أنت مستعد لحجز رحلتك؟"
        subtitle="أرسل تفاصيل رحلتك الآن واحصل على عرض سعر ثابت وسريع عبر واتساب."
        whatsappLabel={dict.cta.getAQuote}
        contactLabel={dict.cta.contactUs}
        contactHref="/ar/اتصل-بنا"
      />
    </>
  );
}
