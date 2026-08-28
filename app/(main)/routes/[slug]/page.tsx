import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { routeHero } from "@/lib/hero";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { CityGrid } from "@/components/sections/CityGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { routes, getRoute } from "@/data/routes";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

type Params = { slug: string };

const pickupPoints = [
  "Airport",
  "Hotel",
  "Home address",
  "Business location",
  "Railway or bus station",
  "Religious site",
];
const dropoffPoints = [
  "Hotel",
  "Airport",
  "City center",
  "Religious destination",
  "Tourist location",
  "Border point",
];

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return {};
  const path = `/routes/${route.slug}`;
  const arPath = getArPathForEnPath(path);
  return buildMetadata({
    title:
      route.metaTitle ??
      `${route.from} to ${route.to} Taxi | Private Transfer`,
    description:
      route.metaDescription ??
      `Book a private ${route.from} to ${route.to} taxi (${route.distance}, approx. ${route.duration}). Fixed price, professional driver, easy WhatsApp booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function routeFaqs(from: string, to: string): Faq[] {
  return [
    {
      question: `How can I book a taxi from ${from} to ${to}?`,
      answer: `You can book by sending your trip details through WhatsApp or our quote form. We reply with a fixed price for the ${from} to ${to} transfer.`,
    },
    {
      question: `Is the ${from} to ${to} transfer private?`,
      answer: `Yes, the transfer is fully private for your booking — no shared rides and no waiting for other passengers.`,
    },
    {
      question: `Can I choose the vehicle type for ${from} to ${to}?`,
      answer: `Yes. You can request economy, comfort, business, SUV, van, or minibus depending on your group size and availability.`,
    },
  ];
}

export default async function RoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const faqs = (route.faqs ?? routeFaqs(route.from, route.to)).slice(0, 15);
  const rich = route.richLayout;
  const activePickupPoints = rich ? rich.pickupPoints : pickupPoints;
  const activeDropoffPoints = rich ? rich.dropoffPoints : dropoffPoints;
  const path = `/routes/${route.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Routes", path: "/intercity-transfers" },
    { name: `${route.from} to ${route.to}`, path },
  ];

  // 1. Find exact reverse route if it exists
  const reverseRoute = routes.find(
    (r) =>
      r.slug !== route.slug &&
      r.from.toLowerCase() === route.to.toLowerCase() &&
      r.to.toLowerCase() === route.from.toLowerCase()
  );

  // 2. Smart related routes prioritization:
  //    - Reverse route first
  //    - Shared origin routes
  //    - Shared destination routes
  //    - Regionally / contextually connected routes
  const candidateRoutes: string[] = [];
  if (reverseRoute) candidateRoutes.push(reverseRoute.slug);

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        r.slug !== reverseRoute?.slug &&
        r.from.toLowerCase() === route.from.toLowerCase()
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        r.slug !== reverseRoute?.slug &&
        r.to.toLowerCase() === route.to.toLowerCase() &&
        !candidateRoutes.includes(r.slug)
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        !candidateRoutes.includes(r.slug) &&
        (r.category === route.category ||
          r.relatedCitySlugs.some((c) => route.relatedCitySlugs.includes(c)))
    )
    .forEach((r) => candidateRoutes.push(r.slug));

  const relatedRoutes = candidateRoutes.slice(0, 6);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: `${route.from} to ${route.to} Taxi Transfer`,
            description: route.intro,
            path,
            serviceType: "Intercity Transfer",
            dateModified: route.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={`${route.from} to ${route.to} Taxi Service`}
        subtitle={route.intro}
        crumbs={crumbs}
        backgroundImage={route.heroImage ?? routeHero(route.from, route.to).src}
        backgroundAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
        whatsappMessage={`Hello! I'd like a quote for a ${route.from} to ${route.to} taxi.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
                Key takeaways
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-navy">
                <li>
                  • {route.from} to {route.to}: {route.distance}, approximately {route.duration} by private transfer.
                </li>
                <li>• Fixed price agreed before you travel — no meter, no surge, no toll surprises.</li>
                <li>• Door-to-door pickup and drop-off, available 24/7.</li>
                {route.lastUpdated && <li>• Page reviewed {route.lastUpdated}.</li>}
              </ul>
            </div>

            {rich && rich.journeyFlow.length > 0 && (
              <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-white p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  How This Journey Unfolds
                </h3>
                <ol className="mt-4 flex min-w-max items-stretch gap-2 sm:min-w-0 sm:flex-wrap">
                  {rich.journeyFlow.map((step, i) => (
                    <li key={step.label} className="flex items-center gap-2">
                      <div className="w-40 rounded-lg border border-gold/30 bg-gold/5 px-3 py-2.5 sm:w-44">
                        <p className="text-xs font-semibold text-navy">{step.label}</p>
                        {step.detail && (
                          <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{step.detail}</p>
                        )}
                      </div>
                      {i < rich.journeyFlow.length - 1 && (
                        <ArrowRight className="size-4 shrink-0 text-gold rtl:rotate-180" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {rich && rich.journeyFacts.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {rich.journeyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className={
                      fact.emphasis
                        ? "rounded-lg border border-gold/40 bg-gold/[0.06] p-4"
                        : "rounded-lg border border-border bg-muted/40 p-4"
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">{fact.value}</p>
                  </div>
                ))}
              </div>
            )}

            {rich && rich.mapOrigin && rich.mapDestination && (
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">Route Map</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-border shadow-sm">
                  <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]">
                    <iframe
                      title={`${route.from} to ${route.to} route map`}
                      src={`https://maps.google.com/maps?saddr=${encodeURIComponent(rich.mapOrigin)}&daddr=${encodeURIComponent(rich.mapDestination)}&output=embed`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 size-full border-0"
                    />
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{rich.mapNote}</p>
              </div>
            )}

            {reverseRoute && (
              <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  Return Journey Available
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Planning your return trip? We also provide private transfers in the opposite direction from{" "}
                  <Link
                    href={`/routes/${reverseRoute.slug}`}
                    className="font-semibold text-navy underline underline-offset-2 hover:text-gold"
                  >
                    {reverseRoute.from} to {reverseRoute.to}
                  </Link>{" "}
                  with fixed fares and door-to-door pickup.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <Clock className="size-4 text-gold" /> Approx. {route.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-navy">
                <MapPin className="size-4 text-gold" /> {route.distance}
              </span>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-navy">
              Private transfer from {route.from} to {route.to}
            </h2>
            <p className="mt-3 text-muted-foreground">{route.about}</p>
            {!rich?.hideGenericIntro && (
              <p className="mt-3 text-muted-foreground">
                Our private transfer service is suitable for tourists, families,
                business travellers, Umrah passengers, and groups travelling with
                luggage.
              </p>
            )}

            <h2 className="mt-10 text-xl font-bold text-navy">
              Good to know about this route
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {route.notes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-navy">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                  {n}
                </li>
              ))}
            </ul>

            {activePickupPoints && activeDropoffPoints && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <h3 className="font-semibold text-navy">Pickup locations</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {activePickupPoints.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <ArrowRight className="size-3.5 text-gold" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <h3 className="font-semibold text-navy">Drop-off locations</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {activeDropoffPoints.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <ArrowRight className="size-3.5 text-gold" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <h2 className="mt-10 text-xl font-bold text-navy">
              Booking details required
            </h2>
            <p className="mt-3 text-muted-foreground">
              To confirm your quote, please provide your pickup and drop-off
              locations, date and time, passenger and luggage count, your flight
              number if it&apos;s an airport pickup, and a contact number.
            </p>

            {/* Rich long-form sections (international / cross-border routes) */}
            {route.sections && route.sections.length > 0 && (
              <div className="mt-10 space-y-8 [&_a]:font-medium [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy">
                {route.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-navy sm:text-2xl">{s.heading}</h2>
                    <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                {route.from} → {route.to} Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fixed price for your private transfer on WhatsApp.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${route.from} to ${route.to} transfer`}
                  route={`${route.from} to ${route.to}`}
                  defaultPickup={route.from}
                  defaultDropoff={route.to}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />

      {relatedRoutes.length > 0 && (
        <RouteGrid
          background="muted"
          heading="Related Routes"
          subheading="Other popular private transfers you may need."
          only={relatedRoutes}
        />
      )}

      {route.relatedCitySlugs.length > 0 && (
        <CityGrid
          background="white"
          heading="Taxi Service in Cities on This Route"
          subheading="Local transfers in the cities connected by this journey."
          only={route.relatedCitySlugs}
        />
      )}

      <FAQSection faqs={faqs} background="muted" />
      <LatestGuides background="muted" pageKey={route.slug} />
      <CTASection
        title={`Book Your ${route.from} to ${route.to} Taxi`}
        whatsappMessage={`Hello! I'd like to book a ${route.from} to ${route.to} taxi.`}
      />
    </>
  );
}
