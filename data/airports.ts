import type { Faq } from "@/data/faqs";
import type { GalleryImage } from "@/components/sections/ImageGallery";
import { airportGuides } from "@/data/airport-guides";

export interface Airport {
  slug: string;
  name: string;
  /** IATA code for unique content + schema. */
  code: string;
  city: string;
  /** Slug of the city page this airport serves, if present in data/cities. */
  citySlug?: string;
  region: string;
  intro: string;
  about: string;
  /** Terminals / arrival notes — used for unique content. */
  terminals: string[];
  /** Popular destinations served from this airport (display strings). */
  popularDestinations: string[];
  /**
   * Route slugs for popular onward long-distance transfers from this airport.
   * When populated, the airport page renders linked route cards and a RouteGrid
   * section — providing direct internal link authority to commercial route pages.
   */
  popularRoutes?: string[];
  /**
   * Short slug used in hotel-transfer URLs, e.g. "king-abdulaziz-airport" for
   * `/jeddah/king-abdulaziz-airport-to-jeddah-hilton`. Derived from the airport
   * name when omitted (see lib/hotel-transfers.ts).
   */
  transferSlug?: string;
  /** Short display name used in transfer content, e.g. "King Abdulaziz Airport". */
  transferName?: string;
  metaTitle?: string;
  metaDescription?: string;
  /** Optional hero image override + alt; falls back to a themed scene. */
  heroImage?: string;
  heroAlt?: string;
  /** Rich long-form guide sections (paragraphs may contain inline <a> links). */
  sections?: { heading: string; paragraphs: string[] }[];
  /** Airport-specific FAQs (overrides the generated defaults; capped at 6). */
  faqs?: Faq[];
  /** Target keywords for this page (documentation/reference only). */
  keywords?: string[];
  /** Nearby hotels for internal linking (display name + optional href). */
  nearbyHotels?: { name: string; href?: string }[];
  /** Optional gallery images (rendered only once files are added). */
  images?: GalleryImage[];
  /** ISO date this page's content was last substantively reviewed/updated. */
  lastUpdated?: string;
}

const baseAirports: Airport[] = [
  {
    slug: "riyadh-airport",
    name: "King Khalid International Airport",
    code: "RUH",
    city: "Riyadh",
    citySlug: "riyadh",
    region: "Riyadh Province",
    intro:
      "King Khalid International Airport (RUH) is the main gateway to the Saudi capital, with private meet-and-greet transfers to every Riyadh district and beyond.",
    about:
      "We track your flight and meet you in the arrivals hall at RUH with a name board, then drive you directly to your hotel, office, or onward city. Fixed quotes mean no surge pricing, and our drivers know all five terminals plus the route into central Riyadh and the highways to Dammam and Qassim.",
    terminals: ["Terminal 1 & 2 (international)", "Terminal 3 & 4 (domestic)", "Terminal 5 (low-cost)"],
    popularDestinations: ["Riyadh city", "Diriyah", "Dammam", "Qassim", "AlUla"],
    popularRoutes: [
      "riyadh-to-khobar",
      "riyadh-to-jubail",
      "riyadh-to-hofuf",
      "riyadh-to-qassim",
      "riyadh-to-hail",
      "riyadh-to-taif",
      "riyadh-to-tabuk",
      "riyadh-to-neom",
      "riyadh-airport-to-jeddah",
      "riyadh-airport-to-makkah",
      "riyadh-airport-to-madinah",
    ],
    metaTitle: "Riyadh Airport Taxi | King Khalid (RUH) Terminal 1-5 Transfers",
    metaDescription:
      "Private Riyadh airport taxi from King Khalid International (RUH). Meet-and-greet pickup, fixed quotes, hotel and intercity transfers across Saudi Arabia.",
  },
  {
    slug: "jeddah-airport",
    name: "King Abdulaziz International Airport",
    code: "JED",
    city: "Jeddah",
    citySlug: "jeddah",
    region: "Makkah Province",
    intro:
      "King Abdulaziz International Airport (JED) is the busiest pilgrim gateway in the Kingdom, with direct private transfers to Makkah, Madinah, and Jeddah hotels.",
    about:
      "JED is the first stop for most Umrah and Hajj pilgrims. We provide meet-and-greet at the Hajj Terminal, Terminal 1, and the North Terminal, then drive directly to Makkah hotels near the Haram or onward to Madinah and Taif. Drivers assist with luggage and understand pilgrim schedules.",
    terminals: ["Terminal 1 (North)", "Hajj Terminal", "Domestic terminal"],
    popularDestinations: ["Makkah", "Madinah", "Jeddah city", "Taif"],
    popularRoutes: [
      "jeddah-to-makkah",
      "jeddah-to-madinah",
      "jeddah-to-taif",
      "jeddah-to-yanbu",
      "jeddah-to-kaec",
      "jeddah-airport-to-riyadh",
      "jeddah-airport-to-taif",
      "jeddah-airport-to-yanbu",
    ],
    metaTitle: "Jeddah Airport Transfer & Taxi | JED to Makkah & Hotels",
    metaDescription:
      "Book Jeddah airport taxi from King Abdulaziz International (JED) to Makkah, Madinah, and Jeddah hotels. Meet-and-greet pickup with fixed quotes.",
  },
  {
    slug: "madinah-airport",
    name: "Prince Mohammad bin Abdulaziz International Airport",
    code: "MED",
    city: "Madinah",
    citySlug: "madinah",
    region: "Madinah Province",
    intro:
      "Prince Mohammad bin Abdulaziz International Airport (MED) serves pilgrims visiting the Prophet's Mosque, with private transfers to hotels and onward to Makkah and AlUla.",
    about:
      "Our MED airport service offers meet-and-greet arrivals, direct transfers to hotels around the Haram, and private long-distance rides to Makkah, Yanbu, and AlUla. Drivers are familiar with prayer-time routing and pilgrim luggage needs.",
    terminals: ["International terminal", "Domestic terminal"],
    popularDestinations: ["Madinah city", "Makkah", "AlUla", "Yanbu"],
    popularRoutes: [
      "madinah-to-makkah",
      "madinah-to-alula",
      "madinah-airport-to-riyadh",
    ],
    metaTitle: "Madinah Airport Taxi | Prince Mohammad (MED) Transfers",
    metaDescription:
      "Private Madinah airport taxi from Prince Mohammad bin Abdulaziz International (MED). Hotel transfers, Ziyarat, and rides to Makkah and AlUla.",
  },
  {
    slug: "dammam-airport",
    name: "King Fahd International Airport",
    code: "DMM",
    city: "Dammam",
    citySlug: "dammam",
    region: "Eastern Province",
    intro:
      "King Fahd International Airport (DMM) is the gateway to the Eastern Province and the Bahrain Causeway, with private transfers across the Dammam metro and beyond.",
    about:
      "DMM is the largest airport in the world by land area and serves the energy capital of the Kingdom. We provide meet-and-greet pickups, transfers to Khobar, Dhahran, and Jubail, and cross-border rides to Bahrain via the King Fahd Causeway.",
    terminals: ["Main terminal (international & domestic)"],
    popularDestinations: ["Dammam", "Khobar", "Jubail", "Bahrain", "Riyadh"],
    popularRoutes: [
      "dammam-airport-to-khobar",
      "dammam-airport-to-jubail",
      "dammam-airport-to-hofuf",
      "dammam-airport-to-bahrain",
      "dammam-airport-to-riyadh",
    ],
    metaTitle: "Dammam Airport Taxi | King Fahd (DMM) Transfers",
    metaDescription:
      "Book Dammam airport taxi from King Fahd International (DMM). Transfers to Khobar, Jubail, Riyadh, and the Bahrain Causeway with fixed quotes.",
  },
  {
    slug: "taif-airport",
    name: "Taif Regional Airport",
    code: "TIF",
    city: "Taif",
    citySlug: "taif",
    region: "Makkah Province",
    intro:
      "Taif Regional Airport (TIF) serves the cool mountain city above Makkah, with private transfers to Taif resorts, Makkah, and Jeddah.",
    about:
      "Our TIF airport service provides meet-and-greet arrivals and scenic transfers down the Al Hada mountain road to Makkah, plus rides to Taif's rose farms and the cable car. A popular choice for pilgrims combining Umrah with a highland stay.",
    terminals: ["Main terminal"],
    popularDestinations: ["Taif", "Makkah", "Jeddah", "Al Hada"],
    popularRoutes: [
      "taif-to-riyadh",
      "taif-to-makkah",
      "taif-to-jeddah",
    ],
    metaTitle: "Taif Airport Taxi | Taif Regional (TIF) Transfers",
    metaDescription:
      "Private Taif airport taxi from Taif Regional (TIF). Transfers to Taif resorts, Makkah, and Jeddah via the scenic Al Hada road.",
  },
  {
    slug: "abha-airport",
    name: "Abha International Airport",
    code: "AHB",
    city: "Abha",
    citySlug: "abha",
    region: "Asir Province",
    intro:
      "Abha International Airport (AHB) is the gateway to the green Asir highlands, with private transfers to Abha, Khamis Mushait, and mountain resorts.",
    about:
      "Our AHB airport service offers meet-and-greet arrivals and transfers to Abha and Khamis Mushait hotels, the cable car, and Asir highland resorts at Al Soudah. Ideal for families exploring Saudi Arabia's cooler southern mountains.",
    terminals: ["Main terminal"],
    popularDestinations: ["Abha", "Khamis Mushait", "Al Soudah", "Najran"],
    popularRoutes: [
      "abha-to-riyadh",
      "abha-airport-to-jeddah",
      "abha-airport-to-riyadh",
    ],
    metaTitle: "Abha Airport Taxi | Abha International (AHB) Transfers",
    metaDescription:
      "Private Abha airport taxi from Abha International (AHB). Transfers to Abha, Khamis Mushait hotels, and Asir highland resorts.",
  },
  {
    slug: "tabuk-airport",
    name: "Tabuk Regional Airport",
    code: "TUU",
    city: "Tabuk",
    citySlug: "tabuk",
    region: "Tabuk Province",
    intro:
      "Tabuk Regional Airport (TUU) serves the northwest and the NEOM region, with private transfers to Tabuk city and project areas.",
    about:
      "Our TUU airport service provides meet-and-greet arrivals and transfers to Tabuk hotels, NEOM project sites, and historic landmarks. A practical gateway for business travellers and tourists heading to the Red Sea northwest.",
    terminals: ["Main terminal"],
    popularDestinations: ["Tabuk", "NEOM", "AlUla", "Red Sea coast"],
    popularRoutes: [
      "tabuk-to-riyadh",
      "tabuk-to-alula",
      "tabuk-to-neom",
    ],
    metaTitle: "Tabuk Airport Taxi | Tabuk Regional (TUU) Transfers",
    metaDescription:
      "Private Tabuk airport taxi from Tabuk Regional (TUU). Transfers to Tabuk city, NEOM project areas, and the northwest coast.",
  },
  {
    slug: "yanbu-airport",
    name: "Yanbu Airport",
    code: "YNB",
    city: "Yanbu",
    citySlug: "yanbu",
    region: "Madinah Province",
    intro:
      "Yanbu Airport (YNB) serves the Red Sea industrial and resort city, with private transfers to beaches, the industrial city, and Madinah.",
    about:
      "Our YNB airport service offers meet-and-greet arrivals and transfers to Yanbu resorts, the Royal Commission waterfront, and intercity rides to Madinah and Jeddah for both leisure and corporate travellers.",
    terminals: ["Main terminal"],
    popularDestinations: ["Yanbu", "Madinah", "Jeddah", "AlUla"],
    popularRoutes: [
      "yanbu-to-riyadh",
      "yanbu-to-jeddah",
    ],
    metaTitle: "Yanbu Airport Taxi | Yanbu (YNB) Transfers",
    metaDescription:
      "Private Yanbu airport taxi from Yanbu Airport (YNB). Transfers to Red Sea resorts, the industrial city, and Madinah.",
  },
  {
    slug: "alula-airport",
    name: "Prince Abdul Majeed bin Abdulaziz Airport (AlUla)",
    code: "ULH",
    city: "AlUla",
    citySlug: "alula",
    region: "Madinah Province",
    intro:
      "AlUla International Airport (ULH) is the gateway to Hegra and the Kingdom's flagship heritage destination, with private transfers to resorts and heritage sites.",
    about:
      "Our ULH airport service provides meet-and-greet arrivals and transfers to AlUla resorts, the Old Town, Hegra (Madain Salih), and Maraya. Comfortable vehicles make desert touring and onward trips to Madinah and Tabuk easy.",
    terminals: ["Main terminal"],
    popularDestinations: ["AlUla", "Hegra", "Madinah", "Tabuk"],
    popularRoutes: [
      "alula-to-tabuk",
      "alula-to-neom",
      "alula-airport-to-riyadh",
      "alula-airport-to-jeddah",
    ],
    metaTitle: "AlUla Airport Taxi | AlUla (ULH) Transfers",
    metaDescription:
      "Private AlUla airport taxi from AlUla International (ULH). Transfers to resorts, Hegra, the Old Town, and onward to Madinah and Tabuk.",
  },
  {
    slug: "jazan-airport",
    name: "Jazan Airport",
    code: "GIZ",
    city: "Jazan",
    citySlug: "jazan",
    region: "Jazan Province",
    intro:
      "Jazan Airport (GIZ) serves the tropical southwest coast, with private transfers to the Farasan ferry terminal, the corniche, and the Fifa Mountains.",
    about:
      "Our GIZ airport service offers meet-and-greet arrivals and transfers to Jazan hotels, the Farasan Islands ferry terminal, and the Fifa Mountains, plus intercity rides to Abha and Najran.",
    terminals: ["Main terminal"],
    popularDestinations: ["Jazan", "Farasan ferry", "Abha", "Najran"],
    metaTitle: "Jazan Airport Taxi | Jazan (GIZ) Transfers",
    metaDescription:
      "Private Jazan airport taxi from Jazan Airport (GIZ). Transfers to the Farasan ferry terminal, the corniche, and the Fifa Mountains.",
  },
  {
    slug: "hail-airport",
    name: "Hail Regional Airport",
    code: "HAS",
    city: "Hail",
    citySlug: "hail",
    region: "Hail Province",
    intro:
      "Hail Regional Airport (HAS) serves the historic northern desert city, with private transfers to Hail hotels, rock-art sites, and onward to AlUla.",
    about:
      "Our HAS airport service provides meet-and-greet arrivals and transfers to Hail city, A'arif Fort, the Jubbah rock-art sites, and intercity rides toward AlUla and Qassim.",
    terminals: ["Main terminal"],
    popularDestinations: ["Hail", "Jubbah", "AlUla", "Buraidah"],
    popularRoutes: [
      "hail-to-riyadh",
    ],
    metaTitle: "Hail Airport Taxi | Hail Regional (HAS) Transfers",
    metaDescription:
      "Private Hail airport taxi from Hail Regional (HAS). Transfers to Hail city, rock-art sites, and onward to AlUla and Qassim.",
  },
  {
    slug: "red-sea-airport",
    name: "Red Sea International Airport",
    code: "RSI",
    city: "Red Sea",
    region: "Tabuk Province",
    intro:
      "Red Sea International Airport (RSI) is the luxury aviation gateway to the Red Sea destination, with private transfers to island jetties, Umluj, and coastal resorts.",
    about:
      "We provide personalized meet-and-greet pickups at RSI, transferring guests in luxury 4x4 vehicles and executive vans to the Red Sea marine jetties, coastal island terminals, and mainland resorts. Flight monitoring ensures seamless connection with all international and domestic flights.",
    terminals: ["Main Passenger Terminal", "Private Aviation Terminal"],
    popularDestinations: ["St. Regis Red Sea Jetty", "Nujuma Ritz-Carlton Reserve", "Shebara Island Terminal", "Umluj", "Yanbu"],
    popularRoutes: [
      "jeddah-to-yanbu",
    ],
    metaTitle: "Red Sea Airport Taxi | Red Sea International (RSI) Transfers",
    metaDescription:
      "Private Red Sea Airport taxi from Red Sea International (RSI). Luxury transfers to island jetties, Umluj, and coastal resorts with meet and greet.",
  },
  {
    slug: "neom-bay-airport",
    name: "NEOM Bay Airport",
    code: "NUM",
    city: "NEOM",
    region: "Tabuk Province",
    intro:
      "NEOM Bay Airport (NUM) serves the Kingdom's flagship futuristic region, with private transfers to the NEOM Community, Sindalah Island connections, and Sharma.",
    about:
      "We provide executive meet-and-greet transfers from NEOM Bay Airport (NUM) to NEOM project sectors, Sharma, and coastal boat departures for Sindalah. Professional drivers and premium SUVs ensure smooth, punctual travel across the northwest.",
    terminals: ["Commercial Terminal", "Executive Aviation Terminal"],
    popularDestinations: ["Sindalah Marina Link", "NEOM Community 1 & 2", "Sharma", "Gayal", "Tabuk"],
    popularRoutes: [
      "tabuk-to-neom",
      "alula-to-neom",
    ],
    metaTitle: "NEOM Bay Airport Taxi | NEOM Bay (NUM) Transfers",
    metaDescription:
      "Private NEOM Bay airport taxi from NEOM Bay Airport (NUM). Executive transfers to Sindalah Island connections, NEOM Community, and Sharma.",
  },
];

/** Base airport records enriched with long-form guide content by slug. */
export const airports: Airport[] = baseAirports.map((a) => ({
  ...a,
  ...airportGuides[a.slug],
}));

export const airportMap: Record<string, Airport> = Object.fromEntries(
  airports.map((a) => [a.slug, a])
);

export function getAirport(slug: string): Airport | undefined {
  return airportMap[slug];
}
