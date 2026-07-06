/**
 * Registry for content-rich "point transfer" landing pages (attractions, port,
 * railway) and Jeddah service/tour pages. These share the /{city}/{slug} route
 * with hotel transfers; the route resolves a hotel transfer first, then falls
 * back to a point transfer here. Adding a page = adding a data object.
 */
import type { PointTransfer } from "@/data/jeddah/types";
import { jeddahAttractions } from "@/data/jeddah/attractions";

export type { PointTransfer } from "@/data/jeddah/types";

export const pointTransfers: PointTransfer[] = [
  ...jeddahAttractions,
];

const map: Record<string, PointTransfer> = Object.fromEntries(
  pointTransfers.map((t) => [`${t.citySlug}/${t.slug}`, t])
);

export function getPointTransfer(
  citySlug: string,
  slug: string
): PointTransfer | undefined {
  return map[`${citySlug}/${slug}`];
}

export function pointTransfersForCity(citySlug: string): PointTransfer[] {
  return pointTransfers.filter((t) => t.citySlug === citySlug);
}
