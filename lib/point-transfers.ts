/**
 * Registry for content-rich "point transfer" landing pages (attractions, port,
 * railway) and Jeddah service/tour pages. These share the /{city}/{slug} route
 * with hotel transfers; the route resolves a hotel transfer first, then falls
 * back to a point transfer here. Adding a page = adding a data object.
 */
import type { PointTransfer } from "@/data/jeddah/types";
import { jeddahAttractions } from "@/data/jeddah/attractions";
import { jeddahPortRailway } from "@/data/jeddah/port-railway";
import { jeddahServices } from "@/data/jeddah/services";
import { makkahAttractions } from "@/data/makkah/attractions";
import { makkahServices } from "@/data/makkah/services";
import { dammamAttractions } from "@/data/dammam/attractions";
import { dammamPort } from "@/data/dammam/port";

export type { PointTransfer } from "@/data/jeddah/types";

export const pointTransfers: PointTransfer[] = [
  ...jeddahAttractions,
  ...jeddahPortRailway,
  ...jeddahServices,
  ...makkahAttractions,
  ...makkahServices,
  ...dammamAttractions,
  ...dammamPort,
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
