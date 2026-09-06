import type { PointTransfer } from "../jeddah/types";

/**
 * All 3 Riyadh point-transfer pages have been migrated to
 * data/point-transfer-v2/riyadh.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const rawRiyadhPoints: Omit<PointTransfer, "citySlug">[] = [];

export const riyadhPoints: PointTransfer[] = rawRiyadhPoints.map((t) => ({
  ...t,
  citySlug: "riyadh",
}));
