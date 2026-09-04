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
import { RouteCustomBody } from "@/components/routes/RouteBlocks";
import { RouteJourneyView } from "@/components/routes/RouteJourneyView";
import { AirportRouteView } from "@/components/routes/AirportRouteView";
import { getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { isDomesticCityRoute, isAirportToCityRoute, classifyRoute, journeyTypeLabels } from "@/lib/route-journey";
import { buildRouteBlocks, buildRouteFaqs } from "@/lib/route-composer";
import { airportRouteContent } from "@/data/airport-route-content";
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

  // Airport -> City commercial routes get the dedicated "Airport Arrival
  // Journey Guide" shell (components/routes/AirportRouteView.tsx), with
  // hand-written per-route content in data/airport-route-content.ts.
  if (isAirportToCityRoute(route) && airportRouteContent[route.slug]) {
    const content = airportRouteContent[route.slug];
    const airportSlug = route.slug.split("-to-")[0];
    const airport = getAirport(airportSlug);
    const destinationCity = getCity(
      route.relatedCitySlugs.find((s) => getCity(s)?.name.toLowerCase() === route.to.toLowerCase()) ??
        route.relatedCitySlugs[0] ??
        ""
    );
    const cityToAirportReverse = routes.find((r) => r.from === route.to && r.to === route.from);

    const relatedAirportRoutes = routes
      .filter(
        (r) =>
          r.slug !== route.slug &&
          isAirportToCityRoute(r) &&
          (r.from === route.from || r.to === route.to)
      )
      .slice(0, 4)
      .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

    const hubLinks = [
      ...(airport ? [{ label: `${airport.name} (${airport.code}) hub`, href: `/airport-transfer/${airport.slug}` }] : []),
      ...(destinationCity ? [{ label: `${destinationCity.name} taxi service`, href: `/taxi-service/${destinationCity.slug}` }] : []),
    ];

    const arrivalSteps = [
      {
        label: "Flight tracking begins",
        detail: "We track your flight from the moment you book, so the pickup time adjusts automatically to your actual landing time.",
      },
      { label: "Your driver meets you in arrivals", detail: content.arrivalPickup[0] },
      ...(content.arrivalPickup[1] ? [{ label: "What to expect", detail: content.arrivalPickup[1] }] : []),
      {
        label: "Direct transfer begins",
        detail: `Your driver helps with luggage and you're driven directly toward ${route.to}, at the fixed price agreed when you booked.`,
      },
    ];

    const bookingSteps = [
      { label: "Share your journey details", detail: `Flight number, arrival date and time, and your destination in ${route.to}.` },
      { label: "Receive a fixed price", detail: "Confirmed before you travel — no meter, no surge pricing." },
      { label: "Meet your driver on arrival", detail: "Your driver waits in the arrivals area, tracking your flight for any delay." },
      { label: "Travel directly to your destination", detail: "Door-to-door, with luggage assistance along the way." },
    ];

    const faqs = content.faqs;

    return (
      <>
        <SchemaScript
          schema={[
            breadcrumbSchema(crumbs),
            serviceSchema({
              name: `${route.from} to ${route.to} Airport Transfer`,
              description: route.intro,
              path,
              serviceType: "Airport Transfer",
              dateModified: route.lastUpdated,
            }),
            faqSchema(faqs),
          ]}
        />
        <AirportRouteView
          eyebrow="Airport Transfer"
          h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
          dek={content.intro}
          heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
          heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
          airportLabel={route.from}
          cityLabel={route.to}
          facts={[
            { label: "Road Distance", value: route.distance },
            { label: "Category", value: "Airport Transfer" },
          ]}
          journeyTimeHeading="Journey Time"
          pureDrivingLabel="Pure driving time"
          pureDrivingValue={route.duration}
          totalJourneyNote="This is driving time under normal conditions. Your total journey — including clearing customs, collecting luggage, and traffic — can run longer, so it's a baseline for the drive itself, not a door-to-door guarantee."
          arrivalHeading={`Arrival & Pickup at ${route.from}`}
          arrivalSteps={arrivalSteps}
          roadJourneyHeading="The Road Journey"
          roadJourneyParagraphs={content.roadJourney}
          destinationHeading={`Arriving in ${route.to}`}
          destinationParagraphs={content.destinationArrival}
          vehicleHeading="Vehicle & Luggage"
          vehicleText={content.vehicleLuggage}
          whoSuitsHeading="Who This Transfer Suits"
          whoSuits={content.whoSuits}
          comparisonHeading={content.comparison ? "Private Transfer vs Other Options" : undefined}
          comparisonIntro={content.comparison ? "A balanced look at the alternatives for this specific journey." : undefined}
          comparison={content.comparison}
          bookingHeading="How Booking Works"
          bookingSteps={bookingSteps}
          checklistHeading="What to Have Ready"
          checklist={content.checklist}
          reverseHeading={cityToAirportReverse ? "Planning the Return Journey" : undefined}
          reverseText={
            cityToAirportReverse
              ? `Need to get back to the airport afterward? We also provide a private transfer from ${cityToAirportReverse.from} to ${cityToAirportReverse.to}, timed to your departure flight.`
              : undefined
          }
          reverseLinkLabel={cityToAirportReverse ? `${cityToAirportReverse.from} to ${cityToAirportReverse.to}` : undefined}
          reverseHref={cityToAirportReverse ? `/routes/${cityToAirportReverse.slug}` : undefined}
          relatedRoutesHeading={relatedAirportRoutes.length > 0 ? "Related Airport Transfers" : undefined}
          relatedRoutes={relatedAirportRoutes}
          hubLinksHeading={hubLinks.length > 0 ? "You might also need:" : undefined}
          hubLinks={hubLinks}
          faqsHeading="Frequently Asked Questions"
          faqs={faqs}
          ctaHeading={`Ready to Book Your ${route.from} to ${route.to} Transfer?`}
          ctaText="Share your flight number and destination — we reply with a fixed price before you travel."
          ctaLabel="Get a Quote"
          ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
          formHeading={`${route.from} → ${route.to} Quote`}
          formSubheading="Fixed price for your airport transfer."
          formSlot={
            <QuoteForm
              serviceType={`${route.from} to ${route.to} transfer`}
              route={`${route.from} to ${route.to}`}
              defaultPickup={route.from}
              defaultDropoff={route.to}
            />
          }
          crumbs={crumbs}
        />
      </>
    );
  }

  // Phase 3: Saudi domestic city-to-city routes get the new journey-type
  // shell (components/routes/RouteJourneyView.tsx). Airport/border/
  // international routes fall through to the unchanged design below.
  if (isDomesticCityRoute(route)) {
    const journeyType = classifyRoute(route);
    const domesticFaqs = buildRouteFaqs(route, journeyType);
    const blocks =
      route.customLayout ?? buildRouteBlocks(route, journeyType, reverseRoute ? `/routes/${reverseRoute.slug}` : undefined);

    // Related-route links stay within the domestic city-to-city batch — a
    // Riyadh-to-Jeddah page shouldn't surface Riyadh-to-Bahrain just because
    // they share an origin; that's a different commercial intent (border
    // transfer), out of scope for this phase.
    const relatedRouteItems = relatedRoutes
      .map((s) => getRoute(s))
      .filter((r): r is NonNullable<typeof r> => r !== undefined)
      .filter((r) => isDomesticCityRoute(r))
      .map((r) => ({ label: `${r.from} to ${r.to}`, distance: r.distance, duration: r.duration, href: `/routes/${r.slug}` }));

    const relatedCityItems = route.relatedCitySlugs
      .map((s) => {
        const c = getCity(s);
        return c ? { label: `${c.name} Taxi`, href: `/taxi-service/${s}` } : null;
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

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
            faqSchema(domesticFaqs),
          ]}
        />
        <RouteJourneyView
          eyebrow={journeyTypeLabels[journeyType]}
          h1={route.h1 ?? `Private Transfer from ${route.from} to ${route.to}`}
          dek={route.intro}
          heroImage={route.heroImage ?? routeHero(route.from, route.to).src}
          heroAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
          facts={[
            { label: "Distance", value: route.distance },
            { label: "Typical Driving Time", value: route.duration },
            { label: "Journey Type", value: journeyTypeLabels[journeyType] },
          ]}
          from={route.from}
          to={route.to}
          blocks={blocks}
          pickupHeading="Pickup Locations"
          pickupPoints={activePickupPoints ?? []}
          dropoffHeading="Drop-off Locations"
          dropoffPoints={activeDropoffPoints ?? []}
          relatedRoutesHeading={relatedRouteItems.length > 0 ? "Related Routes" : undefined}
          relatedRoutes={relatedRouteItems}
          relatedCitiesHeading={relatedCityItems.length > 0 ? "Taxi Service in Cities on This Route" : undefined}
          relatedCities={relatedCityItems}
          faqsHeading="Frequently Asked Questions"
          faqs={domesticFaqs}
          ctaHeading="Planning This Journey?"
          ctaText={`Share your pickup time and passenger details for the ${route.from} to ${route.to} transfer — we reply with a fixed price.`}
          ctaLabel="Get a Quote"
          ctaHref={`/get-quote?pickup=${encodeURIComponent(route.from)}&dropoff=${encodeURIComponent(route.to)}`}
          formHeading={`${route.from} → ${route.to} Quote`}
          formSubheading="Fixed price for your private transfer."
          formSlot={
            <QuoteForm
              serviceType={`${route.from} to ${route.to} transfer`}
              route={`${route.from} to ${route.to}`}
              defaultPickup={route.from}
              defaultDropoff={route.to}
            />
          }
          crumbs={crumbs}
        />
      </>
    );
  }

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
        title={route.h1 ?? `${route.from} to ${route.to} Taxi Service`}
        subtitle={route.intro}
        crumbs={crumbs}
        backgroundImage={route.heroImage ?? routeHero(route.from, route.to).src}
        backgroundAlt={route.heroAlt ?? routeHero(route.from, route.to).alt}
        whatsappMessage={`Hello! I'd like a quote for a ${route.from} to ${route.to} taxi.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            {route.customLayout ? (
              <RouteCustomBody blocks={route.customLayout} from={route.from} to={route.to} />
            ) : (
              <>
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
              </>
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
      {!route.customLayout && <HowItWorks background="white" />}

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
