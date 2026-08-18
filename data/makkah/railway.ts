import type { PointTransfer } from "../jeddah/types";

/**
 * Makkah Haramain High-Speed Railway station transfer pages.
 * Served at /makkah/{slug} via the shared point-transfer route.
 */
const rawMakkahRailway: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "makkah-train-station-to-haram-hotels",
    category: "railway",
    from: "Makkah Haramain High-Speed Railway Station (Rusaifah)",
    to: "Masjid al-Haram & Makkah Hotels",
    h1: "Makkah Train Station to Haram Hotels Transfer",
    metaTitle: "Makkah Train Station to Haram Hotels | Private Taxi",
    metaDescription:
      "Book private taxi transfer from Makkah Haramain Train Station (Rusaifah) to Haram & Clock Tower hotels. Fixed price, luggage help, 24/7.",
    intro:
      "Arrive smoothly by high-speed bullet train and continue directly to your hotel near the Holy Mosque. Our private transfer from Makkah Haramain High-Speed Railway Station (Al Rusaifah) to Masjid al-Haram, Abraj Al-Bait (Clock Tower), and all Makkah hotel districts provides comfortable, door-to-door transportation for pilgrims, families, and groups.",
    distance: "~6–9 km depending on hotel district",
    duration: "15–25 min",
    highlights: [
      "Driver meets you directly outside the station passenger exit with name assistance",
      "Full luggage handling for heavy pilgrim bags, zamzam containers, and wheelchairs",
      "Spacious family vans (Toyota HiAce, Hyundai Staria, Mercedes V-Class) and sedans",
      "Direct drop-off at Clock Tower (Abraj Al-Bait), Jabal Omar, Ajyad, and Aziziyah hotels",
      "Fixed rates with no luggage surcharges, prayer-time surges, or meter negotiations",
      "Round-the-clock availability synchronized with all arriving Haramain train schedules",
    ],
    sections: [
      {
        heading: "Arriving at Makkah Haramain High-Speed Railway Station (Rusaifah)",
        paragraphs: [
          "The Haramain High-Speed Railway connects Makkah with Jeddah, King Abdulaziz International Airport (JED), King Abdullah Economic City (KAEC), and Madinah on modern bullet trains traveling at speeds up to 300 km/h. Makkah's state-of-the-art railway station is located in the Al Rusaifah district, approximately 6 to 9 kilometers west of the Grand Mosque (Masjid al-Haram).",
          "When arriving on a busy train service alongside hundreds of fellow pilgrims, station taxi lines and rideshare pickup points can quickly become overcrowded. A pre-booked private transfer eliminates waiting time and confusion, ensuring your dedicated vehicle and driver are ready the moment you step off the platform.",
        ],
      },
      {
        heading: "Door-to-Door Hotel Drop-Off Around the Haram",
        paragraphs: [
          "Traffic routing around the central Haram precinct is heavily regulated and changes dynamically around the five daily prayer times. Our experienced local drivers are deeply familiar with Makkah's access tunnels, underground drop-off loops, and police checkpoints.",
          "We provide direct hotel drop-offs across all major hotel areas:",
          "• **Abraj Al-Bait / Clock Tower:** Direct access to Fairmont, Raffles Makkah Palace, Swissôtel, and Pullman ZamZam.",
          "• **Jabal Omar Development:** Seamless transfers to Hilton Suites, Conrad Makkah, Hyatt Regency, and Marriott.",
          "• **Ajyad & Ibrahim Al Khalil Roads:** Direct transit to hotels along the southern and western approaches to the Haram.",
          "• **Al Aziziyah & Mahbas Al Jin:** Convenient transfers for pilgrim groups staying in Aziziyah with private vehicle access.",
        ],
      },
      {
        heading: "Comfort for Families, Elders, and Groups with Luggage",
        paragraphs: [
          "Pilgrims traveling between the holy cities often carry substantial luggage, including large suitcases, ihram garments, and prayer essentials. For families with elderly relatives or young children, navigating busy transit hubs on foot can be physically demanding.",
          "Our private fleet includes spacious multi-passenger vans and full-size SUVs with air-conditioned comfort, comfortable seating, and generous boot space, allowing your entire party to travel together without splitting into separate cabs.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is the Makkah Haramain Train Station from Masjid al-Haram?",
        answer:
          "The station in Al Rusaifah is approximately 6 to 9 kilometers from the Grand Mosque. By private car, the drive typically takes 15 to 25 minutes depending on traffic and prayer-time road diversions.",
      },
      {
        question: "Where will my driver meet me at Makkah Train Station?",
        answer:
          "Your driver will coordinate directly via WhatsApp and meet you at the designated passenger pickup lane or station exit with assistance for your luggage.",
      },
      {
        question: "Can you drop us off directly at Clock Tower or Jabal Omar hotels?",
        answer:
          "Yes. Our drivers know the specific underground vehicular arrival ramps and hotel lobby entrances for Abraj Al-Bait, Jabal Omar, and all surrounding properties.",
      },
      {
        question: "What vehicle options are available for families with multiple suitcases?",
        answer:
          "We offer 7-to-10 seater family vans (Hyundai Staria / Toyota HiAce VIP), luxury full-size SUVs (GMC Yukon), and executive sedans designed to accommodate passengers and all luggage comfortably.",
      },
      {
        question: "Can I also book a return transfer from my hotel back to Makkah Train Station?",
        answer:
          "Yes. Return transfers can be booked in advance to ensure you reach the station with plenty of time before your train departure to Madinah or Jeddah.",
      },
    ],
    relatedTransferSlugs: ["makkah-ziyarat-tour"],
    relatedRouteSlugs: ["jeddah-to-makkah", "makkah-to-madinah"],
    keywords: [
      "makkah train station to haram taxi",
      "rusaifah station to clock tower transfer",
      "haramain train makkah hotel transfer",
      "makkah railway station taxi booking",
      "makkah train station to jabal omar transfer",
    ],
  },
];

export const makkahRailway: PointTransfer[] = rawMakkahRailway.map((t) => ({
  ...t,
  citySlug: "makkah",
}));
