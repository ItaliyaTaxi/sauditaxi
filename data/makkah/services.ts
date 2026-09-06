import type { PointTransfer } from "../jeddah/types";

/**
 * The 2 Makkah service pages have been migrated to
 * data/point-transfer-v2/makkah.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const raw: Omit<PointTransfer, "citySlug">[] = [];

export const makkahServices: PointTransfer[] = raw.map((t) => ({
  ...t,
  citySlug: "makkah",
}));
