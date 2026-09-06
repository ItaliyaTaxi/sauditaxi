import type { PointTransfer } from "../jeddah/types";

/**
 * The 1 Makkah railway page has been migrated to
 * data/point-transfer-v2/makkah.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const rawMakkahRailway: Omit<PointTransfer, "citySlug">[] = [];

export const makkahRailway: PointTransfer[] = rawMakkahRailway.map((t) => ({
  ...t,
  citySlug: "makkah",
}));
