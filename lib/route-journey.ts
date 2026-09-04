import type { Route } from "@/data/routes";

/**
 * Classifies a Saudi domestic city-to-city route into one of four genuine
 * editorial identities, driven entirely by data already on the Route record
 * (category + distance + destination city) — not by a per-route manual
 * flag, so it stays correct as routes are added. Used by
 * components/routes/RouteJourneyView.tsx and lib/route-composer.ts to
 * compose a genuinely different information architecture per type, instead
 * of one universal route-page template. International/border/airport
 * routes are excluded from this classification entirely (they keep the
 * pre-existing page — see app/(main)/routes/[slug]/page.tsx).
 */
export type JourneyType = "pilgrimage" | "tourism" | "short-regional" | "long-distance";

const INTERNATIONAL_HINT = /bahrain|qatar|uae|kuwait|jordan|doha|dubai|abu dhabi|amman|manama/i;
const TOURISM_CITIES = /alula|taif|neom|diriyah/i;

/** Whether this route belongs to the "Saudi domestic city-to-city" batch
 * this phase covers, i.e. not airport, not border, not international. */
export function isDomesticCityRoute(route: Route): boolean {
  if (route.category !== "intercity" && route.category !== "religious") return false;
  if (INTERNATIONAL_HINT.test(route.from) || INTERNATIONAL_HINT.test(route.to)) return false;
  if (/airport/i.test(route.slug)) return false;
  return true;
}

/** Whether this route is a genuine Saudi domestic Airport -> City transfer
 * (category "airport", origin is an airport, destination is a Saudi city —
 * not another airport, and not a border/international crossing). Distinct
 * from isDomesticCityRoute (city-to-city, no airport on either end). */
export function isAirportToCityRoute(route: Route): boolean {
  if (route.category !== "airport") return false;
  if (!/airport/i.test(route.from)) return false;
  if (/airport/i.test(route.to)) return false;
  if (INTERNATIONAL_HINT.test(route.to)) return false;
  return true;
}

/** Distance-based depth tier for an Airport -> City route — drives how much
 * content the page renders (a 20-minute local hop and a 10-hour cross-
 * country transfer don't need the same amount of explaining). */
export type AirportRouteTier = "local" | "regional" | "long-distance";

export function airportRouteTier(route: Route): AirportRouteTier {
  const km = distanceKm(route.distance);
  if (km === null) return "regional";
  if (km <= 40) return "local";
  if (km <= 160) return "regional";
  return "long-distance";
}

function distanceKm(distance: string): number | null {
  const m = distance.match(/([\d,.]+)/);
  return m ? parseFloat(m[1].replace(/,/g, "")) : null;
}

export function classifyRoute(route: Route): JourneyType {
  if (route.category === "religious") return "pilgrimage";
  if (TOURISM_CITIES.test(route.from) || TOURISM_CITIES.test(route.to)) return "tourism";
  const km = distanceKm(route.distance);
  if (km !== null && km < 120) return "short-regional";
  return "long-distance";
}

export const journeyTypeLabels: Record<JourneyType, string> = {
  pilgrimage: "Pilgrimage Journey",
  tourism: "Heritage & Tourism Journey",
  "short-regional": "Regional Transfer",
  "long-distance": "Long-Distance Transfer",
};
