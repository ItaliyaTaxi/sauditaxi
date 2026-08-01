/**
 * Rich, long-form content model for service landing pages. Each service has a
 * file in this folder exporting a `ServiceContent` object; the ServicePage
 * template renders these sections in order. Keeping the content typed and
 * data-driven means every service page shares one consistent, accessible
 * layout while carrying its own unique copy.
 */

/** A titled point — used for "why choose", booking steps, trust pillars. */
export interface SCPillar {
  title: string;
  text: string;
}

/** A prose section: an H2 heading plus one or more paragraphs. */
export interface SCSection {
  heading: string;
  paragraphs: string[];
}

/** A city served, linked to its /taxi-service/{slug} page. */
export interface SCCity {
  label: string;
  /** City slug from data/cities.ts (e.g. "riyadh"). */
  slug: string;
}

/** A popular route with travel facts; links to a route page when href is set. */
export interface SCRoute {
  from: string;
  to: string;
  distance: string;
  duration: string;
  benefit: string;
  /** Optional internal link, e.g. "/routes/khobar-to-bahrain". */
  href?: string;
}

/** A contextual internal link (related service, etc.). */
export interface SCLink {
  label: string;
  href: string;
}

export interface SCFaq {
  question: string;
  answer: string;
}

export interface ServiceContent {
  /** 1. Detailed service overview (≈400–600 words). */
  overview: SCSection;
  /** 2. Why choose our service (≈300–500 words). */
  whyChoose: { heading: string; items: SCPillar[] };
  /** 3. Service coverage areas (≈300–500 words) with contextual city links. */
  coverage: { heading: string; paragraphs: string[]; cities: SCCity[] };
  /**
   * Optional direct links to individual site/attraction pages within this
   * service's cluster (e.g. every Ziyarat location page). Renders as its own
   * card grid, distinct from `popularRoutes` (which covers intercity legs).
   * Exists specifically to give the hub page a real click-path down into its
   * individual site pages — see the Ziyarat content audit, finding F2.
   */
  exploreSites?: { heading: string; intro?: string; items: SCRoute[] };
  /** 4. Popular routes (≈400–600 words). */
  popularRoutes: { heading: string; intro?: string; routes: SCRoute[] };
  /** 5. Booking process (≈250–400 words). */
  booking: { heading: string; steps: SCPillar[] };
  /** 6. Traveler tips (≈400–600 words). */
  travelerTips: SCSection;
  /** 7. Trust & safety (≈250–400 words). */
  trustSafety: { heading: string; items: SCPillar[] };
  /** 8. Expanded FAQs (15–20). Overrides the short list in data/services.ts. */
  faqs: SCFaq[];
  /** Contextual links to related services. */
  relatedServices: SCLink[];
  /** Blog slugs to surface in the "related guides" block at the end. */
  relatedBlogSlugs: string[];
  /** Primary keywords this page targets (used in reporting, not rendered). */
  keywords: string[];
}
