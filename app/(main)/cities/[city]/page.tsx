import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plane, ArrowRight, CircleCheck, Building2, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { HotelTransferGrid } from "@/components/sections/HotelTransferGrid";
import { HotelTransferExplorer } from "@/components/sections/HotelTransferExplorer";
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
import {
  citiesWithHotels,
  transfersForCity,
  airportTransferName,
} from "@/lib/hotel-transfers";

type Params = { city: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return citiesWithHotels().map((city) => ({ city }));
}

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
  return buildMetadata({
    title: `${city.name} Airport Transfers | Hotel Taxi from ${aName}`,
    description: `Private ${city.name} airport transfers between ${aName} and every major 3, 4 & 5-star hotel. Fixed prices, meet & greet, flight tracking, and 24/7 booking.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function hubFaqs(cityName: string, aName: string): Faq[] {
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
  const transfers = transfersForCity(city.slug);
  const hotels = hotelsForCity(city.slug);

  const path = `/cities/${city.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Airport Transfers", path: "/airport-transfers" },
    { name: `${city.name} Hotel Transfers`, path },
  ];

  // Featured: 5-star airport → hotel routes.
  const featured = transfers
    .filter((t) => t.direction === "airport-to-hotel" && t.hotel.stars === 5)
    .slice(0, 6);

  // Recently added: the last hotels in the data file, airport → hotel direction.
  const recentSlugs = hotels.slice(-3).map((h) => h.slug);
  const recent = transfers.filter(
    (t) => t.direction === "airport-to-hotel" && recentSlugs.includes(t.hotel.slug)
  );

  // Popular tourist / intercity routes touching this city.
  const cityRoutes = routes
    .filter((r) => r.relatedCitySlugs.includes(city.slug))
    .map((r) => r.slug);

  const faqs = hubFaqs(city.name, aName).slice(0, 6);

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
          <div className="mx-auto max-w-3xl text-center">
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

      {/* Featured 5-star transfers */}
      {featured.length > 0 && (
        <HotelTransferGrid
          background="muted"
          heading="Popular Hotel Transfers"
          subheading={`Our most-booked ${city.name} luxury airport transfers.`}
          transfers={featured}
        />
      )}

      {/* Full searchable / filterable listing with pagination */}
      <HotelTransferExplorer transfers={transfers} airportName={aName} />

      {/* Recently added */}
      {recent.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                <Sparkles className="size-6 text-gold" />
                Recently Added Routes
              </h2>
              <p className="mt-3 text-muted-foreground">
                The newest {city.name} hotel transfers in our network.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((t) => (
                <Link
                  key={t.path}
                  href={t.path}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                >
                  <span className="text-sm font-semibold text-navy">
                    {t.from} → {t.to}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-gold" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
      <LatestGuides background="muted" />
      <CTASection
        title={`Book Your ${city.name} Airport Transfer`}
        whatsappMessage={`Hello! I'd like to book an airport transfer in ${city.name}.`}
      />
    </>
  );
}
