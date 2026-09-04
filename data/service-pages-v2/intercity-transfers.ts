import type { ServiceV2Content } from "@/components/services/ServiceV2View";

/**
 * "The Road Between Cities" — a long-distance travel guide combined with a
 * commercial page. Distances/durations match the figures already published
 * on each linked route's own page (data/routes.ts).
 */
export const intercityTransfersContent: ServiceV2Content = {
  eyebrow: "Intercity Transfers",
  h1: "Private Transfers Between Saudi Cities",
  dek: "A direct drive between Saudi cities, in a vehicle sized for the distance — one departure, one destination, no shared stops along the way.",
  heroImage: "/images/journey/desert-highway.jpg",
  heroAlt: "An open highway between Saudi cities",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Popular Routes",
  secondaryCtaHref: "/intercity-transfers#routes",
  blocks: [
    {
      type: "prose",
      heading: "What Is an Intercity Transfer?",
      narrow: true,
      paragraphs: [
        "An intercity transfer is a private, direct drive between two Saudi cities — distinct from a city transfer (a short trip within one city) and an airport transfer (built around a flight rather than a road journey, though the two can connect at either end). It's the service for the genuinely long drives: Riyadh to Jeddah, Makkah to Madinah, Riyadh to Dammam, and similar routes that run to several hours or, on the longest legs, most of a day.",
      ],
    },
    {
      type: "prose",
      heading: "What a Long-Distance Journey Is Actually Like",
      narrow: true,
      paragraphs: [
        "The journey itself has three parts: departure, the drive, and arrival. Departure is a pickup from your address at the confirmed time — the vehicle is already booked and assigned, not arranged that morning. The drive itself, for anything over roughly 300 km, includes at least one rest stop rather than running straight through; how many stops and how long they take depends on the group and the distance, and we don't fix an exact schedule for this in advance since it reasonably varies by journey. Arrival is at your exact destination — a hotel, a home address, or an onward connection such as another city or an airport.",
      ],
    },
    {
      type: "prose",
      heading: "Why Travellers Choose Private Intercity Travel",
      narrow: true,
      paragraphs: [
        "Saudi Arabia is large, and several intercity drives genuinely run long. A private transfer means the departure time is yours to set, the vehicle is sized to your actual luggage rather than a fixed airline-style allowance, and the drive doesn't stop to pick up or drop off other passengers along the way. It particularly suits groups and families who'd otherwise need multiple flights or bus tickets, travellers with more luggage than a flight comfortably allows, and journeys where arriving at an exact address — rather than an airport or station requiring its own onward transfer — is worth the extra hours on the road.",
      ],
    },
    {
      type: "prose",
      heading: "Vehicle Selection for Long Journeys",
      narrow: true,
      paragraphs: [
        "A sedan works for one or two people with normal luggage on a shorter route. For a longer drive, or a family or group with more bags, an SUV or van keeps everyone comfortable rather than cramped for several hours — legroom and boot space matter more on a 5-hour drive than a 20-minute one. Tell us your group size and bag count when booking so the right vehicle is confirmed from the start.",
      ],
    },
    {
      type: "timeline",
      heading: "What a Long-Distance Journey Looks Like",
      orientation: "vertical",
      steps: [
        { label: "Departure", detail: "Pickup from your address at the agreed time — the vehicle is confirmed and waiting, not arranged on the day." },
        { label: "The drive", detail: "A direct route with a rest stop built in for longer journeys, rather than a series of short hops." },
        { label: "Arrival", detail: "Dropped at your exact destination — a hotel, home address, or onward connection." },
      ],
      note: "For routes over roughly 300 km, we build in at least one rest stop rather than driving straight through.",
    },
    {
      type: "routeCards",
      heading: "Popular Intercity Connections",
      routes: [
        { from: "Riyadh", to: "Jeddah", distance: "~950 km", duration: "~9 hours", href: "/routes/riyadh-to-jeddah", note: "One of the longest regular intercity routes — a full-day drive best planned with a rest stop and an early departure." },
        { from: "Riyadh", to: "Dammam", distance: "~400 km", duration: "~3h 45m", href: "/routes/riyadh-to-dammam", note: "A common business route across the peninsula, manageable in a single sitting." },
        { from: "Jeddah", to: "Taif", distance: "~170 km", duration: "~2 hours", href: "/routes/jeddah-to-taif", note: "A shorter mountain drive, popular for the cooler summer climate above Jeddah." },
        { from: "Makkah", to: "Madinah", distance: "~450 km", duration: "~4.5 hours", href: "/routes/makkah-to-madinah", note: "A long drive often taken with elderly or tired travellers, where a rest stop genuinely helps." },
      ],
    },
    {
      type: "prose",
      heading: "Planning an Intercity Journey: Driving Time vs. Total Journey Time",
      narrow: true,
      paragraphs: [
        "The durations published on each route page are pure driving time in free-flowing conditions — useful for comparing routes, but not the same as your total door-to-door time on the day. Add a rest stop or two on the longer routes, and traffic around the departure and arrival cities at busy times, and the realistic total is somewhat more than the driving-time figure alone. We don't publish a single padded number for this because it genuinely depends on the specific day, season and route — but it's worth planning for, particularly if you have a fixed connection (a flight, an event, a meeting) at the other end.",
      ],
    },
    {
      type: "comparisonTable",
      heading: "Private Transfer vs. Train, Bus or Flight",
      intro: "None of these is universally better — the right choice depends on the route and what matters most for that trip.",
      columns: ["Private Transfer", "Train / Bus", "Flight"],
      rows: [
        { criterion: "Door-to-door", values: ["Yes — your exact address at both ends", "No — station to station, needs its own local transfer", "No — airport to airport, needs its own local transfer"] },
        { criterion: "Schedule flexibility", values: ["You set the departure time", "Fixed timetable", "Fixed timetable, plus check-in and security time"] },
        { criterion: "Luggage", values: ["No fixed allowance within vehicle capacity", "Generally generous, but station handling required", "Airline allowance and fees apply"] },
        { criterion: "Privacy", values: ["Private to your group", "Shared with other passengers", "Shared with other passengers"] },
        { criterion: "Best for", values: ["Groups, families, luggage-heavy trips, exact-address arrival", "Budget-conscious solo or paired travel where a station connection works", "The longest routes, when speed matters more than door-to-door convenience"] },
      ],
    },
    {
      type: "checklist",
      heading: "Journey Preparation Checklist",
      intro: "A few things worth settling before a long drive.",
      items: [
        "Confirm your exact pickup address and departure time",
        "Tell us your luggage volume so the right vehicle is booked",
        "Flag any planned rest stops or a preferred departure window",
        "Share your final destination — hotel, home, or an onward connection",
        "Allow a realistic buffer if you have a fixed connection at the other end",
      ],
    },
    {
      type: "cta",
      text: "Planning a longer drive between Saudi cities?",
      linkLabel: "Get a Quote",
      linkPath: "/get-quote",
    },
    {
      type: "relatedInfo",
      heading: "Related Reading",
      paragraph:
        "For the exact road distance and timing breakdown of a specific route, see our <a href='/distance/riyadh-to-dammam-distance'>Riyadh to Dammam distance guide</a> or the <a href='/distance/riyadh-to-jeddah-distance'>Riyadh to Jeddah distance guide</a>. Travelling across an international border instead? See <a href='/border-transfers'>border transfers</a>.",
    },
  ],
  faqs: [
    { question: "Is a private transfer suitable for long-distance travel in Saudi Arabia?", answer: "Yes, for routes where door-to-door convenience matters more than raw speed — groups, families, and travellers with more luggage than a flight allowance covers. For the longest routes, flying can still be faster overall once airport time is counted." },
    { question: "How should I choose the right vehicle size?", answer: "Base it on passengers and luggage, not just headcount — a sedan suits one or two people with normal bags, while an SUV or van suits a family or group with more to carry. Tell us your numbers when booking." },
    { question: "Can I request a specific departure time?", answer: "Yes. The departure time is set when you book and the vehicle is confirmed for that time, rather than arranged on the day." },
    { question: "Do you stop for rest on longer drives?", answer: "Yes, typically for routes over roughly 300 km — we build in at least one stop rather than driving straight through, particularly useful for elderly or tired travellers." },
    { question: "What's the difference between the published driving time and my actual total journey time?", answer: "The published duration is pure driving time in free-flowing conditions. Your real total will typically run somewhat longer once a rest stop and traffic around the departure and arrival cities are factored in — how much longer depends on the specific route and day." },
    { question: "How far in advance should I book an intercity transfer?", answer: "Earlier is better for the longest routes or during busy periods, since it guarantees the right vehicle is available for your departure time." },
    { question: "Is the price fixed for the whole journey?", answer: "Yes. The fare is agreed before you travel and doesn't change if the drive or a rest stop runs longer than expected." },
    { question: "Would a flight be better than a private transfer for a very long route?", answer: "For the longest routes, like Riyadh to Jeddah, flying is often faster overall once airport time is included. A private transfer tends to win when door-to-door convenience, luggage capacity, or travelling as a group outweighs the extra hours on the road." },
  ],
  finalCtaHeading: "Book Your Intercity Transfer",
  finalCtaText: "Share your route, departure time and group size — we'll confirm the vehicle and a fixed price.",
};
