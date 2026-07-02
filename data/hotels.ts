/**
 * Hotels served by our airport-transfer route system.
 *
 * Each hotel belongs to a city (`citySlug`, matching data/cities.ts) and the
 * transfer routes to/from that city's airport are generated automatically in
 * lib/hotel-transfers.ts — no per-hotel page is ever hand-written. Add a hotel
 * here and its two route pages (airport → hotel and hotel → airport), the city
 * hub listing, breadcrumbs, internal links, sitemap entries, and structured
 * data all appear on the next build.
 *
 * To extend to a new city (Riyadh, Makkah, …) simply add hotels with that
 * city's slug; the same system builds `/riyadh/...` pages with zero new code.
 */
export interface Hotel {
  /** URL-safe slug, unique within the city. Used in the route path. */
  slug: string;
  /** Display name. */
  name: string;
  /** City slug this hotel sits in (must exist in data/cities.ts). */
  citySlug: string;
  /** Star classification — drives filtering on the city hub. */
  stars: 3 | 4 | 5;
  /** District / area, used in content and as a filter facet. */
  area: string;
  /** Approximate driving distance from the serving airport, in km. */
  distanceKm: number;
  /** Approximate driving time from the serving airport, in minutes. */
  durationMin: number;
  /** Unique one-line description of the hotel for card + intro content. */
  blurb: string;
  /** Landmarks / attractions near the hotel, for unique on-page content. */
  nearby: string[];
}

export const hotels: Hotel[] = [
  // ── Jeddah — 5-star ────────────────────────────────────────────────────────
  {
    slug: "waldorf-astoria-jeddah",
    name: "Waldorf Astoria Jeddah – Qasr Al Sharq",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 35,
    durationMin: 40,
    blurb:
      "A palatial Red Sea landmark on the Corniche, known for its gold-accented suites and waterfront dining.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Al-Rahma (Floating) Mosque"],
  },
  {
    slug: "ritz-carlton-jeddah",
    name: "The Ritz-Carlton, Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 34,
    durationMin: 38,
    blurb:
      "A grand seafront resort set in landscaped gardens along the northern Corniche, popular for business and leisure stays.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Jeddah Yacht Club"],
  },
  {
    slug: "rosewood-jeddah",
    name: "Rosewood Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 33,
    durationMin: 37,
    blurb:
      "A sleek business tower on the Corniche with panoramic Red Sea views and a rooftop pool.",
    nearby: ["Jeddah Corniche", "Al Shallal Theme Park", "Stars Avenue Mall"],
  },
  {
    slug: "park-hyatt-jeddah",
    name: "Park Hyatt Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 32,
    durationMin: 36,
    blurb:
      "A tranquil low-rise retreat of Andalusian courtyards and private marina moorings on the Corniche.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Al-Rahma (Floating) Mosque"],
  },
  {
    slug: "shangri-la-jeddah",
    name: "Shangri-La Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Shati / Corniche",
    distanceKm: 26,
    durationMin: 30,
    blurb:
      "A modern high-rise hotel overlooking the waterfront, with a spa and family-friendly leisure floors.",
    nearby: ["Jeddah Corniche", "Al Shati district", "Red Sea Mall"],
  },
  {
    slug: "intercontinental-jeddah",
    name: "InterContinental Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra Corniche",
    distanceKm: 31,
    durationMin: 35,
    blurb:
      "A long-established seafront hotel with its own private beach and Corniche promenade access.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Al-Balad historic district"],
  },
  {
    slug: "assila-luxury-collection-jeddah",
    name: "Assila, a Luxury Collection Hotel, Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Rawdah / Tahlia Street",
    distanceKm: 24,
    durationMin: 30,
    blurb:
      "A contemporary art-filled hotel steps from the boutiques and cafés of Tahlia Street.",
    nearby: ["Tahlia Street", "Stars Avenue Mall", "Jeddah Corniche"],
  },
  {
    slug: "jeddah-hilton",
    name: "Jeddah Hilton",
    citySlug: "jeddah",
    stars: 5,
    area: "North Corniche",
    distanceKm: 22,
    durationMin: 26,
    blurb:
      "A resort-style hotel on the northern Corniche with a private beach, marina, and multiple restaurants.",
    nearby: ["Jeddah Corniche", "Red Sea Mall", "King Abdullah Sports City"],
  },
  {
    slug: "jeddah-marriott-hotel",
    name: "Jeddah Marriott Hotel",
    citySlug: "jeddah",
    stars: 5,
    area: "Madinah Road / Al Hamra",
    distanceKm: 27,
    durationMin: 32,
    blurb:
      "A central business hotel on Madinah Road, well placed for the Corniche and the commercial district.",
    nearby: ["Madinah Road", "Jeddah Corniche", "Al-Balad historic district"],
  },
  {
    slug: "swissotel-jeddah-al-hamra",
    name: "Swissôtel Jeddah Al Hamra",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Hamra",
    distanceKm: 30,
    durationMin: 35,
    blurb:
      "A polished city hotel in the Al Hamra district, blending Swiss hospitality with easy Corniche access.",
    nearby: ["Jeddah Corniche", "Tahlia Street", "King Fahd Fountain"],
  },
  {
    slug: "crowne-plaza-jeddah",
    name: "Crowne Plaza Jeddah",
    citySlug: "jeddah",
    stars: 5,
    area: "Al Andalus / Madinah Road",
    distanceKm: 25,
    durationMin: 30,
    blurb:
      "A dependable business hotel on Al Andalus Road, minutes from shopping and the ring-road network.",
    nearby: ["Red Sea Mall", "Madinah Road", "Jeddah Corniche"],
  },

  // ── Jeddah — 4-star ────────────────────────────────────────────────────────
  {
    slug: "four-points-sheraton-jeddah-corniche",
    name: "Four Points by Sheraton Jeddah Corniche",
    citySlug: "jeddah",
    stars: 4,
    area: "Corniche",
    distanceKm: 28,
    durationMin: 33,
    blurb:
      "A comfortable Corniche-side hotel with sea-view rooms and a rooftop pool, popular with families.",
    nearby: ["Jeddah Corniche", "Al Shallal Theme Park", "Al-Rahma (Floating) Mosque"],
  },
  {
    slug: "mercure-jeddah-al-hamra",
    name: "Mercure Jeddah Al Hamra",
    citySlug: "jeddah",
    stars: 4,
    area: "Al Hamra",
    distanceKm: 29,
    durationMin: 34,
    blurb:
      "A value-focused Al Hamra hotel within walking distance of the Corniche waterfront.",
    nearby: ["Jeddah Corniche", "King Fahd Fountain", "Tahlia Street"],
  },
  {
    slug: "best-western-plus-jeddah-madinah-road",
    name: "Best Western Plus Jeddah Hotel Madinah Road",
    citySlug: "jeddah",
    stars: 4,
    area: "Madinah Road",
    distanceKm: 23,
    durationMin: 29,
    blurb:
      "A practical mid-scale hotel on Madinah Road, central for shopping and business meetings.",
    nearby: ["Madinah Road", "Red Sea Mall", "Stars Avenue Mall"],
  },
  {
    slug: "radisson-blu-jeddah",
    name: "Radisson Blu Hotel, Jeddah",
    citySlug: "jeddah",
    stars: 4,
    area: "Madinah Road",
    distanceKm: 20,
    durationMin: 26,
    blurb:
      "A well-connected business hotel on Madinah Road with a fitness centre and event facilities.",
    nearby: ["Madinah Road", "Red Sea Mall", "King Abdullah Sports City"],
  },
  {
    slug: "holiday-inn-jeddah-gateway",
    name: "Holiday Inn Jeddah Gateway",
    citySlug: "jeddah",
    stars: 4,
    area: "Airport Road",
    distanceKm: 6,
    durationMin: 10,
    blurb:
      "The closest full-service hotel to the airport, ideal for short layovers and early departures.",
    nearby: ["King Abdulaziz International Airport", "Jeddah Season events", "Madinah Road"],
  },
  {
    slug: "elaf-jeddah",
    name: "Elaf Jeddah Hotel",
    citySlug: "jeddah",
    stars: 4,
    area: "Al Balad / Downtown",
    distanceKm: 30,
    durationMin: 38,
    blurb:
      "A downtown hotel on the edge of historic Al-Balad, close to the old souqs and heritage houses.",
    nearby: ["Al-Balad historic district", "Souq Al Alawi", "Naseef House"],
  },

  // ── Jeddah — 3-star ────────────────────────────────────────────────────────
  {
    slug: "ibis-jeddah-city-center",
    name: "ibis Jeddah City Center",
    citySlug: "jeddah",
    stars: 3,
    area: "Al Madinah Road / City Center",
    distanceKm: 24,
    durationMin: 30,
    blurb:
      "A budget-friendly city-centre hotel on Madinah Road with straightforward, modern rooms.",
    nearby: ["Madinah Road", "Al-Balad historic district", "Jeddah Corniche"],
  },
  {
    slug: "ibis-jeddah-malik-road",
    name: "ibis Jeddah Malik Road",
    citySlug: "jeddah",
    stars: 3,
    area: "Malik Road",
    distanceKm: 19,
    durationMin: 25,
    blurb:
      "An economical hotel on Malik Road, convenient for the airport and northern business area.",
    nearby: ["Malik Road", "Red Sea Mall", "King Abdullah Sports City"],
  },
  {
    slug: "red-sea-palace-jeddah",
    name: "Red Sea Palace Hotel",
    citySlug: "jeddah",
    stars: 3,
    area: "Al-Balad (Old Jeddah)",
    distanceKm: 31,
    durationMin: 39,
    blurb:
      "A long-standing waterfront hotel in Al-Balad, within walking distance of the historic quarter.",
    nearby: ["Al-Balad historic district", "Souq Al Alawi", "Jeddah Corniche"],
  },
];

export const hotelMap: Record<string, Hotel> = Object.fromEntries(
  hotels.map((h) => [`${h.citySlug}/${h.slug}`, h])
);

/** All hotels sitting in a given city. */
export function hotelsForCity(citySlug: string): Hotel[] {
  return hotels.filter((h) => h.citySlug === citySlug);
}

/** Look up a single hotel by city + slug. */
export function getHotel(citySlug: string, slug: string): Hotel | undefined {
  return hotelMap[`${citySlug}/${slug}`];
}
