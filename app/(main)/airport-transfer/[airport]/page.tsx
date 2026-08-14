import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plane, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { AirportGrid } from "@/components/sections/AirportGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { airports, getAirport } from "@/data/airports";
import { getRoute } from "@/data/routes";
import { getCity } from "@/data/cities";
import { hotelsForCity } from "@/data/hotels";
import { transfersForCity } from "@/lib/hotel-transfers";
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
    title:
      airport.metaTitle ??
      `${airport.city} Airport Transfer | Private Taxi (${airport.code})`,
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
  const pickupSteps = [
    { name: "Flight tracking begins", text: "We track your flight in real time from the moment you book, so we know your actual landing time even if it changes." },
    { name: "Driver meets you in arrivals", text: `Your driver waits in the arrivals hall at ${airport.name} with a name board, ready as soon as you clear customs.` },
    { name: "Luggage assistance", text: "Your driver helps carry your luggage from the arrivals hall to the vehicle." },
    { name: "Direct transfer to your destination", text: `You're driven directly to your hotel or destination in ${airport.city} at the fixed price agreed when you booked.` },
  ];
  // Real Airport → Hotel deep links, derived from the hotel-transfer engine so
  // they are always valid (empty for cities without hotels).
  const hotelLinks =
    airport.nearbyHotels ??
    (city
      ? transfersForCity(city.slug)
          .filter((t) => t.direction === "airport-to-hotel")
          .slice(0, 6)
          .map((t) => ({ name: t.to, href: t.path }))
      : []);
  const path = `/airport-transfer/${airport.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Airport Transfers", path: "/airport-transfers" },
    { name: `${airport.city} Airport`, path },
  ];

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

      <PageHeader
        title={`${airport.city} Airport Transfer (${airport.code})`}
        subtitle={airport.intro}
        crumbs={crumbs}
        backgroundImage={airport.heroImage ?? airportHero(airport.city).src}
        backgroundAlt={airport.heroAlt ?? airportHero(airport.city).alt}
        whatsappMessage={`Hello! I'd like an airport transfer from ${airport.name} (${airport.code}).`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            {/* Key takeaways — a scannable summary an AI system or a skimming reader can extract in one pass */}
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">Key takeaways</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-navy">
                <li>• Meet-and-greet pickup at {airport.name} ({airport.code}), with real-time flight tracking included.</li>
                <li>• Fixed price agreed before you travel — delays, immigration queues, and traffic don't change your fare.</li>
                <li>• {airport.terminals.length > 1 ? `${airport.terminals.length} terminals served` : "Single-terminal airport"}; tell us your flight number so your driver waits at the right one.</li>
                <li>• Popular onward destinations: {airport.popularDestinations.slice(0, 3).join(", ")}.</li>
                {airport.lastUpdated && <li>• Page reviewed {airport.lastUpdated}.</li>}
              </ul>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-navy">
              Private transfers from {airport.name}
            </h2>
            <p className="mt-3 text-muted-foreground">{airport.about}</p>

            <h2 className="mt-10 text-xl font-bold text-navy">
              How airport pickup works
            </h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {pickupSteps.map((s, i) => (
                <li key={s.name} className="flex items-start gap-2 text-sm text-navy">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">{i + 1}</span>
                  {s.name}
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-xl font-bold text-navy">Terminals served</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {airport.terminals.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm text-navy"
                >
                  <Plane className="size-3.5 text-gold" />
                  {t}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-bold text-navy">
              Popular destinations from {airport.city} airport
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {airport.popularRoutes
                ? airport.popularRoutes.map((routeSlug) => {
                    const r = getRoute(routeSlug);
                    if (!r) return null;
                    return (
                      <li key={routeSlug}>
                        <Link
                          href={`/routes/${routeSlug}`}
                          className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy transition hover:border-gold hover:text-gold"
                        >
                          <ArrowRight className="size-4 shrink-0 text-gold" />
                          {airport.city} Airport to {r.to}
                        </Link>
                      </li>
                    );
                  })
                : airport.popularDestinations.map((dest) => (
                    <li
                      key={dest}
                      className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy"
                    >
                      <ArrowRight className="size-4 text-gold" />
                      {airport.city} Airport to {dest}
                    </li>
                  ))}
            </ul>

            {city && (
              <div className="mt-10 rounded-xl border border-border bg-muted/40 p-5">
                <h2 className="text-lg font-bold text-navy">
                  Taxi service in {city.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Need rides around the city too? Explore our full {city.name}{" "}
                  taxi service for hotel transfers, business travel, and local trips.
                </p>
                <Link
                  href={`/taxi-service/${city.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
                >
                  View {city.name} taxi service
                  <ArrowRight className="size-4" />
                </Link>
                {hotelsForCity(city.slug).length > 0 && (
                  <Link
                    href={`/cities/${city.slug}`}
                    className="mt-2 flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
                  >
                    Browse all {city.name} hotel transfers
                    <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            )}

            {/* Rich long-form airport guide sections */}
            {airport.sections && airport.sections.length > 0 && (
              <div className="mt-10 space-y-8 [&_a]:font-medium [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-navy">
                {airport.sections.map((s) => (
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

            {/* Nearby hotels for internal linking */}
            {hotelLinks.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy">
                  Popular hotel transfers from {airport.city} airport
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {hotelLinks.map((h) => (
                    <li key={h.name}>
                      {h.href ? (
                        <Link
                          href={h.href}
                          className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-navy hover:border-gold hover:text-gold"
                        >
                          <ArrowRight className="size-4 text-gold" />
                          {h.name}
                        </Link>
                      ) : (
                        <span className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy">
                          <ArrowRight className="size-4 text-gold" />
                          {h.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                Book {airport.city} Airport Transfer
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Add your flight number for meet-and-greet pickup.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${airport.city} airport transfer`}
                  city={airport.city}
                  defaultPickup={`${airport.name} (${airport.code})`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery
        images={airport.images}
        heading={`${airport.city} Airport in Pictures`}
        subheading={`A look at ${airport.name} and the journey into ${airport.city}.`}
        background="white"
      />

      <VehicleOptions background="muted" />
      <TrustSection background="white" />
      <HowItWorks background="muted" />

      {airport.popularRoutes && airport.popularRoutes.length > 0 && (
        <RouteGrid
          background="white"
          heading={`Popular Onward Transfers from ${airport.city} Airport`}
          subheading={`Fixed-price private long-distance transfers directly from ${airport.name}.`}
          only={airport.popularRoutes}
        />
      )}

      <AirportGrid
        background="muted"
        exclude={airport.slug}
        heading="Other Saudi Airport Transfers"
        subheading="We cover meet-and-greet pickups at every major airport in the Kingdom."
      />
      <FAQSection faqs={faqs} background="muted" />
      <LatestGuides background="white" />
      <CTASection
        title={`Book Your ${airport.city} Airport Taxi`}
        whatsappMessage={`Hello! I'd like to book an airport transfer from ${airport.city} airport.`}
      />
    </>
  );
}
