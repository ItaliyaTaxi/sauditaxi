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

const heroFor = (page: ArPage): string => {
  if (page.type === "airport" || page.type === "hotel-transfer") return pageHeroes.airport;
  if (page.type === "attraction") return page.enPath.startsWith("/madinah/") ? pageHeroes.madinah : pageHeroes.makkah;
  if (page.type === "route" || page.type === "blog") return pageHeroes.makkah;
  if (page.type === "city") return pageHeroes.city;
  return pageHeroes.home;
};

const dict = getDictionary("ar");

export function generateStaticParams() {
  return arPages.map((p) => ({ slug: p.slug.split("/") }));
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
  const isBookable = ["service", "airport", "city", "route", "hotel-transfer", "attraction"].includes(page.type);

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

            {page.contentHtml ? (
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
