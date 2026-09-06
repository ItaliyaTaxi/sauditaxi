import type { PointTransferV2Page } from "./types";

/**
 * AlUla V2 point-transfer page — redesigned onto PointTransferV2View.
 * Replaces data/alula/points.ts (see lib/point-transfers-v2.ts).
 */
export const alulaPointTransfersV2: PointTransferV2Page[] = [
  {
    slug: "alula-airport-to-habitas-and-banyan-tree",
    citySlug: "alula",
    from: "AlUla International Airport (ULH)",
    to: "Habitas, Banyan Tree & Ashar Valley Luxury Resorts",
    h1: "AlUla Airport to Habitas & Banyan Tree Luxury Resort Transfer",
    metaTitle: "AlUla Airport to Habitas & Banyan Tree Transfer | Chauffeur",
    metaDescription:
      "Private luxury SUV transfer from AlUla Airport (ULH) to Habitas, Banyan Tree & Ashar Valley resorts. Meet & greet, fixed price, 24/7.",
    distance: "~45-55 km depending on resort",
    duration: "40-50 min",
    content: {
      category: "hotel",
      eyebrow: "The desert has no taxi rank",
      dek: "Prince Abdul Majeed bin Abdulaziz International Airport is the gateway to Hegra and the Ashar Valley resorts — pre-booking is the only reliable way to reach them.",
      stats: [
        { label: "Distance", value: "~45-55 km" },
        { label: "Drive time", value: "40-50 min", emphasis: true },
      ],
      blocks: [
        {
          type: "prepPanel",
          heading: "Before you fly",
          items: [
            "Ride-hailing apps are effectively unavailable in AlUla's desert terrain — pre-booking is the practical option, not just the convenient one",
            "Share your flight details (commercial, VIP or private charter) so the driver tracks your actual landing time",
            "A return transfer to the airport, timed to your outbound flight, can be booked in advance with direct villa lobby collection",
          ],
        },
        {
          type: "locationContext",
          heading: "Resorts covered",
          paragraphs: [
            "Habitas AlUla is an eco-luxury sanctuary nestled between sandstone cliffs in the Ashar Valley. Banyan Tree AlUla is an all-villa retreat with tented pavilions and wellness facilities. Shaden Resort and Caravan AlUla offer canyon-side glamping near Elephant Rock, and Our Habitas Caravan/Cloud7 Residence sit in the heart of the oasis.",
          ],
        },
        {
          type: "vehiclePlanning",
          heading: "Vehicles for the desert roads",
          paragraphs: [
            "Premium 4x4 SUVs (GMC Yukon, Chevrolet Tahoe/Suburban) and executive vans, with drivers experienced on AlUla's canyon roads and resort access gates — ample space for long-haul luggage and photography equipment.",
          ],
        },
        {
          type: "checklist",
          heading: "Beyond the airport transfer",
          items: [
            "Full-day and multi-day chauffeur hire available for exploring Hegra, Maraya, Dadan, Jabal Ikmah and AlUla Old Town",
            "These sites are spread across dozens of kilometres of desert landscape — a dedicated driver on standby is the practical way to see them",
          ],
        },
      ],
      faqs: [
        { question: "How far is Habitas/Banyan Tree from AlUla Airport?", answer: "Approximately 45-55 km, roughly 40-50 minutes along the desert highway and Ashar Valley access road." },
        { question: "Where will the driver meet me at ULH?", answer: "Inside the arrivals concourse, holding a personalized name board, with luggage assistance to your vehicle." },
        { question: "What vehicles are used for desert resort transfers?", answer: "Premium full-size 4x4 SUVs and executive vans with strong climate control and ample luggage space." },
        { question: "Can I book a driver for full-day sightseeing around AlUla?", answer: "Yes — full-day and multi-day chauffeur services are available between your resort, Hegra, Maraya, Elephant Rock and the Old Town." },
      ],
    },
  },
];
