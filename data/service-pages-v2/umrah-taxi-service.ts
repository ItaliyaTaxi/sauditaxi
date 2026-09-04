import type { ServiceV2Content } from "@/components/services/ServiceV2View";

/**
 * "A Journey Built Around Umrah" — calm, practical, transportation-only
 * tone. No religious rulings, no visa/eligibility claims, no official
 * authorisation claims — the service is transportation, not religious
 * guidance, and the copy says so plainly.
 */
export const umrahTaxiServiceContent: ServiceV2Content = {
  eyebrow: "Umrah Transportation",
  h1: "Private Transfers for Umrah Journeys",
  dek: "Transportation for the practical stages of an Umrah journey — airport to Makkah, Makkah to Madinah, and the hotel transfers in between — arranged calmly and in advance.",
  heroImage: "/images/heroes/madina.webp",
  heroAlt: "A street in Madinah near the Prophet's Mosque",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Umrah Routes",
  secondaryCtaHref: "/umrah-taxi-service#routes",
  blocks: [
    {
      type: "prose",
      heading: "Transportation During an Umrah Journey",
      narrow: true,
      paragraphs: [
        "This is a transportation service, not religious guidance — we don't offer rulings on Umrah practice and don't claim any official pilgrimage authorisation. What we arrange is the practical part: a private vehicle and driver for the journeys an Umrah trip typically involves — between the airport, Makkah, Madinah, and hotels — so that part of the trip is one less thing to plan on the day.",
        "Many travellers arrive tired after a long flight, sometimes already in ihram, and want the journey from the airport to feel calm rather than rushed. A private vehicle — agreed in advance, with a driver who knows where you're going — is built around that.",
      ],
    },
    {
      type: "checklist",
      heading: "Common Umrah Transfer Journeys",
      items: [
        "Jeddah Airport to a hotel in Makkah",
        "Madinah Airport to a hotel near the Prophet's Mosque",
        "Makkah to Madinah, or Madinah to Makkah",
        "Hotel to hotel within Makkah or Madinah",
        "A final transfer back to the airport at the end of the trip",
      ],
    },
    {
      type: "prose",
      heading: "Airport Arrival for Umrah Travellers",
      narrow: true,
      paragraphs: [
        "The same practical considerations that apply to any airport transfer apply here, with a few specific to Umrah: many travellers are carrying less hand luggage than usual (having checked most of it) and may already be in ihram, which affects what feels comfortable at the point of pickup. Share your flight details, group size, and hotel name when booking, and mention if you'll be arriving in ihram so the handover can be kept simple and unhurried.",
      ],
    },
    {
      type: "routeCards",
      heading: "Makkah and Madinah Transfer Routes",
      routes: [
        { from: "Jeddah Airport", to: "Makkah", distance: "~85 km", duration: "~1h 15m", href: "/routes/jeddah-to-makkah", note: "The most-travelled leg of an Umrah journey, timed around your flight." },
        { from: "Makkah", to: "Madinah", distance: "~450 km", duration: "~4.5 hours", href: "/routes/makkah-to-madinah", note: "A long drive, planned with a rest stop for travellers who are tired or elderly." },
        { from: "Jeddah Airport", to: "Madinah", distance: "~420 km", duration: "~4 hours", href: "/routes/jeddah-to-madinah", note: "For travellers beginning their visit in Madinah before continuing to Makkah." },
      ],
    },
    {
      type: "prose",
      heading: "Makkah and Madinah Transfers: Planning the Difference",
      narrow: true,
      paragraphs: [
        "Most Umrah itineraries follow one of two patterns: fly into Jeddah, go straight to Makkah, then travel on to Madinah before flying home — or fly into Madinah first, visit the Prophet's Mosque, then continue to Makkah and fly out of Jeddah. Either order works from a transportation standpoint; which one suits you is a personal and religious decision, not something we advise on. What we can help with practically is planning the Makkah–Madinah leg itself, which is a genuinely long drive (around 450 km) best taken with a rest stop rather than straight through, particularly for elderly or tired travellers.",
      ],
    },
    {
      type: "imageBand",
      heading: "Family and Group Umrah Travel",
      image: "/images/heroes/makkah.webp",
      alt: "A view of Makkah",
      imageSide: "start",
      paragraphs: [
        "Umrah is frequently a family or group trip — parents travelling with children, adult children accompanying elderly parents, or a group travelling together. A single larger vehicle keeps everyone together rather than splitting across separate cars, and avoids the logistics of coordinating multiple pickups. Tell us your total numbers, including children, when you book.",
        "Luggage tends to be heavier on the return leg — travellers commonly bring back Zamzam water, gifts and additional bags. Mention this when booking your return transfer so the right vehicle is arranged, rather than discovering at the hotel that the boot doesn't have room.",
      ],
    },
    {
      type: "prose",
      heading: "Hotel Transfers During Your Umrah Trip",
      narrow: true,
      paragraphs: [
        "Beyond the airport legs, many Umrah travellers also need a hotel-to-hotel transfer — for instance, moving accommodation between the Makkah and Madinah stages of the trip, or relocating hotels partway through a longer stay. These work the same way as any hotel transfer: pickup from your hotel's entrance, direct to the next one, at a time that suits your schedule rather than a flight.",
      ],
    },
    {
      type: "checklist",
      heading: "Preparing for the Journey",
      intro: "A practical checklist before you travel.",
      items: [
        "Share your flight details for the airport leg",
        "Tell us your hotel name or address in Makkah/Madinah",
        "Flag if you're travelling in a larger family or group",
        "Mention any known luggage increase for the return journey",
        "Confirm whether you'll be arriving already in ihram",
      ],
    },
    {
      type: "cta",
      text: "Arranging transport for an upcoming Umrah trip?",
      linkLabel: "Get a Quote",
      linkPath: "/get-quote",
    },
    {
      type: "authorityNote",
      heading: "Transportation vs. Religious and Official Requirements",
      weHandle: {
        heading: "This service covers",
        items: [
          "Airport, hotel and inter-city transportation for your Umrah trip",
          "A driver and vehicle matched to your group",
          "Journey planning between Makkah and Madinah",
        ],
      },
      authoritiesControl: {
        heading: "Determined by religious and official authorities",
        items: [
          "Umrah visa issuance and eligibility",
          "Religious rulings and requirements for performing Umrah",
          "Official pilgrimage regulations and any seasonal restrictions",
        ],
      },
      note: "We provide transportation only. For religious guidance and current official Umrah requirements, consult the relevant religious and government authorities directly — this page does not state current regulations, which can change.",
    },
    {
      type: "relatedInfo",
      heading: "Related Reading",
      paragraph:
        "Arriving by air first? See our <a href='/airport-transfers'>airport transfers</a> service. Continuing to visit historic sites in Makkah or Madinah? See <a href='/ziyarat-taxi-service'>Ziyarat transportation</a>. For the road distance between the two holy cities, see the <a href='/distance/riyadh-to-jeddah-distance'>Riyadh to Jeddah distance guide</a> if your trip starts from the capital.",
    },
  ],
  faqs: [
    { question: "Can I arrange airport-to-Makkah transportation?", answer: "Yes — this is our most-requested route. A driver meets you after you land at Jeddah Airport and drives you directly to your hotel in Makkah, timed around your flight." },
    { question: "Can families book a private vehicle?", answer: "Yes. Tell us your group size and luggage when booking and we'll match the vehicle — a larger SUV or van for a family or group travelling together." },
    { question: "Can I travel between Makkah and Madinah privately?", answer: "Yes. It's a long drive (around 450 km, roughly 4.5 hours), and we build in a rest stop, which is often appreciated by elderly or tired travellers." },
    { question: "Do you provide religious guidance or official Umrah authorisation?", answer: "No. This is a transportation service only — we don't offer religious rulings and don't claim any official pilgrimage authorisation. For requirements and guidance on performing Umrah itself, consult the appropriate religious and official sources." },
    { question: "Is luggage handled for the return journey?", answer: "Yes, within the vehicle you've booked — tell us if you expect more luggage on the way back (a common pattern with Zamzam water and gifts) so we can match the vehicle size accordingly." },
    { question: "Do I need to prepay for an Umrah transfer?", answer: "No. The price is agreed before you travel and paid to the driver directly, in cash or by card — no prepayment required." },
    { question: "Should I fly into Jeddah or Madinah first?", answer: "Both are common — Jeddah first with Makkah as the initial stop, or Madinah first to visit the Prophet's Mosque before continuing to Makkah. Which suits you is a personal choice; we can arrange the transportation either way." },
    { question: "Can you arrange a hotel-to-hotel transfer if I'm changing accommodation mid-trip?", answer: "Yes — this works the same as any hotel transfer, with pickup from your current hotel and drop-off at the next one at a time that suits your schedule." },
    { question: "What should I tell you if I'm arriving already in ihram?", answer: "Mention it when booking so the pickup can be kept simple and unhurried — it doesn't change the practical arrangements, but it helps your driver understand what to expect at the handover." },
  ],
  finalCtaHeading: "Arrange Your Umrah Transportation",
  finalCtaText: "Share your flight details and hotel information — we'll confirm a driver and a fixed price before you travel.",
};
