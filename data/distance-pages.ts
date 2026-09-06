/**
 * Informational "distance & travel time" pages — /distance/{slug}.
 *
 * Distinct in intent and content from the commercial /routes/{slug} pages:
 * these answer "how far / how long / how do I get there" research questions,
 * cite the transport modes that genuinely exist for each route, and link to
 * the matching /routes/{slug} page as a single contextual CTA rather than
 * repeating its commercial content. Every distance/time/transport-mode claim
 * below was checked against public sources at the time of writing (see each
 * entry's `sources`); nothing here is estimated or invented. Where sources
 * disagreed on an exact figure (common for road-distance queries, since
 * different tools measure between different start/end points within a city),
 * the page states the range rather than a false-precision single number.
 *
 * All 30 entries this file used to hold have been migrated to the "Distance
 * Guide V2" architecture (see data/distance-guide-v2.ts) as part of the
 * Distance V1 -> V2 migration. This array is now intentionally empty — the
 * type, getDistancePage(), and the /distance/[slug] V1 fallback render path
 * in app/(main)/distance/[slug]/page.tsx are kept in place for structural
 * safety (the fallback is simply never reached) rather than torn out, since
 * data/journey-pages.ts is a separate, still-active collection sharing the
 * same route file and dispatch.
 */

export interface DistancePage {
  slug: string;
  from: string;
  to: string;
  /** The matching commercial route page this page links to. */
  routePath: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  quickAnswer: {
    drivingDistance: string;
    drivingTime: string;
    straightLineDistance?: string;
    note: string;
  };
  distanceExplanation: string[];
  travelTime: string[];
  transportOptions: {
    mode: string;
    suitability: string;
    duration: string;
    advantages: string;
    limitations: string;
  }[];
  routeSpecific: { heading: string; paragraphs: string[] };
  infoBoxes: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const distancePages: DistancePage[] = [];

export function getDistancePage(slug: string): DistancePage | undefined {
  return distancePages.find((p) => p.slug === slug);
}
