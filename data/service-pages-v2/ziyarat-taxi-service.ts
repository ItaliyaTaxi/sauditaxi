import type { ServiceV2Content } from "@/components/services/ServiceV2View";

/**
 * "Explore the Places Along the Journey" — Ziyarat transportation, linking
 * to the site's real, existing per-site pages (data/makkah/attractions.ts,
 * data/madinah/attractions.ts) rather than describing sites generically.
 */
export const ziyaratTaxiServiceContent: ServiceV2Content = {
  eyebrow: "Ziyarat Transportation",
  h1: "Private Transportation for Ziyarat Visits",
  dek: "A private vehicle for visiting the historic sites around Makkah and Madinah — flexible timing, and a driver who knows the route to each one.",
  heroImage: "/images/heroes/taif.webp",
  heroAlt: "A historic hillside setting in Saudi Arabia",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See Ziyarat Destinations",
  secondaryCtaHref: "/ziyarat-taxi-service#destinations",
  blocks: [
    {
      type: "prose",
      heading: "What Is a Private Ziyarat Transfer?",
      narrow: true,
      paragraphs: [
        "A private Ziyarat transfer is a dedicated vehicle and driver for visiting historic sites and locations connected to early Islamic history around Makkah and Madinah — not a religious tour or a guided commentary, but the transportation to and between the sites themselves. It differs from a standard city transfer mainly in shape: rather than one pickup and one drop-off, a Ziyarat trip typically involves several stops in a single outing, planned around the sites you specifically want to see.",
      ],
    },
    {
      type: "prose",
      heading: "Planning a Ziyarat Journey",
      narrow: true,
      paragraphs: [
        "A single booking can cover several stops in one trip — for example, a Madinah Ziyarat visit taking in Quba Mosque, the Seven Mosques and Mount Uhud in one outing, rather than separate bookings for each. Tell us the sites you'd like to see and roughly how long you'd like at each one when you book, and we'll plan the order. Multi-stop journeys like this are a real part of how this service works — not every private transfer service offers it, so it's worth confirming when you book rather than assuming.",
      ],
    },
    {
      type: "linkGrid",
      heading: "Makkah Ziyarat Destinations",
      items: [
        { label: "Makkah Ziyarat Tour", href: "/makkah/makkah-ziyarat-tour" },
        { label: "Cave of Hira", href: "/makkah/makkah-to-cave-of-hira" },
        { label: "Jabal Thawr", href: "/makkah/makkah-to-jabal-thawr" },
        { label: "Makkah Historical Sites Tour", href: "/makkah/makkah-historical-sites-tour" },
      ],
    },
    {
      type: "linkGrid",
      heading: "Madinah Ziyarat Destinations",
      items: [
        { label: "Quba Mosque", href: "/madinah/madinah-to-quba-mosque" },
        { label: "Mount Uhud", href: "/madinah/madinah-to-mount-uhud" },
        { label: "Qiblatain Mosque", href: "/madinah/madinah-to-qiblatain-mosque" },
        { label: "The Seven Mosques", href: "/madinah/madinah-to-seven-mosques" },
      ],
    },
    {
      type: "prose",
      heading: "Makkah and Madinah Travel Context",
      narrow: true,
      paragraphs: [
        "Ziyarat visits are commonly arranged alongside an Umrah trip, either as a dedicated day in Makkah or Madinah, or split across your stay in each city. If your itinerary also involves travelling between the two holy cities, that's covered separately by our <a href='/routes/makkah-to-madinah'>Makkah to Madinah transfer</a> — a genuinely long drive at around 450 km, distinct from the shorter, multi-stop Ziyarat journeys within a single city.",
      ],
    },
    {
      type: "audienceGrid",
      heading: "Family and Group Travel",
      items: [
        { title: "Families with children or elderly relatives", detail: "A private vehicle avoids the walking and waiting that a group tour can involve — you set the pace, and the car is always close by between stops." },
        { title: "Groups travelling together", detail: "One larger vehicle keeps everyone together across multiple sites, rather than coordinating separate transport for each person." },
        { title: "Travellers combining Ziyarat with Umrah", detail: "Ziyarat visits can be arranged around your Umrah itinerary — tell us your overall schedule so the timing fits." },
      ],
    },
    {
      type: "checklist",
      heading: "Vehicle Planning",
      intro: "Matched to your group, not a single default car.",
      items: [
        "A sedan suits one or two travellers visiting a few sites",
        "An SUV or van suits a family or group across a full day",
        "Tell us your total numbers, including children",
        "Luggage is rarely a factor for Ziyarat trips, but mention any if relevant",
      ],
    },
    {
      type: "prose",
      heading: "Multi-Stop Journeys: How to Communicate Your Plan",
      narrow: true,
      paragraphs: [
        "If you want to visit more than one site, list them in the order you'd prefer when you book, along with a rough sense of how long you want at each — even an approximate 20 minutes versus an hour makes a real difference to planning the day. We'll confirm a realistic route and timing back to you before the day itself, so there are no surprises about how much you can reasonably fit in.",
      ],
    },
    {
      type: "checklist",
      heading: "Ziyarat Planning Checklist",
      items: [
        "List the specific sites you'd like to visit",
        "Give a rough time estimate for each stop",
        "Confirm your group size",
        "Share your hotel or starting address",
        "Mention if the trip connects to a wider Umrah itinerary",
      ],
    },
    {
      type: "cta",
      text: "Planning a day of Ziyarat visits around Makkah or Madinah?",
      linkLabel: "Get a Quote",
      linkPath: "/get-quote",
    },
    {
      type: "relatedInfo",
      heading: "Related Reading",
      paragraph:
        "Arranging the wider trip? See our <a href='/umrah-taxi-service'>Umrah transportation</a> page, or <a href='/taxi-service/madinah'>Madinah city transfers</a> for local journeys beyond the Ziyarat sites themselves.",
    },
  ],
  faqs: [
    { question: "Can I visit multiple sites in one private trip?", answer: "Yes. Tell us the sites you'd like to see when you book and we'll plan a single trip covering them, rather than arranging separate transfers for each stop." },
    { question: "Do you offer Ziyarat transportation in both Makkah and Madinah?", answer: "Yes — see the destination lists above for the specific sites we cover in each city." },
    { question: "Can a family or group book together?", answer: "Yes. Tell us your group size when booking and we'll match the vehicle to fit everyone comfortably." },
    { question: "How much time do I get at each site?", answer: "That's set by you — let us know your preferred pace when booking and we'll plan the visit around it rather than a fixed schedule." },
    { question: "Is this a guided religious tour?", answer: "No — this is private transportation to and between the sites, not a religious tour or guide service." },
    { question: "Can Ziyarat transportation be combined with an Umrah trip?", answer: "Yes, commonly — many travellers arrange Ziyarat visits alongside their Umrah journey. See our Umrah transportation page for the airport and hotel legs of that trip." },
    { question: "How do I tell you the order I want to visit sites in?", answer: "List them in your preferred order when booking, along with roughly how long you'd like at each — we'll confirm a realistic route and timing before your visit." },
    { question: "Is a Ziyarat transfer suitable for elderly travellers?", answer: "Yes — a private vehicle that waits between stops, rather than a walking tour, is often more comfortable for elderly visitors. Mention any specific needs when booking." },
  ],
  finalCtaHeading: "Plan Your Ziyarat Visit",
  finalCtaText: "Tell us which sites you'd like to see and your group size — we'll confirm a driver and a fixed price.",
};
