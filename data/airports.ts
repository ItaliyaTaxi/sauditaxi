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
      "riyadh-airport-to-riyadh",
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
    metaTitle: "Riyadh Airport Transfer (RUH) – Private Taxi & Chauffeur",
    metaDescription:
      "Book a private Riyadh Airport (RUH) transfer with meet-and-greet, flight tracking, and fixed pricing. Comfortable rides to your hotel or across the city.",
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
      "jeddah-airport-to-jeddah",
      "jeddah-port-to-makkah",
      "jeddah-to-makkah",
      "jeddah-to-madinah",
      "jeddah-to-taif",
      "jeddah-to-yanbu",
      "jeddah-to-kaec",
      "jeddah-airport-to-riyadh",
      "jeddah-airport-to-taif",
      "jeddah-airport-to-yanbu",
    ],
    metaTitle: "Jeddah Airport Transfer (JED) – Private Car to Makkah",
    metaDescription:
      "Private taxi from Jeddah Airport (JED) to Makkah, Madinah, or your Jeddah hotel. Meet-and-greet pickup, flight tracking, fixed price, 24/7 booking.",
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
      "madinah-airport-to-madinah",
      "madinah-to-makkah",
      "madinah-to-alula",
      "madinah-airport-to-riyadh",
    ],
    metaTitle: "Madinah Airport Transfer (MED) – Private Taxi & Chauffeur",
    metaDescription:
      "Book a private Madinah Airport (MED) transfer with meet-and-greet pickup, hotel drop-off near the Haram, and onward rides to Makkah and AlUla.",
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
      "dammam-to-bahrain-airport",
      "khobar-to-bahrain-airport",
      "dammam-airport-to-khobar",
      "dammam-airport-to-jubail",
      "dammam-airport-to-dhahran",
      "dammam-airport-to-hofuf",
      "dammam-airport-to-bahrain",
      "dammam-airport-to-riyadh",
    ],
    metaTitle: "Dammam Airport Transfer (DMM) – Book a Private Car",
    metaDescription:
      "Private taxi from King Fahd International Airport (DMM) to Khobar, Jubail, Riyadh, or across the Bahrain Causeway. Fixed price, meet-and-greet.",
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
    metaTitle: "Taif Airport Transfer (TIF) – Private Car & Chauffeur",
    metaDescription:
      "Book a private Taif Airport (TIF) transfer, including the scenic Al Hada mountain drive to Makkah and rides to Taif resorts and Jeddah.",
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
    metaTitle: "Abha Airport Transfer (AHB) – Private Taxi & Chauffeur",
    metaDescription:
      "Private taxi from Abha International Airport (AHB) to Abha and Khamis Mushait hotels, the cable car, and Asir highland resorts. Fixed price.",
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
    metaTitle: "Tabuk Airport Transfer (TUU) – Private Car Service",
    metaDescription:
      "Book a private Tabuk Airport (TUU) transfer to Tabuk city, NEOM project sites, and historic landmarks. Meet-and-greet, fixed pricing, 24/7.",
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
    metaTitle: "Yanbu Airport Transfer (YNB) – Private Taxi & Chauffeur",
    metaDescription:
      "Private taxi from Yanbu Airport (YNB) to Red Sea resorts, the Royal Commission waterfront, and intercity rides to Madinah and Jeddah.",
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
      "alula-airport-to-alula",
      "alula-to-tabuk",
      "alula-to-neom",
      "alula-airport-to-riyadh",
      "alula-airport-to-jeddah",
    ],
    metaTitle: "AlUla Airport Transfer (ULH) – Private Car & Chauffeur",
    metaDescription:
      "Book a private AlUla Airport (ULH) transfer to your resort, Hegra, and AlUla Old Town, plus onward rides to Madinah and Tabuk. Fixed price.",
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
    metaTitle: "Jazan Airport Transfer (GIZ) – Private Taxi Service",
    metaDescription:
      "Private taxi from Jazan Airport (GIZ) to the Farasan Islands ferry terminal, Jazan Corniche, and the Fifa Mountains. Fixed price, 24/7.",
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
    metaTitle: "Hail Airport Transfer (HAS) – Private Car Service",
    metaDescription:
      "Book a private Hail Airport (HAS) transfer to Hail city, the A'arif Fort, Jubbah rock-art sites, and onward rides toward AlUla.",
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
    metaTitle: "Red Sea Airport Transfer (RSI) – Luxury Private Car",
    metaDescription:
      "Private luxury transfer from Red Sea International Airport (RSI) to island jetties, resorts, and Umluj. Flight tracking, meet-and-greet.",
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
    metaTitle: "NEOM Bay Airport Transfer (NUM) – Private Executive Car",
    metaDescription:
      "Book a private executive transfer from NEOM Bay Airport (NUM) to NEOM Community sectors, Sharma, and Sindalah boat connections.",
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
