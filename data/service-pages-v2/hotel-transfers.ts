import type { ServiceV2Content } from "@/components/services/ServiceV2View";

/**
 * "Door-to-Door From Hotel to Hotel" — convenience-focused, distinct from
 * Airport Transfers (which is built around a flight) even though the two
 * overlap on airport-to-hotel journeys. Links to the real city-hub pages
 * (app/(main)/cities/[city]/page.tsx) which carry each city's actual hotel
 * table, rather than listing hotels here.
 */
export const hotelTransfersContent: ServiceV2Content = {
  eyebrow: "Hotel Transfers",
  h1: "Private Hotel Transfers in Saudi Arabia",
  dek: "Pickup from your hotel lobby, drop-off at the next one — airport-to-hotel, hotel-to-hotel, or hotel-to-destination, arranged before you need it.",
  heroImage: "/images/heroes/home.webp",
  heroAlt: "A hotel entrance and driveway",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See City Hotel Coverage",
  secondaryCtaHref: "/services/hotel-transfers#coverage",
  blocks: [
    {
      type: "prose",
      heading: "What Is a Hotel Transfer?",
      narrow: true,
      paragraphs: [
        "A hotel transfer is a private journey that starts or ends at a hotel — covering four related trip types: airport to hotel on arrival, hotel to airport on departure, hotel to hotel when your itinerary moves between cities or you change accommodation, and hotel to a specific destination and back. What ties them together is the hotel itself as a fixed, known point — no separate pickup zone to find, no coordinating a meeting point from scratch each time.",
      ],
    },
    {
      type: "prose",
      heading: "How Hotel Pickup Works",
      narrow: true,
      paragraphs: [
        "You give us the hotel name (or, better, the exact address, since some hotels share similar names), the pickup time, and how many passengers and bags are travelling. On the day, your driver arrives at the hotel entrance or lobby at the agreed time. For an airport-to-hotel trip, pickup timing is planned around your flight rather than a fixed clock time; for a hotel-to-hotel or hotel-to-destination trip, it's simply whatever time suits your schedule.",
      ],
    },
    {
      type: "checklist",
      heading: "Hotel Pickup Problems to Avoid",
      intro: "A few practical points that prevent the most common delays.",
      items: [
        "Give the exact hotel name and address — some hotels share very similar names in the same city",
        "Large hotel properties can have more than one entrance or driveway; confirm which one if you know",
        "Some properties designate a specific pickup or drop-off area separate from the main entrance",
        "Double-check the spelling of the hotel name when booking to avoid confusion",
        "Share a phone number reachable at the pickup time in case the driver needs to confirm your location",
      ],
    },
    {
      type: "checklist",
      heading: "Common Hotel Journeys",
      items: [
        "Airport to your hotel on arrival",
        "Hotel to hotel, when moving between cities",
        "Hotel to a specific destination — a meeting, a site, an event",
        "Hotel to the airport for departure",
      ],
    },
    {
      type: "prose",
      heading: "Airport ↔ Hotel",
      narrow: true,
      paragraphs: [
        "This is the most common hotel transfer, and it overlaps directly with our <a href='/airport-transfers'>airport transfers</a> service — the same flight-aware pickup planning applies, just with a hotel as the confirmed destination rather than an unspecified address. See that page for the detail on how flight tracking and meeting points work.",
      ],
    },
    {
      type: "prose",
      heading: "Hotel ↔ Hotel",
      narrow: true,
      paragraphs: [
        "Useful in two situations: moving between cities on a multi-stop trip (effectively an intercity transfer with a hotel at each end — see <a href='/intercity-transfers'>intercity transfers</a> for the longer-distance detail), or relocating within the same city, for instance if your booking changes partway through a stay. Either way, tell us both hotel names and the vehicle handles the rest.",
      ],
    },
    {
      type: "imageBand",
      heading: "Pickup Coordination",
      image: "/images/journey/riyadh-skyline.jpg",
      alt: "A Saudi city where hotel transfers are common",
      imageSide: "end",
      paragraphs: [
        "If your plans shift on the day — an earlier meeting, a later checkout — a message on WhatsApp is enough to adjust the pickup. We'd rather hear about a change than have a driver waiting at the wrong time.",
      ],
    },
    {
      type: "audienceGrid",
      heading: "Business Travellers and Families",
      items: [
        { title: "Business travellers", detail: "A firm pickup time matters most — hotel to a meeting, then back, planned with enough margin for normal traffic rather than cut close." },
        { title: "Families and groups", detail: "Vehicle size matched to passengers and luggage, not assumed — tell us your numbers so an SUV or van is booked when the group needs one, not a sedan that's too small." },
      ],
    },
    {
      type: "linkGrid",
      heading: "City Hotel Coverage",
      items: [
        { label: "Riyadh hotels", href: "/cities/riyadh" },
        { label: "Jeddah hotels", href: "/cities/jeddah" },
        { label: "Makkah hotels", href: "/cities/makkah" },
        { label: "Madinah hotels", href: "/cities/madinah" },
        { label: "Dammam hotels", href: "/cities/dammam" },
      ],
    },
    {
      type: "checklist",
      heading: "Hotel Transfer Booking Checklist",
      intro: "The vehicle is matched to your group and bags, not a single default car.",
      items: [
        "Exact hotel name and address for pickup and drop-off",
        "Pickup time, or flight details if it's an airport connection",
        "Passenger and luggage count",
        "Child seat requirement, if any",
        "A contact number reachable at pickup time",
      ],
    },
    {
      type: "cta",
      text: "Need a transfer arranged between two hotels, or from the airport to your hotel?",
      linkLabel: "Get a Quote",
      linkPath: "/get-quote",
    },
    {
      type: "relatedInfo",
      heading: "Related Reading",
      paragraph:
        "Arriving by air first? See our <a href='/airport-transfers'>airport transfers</a> service in full. Moving between hotels in different cities? See <a href='/intercity-transfers'>intercity transfers</a> for the road-distance detail.",
    },
  ],
  faqs: [
    { question: "What's the difference between hotel transfers and airport transfers?", answer: "They overlap on an airport-to-hotel journey, but hotel transfers also cover hotel-to-hotel and hotel-to-destination trips that don't involve a flight at all — the hotel, not the airport, is the constant starting or ending point." },
    { question: "Can you pick me up from my hotel lobby directly?", answer: "Yes — pickup is from the hotel entrance or lobby at the time you set, not a separate pickup zone." },
    { question: "Can I book a transfer between two hotels in different cities?", answer: "Yes — that's effectively an intercity transfer with a hotel at each end. Tell us both hotel names when booking." },
    { question: "Which cities do you cover for hotel transfers?", answer: "Major Saudi cities including Riyadh, Jeddah, Makkah, Madinah and Dammam — see the coverage links above for each city's hotel information." },
    { question: "Can vehicle size account for group luggage?", answer: "Yes. Tell us your passenger and bag count when booking so we can match a sedan, SUV or van to what you're actually carrying." },
    { question: "Do I need to book in advance for a hotel-to-hotel transfer?", answer: "Booking ahead gives more certainty on vehicle availability, especially during busy periods, though same-day requests can often be accommodated — message us with your timing." },
    { question: "What if my hotel has more than one entrance?", answer: "Let us know which entrance or driveway you'll be at if the property has more than one — it's a common source of delay at larger hotels, and confirming it in advance avoids it." },
    { question: "Can a hotel transfer include a stop somewhere else on the way?", answer: "Tell us your plan when booking — a single stop en route can often be arranged as part of the same trip rather than a separate booking." },
  ],
  finalCtaHeading: "Book Your Hotel Transfer",
  finalCtaText: "Share your pickup hotel, destination and timing — we'll confirm a driver and a fixed price.",
};
