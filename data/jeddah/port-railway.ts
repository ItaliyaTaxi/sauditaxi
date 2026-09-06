import type { PointTransfer } from "./types";

/**
 * All 8 Jeddah port/railway transfer pages have been migrated to
 * data/point-transfer-v2/jeddah.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const raw: Omit<PointTransfer, "citySlug">[] = [];

export const jeddahPortRailway: PointTransfer[] = raw.map((t) => ({
  ...t,
  citySlug: "jeddah",
}));
