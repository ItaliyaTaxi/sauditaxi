import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";
import { HomeDestinationExplorer } from "@/components/home/HomeDestinationExplorer";
import { HomeServiceExperience } from "@/components/home/HomeServiceExperience";
import { HomePrivateTravelBenefits } from "@/components/home/HomePrivateTravelBenefits";
import { HomeRouteExplorer } from "@/components/home/HomeRouteExplorer";
import { HomeBookingSteps } from "@/components/home/HomeBookingSteps";
import { HomeVehicleExperience } from "@/components/home/HomeVehicleExperience";
import { HomeTravelInsights } from "@/components/home/HomeTravelInsights";
import { HomeCustomerTrust } from "@/components/home/HomeCustomerTrust";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faqs";

// 2026 homepage rebuild — see PRE_REDESIGN_AUDIT.md / DO_NOT_DELETE.md for
// what this preserves (URL, SEO metadata, booking/quote functionality) and
// the final report for what changed. app/ar/page.tsx (the Arabic homepage)
// is intentionally out of scope for this task and untouched.

// Refresh hourly — kept from the previous homepage (no freshness-dependent
// content on the new page, but harmless to leave).
export const revalidate = 3600;

// Metadata preserved exactly as before — the redesign does not change SEO signals.
export const metadata: Metadata = buildMetadata({
  title: "Private Transfers in Saudi Arabia | Airport, City & Border Taxi",
  description:
    "Book private transfers across Saudi Arabia — airport pickups, city rides, intercity routes, and border crossings. Fixed prices, professional drivers, 24/7.",
  path: "/",
  alternateLanguages: { en: "/", ar: "/ar" },
});

export default function HomePage() {
  return (
    <>
      {/* Homepage FAQ structured data (FAQPage). LocalBusiness, TaxiService,
          Organization, WebSite, and Review/AggregateRating schema render
          site-wide from the root layout — untouched by this redesign. */}
      <SchemaScript schema={[faqSchema(generalFaqs.slice(0, 6))]} />

      <HomeHero />
      <HomeTrustStrip />
      <HomeDestinationExplorer />
      <HomeServiceExperience />
      <HomePrivateTravelBenefits />
      <HomeRouteExplorer />
      <HomeBookingSteps />
      <HomeVehicleExperience />
      <HomeTravelInsights />
      <HomeCustomerTrust />
      <FAQSection faqs={generalFaqs.slice(0, 6)} background="muted" />
      <HomeFinalCTA />
    </>
  );
}
