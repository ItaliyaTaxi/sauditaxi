import type { PointTransfer } from "../jeddah/types";

/**
 * All 7 Makkah Ziyarat/historical-site pages have been migrated to
 * data/point-transfer-v2/makkah.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const raw: Omit<PointTransfer, "citySlug">[] = [];

export const makkahAttractions: PointTransfer[] = raw.map((t) => ({
  ...t,
  citySlug: "makkah",
}));
