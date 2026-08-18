import type { PointTransfer } from "../jeddah/types";

/**
 * AlUla point-to-point and luxury resort transfer pages.
 * Served at /alula/{slug} via the shared point-transfer route.
 */
const rawAlulaPoints: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "alula-airport-to-habitas-and-banyan-tree",
    category: "service",
    from: "AlUla International Airport (ULH)",
    to: "Habitas, Banyan Tree & Ashar Valley Luxury Resorts",
    h1: "AlUla Airport to Habitas & Banyan Tree Luxury Resort Transfer",
    metaTitle: "AlUla Airport to Habitas & Banyan Tree Transfer | Chauffeur",
    metaDescription:
      "Private luxury SUV transfer from AlUla Airport (ULH) to Habitas, Banyan Tree & Ashar Valley resorts. Meet & greet, fixed price, 24/7.",
    intro:
      "Arrive at the Kingdom's premier heritage and luxury sanctuary with seamless VIP ground transportation. Our private chauffeur transfer from Prince Abdul Majeed bin Abdulaziz International Airport (ULH) connects directly with Habitas AlUla, Banyan Tree AlUla, and all premier desert resorts in the Ashar Valley.",
    distance: "~45–55 km depending on resort",
    duration: "40–50 min",
    highlights: [
      "Personalized meet-and-greet inside ULH arrival hall with luggage assistance",
      "Premium 4x4 executive SUVs (GMC Yukon, Chevrolet Tahoe/Suburban) and luxury sedans",
      "Real-time flight tracking covering all commercial, VIP, and private charter flights",
      "Direct drop-off at Habitas, Banyan Tree, Shaden Resort, and Ashar Valley villas",
      "Fixed, all-inclusive luxury pricing with no hidden desert road surcharges",
      "Experienced local chauffeurs knowledgeable about AlUla's canyon roads and resort gates",
    ],
    sections: [
      {
        heading: "Arriving in AlUla: The Gateway to Ashar Valley",
        paragraphs: [
          "Prince Abdul Majeed bin Abdulaziz International Airport (ULH) serves as the primary aviation gateway to AlUla's ancient Nabataean civilization, UNESCO World Heritage site at Hegra, and the dramatic sandstone canyons of the Ashar Valley. Located approximately 30 kilometers southeast of AlUla town and roughly 45 to 55 kilometers from the secluded luxury resorts in Ashar Valley, traveling to your desert villa requires dedicated private road transport.",
          "Because on-demand taxis and ride-hailing apps are virtually nonexistent in this vast desert terrain, pre-booking a private chauffeur ensures your air-conditioned luxury vehicle is staged and ready the moment you land.",
        ],
      },
      {
        heading: "Exclusive Chauffeur Service to Premier Desert Resorts",
        paragraphs: [
          "Our drivers regularly provide transfers to AlUla's most prestigious hospitality sanctuaries:",
          "• **Habitas AlUla:** An eco-luxury hospitality sanctuary nestled between towering sandstone cliffs in the Ashar Valley.",
          "• **Banyan Tree AlUla:** An all-villa luxury retreat featuring tented pavilions and world-class wellness facilities.",
          "• **Shaden Resort & Caravan AlUla:** Luxury glamping and canyon-side chalets close to Elephant Rock.",
          "• **Our Habitas Caravan & Cloud7 Residence:** Contemporary desert living in the heart of the oasis.",
        ],
      },
      {
        heading: "Exploring Hegra, Maraya, and the Ancient Oasis",
        paragraphs: [
          "Beyond your initial airport-to-resort transfer, AlUla's iconic landmarks—including the mirrored Maraya Concert Hall, the ancient tombs of Hegra (Mada'in Salih), Dadan, Jabal Ikmah, and the restored AlUla Old Town—are spread across dozens of kilometers of desert landscape.",
          "We offer full-day and multi-day dedicated chauffeur services, allowing you to explore the heritage valley at your own leisure with an experienced driver on standby throughout your stay.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is Habitas and Banyan Tree from AlUla Airport (ULH)?",
        answer:
          "The distance is approximately 45 to 55 kilometers, taking roughly 40 to 50 minutes along the scenic desert highway and Ashar Valley access road.",
      },
      {
        question: "Where will the driver meet me at AlUla Airport?",
        answer:
          "Your driver will wait inside the ULH arrivals concourse holding a personalized name board, assist with your luggage, and escort you directly to your executive vehicle.",
      },
      {
        question: "What vehicle types are used for desert resort transfers?",
        answer:
          "We utilize premium full-size 4x4 SUVs (such as GMC Yukon and Chevrolet Tahoe) and executive passenger vans equipped with powerful climate control and ample luggage space for long-haul luggage and photography equipment.",
      },
      {
        question: "Can I book a driver for full-day sightseeing around AlUla?",
        answer:
          "Yes. Full-day and multi-day private chauffeur services are available to take you between your resort, Hegra, Maraya, Elephant Rock, and the Old Town.",
      },
      {
        question: "Can I book a return transfer from Habitas or Banyan Tree back to the airport?",
        answer:
          "Yes. Return transfers can be scheduled in advance with direct villa lobby collection timed perfectly to your outbound flight.",
      },
    ],
    relatedTransferSlugs: [],
    relatedRouteSlugs: ["madinah-to-alula", "alula-to-tabuk"],
    keywords: [
      "alula airport to habitas transfer",
      "banyan tree alula airport taxi",
      "alula airport to ashar valley chauffeur",
      "ulh airport private transfer luxury resort",
      "alula luxury suv airport pickup",
    ],
  },
];

export const alulaPoints: PointTransfer[] = rawAlulaPoints.map((t) => ({
  ...t,
  citySlug: "alula",
}));
