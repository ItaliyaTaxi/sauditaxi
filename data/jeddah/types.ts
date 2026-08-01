/**
 * Point-of-interest transfer pages (attractions, port, railway) and Jeddah
 * service/tour pages. These are authored, content-rich landing pages served
 * under /{city}/{slug} by the same route as hotel transfers. Each object is a
 * complete page; the PointTransferView template renders it.
 */

export interface PointTransferSection {
  heading: string;
  /** Paragraphs may contain inline <a href="/..."> anchors (rendered as HTML). */
  paragraphs: string[];
}

export interface PointTransferFaq {
  question: string;
  answer: string;
}

export type PointTransferCategory = "attraction" | "port" | "railway" | "service";

export interface PointTransfer {
  /** URL slug, unique within the city, e.g. "jeddah-airport-to-al-balad". */
  slug: string;
  /** City slug for the URL segment, e.g. "jeddah". */
  citySlug: string;
  category: PointTransferCategory;
  from: string;
  to: string;
  /** The page H1. */
  h1: string;
  /** SEO title (50–60 chars). */
  metaTitle: string;
  /** Meta description (140–160 chars). */
  metaDescription: string;
  /** Hero subtitle / lead sentence. */
  intro: string;
  distance?: string;
  duration?: string;
  highlights?: string[];
  /** Main body (H2 sections). */
  sections: PointTransferSection[];
  /** FAQs (rendered + FAQ schema; capped at 20 by the template). */
  faqs: PointTransferFaq[];
  /** Sibling /{city}/{slug} transfer slugs to cross-link. */
  relatedTransferSlugs?: string[];
  /** /routes/{slug} route slugs to cross-link. */
  relatedRouteSlugs?: string[];
  keywords?: string[];
  /** Optional per-page hero photo override; falls back to the generic city hero. */
  heroImage?: string;
  heroAlt?: string;
}
