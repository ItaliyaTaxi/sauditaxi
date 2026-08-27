import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { HeroQuickForm } from "@/components/HeroQuickForm";
import { heroImages } from "@/lib/hero";
import { buildMetadata } from "@/lib/seo";
import { HomeTrustBar } from "@/components/sections/HomeTrustBar";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { AirportGrid } from "@/components/sections/AirportGrid";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { DestinationCards } from "@/components/sections/DestinationCards";
import { HomeWhyChooseUs } from "@/components/sections/HomeWhyChooseUs";
import { HomeHowItWorks } from "@/components/sections/HomeHowItWorks";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faqs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Refresh hourly so the "Latest guides" block surfaces new posts (freshness signal).
export const revalidate = 3600;

// Metadata preserved exactly as before — the redesign does not change SEO signals.
export const metadata: Metadata = buildMetadata({
  title: "Private Transfers in Saudi Arabia | Airport, City & Border Taxi",
  description:
    "Book private transfers across Saudi Arabia — airport pickups, city rides, intercity routes, and border crossings. Fixed prices, professional drivers, 24/7.",
  path: "/",
  alternateLanguages: { en: "/", ar: "/ar" },
});

const featuredAirportSlugs = [
  "riyadh-airport",
  "jeddah-airport",
  "madinah-airport",
  "dammam-airport",
  "alula-airport",
  "abha-airport",
];

const featuredRouteSlugs = [
  "jeddah-to-makkah",
  "makkah-to-madinah",
  "jeddah-to-madinah",
  "riyadh-to-jeddah",
  "riyadh-to-dammam",
  "jeddah-to-taif",
  "riyadh-to-alula",
  "jeddah-to-alula",
  "jeddah-airport-to-jeddah",
  "madinah-airport-to-madinah",
  "riyadh-airport-to-riyadh",
];

const featuredDestinationSlugs = [
  "riyadh",
  "jeddah",
  "makkah",
  "madinah",
  "alula",
  "taif",
  "dammam",
  "abha",
];

const featuredServiceSlugs = [
  "airport-transfers",
  "intercity-transfers",
  "hotel-transfers",
  "city-transfers",
];

export default function HomePage() {
  return (
    <>
      {/* Homepage FAQ structured data (FAQPage). LocalBusiness, TaxiService,
          Organization, WebSite, and Review/AggregateRating schema render
          site-wide from the root layout — untouched by this redesign. */}
      <SchemaScript schema={[faqSchema(generalFaqs.slice(0, 6))]} />

      <HeroSection
        badge="Taxi Service in Saudi Arabia"
        title="Private Transfers Across Saudi Arabia"
        subtitle="Reliable airport, city-to-city and chauffeur transfers with professional drivers and comfortable private vehicles."
        points={["Private Vehicles", "Professional Drivers", "Fixed Pricing", "24/7 Support"]}
        whatsappMessage="Hello! I'd like a taxi quote in Saudi Arabia. My trip details are:"
        backgroundImage={heroImages.default}
        backgroundAlt="Premium private taxi and airport transfer service in Saudi Arabia"
        formCard={<HeroQuickForm />}
      />

      <HomeTrustBar />

      <ServiceCards
        heading="Our Saudi Transfer Services"
        subheading="From airport pickups to long-distance journeys, we make travelling across Saudi Arabia simple, comfortable and reliable."
        only={featuredServiceSlugs}
      />

      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AirportGrid
            heading="Saudi Arabia Airport Transfers"
            subheading="Pre-book a private transfer from Saudi Arabia's major airports to your hotel, city or destination."
            only={featuredAirportSlugs}
            background="muted"
          />
          <div className="mt-2 text-center">
            <Link
              href="/airport-transfers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold"
            >
              View All Airport Transfers
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RouteGrid
            heading="Popular Saudi Arabia Transfer Routes"
            subheading="Book a private transfer between some of Saudi Arabia's most popular destinations."
            only={featuredRouteSlugs}
            background="white"
          />
          <div className="mt-2 text-center">
            <Link
              href="/intercity-transfers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold"
            >
              Explore All Saudi Transfer Routes
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <DestinationCards only={featuredDestinationSlugs} background="muted" />

      <HomeWhyChooseUs />

      <HomeHowItWorks />

      <TestimonialSection
        heading="What Our Customers Say"
        subheading="Trusted by tourists, pilgrims, families, and business travellers across Saudi Arabia."
        limit={6}
      />

      <LatestGuides
        heading="Saudi Arabia Travel & Transfer Guides"
        subheading="Practical tips on airport transfers, Umrah journeys, and getting around Saudi Arabia."
        pageKey="home"
        limit={6}
        background="muted"
      />

      <FAQSection faqs={generalFaqs.slice(0, 6)} background="white" />

      <CTASection
        title="Need a Private Transfer in Saudi Arabia?"
        subtitle="Tell us where you're travelling from and where you're going. We'll help arrange your private transfer."
        whatsappLabel="Get Your Transfer Quote"
      />
    </>
  );
}
