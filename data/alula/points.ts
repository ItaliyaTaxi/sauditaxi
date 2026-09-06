import type { PointTransfer } from "../jeddah/types";

/**
 * The 1 AlUla point-transfer page has been migrated to
 * data/point-transfer-v2/alula.ts — this array is left empty rather than
 * deleted, mirroring data/distance-pages.ts / data/journey-pages.ts.
 */
const rawAlulaPoints: Omit<PointTransfer, "citySlug">[] = [];

export const alulaPoints: PointTransfer[] = rawAlulaPoints.map((t) => ({
  ...t,
  citySlug: "alula",
}));
