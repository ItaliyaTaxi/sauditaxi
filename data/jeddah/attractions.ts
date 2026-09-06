import type { PointTransfer } from "./types";

/**
 * All 13 Jeddah attraction transfer pages have been migrated to
 * data/point-transfer-v2/jeddah.ts (see components/point-transfer-v2/
 * PointTransferV2View.tsx) — this array is left empty rather than deleted,
 * mirroring the same structural-safety treatment given to data/distance-pages.ts
 * and data/journey-pages.ts during their own V2 migrations.
 */
const rawAttractions: Omit<PointTransfer, "citySlug">[] = [];

/** All Jeddah attraction transfers, tagged with their city slug. */
export const jeddahAttractions: PointTransfer[] = rawAttractions.map((t) => ({
  ...t,
  citySlug: "jeddah",
}));
