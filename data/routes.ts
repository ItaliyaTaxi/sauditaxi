export type RouteCategory = "religious" | "intercity" | "border" | "airport";

export interface Route {
  slug: string;
  from: string;
  to: string;
  category: RouteCategory;
  /** Approximate driving distance, e.g. "420 km". */
  distance: string;
  /** Approximate driving time, e.g. "4 hours". */
  duration: string;
  intro: string;
  /** Unique paragraph describing the journey. */
  about: string;
  /** Things travellers should know — used for unique content. */
  notes: string[];
  /** City slugs referenced by this route, for internal linking. */
  relatedCitySlugs: string[];
  metaTitle?: string;
  metaDescription?: string;
  /** Optional hero image override + alt; falls back to a themed scene. */
  heroImage?: string;
  heroAlt?: string;
}

export const routes: Route[] = [
  {
    slug: "jeddah-to-makkah",
    from: "Jeddah",
    to: "Makkah",
    category: "religious",
    distance: "85 km",
    duration: "1 hour 15 min",
    intro:
      "The Jeddah to Makkah taxi is the most requested transfer in the Kingdom — a direct private ride from the airport or city to your Makkah hotel near the Haram.",
    about:
      "Most pilgrims land at Jeddah's King Abdulaziz International Airport and travel straight to Makkah to begin Umrah. Our private Jeddah to Makkah transfer meets you at the Hajj Terminal or Terminal 1, helps with luggage, and drops you at your hotel near the Haram — no shared waiting, no surge pricing.",
    notes: [
      "Pickup available from JED airport or any Jeddah hotel",
      "Drop-off directly at Makkah hotels near the Haram",
      "Family vans available for pilgrims with luggage",
      "Available 24/7 to match flight arrival times",
    ],
    relatedCitySlugs: ["jeddah", "makkah"],
  },
  {
    slug: "makkah-to-madinah",
    from: "Makkah",
    to: "Madinah",
    category: "religious",
    distance: "450 km",
    duration: "4 hours 30 min",
    intro:
      "The Makkah to Madinah taxi is a comfortable private long-distance transfer along the Hijra highway between the two Holy Cities.",
    about:
      "After completing Umrah in Makkah, many pilgrims travel to Madinah to visit the Prophet's Mosque. Our private Makkah to Madinah transfer uses comfortable vehicles with rest-stop flexibility, ideal for families and elders making the 450 km journey.",
    notes: [
      "Comfortable vehicles for the long highway journey",
      "Rest-stop flexibility along the route",
      "Hotel-to-hotel private service",
      "Reverse Madinah to Makkah transfers also available",
    ],
    relatedCitySlugs: ["makkah", "madinah"],
  },
  {
    slug: "madinah-to-makkah",
    from: "Madinah",
    to: "Makkah",
    category: "religious",
    distance: "450 km",
    duration: "4 hours 30 min",
    intro:
      "The Madinah to Makkah taxi offers a private hotel-to-hotel transfer for pilgrims travelling from the Prophet's Mosque to begin or continue Umrah.",
    about:
      "Pilgrims who arrive at Madinah airport often visit the Prophet's Mosque first, then travel to Makkah. Our private Madinah to Makkah transfer provides a smooth, direct ride with luggage assistance and miqat stop flexibility for those entering ihram on the way.",
    notes: [
      "Miqat stop available for entering ihram",
      "Direct hotel-to-hotel transfer",
      "Comfortable vehicles for the 450 km journey",
      "Available 24/7 for any arrival time",
    ],
    relatedCitySlugs: ["madinah", "makkah"],
  },
  {
    slug: "jeddah-to-madinah",
    from: "Jeddah",
    to: "Madinah",
    category: "religious",
    distance: "420 km",
    duration: "4 hours",
    intro:
      "The Jeddah to Madinah taxi is a private long-distance transfer for pilgrims and travellers heading north to the Prophet's Mosque.",
    about:
      "Some pilgrims fly into Jeddah but begin their journey in Madinah. Our private Jeddah to Madinah transfer provides a direct, comfortable ride from the airport or city, with luggage help and flexible timing for evening or early-morning flights.",
    notes: [
      "Pickup from Jeddah airport or city hotels",
      "Direct drop-off at Madinah hotels",
      "Comfortable vehicles for the 420 km journey",
      "Available for late and early flight arrivals",
    ],
    relatedCitySlugs: ["jeddah", "madinah"],
  },
  {
    slug: "riyadh-to-dammam",
    from: "Riyadh",
    to: "Dammam",
    category: "intercity",
    distance: "400 km",
    duration: "3 hours 45 min",
    intro:
      "The Riyadh to Dammam taxi is a popular business and family transfer along the highway linking the capital with the Eastern Province.",
    about:
      "Our private Riyadh to Dammam transfer connects the capital with the energy capital in under four hours. It is a favourite of business travellers and families heading to Khobar, Dhahran, or the Bahrain Causeway, with comfortable vehicles for the highway run.",
    notes: [
      "Door-to-door private transfer",
      "Onward connections to Khobar and Bahrain",
      "Comfortable vehicles for the 400 km drive",
      "Reverse Dammam to Riyadh transfers available",
    ],
    relatedCitySlugs: ["riyadh", "dammam"],
  },
  {
    slug: "dammam-to-riyadh",
    from: "Dammam",
    to: "Riyadh",
    category: "intercity",
    distance: "400 km",
    duration: "3 hours 45 min",
    intro:
      "The Dammam to Riyadh taxi is a direct private transfer from the Eastern Province to the capital for business and family travel.",
    about:
      "Our private Dammam to Riyadh transfer is ideal for travellers connecting from the Bahrain Causeway or King Fahd Airport to the capital. Comfortable vehicles, fixed quotes, and door-to-door pickup make the 400 km highway journey easy.",
    notes: [
      "Pickup from Dammam, Khobar, or the Causeway",
      "Direct drop-off anywhere in Riyadh",
      "Comfortable vehicles for the long drive",
      "Available 24/7 with fixed quotes",
    ],
    relatedCitySlugs: ["dammam", "riyadh"],
  },
  {
    slug: "riyadh-to-jeddah",
    from: "Riyadh",
    to: "Jeddah",
    category: "intercity",
    distance: "950 km",
    duration: "9 hours",
    intro:
      "The Riyadh to Jeddah taxi is a long-distance private transfer across the Kingdom for travellers who prefer the road over flying.",
    about:
      "Our private Riyadh to Jeddah transfer covers the cross-country highway with comfortable vehicles and planned rest stops. While many fly this route, private road transfer suits families with luggage, groups, and those continuing to Makkah after arrival.",
    notes: [
      "Comfortable vehicles for the 950 km journey",
      "Planned rest stops along the highway",
      "Onward connections to Makkah and Taif",
      "Best suited to groups and families with luggage",
    ],
    relatedCitySlugs: ["riyadh", "jeddah"],
  },
  {
    slug: "riyadh-to-alula",
    from: "Riyadh",
    to: "AlUla",
    category: "intercity",
    distance: "1,000 km",
    duration: "9 hours 30 min",
    intro:
      "The Riyadh to AlUla taxi is a long-distance private transfer to the Kingdom's flagship heritage destination.",
    about:
      "Our private Riyadh to AlUla transfer is designed for travellers heading to Hegra and the AlUla resorts who prefer a private vehicle for the scenic desert journey. Comfortable SUVs and vans make the long drive relaxed, with flexible rest stops.",
    notes: [
      "Comfortable SUVs and vans for desert touring",
      "Flexible rest stops on the long route",
      "Drop-off at AlUla resorts and heritage sites",
      "Often combined with Madinah and Hail trips",
    ],
    relatedCitySlugs: ["riyadh", "alula"],
  },
  {
    slug: "madinah-to-alula",
    from: "Madinah",
    to: "AlUla",
    category: "intercity",
    distance: "330 km",
    duration: "3 hours 15 min",
    intro:
      "The Madinah to AlUla taxi is a popular private transfer linking the Prophet's Mosque with the Hegra heritage site.",
    about:
      "Many visitors combine Madinah with AlUla. Our private Madinah to AlUla transfer offers a comfortable, direct ride from your Madinah hotel or the airport to AlUla's resorts and heritage sites, with scenic desert views along the way.",
    notes: [
      "Pickup from Madinah airport or hotels",
      "Drop-off at AlUla resorts and Old Town",
      "Scenic desert route in comfortable vehicles",
      "Reverse AlUla to Madinah transfers available",
    ],
    relatedCitySlugs: ["madinah", "alula"],
  },
  {
    slug: "jeddah-to-taif",
    from: "Jeddah",
    to: "Taif",
    category: "intercity",
    distance: "170 km",
    duration: "2 hours",
    intro:
      "The Jeddah to Taif taxi is a scenic private transfer up to the cool mountain city above Makkah.",
    about:
      "Our private Jeddah to Taif transfer climbs the Al Hada mountain road to the rose city of Taif. It is a favourite summer escape for families and pilgrims, with comfortable vehicles for the winding ascent and cable-car add-on stops.",
    notes: [
      "Scenic Al Hada mountain road",
      "Pickup from Jeddah airport or hotels",
      "Cable-car and Al Shafa stop options",
      "Comfortable vehicles for the mountain climb",
    ],
    relatedCitySlugs: ["jeddah", "taif"],
  },
  {
    slug: "khobar-to-bahrain",
    from: "Khobar",
    to: "Bahrain",
    category: "border",
    distance: "55 km",
    duration: "1 hour (plus border)",
    intro:
      "The Khobar to Bahrain taxi crosses the King Fahd Causeway for a private door-to-door transfer between Saudi Arabia and Manama.",
    about:
      "Our private Khobar to Bahrain transfer takes you across the King Fahd Causeway directly to your Manama hotel or destination. We advise on documentation and border procedures, and pricing reflects the causeway toll and crossing time.",
    notes: [
      "Crosses the King Fahd Causeway",
      "Allow extra time for border formalities",
      "Valid travel documents required",
      "Door-to-door to Manama or anywhere in Bahrain",
    ],
    relatedCitySlugs: ["khobar", "dammam"],
  },
  {
    slug: "dammam-to-bahrain",
    from: "Dammam",
    to: "Bahrain",
    category: "border",
    distance: "70 km",
    duration: "1 hour 15 min (plus border)",
    intro:
      "The Dammam to Bahrain taxi is a private cross-border transfer over the King Fahd Causeway to Manama.",
    about:
      "Our private Dammam to Bahrain transfer collects you from King Fahd Airport, your hotel, or office and drives directly across the causeway to Bahrain. We guide you through the border process and offer comfortable vehicles for families and business travellers.",
    notes: [
      "Pickup from Dammam airport, hotel, or office",
      "Crosses the King Fahd Causeway to Manama",
      "Valid passports and visas required",
      "Allow extra time for border crossing",
    ],
    relatedCitySlugs: ["dammam", "khobar"],
  },
  {
    slug: "riyadh-to-qatar-border",
    from: "Riyadh",
    to: "Qatar Border",
    category: "border",
    distance: "640 km",
    duration: "6 hours (to Salwa border)",
    intro:
      "The Riyadh to Qatar border taxi is a long-distance private transfer to the Salwa crossing for onward travel into Qatar.",
    about:
      "Our private Riyadh to Qatar border transfer drives you across the desert to the Salwa border crossing, the main land gateway between Saudi Arabia and Qatar. Comfortable vehicles and planned stops make the long journey manageable for families and business travellers.",
    notes: [
      "Drop-off at the Salwa border crossing",
      "Valid travel documents required for the border",
      "Comfortable vehicles for the 640 km drive",
      "Onward Qatar transport arranged separately",
    ],
    relatedCitySlugs: ["riyadh"],
  },
  {
    slug: "dammam-airport-to-khobar",
    from: "Dammam Airport",
    to: "Al Khobar",
    category: "airport",
    distance: "35 km",
    duration: "30 min",
    intro:
      "The Dammam Airport to Al Khobar taxi is a quick private transfer from King Fahd International Airport to the city's waterfront hotels and the Bahrain Causeway.",
    about:
      "King Fahd International Airport (DMM) sits north of the Dammam–Khobar metro area, and a private transfer is the fastest, most comfortable way into Al Khobar. We meet you in the arrivals hall, help with your luggage, and drive directly to your hotel along the Corniche, a business address, or the King Fahd Causeway for onward travel to Bahrain — at a fixed price agreed before you land.",
    notes: [
      "Meet-and-greet pickup at King Fahd Airport (DMM)",
      "Direct drop-off at Al Khobar hotels and the Corniche",
      "Onward connections to the Bahrain Causeway",
      "Flight-tracked pickup with free wait time",
    ],
    relatedCitySlugs: ["khobar", "dammam"],
    metaTitle: "Dammam Airport to Al Khobar Taxi | Private Transfer",
    metaDescription:
      "Book a private Dammam Airport (DMM) to Al Khobar taxi — a quick 30-minute transfer with meet-and-greet pickup, fixed prices, and comfortable family vehicles.",
  },
  {
    slug: "makkah-to-jeddah",
    from: "Makkah",
    to: "Jeddah",
    category: "religious",
    distance: "85 km",
    duration: "1 hour 15 min",
    intro:
      "The Makkah to Jeddah taxi is a direct private transfer from the holy city to Jeddah's hotels, Corniche, and King Abdulaziz International Airport.",
    about:
      "After completing Umrah, many pilgrims travel back to Jeddah to catch a flight home or continue their journey. Our private Makkah to Jeddah transfer collects you from your hotel near the Haram and drives you door-to-door to the airport or anywhere in Jeddah, timed to your flight with no shared waiting and no surge pricing.",
    notes: [
      "Hotel pickup near the Haram in Makkah",
      "Direct drop-off at Jeddah airport, hotels, or the Corniche",
      "Flight-timed departures with luggage assistance",
      "Reverse Jeddah to Makkah transfers also available",
    ],
    relatedCitySlugs: ["makkah", "jeddah"],
    metaTitle: "Makkah to Jeddah Taxi | Private Transfer",
    metaDescription:
      "Book a private Makkah to Jeddah taxi (85 km, approx. 1 hr 15 min) to the airport, hotels, or Corniche. Fixed price, flight-timed pickup, and door-to-door comfort.",
  },
  {
    slug: "madinah-to-jeddah",
    from: "Madinah",
    to: "Jeddah",
    category: "religious",
    distance: "420 km",
    duration: "4 hours",
    intro:
      "The Madinah to Jeddah taxi is a comfortable long-distance private transfer for pilgrims and travellers heading from the Prophet's Mosque back to Jeddah.",
    about:
      "Pilgrims who finish their visit to Madinah often fly home from Jeddah or continue to Makkah. Our private Madinah to Jeddah transfer offers a relaxed, direct ride with rest-stop flexibility along the highway, hotel-to-airport timing, and comfortable vehicles for families travelling with luggage after a long stay.",
    notes: [
      "Pickup from Madinah hotels or the airport",
      "Direct drop-off at Jeddah airport or city hotels",
      "Rest stops on the 420 km journey",
      "Comfortable vehicles for families and groups",
    ],
    relatedCitySlugs: ["madinah", "jeddah"],
    metaTitle: "Madinah to Jeddah Taxi | Private Transfer",
    metaDescription:
      "Book a private Madinah to Jeddah taxi (420 km, approx. 4 hours) with rest stops, fixed pricing, and door-to-door comfort to the airport or your Jeddah hotel.",
  },
  {
    slug: "taif-to-jeddah",
    from: "Taif",
    to: "Jeddah",
    category: "intercity",
    distance: "170 km",
    duration: "2 hours",
    intro:
      "The Taif to Jeddah taxi is a scenic private transfer down from the cool mountain city to Jeddah's coast, hotels, and airport.",
    about:
      "After a summer escape in the highlands of Taif, our private Taif to Jeddah transfer brings you back down the Al Hada mountain road in comfort. We collect you from your Taif hotel or resort and drive door-to-door to Jeddah airport or the city, with a driver who knows the winding descent well.",
    notes: [
      "Pickup from Taif hotels, resorts, or the airport",
      "Scenic descent via the Al Hada mountain road",
      "Drop-off at Jeddah airport, hotels, or the Corniche",
      "Comfortable vehicles for the mountain journey",
    ],
    relatedCitySlugs: ["taif", "jeddah"],
    metaTitle: "Taif to Jeddah Taxi | Private Transfer",
    metaDescription:
      "Book a private Taif to Jeddah taxi (170 km, approx. 2 hours) down the scenic Al Hada road. Fixed price, door-to-door pickup, and comfortable mountain-road vehicles.",
  },
  {
    slug: "jeddah-to-yanbu",
    from: "Jeddah",
    to: "Yanbu",
    category: "intercity",
    distance: "330 km",
    duration: "3 hours 30 min",
    intro:
      "The Jeddah to Yanbu taxi is a private coastal transfer along the Red Sea to the industrial and resort city of Yanbu.",
    about:
      "Our private Jeddah to Yanbu transfer follows the Red Sea coast north to Yanbu, popular with leisure travellers heading to the beaches and dive sites and with the petrochemical workforce. We pick you up from Jeddah airport or your hotel and drive door-to-door in a comfortable, air-conditioned vehicle with rest-stop flexibility.",
    notes: [
      "Pickup from Jeddah airport or city hotels",
      "Scenic Red Sea coastal highway",
      "Drop-off at Yanbu resorts, the industrial city, or hotels",
      "Reverse Yanbu to Jeddah transfers available",
    ],
    relatedCitySlugs: ["jeddah", "yanbu"],
    metaTitle: "Jeddah to Yanbu Taxi | Private Transfer",
    metaDescription:
      "Book a private Jeddah to Yanbu taxi (330 km, approx. 3 hr 30 min) along the Red Sea coast. Fixed price, door-to-door pickup, and comfortable vehicles with rest stops.",
  },
  {
    slug: "yanbu-to-jeddah",
    from: "Yanbu",
    to: "Jeddah",
    category: "intercity",
    distance: "330 km",
    duration: "3 hours 30 min",
    intro:
      "The Yanbu to Jeddah taxi is a private coastal transfer from the Red Sea city back to Jeddah's hotels and King Abdulaziz International Airport.",
    about:
      "Whether you have been diving on the Yanbu coast or working in the industrial city, our private Yanbu to Jeddah transfer takes you back along the Red Sea highway in comfort. We collect you from your Yanbu hotel or the airport and drive directly to Jeddah, timed to your onward flight with luggage help throughout.",
    notes: [
      "Pickup from Yanbu resorts, the airport, or hotels",
      "Comfortable Red Sea coastal drive",
      "Flight-timed drop-off at Jeddah airport or hotels",
      "Fixed price agreed before you travel",
    ],
    relatedCitySlugs: ["yanbu", "jeddah"],
    metaTitle: "Yanbu to Jeddah Taxi | Private Transfer",
    metaDescription:
      "Book a private Yanbu to Jeddah taxi (330 km, approx. 3 hr 30 min) along the Red Sea coast, with fixed pricing, flight-timed drop-off, and comfortable vehicles.",
  },
  {
    slug: "jeddah-to-kaec",
    from: "Jeddah",
    to: "King Abdullah Economic City",
    category: "intercity",
    distance: "125 km",
    duration: "1 hour 20 min",
    intro:
      "The Jeddah to KAEC taxi is a direct private transfer up the coast to King Abdullah Economic City, its business district, and the Haramain train station.",
    about:
      "King Abdullah Economic City (KAEC) sits about 125 km north of Jeddah and is home to business parks, resorts, and a Haramain High Speed Railway station. Our private Jeddah to KAEC transfer meets you at the airport or your hotel and drives door-to-door in comfort, ideal for business travellers, resort guests, and rail connections.",
    notes: [
      "Pickup from Jeddah airport or city hotels",
      "Drop-off at KAEC business parks, resorts, or the train station",
      "Comfortable vehicles for the coastal drive",
      "Reverse KAEC to Jeddah transfers available",
    ],
    relatedCitySlugs: ["jeddah"],
    metaTitle: "Jeddah to KAEC Taxi | Private Transfer",
    metaDescription:
      "Book a private Jeddah to King Abdullah Economic City (KAEC) taxi (125 km, approx. 1 hr 20 min). Fixed price, door-to-door pickup for business, resorts, and the train.",
  },
  {
    slug: "kaec-to-jeddah",
    from: "King Abdullah Economic City",
    to: "Jeddah",
    category: "intercity",
    distance: "125 km",
    duration: "1 hour 20 min",
    intro:
      "The KAEC to Jeddah taxi is a direct private transfer from King Abdullah Economic City back to Jeddah's hotels and King Abdulaziz International Airport.",
    about:
      "Heading back from a meeting, a resort stay, or the Haramain train at King Abdullah Economic City? Our private KAEC to Jeddah transfer collects you from your hotel, office, or the station and drives directly to Jeddah airport or the city, timed to your flight with a fixed price agreed in advance.",
    notes: [
      "Pickup from KAEC hotels, offices, or the train station",
      "Flight-timed drop-off at Jeddah airport or hotels",
      "Comfortable, air-conditioned coastal drive",
      "Fixed price with no surge pricing",
    ],
    relatedCitySlugs: ["jeddah"],
    metaTitle: "KAEC to Jeddah Taxi | Private Transfer",
    metaDescription:
      "Book a private King Abdullah Economic City (KAEC) to Jeddah taxi (125 km, approx. 1 hr 20 min) to the airport or hotels, with fixed pricing and door-to-door comfort.",
  },
];

export const routeMap: Record<string, Route> = Object.fromEntries(
  routes.map((r) => [r.slug, r])
);

export function getRoute(slug: string): Route | undefined {
  return routeMap[slug];
}
