import type { LucideIcon } from "lucide-react";
import {
  Plane,
  Building2,
  Route as RouteIcon,
  Milestone,
  MoonStar,
  Tent,
  Landmark,
  Hotel,
} from "lucide-react";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  /** Route path, e.g. "/airport-transfers". */
  href: string;
  name: string;
  /** Short tagline for cards. */
  tagline: string;
  icon: LucideIcon;
  /** H1 / hero heading. */
  heading: string;
  intro: string;
  /** Body paragraphs (unique content). */
  body: string[];
  /** Selling points. */
  features: string[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
  /** Whether to show this card in the main services grid. */
  featured: boolean;
  /** Optional hero image override + alt; falls back to a themed scene. */
  heroImage?: string;
  heroAlt?: string;
}

export const services: Service[] = [
  {
    slug: "airport-transfers",
    href: "/airport-transfers",
    name: "Airport Transfers",
    tagline: "Meet-and-greet pickups at every Saudi airport",
    icon: Plane,
    heading: "Saudi Arabia Airport Transfer Service",
    intro:
      "Book private airport transfers in Saudi Arabia from Riyadh, Jeddah, Madinah, Dammam, Taif, Abha, Tabuk, and more — with flight tracking and meet-and-greet arrivals.",
    body: [
      "Our airport transfer service gives you a private car waiting in arrivals, a driver holding a name board, and a fixed quote agreed before you travel. We track your flight so delays never cost you the ride.",
      "Whether you land at King Khalid (RUH), King Abdulaziz (JED), or any regional airport, we connect you directly to your hotel, office, or onward city. Pilgrims arriving at Jeddah and Madinah can travel straight to Makkah or the Haram with luggage assistance.",
    ],
    features: [
      "Flight tracking with free wait time",
      "Meet-and-greet in the arrivals hall",
      "Fixed quotes with no surge pricing",
      "Direct transfers to Makkah and Madinah",
      "Family vans and SUVs for groups with luggage",
    ],
    faqs: [
      {
        question: "Do you provide airport pickup in Saudi Arabia?",
        answer:
          "Yes. We provide meet-and-greet pickup at all major Saudi airports including Riyadh, Jeddah, Madinah, Dammam, Taif, Abha, Tabuk, Yanbu, AlUla, Jazan, and Hail.",
      },
      {
        question: "Can I book a taxi from Jeddah airport to Makkah?",
        answer:
          "Yes. The Jeddah airport to Makkah transfer is our most popular route. We meet you at the Hajj Terminal or Terminal 1 and drive directly to your Makkah hotel near the Haram.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "We track your flight number and adjust the pickup time automatically, with free wait time included so you are never charged extra for a delay.",
      },
    ],
    metaTitle: "Saudi Arabia Airport Transfer | Private Taxi Booking",
    metaDescription:
      "Book private airport transfers in Saudi Arabia from Riyadh, Jeddah, Madinah, Dammam, Taif, Abha, Tabuk, and more. Flight tracking and meet-and-greet.",
    featured: true,
  },
  {
    slug: "city-transfers",
    href: "/city-transfers",
    name: "City Transfers",
    tagline: "Private taxi service in every major Saudi city",
    icon: Building2,
    heading: "City Taxi & Transfer Service in Saudi Arabia",
    intro:
      "Private taxi service across Saudi Arabia's major cities — Riyadh, Jeddah, Makkah, Madinah, Dammam, and beyond — for hotels, business, and family travel.",
    body: [
      "Our city transfer service covers local rides, hotel pickups, business meetings, and full-day hires in every major Saudi city. Book a single trip or a driver for the day through WhatsApp or our quote form.",
      "Each city has its own dedicated page with local landmarks, popular routes, and vehicle options, so you always know exactly what to expect before you travel.",
    ],
    features: [
      "Local rides and hotel transfers",
      "Full-day driver hire",
      "English-speaking drivers",
      "Fixed quotes agreed in advance",
      "Coverage in 19+ Saudi cities",
    ],
    faqs: [
      {
        question: "Which cities do you cover?",
        answer:
          "We provide private taxi service in Riyadh, Jeddah, Makkah, Madinah, Dammam, Khobar, Jubail, Taif, Abha, Tabuk, AlUla, Yanbu, Hail, Najran, Jazan, Buraidah, Hofuf, Al Ahsa, and Khamis Mushait.",
      },
      {
        question: "Can I hire a car with a driver for the full day?",
        answer:
          "Yes. Full-day driver hire is available in all major cities — ideal for business meetings, sightseeing, and family outings.",
      },
    ],
    metaTitle: "City Taxi Service Saudi Arabia | Private City Transfers",
    metaDescription:
      "Private city taxi service in Riyadh, Jeddah, Makkah, Madinah, Dammam, and more. Hotel pickups, business travel, and full-day driver hire.",
    featured: true,
  },
  {
    slug: "intercity-transfers",
    href: "/intercity-transfers",
    name: "Intercity Transfers",
    tagline: "Private long-distance rides between Saudi cities",
    icon: RouteIcon,
    heading: "Intercity Taxi Service in Saudi Arabia",
    intro:
      "Private intercity taxi service across Saudi Arabia including Riyadh, Jeddah, Makkah, Madinah, Dammam, AlUla, Taif, and more.",
    body: [
      "Skip the bus schedules and shared cars. Our intercity transfer service gives you a private vehicle, door-to-door, for long-distance journeys between any two Saudi cities — with rest-stop flexibility on the longer routes.",
      "Popular intercity routes include Riyadh to Dammam, Makkah to Madinah, Jeddah to Taif, and Riyadh to AlUla. Every route has a dedicated page with distance, duration, and what to expect.",
    ],
    features: [
      "Door-to-door private transfers",
      "Comfortable vehicles for long journeys",
      "Rest-stop flexibility",
      "Fixed quotes for the full trip",
      "Groups and families welcome",
    ],
    faqs: [
      {
        question: "Can I travel between any two Saudi cities?",
        answer:
          "Yes. We arrange private intercity transfers between all major Saudi cities. Send us your pickup and drop-off and we will provide a fixed quote.",
      },
      {
        question: "Are rest stops included on long routes?",
        answer:
          "Yes. On longer journeys such as Riyadh to Jeddah or Riyadh to AlUla, the driver will stop for rest and refreshments as needed.",
      },
    ],
    metaTitle: "Intercity Taxi Saudi Arabia | Long-Distance Transfers",
    metaDescription:
      "Private intercity taxi service across Saudi Arabia including Riyadh, Jeddah, Makkah, Madinah, Dammam, AlUla, Taif, and more.",
    featured: true,
  },
  {
    slug: "border-transfers",
    href: "/border-transfers",
    name: "Border Transfers",
    tagline: "Cross-border rides to Bahrain, Qatar, UAE & more",
    icon: Milestone,
    heading: "Saudi Border Taxi Transfers",
    intro:
      "Private Saudi border taxi transfers for Bahrain, Qatar, UAE, Kuwait, and Jordan routes. Book safe long-distance cross-border rides by WhatsApp.",
    body: [
      "Our border transfer service handles the long-distance journey to the Kingdom's land crossings, including the King Fahd Causeway to Bahrain and the Salwa crossing to Qatar. We advise on documentation and border procedures before you travel.",
      "Each border has a dedicated page covering the crossing point, pickup cities, and practical notes so your cross-border journey is smooth and predictable.",
    ],
    features: [
      "King Fahd Causeway transfers to Bahrain",
      "Salwa crossing transfers to Qatar",
      "Al Batha crossing toward the UAE",
      "Guidance on border documentation",
      "Comfortable vehicles for long routes",
    ],
    faqs: [
      {
        question: "Can I book a border transfer from Saudi Arabia to Bahrain?",
        answer:
          "Yes. We provide private transfers over the King Fahd Causeway from Khobar and Dammam directly to Manama and anywhere in Bahrain.",
      },
      {
        question: "What documents do I need for a border transfer?",
        answer:
          "You will need a valid passport and the appropriate visa for the destination country. We advise on the specific requirements when you book.",
      },
    ],
    metaTitle: "Saudi Border Taxi Transfers | Bahrain, Qatar, UAE & Kuwait",
    metaDescription:
      "Private Saudi border taxi transfers for Bahrain, Qatar, UAE, Kuwait, and Jordan routes. Book safe long-distance rides by WhatsApp.",
    featured: true,
  },
  {
    slug: "umrah-taxi-service",
    href: "/umrah-taxi-service",
    name: "Umrah Taxi Service",
    tagline: "Private transfers for Umrah pilgrims",
    icon: MoonStar,
    heading: "Umrah Taxi Service in Saudi Arabia",
    intro:
      "Book private Umrah taxi service for Jeddah airport to Makkah, Makkah to Madinah, Ziyarat, and hotel transfers.",
    body: [
      "Our Umrah taxi service is built around the pilgrim journey: meet-and-greet at Jeddah or Madinah airport, direct transfers to your hotel near the Haram, and comfortable long-distance rides between Makkah and Madinah.",
      "We provide family vans for pilgrims travelling with luggage and elders, miqat stops for entering ihram, and Ziyarat tours of the historic Islamic sites in both Holy Cities.",
    ],
    features: [
      "Jeddah airport to Makkah transfers",
      "Makkah to Madinah private rides",
      "Miqat stops for entering ihram",
      "Ziyarat tours in Makkah and Madinah",
      "Family vans for pilgrims with luggage",
    ],
    faqs: [
      {
        question: "Do you provide Makkah to Madinah private transfers?",
        answer:
          "Yes. We provide comfortable private Makkah to Madinah transfers along the Hijra highway, with rest-stop flexibility for families and elders.",
      },
      {
        question: "Can the driver stop at the miqat for ihram?",
        answer:
          "Yes. On transfers where you need to enter ihram, the driver will stop at the appropriate miqat so you can prepare.",
      },
      {
        question: "Can I book a taxi from Jeddah airport to Makkah for Umrah?",
        answer:
          "Yes. This is our most requested Umrah transfer. We meet you at the airport and drive directly to your Makkah hotel near the Haram.",
      },
    ],
    metaTitle: "Umrah Taxi Saudi Arabia | Makkah & Madinah Transfers",
    metaDescription:
      "Book private Umrah taxi service for Jeddah airport to Makkah, Makkah to Madinah, Ziyarat, and hotel transfers.",
    featured: true,
  },
  {
    slug: "hajj-transport-service",
    href: "/hajj-transport-service",
    name: "Hajj Transport Service",
    tagline: "Group transport for Hajj pilgrims",
    icon: Tent,
    heading: "Hajj Transport Service in Saudi Arabia",
    intro:
      "Private and group Hajj transport for airport arrivals, hotel transfers, and travel between Makkah, Mina, Arafat, and Madinah.",
    body: [
      "Our Hajj transport service supports pilgrim groups with airport meet-and-greet at Jeddah and Madinah, hotel transfers around the Haram, and vans and minibuses sized for families and large parties.",
      "We plan transfers around the Hajj schedule and assist with luggage so your group can focus on the pilgrimage. Book early in the season to secure larger vehicles.",
    ],
    features: [
      "Group vans and minibuses",
      "Jeddah and Madinah airport meet-and-greet",
      "Hotel transfers around the Haram",
      "Makkah and Madinah connections",
      "Early-season group booking",
    ],
    faqs: [
      {
        question: "Do you provide group transport for Hajj?",
        answer:
          "Yes. We provide vans and minibuses for Hajj groups, with vehicles sized to your party and luggage. We recommend booking early in the Hajj season.",
      },
      {
        question: "Can you collect a large group from Jeddah airport?",
        answer:
          "Yes. We arrange meet-and-greet for groups at Jeddah and Madinah airports and transfer everyone together to Makkah or Madinah.",
      },
    ],
    metaTitle: "Hajj Transport Saudi Arabia | Group Pilgrim Transfers",
    metaDescription:
      "Private and group Hajj transport for airport arrivals, hotel transfers, and travel between Makkah, Mina, Arafat, and Madinah.",
    featured: true,
  },
  {
    slug: "ziyarat-taxi-service",
    href: "/ziyarat-taxi-service",
    name: "Ziyarat Taxi Service",
    tagline: "Guided-style visits to historic Islamic sites",
    icon: Landmark,
    heading: "Ziyarat Taxi Service in Makkah & Madinah",
    intro:
      "Private Ziyarat taxi service to visit the historic Islamic sites of Makkah and Madinah with a knowledgeable driver.",
    body: [
      "Our Ziyarat taxi service takes you to the significant historic sites in the Holy Cities — Jabal al-Noor and Mina in Makkah, and Quba, Uhud, and Qiblatain in Madinah — at your own pace in a private vehicle.",
      "Choose a half-day or full-day Ziyarat tour. The driver knows each site and the best times to visit to avoid the busiest crowds.",
    ],
    features: [
      "Makkah Ziyarat: Mina, Arafat, Jabal al-Noor",
      "Madinah Ziyarat: Quba, Uhud, Qiblatain",
      "Half-day and full-day options",
      "Private vehicle at your own pace",
      "Knowledgeable local drivers",
    ],
    faqs: [
      {
        question: "What sites are included in a Ziyarat tour?",
        answer:
          "In Makkah we visit sites such as Jabal al-Noor (Cave of Hira), Mina, and Arafat. In Madinah we visit Quba Mosque, Mount Uhud, and Masjid al-Qiblatain.",
      },
      {
        question: "How long does a Ziyarat tour take?",
        answer:
          "We offer both half-day and full-day Ziyarat tours. The full-day option allows a more relaxed visit to all the major sites.",
      },
    ],
    metaTitle: "Ziyarat Taxi Service | Makkah & Madinah Historic Site Tours",
    metaDescription:
      "Private Ziyarat taxi service to visit the historic Islamic sites of Makkah and Madinah with a knowledgeable driver. Half-day and full-day tours.",
    featured: true,
  },
  {
    slug: "hotel-transfers",
    href: "/services/hotel-transfers",
    name: "Hotel Transfers",
    tagline: "Door-to-door hotel pickups and drop-offs",
    icon: Hotel,
    heading: "Hotel Transfer Service in Saudi Arabia",
    intro:
      "Private hotel transfer service across Saudi Arabia for arrivals, departures, and city-to-city hotel moves.",
    body: [
      "Our hotel transfer service connects airports, hotels, and homes door-to-door. It is popular with pilgrims moving between Makkah and Madinah hotels and with tourists changing cities.",
      "Tell us your hotel name and we handle the rest — including luggage help and timing around check-in and check-out.",
    ],
    features: [
      "Airport-to-hotel and hotel-to-hotel transfers",
      "Luggage assistance",
      "Timing around check-in and check-out",
      "Coverage across all major cities",
    ],
    faqs: [
      {
        question: "Can you transfer me between hotels in Makkah and Madinah?",
        answer:
          "Yes. Hotel-to-hotel transfers between the Holy Cities are one of our most common bookings, with comfortable vehicles for the journey.",
      },
    ],
    metaTitle: "Hotel Transfer Service Saudi Arabia | Private Hotel Taxi",
    metaDescription:
      "Private hotel transfer service across Saudi Arabia for arrivals, departures, and city-to-city hotel moves with luggage assistance.",
    featured: false,
  },
];

export const serviceMap: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export function getService(slug: string): Service | undefined {
  return serviceMap[slug];
}

/** Services rendered in the main services grid / homepage. */
export const featuredServices = services.filter((s) => s.featured);
