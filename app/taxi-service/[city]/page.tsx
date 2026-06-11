import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plane, MapPin, ArrowRight, CircleCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { CityGrid } from "@/components/sections/CityGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { cities, getCity } from "@/data/cities";
import { getAirport } from "@/data/airports";
import { cityHero } from "@/lib/hero";
import type { Faq } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  taxiServiceSchema,
} from "@/lib/schema";

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
  return buildMetadata({
    title: city.metaTitle ?? `${city.name} Taxi Service | Airport & City Transfers`,
    description:
      city.metaDescription ??
      `Book reliable ${city.name} taxi service for airport pickups, hotel transfers, and intercity rides across Saudi Arabia.`,
    path: `/taxi-service/${city.slug}`,
  });
}

function cityFaqs(name: string): Faq[] {
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

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const airport = city.nearestAirportSlug
    ? getAirport(city.nearestAirportSlug)
    : undefined;
  const faqs = cityFaqs(city.name);
  const path = `/taxi-service/${city.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "City Transfers", path: "/city-transfers" },
    { name: `${city.name} Taxi`, path },
  ];
  const relatedCities = city.popularDestinations
    .map((d) => cities.find((c) => c.name.toLowerCase() === d.toLowerCase())?.slug)
    .filter((s): s is string => Boolean(s) && s !== city.slug);

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
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title={`Taxi Service in ${city.name}`}
        subtitle={city.intro}
        crumbs={crumbs}
        backgroundImage={city.heroImage ?? cityHero(city.slug, city.name).src}
        backgroundAlt={city.heroAlt ?? cityHero(city.slug, city.name).alt}
        whatsappMessage={`Hello! I'd like a taxi quote in ${city.name}, Saudi Arabia.`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-navy">
              Private Taxi Service in {city.name}
            </h2>
            <p className="mt-3 text-muted-foreground">{city.about}</p>
            <p className="mt-3 text-muted-foreground">
              We provide reliable private taxi booking in {city.name} for local and
              long-distance travel. Whether you need a quick city ride or a full-day
              transfer, request a quote through WhatsApp or our booking form for a
              fixed price.
            </p>

            <h2 className="mt-10 text-xl font-bold text-navy">
              Why book your {city.name} taxi with us
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {city.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-navy">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-bold text-navy">
              Popular pickup &amp; drop-off points in {city.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {city.landmarks.map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm text-navy"
                >
                  <MapPin className="size-3.5 text-gold" />
                  {l}
                </span>
              ))}
            </div>

            {airport && (
              <div className="mt-10 rounded-xl border border-border bg-muted/40 p-5">
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <Plane className="size-5 text-gold" />
                  Airport transfers from {city.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get private airport pickup and drop-off via {airport.name} (
                  {airport.code}) with professional drivers and timely service.
                </p>
                <Link
                  href={`/airport-transfer/${airport.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
                >
                  View {city.name} airport transfers
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            )}

            <h2 className="mt-10 text-xl font-bold text-navy">
              Popular routes from {city.name}
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {city.popularDestinations.map((dest) => (
                <li
                  key={dest}
                  className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy"
                >
                  <ArrowRight className="size-4 text-gold" />
                  {city.name} to {dest}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">
                Get a {city.name} Taxi Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Send your trip details — fixed price on WhatsApp.
              </p>
              <div className="mt-4">
                <QuoteForm
                  serviceType={`${city.name} city taxi`}
                  city={city.name}
                  defaultPickup={city.name}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VehicleOptions background="muted" />
      <HowItWorks background="white" />

      {relatedCities.length > 0 && (
        <CityGrid
          background="muted"
          heading={`Other Cities Near ${city.name}`}
          subheading="Explore taxi services in nearby and connected destinations."
          only={relatedCities}
        />
      )}

      <FAQSection faqs={faqs} background="white" />
      <LatestGuides background="muted" />
      <CTASection
        title={`Book Your ${city.name} Taxi Today`}
        whatsappMessage={`Hello! I'd like to book a taxi in ${city.name}.`}
      />
    </>
  );
}
