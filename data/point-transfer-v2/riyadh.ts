import type { PointTransferV2Page } from "./types";

/**
 * Riyadh V2 point-transfer pages — redesigned onto PointTransferV2View.
 * Replaces data/riyadh/points.ts (see lib/point-transfers-v2.ts).
 */
export const riyadhPointTransfersV2: PointTransferV2Page[] = [
  {
    slug: "king-khalid-airport-to-kafd",
    citySlug: "riyadh",
    from: "King Khalid International Airport (RUH)",
    to: "King Abdullah Financial District (KAFD)",
    h1: "King Khalid Airport to KAFD Private Transfer",
    metaTitle: "King Khalid Airport to KAFD Transfer | Riyadh Chauffeur",
    metaDescription:
      "Book executive private transfer from King Khalid Airport (RUH) to KAFD. Meet & greet, fixed quotes, flight tracking, and business sedans.",
    distance: "~32 km",
    duration: "25-35 min",
    content: {
      category: "service",
      eyebrow: "Executive ground transport to KAFD",
      dek: "Riyadh's modern financial district, reached with executive meet-and-greet, real-time flight tracking and vehicles matched to a corporate delegation.",
      stats: [
        { label: "Distance", value: "~32 km" },
        { label: "Drive time", value: "25-35 min", emphasis: true },
        { label: "Peak-hour allowance", value: "40-50 min" },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "About KAFD",
          paragraphs: [
            "King Abdullah Financial District hosts regional headquarters for multinational corporations, financial institutions, consultancies and lifestyle hotels, located along the King Fahd Road/Northern Ring Road corridor. It's designed with subterranean logistics tunnels, multi-level parking decks and security checkpoints for individual towers and hotels — access routes drivers on this route know well, including the KAFD Conference Center, World Trade Center tower, and hotels such as the Kimpton KAFD.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Terminal meet-and-greet",
          paragraphs: [
            "Whichever terminal you land at — Terminal 1/2 for long-haul international, Terminal 3/4 for Saudia, or the low-cost Terminal 5 — your driver monitors your flight status in real time and adjusts the pickup automatically for early or delayed arrivals, meeting you in the arrivals hall with a personalized name board.",
          ],
        },
        {
          type: "vehiclePlanning",
          heading: "For corporate delegations",
          paragraphs: [
            "Executive sedans, luxury SUVs (GMC Yukon) and Mercedes V-Class vans are available, matched to your delegation's size and luggage. If your schedule needs a return transfer to the airport or a driver on standby between meetings in Olaya, the Diplomatic Quarter or Diriyah, flexible hourly and full-day hire is available across Riyadh.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Riyadh to Diriyah", href: "/riyadh/riyadh-to-diriyah-transfers" },
            { label: "King Khalid Airport to RICEC", href: "/riyadh/king-khalid-airport-to-ricec-exhibition-center" },
          ],
        },
      ],
      faqs: [
        { question: "How long is the drive from RUH to KAFD?", answer: "Approximately 32 km, roughly 25-35 minutes via Airport Road and Northern Ring Road under typical traffic; allow 40-50 minutes during peak commuting hours." },
        { question: "Where will my driver meet me at RUH?", answer: "Inside your specific terminal's arrivals hall (Terminals 1-5), holding a name board with your name or company logo." },
        { question: "What happens if my inbound flight is delayed?", answer: "We track all commercial and private flights in real time and adjust the pickup to your actual landing time at no extra charge." },
        { question: "Can I book a vehicle for a corporate delegation?", answer: "Yes — executive sedans, full-size SUVs, and executive vans are available depending on your group and luggage." },
      ],
    },
  },
  {
    slug: "riyadh-to-diriyah-transfers",
    citySlug: "riyadh",
    from: "Riyadh City / Airport",
    to: "Diriyah & Bujairi Terrace",
    h1: "Riyadh to Diriyah & Bujairi Terrace Private Transfer",
    metaTitle: "Riyadh to Diriyah Private Transfer | Chauffeur & Taxi",
    metaDescription:
      "Book a private chauffeur from Riyadh hotels or King Khalid Airport to Diriyah & Bujairi Terrace. Fixed price, round-trip waiting, door-to-door, 24/7.",
    distance: "~25-40 km depending on origin",
    duration: "25-45 min",
    content: {
      category: "attraction",
      eyebrow: "The birthplace of the Saudi state",
      dek: "Where the commercial /routes/riyadh-to-diriyah page covers booking the ride, this page covers planning the visit itself — timing, parking realities, and the round-trip.",
      stats: [
        { label: "Distance", value: "~25-40 km" },
        { label: "Drive time", value: "25-45 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "What's at Diriyah",
          paragraphs: [
            "Diriyah sits on the northwestern edge of Riyadh along Wadi Hanifah, home to the UNESCO World Heritage site of At-Turaif — the historic mud-brick seat of the first Saudi state — and Bujairi Terrace, a culinary precinct with views of the illuminated historic ruins. It's one of the Kingdom's most-visited cultural destinations, especially in the evening.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Planning the visit",
          stats: [
            { label: "From Olaya/KAFD", value: "~20-25 km, 25-35 min" },
            { label: "From Diplomatic Quarter", value: "~15-20 min" },
            { label: "From RUH Airport", value: "35-45 min" },
          ],
          paragraphs: [
            "Because Diriyah draws high visitor volumes especially in evenings, weekends and cultural seasons, parking near the heritage pavilions can be congested — a private transfer sidesteps that entirely, dropping you at the main Bujairi Terrace entrance.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Round-trip and waiting options",
          paragraphs: [
            "Finding a reliable on-demand ride when leaving Diriyah late in the evening can mean extended waits and surge pricing. A round-trip booking keeps your driver on standby nearby throughout your visit — a simple message coordinates pickup at the valet area when you're ready to leave.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related",
          links: [
            { label: "King Khalid Airport to KAFD", href: "/riyadh/king-khalid-airport-to-kafd" },
            { label: "Riyadh to Diriyah (booking)", href: "/routes/riyadh-to-diriyah" },
          ],
        },
      ],
      faqs: [
        { question: "How far is Diriyah from central Riyadh hotels?", answer: "Approximately 20-25 km from districts like Olaya and KAFD, typically 25-35 minutes; from the Diplomatic Quarter, about 15-20 minutes." },
        { question: "Can the driver wait while I dine at Bujairi Terrace?", answer: "Yes — round-trip packages with waiting time are available, so your driver is staged nearby and ready when you finish." },
        { question: "Can I book directly from King Khalid Airport to Diriyah?", answer: "Yes, with meet-and-greet at RUH, typically 35-45 minutes depending on traffic." },
        { question: "Are child seats available?", answer: "Yes, on request when booking." },
      ],
    },
  },
  {
    slug: "king-khalid-airport-to-ricec-exhibition-center",
    citySlug: "riyadh",
    from: "King Khalid International Airport (RUH)",
    to: "Riyadh Exhibition & Convention Centers",
    h1: "King Khalid Airport to Riyadh Exhibition Center Transfer",
    metaTitle: "Riyadh Airport to Exhibition Center Transfer | Chauffeur",
    metaDescription:
      "Private transfers from King Khalid Airport (RUH) to Riyadh International Convention & Exhibition Center (RICEC) and Riyadh Front Exhibition Center. Fixed quotes, 24/7.",
    distance: "~20-30 km depending on venue",
    duration: "20-30 min",
    content: {
      category: "service",
      eyebrow: "For trade delegates and exhibitors",
      dek: "Riyadh's exhibition calendar — LEAP, Cityscape Global, the World Defense Show, FII — draws heavy traffic around the convention venues; punctual ground transport matters most on event days.",
      stats: [
        { label: "Distance", value: "~20-30 km" },
        { label: "Drive time", value: "20-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Venues covered",
          paragraphs: [
            "Riyadh Front Exhibition & Conference Center (RFECC) sits near Airport Road, 15-20 minutes from RUH terminals. Riyadh International Convention & Exhibition Center (RICEC) is centrally located on King Abdullah Road in Al-Waha, roughly 25-30 minutes away. KAFD Conference Center and the Malham exhibition grounds for heavy-industry and defense expos are also covered.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Meet-and-greet for exhibitors",
          paragraphs: [
            "Drivers monitor your flight and drop off at VIP exhibitor gates, organizer entrances or registration halls, with luggage capacity for exhibition displays and marketing materials in addition to standard baggage.",
          ],
        },
        {
          type: "checklist",
          heading: "For corporate delegations",
          items: [
            "Multi-passenger business vans for delegations travelling together",
            "Multi-day chauffeur standby packages available throughout major trade summits",
            "Corporate invoice support and 24/7 WhatsApp assistance",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related",
          links: [
            { label: "King Khalid Airport to KAFD", href: "/riyadh/king-khalid-airport-to-kafd" },
            { label: "Riyadh to Diriyah", href: "/riyadh/riyadh-to-diriyah-transfers" },
          ],
        },
      ],
      faqs: [
        { question: "Which exhibition centers do you serve?", answer: "RFECC, RICEC on King Abdullah Road, KAFD Conference Center, and the Malham exhibition grounds." },
        { question: "Can you carry teams with promotional materials and luggage?", answer: "Yes — executive SUVs and larger vans with ample space for display materials and banners." },
        { question: "Can I book a dedicated chauffeur for a multi-day conference?", answer: "Yes, full-day and multi-day packages with a driver on standby for hotel transfers, sessions and business dinners." },
        { question: "How long from RUH to Riyadh Front?", answer: "Approximately 18 km, typically 15-20 minutes under normal traffic." },
      ],
    },
  },
];
