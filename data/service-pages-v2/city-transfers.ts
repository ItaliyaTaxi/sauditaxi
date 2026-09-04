import type { ServiceV2Content } from "@/components/services/ServiceV2View";

/**
 * "Moving Through the City" — short urban journeys, deliberately distinct
 * from the Intercity page (different intent: local pickups within a city,
 * not long-distance travel between cities).
 */
export const cityTransfersContent: ServiceV2Content = {
  eyebrow: "City Transfers",
  h1: "Private City Transfers in Saudi Arabia",
  dek: "A private car for the journeys inside a city — hotel to meeting, meeting to restaurant, home to the station — booked in one message, not hailed on the street.",
  heroImage: "/images/heroes/city.webp",
  heroAlt: "A Saudi city street and skyline",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See City Coverage",
  secondaryCtaHref: "/city-transfers#coverage",
  blocks: [
    {
      type: "prose",
      heading: "What Are City Transfers?",
      narrow: true,
      paragraphs: [
        "A city transfer is a private, dedicated car for a journey within a single city — as opposed to an airport pickup built around a flight, or an intercity transfer built around a long drive between cities. It covers the shorter, more frequent trips that make up a normal day: a hotel pickup for a business meeting, a ride to a restaurant or attraction, a trip to a train or bus station, or getting a family back to their accommodation after a day out.",
        "The defining feature is that the car and driver are yours for that specific trip — not a shared ride, not a shuttle on a fixed route, and not something you wait to hail. You set the pickup point, the destination, and the time.",
      ],
    },
    {
      type: "checklist",
      heading: "When a City Transfer Makes Sense",
      items: [
        "Hotel to a business meeting or conference venue",
        "Business district to a restaurant or evening event",
        "Residential pickup to the airport or a train station",
        "A family day out — hotel to attractions and back",
        "Point-to-point between two hotels across the city",
        "Event venue back to a hotel late at night",
      ],
    },
    {
      type: "prose",
      heading: "Door-to-Door Convenience, in Practical Terms",
      narrow: true,
      paragraphs: [
        "Door-to-door means pickup and drop-off happen at the actual address you give us — a hotel lobby, a home entrance, an office reception — rather than a designated pickup zone you have to find and walk to. For a business traveller carrying a laptop bag and a suit carrier, or a family with young children and a stroller, that difference is bigger in practice than it sounds: no crossing a car park, no standing at a taxi rank in the heat, no explaining your location over a phone call to a driver who can't find you.",
      ],
    },
    {
      type: "comparisonTable",
      heading: "City Transfer vs. Other Options",
      intro: "There's no single best option — it depends on your priorities for that particular trip.",
      columns: ["Private City Transfer", "Street Taxi", "Ride-Hailing App", "Public Transport"],
      rows: [
        { criterion: "Pickup point", values: ["Your exact address", "Wherever you can hail one", "Nearby driver, may need to walk to a pickup point", "Fixed stops"] },
        { criterion: "Privacy", values: ["Private to your group", "Private, unmetered fare", "Private, metered by the app", "Shared with other passengers"] },
        { criterion: "Multiple stops in one trip", values: ["Yes, if arranged in advance", "Possible, negotiated with the driver", "Not typically supported in one booking", "Not applicable"] },
        { criterion: "Luggage capacity", values: ["Chosen in advance for your group", "Whatever the car has", "Whatever the car has", "Limited, no dedicated space"] },
        { criterion: "Price certainty", values: ["Fixed, agreed before travel", "Negotiated or metered", "Estimated, can vary with demand", "Fixed fare"] },
      ],
    },
    {
      type: "prose",
      heading: "Business Travel",
      narrow: true,
      paragraphs: [
        "Business travellers tend to book around a schedule that can't slip — a meeting time, a flight to catch afterwards, a series of appointments across a single day. We treat a requested pickup time as firm and plan the route with enough margin to account for normal traffic, rather than cutting it close. If your day involves multiple stops — a hotel, then a client site, then a dinner — tell us the plan when you book and we can arrange it as one continuous booking rather than several separate ones.",
      ],
    },
    {
      type: "prose",
      heading: "Family and Group Travel",
      narrow: true,
      paragraphs: [
        "Family and leisure journeys are usually more flexible on timing than business trips — a pickup window rather than a fixed minute, and sometimes several stops across a day as a family moves between attractions, meals, and their hotel. The vehicle is matched to the group: a sedan for a couple, an SUV for a family with a stroller and bags, or a van for a larger group travelling together. Mention any child seat requirement when you book.",
      ],
    },
    {
      type: "linkGrid",
      heading: "Cities We Cover",
      items: [
        { label: "Riyadh", href: "/taxi-service/riyadh" },
        { label: "Jeddah", href: "/taxi-service/jeddah" },
        { label: "Makkah", href: "/taxi-service/makkah" },
        { label: "Madinah", href: "/taxi-service/madinah" },
        { label: "Dammam", href: "/taxi-service/dammam" },
        { label: "Al Khobar", href: "/taxi-service/khobar" },
        { label: "Taif", href: "/taxi-service/taif" },
        { label: "AlUla", href: "/taxi-service/alula" },
      ],
    },
    {
      type: "cta",
      text: "Need a car for a day of meetings or a family outing across the city?",
      linkLabel: "Get a Quote",
      linkPath: "/get-quote",
    },
    {
      type: "checklist",
      heading: "Practical City Transfer Planning",
      intro: "A few details make the pickup faster and more accurate.",
      items: [
        "Give the exact pickup address, not just a hotel or venue name — large properties can have several entrances",
        "Mention if the pickup point is a specific gate, lobby, or car park level",
        "Confirm passenger and luggage count so the right vehicle is sent",
        "Flag multiple stops in advance rather than adding them on the day",
        "Share a contact number reachable at the pickup time",
      ],
    },
    {
      type: "relatedInfo",
      heading: "Related Reading",
      paragraph:
        "If your trip involves travelling between Saudi cities rather than within one, see our <a href='/intercity-transfers'>intercity transfers</a> service. Arriving by air first? Our <a href='/airport-transfers'>airport transfers</a> page covers the pickup itself, and <a href='/services/hotel-transfers'>hotel transfers</a> covers the door-to-door hotel leg specifically.",
    },
  ],
  faqs: [
    { question: "What counts as a city transfer versus an intercity transfer?", answer: "A city transfer is a journey within one city — hotel to a meeting, home to a station, and similar local trips. Travel between two different Saudi cities is covered by our intercity transfers service instead." },
    { question: "Can I book multiple stops in one day?", answer: "Yes — tell us your plan when booking (for example, hotel to a meeting, then to a restaurant, then back) and we'll arrange it as part of the same trip." },
    { question: "Is pickup really from my exact address?", answer: "Yes. Pickup and drop-off are door-to-door — your hotel lobby, home address, or office reception, not a designated pickup point." },
    { question: "Can a city transfer include a family with children?", answer: "Yes. Tell us your group size, luggage, and whether you need a child seat when booking, and we'll match the vehicle accordingly." },
    { question: "Which cities do you cover?", answer: "Major Saudi cities including Riyadh, Jeddah, Makkah, Madinah, Dammam, Al Khobar, Taif and AlUla — see the full list above." },
    { question: "How far in advance should I book a city transfer?", answer: "For a straightforward local trip, a same-day WhatsApp message is often enough, though booking earlier gives more certainty around vehicle availability, especially during busy periods." },
    { question: "Is a private city transfer better than a ride-hailing app?", answer: "Not universally — a ride-hailing app can be quicker for a single spontaneous trip. A private transfer tends to make more sense when you need a firm pickup time, multiple stops planned in advance, or a specific vehicle size for a group." },
    { question: "Can I request the same driver for a full day of appointments?", answer: "Tell us your schedule when booking and we'll aim to arrange it as a single continuous booking with one vehicle, which is usually more practical than separate bookings for each stop." },
  ],
  finalCtaHeading: "Plan Your City Transfer",
  finalCtaText: "Tell us your pickup point, destination and timing — we'll confirm a driver and a fixed price.",
};
