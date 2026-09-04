import type { ServiceV2Content } from "@/components/services/ServiceV2View";

/**
 * "The Border Journey" — international road transfers. Deliberately does
 * NOT promise border-processing time, guarantee entry, or claim the driver
 * controls immigration/customs — the authorityNote block exists specifically
 * to separate what the transfer covers from what border authorities decide.
 */
export const borderTransfersContent: ServiceV2Content = {
  eyebrow: "Border Transfers",
  h1: "Private Cross-Border Transfers From Saudi Arabia",
  dek: "A private road journey between Saudi Arabia and neighbouring GCC countries — the driving and the crossing, planned for; what happens at immigration is between you and the border authorities.",
  heroImage: "/images/heroes/border.webp",
  heroAlt: "A Saudi–GCC border crossing point",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Border Routes",
  secondaryCtaHref: "/border-transfers#routes",
  blocks: [
    {
      type: "prose",
      heading: "What Is a Border Transfer?",
      narrow: true,
      paragraphs: [
        "A border transfer is a private road journey that crosses an international boundary — between Saudi Arabia and a neighbouring GCC country — rather than staying within Saudi Arabia the whole way. It looks similar to a domestic intercity drive on a map, but it isn't the same journey: a border crossing adds a stage the driver doesn't control, run entirely by government authorities on both sides, with a duration that genuinely varies from one crossing to the next.",
      ],
    },
    {
      type: "timeline",
      heading: "How a Cross-Border Journey Works",
      orientation: "vertical",
      steps: [
        { label: "Saudi departure", detail: "Pickup from your address, driving toward the crossing on the Saudi side." },
        { label: "Approaching the border", detail: "The final stretch of Saudi road before the crossing point itself." },
        { label: "Border procedures", detail: "Saudi exit formalities, then the equivalent entry formalities on the other side — passport, visa and vehicle checks, run by each country's own authorities." },
        { label: "International entry", detail: "Once through, you're in the neighbouring country, subject to its own traffic rules and requirements." },
        { label: "Destination", detail: "Continuing to your final address, where the route offers a full crossing rather than stopping at the border." },
      ],
    },
    {
      type: "authorityNote",
      heading: "What We Handle vs. What Authorities Control",
      weHandle: {
        heading: "This transfer covers",
        items: [
          "The private drive to (and where offered, across) the border",
          "A driver familiar with the route and the crossing",
          "A vehicle sized to your group and luggage",
          "A fixed price agreed before you travel",
          "Journey planning around the crossing itself",
        ],
      },
      authoritiesControl: {
        heading: "Border authorities decide",
        items: [
          "Entry eligibility and visa requirements",
          "How long passport and customs processing takes",
          "Vehicle document checks",
          "Any additional questions or inspections",
        ],
      },
      note: "We don't guarantee border processing time, entry approval, or customs outcomes — those are entirely the border authorities' decision, not the transfer service's.",
    },
    {
      type: "prose",
      heading: "Documents and Preparation",
      narrow: true,
      paragraphs: [
        "At minimum, expect to need a valid passport and whatever visa or entry permit applies to your nationality for the country you're entering, plus correct documentation for the vehicle crossing the border. Exactly what's required depends on your nationality and changes periodically — this page deliberately doesn't state specific visa rules, because getting that wrong could genuinely disrupt your trip. Confirm current requirements with the relevant country's official immigration authority before you travel, not from a travel blog or a generic guide.",
      ],
    },
    {
      type: "prose",
      heading: "Border Waiting Times",
      narrow: true,
      paragraphs: [
        "We don't promise a specific crossing time, because it isn't within our control and it genuinely varies. Processing depends on traffic at the crossing, the time of day, the season — holiday weekends are typically busier — and circumstances specific to individual travellers. Reports range from well under an hour during quiet periods to several hours at busy times. If you have an onward flight or meeting booked on the other side, build in a generous buffer rather than cutting it close.",
      ],
    },
    {
      type: "prose",
      heading: "Vehicle and Driver Arrangements",
      narrow: true,
      paragraphs: [
        "A border transfer uses the same private-vehicle model as our other services — one driver, one vehicle, dedicated to your booking — with a driver who has made the specific crossing before and knows the practical layout on both sides. For crossings where the service continues into the neighbouring country, the same vehicle and driver generally continue the journey rather than switching at the border, though this depends on the specific route.",
      ],
    },
    {
      type: "linkGrid",
      heading: "Saudi–GCC Coverage",
      items: [
        { label: "Bahrain (via the King Fahd Causeway)", href: "/border-transfers/bahrain-causeway" },
        { label: "United Arab Emirates", href: "/border-transfers/uae-border" },
        { label: "Qatar", href: "/border-transfers/qatar-border" },
        { label: "Kuwait", href: "/border-transfers/kuwait-border" },
      ],
    },
    {
      type: "routeCards",
      heading: "Saudi–GCC Border Routes",
      intro: "Only the crossings we actually operate on.",
      routes: [
        { from: "Dammam", to: "Bahrain", distance: "~70 km", duration: "~1h 15m", href: "/routes/dammam-to-bahrain", note: "Over the King Fahd Causeway, the most direct Saudi–Bahrain land route." },
        { from: "Riyadh", to: "Abu Dhabi", distance: "~880-900 km", duration: "~10-10.5 hours", href: "/routes/riyadh-to-abu-dhabi", note: "A genuine long-haul crossing via the Al Batha/Al Ghuwaifat border into the UAE." },
        { from: "Riyadh", to: "Kuwait City", distance: "~950 km", duration: "~9 hours", href: "/routes/riyadh-to-kuwait-city", note: "A long northward drive to the Kuwaiti border, best planned with an early departure." },
      ],
    },
    {
      type: "checklist",
      heading: "Border Planning Checklist",
      intro: "Have these ready before you travel — we can't arrange them on your behalf.",
      items: [
        "A valid passport with any required visa or entry permit",
        "Correct vehicle documentation for cross-border travel",
        "Your exact destination address on the other side",
        "Passenger count and luggage volume",
        "A realistic time buffer if you have a connection on the other side",
        "A contact number reachable throughout the journey",
      ],
    },
    {
      type: "cta",
      text: "Planning a cross-border road journey?",
      linkLabel: "Get a Quote",
      linkPath: "/get-quote",
    },
    {
      type: "relatedInfo",
      heading: "Related Reading",
      paragraph:
        "For the road-distance breakdown of a specific crossing, see our <a href='/distance/dammam-to-al-batha-border-distance'>Dammam to Al Batha border distance guide</a> or the <a href='/distance/riyadh-to-abu-dhabi-distance'>Riyadh to Abu Dhabi distance guide</a>. Continuing further into Saudi Arabia after a long domestic leg first? See <a href='/intercity-transfers'>intercity transfers</a>.",
    },
  ],
  faqs: [
    { question: "What should I prepare for a cross-border transfer?", answer: "A valid passport, any required visa or entry permit for your nationality, and correct vehicle documentation. Requirements vary by nationality and change periodically, so check the current position with the relevant border authority before travelling." },
    { question: "Who controls how long the border crossing takes?", answer: "The border authorities on both sides, not us. Reports vary widely — from well under an hour off-peak to several hours during busy periods. We don't promise a specific crossing time." },
    { question: "Do you guarantee I'll be allowed to enter the other country?", answer: "No — entry approval is entirely the border authority's decision, based on your documentation and nationality. We handle the driving; we don't control or influence immigration decisions." },
    { question: "What happens at the border itself?", answer: "Passport control, visa checks and a vehicle inspection on each side of the crossing, run by the respective countries' authorities. Our driver waits through this process with you but doesn't manage it." },
    { question: "Which Saudi–GCC border routes do you operate?", answer: "Selected routes including Dammam to Bahrain over the King Fahd Causeway, Riyadh to Abu Dhabi via the Al Batha/Al Ghuwaifat crossing into the UAE, and Riyadh to Kuwait City. See the route examples above for the full list." },
    { question: "Is the price fixed if the crossing takes longer than expected?", answer: "Yes. The fare is agreed before you travel and doesn't change if the border processing runs long on the day." },
    { question: "Does the same driver take me across the border, or do I change vehicles?", answer: "Generally the same vehicle and driver continue the journey where the route offers a full crossing, though this can depend on the specific route — confirm this detail when you book if it matters to your plans." },
    { question: "What documents does the vehicle itself need for a cross-border trip?", answer: "Correct vehicle documentation for international travel, which is arranged as part of the booking. Exact requirements can vary, so confirm the current position with us and with the relevant border authority when you book." },
    { question: "How far in advance should I book a border transfer?", answer: "Earlier is generally better, particularly around holiday periods when both the roads and the crossing tend to be busier — this gives more certainty around vehicle availability for your specific date." },
    { question: "Can I do just the Saudi-side leg and arrange onward transport myself?", answer: "Yes, for routes where that's offered — see our dedicated border-crossing route pages (for example, the Al Batha border transfers) for Saudi-side-only options that drop you at the crossing." },
  ],
  finalCtaHeading: "Plan Your Border Transfer",
  finalCtaText: "Share your route, travel date and passenger details — we'll confirm the vehicle and a fixed price for the Saudi-side journey.",
};
