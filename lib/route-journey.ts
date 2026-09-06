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

/** Whether this route is a genuine Saudi domestic City -> Airport departure
 * transfer (category "airport", destination is an airport, origin is a
 * Saudi city — not another airport, and not a border/international
 * crossing). This is the departure-intent counterpart to
 * isAirportToCityRoute; the two are never true for the same route. */
export function isCityToAirportRoute(route: Route): boolean {
  if (route.category !== "airport") return false;
  if (!/airport/i.test(route.to)) return false;
  if (/airport/i.test(route.from)) return false;
  if (INTERNATIONAL_HINT.test(route.from)) return false;
  return true;
}

function distanceKm(distance: string): number | null {
  const m = distance.match(/([\d,.]+)/);
  return m ? parseFloat(m[1].replace(/,/g, "")) : null;
}

/** The GCC country actually reached by a Saudi -> GCC route. */
export type GccCountry = "bahrain" | "qatar" | "kuwait" | "uae";

const GCC_COUNTRY_HINT = /bahrain|doha|dubai|abu dhabi|kuwait/i;
const BORDER_ONLY_DESTINATION = /\bborder\b/i;

/** Whether this route is a genuine Saudi -> GCC international road transfer:
 * origin inside Saudi Arabia (a city or a Saudi airport), destination a real
 * GCC city or airport (not merely "Qatar Border", which is a Saudi-side
 * border-drop-off page, a separate category handled elsewhere). Excludes
 * the reverse GCC -> Saudi direction, where `from` carries the GCC hint
 * instead of `to`. */
export function isSaudiToGccRoute(route: Route): boolean {
  if (route.category !== "border") return false;
  if (BORDER_ONLY_DESTINATION.test(route.to)) return false;
  if (!GCC_COUNTRY_HINT.test(route.to)) return false;
  if (GCC_COUNTRY_HINT.test(route.from)) return false;
  return true;
}

/** Which GCC country a Saudi -> GCC route actually reaches, driving the
 * editorial emphasis of the page (see components/routes/GccRouteView.tsx). */
export function gccCountryFor(route: Route): GccCountry | null {
  const to = route.to.toLowerCase();
  if (to.includes("bahrain")) return "bahrain";
  if (to.includes("doha")) return "qatar";
  if (to.includes("dubai") || to.includes("abu dhabi")) return "uae";
  if (to.includes("kuwait")) return "kuwait";
  return null;
}

const GCC_ORIGIN_HINT = /bahrain|manama|doha|dubai|abu dhabi|kuwait/i;

/** Whether this route is a genuine GCC -> Saudi international road transfer:
 * origin a real GCC city or airport, destination inside Saudi Arabia (a city
 * or a Saudi airport). This is the reverse-direction counterpart to
 * isSaudiToGccRoute; the two are never true for the same route. Manama is
 * included as a Bahrain-origin hint since several routes name the city
 * directly rather than the country. */
export function isGccToSaudiRoute(route: Route): boolean {
  if (route.category !== "border") return false;
  if (BORDER_ONLY_DESTINATION.test(route.from)) return false;
  if (!GCC_ORIGIN_HINT.test(route.from)) return false;
  if (GCC_ORIGIN_HINT.test(route.to)) return false;
  return true;
}

/** Which GCC country a GCC -> Saudi route departs from, driving the
 * editorial emphasis of the page (see components/routes/GccToSaudiRouteView.tsx). */
export function gccCountryForOrigin(route: Route): GccCountry | null {
  const from = route.from.toLowerCase();
  if (from.includes("bahrain") || from.includes("manama")) return "bahrain";
  if (from.includes("doha")) return "qatar";
  if (from.includes("dubai") || from.includes("abu dhabi")) return "uae";
  if (from.includes("kuwait")) return "kuwait";
  return null;
}

/** Whether this route is a genuine Saudi City -> Border drop-off transfer:
 * a Saudi-side-only service ending at a border facility (destination
 * literally names "... Border"), not a full international crossing. This
 * is a distinct commercial intent from isSaudiToGccRoute (which crosses the
 * border and continues into the GCC country) — the two are never true for
 * the same route. */
export function isCityToBorderRoute(route: Route): boolean {
  if (route.category !== "border") return false;
  if (!BORDER_ONLY_DESTINATION.test(route.to)) return false;
  if (BORDER_ONLY_DESTINATION.test(route.from)) return false;
  return true;
}

/** Which GCC country's border a City -> Border route drops off at, driving
 * the editorial content (crossing name, border-guide link). */
export function borderCountryFor(route: Route): GccCountry | null {
  const to = route.to.toLowerCase();
  if (to.includes("qatar")) return "qatar";
  if (to.includes("batha")) return "uae";
  if (to.includes("khafji")) return "kuwait";
  if (to.includes("bahrain")) return "bahrain";
  return null;
}

/** Whether this route is a genuine Border -> City/Airport arrival transfer:
 * origin literally names "... Border" (a Saudi-side crossing facility),
 * destination a Saudi city or airport — the reverse-direction counterpart
 * to isCityToBorderRoute; the two are never true for the same route. */
export function isBorderToCityRoute(route: Route): boolean {
  if (route.category !== "border") return false;
  if (!BORDER_ONLY_DESTINATION.test(route.from)) return false;
  if (BORDER_ONLY_DESTINATION.test(route.to)) return false;
  return true;
}

/** Which GCC country's border a Border -> City route departs from, driving
 * the editorial content (crossing name, border-guide link). */
export function borderCountryForOrigin(route: Route): GccCountry | null {
  const from = route.from.toLowerCase();
  if (from.includes("qatar")) return "qatar";
  if (from.includes("batha")) return "uae";
  if (from.includes("khafji")) return "kuwait";
  if (from.includes("bahrain")) return "bahrain";
  return null;
}

const JORDAN_HINT = /jordan|amman/i;

/** Whether this route is a genuine Saudi <-> Jordan international road
 * transfer (either direction) — exactly one side names Jordan/Amman, the
 * other a Saudi city. Unlike the GCC route pairs, Saudi -> Jordan and
 * Jordan -> Saudi share a single editorial shell (SaudiJordanRouteView)
 * with direction-aware content rather than two separate components, since
 * this is a single small route family rather than a large bidirectional
 * cluster. */
export function isSaudiJordanRoute(route: Route): boolean {
  if (route.category !== "border") return false;
  const fromIsJordan = JORDAN_HINT.test(route.from);
  const toIsJordan = JORDAN_HINT.test(route.to);
  return fromIsJordan !== toIsJordan;
}

export type SaudiJordanDirection = "saudi-to-jordan" | "jordan-to-saudi";

/** Which direction a Saudi <-> Jordan route travels, driving section order
 * and narrative emphasis (see components/routes/SaudiJordanRouteView.tsx). */
export function saudiJordanDirection(route: Route): SaudiJordanDirection | null {
  if (!isSaudiJordanRoute(route)) return null;
  return JORDAN_HINT.test(route.to) ? "saudi-to-jordan" : "jordan-to-saudi";
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
