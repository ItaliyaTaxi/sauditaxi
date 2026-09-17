import type { ZiyaratTransfersHubContent } from "@/components/services/ZiyaratTransfersHub";

/**
 * Ziyarat Transfers page — 2026 heading-structure update.
 *
 * Verified facts only: real Ziyarat destination pages and distances
 * (data/point-transfer-v2/makkah.ts, data/point-transfer-v2/madinah.ts,
 * matching the figures already published on each page), real route
 * distances (data/routes.ts), real vehicle categories (data/vehicles.ts).
 * Deliberately transportation-focused, not a religious/historical guide —
 * site names are used accurately with no historical or religious claims
 * beyond what each destination page itself already states.
 *
 * Scope note: does not compete with the homepage, Airport Transfers,
 * Intercity Transfers, Umrah Transfers, or Hajj Transfers — this page owns
 * "private Ziyarat transportation in Makkah and Madinah" specifically and
 * links out to the real per-destination pages, the Makkah/Madinah route
 * pages, and the Umrah page rather than duplicating them.
 *
 * Previously rendered via ServiceV2View. Now rendered via the
 * page-specific ZiyaratTransfersHub component, mirroring the Airport/
 * Intercity/Umrah/Hajj restructuring, so this change doesn't touch any
 * other page. HomeSectionCards gained one small additive capability for
 * this page (an optional "extraLinks" row) to surface the 8 real
 * individual destination pages without exceeding the brief's H3 cap —
 * every other existing caller of that component is unaffected.
 */
export const ziyaratTaxiServiceContent: ZiyaratTransfersHubContent = {
  eyebrow: "Ziyarat Transportation",
  h1: "Private Ziyarat Transfers in Makkah and Madinah",
  dek: "Pre-booked private transportation for Ziyarat visits and multi-stop journeys in Makkah, Madinah, and other supported destinations — a single vehicle for the whole outing, with your driver waiting between stops and the route and timing agreed before you travel.",
  heroImage: "/images/heroes/taif.webp",
  heroAlt: "A historic hillside setting in Saudi Arabia",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Ziyarat Destinations",
  secondaryCtaHref: "/ziyarat-taxi-service#destinations",

  coreServiceHeading: "Private Ziyarat Transportation in Saudi Arabia",
  coreServiceParagraphs: [
    "We provide private pickup and drop-off for Ziyarat visits in Makkah and Madinah — a dedicated vehicle and driver, not a shared tour. A single booking can cover multiple stops in one outing, with hotel pickup at the start and return transportation once you're done.",
    "Vehicles are matched to families and groups travelling together, with flexible journey planning around the specific sites you want to see. Tell us your plan when you book and we'll confirm a realistic route before the day itself, rather than fitting you into a fixed group schedule.",
  ],

  makkahHeading: "Makkah Ziyarat Transfers",
  makkahIntro: "Private transportation to Ziyarat destinations around Makkah, as a single-site visit or combined into one multi-stop outing.",
  makkahCards: [
    {
      title: "Makkah Ziyarat Transportation",
      body: "A full-circuit private transfer covering Jabal al-Noor, Jabal Thawr, Mina, Muzdalifah, and Arafat in one booking, with your driver waiting between stops.",
      href: "/makkah/makkah-ziyarat-tour",
      linkLabel: "Makkah Ziyarat tour",
    },
    {
      title: "Private Transfers to Ziyarat Destinations",
      body: "Individual transfers are also available to specific sites — the Cave of Hira, Jabal Thawr, or Makkah's historical landmarks — rather than the full circuit.",
      href: "/makkah/makkah-historical-sites-tour",
      linkLabel: "Makkah historical sites tour",
    },
    {
      title: "Multi-Stop Makkah Ziyarat",
      body: "List the sites you'd like to see and roughly how long at each, and we'll plan the order and confirm realistic timing before your visit.",
    },
    {
      title: "Hotel Pickup for Makkah Ziyarat",
      body: "Collected from your Makkah hotel at the start of the day and returned there once your stops are complete, with the vehicle waiting throughout.",
    },
  ],
  makkahExtraLinksLabel: "Specific Makkah sites:",
  makkahExtraLinks: [
    { label: "Cave of Hira (Jabal al-Noor)", href: "/makkah/makkah-to-cave-of-hira" },
    { label: "Jabal Thawr", href: "/makkah/makkah-to-jabal-thawr" },
  ],

  madinahHeading: "Madinah Ziyarat Transfers",
  madinahIntro: "Private transportation to Ziyarat destinations around Madinah, as a single-site visit or combined into one multi-stop outing.",
  madinahCards: [
    {
      title: "Madinah Ziyarat Transportation",
      body: "Private transfers to Quba Mosque, Mount Uhud, Masjid al-Qiblatain, and the Seven Mosques, each with a waiting driver rather than a fixed-schedule tour.",
      href: "/madinah/madinah-to-quba-mosque",
      linkLabel: "Quba Mosque transfer",
    },
    {
      title: "Private Transfers to Ziyarat Destinations",
      body: "Individual transfers to a specific site — Mount Uhud and the martyrs' cemetery, Masjid al-Qiblatain, or the Seven Mosques — rather than a combined circuit.",
      href: "/madinah/madinah-to-mount-uhud",
      linkLabel: "Mount Uhud transfer",
    },
    {
      title: "Multi-Stop Madinah Ziyarat",
      body: "Combine several Madinah sites in one outing — for example Quba Mosque, the Seven Mosques, and Mount Uhud — rather than separate bookings for each.",
    },
    {
      title: "Hotel Pickup for Madinah Ziyarat",
      body: "Collected from your Madinah hotel near the Prophet's Mosque and returned there once your Ziyarat stops are complete.",
    },
  ],
  madinahExtraLinksLabel: "Specific Madinah sites:",
  madinahExtraLinks: [
    { label: "Masjid al-Qiblatain", href: "/madinah/madinah-to-qiblatain-mosque" },
    { label: "The Seven Mosques", href: "/madinah/madinah-to-seven-mosques" },
  ],

  multiStopHeading: "Private Multi-Stop Ziyarat Transfers",
  multiStopIntro:
    "A single booking can cover several stops in one outing — not every private transfer service offers this, so it's worth confirming when you book rather than assuming.",
  multiStopCards: [
    {
      title: "Plan Multiple Ziyarat Stops",
      body: "List the sites you'd like to visit in your preferred order, with a rough sense of how long at each — even an approximate 20 minutes versus an hour changes the plan.",
    },
    {
      title: "Private Pickup and Drop-Off",
      body: "One vehicle collects you and stays with you between stops, rather than arranging separate transport for each site on the list.",
    },
    {
      title: "Return Transportation to Your Hotel",
      body: "The same vehicle returns you to your hotel once your stops are complete, closing the outing as a single trip rather than a series of bookings.",
    },
  ],

  connectionsHeading: "Ziyarat Travel Between Makkah and Madinah",
  connectionsIntro:
    "Ziyarat visits are often arranged around a stay in both holy cities. Where your itinerary also involves travelling between them, that's covered separately by our intercity routes.",
  connectionsCards: [
    {
      title: "Makkah to Madinah Transfers",
      body: "A genuinely long drive of around 450 km, distinct from the shorter, multi-stop Ziyarat journeys within a single city.",
      href: "/routes/makkah-to-madinah",
      linkLabel: "Makkah to Madinah route",
    },
    {
      title: "Madinah to Makkah Transfers",
      body: "The reverse leg, the same 450 km, for itineraries that begin their Ziyarat visits in Madinah before continuing to Makkah.",
      href: "/routes/madinah-to-makkah",
      linkLabel: "Madinah to Makkah route",
    },
    {
      title: "Ziyarat and Intercity Transportation",
      body: "Combine a day of Ziyarat visits with the wider city-to-city leg of your trip — tell us your full itinerary and we can plan both together.",
      href: "/intercity-transfers",
      linkLabel: "Intercity transfers",
    },
  ],

  familyHeading: "Ziyarat Transfers for Families and Groups",
  familyIntro: "A private vehicle avoids the walking and waiting a group tour can involve — you set the pace, and the car stays close between stops.",
  familyCards: [
    {
      title: "Family Ziyarat Transportation",
      body: "Suited to families with children or elderly relatives, who benefit most from a vehicle that waits rather than a walking tour between sites.",
    },
    {
      title: "Group Ziyarat Transfers",
      body: "One larger vehicle keeps a group together across multiple sites, rather than coordinating separate transport for each traveller.",
    },
    {
      title: "Choosing a Suitable Vehicle",
      body: "Tell us your total numbers, including children, when you book — a sedan suits a couple visiting a few sites, while a larger group needs an SUV or van.",
    },
  ],

  vehiclesHeading: "Private Vehicles for Ziyarat Travel",
  vehiclesIntro: "Vehicle choice comes down to your group size — luggage is rarely a factor for Ziyarat trips, but mention any if relevant.",
  vehicleCards: [
    {
      title: "Private Sedan Transfers",
      body: "Economy and Comfort sedans — Hyundai Accent, Toyota Yaris, Toyota Camry, or Hyundai Sonata — for one to three travellers visiting a few sites.",
    },
    {
      title: "Premium Vehicles",
      body: "Mercedes E-Class or Lexus ES for travellers who prefer a premium cabin, seating up to three passengers.",
    },
    {
      title: "Family Vehicles",
      body: "A Toyota Land Cruiser or GMC Yukon SUV for up to five passengers, with room for a family across a full day of stops.",
    },
    {
      title: "Minivan and Group Transfers",
      body: "A Toyota Hiace or Hyundai Staria van for up to nine passengers, or a Toyota Coaster minibus for larger Ziyarat groups.",
    },
  ],

  howItWorksBlock: {
    type: "timeline",
    heading: "How to Book a Private Ziyarat Transfer",
    orientation: "vertical",
    steps: [
      { label: "1. Share Your Ziyarat Plan", detail: "The sites you'd like to visit, your preferred order, and roughly how long at each — sent via WhatsApp or the quote form." },
      { label: "2. Receive Your Quote", detail: "A fixed, all-in price and a realistic route and timing, confirmed before you travel." },
      { label: "3. Confirm Your Transfer", detail: "Approve the quote and a specific driver is scheduled, no prepayment required." },
      { label: "4. Meet Your Driver", detail: "Your driver collects you from your hotel and stays with you between stops for the whole outing." },
    ],
    note: "The price agreed at booking covers the whole outing, including waiting time between stops.",
  },

  bookingInfoHeading: "What Information Do I Need to Provide?",
  bookingInfoIntro:
    "Share as much of this as you can when you book. The clearer your plan, the more realistic the route and timing we can confirm back to you before the day.",
  bookingInfoItems: [
    "Pickup location or hotel name",
    "The Ziyarat destinations you'd like to visit",
    "Number of stops and preferred order",
    "Travel date and pickup time",
    "Number of passengers",
    "Luggage, if relevant",
    "Vehicle requirements, if you have one",
    "Return destination",
  ],

  planningHeading: "Planning Your Private Ziyarat Journey",
  planningIntro:
    "A few things worth settling before you travel, so the day runs smoothly once your driver arrives rather than being worked out on the spot.",
  planningItems: [
    "Plan your pickup location",
    "List your intended stops",
    "Confirm the travel date",
    "Allow realistic time for multiple stops",
    "Provide your passenger or group size",
    "Confirm luggage requirements",
    "Confirm your return destination",
    "Check any applicable local requirements for the sites you plan to visit",
  ],

  faqHeading: "Frequently Asked Questions About Ziyarat Transfers",
  faqs: [
    {
      question: "Can I book a private Ziyarat transfer in Makkah?",
      answer:
        "Yes. We cover Makkah Ziyarat destinations including Jabal al-Noor, Jabal Thawr, and Makkah's historical sites, either individually or as a combined multi-stop tour.",
    },
    {
      question: "Can I book private Ziyarat transportation in Madinah?",
      answer:
        "Yes. We cover Madinah destinations including Quba Mosque, Mount Uhud, Masjid al-Qiblatain, and the Seven Mosques, with hotel pickup and return.",
    },
    {
      question: "Can I arrange multiple Ziyarat stops in one journey?",
      answer:
        "Yes. Tell us the sites you'd like to see and roughly how long at each when you book, and we'll plan a single trip covering them rather than separate transfers.",
    },
    {
      question: "Can you pick me up from my hotel for Ziyarat?",
      answer:
        "Yes. Pickup and drop-off are door-to-door from your hotel in Makkah or Madinah, with the vehicle waiting between stops throughout the outing.",
    },
    {
      question: "Can families and groups book private Ziyarat transportation?",
      answer:
        "Yes. Tell us your group size when booking and we'll match the vehicle — a sedan for a couple, or an SUV, van, or minibus for a larger family or group.",
    },
    {
      question: "Can I combine Ziyarat transportation with a Makkah to Madinah transfer?",
      answer:
        "Yes. Ziyarat visits are often arranged around travel between the two holy cities — tell us your full itinerary and we can plan the Ziyarat stops and the intercity leg together.",
    },
    {
      question: "What information do I need to provide when booking?",
      answer:
        "The sites you'd like to visit, your preferred order, roughly how long at each, your pickup location, travel date, and passenger count — the more detail, the more accurate the plan.",
    },
    {
      question: "Can I choose a vehicle based on my group size?",
      answer:
        "Yes. Tell us your numbers and we'll recommend a sedan, SUV, van, or minibus to match, whether it's a couple visiting a few sites or a larger group.",
    },
  ],

  finalCtaHeading: "Plan Your Private Ziyarat Transfer",
  finalCtaText:
    "Share your pickup location, the Ziyarat destinations you'd like to visit, date, time, passenger count, and any vehicle requirements — we'll confirm a driver and a fixed price.",
};
