import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStatsStrip } from "@/components/about/AboutStatsStrip";
import { AboutWhoWeAre } from "@/components/about/AboutWhoWeAre";
import { AboutWhatWeDo } from "@/components/about/AboutWhatWeDo";
import { AboutWhereWeOperate } from "@/components/about/AboutWhereWeOperate";
import { AboutJourneyPhilosophy } from "@/components/about/AboutJourneyPhilosophy";
import { AboutExperienceTimeline } from "@/components/about/AboutExperienceTimeline";
import { AboutWhatToExpect } from "@/components/about/AboutWhatToExpect";
import { AboutTravelExpertise } from "@/components/about/AboutTravelExpertise";
import { AboutVehicles } from "@/components/about/AboutVehicles";
import { AboutFinalCTA } from "@/components/about/AboutFinalCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { aboutFaqs } from "@/data/faqs";

// 2026 About page rebuild — new design system, same URL (/about), same
// canonical/hreflang. Organization/LocalBusiness/WebSite schema already
// renders site-wide from the root layout (app/(main)/layout.tsx) — not
// repeated here to avoid duplicate/conflicting schema. This page adds only
// its own breadcrumb + FAQ schema, matching its own visible content.
const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const metadata: Metadata = buildMetadata({
  title: "About Saudi Private Transfers | Private Chauffeur & Transfers",
  description:
    "Saudi Private Transfers provides private chauffeur and transfer services across Saudi Arabia — airport, city-to-city and selected cross-border GCC journeys.",
  path: "/about",
  alternateLanguages: { en: "/about", ar: "/ar/من-نحن" },
});

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={[breadcrumbSchema(crumbs), faqSchema(aboutFaqs)]} />

      <AboutHero crumbs={crumbs} />
      <AboutStatsStrip />
      <AboutWhoWeAre />
      <AboutWhatWeDo />
      <AboutWhereWeOperate />
      <AboutJourneyPhilosophy />
      <AboutExperienceTimeline />
      <AboutWhatToExpect />
      <AboutTravelExpertise />
      <AboutVehicles />
      <FAQSection faqs={aboutFaqs} background="muted" />
      <AboutFinalCTA />
    </>
  );
}
