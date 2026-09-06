/**
 * Registry for V2 point-transfer pages — replaces lib/point-transfers.ts one
 * city at a time during the redesign. app/(main)/[city]/[route]/page.tsx
 * checks this array first; a slug not yet listed here still falls back to
 * the original lib/point-transfers.ts entry (untouched until every page in a
 * given city has been migrated), so no URL is ever unreachable mid-migration.
 */
import type { PointTransferV2Page } from "@/data/point-transfer-v2/types";
import { jeddahPointTransfersV2 } from "@/data/point-transfer-v2/jeddah";
import { makkahPointTransfersV2 } from "@/data/point-transfer-v2/makkah";
import { dammamPointTransfersV2 } from "@/data/point-transfer-v2/dammam";
import { madinahPointTransfersV2 } from "@/data/point-transfer-v2/madinah";
import { riyadhPointTransfersV2 } from "@/data/point-transfer-v2/riyadh";
import { alulaPointTransfersV2 } from "@/data/point-transfer-v2/alula";

export type { PointTransferV2Page } from "@/data/point-transfer-v2/types";

export const pointTransfersV2: PointTransferV2Page[] = [
  ...jeddahPointTransfersV2,
  ...makkahPointTransfersV2,
  ...dammamPointTransfersV2,
  ...madinahPointTransfersV2,
  ...riyadhPointTransfersV2,
  ...alulaPointTransfersV2,
];

const map: Record<string, PointTransferV2Page> = Object.fromEntries(
  pointTransfersV2.map((t) => [`${t.citySlug}/${t.slug}`, t])
);

export function getPointTransferV2(
  citySlug: string,
  slug: string
): PointTransferV2Page | undefined {
  return map[`${citySlug}/${slug}`];
}
