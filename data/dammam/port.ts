import type { PointTransfer } from "../jeddah/types";

/**
 * All 6 King Abdulaziz Port pages have been migrated to
 * data/point-transfer-v2/dammam.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const rawPort: Omit<PointTransfer, "citySlug">[] = [];

export const dammamPort: PointTransfer[] = rawPort.map((t) => ({
  ...t,
  citySlug: "dammam",
}));
