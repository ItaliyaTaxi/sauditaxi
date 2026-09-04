import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AirportHubView, type AirportHubRouteCard } from "@/components/airport-hub/AirportHubView";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { airports, getAirport } from "@/data/airports";
import { getRoute } from "@/data/routes";
import { getCity } from "@/data/cities";
import { hotelsForCity } from "@/data/hotels";
import { airportHero } from "@/lib/hero";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import {
  breadcrumbSchema,
  serviceSchema,
  taxiServiceSchema,
  faqSchema,
  howToSchema,
} from "@/lib/schema";

// Airport Hub redesign — "arrival journey planning" editorial identity
// (see components/airport-hub/AirportHubView.tsx), distinct from the City
// Hub's sidebar-facts layout and the Border Hub's crossing-logistics
// layout. Same URL (/airport-transfer/{airport}), same canonical/hreflang.
// Content is drawn from the existing, already-unique per-airport data in
// data/airports.ts (+ data/airport-guides.ts) and data/routes.ts.
type Params = { airport: string };

export function generateStaticParams() {
  return airports.map((a) => ({ airport: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { airport: slug } = await params;
  const airport = getAirport(slug);
  if (!airport) return {};
  const path = `/airport-transfer/${airport.slug}`;
  const arPath = getArPathForEnPath(path);
  return buildMetadata({
    title: airport.metaTitle ?? `${airport.city} Airport Transfer | Private Taxi (${airport.code})`,
    description:
      airport.metaDescription ??
      `Private ${airport.city} airport taxi from ${airport.name} (${airport.code}). Meet-and-greet pickup with fixed quotes.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function airportFaqs(a: { city: string; name: string; code: string }): Faq[] {
  return [
    {
      question: `Do you provide pickup at ${a.name}?`,
      answer: `Yes. We provide meet-and-greet pickup at ${a.name} (${a.code}) with a driver waiting in the arrivals hall and flight tracking included.`,
    },
    {
      question: `What happens if my flight to ${a.city} is delayed?`,
      answer: `We track your flight number and adjust the pickup time automatically, with free wait time, so a delay never costs you the ride.`,
    },
    {
      question: `Can you take me from ${a.city} airport to my hotel?`,
      answer: `Yes. We provide direct private transfers from ${a.name} to any hotel or address, with luggage assistance and a fixed price agreed in advance.`,
    },
    {
      question: `How do I book a ${a.city} airport taxi?`,
      answer: `Send your flight number, arrival date, and destination on WhatsApp or our quote form, and we confirm your transfer with a fixed quote.`,
    },
  ];
}

export default async function AirportPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { airport: slug } = await params;
  const airport = getAirport(slug);
  if (!airport) notFound();

  const city = airport.citySlug ? getCity(airport.citySlug) : undefined;
  const faqs = (airport.faqs ?? airportFaqs(airport)).slice(0, 15);
  const path = `/airport-transfer/${airport.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Airport Transfers", path: "/airport-transfers" },
    { name: `${airport.city} Airport`, path },
  ];

  const pickupSteps = [
    { name: "Flight tracking begins", text: "We track your flight in real time from the moment you book, so we know your actual landing time even if it changes." },
    { name: "Driver meets you in arrivals", text: `Your driver waits in the arrivals hall at ${airport.name} with a name board, ready as soon as you clear customs.` },
    { name: "Luggage assistance", text: "Your driver helps carry your luggage from the arrivals hall to the vehicle." },
    { name: "Direct transfer to your destination", text: `You're driven directly to your hotel or destination in ${airport.city} at the fixed price agreed when you booked.` },
  ];

  const routes: AirportHubRouteCard[] = (airport.popularRoutes ?? [])
    .map((routeSlug): AirportHubRouteCard | null => {
      const r = getRoute(routeSlug);
      if (!r) return null;
      return {
        label: `${airport.city} Airport to ${r.to}`,
        distance: r.distance,
        duration: r.duration,
        href: `/routes/${routeSlug}`,
      };
    })
    .filter((r): r is AirportHubRouteCard => r !== null)
    .slice(0, 9);

  const hotelNames =
    airport.nearbyHotels?.map((h) => h.name) ??
    (city ? hotelsForCity(city.slug).slice(0, 6).map((h) => h.name) : []);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          taxiServiceSchema(),
          serviceSchema({
            name: `${airport.city} Airport Transfer`,
            description: airport.intro,
            path,
            serviceType: "Airport Transfer",
            areaServed: `${airport.city}, Saudi Arabia`,
            dateModified: airport.lastUpdated,
          }),
          howToSchema({
            name: `How pickup works at ${airport.name}`,
            description: `Step-by-step process for a private airport transfer from ${airport.name} (${airport.code}).`,
            steps: pickupSteps,
          }),
          faqSchema(faqs),
        ]}
      />

      <AirportHubView
        eyebrow="Airport Transfer"
        h1={`${airport.city} Airport Transfer (${airport.code})`}
        dek={airport.intro}
        heroImage={airport.heroImage ?? airportHero(airport.city).src}
        heroAlt={airport.heroAlt ?? airportHero(airport.city).alt}
        facts={[
          { label: "IATA Code", value: airport.code },
          { label: "City", value: airport.city },
          {
            label: "Terminals",
            value: airport.terminals.length > 1 ? `${airport.terminals.length} terminals` : "Single terminal",
          },
        ]}
        journeyHeading="How Airport Pickup Works"
        journeySteps={pickupSteps.map((s) => ({ label: s.name, detail: s.text }))}
        terminalsHeading="Terminals Served"
        terminals={airport.terminals}
        routesHeading={routes.length > 0 ? `Popular Onward Transfers from ${airport.city} Airport` : undefined}
        routesIntro={
          routes.length > 0
            ? `Fixed-price private long-distance transfers directly from ${airport.name}.`
            : undefined
        }
        routes={routes}
        cityCard={
          city
            ? {
                heading: `Taxi Service in ${city.name}`,
                text: `Need rides around the city too? Explore our full ${city.name} taxi service for hotel transfers, business travel, and local trips.`,
                linkLabel: `View ${city.name} taxi service`,
                href: `/taxi-service/${city.slug}`,
                ...(hotelsForCity(city.slug).length > 0
                  ? { hotelsLabel: `Browse all ${city.name} hotel transfers`, hotelsHref: `/cities/${city.slug}#hotels` }
                  : {}),
              }
            : undefined
        }
        guideSections={airport.sections}
        hotelsHeading={hotelNames.length > 0 ? `Popular Hotel Transfers from ${airport.city} Airport` : undefined}
        hotels={hotelNames}
        faqsHeading={`Frequently Asked Questions About ${airport.city} Airport Transfers`}
        faqs={faqs}
        ctaHeading={`Ready to Book Your ${airport.city} Airport Transfer?`}
        ctaText="Add your flight number and destination — we reply with a fixed price and meet you in arrivals."
        ctaLabel={`Get a ${airport.city} Airport Quote`}
        ctaHref={`/get-quote?pickup=${encodeURIComponent(`${airport.name} (${airport.code})`)}`}
        crumbs={crumbs}
      />
    </>
  );
}
