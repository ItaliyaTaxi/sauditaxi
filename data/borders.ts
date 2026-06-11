export interface Border {
  slug: string;
  /** Display name of the crossing. */
  name: string;
  /** Neighbouring country. */
  country: string;
  /** Name of the physical crossing point. */
  crossing: string;
  intro: string;
  about: string;
  /** Common Saudi pickup cities for this border (display strings). */
  pickupCities: string[];
  /** Practical notes — used for unique content. */
  notes: string[];
  /** City slugs for internal linking. */
  relatedCitySlugs: string[];
  metaTitle?: string;
  metaDescription?: string;
  /** Optional hero image override + alt; falls back to a themed scene. */
  heroImage?: string;
  heroAlt?: string;
}

export const borders: Border[] = [
  {
    slug: "bahrain-causeway",
    name: "Bahrain Causeway Transfer",
    country: "Bahrain",
    crossing: "King Fahd Causeway",
    intro:
      "Private taxi transfers across the King Fahd Causeway between Saudi Arabia's Eastern Province and Bahrain.",
    about:
      "The King Fahd Causeway links Khobar and Dammam directly to Manama. Our private Bahrain Causeway transfer collects you from any Eastern Province location and drives door-to-door into Bahrain, with guidance on the border process and the causeway toll.",
    pickupCities: ["Khobar", "Dammam", "Jubail", "Hofuf"],
    notes: [
      "Crosses the 25 km King Fahd Causeway",
      "Valid passport and visa required",
      "Allow extra time for immigration at both sides",
      "Door-to-door to Manama or anywhere in Bahrain",
    ],
    relatedCitySlugs: ["khobar", "dammam", "jubail", "hofuf"],
    metaTitle: "Bahrain Causeway Taxi | Saudi to Bahrain Transfers",
    metaDescription:
      "Private taxi over the King Fahd Causeway from Khobar and Dammam to Bahrain. Door-to-door cross-border transfers with WhatsApp booking.",
  },
  {
    slug: "qatar-border",
    name: "Qatar Border Transfer",
    country: "Qatar",
    crossing: "Salwa Border Crossing",
    intro:
      "Private long-distance taxi transfers to the Salwa border crossing between Saudi Arabia and Qatar.",
    about:
      "The Salwa crossing is the main land gateway to Qatar. Our private Qatar border transfer drives you from Riyadh, Dammam, or Hofuf across the desert to Salwa, with comfortable vehicles and planned rest stops for the long journey.",
    pickupCities: ["Riyadh", "Dammam", "Hofuf", "Khobar"],
    notes: [
      "Drop-off at the Salwa border crossing",
      "Valid travel documents required",
      "Long desert journey with rest stops",
      "Onward Qatar transport arranged separately",
    ],
    relatedCitySlugs: ["riyadh", "dammam", "hofuf"],
    metaTitle: "Qatar Border Taxi | Saudi to Salwa Crossing Transfers",
    metaDescription:
      "Private taxi to the Salwa border crossing between Saudi Arabia and Qatar from Riyadh, Dammam, and the Eastern Province.",
  },
  {
    slug: "uae-border",
    name: "UAE Border Transfer",
    country: "United Arab Emirates",
    crossing: "Al Batha Border Crossing",
    intro:
      "Private long-distance taxi transfers toward the UAE via the Al Batha border crossing.",
    about:
      "The Al Batha crossing connects the Eastern Province to the UAE. Our private UAE border transfer drives you from Dammam, Khobar, or Hofuf to Al Batha for onward travel to Abu Dhabi and Dubai, with comfortable vehicles for the long route.",
    pickupCities: ["Dammam", "Khobar", "Hofuf", "Riyadh"],
    notes: [
      "Drop-off at the Al Batha border crossing",
      "Valid passport and UAE visa required",
      "Long journey with planned rest stops",
      "Onward UAE transport arranged separately",
    ],
    relatedCitySlugs: ["dammam", "khobar", "hofuf"],
    metaTitle: "UAE Border Taxi | Saudi to Al Batha Crossing Transfers",
    metaDescription:
      "Private taxi to the Al Batha border crossing between Saudi Arabia and the UAE from Dammam, Khobar, and the Eastern Province.",
  },
  {
    slug: "kuwait-border",
    name: "Kuwait Border Transfer",
    country: "Kuwait",
    crossing: "Al Khafji / Nuwaiseeb Border Crossing",
    intro:
      "Private long-distance taxi transfers to the Kuwait border via the Al Khafji crossing.",
    about:
      "The Al Khafji crossing on the northern Gulf coast links Saudi Arabia to Kuwait. Our private Kuwait border transfer drives you from Dammam, Jubail, or Riyadh to the crossing, with comfortable vehicles for the northern desert route.",
    pickupCities: ["Dammam", "Jubail", "Khobar", "Riyadh"],
    notes: [
      "Drop-off at the Al Khafji border crossing",
      "Valid passport and Kuwait visa required",
      "Northern desert route with rest stops",
      "Onward Kuwait transport arranged separately",
    ],
    relatedCitySlugs: ["dammam", "jubail", "khobar"],
    metaTitle: "Kuwait Border Taxi | Saudi to Al Khafji Crossing Transfers",
    metaDescription:
      "Private taxi to the Al Khafji border crossing between Saudi Arabia and Kuwait from Dammam, Jubail, and the Eastern Province.",
  },
  {
    slug: "jordan-border",
    name: "Jordan Border Transfer",
    country: "Jordan",
    crossing: "Al Haditha / Al Durra Border Crossing",
    intro:
      "Private long-distance taxi transfers toward Jordan via the Al Haditha border crossing in the north.",
    about:
      "The Al Haditha crossing links northern Saudi Arabia to Jordan. Our private Jordan border transfer drives you from Tabuk, Hail, or Riyadh to the crossing for onward travel to Amman and Aqaba, with comfortable vehicles for the long northern route.",
    pickupCities: ["Tabuk", "Hail", "Riyadh", "AlUla"],
    notes: [
      "Drop-off at the Al Haditha border crossing",
      "Valid passport and Jordan visa required",
      "Long northern desert journey with rest stops",
      "Onward Jordan transport arranged separately",
    ],
    relatedCitySlugs: ["tabuk", "hail", "alula"],
    metaTitle: "Jordan Border Taxi | Saudi to Al Haditha Crossing Transfers",
    metaDescription:
      "Private taxi to the Al Haditha border crossing between Saudi Arabia and Jordan from Tabuk, Hail, and northern Saudi Arabia.",
  },
];

export const borderMap: Record<string, Border> = Object.fromEntries(
  borders.map((b) => [b.slug, b])
);

export function getBorder(slug: string): Border | undefined {
  return borderMap[slug];
}
