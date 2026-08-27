import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plane, ArrowRight, CircleCheck, Building2, Clock, MapPin } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { routes } from "@/data/routes";
import { hotelsForCity } from "@/data/hotels";
import { cityHero } from "@/lib/hero";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import {
  breadcrumbSchema,
  serviceSchema,
  taxiServiceSchema,
  faqSchema,
} from "@/lib/schema";
import { citiesWithHotels, airportTransferName } from "@/lib/hotel-transfers";
import { cityAirportFacts } from "@/lib/city-hub-facts";

type Params = { city: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return citiesWithHotels().map((city) => ({ city }));
}

// Hand-written per-city metadata for the 5 hotel-transfer hub pages. Distinct
// from both /taxi-service/{city} (general city taxi intent) and
// /airport-transfer/{airport} (general airport intent) — these pages are
// specifically about the hotel<->airport leg, so the metadata leads with that.
const HUB_META: Record<string, { title: string; description: string }> = {
  jeddah: {
    title: "Jeddah Hotel Transfers – Private Airport Pickup (JED)",
    description:
      "Book a private transfer between Jeddah's King Abdulaziz Airport and your hotel. Fixed price, meet-and-greet, and flight tracking for every stay.",
  },
  riyadh: {
    title: "Riyadh Hotel Transfers – Private Airport Pickup (RUH)",
    description:
      "Book a private transfer between King Khalid International Airport and your Riyadh hotel. Fixed price, meet-and-greet, flight tracking included.",
  },
  makkah: {
    title: "Makkah Hotel Transfers – Private Pickup from Jeddah Airport",
    description:
      "Book a private transfer from Jeddah Airport to your Makkah hotel near the Haram. Fixed price, meet-and-greet, and pilgrim-friendly vehicles.",
  },
  madinah: {
    title: "Madinah Hotel Transfers – Private Airport Pickup (MED)",
    description:
      "Book a private transfer between Prince Mohammad bin Abdulaziz Airport and your Madinah hotel near the Prophet's Mosque. Fixed price, 24/7.",
  },
  dammam: {
    title: "Dammam Hotel Transfers – Private Airport Pickup (DMM)",
    description:
      "Book a private transfer between King Fahd International Airport and your Dammam hotel. Fixed price, meet-and-greet, flight tracking included.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const airport = city.nearestAirportSlug ? getAirport(city.nearestAirportSlug) : undefined;
  const aName = airport ? airportTransferName(airport) : `${city.name} Airport`;
  const path = `/cities/${city.slug}`;
  const arPath = getArPathForEnPath(path);
  const hub = HUB_META[city.slug];
  return buildMetadata({
    title: hub?.title ?? `${city.name} Airport Transfers | Hotel Taxi from ${aName}`,
    description:
      hub?.description ??
      `Private ${city.name} airport transfers between ${aName} and every major 3, 4 & 5-star hotel. Fixed prices, meet & greet, flight tracking, and 24/7 booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function fallbackHubFaqs(cityName: string, aName: string): Faq[] {
  return [
    {
      question: `How do I book an airport transfer in ${cityName}?`,
      answer: `Choose your hotel route below, or send your flight number, arrival date, and hotel on WhatsApp or the quote form. We reply with a fixed price for your private ${aName} transfer.`,
    },
    {
      question: `Do you cover every hotel in ${cityName}?`,
      answer: `We operate transfers to all major 3, 4, and 5-star hotels in ${cityName}. If your hotel isn't listed, send us the address and we'll arrange a private transfer to the door.`,
    },
    {
      question: `Is the transfer from ${aName} private?`,
      answer: `Yes. Every ${cityName} airport transfer is a private, direct ride for your booking only — no shared vehicles and no waiting for other passengers.`,
    },
    {
      question: `What if my flight is delayed?`,
      answer: `We track your flight and adjust the pickup time automatically, with free waiting time included, so a delay never costs you the ride.`,
    },
    {
      question: `Can I book a return transfer back to ${aName}?`,
      answer: `Yes. Every hotel has a matching return route back to ${aName}. Open any route page and follow the link to its reverse transfer.`,
    },
  ];
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const airport = city.nearestAirportSlug ? getAirport(city.nearestAirportSlug) : undefined;
  if (!airport) notFound();

  const aName = airportTransferName(airport);
  const hotels = hotelsForCity(city.slug);
  const facts = cityAirportFacts[city.slug];

  // Real distance/duration range, computed from data/hotels.ts (never invented).
  const distances = hotels.map((h) => h.distanceKm);
  const durations = hotels.map((h) => h.durationMin);
  const distanceRange =
    distances.length > 0 ? { min: Math.min(...distances), max: Math.max(...distances) } : null;
  const durationRange =
    durations.length > 0 ? { min: Math.min(...durations), max: Math.max(...durations) } : null;

  const path = `/cities/${city.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Airport Transfers", path: "/airport-transfers" },
    { name: `${city.name} Hotel Transfers`, path },
  ];

  // Popular tourist / intercity routes touching this city.
  const cityRoutes = routes
    .filter((r) => r.relatedCitySlugs.includes(city.slug))
    .map((r) => r.slug);

  const faqs = (city.hubFaqs ?? fallbackHubFaqs(city.name, aName)).slice(0, 12);

  const hotelCount = hotels.length;

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          taxiServiceSchema(),
          serviceSchema({
            name: `${city.name} Airport Hotel Transfers`,
            description: `Private airport transfers between ${airport.name} (${airport.code}) and hotels across ${city.name}.`,
            path,
            serviceType: "Airport Transfer",
            areaServed: `${city.name}, Saudi Arabia`,
            dateModified: city.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={`${city.name} Airport Transfers`}
        subtitle={`Private transfers between ${airport.name} (${airport.code}) and every major hotel in ${city.name} — fixed prices, meet & greet, and 24/7 booking.`}
        crumbs={crumbs}
        backgroundImage={city.heroImage ?? cityHero(city.slug, city.name).src}
        backgroundAlt={city.heroAlt ?? cityHero(city.slug, city.name).alt}
        whatsappMessage={`Hello! I'd like an airport transfer quote in ${city.name}, Saudi Arabia.`}
      />

      {/* Intro / overview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-gold/30 bg-gold/5 p-5 text-left">
            <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
              Key takeaways
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm text-navy">
              <li>
                • Private, fixed-price transfers between {airport.name} ({airport.code})
                and {hotelCount} hotels across {city.name}, in both directions.
              </li>
              <li>• Meet-and-greet pickup with real-time flight tracking on arrival.</li>
              <li>• Return transfers back to the airport are available for every hotel route.</li>
              {city.lastUpdated && <li>• Page reviewed {city.lastUpdated}.</li>}
            </ul>
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Private hotel transfers from {airport.name}
            </h2>
            <p className="mt-4 text-muted-foreground">
              We connect {airport.name} ({airport.code}) with {hotelCount} of the
              most-requested hotels in {city.name}, in both directions. Every ride
              is private and door-to-door, with a professional chauffeur, a fixed
              price agreed before you travel, and meet-and-greet pickup for arrivals.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
            {[
              "Meet & greet in the arrivals hall",
              "Real-time flight monitoring",
              "Free waiting time on airport pickups",
              "Fixed prices — no surge, no meter",
              "Family vehicles and group vans",
              "24/7 WhatsApp booking",
            ].map((h) => (
              <div key={h} className="flex items-start gap-2 text-sm text-navy">
                <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                {h}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            <Link
              href={`/airport-transfer/${airport.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
            >
              <Plane className="size-4 text-gold" />
              {city.name} airport transfer overview
              <ArrowRight className="size-4 text-gold" />
            </Link>
            <Link
              href={`/taxi-service/${city.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
            >
              <Building2 className="size-4 text-gold" />
              {city.name} city taxi service
              <ArrowRight className="size-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* Airport-transfer facts — sourced only from data/hotels.ts,
          data/airports.ts, and existing route pages (see cityAirportFacts
          above). Renders nothing for a city with no facts on file yet. */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {city.name} airport transfer essentials
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {distanceRange && durationRange && (
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  <MapPin className="size-4 text-gold" /> Distance from {airport.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our {hotelCount} {city.name} hotels sit between {distanceRange.min}
                  {distanceRange.min === distanceRange.max ? "" : `–${distanceRange.max}`} km
                  from {airport.name} ({airport.code}) — roughly {durationRange.min}
                  {durationRange.min === durationRange.max ? "" : `–${durationRange.max}`} minutes
                  by car, depending on traffic.
                </p>
              </div>
            )}

            <div className="rounded-xl border border-border bg-muted/40 p-5">
              <h3 className="flex items-center gap-2 font-semibold text-navy">
                <Clock className="size-4 text-gold" /> Terminals at {airport.name}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {airport.terminals.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            {facts?.dropoffConstraint && (
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold text-navy">Drop-off</h3>
                <p className="mt-2 text-sm text-muted-foreground">{facts.dropoffConstraint}</p>
              </div>
            )}

            {facts?.miqat && (
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h3 className="font-semibold text-navy">Miqat</h3>
                <p className="mt-2 text-sm text-muted-foreground">{facts.miqat}</p>
              </div>
            )}

            {facts?.seasonal && (
              <div className="rounded-xl border border-border bg-muted/40 p-5 sm:col-span-2">
                <h3 className="font-semibold text-navy">Seasonal timing</h3>
                <p className="mt-2 text-sm text-muted-foreground">{facts.seasonal}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Every hotel in this city, one row each — replaces the 2 (or fewer)
          per-hotel pages that now redirect here. */}
      <section id="hotels" className="bg-muted py-16 sm:py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Every {city.name} hotel we transfer to
          </h2>
          <p className="mt-3 text-muted-foreground">
            {hotelCount} hotels, both directions, fixed price agreed before you travel.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wide text-navy">
                  <th className="px-4 py-3">Hotel</th>
                  <th className="px-4 py-3">District</th>
                  <th className="px-4 py-3">Stars</th>
                  <th className="px-4 py-3">Distance</th>
                  <th className="px-4 py-3">Duration</th>
                  <th className="px-4 py-3">Quote</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((h) => (
                  <tr key={h.slug} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium text-navy">{h.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{h.area}</td>
                    <td className="px-4 py-3 text-muted-foreground">{h.stars}★</td>
                    <td className="px-4 py-3 text-muted-foreground">{h.distanceKm} km</td>
                    <td className="px-4 py-3 text-muted-foreground">{h.durationMin} min</td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/get-quote?pickup=${encodeURIComponent(airport.name)}&dropoff=${encodeURIComponent(h.name)}`}
                        className="font-semibold text-navy underline decoration-dotted hover:text-gold"
                      >
                        Get a quote
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />

      {/* Popular tourist / intercity destinations from this city */}
      {cityRoutes.length > 0 && (
        <RouteGrid
          background="muted"
          heading={`Popular Destinations from ${city.name}`}
          subheading="Private intercity and tourist transfers beyond the airport run."
          only={cityRoutes}
        />
      )}

      <FAQSection faqs={faqs} background="white" />
      <LatestGuides background="muted" pageKey={city.slug} />
      <CTASection
        title={`Book Your ${city.name} Airport Transfer`}
        whatsappMessage={`Hello! I'd like to book an airport transfer in ${city.name}.`}
      />
    </>
  );
}
