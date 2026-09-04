import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityHubView, type CityHubLinkItem, type CityHubRouteCard } from "@/components/city-hub/CityHubView";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { cities, getCity } from "@/data/cities";
import { getRoute } from "@/data/routes";
import { getAirport } from "@/data/airports";
import { hotelsForCity } from "@/data/hotels";
import { cityHero } from "@/lib/hero";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { getArPathForEnPath } from "@/data/translations/ar";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  taxiServiceSchema,
} from "@/lib/schema";

// City Hub redesign — "destination transportation guide" editorial
// identity (see components/city-hub/CityHubView.tsx), distinct from the
// Airport Hub's arrival-journey layout and the Border Hub's
// crossing-logistics layout. Same URL (/taxi-service/{city}), same
// canonical/hreflang. Content is drawn from the existing, already-unique
// per-city data in data/cities.ts (+ data/city-guides.ts) and
// data/routes.ts — this is a presentation/IA redesign, not a content
// rewrite, so no new facts are introduced.
type Params = { city: string };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const path = `/taxi-service/${city.slug}`;
  const arPath = getArPathForEnPath(path);
  return buildMetadata({
    title: city.metaTitle ?? `${city.name} Taxi Service | Airport & City Transfers`,
    description:
      city.metaDescription ??
      `Book reliable ${city.name} taxi service for airport pickups, hotel transfers, and intercity rides across Saudi Arabia.`,
    path,
    ...(arPath ? { alternateLanguages: { en: path, ar: arPath } } : {}),
  });
}

function fallbackCityFaqs(name: string): Faq[] {
  return [
    {
      question: `Do you provide taxi service in ${name}?`,
      answer: `Yes, we provide private taxi and transfer services in ${name} and the surrounding areas, available 24/7 with fixed quotes.`,
    },
    {
      question: `Can I book an airport transfer from ${name}?`,
      answer: `Yes, airport pickup and drop-off service is available in ${name} with meet-and-greet and flight tracking.`,
    },
    {
      question: `Can I travel from ${name} to another Saudi city?`,
      answer: `Yes, private intercity transfers are available from ${name} to all major cities across Saudi Arabia.`,
    },
    {
      question: `How do I get a quote for a taxi in ${name}?`,
      answer: `Send your pickup, drop-off, date, and passenger details on WhatsApp or through our quote form, and we reply with a fixed price.`,
    },
  ];
}

const BORDER_HINT = /bahrain|qatar|border|kuwait|uae|jordan/i;

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const airport = city.nearestAirportSlug ? getAirport(city.nearestAirportSlug) : undefined;
  const hotelCount = hotelsForCity(city.slug).length;
  const faqs = (city.faqs ?? fallbackCityFaqs(city.name)).slice(0, 15);
  const path = `/taxi-service/${city.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "City Transfers", path: "/city-transfers" },
    { name: `${city.name} Taxi`, path },
  ];

  const routes: CityHubRouteCard[] = (city.popularRoutes ?? [])
    .map((routeSlug): CityHubRouteCard | null => {
      const r = getRoute(routeSlug);
      if (!r) return null;
      return { from: r.from, to: r.to, distance: r.distance, duration: r.duration, href: `/routes/${routeSlug}` };
    })
    .filter((r): r is CityHubRouteCard => r !== null)
    .slice(0, 9);

  const nearbyCities: CityHubLinkItem[] = city.popularDestinations
    .map((d) => cities.find((c) => c.name.toLowerCase() === d.toLowerCase()))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .filter((c) => c.slug !== city.slug)
    .map((c) => ({ label: `${c.name} Taxi`, href: `/taxi-service/${c.slug}` }));

  const hasBorderRelevance =
    city.popularDestinations.some((d) => BORDER_HINT.test(d)) ||
    (city.popularRoutes ?? []).some((r) => BORDER_HINT.test(r));
  const isPilgrimGateway = ["makkah", "madinah", "jeddah"].includes(city.slug);

  const services: CityHubLinkItem[] = [
    { label: "City Transfers", href: "/city-transfers" },
    { label: "Airport Transfers", href: "/airport-transfers" },
    { label: "Intercity Transfers", href: "/intercity-transfers" },
    ...(isPilgrimGateway
      ? [
          { label: "Umrah Taxi Service", href: "/umrah-taxi-service" },
          { label: "Ziyarat Taxi Service", href: "/ziyarat-taxi-service" },
        ]
      : []),
    ...(hasBorderRelevance ? [{ label: "Border Transfers", href: "/border-transfers" }] : []),
  ];

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema(crumbs),
          taxiServiceSchema(),
          serviceSchema({
            name: `Taxi Service in ${city.name}`,
            description: city.intro,
            path,
            serviceType: "City Taxi Service",
            areaServed: `${city.name}, Saudi Arabia`,
            dateModified: city.lastUpdated,
          }),
          faqSchema(faqs),
        ]}
      />

      <CityHubView
        eyebrow={city.region}
        h1={`Private Transfers in ${city.name}`}
        dek={city.intro}
        heroImage={city.heroImage ?? cityHero(city.slug, city.name).src}
        heroAlt={city.heroAlt ?? cityHero(city.slug, city.name).alt}
        facts={[
          { label: "Region", value: city.region },
          ...(airport ? [{ label: "Nearest Airport", value: `${airport.code} · ${airport.name}` }] : []),
          ...(city.popularDestinations[0]
            ? [{ label: "Popular Corridor", value: `${city.name} ↔ ${city.popularDestinations[0]}` }]
            : []),
        ]}
        aboutHeading={`About Transfers in ${city.name}`}
        aboutParagraphs={[city.about, city.localInsight].filter((p): p is string => Boolean(p))}
        highlightsHeading={`Why Book a Private Transfer in ${city.name}`}
        highlights={city.highlights}
        routesHeading={routes.length > 0 ? `Popular Private Transfers from ${city.name}` : undefined}
        routesIntro={
          routes.length > 0
            ? `A selection of the most-requested long-distance journeys from ${city.name}.`
            : undefined
        }
        routes={routes}
        airportCard={
          airport
            ? {
                heading: "Airport Transfers",
                text: `Private meet-and-greet pickup and drop-off via ${airport.name} (${airport.code}), with flight tracking included.`,
                linkLabel: `View ${airport.city} airport transfers`,
                href: `/airport-transfer/${airport.slug}`,
              }
            : undefined
        }
        hotelsCard={
          hotelCount > 0
            ? {
                heading: "Hotel Transfers",
                text: `Fixed-price private transfers between the airport and ${hotelCount}+ hotels across ${city.name}.`,
                linkLabel: `Browse ${city.name} hotel transfers`,
                href: `/cities/${city.slug}#hotels`,
              }
            : undefined
        }
        landmarksHeading={`Common Pickup & Drop-off Points in ${city.name}`}
        landmarks={city.landmarks}
        nearbyCitiesHeading={nearbyCities.length > 0 ? "Nearby Cities" : undefined}
        nearbyCities={nearbyCities}
        servicesHeading="Related Services"
        services={services}
        faqsHeading={`Frequently Asked Questions About ${city.name} Transfers`}
        faqs={faqs}
        ctaHeading={`Ready to Book Your ${city.name} Transfer?`}
        ctaText="Share your pickup, destination, date, and passenger details — we reply with a fixed price before you travel."
        ctaLabel={`Get a ${city.name} Quote`}
        ctaHref={`/get-quote?pickup=${encodeURIComponent(city.name)}`}
        crumbs={crumbs}
      />
    </>
  );
}
