import type { JourneyContent } from "@/components/journey/JourneyPageView";

/**
 * Formerly the "rich journey" distance pages (JourneyPageView design). All 15
 * entries have been migrated to the Journey V2 architecture — see
 * data/journey-guide-v2.ts and components/journey-v2/JourneyGuideV2View.tsx,
 * which now render every one of these slugs with an all-new premium
 * long-distance planning-guide identity (distinct from Distance Guide V2 and
 * from this old design).
 *
 * This array is intentionally left empty rather than deleted: the
 * JourneyPage/JourneyContent types, the getJourneyPage() helper, and the old
 * JourneyPageView fallback branch in app/(main)/distance/[slug]/page.tsx and
 * app/ar/[...slug]/page.tsx are kept in place for structural safety, mirroring
 * the same treatment given to data/distance-pages.ts during the earlier
 * Distance V1 → V2 migration. Nothing reads from this file as a live content
 * source any longer.
 */

export interface JourneyPage extends JourneyContent {
  slug: string;
  from: string;
  to: string;
  routePath: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
}

export const journeyPages: JourneyPage[] = [];

export function getJourneyPage(slug: string): JourneyPage | undefined {
  return journeyPages.find((p) => p.slug === slug);
}
