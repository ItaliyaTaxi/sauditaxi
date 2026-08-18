import type { PointTransfer } from "../jeddah/types";

/**
 * Riyadh point-to-point and commercial destination transfer pages.
 * Served at /riyadh/{slug} via the shared point-transfer route.
 */
const rawRiyadhPoints: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "king-khalid-airport-to-kafd",
    category: "service",
    from: "King Khalid International Airport (RUH)",
    to: "King Abdullah Financial District (KAFD)",
    h1: "King Khalid Airport to KAFD Private Transfer",
    metaTitle: "King Khalid Airport to KAFD Transfer | Riyadh Chauffeur",
    metaDescription:
      "Book executive private transfer from King Khalid Airport (RUH) to KAFD. Meet & greet, fixed quotes, flight tracking, and business sedans.",
    intro:
      "Arrive in Riyadh and travel directly to the Kingdom's premier financial and business capital. Our private airport transfer from King Khalid International Airport (RUH) to King Abdullah Financial District (KAFD) provides executive meet-and-greet, real-time flight tracking, and fixed rates with zero surge pricing.",
    distance: "~32 km",
    duration: "25–35 min",
    highlights: [
      "Meet and greet inside RUH Terminals 1, 2, 3, 4, or 5 with personalized name board",
      "Real-time flight tracking with complimentary wait time for flight delays",
      "Executive sedans, luxury SUVs (GMC Yukon), and Mercedes V-Class vans",
      "Direct drop-off at KAFD corporate towers, hotels, and residential residences",
      "Fixed, all-inclusive pricing agreed in advance — no meters or airport surcharges",
      "24/7 round-the-clock availability for international and domestic arrivals",
    ],
    sections: [
      {
        heading: "Executive Airport Ground Transport to KAFD",
        paragraphs: [
          "King Abdullah Financial District (KAFD) represents the modern commercial heart of Saudi Arabia, hosting regional headquarters for global multinational corporations, financial institutions, consultancies, and luxury lifestyle hotels. Located approximately 32 kilometers south of King Khalid International Airport (RUH) along the King Fahd Road / Northern Ring Road corridor, the journey typically takes 25 to 35 minutes under normal driving conditions.",
          "Navigating a sprawling financial district after an international flight requires punctual, seamless transport. Rather than waiting in unpredictable taxi queues or negotiating app pickups in busy airport lanes, our pre-booked chauffeur service guarantees your driver is staged at the arrivals terminal before your aircraft touches down.",
        ],
      },
      {
        heading: "Terminal Meet-and-Greet & Luggage Assistance",
        paragraphs: [
          "Whether you land at Terminal 1 or 2 on a long-haul international flight, Terminal 3 or 4 on Saudia, or the low-cost carrier Terminal 5, your driver monitors your flight status in real time. If your flight arrives early or is delayed by air traffic control, your pickup time adjusts automatically.",
          "Your driver greets you directly in the arrivals hall holding a personalized name board, assists with your luggage and presentation materials, and escorts you to your air-conditioned executive vehicle. For executive delegations and corporate teams, we ensure vehicle capacity matches your party size and luggage requirements perfectly.",
        ],
      },
      {
        heading: "Navigating KAFD Access and Building Drop-Offs",
        paragraphs: [
          "KAFD is designed with specialized subterranean logistics tunnels, multi-level parking decks, and security checkpoints for individual corporate towers and hotels. Our experienced drivers know the exact access routes for major KAFD landmarks, including the KAFD Conference Center, World Trade Center tower, corporate headquarters, and luxury hotels such as the Kimpton KAFD and surrounding executive suites.",
          "If your schedule requires a return transfer to the airport or a driver on standby between business meetings in Olaya, the Diplomatic Quarter, or Diriyah, we provide flexible hourly and full-day chauffeur hire across Riyadh.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is the drive from King Khalid Airport (RUH) to KAFD?",
        answer:
          "The distance is approximately 32 kilometers, taking roughly 25 to 35 minutes via Airport Road and Northern Ring Road under typical traffic conditions. Allow 40 to 50 minutes during peak morning and evening commuting hours.",
      },
      {
        question: "Where will my driver meet me at RUH Airport?",
        answer:
          "Your driver will wait inside your specific terminal's arrivals hall (Terminals 1, 2, 3, 4, or 5) holding a clear name board with your name or corporate company logo.",
      },
      {
        question: "What happens if my inbound flight to Riyadh is delayed?",
        answer:
          "We track all commercial and private flights in real time. Your driver adjusts the pickup schedule to your actual landing time at no extra charge.",
      },
      {
        question: "Can I book a vehicle suitable for a corporate delegation with luggage?",
        answer:
          "Yes. We offer executive business sedans, premium full-size SUVs (such as GMC Yukon and Chevrolet Suburban), and executive Mercedes-Benz V-Class / Toyota HiAce VIP passenger vans.",
      },
      {
        question: "Can I book a return transfer from KAFD back to King Khalid Airport?",
        answer:
          "Yes. You can pre-book your return transfer at the same fixed rate with punctual hotel or office lobby pickup timed to your flight departure.",
      },
    ],
    relatedTransferSlugs: [
      "riyadh-to-diriyah-transfers",
      "king-khalid-airport-to-ricec-exhibition-center",
    ],
    keywords: [
      "king khalid airport to kafd transfer",
      "ruh to kafd taxi",
      "king abdullah financial district airport transfer",
      "riyadh airport to kafd chauffeur",
      "kafd executive car service",
    ],
  },
  {
    slug: "riyadh-to-diriyah-transfers",
    category: "attraction",
    from: "Riyadh City / Airport",
    to: "Diriyah & Bujairi Terrace",
    h1: "Riyadh to Diriyah & Bujairi Terrace Private Transfer",
    metaTitle: "Riyadh to Diriyah Private Transfer | Chauffeur & Taxi",
    metaDescription:
      "Book a private chauffeur from Riyadh hotels or King Khalid Airport to Diriyah & Bujairi Terrace. Fixed price, round-trip waiting, door-to-door, 24/7.",
    intro:
      "Experience the historic birthplace of the Saudi state in total comfort. Our private transfer service connects all Riyadh hotels, the Diplomatic Quarter, and King Khalid International Airport directly with the UNESCO World Heritage site of At-Turaif and the premier dining destination of Bujairi Terrace in Diriyah.",
    distance: "~25–40 km depending on origin",
    duration: "25–45 min",
    highlights: [
      "Door-to-door pickup from any Riyadh hotel, compound, or RUH Airport",
      "Direct drop-off at Bujairi Terrace valet gate and At-Turaif visitor pavilions",
      "Flexible round-trip service with dedicated driver waiting during your dinner or tour",
      "Comfortable executive sedans, spacious family SUVs, and group passenger vans",
      "Fixed quotes agreed in advance — bypass peak-hour rideshare surge pricing",
      "Professional, courteous drivers familiar with Diriyah access routes and parking",
    ],
    sections: [
      {
        heading: "Visiting the UNESCO Heritage City of Diriyah",
        paragraphs: [
          "Diriyah is one of the Kingdom's most iconic cultural and lifestyle destinations. Located on the northwestern edge of Riyadh along the lush Wadi Hanifah, it is home to the UNESCO World Heritage site of At-Turaif—the historic mud-brick seat of the first Saudi state—and Bujairi Terrace, a world-class culinary precinct featuring Michelin-starred restaurants, traditional Saudi dining, and views of the illuminated historic ruins.",
          "Because Diriyah attracts high visitor volumes, especially during evenings, weekends, and cultural seasons, parking near the heritage pavilions can be congested. A private chauffeur provides effortless drop-off at the main Bujairi Terrace entrance and ensures your vehicle is ready the moment you conclude your evening.",
        ],
      },
      {
        heading: "Direct Transfers from Riyadh Hotels and RUH Airport",
        paragraphs: [
          "Whether you are staying in the central business districts of Olaya and King Fahd Road, the luxury towers of KAFD, the leafy Diplomatic Quarter, or arriving directly from King Khalid International Airport (RUH), our drivers choose the fastest arterial highways across Riyadh to ensure a smooth, punctual journey.",
          "For travelers with a layover or an afternoon to spare before an evening flight, a trip to Diriyah offers an unforgettable immersion into Saudi history and culinary excellence.",
        ],
      },
      {
        heading: "Round-Trip Chauffeur Service & Standby Options",
        paragraphs: [
          "Finding a reliable on-demand ride when leaving Diriyah late in the evening can involve extended wait times and surge pricing. Our private transfer options include dedicated round-trip service, where your driver remains parked nearby on standby throughout your visit.",
          "When you are ready to depart, a simple WhatsApp message coordinates your pickup at the designated valet area, taking you directly back to your hotel or onward destination without delay.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is Diriyah from central Riyadh hotels?",
        answer:
          "Diriyah is approximately 20 to 25 kilometers from central districts like Olaya and KAFD, typically taking 25 to 35 minutes by private car. From the Diplomatic Quarter, the drive is about 15 to 20 minutes.",
      },
      {
        question: "Can the driver wait for me while I dine at Bujairi Terrace?",
        answer:
          "Yes. We offer round-trip packages with waiting time included, ensuring your driver is staged nearby and ready to collect you as soon as your dinner or heritage tour concludes.",
      },
      {
        question: "Can I book a transfer from King Khalid Airport directly to Diriyah?",
        answer:
          "Yes. We provide direct meet-and-greet airport pickups from RUH to Diriyah, with travel times averaging 35 to 45 minutes depending on traffic.",
      },
      {
        question: "Are child seats available for family trips to Diriyah?",
        answer:
          "Yes. Child safety seats and booster seats are available upon request when booking your private vehicle.",
      },
    ],
    relatedTransferSlugs: [
      "king-khalid-airport-to-kafd",
      "king-khalid-airport-to-ricec-exhibition-center",
    ],
    keywords: [
      "riyadh to diriyah transfer",
      "diriyah private taxi",
      "bujairi terrace private chauffeur",
      "at-turaif transfer riyadh",
      "king khalid airport to diriyah",
    ],
  },
  {
    slug: "king-khalid-airport-to-ricec-exhibition-center",
    category: "service",
    from: "King Khalid International Airport (RUH)",
    to: "Riyadh Exhibition & Convention Centers",
    h1: "King Khalid Airport to Riyadh Exhibition Center Transfer",
    metaTitle: "Riyadh Airport to Exhibition Center Transfer | Chauffeur",
    metaDescription:
      "Private transfers from King Khalid Airport (RUH) to Riyadh International Convention & Exhibition Center (RICEC) and Riyadh Front Exhibition Center. Fixed quotes, 24/7.",
    intro:
      "Punctual executive transfers for trade delegates, exhibitors, conference speakers, and business travelers. We connect King Khalid International Airport (RUH) directly with the Riyadh International Convention & Exhibition Center (RICEC on King Abdullah Road) and the Riyadh Front Exhibition & Conference Center (RFECC).",
    distance: "~20–30 km depending on venue",
    duration: "20–30 min",
    highlights: [
      "Meet-and-greet service inside RUH airport terminals with flight tracking",
      "Direct drop-off at VIP exhibitor gates, organizer entrances, and registration halls",
      "Luggage capacity for exhibition displays, marketing materials, and corporate luggage",
      "Multi-passenger business vans (Mercedes V-Class, HiAce VIP) for corporate delegations",
      "Multi-day chauffeur standby packages available throughout major trade summits",
      "Transparent fixed billing with corporate invoice support and 24/7 WhatsApp assistance",
    ],
    sections: [
      {
        heading: "Punctual Ground Transport for Riyadh's Major Summits",
        paragraphs: [
          "Riyadh has established itself as the premier exhibition and trade capital of the Middle East, hosting globally renowned expos including LEAP, Cityscape Global, the World Defense Show, Saudi Build, and the Future Investment Initiative (FII). These events draw tens of thousands of international corporate attendees, creating heavy traffic demand around the city's major convention centers.",
          "Our dedicated airport-to-exhibition transfer service guarantees that business travelers, keynote speakers, and exhibition teams arrive on time without the frustration of negotiating crowded taxi ranks or hailing unavailable street cabs.",
        ],
      },
      {
        heading: "Coverage of All Major Riyadh Convention Venues",
        paragraphs: [
          "Our drivers regularly service all major exhibition and conference venues across the capital:",
          "• **Riyadh Front Exhibition & Conference Center (RFECC):** Located conveniently near Airport Road, just 15 to 20 minutes from RUH terminals.",
          "• **Riyadh International Convention & Exhibition Center (RICEC):** Situated centrally on King Abdullah Road in the Al-Waha district, approximately 25 to 30 minutes from the airport.",
          "• **KAFD Conference Center:** Nestled inside the financial district for high-level summits and economic forums.",
          "• **Riyadh Exhibition Center (Malham):** Specialized venue for heavy industry and global defense expos.",
        ],
      },
      {
        heading: "Corporate Delegation Services & Full-Day Driver Hire",
        paragraphs: [
          "Exhibitions require strict logistical timing. Beyond one-way airport transfers, we offer corporate day-hire services where an executive vehicle and professional driver remain dedicated to your team throughout the conference day.",
          "Your driver handles morning hotel pickups, midday venue transfers, evening networking dinners, and final departures back to King Khalid International Airport with complete reliability.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Riyadh exhibition centers do you serve from the airport?",
        answer:
          "We serve all major venues, including Riyadh Front Exhibition & Conference Center (RFECC), Riyadh International Convention & Exhibition Center (RICEC on King Abdullah Road), KAFD Conference Center, and Malham Exhibition Grounds.",
      },
      {
        question: "Can you provide vehicles for corporate teams with promotional materials and luggage?",
        answer:
          "Yes. We operate full-size executive SUVs and 7-to-14 seater executive passenger vans with ample luggage space for display materials, roll-up banners, and luggage.",
      },
      {
        question: "Can I book a dedicated chauffeur for the duration of a multi-day conference?",
        answer:
          "Yes. Full-day and multi-day chauffeur packages are available with dedicated drivers on standby for hotel transfers, convention sessions, and business dinners.",
      },
      {
        question: "How long is the transfer from King Khalid Airport to Riyadh Front Exhibition Center?",
        answer:
          "Riyadh Front is approximately 18 kilometers from RUH Airport, with driving times typically taking 15 to 20 minutes under normal traffic conditions.",
      },
    ],
    relatedTransferSlugs: [
      "king-khalid-airport-to-kafd",
      "riyadh-to-diriyah-transfers",
    ],
    keywords: [
      "riyadh airport to ricec transfer",
      "king khalid airport to riyadh front exhibition",
      "riyadh exhibition center taxi",
      "leap conference riyadh transfer",
      "riyadh corporate chauffeur exhibition",
    ],
  },
];

export const riyadhPoints: PointTransfer[] = rawRiyadhPoints.map((t) => ({
  ...t,
  citySlug: "riyadh",
}));
