import type { ServiceV2Content } from "@/components/services/ServiceV2View";

/**
 * "The Arrival Experience" — airport transfers, designed around the
 * passenger's actual journey: Airport → Driver → Vehicle → Destination.
 * Verified facts only: real airport names/codes (data/airports.ts), real
 * route distances (data/routes.ts), and the site's actual booking model
 * (WhatsApp/quote form, pay the driver directly — no online payment
 * platform, no live-tracking claim, no specific "60-minute" wait-time
 * guarantee, none of which exist in the real system).
 */
export const airportTransfersContent: ServiceV2Content = {
  eyebrow: "Airport Transfers",
  h1: "Private Airport Transfers Across Saudi Arabia",
  dek: "A driver waiting for you after you land, and a direct drive to where you're actually going — arranged before you fly, not negotiated in the arrivals hall.",
  heroImage: "/images/heroes/airport.webp",
  heroAlt: "An airport terminal in Saudi Arabia",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Airport Coverage",
  secondaryCtaHref: "/airport-transfers#coverage",
  blocks: [
    {
      type: "prose",
      heading: "What Is a Private Airport Transfer?",
      narrow: true,
      paragraphs: [
        "A private airport transfer is a pre-arranged, dedicated car and driver for the trip between an airport and your destination — booked before you fly, at a price agreed in advance. It's a different arrangement from three things it's often confused with: an airport-rank taxi (unmetered, negotiated on the spot, and the main reason unfamiliar arrivals overpay), a ride-hailing app booked from the terminal (which depends on driver availability at that specific moment and doesn't know your flight status), and a shared shuttle (which combines several bookings into one vehicle and stops at more than one destination).",
        "The practical difference shows up at two points: before you travel, when the price and vehicle are already settled instead of being a live negotiation; and after you land, when a specific driver is already waiting for you rather than something you start arranging once you're through immigration.",
      ],
    },
    {
      type: "timeline",
      heading: "How Airport Pickup Works",
      orientation: "vertical",
      steps: [
        { label: "You book and share flight details", detail: "Flight number, arrival airport, destination and passenger count — sent via WhatsApp or the quote form." },
        { label: "We confirm a vehicle and a fixed price", detail: "Agreed before you travel, matched to your group size and luggage." },
        { label: "You fly, and we track your flight number", detail: "Pickup timing is planned around your actual flight, not a fixed clock time." },
        { label: "You clear immigration and collect your bags", detail: "No need to message us the moment you land — the plan already accounts for a normal immigration and baggage wait." },
        { label: "You meet your driver in arrivals", detail: "At a meeting point agreed before you travelled, with a direct contact number if anything is unclear." },
        { label: "Your luggage goes into the vehicle", detail: "A vehicle sized to your group and bags, chosen when you booked, not decided at the kerb." },
        { label: "You're driven directly to your destination", detail: "Hotel, home address, business meeting, or onward to another city — one direct journey, no shared stops." },
      ],
      note: "Flight delays are common and expected — pickup timing is planned around your actual flight, not the original schedule.",
    },
    {
      type: "prose",
      heading: "What Information Should I Provide?",
      narrow: true,
      paragraphs: [
        "The more of this we have before you travel, the smoother the pickup: your flight number and arrival airport, your travel date, an idea of your arrival time, the number of passengers, how much luggage you're bringing, your destination address, and any special requirements — a child seat, for instance. Flight number matters most of anything on this list: it's what lets us adjust your pickup around a delay automatically rather than you having to notice and tell us.",
      ],
    },
    {
      type: "prose",
      heading: "Why Your Actual Arrival Time Can Differ From the Scheduled Landing",
      narrow: true,
      paragraphs: [
        "The time printed on your ticket is when the aircraft is due to land, not when you'll walk out of arrivals. Immigration queues, baggage reclaim, and general terminal congestion — worse at peak hours and during Umrah or Hajj season — all add time after wheels-down. We don't state a fixed number of minutes this typically adds, because it genuinely varies by airport, time of day, and season; what matters practically is that your pickup is planned around your flight number rather than a clock time, so a slower-than-usual immigration queue doesn't turn into a missed transfer.",
      ],
    },
    {
      type: "comparisonTable",
      heading: "Private Transfer vs. Other Airport Options",
      intro: "Each option has a genuine place — this is about which fits your situation, not which is universally best.",
      columns: ["Private Transfer", "Airport-Rank Taxi", "Ride-Hailing App", "Shared Shuttle"],
      rows: [
        { criterion: "Price certainty", values: ["Fixed, agreed before travel", "Negotiated on the spot", "Estimated, can vary with demand pricing", "Usually fixed per seat"] },
        { criterion: "Wait after landing", values: ["Driver already assigned and waiting", "None — but a queue to find one", "Depends on nearby driver availability", "Fixed departure, may wait for other passengers"] },
        { criterion: "Vehicle size", values: ["Chosen in advance for your group", "Whatever's available", "Whatever's available", "Shared, fixed capacity"] },
        { criterion: "Route", values: ["Direct, one destination", "Direct", "Direct", "Multiple stops possible"] },
        { criterion: "Flight-delay handling", values: ["Built into the plan", "Not applicable — arranged after you land", "Not applicable — arranged after you land", "Fixed schedule, may not adjust"] },
      ],
    },
    {
      type: "prose",
      heading: "Choosing the Right Vehicle",
      narrow: true,
      paragraphs: [
        "Vehicle choice comes down to passengers and luggage more than personal preference. A sedan is comfortable for one or two travellers with a normal amount of luggage. An SUV suits a family or a traveller with several large bags. A van or minibus fits a larger group travelling together — common for Umrah parties or business delegations. Tell us your numbers honestly when booking; it's far better to have a slightly larger vehicle than to arrive at the kerb and find the bags don't fit.",
      ],
    },
    {
      type: "audienceGrid",
      heading: "Airport Transfers for Different Travellers",
      items: [
        { title: "Families", detail: "More luggage than a couple travelling alone, and often a child seat requirement — tell us both when booking so the right vehicle is waiting, not swapped for a larger one at the kerb." },
        { title: "Business travellers", detail: "A fixed pickup time matters more than flexibility. We treat your requested time as firm and plan the route to a meeting or hotel accordingly." },
        { title: "Groups", detail: "Umrah parties, tour groups and corporate delegations travelling together are usually better served by one or two larger vehicles than several separate cars — tell us your total numbers so we can plan the combination." },
        { title: "Travellers with significant luggage", detail: "Equipment, samples, or simply a lot of bags — mention the volume, not just the passenger count, so the vehicle has the boot space to match." },
        { title: "International arrivals", detail: "First-time visitors unfamiliar with the airport layout benefit most from having a specific, agreed meeting point rather than a general 'somewhere in arrivals' instruction." },
        { title: "Solo travellers", detail: "A sedan is usually the most cost-effective choice for one traveller with normal luggage — no need to book a larger vehicle than the trip requires." },
      ],
    },
    {
      type: "linkGrid",
      heading: "Airports We Cover",
      items: [
        { label: "Riyadh — King Khalid International (RUH)", href: "/airport-transfer/riyadh-airport" },
        { label: "Jeddah — King Abdulaziz International (JED)", href: "/airport-transfer/jeddah-airport" },
        { label: "Madinah — Prince Mohammad bin Abdulaziz (MED)", href: "/airport-transfer/madinah-airport" },
        { label: "Dammam — King Fahd International (DMM)", href: "/airport-transfer/dammam-airport" },
        { label: "Taif Regional (TIF)", href: "/airport-transfer/taif-airport" },
        { label: "AlUla — Prince Abdul Majeed bin Abdulaziz (ULH)", href: "/airport-transfer/alula-airport" },
      ],
    },
    {
      type: "routeCards",
      heading: "Common Airport Journeys",
      intro: "The distances and times below are the same figures published on each route's own page.",
      routes: [
        { from: "Jeddah Airport", to: "Makkah", distance: "~85 km", duration: "~1h 15m", href: "/routes/jeddah-to-makkah", note: "The most-requested airport transfer in the network — most pilgrims travel this leg the same day they land." },
        { from: "Jeddah Airport", to: "Madinah", distance: "~420 km", duration: "~4 hours", href: "/routes/jeddah-to-madinah", note: "A long transfer for travellers combining both holy cities in one Umrah itinerary." },
        { from: "Dammam Airport", to: "Al Khobar", distance: "~35 km", duration: "~30 min", href: "/routes/dammam-airport-to-khobar", note: "A short, direct run for Eastern Province business travel." },
        { from: "Jeddah Airport", to: "Taif", distance: "~170 km", duration: "~2 hours", href: "/routes/jeddah-to-taif", note: "For travellers continuing to Taif's cooler mountain climate after landing on the coast." },
      ],
    },
    {
      type: "checklist",
      heading: "Airport Transfer Planning Checklist",
      intro: "Have this ready when you book — it's the fastest way to a smooth pickup.",
      items: [
        "Flight number and arrival airport",
        "Travel date and approximate arrival time",
        "Number of passengers and bags",
        "Destination address (hotel name, or the exact address)",
        "Any child seat requirement",
        "A WhatsApp number we can reach you on if plans change",
      ],
    },
    {
      type: "cta",
      text: "Landing soon and want a driver arranged before you fly?",
      linkLabel: "Get a Quote",
      linkPath: "/get-quote",
    },
    {
      type: "prose",
      heading: "Common Airport-Transfer Situations",
      paragraphs: [
        "<strong>Flight changes.</strong> If your flight is delayed, rebooked, or cancelled, message us as soon as you know — we'll adjust the pickup rather than leave a driver waiting at the wrong time.",
        "<strong>Groups and families.</strong> Larger parties with more luggage need a larger vehicle booked in advance rather than assumed on the day — tell us your numbers and bag count when you request a quote.",
        "<strong>Going straight to a city outside the airport's own city.</strong> An airport pickup doesn't have to end at that airport's home city — for example, a Jeddah Airport pickup can continue directly to Makkah or Madinah in one journey, without a separate local transfer first.",
        "<strong>Connecting onward by road.</strong> If your trip continues by intercity or cross-border road transfer after the airport leg, see our <a href='/intercity-transfers'>intercity transfers</a> or <a href='/border-transfers'>border transfers</a> pages — the airport pickup and the onward journey can be planned together.",
      ],
    },
    {
      type: "relatedInfo",
      heading: "Related Reading",
      paragraph:
        "Continuing to a hotel after landing? See our <a href='/services/hotel-transfers'>hotel transfers</a> page for the door-to-door details. For the exact road distance and timing of your onward journey, see the <a href='/distance/jeddah-to-makkah-distance'>Jeddah to Makkah distance guide</a>.",
    },
  ],
  faqs: [
    { question: "What information do you need for an airport pickup?", answer: "Your flight number, arrival airport, destination address, and passenger/luggage count. Flight number matters most — it's how we plan around delays." },
    { question: "What happens if my flight changes?", answer: "Message us on WhatsApp as soon as you know. We plan pickup around your actual arrival, not the original scheduled time, so a delay doesn't mean a missed transfer — just tell us early." },
    { question: "Can airport transfers accommodate a lot of luggage?", answer: "Yes. Tell us your passenger and bag count when booking and we'll match the vehicle — a sedan for light travel, an SUV or van for a family or group with more bags." },
    { question: "Where exactly will I meet my driver?", answer: "We agree the meeting point with you before you travel and share your driver's contact number, so there's no ambiguity in the arrivals hall." },
    { question: "Can I go directly from the airport to another city, like Makkah or Madinah?", answer: "Yes — an airport pickup can continue straight to another city in one journey rather than requiring a separate local transfer first. Jeddah Airport to Makkah or Madinah are common examples." },
    { question: "Can airport pickup be arranged for a group?", answer: "Yes. Tell us your group size and luggage volume when booking so we can confirm the right vehicle, or multiple vehicles for larger parties." },
    { question: "Do I need to pay in advance?", answer: "No. There's no prepayment — the price is agreed when you book, and you pay the driver directly, in cash or by card, on the day." },
    { question: "How is a private transfer different from a ride-hailing app at the airport?", answer: "A ride-hailing app depends on whichever driver happens to be nearby when you land and doesn't know your flight status. A private transfer is a specific driver, already briefed on your flight, waiting for you — arranged before you fly rather than after you clear customs." },
    { question: "Can I book a return airport transfer at the same time?", answer: "Yes — share both your arrival and departure flight details when you book and we can confirm both legs together." },
  ],
  finalCtaHeading: "Arrange Your Airport Pickup",
  finalCtaText: "Share your flight number, arrival airport and destination — we'll confirm a driver and a fixed price before you fly.",
};
