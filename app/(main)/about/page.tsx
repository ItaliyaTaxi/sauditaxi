import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { AboutServicePhilosophy } from "@/components/sections/AboutServicePhilosophy";
import { AboutWhyChooseUs } from "@/components/sections/AboutWhyChooseUs";
import { DestinationCards } from "@/components/sections/DestinationCards";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { AboutHowWeWork } from "@/components/sections/AboutHowWeWork";
import { AboutStats } from "@/components/sections/AboutStats";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { heroImages } from "@/lib/hero";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

// Canonical preserved exactly as before: https://saudiprivatetransfers.com/about
// Title/description refreshed to match the new content — no other SEO
// signals changed (canonical, alternates, robots all pass through unchanged).
export const metadata: Metadata = buildMetadata({
  title: "About Saudi Private Transfers | Private Transportation in Saudi Arabia",
  description:
    "Learn about Saudi Private Transfers and our approach to reliable private transportation across Saudi Arabia, including airport, intercity, hotel and pilgrim transfers.",
  path: "/about",
  alternateLanguages: { en: "/about", ar: "/ar/من-نحن" },
});

const featuredServiceSlugs = [
  "airport-transfers",
  "city-transfers",
  "intercity-transfers",
  "umrah-taxi-service",
];

const featuredDestinationSlugs = [
  "riyadh",
  "jeddah",
  "makkah",
  "madinah",
  "dammam",
  "alula",
  "taif",
  "abha",
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />

      <PageHeader
        title="About Saudi Private Transfers"
        subtitle="Private transportation across Saudi Arabia, built around reliable service, comfortable vehicles, professional drivers, and clear pricing."
        crumbs={crumbs}
        backgroundImage={heroImages.road}
        backgroundAlt="Private vehicle on a modern Saudi Arabia highway"
      />

      {/* Who We Are */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            A Private Transfer Service Built Around People
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              We help tourists, pilgrims, families, business travellers, and groups
              travel comfortably between airports, hotels, cities, holy sites, and
              destinations across the Kingdom.
            </p>
            <p>
              Saudi Private Transfers provides pre-booked private transportation for
              travellers moving around Saudi Arabia. Whether someone is landing for a
              short business trip, beginning a pilgrimage, or exploring the Kingdom
              with family, the same idea applies: a private vehicle, a driver who
              knows the route, and a price agreed before the journey starts.
            </p>
            <p>
              Customers arrange transportation for airport arrivals, hotel transfers,
              city journeys, and intercity travel, as well as Umrah, Hajj, and
              Ziyarat journeys, family and group trips, business travel, and selected
              cross-border routes. There is no app to install and no account to
              create — trip details are shared through WhatsApp or the quote form,
              and a fixed price is confirmed before travel.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            From Pilgrim Transfers to Nationwide Private Travel
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Our roots are in pilgrim transportation. The Jeddah Airport to Makkah
              transfer and the Makkah to Madinah journey remain among the most
              requested routes we run, and that experience with the pilgrim journey
              — coordinating airport arrivals, hotel pickups near the Haram, and the
              highway between the two holy cities — shaped how we approach every
              other kind of transfer.
            </p>
            <p>
              From that starting point, the service expanded into everyday airport
              transfers at Saudi Arabia&apos;s major gateways, then into intercity
              transportation between the Kingdom&apos;s cities, and into city and
              hotel transfers for travellers who need a private ride locally. As
              demand grew from families, tour groups, and business travellers, we
              added larger vehicles and group transportation, and extended coverage
              to more of the destinations travellers ask for across Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <ServiceCards
        heading="Helping Travellers Move Around Saudi Arabia"
        subheading="Private transportation for the journeys travellers need most across the Kingdom."
        only={featuredServiceSlugs}
      />

      {/* Our Service Philosophy */}
      <AboutServicePhilosophy />

      {/* Why Travellers Choose Us */}
      <AboutWhyChooseUs />

      {/* Saudi Arabia Coverage */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DestinationCards
            heading="Serving Travellers Across Saudi Arabia"
            subheading="From the major gateways of Riyadh, Jeddah, Madinah and Dammam to popular destinations such as AlUla, Taif and other cities across the Kingdom."
            only={featuredDestinationSlugs}
            background="white"
          />
          <div className="mt-2 text-center">
            <Link
              href="/city-transfers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold"
            >
              Explore All Destinations
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pilgrim Transportation */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Experienced With the Pilgrim Journey
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Saudi Arabia welcomes travellers undertaking Umrah and Hajj from
              around the world, and private transportation can help pilgrims
              coordinate the practical parts of that journey — moving between
              Jeddah Airport, Makkah, Madinah, hotels, Ziyarat locations, and other
              relevant destinations, with a driver who knows the route and the
              timing.
            </p>
            <p>
              This is especially useful for families, elderly travellers, and
              groups who want to coordinate transportation comfortably rather than
              manage it themselves at every stage. Our role is strictly the
              transportation: we do not provide religious guidance, and we do not
              claim official Hajj or Umrah authorisation — our focus is getting
              pilgrims where they need to go, comfortably and on time.
            </p>
          </div>
          <div className="mt-7">
            <Link
              href="/umrah-taxi-service"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-md shadow-gold/20 transition-colors hover:bg-gold/90"
            >
              Explore Umrah Transportation
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <VehicleOptions
        heading="Vehicles for Different Types of Journeys"
        subheading="From economy sedans to group minibuses — the vehicle is matched to your group size, luggage, and journey."
        background="white"
      />

      {/* How We Work */}
      <AboutHowWeWork />

      {/* Trust / verified numbers */}
      <AboutStats />

      {/* Testimonials */}
      <TestimonialSection
        heading="What Our Customers Say"
        subheading="Real feedback from travellers who have booked a private transfer with us."
        limit={4}
      />

      {/* Final CTA */}
      <CTASection
        title="Planning Your Journey Across Saudi Arabia?"
        subtitle="Tell us where you're travelling from and where you're going, and we'll help arrange your private transfer."
      />
    </>
  );
}
