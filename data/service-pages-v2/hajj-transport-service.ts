import type { ServiceV2Content } from "@/components/services/ServiceV2View";

/**
 * "Planned Transportation for Hajj Travel" — deliberately NOT a duplicate of
 * the Umrah page: Hajj involves official permits, fixed group scheduling
 * and access rules that Umrah doesn't, and this page says clearly that
 * those rules come from the authorities, not from us. No specific current
 * restriction is stated as fact — official Hajj rules change and must be
 * checked against the current, authoritative source, not asserted here.
 */
export const hajjTransportServiceContent: ServiceV2Content = {
  eyebrow: "Hajj Transportation",
  h1: "Transportation Planning for Hajj Travel",
  dek: "Private transportation for the parts of a Hajj journey we can actually arrange — airport, hotel and group transfers — planned around the access rules and permits that the authorities, not us, control.",
  heroImage: "/images/heroes/makkah.webp",
  heroAlt: "The city of Makkah",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "Plan Your Transfer",
  secondaryCtaHref: "/get-quote",
  blocks: [
    {
      type: "prose",
      heading: "Why Hajj Transportation Requires Its Own Planning",
      narrow: true,
      paragraphs: [
        "Hajj is different from an ordinary trip to Makkah in ways that directly affect transportation. It runs on a fixed set of dates shared by an enormous number of pilgrims at once, it involves official permits and group scheduling issued by the relevant authorities, and access to some areas during the Hajj period is restricted to registered pilgrims and organised groups. Road conditions, timing, and what's practically achievable on a given day can all differ substantially from a normal visit.",
        "We provide private transportation — we are not a Hajj operator, do not issue Hajj permits, and do not claim any official Hajj authorisation. What we can help with is the transportation layer around an already-arranged Hajj trip: getting from the airport to accommodation, moving between hotels or group meeting points, and coordinating pickups for a family or group travelling together — specifically where that transportation isn't already provided as part of an official Hajj package.",
      ],
    },
    {
      type: "prose",
      heading: "Common Hajj Transportation Scenarios",
      narrow: true,
      paragraphs: [
        "Where it fits alongside your official Hajj arrangements, we can help with an airport-to-accommodation transfer on arrival, an accommodation-to-airport transfer on departure, city transfers for group logistics outside the restricted Hajj period itself, and coordinating vehicles for a family or group so everyone travels together rather than in separate bookings. We do not arrange or promise access to areas restricted during the Hajj period itself — that access is controlled entirely by the relevant Saudi authorities and tied to official Hajj permits, not to any transportation booking.",
      ],
    },
    {
      type: "authorityNote",
      heading: "Transportation Service vs. Official Hajj Requirements",
      weHandle: {
        heading: "We can help with",
        items: [
          "Airport-to-hotel transportation where not already covered by your Hajj package",
          "Transfers between hotels or agreed group meeting points",
          "Vehicle coordination for a family or group travelling together",
          "Luggage-appropriate vehicle selection",
        ],
      },
      authoritiesControl: {
        heading: "Controlled by official Hajj authorities",
        items: [
          "Hajj visa issuance and eligibility",
          "Permits and quotas",
          "Access to restricted areas during the Hajj period",
          "Official movement schedules for registered Hajj groups",
        ],
      },
      note: "Hajj rules, permits and access restrictions can change from year to year. This page does not state current official requirements — check the current position with your Hajj operator or the relevant Saudi authority before you travel.",
    },
    {
      type: "prose",
      heading: "Official Hajj Restrictions: What We Won't Tell You, and Why",
      narrow: true,
      paragraphs: [
        "We're deliberately not listing specific current restrictions, permit requirements, or access rules on this page. Hajj regulations are set and updated by the relevant Saudi authorities, they can change from year to year and sometimes within a season, and a transportation company restating them — potentially out of date — creates more risk than it removes. If a rule matters to your trip, the reliable source is your Hajj operator or the official Saudi authority responsible for Hajj affairs, checked close to your actual travel dates, not a general information page like this one.",
      ],
    },
    {
      type: "checklist",
      heading: "What to Arrange Before You Travel",
      intro: "Settle these with your Hajj operator or the relevant authority first — we can't confirm them on your behalf.",
      items: [
        "Confirm your Hajj permit and official itinerary with your operator",
        "Check current access rules for the specific dates you're travelling",
        "Understand what transportation, if any, your Hajj package already includes",
        "Identify the specific legs (if any) where you need transportation arranged separately",
      ],
    },
    {
      type: "timeline",
      heading: "Journey Coordination",
      orientation: "vertical",
      steps: [
        { label: "Before you travel", detail: "Confirm with us which specific legs you need — airport arrival, hotel transfers, or group coordination." },
        { label: "Arrival", detail: "A driver meets your flight and takes you to your accommodation, timed around your actual landing." },
        { label: "During your stay", detail: "Transfers between hotels or agreed meeting points, coordinated with your group's schedule." },
        { label: "Departure", detail: "A final transfer back to the airport at the end of your trip." },
      ],
    },
    {
      type: "checklist",
      heading: "Group Planning",
      items: [
        "Tell us your group size in advance so vehicles can be planned together",
        "Luggage volume affects vehicle choice — mention it when booking",
        "Coordinate one contact point for the whole group's transport",
        "Confirm meeting points and timing clearly with everyone travelling",
        "Share a single group contact number our driver can reach on the day",
      ],
    },
    {
      type: "prose",
      heading: "Hajj Journey Checklist",
      narrow: true,
      paragraphs: [
        "Before travelling: confirm your Hajj permit and full official itinerary with your operator; know exactly what transportation your package already provides so you're not duplicating it; identify any specific legs — typically airport arrival and departure — that genuinely need separate arrangement; and share your group's size and luggage with us early, since Hajj season is the busiest period of the year for vehicle availability.",
      ],
    },
    {
      type: "cta",
      text: "Need transportation arranged around an already-confirmed Hajj trip?",
      linkLabel: "Get a Quote",
      linkPath: "/get-quote",
    },
    {
      type: "relatedInfo",
      heading: "Related Reading",
      paragraph:
        "For general airport pickup details, see <a href='/airport-transfers'>airport transfers</a>. For journeys outside the Hajj period, see our <a href='/umrah-taxi-service'>Umrah transportation</a> page instead. Moving between hotels as part of your trip? See <a href='/services/hotel-transfers'>hotel transfers</a>.",
    },
  ],
  faqs: [
    { question: "What should I arrange before a Hajj transfer?", answer: "Your Hajj permit, visa and official itinerary with your Hajj operator or the relevant authority — those aren't things we can arrange or confirm. Once your travel dates and locations are settled, we can help with the transportation legs around them." },
    { question: "Are there official restrictions I need to check?", answer: "Yes, likely — access to some areas during the Hajj period is controlled by the Saudi authorities and can change from year to year. Check the current rules with your Hajj operator or the relevant official source before travelling; we don't state current restrictions on this page since they change." },
    { question: "How should groups plan transportation?", answer: "Coordinate one contact point for the whole group, confirm numbers and luggage in advance, and tell us the specific legs you need (airport, hotel transfers, or both) so vehicles can be arranged together rather than piecemeal." },
    { question: "Do you provide official Hajj permits or authorisation?", answer: "No. We are a transportation service, not a Hajj operator — we don't issue permits and don't claim official Hajj authorisation. Permit and eligibility questions go to your Hajj operator or the relevant Saudi authority." },
    { question: "Is this the same as your Umrah service?", answer: "No. Hajj involves fixed dates, official permits and access restrictions that Umrah doesn't have, so it's treated as its own service rather than the same page with a different name." },
    { question: "Can you handle a large group's transportation?", answer: "Yes, within a private-vehicle model — tell us your group size and we'll coordinate the right combination of vehicles rather than a single car for everyone." },
    { question: "Can you provide transportation inside restricted areas during the Hajj period?", answer: "No — access to restricted areas during Hajj is controlled entirely by the relevant Saudi authorities and tied to official Hajj permits and group arrangements, not to a transportation booking. We don't arrange or promise access to those areas." },
    { question: "What transportation does my Hajj package usually already include?", answer: "This varies by operator, so check your specific package rather than assuming. Where your package already covers transportation for a given leg, there's no need to book separately with us for that same leg." },
    { question: "How early should Hajj transportation be arranged?", answer: "As early as practical — Hajj season is the busiest period of the year for transportation demand across the whole network, so earlier booking gives more certainty of vehicle availability for your specific legs." },
  ],
  finalCtaHeading: "Arrange Your Hajj Transportation",
  finalCtaText: "Tell us which legs of your journey need arranging — we'll confirm the vehicles and a fixed price.",
};
