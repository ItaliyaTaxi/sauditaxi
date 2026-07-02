/**
 * Dynamic airport ↔ hotel transfer route system.
 *
 * Given the hotels in data/hotels.ts and the airport that serves each hotel's
 * city (via city.nearestAirportSlug), this module generates two transfer routes
 * per hotel — airport → hotel and hotel → airport — with matching slugs, cross
 * links, distance/duration, and breadcrumbs. Pages, listings, sitemap entries,
 * and structured data all read from here, so adding a hotel (or a whole new
 * city of hotels) needs no new code.
 */
import { hotels, hotelsForCity, type Hotel } from "@/data/hotels";
import { cities, getCity, type City } from "@/data/cities";
import { getAirport, type Airport } from "@/data/airports";

export type TransferDirection = "airport-to-hotel" | "hotel-to-airport";

export interface HotelTransfer {
  /** Route slug, unique within the city (used in the URL path). */
  slug: string;
  /** Full page path, e.g. "/jeddah/king-abdulaziz-airport-to-jeddah-hilton". */
  path: string;
  citySlug: string;
  cityName: string;
  hotel: Hotel;
  airport: Airport;
  direction: TransferDirection;
  /** Display name of the origin ("King Abdulaziz Airport" or the hotel name). */
  from: string;
  /** Display name of the destination. */
  to: string;
  fromType: "airport" | "hotel";
  toType: "airport" | "hotel";
  distance: string;
  duration: string;
  /** Slug of the paired (reverse-direction) transfer. */
  reverseSlug: string;
}

// ── Slug / name helpers ──────────────────────────────────────────────────────

function kebab(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Short transfer slug for an airport, e.g. "king-abdulaziz-airport". */
export function airportTransferSlug(airport: Airport): string {
  if (airport.transferSlug) return airport.transferSlug;
  const core = airport.name.replace(/\b(international|regional|airport)\b/gi, "");
  return `${kebab(core)}-airport`;
}

/** Short transfer display name, e.g. "King Abdulaziz Airport". */
export function airportTransferName(airport: Airport): string {
  if (airport.transferName) return airport.transferName;
  return airport.name.replace(/\b(international|regional)\b/gi, "").replace(/\s+/g, " ").trim();
}

export function formatDistance(km: number): string {
  return `${km} km`;
}

export function formatDuration(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  const hrs = `${h} hr${h > 1 ? "s" : ""}`;
  return m ? `${hrs} ${m} min` : hrs;
}

// ── Route generation ─────────────────────────────────────────────────────────

function airportForCity(citySlug: string): Airport | undefined {
  const city = getCity(citySlug);
  if (!city?.nearestAirportSlug) return undefined;
  return getAirport(city.nearestAirportSlug);
}

function buildTransfersForHotel(hotel: Hotel): HotelTransfer[] {
  const city = getCity(hotel.citySlug);
  const airport = airportForCity(hotel.citySlug);
  if (!city || !airport) return [];

  const aSlug = airportTransferSlug(airport);
  const aName = airportTransferName(airport);
  const distance = formatDistance(hotel.distanceKm);
  const duration = formatDuration(hotel.durationMin);

  const fromAirportSlug = `${aSlug}-to-${hotel.slug}`;
  const toAirportSlug = `${hotel.slug}-to-${aSlug}`;

  const base = {
    citySlug: hotel.citySlug,
    cityName: city.name,
    hotel,
    airport,
    distance,
    duration,
  };

  return [
    {
      ...base,
      slug: fromAirportSlug,
      path: `/${hotel.citySlug}/${fromAirportSlug}`,
      direction: "airport-to-hotel",
      from: aName,
      to: hotel.name,
      fromType: "airport",
      toType: "hotel",
      reverseSlug: toAirportSlug,
    },
    {
      ...base,
      slug: toAirportSlug,
      path: `/${hotel.citySlug}/${toAirportSlug}`,
      direction: "hotel-to-airport",
      from: hotel.name,
      to: aName,
      fromType: "hotel",
      toType: "airport",
      reverseSlug: fromAirportSlug,
    },
  ];
}

/** Every transfer route across all cities. */
export const hotelTransfers: HotelTransfer[] = hotels.flatMap(buildTransfersForHotel);

const transferMap: Record<string, HotelTransfer> = Object.fromEntries(
  hotelTransfers.map((t) => [`${t.citySlug}/${t.slug}`, t])
);

/** Look up one transfer by city + route slug. */
export function getHotelTransfer(
  citySlug: string,
  slug: string
): HotelTransfer | undefined {
  return transferMap[`${citySlug}/${slug}`];
}

/** All transfers in a city (both directions), airport → hotel first. */
export function transfersForCity(citySlug: string): HotelTransfer[] {
  return hotelTransfers.filter((t) => t.citySlug === citySlug);
}

/** City slugs that have at least one hotel (drive hub generation). */
export function citiesWithHotels(): string[] {
  return Array.from(new Set(hotels.map((h) => h.citySlug)));
}

/** City objects that have hotels, in data order. */
export function hotelCities(): City[] {
  const set = new Set(citiesWithHotels());
  return cities.filter((c) => set.has(c.slug));
}

export { hotelsForCity };
