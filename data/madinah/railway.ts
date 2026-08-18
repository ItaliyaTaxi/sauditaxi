import type { PointTransfer } from "../jeddah/types";

/**
 * Madinah Haramain High-Speed Railway station transfer pages.
 * Served at /madinah/{slug} via the shared point-transfer route.
 */
const rawMadinahRailway: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "madinah-train-station-to-prophets-mosque",
    category: "railway",
    from: "Madinah Haramain High-Speed Railway Station (Knowledge City)",
    to: "Prophet's Mosque (Al-Masjid an-Nabawi) & Central Hotels",
    h1: "Madinah Train Station to Prophet's Mosque Private Transfer",
    metaTitle: "Madinah Train Station to Prophet's Mosque Taxi | Transfer",
    metaDescription:
      "Private transfer from Madinah Haramain Train Station to Prophet's Mosque (Al-Masjid an-Nabawi) & Markaziyah hotels. Fixed rates, luggage help, 24/7.",
    intro:
      "Step off the high-speed bullet train and travel directly to the serene sanctuary of the Prophet's Mosque. Our private transfer from Madinah Haramain Railway Station to Al-Masjid an-Nabawi and all Northern, Central, and Southern Markaziyah hotels offers smooth, fixed-price transportation with full luggage assistance for pilgrims and families.",
    distance: "~8–11 km depending on hotel location",
    duration: "15–20 min",
    highlights: [
      "Dedicated driver waiting at Madinah Station passenger arrival exit",
      "Direct drop-off at Central Markaziyah, Northern, Southern, and Western hotel courts",
      "Full luggage handling for pilgrim baggage, personal gear, and wheelchairs",
      "Air-conditioned comfort sedans, spacious family vans (Staria, HiAce), and luxury SUVs",
      "Fixed, all-inclusive pricing with no prayer-time surcharges or meter haggling",
      "Available 24/7 synchronized with all arriving train services from Makkah and Jeddah",
    ],
    sections: [
      {
        heading: "Arriving at Madinah Haramain High-Speed Railway Station",
        paragraphs: [
          "The Madinah Haramain High-Speed Railway Station is an architectural landmark situated in Knowledge Economic City along King Abdulaziz Road, roughly 9 kilometers east of Al-Masjid an-Nabawi (the Prophet's Mosque). The high-speed rail line provides a comfortable 2-hour journey from Makkah and approximately 1.5 hours from Jeddah.",
          "When multiple train carriages disembark at once, station exits and app-based rideshare ranks experience heavy congestion. A pre-arranged private car guarantees that your vehicle is waiting immediately upon arrival, allowing you to proceed directly to your hotel without delay.",
        ],
      },
      {
        heading: "Effortless Drop-Off in the Markaziyah Hotel District",
        paragraphs: [
          "The pedestrian zone surrounding the Prophet's Mosque is divided into the Northern, Southern, and Western Central Districts (Al Markaziyah). Vehicular access and drop-off loops are strictly managed to preserve pedestrian safety for worshippers.",
          "Our drivers are experienced with Madinah's underground ring roads (King Faisal Road) and know the exact vehicular access points for prominent hotels including The Oberoi, Dar Al Taqwa, Anwar Al Madinah Mövenpick, Pullman Zamzam Madinah, Madinah Hilton, and surrounding properties.",
        ],
      },
      {
        heading: "Family-Friendly Pilgrim Transport & Luggage Care",
        paragraphs: [
          "Pilgrim groups traveling with elderly relatives, young children, or substantial luggage benefit immensely from private door-to-door transit. Our vehicles provide generous legroom, strong air conditioning, and ample trunk capacity.",
          "If you plan to visit the historic Islamic sites of Madinah during your stay—such as Quba Mosque, Mount Uhud, and Masjid al-Qiblatain—we also offer dedicated Ziyarat tours and return transfers back to the railway station or Prince Mohammad bin Abdulaziz Airport (MED).",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is the Madinah Haramain Train Station from the Prophet's Mosque?",
        answer:
          "The railway station is approximately 8 to 11 kilometers from Al-Masjid an-Nabawi. By private transfer, the drive typically takes 15 to 20 minutes under normal traffic conditions.",
      },
      {
        question: "Where does the driver meet passengers at Madinah Station?",
        answer:
          "Your driver coordinates via WhatsApp and meets you at the designated passenger arrival pickup point outside the main station concourse, assisting you directly with your bags.",
      },
      {
        question: "Can the driver drop us right at our Markaziyah hotel entrance?",
        answer:
          "Yes. Our drivers navigate the perimeter road network and underground hotel arrival ramps to take you as close to your hotel lobby as municipal pedestrian security permits.",
      },
      {
        question: "What vehicles are available for pilgrim groups?",
        answer:
          "We offer comfortable private sedans, luxury full-size SUVs (GMC Yukon), and multi-passenger family vans (7 to 10 seats) equipped for multiple suitcases and family groups.",
      },
      {
        question: "Can I book a return transfer from my Madinah hotel back to the railway station?",
        answer:
          "Yes. Return transfers can be booked in advance, timed comfortably around your train departure schedule back to Jeddah, Makkah, or KAEC.",
      },
    ],
    relatedTransferSlugs: ["madinah-to-quba-mosque"],
    relatedRouteSlugs: ["makkah-to-madinah", "madinah-to-yanbu"],
    keywords: [
      "madinah train station to prophets mosque transfer",
      "madinah railway station to haram taxi",
      "haramain train madinah hotel taxi",
      "madinah bullet train station pickup",
      "madinah station to markaziyah transfer",
    ],
  },
];

export const madinahRailway: PointTransfer[] = rawMadinahRailway.map((t) => ({
  ...t,
  citySlug: "madinah",
}));
