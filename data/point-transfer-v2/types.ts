import type {
  PointTransferV2Content,
} from "@/components/point-transfer-v2/PointTransferV2View";

/**
 * V2 point-transfer page — replaces a single entry from lib/point-transfers.ts
 * (data/{city}/*.ts) with the richer, type-aware PointTransferV2Content model.
 * Slugs are preserved exactly; only the content model and rendering change.
 */
export interface PointTransferV2Page {
  slug: string;
  citySlug: string;
  from: string;
  to: string;
  /** false for named-offering "service" pages that read as a single
   * destination rather than an A → B pair (e.g. "Private Chauffeur Service"). */
  isPointToPoint?: boolean;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  distance?: string;
  duration?: string;
  heroAlt?: string;
  /** Sibling /{citySlug}/{slug} pages to cross-link (V2 or still-V1). */
  relatedTransferSlugs?: string[];
  /** /routes/{slug} commercial routes to cross-link. */
  relatedRouteSlugs?: string[];
  content: PointTransferV2Content;
}
