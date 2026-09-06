import type { PointTransfer } from "../jeddah/types";

/**
 * All 8 Dammam attraction/service pages have been migrated to
 * data/point-transfer-v2/dammam.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const rawAttractions: Omit<PointTransfer, "citySlug">[] = [];

export const dammamAttractions: PointTransfer[] = rawAttractions.map((t) => ({
  ...t,
  citySlug: "dammam",
}));
