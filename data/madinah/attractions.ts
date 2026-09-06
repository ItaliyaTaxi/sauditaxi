import type { PointTransfer } from "../jeddah/types";

/**
 * All 4 Madinah Ziyarat pages have been migrated to
 * data/point-transfer-v2/madinah.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const raw: Omit<PointTransfer, "citySlug">[] = [];

export const madinahAttractions: PointTransfer[] = raw.map((t) => ({
  ...t,
  citySlug: "madinah",
}));
