import type { PointTransfer } from "../jeddah/types";

/**
 * The 1 Madinah railway page has been migrated to
 * data/point-transfer-v2/madinah.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const rawMadinahRailway: Omit<PointTransfer, "citySlug">[] = [];

export const madinahRailway: PointTransfer[] = rawMadinahRailway.map((t) => ({
  ...t,
  citySlug: "madinah",
}));
