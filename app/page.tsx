import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { HeroQuickForm } from "@/components/HeroQuickForm";
import { heroImages } from "@/lib/hero";
import { buildMetadata } from "@/lib/seo";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RouteGrid } from "@/components/sections/RouteGrid";
import { CityGrid } from "@/components/sections/CityGrid";
import { AirportGrid } from "@/components/sections/AirportGrid";
import { VehicleOptions } from "@/components/sections/VehicleOptions";
import { TrustSection } from "@/components/sections/TrustSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { HomeSeoContent } from "@/components/sections/HomeSeoContent";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LatestGuides } from "@/components/sections/LatestGuides";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faqs";

// Refresh hourly so the "Latest guides" block surfaces new posts (freshness signal).
export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "Private Transfers in Saudi Arabia | Airport, City & Border Taxi",
  description:
    "Book private transfers across Saudi Arabia — airport pickups, city rides, intercity routes, and border crossings. Fixed prices, professional drivers, 24/7.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Homepage FAQ structured data (FAQPage). LocalBusiness, TaxiService,
          Organization, WebSite, and Review/AggregateRating schema render
          site-wide from the root layout. */}
      <SchemaScript schema={[faqSchema(generalFaqs.slice(0, 6))]} />

      <HeroSection
        badge="Taxi Service in Saudi Arabia"
        title="Private Taxi & Airport Transfers Across Saudi Arabia"
        subtitle="Book reliable private transfers for airports, cities, hotels, Umrah, Hajj, borders, and intercity routes. Fixed prices, professional drivers, and fast WhatsApp quotes."
        points={[
          "Meet-and-greet airport pickups",
          "Jeddah airport to Makkah transfers",
          "Makkah to Madinah private rides",
          "Cross-border transfers to Bahrain & Qatar",
        ]}
        whatsappMessage="Hello! I'd like a taxi quote in Saudi Arabia. My trip details are:"
        backgroundImage={heroImages.default}
        backgroundAlt="Premium private taxi and airport transfer service in Saudi Arabia"
        formCard={<HeroQuickForm />}
      />

      <TrustBadges />

      <ServiceCards />

      <HowItWorks background="muted" />

      <RouteGrid background="white" />

      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            The Easiest Way to Travel Across the Kingdom
          </h2>
          <div className="mt-4 space-y-4 text-left text-muted-foreground">
            <p>
              Whether you are arriving for Umrah, exploring Riyadh and AlUla, or
              crossing the King Fahd Causeway to Bahrain, our private taxi service
              gives you a comfortable vehicle, a professional driver, and a price
              agreed in advance. There are no meters and no surge pricing — just
              door-to-door transfers you can rely on.
            </p>
            <p>
              We cover every major Saudi city and airport, the most popular
              intercity routes, all the main land borders, and the full pilgrim
              journey between Jeddah, Makkah, and Madinah. Send your trip details
              on WhatsApp and we will reply with a fixed quote in minutes.
            </p>
          </div>
        </div>
      </section>

      <CityGrid background="white" />

      <AirportGrid background="muted" />

      <VehicleOptions background="white" />

      <TrustSection background="muted" />

      <TestimonialSection />

      <HomeSeoContent />

      <FAQSection faqs={generalFaqs.slice(0, 6)} background="muted" />

      <LatestGuides />

      <CTASection />
    </>
  );
}
