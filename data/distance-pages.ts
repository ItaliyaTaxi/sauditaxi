/**
 * Informational "distance & travel time" pages — /distance/{slug}.
 *
 * Distinct in intent and content from the commercial /routes/{slug} pages:
 * these answer "how far / how long / how do I get there" research questions,
 * cite the transport modes that genuinely exist for each route, and link to
 * the matching /routes/{slug} page as a single contextual CTA rather than
 * repeating its commercial content. Every distance/time/transport-mode claim
 * below was checked against public sources at the time of writing (see each
 * entry's `sources`); nothing here is estimated or invented. Where sources
 * disagreed on an exact figure (common for road-distance queries, since
 * different tools measure between different start/end points within a city),
 * the page states the range rather than a false-precision single number.
 */

export interface DistancePage {
  slug: string;
  from: string;
  to: string;
  /** The matching commercial route page this page links to. */
  routePath: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  quickAnswer: {
    drivingDistance: string;
    drivingTime: string;
    straightLineDistance?: string;
    note: string;
  };
  distanceExplanation: string[];
  travelTime: string[];
  transportOptions: {
    mode: string;
    suitability: string;
    duration: string;
    advantages: string;
    limitations: string;
  }[];
  routeSpecific: { heading: string; paragraphs: string[] };
  infoBoxes: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const distancePages: DistancePage[] = [
  {
    slug: "jeddah-to-makkah-distance",
    from: "Jeddah",
    to: "Makkah",
    routePath: "/routes/jeddah-to-makkah",
    metaTitle: "Jeddah to Makkah Distance: How Far & How Long? (KM + Travel Time)",
    metaDescription: "How far is Makkah from Jeddah? Road distance, driving time, the Haramain train option, and why the distance varies depending on your exact starting point.",
    h1: "Jeddah to Makkah Distance: How Far Is It and How Long Does It Take?",
    quickAnswer: {
      drivingDistance: "Roughly 85–95 km by road",
      drivingTime: "Typically 60–90 minutes",
      straightLineDistance: "About 68 km as the crow flies",
      note: "The driving distance depends heavily on your exact start point — from King Abdulaziz International Airport it's closer to 85 km, while from central Jeddah it can run to 95 km or more. Straight-line distance is not usable for travel planning; it's included only for reference.",
    },
    distanceExplanation: [
      "Jeddah to Makkah is one of the shortest and most heavily travelled city-pairs in Saudi Arabia, but published distance figures genuinely vary — from around 82 km to roughly 95 km, depending on which point in each city is used as the start and end. A pickup from King Abdulaziz International Airport (JED), on Jeddah's north side, is closer to Makkah than a pickup from central or southern Jeddah.",
      "The road distance and the straight-line (great-circle) distance are two different numbers and shouldn't be confused: the straight-line distance between the two cities is around 68 km, but no road runs in a straight line, so that figure isn't useful for planning an actual trip.",
    ],
    travelTime: [
      "Under normal conditions, the drive takes roughly 60 to 90 minutes on Highway 40, the controlled-access motorway connecting the two cities. This is the single most common intercity journey in the Kingdom, since most pilgrims arriving by air land in Jeddah and continue directly to Makkah.",
      "Travel time extends during Ramadan and the Hajj season, when both the highway and the roads immediately around Makkah carry significantly higher volume, and some sources cite a realistic range of 90 to 120 minutes during these peak periods rather than the off-peak 60–90 minute figure.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Most travellers, especially those arriving with luggage or as a family or group",
        duration: "60–90 minutes (longer in peak season)",
        advantages: "Door-to-door, no transfers, flexible timing, direct from the airport terminal",
        limitations: "Subject to road traffic, particularly around Makkah during Ramadan and Hajj",
      },
      {
        mode: "Haramain High-Speed Railway",
        suitability: "Travellers comfortable managing their own luggage between the airport, train station, and hotel",
        duration: "Part of the wider Jeddah–Makkah–Madinah line, running at up to 300 km/h",
        advantages: "Fast, fixed schedule, avoids road traffic entirely",
        limitations: "The Makkah station sits in the Al Rusaifah district, about 3–4 km from the Haram, so a further local transfer is needed to reach central Makkah or a Haram-area hotel",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget-conscious travellers without heavy luggage",
        duration: "Longer than a direct drive, subject to the bus schedule",
        advantages: "Lower cost, part of a nationwide network connecting all major Saudi cities",
        limitations: "Fixed departure times and a shared vehicle, less flexible than a private transfer",
      },
    ],
    routeSpecific: {
      heading: "Arriving in Jeddah and continuing to Makkah",
      paragraphs: [
        "Makkah itself has no airport — air travel access to Makkah is not possible, since no aircraft are permitted to fly over the city for religious reasons. Jeddah's King Abdulaziz International Airport, about 97 km from central Makkah, is the closest and by far the most commonly used gateway; Taif Regional Airport, roughly 109 km away on the other side of Makkah, is a secondary option some travellers use.",
        "Because Makkah has no airport of its own, every visitor arriving by air — the large majority of pilgrims — makes this exact Jeddah-to-Makkah leg by road or by the Haramain train, which is part of why it's one of the busiest short-haul intercity routes in the country.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "Private car or taxi, door to door in under 90 minutes off-peak" },
      { label: "Most budget-friendly", value: "SAPTCO intercity bus" },
      { label: "Key fact", value: "Makkah has no airport of its own — Jeddah (JED) is the nearest, about 97 km away" },
    ],
    faqs: [
      { question: "How far is Jeddah Airport from Makkah?", answer: "About 85 km by road from King Abdulaziz International Airport, though this varies depending on the exact area of Makkah you're travelling to." },
      { question: "How many kilometres is Jeddah from Makkah in total?", answer: "Road distance is generally cited between 82 and 95 km depending on the exact start and end points used; the straight-line distance is about 68 km." },
      { question: "Is there a train between Jeddah and Makkah?", answer: "Yes — the Haramain High-Speed Railway connects Jeddah (both the King Abdulaziz Airport station and the central Al Sulaymaniyah station) to Makkah, though the Makkah station itself is a few kilometres from the Haram, requiring a further local transfer." },
      { question: "Does travel time change during Ramadan or Hajj?", answer: "Yes, both road and general travel times increase during these peak periods due to significantly higher traffic volume on the approach to Makkah." },
      { question: "Is a private car practical for this journey?", answer: "Yes — at under 90 minutes off-peak, it's the most common way pilgrims and visitors make this trip, particularly with luggage or as a family group." },
    ],
    sources: [
      { label: "Distance between Jeddah and Makkah (distancebetween2.com)", url: "https://distancebetween2.com/jeddah/makkah" },
      { label: "Jeddah to Mecca driving distance (travelmath.com)", url: "https://www.travelmath.com/drive-distance/from/Jeddah,+Saudi+Arabia/to/Mecca,+Saudi+Arabia" },
      { label: "Haramain High-Speed Railway overview (Visit Saudi)", url: "https://www.visitsaudi.com/en/stories/haramain-high-speed-railway" },
      { label: "Why there is no airport in Makkah, and the nearest airports (hotelsplatform.com)", url: "https://hotelsplatform.com/blog/why-are-there-no-airports-in-makkah-and-the-nearest-airports-to-it" },
      { label: "SAPTCO — Saudi Public Transport Company overview (Wikipedia)", url: "https://en.wikipedia.org/wiki/Saudi_Public_Transport_Company" },
    ],
    relatedLinks: [
      { label: "Jeddah to Makkah taxi and private transfer service", href: "/routes/jeddah-to-makkah" },
      { label: "Makkah to Madinah distance", href: "/distance/makkah-to-madinah-distance" },
      { label: "Jeddah Airport transfer overview", href: "/airport-transfer/jeddah-airport" },
    ],
  },

  {
    slug: "makkah-to-madinah-distance",
    from: "Makkah",
    to: "Madinah",
    routePath: "/routes/makkah-to-madinah",
    metaTitle: "Makkah to Madinah Distance: KM, Travel Time & Haramain Train",
    metaDescription: "How far is Madinah from Makkah? Road distance on the Hijrah Highway, the shorter alternate route, the Haramain train, and realistic travel times.",
    h1: "Makkah to Madinah Distance: How Far Is It and How Long Does the Journey Take?",
    quickAnswer: {
      drivingDistance: "About 450 km via the main highway, or roughly 370 km via a more direct alternate route",
      drivingTime: "4 to 5 hours on the main route; 3 to 4 hours via the shorter alternate",
      note: "Two genuinely different road routes exist between the cities, with different distances and times — see below. This is a driving distance; it does not apply to every possible starting hotel in either city.",
    },
    distanceExplanation: [
      "Most journeys between Makkah and Madinah follow the Hijrah Highway (Highway 15), the historic pilgrim route between the two Holy Cities, which runs about 450 km and is a modern, multi-lane expressway for its entire length. A more direct alternate route via Highway 40 covers roughly 370 km, though it isn't the route most private transfers and buses default to.",
      "Exact distance from any specific hotel varies by a few kilometres depending on which side of each city you're starting or ending in — the figures above are city-to-city, not doorstep-to-doorstep.",
    ],
    travelTime: [
      "On the main Hijrah Highway route, the drive takes roughly four to five hours in free-flowing traffic. The shorter alternate route via Highway 40 can be covered in three to four hours where it's used.",
      "Traffic on the approach to both cities tends to build around prayer times, and the whole corridor sees significantly higher volume during Ramadan and the weeks around Hajj, since it's one of the busiest pilgrim corridors in the Kingdom.",
    ],
    transportOptions: [
      {
        mode: "Haramain High-Speed Railway",
        suitability: "Travellers who want the fastest option and are comfortable with the station locations",
        duration: "Part of a 449 km, up-to-300-km/h line; a fixed schedule rather than a flexible departure time",
        advantages: "By far the fastest way to cover the distance, avoids all road traffic, opened in 2018 and now well established",
        limitations: "The Makkah station is in Al Rusaifah, about 3–4 km from the Haram, and the Madinah station is about 8–10 km from Masjid an-Nabawi — both ends need a further local transfer",
      },
      {
        mode: "Private car / taxi",
        suitability: "Groups, families, elderly or less mobile travellers, and anyone wanting door-to-door hotel pickup",
        duration: "4–5 hours (main route) or 3–4 hours (alternate route)",
        advantages: "Hotel-to-hotel, no transfers needed at either end, flexible departure timing",
        limitations: "Longer overall than the train once station transfers are factored out, and subject to road traffic",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers without heavy luggage",
        duration: "Longer than a direct drive, on a fixed schedule",
        advantages: "Lower cost, connects to SAPTCO's wider national network",
        limitations: "Fixed timetable, shared vehicle, station-to-station rather than hotel-to-hotel",
      },
    ],
    routeSpecific: {
      heading: "Travelling from Makkah after completing Umrah",
      paragraphs: [
        "Most travellers making this specific journey — Makkah to Madinah, in this direction — have just completed Umrah and are continuing to visit the Prophet's Mosque, often as the final leg of their trip before flying home from Madinah's Prince Mohammad bin Abdulaziz International Airport rather than from Jeddah.",
        "Because Makkah has no airport of its own, this leg is made entirely by road or rail — there is no flight option between the two cities directly, since any Makkah-bound or Makkah-originating air travel is not possible for religious reasons.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "Haramain High-Speed Railway, at up to 300 km/h" },
      { label: "Most flexible option", value: "Private car, hotel to hotel with no station transfer" },
      { label: "Two real routes exist", value: "~450 km via the Hijrah Highway, or ~370 km via a more direct alternate" },
    ],
    faqs: [
      { question: "How many kilometres is Makkah from Madinah?", answer: "About 450 km via the main Hijrah Highway route, or roughly 370 km via a more direct alternate route — the figure depends on which road is taken." },
      { question: "Is there a train between Makkah and Madinah?", answer: "Yes, the Haramain High-Speed Railway connects both cities directly, running at up to 300 km/h, though both stations sit a few kilometres from the respective holy sites." },
      { question: "How long does the road journey take?", answer: "Roughly four to five hours on the main route, or three to four hours on the shorter alternate route." },
      { question: "Does the travel time change during Ramadan?", answer: "Yes — traffic on this corridor increases noticeably during Ramadan and the weeks around Hajj, extending the road journey beyond the usual four-to-five-hour estimate." },
      { question: "Can I fly between Makkah and Madinah?", answer: "No — Makkah has no airport, so there is no direct flight option; the journey has to be made by road or by the Haramain train." },
      { question: "What is the fastest way to travel this route?", answer: "The Haramain High-Speed Railway is the fastest option by a significant margin, though it requires a short local transfer at each end to reach the Haram or Masjid an-Nabawi." },
    ],
    sources: [
      { label: "Makkah to Madinah distance and route options (islamiclandmarks.com)", url: "https://www.islamiclandmarks.com/makkah-other/makkah-to-madinah-distance" },
      { label: "Makkah to Madinah distance guide (thepilgrim.co)", url: "https://thepilgrim.co/makkah-to-medina-distance/" },
      { label: "Haramain High-Speed Railway: pilgrim's guide (Wego)", url: "https://blog.wego.com/haramain-high-speed-railway/" },
      { label: "Why there is no airport in Makkah (hotelsplatform.com)", url: "https://hotelsplatform.com/blog/why-are-there-no-airports-in-makkah-and-the-nearest-airports-to-it" },
    ],
    relatedLinks: [
      { label: "Makkah to Madinah taxi and private transfer service", href: "/routes/makkah-to-madinah" },
      { label: "Madinah to Makkah distance (reverse direction)", href: "/distance/madinah-to-makkah-distance" },
      { label: "Jeddah to Makkah distance", href: "/distance/jeddah-to-makkah-distance" },
    ],
  },

  {
    slug: "madinah-to-makkah-distance",
    from: "Madinah",
    to: "Makkah",
    routePath: "/routes/madinah-to-makkah",
    metaTitle: "Madinah to Makkah Distance: KM, Travel Time & Miqat Info",
    metaDescription: "How far is Makkah from Madinah? Road distance, travel time, the Haramain train, and the Dhul Hulaifah (Abyar Ali) miqat pilgrims pass on the way.",
    h1: "Madinah to Makkah Distance: How Far Is It, and What Should Pilgrims Know?",
    quickAnswer: {
      drivingDistance: "About 450 km via the main highway, or roughly 370 km via a more direct alternate route",
      drivingTime: "4 to 5 hours on the main route; 3 to 4 hours via the shorter alternate — plus time at the miqat for pilgrims entering ihram",
      note: "This is the same road distance as the Makkah-to-Madinah direction, but many travellers on this specific leg have an additional stop to plan for — see below.",
    },
    distanceExplanation: [
      "The road distance from Madinah south to Makkah is the same as the reverse direction — about 450 km via the main Hijrah Highway (Highway 15), or roughly 370 km via a more direct alternate route through Highway 40. What differs on this leg is not the distance itself but what many travellers need to do partway through it.",
      "As with the northbound direction, the exact distance from a specific Madinah hotel to a specific Makkah hotel varies by a few kilometres depending on location within each city.",
    ],
    travelTime: [
      "Allow four to five hours for the main-route drive, or three to four hours via the shorter alternate, before accounting for any stop. Pilgrims who haven't yet entered ihram typically stop at Dhul Hulaifah (Abyar Ali), a recognised miqat just outside Madinah, to change into ihram clothing and set their intention before continuing — this adds time that isn't part of the base driving estimate.",
      "As with the Makkah-to-Madinah direction, traffic on the approach to Makkah is heavier during Ramadan and the weeks around Hajj, extending the overall journey time.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Pilgrims planning a miqat stop, families, and anyone wanting the stop built into a single continuous journey",
        duration: "4–5 hours driving, plus time at the miqat if needed",
        advantages: "The miqat stop can be planned into the route in advance rather than requiring a separate arrangement",
        limitations: "Longer overall than the train, and subject to road traffic",
      },
      {
        mode: "Haramain High-Speed Railway",
        suitability: "Travellers who have already entered ihram before leaving Madinah, or aren't stopping at Dhul Hulaifah",
        duration: "Part of the 449 km, up-to-300-km/h line",
        advantages: "Fastest way to cover the distance itself",
        limitations: "The train does not stop at Dhul Hulaifah, so pilgrims needing that stop would need to arrange it separately before travelling to the station",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers, though less commonly used for this specific pilgrim leg",
        duration: "Longer than a direct drive, fixed schedule",
        advantages: "Lower cost",
        limitations: "Fixed timetable makes an unplanned miqat stop impractical",
      },
    ],
    routeSpecific: {
      heading: "The Dhul Hulaifah (Abyar Ali) miqat",
      paragraphs: [
        "Dhul Hulaifah, commonly known as Abyar Ali, is one of the recognised miqat points where pilgrims travelling from Madinah toward Makkah enter ihram if they haven't already done so. It sits just outside Madinah on the route south, which is why it's specifically relevant to this direction of travel and not to the Makkah-to-Madinah leg.",
        "Because entering ihram is a planned stop rather than a fixed-duration one, travellers making this journey by private car can have the stop built into the route from the outset, whereas the fixed-schedule train and bus options don't accommodate it in the same way.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option (no miqat stop)", value: "Haramain High-Speed Railway" },
      { label: "Best option for pilgrims entering ihram en route", value: "Private car, with the Dhul Hulaifah stop planned in advance" },
      { label: "Key consideration", value: "The recognised miqat for this direction is Dhul Hulaifah (Abyar Ali), just outside Madinah" },
    ],
    faqs: [
      { question: "How many kilometres is Madinah from Makkah?", answer: "About 450 km via the main highway route, or roughly 370 km via a more direct alternate — the same distance as the reverse direction." },
      { question: "What is the miqat for travelling from Madinah to Makkah?", answer: "Dhul Hulaifah, commonly known as Abyar Ali, just outside Madinah — pilgrims who haven't yet entered ihram typically stop here before continuing south." },
      { question: "Does the Haramain train stop at the miqat?", answer: "No, the train does not stop at Dhul Hulaifah, so pilgrims needing to enter ihram there would need to do so before travelling to the train station, or use a private car instead." },
      { question: "How long does the road journey take, including the miqat stop?", answer: "The drive itself takes four to five hours on the main route; the miqat stop adds additional time on top of that, varying by group size." },
      { question: "Is there a train between Madinah and Makkah?", answer: "Yes, the Haramain High-Speed Railway connects both cities, though it doesn't accommodate a miqat stop along the way." },
    ],
    sources: [
      { label: "Makkah to Madinah distance and route options (islamiclandmarks.com)", url: "https://www.islamiclandmarks.com/makkah-other/makkah-to-madinah-distance" },
      { label: "Haramain High-Speed Railway stations (Wego)", url: "https://blog.wego.com/haramain-high-speed-railway/" },
      { label: "Makkah to Madinah distance guide (thepilgrim.co)", url: "https://thepilgrim.co/makkah-to-medina-distance/" },
    ],
    relatedLinks: [
      { label: "Madinah to Makkah taxi and private transfer service", href: "/routes/madinah-to-makkah" },
      { label: "Makkah to Madinah distance (reverse direction)", href: "/distance/makkah-to-madinah-distance" },
      { label: "Madinah to AlUla distance", href: "/distance/madinah-to-alula-distance" },
    ],
  },

  {
    slug: "jeddah-to-madinah-distance",
    from: "Jeddah",
    to: "Madinah",
    routePath: "/routes/jeddah-to-madinah",
    metaTitle: "Jeddah to Madinah Distance: KM, Travel Time, Flight & Train Options",
    metaDescription: "How far is Madinah from Jeddah? Road distance via Highway 15, the roughly one-hour flight, the Haramain train, and realistic driving times.",
    h1: "Jeddah to Madinah Distance: How Far Is It and What Are the Travel Options?",
    quickAnswer: {
      drivingDistance: "About 410–420 km",
      drivingTime: "4 to 5 hours by road; around 1 hour by direct flight",
      note: "This is a genuinely long drive for a same-day trip — most travellers who aren't already road-tripping choose to fly or take the Haramain train instead.",
    },
    distanceExplanation: [
      "The road distance from Jeddah to Madinah is generally cited between 409 and 420 km, depending on the source and the exact start/end points measured, travelling on Highway 15. The coastal route passes King Abdullah Economic City (KAEC), Rabigh, and Masturah before heading inland via Badr — the site of the historic Battle of Badr — on the way to Madinah.",
      "As with any city-to-city figure, the exact distance from a specific Jeddah address to a specific Madinah hotel will vary by a small amount depending on location.",
    ],
    travelTime: [
      "By road, the drive takes roughly four to five hours depending on traffic and driving conditions. This is one of the longer regularly-travelled routes out of Jeddah, and — unlike the shorter Jeddah-to-Makkah run — a meaningful number of travellers choose not to drive it at all.",
      "A direct flight between Jeddah and Madinah takes around one hour, and it's a very frequently served route — around 441 flights a week operate between the two cities across four airlines, with Saudia the most-used carrier.",
    ],
    transportOptions: [
      {
        mode: "Direct flight",
        suitability: "Travellers prioritising speed, or connecting onward internationally through Jeddah first",
        duration: "About 1 hour in the air",
        advantages: "By far the fastest option, very high flight frequency (around 441 flights per week)",
        limitations: "Airport check-in and security add time beyond the 1-hour flight itself; not door-to-door",
      },
      {
        mode: "Haramain High-Speed Railway",
        suitability: "Travellers wanting a fast option without flying",
        duration: "Part of the 449 km, up-to-300-km/h Jeddah–Makkah–Madinah line",
        advantages: "Fast, avoids road traffic, connects directly from Jeddah's King Abdulaziz Airport station",
        limitations: "The Madinah station is about 8–10 km from Masjid an-Nabawi, requiring a further local transfer",
      },
      {
        mode: "Private car / taxi",
        suitability: "Families, groups with luggage, and travellers who'd rather not manage a station or airport transfer at either end",
        duration: "4–5 hours",
        advantages: "Hotel-to-hotel or airport-to-hotel, no transfers, flexible timing for early or late flights",
        limitations: "The longest of the three options in pure travel time",
      },
    ],
    routeSpecific: {
      heading: "Choosing Madinah first: a longer, less-travelled corridor",
      paragraphs: [
        "Some pilgrims fly into Jeddah but deliberately begin their pilgrimage in Madinah rather than Makkah, visiting the Prophet's Mosque before travelling south — this route serves that itinerary choice specifically, and it's a longer, less-travelled corridor than the short Jeddah-to-Makkah hop most arriving pilgrims use.",
        "Because it's a genuinely long drive after what's often a long-haul international flight, the one-hour flight or the Haramain train are worth real consideration here in a way they aren't on the much shorter Jeddah-to-Makkah leg.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "Direct flight, about 1 hour, 441 flights/week across 4 airlines" },
      { label: "Fastest ground option", value: "Haramain High-Speed Railway" },
      { label: "Most flexible for families/luggage", value: "Private car, hotel to hotel, 4–5 hours" },
    ],
    faqs: [
      { question: "How far is Jeddah from Madinah?", answer: "Road distance is generally cited between 409 and 420 km via Highway 15." },
      { question: "Is there a direct flight from Jeddah to Madinah?", answer: "Yes, it's a very frequently served route — around 441 flights per week across four airlines, with a flight time of about one hour." },
      { question: "Is there a train between Jeddah and Madinah?", answer: "Yes, the Haramain High-Speed Railway connects Jeddah's King Abdulaziz Airport station directly to Madinah." },
      { question: "How long does the road journey take?", answer: "Roughly four to five hours depending on traffic and driving conditions." },
      { question: "What is the fastest way to travel from Jeddah to Madinah?", answer: "A direct flight, at around one hour, is the fastest option; the Haramain train is the fastest ground option." },
    ],
    sources: [
      { label: "Jeddah to Madinah driving distance and route (explore-saudi.com)", url: "https://explore-saudi.com/en/jeddah-to-medina-road-trip-stops-2026/" },
      { label: "Jeddah to Medina by car (harmaincab.com)", url: "https://harmaincab.com/jeddah-to-medina-by-car/" },
      { label: "Jeddah to Madinah flight schedule and frequency (goibibo/aggregated)", url: "https://www.flightsfrom.com/JED-MED" },
      { label: "Haramain High-Speed Railway overview (Visit Saudi)", url: "https://www.visitsaudi.com/en/stories/haramain-high-speed-railway" },
    ],
    relatedLinks: [
      { label: "Jeddah to Madinah taxi and private transfer service", href: "/routes/jeddah-to-madinah" },
      { label: "Madinah to Makkah distance", href: "/distance/madinah-to-makkah-distance" },
      { label: "Jeddah to Makkah distance", href: "/distance/jeddah-to-makkah-distance" },
    ],
  },

  {
    slug: "riyadh-to-dammam-distance",
    from: "Riyadh",
    to: "Dammam",
    routePath: "/routes/riyadh-to-dammam",
    metaTitle: "Riyadh to Dammam Distance: KM, Travel Time & Train Option",
    metaDescription: "How far is Dammam from Riyadh? Road distance on Highway 40, driving time, and the SAR passenger railway that also connects the two cities.",
    h1: "Riyadh to Dammam Distance: How Far Is It and What's the Best Way to Travel?",
    quickAnswer: {
      drivingDistance: "About 400–411 km",
      drivingTime: "Roughly 3.5 to 4 hours by road",
      note: "Sources cite the road distance between 399 and 411 km depending on measurement method — the Riyadh–Dammam motorway (Highway 40) itself is commonly given as 409 km.",
    },
    distanceExplanation: [
      "Riyadh to Dammam runs along Highway 40, a controlled-access motorway connecting the capital to the Eastern Province. Reported distances cluster tightly around 400–411 km, a smaller spread than some of the Kingdom's longer routes, since this is a well-documented, heavily used corridor.",
      "As with any city-pair distance, the figure quoted is generally city-centre to city-centre; the exact distance from a specific starting address will vary somewhat.",
    ],
    travelTime: [
      "The non-stop drive takes roughly three and a half to four hours under normal traffic conditions. Most of the route crosses open desert terrain via the Ad-Dahna corridor, on a well-maintained multi-lane highway for its full length.",
      "There is also a passenger rail alternative on this corridor, which some travellers may not be aware of — see the transport options below.",
    ],
    transportOptions: [
      {
        mode: "SAR passenger train (East Line)",
        suitability: "Travellers happy to go station to station rather than door to door",
        duration: "About 4.5 hours on the regular service; an express service covers it in roughly 3 hours 40 minutes, run once daily in each direction",
        advantages: "Established, comfortable rail service operated by Saudi Arabia Railways (SAR) since 1985, calling at Dammam, Abqaiq, Hofuf, and Riyadh",
        limitations: "Station-to-station, not door-to-door, and the express service runs on a fixed daily schedule rather than throughout the day",
      },
      {
        mode: "Private car / taxi",
        suitability: "Business travellers on a schedule, and anyone wanting door-to-door pickup from an exact address",
        duration: "3.5–4 hours",
        advantages: "Door-to-door from your exact starting point, flexible departure time, no need to reach a station",
        limitations: "Subject to road traffic and desert-highway driving conditions",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers",
        duration: "Longer than a direct drive, fixed schedule",
        advantages: "Lower cost, part of the national SAPTCO network",
        limitations: "Fixed timetable, station-based rather than door-to-door",
      },
    ],
    routeSpecific: {
      heading: "Capital to Eastern Province: a well-served corridor",
      paragraphs: [
        "This is one of the few domestic Saudi routes with a genuine, long-established passenger rail alternative to driving — the SAR East Line has run passenger services between Riyadh and Dammam since 1985, calling at Hofuf and Abqaiq along the way, and remains a practical option for travellers who don't need door-to-door pickup.",
        "For business travellers connecting onward to Khobar, Dhahran, or the Bahrain Causeway beyond Dammam itself, none of those onward legs are served by the train, so a private car remains the more common choice once an onward destination beyond central Dammam is involved.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "SAR express train, about 3 hours 40 minutes, once daily" },
      { label: "Most flexible option", value: "Private car, door to door, 3.5–4 hours" },
      { label: "Key fact", value: "A passenger railway has connected these two cities since 1985" },
    ],
    faqs: [
      { question: "How many kilometres is Riyadh from Dammam?", answer: "Sources generally cite between 399 and 411 km, with the Highway 40 motorway itself commonly given as 409 km." },
      { question: "Is there a train between Riyadh and Dammam?", answer: "Yes — the SAR (Saudi Arabia Railways) East Line has connected the two cities with passenger service since 1985, calling at Hofuf and Abqaiq, with both a regular (~4.5-hour) and an express (~3h40m) service." },
      { question: "How long does the road journey take?", answer: "Roughly three and a half to four hours under normal traffic conditions." },
      { question: "What is the fastest way to travel this route?", answer: "The SAR express train, at around 3 hours 40 minutes, is marginally faster than driving, though it only runs once daily in each direction and is station-to-station rather than door-to-door." },
      { question: "Is a private car practical for this journey?", answer: "Yes, especially for business travellers with a specific schedule or anyone continuing beyond Dammam to Khobar, Dhahran, or the Bahrain Causeway, none of which the train serves." },
    ],
    sources: [
      { label: "Dammam–Riyadh railway (Wikipedia)", url: "https://en.wikipedia.org/wiki/Dammam%E2%80%93Riyadh_railway" },
      { label: "Riyadh to Dammam driving distance and route (explore-saudi.com)", url: "https://explore-saudi.com/en/riyadh-to-dammam-road-trip/" },
      { label: "Highway 40 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_40_(Saudi_Arabia)" },
    ],
    relatedLinks: [
      { label: "Riyadh to Dammam taxi and private transfer service", href: "/routes/riyadh-to-dammam" },
      { label: "Dammam to Riyadh distance (reverse direction)", href: "/distance/dammam-to-riyadh-distance" },
      { label: "Riyadh to Jeddah distance", href: "/distance/riyadh-to-jeddah-distance" },
    ],
  },

  {
    slug: "dammam-to-riyadh-distance",
    from: "Dammam",
    to: "Riyadh",
    routePath: "/routes/dammam-to-riyadh",
    metaTitle: "Dammam to Riyadh Distance: KM, Travel Time & Train Option",
    metaDescription: "How far is Riyadh from Dammam? Road distance, driving time, and the SAR passenger railway connecting the Eastern Province to the capital.",
    h1: "Dammam to Riyadh Distance: How Far Is It and How Do You Get There?",
    quickAnswer: {
      drivingDistance: "About 400–411 km",
      drivingTime: "Roughly 3.5 to 4 hours by road",
      note: "Same road distance as the Riyadh-to-Dammam direction — this leg is more often made as an arrival journey, from the airport or the Bahrain Causeway, than as a hotel-to-hotel trip.",
    },
    distanceExplanation: [
      "The distance from Dammam to Riyadh runs 400–411 km depending on the source, along Highway 40. Because this leg is frequently the second half of an international arrival — via King Fahd International Airport or the Bahrain Causeway — the practical starting point is often the airport or the border crossing rather than central Dammam itself, which can shift the real distance slightly.",
      "As on the outbound direction, the figures quoted are city-to-city; an airport or Causeway starting point will differ by a small amount from a central Dammam address.",
    ],
    travelTime: [
      "The drive takes roughly three and a half to four hours under normal conditions, crossing the same Ad-Dahna desert corridor as the outbound direction. Because this leg often follows an international flight or a border crossing, actual departure timing is usually built around an arrival time rather than a fixed schedule.",
      "The SAR passenger railway also operates in this direction, on the same schedule pattern as the Riyadh-to-Dammam service.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Travellers arriving at King Fahd International Airport or crossing from Bahrain via the Causeway",
        duration: "3.5–4 hours",
        advantages: "Meets you at the airport arrivals hall or the Causeway crossing point directly, with flight or crossing time tracked",
        limitations: "Subject to road traffic conditions",
      },
      {
        mode: "SAR passenger train (East Line)",
        suitability: "Travellers starting from central Dammam rather than the airport or Causeway",
        duration: "About 4.5 hours regular service, or roughly 3h40m on the once-daily express",
        advantages: "Established rail service, avoids road traffic",
        limitations: "Requires reaching Dammam railway station first, which adds a step for travellers arriving by air or via the Causeway rather than already being in central Dammam",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers starting from central Dammam",
        duration: "Longer than a direct drive, fixed schedule",
        advantages: "Lower cost",
        limitations: "Fixed timetable, less practical for airport or Causeway arrivals",
      },
    ],
    routeSpecific: {
      heading: "An arrival route: airport and Causeway connections",
      paragraphs: [
        "Unlike a typical point-to-point city trip, a significant share of Dammam-to-Riyadh travel starts at King Fahd International Airport or at the Saudi side of the Bahrain Causeway rather than in central Dammam — both are common entry points for travellers continuing straight on to the capital the same day.",
        "For onward flight connections from Riyadh's King Khalid International Airport, road transport allows the arrival timing to be planned around the actual flight or Causeway crossing, which a fixed train or bus schedule doesn't accommodate as easily.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "SAR express train, about 3 hours 40 minutes, once daily" },
      { label: "Best for airport/Causeway arrivals", value: "Private car, meeting you directly at the arrivals hall or crossing point" },
      { label: "Key fact", value: "Distance and drive time are the same as the Riyadh-to-Dammam direction, about 400–411 km" },
    ],
    faqs: [
      { question: "How far is Dammam from Riyadh?", answer: "Sources generally cite between 399 and 411 km by road, the same distance as the Riyadh-to-Dammam direction." },
      { question: "Can I travel to Riyadh directly from King Fahd International Airport?", answer: "Yes, a private car can meet you at the arrivals hall and drive directly to Riyadh without needing to go into central Dammam first." },
      { question: "Is there a train from Dammam to Riyadh?", answer: "Yes, the SAR East Line operates in this direction as well, though it requires reaching Dammam railway station rather than the airport." },
      { question: "How long does the road journey take?", answer: "Roughly three and a half to four hours under normal traffic conditions." },
      { question: "Can this journey start from the Bahrain Causeway instead of Dammam?", answer: "Yes, the Causeway crossing is a common starting point for this route, and a private car can collect you there directly." },
    ],
    sources: [
      { label: "Dammam–Riyadh railway (Wikipedia)", url: "https://en.wikipedia.org/wiki/Dammam%E2%80%93Riyadh_railway" },
      { label: "Riyadh to Dammam driving distance and route (explore-saudi.com)", url: "https://explore-saudi.com/en/riyadh-to-dammam-road-trip/" },
    ],
    relatedLinks: [
      { label: "Dammam to Riyadh taxi and private transfer service", href: "/routes/dammam-to-riyadh" },
      { label: "Riyadh to Dammam distance (outbound direction)", href: "/distance/riyadh-to-dammam-distance" },
      { label: "Riyadh to AlUla distance", href: "/distance/riyadh-to-alula-distance" },
    ],
  },

  {
    slug: "riyadh-to-jeddah-distance",
    from: "Riyadh",
    to: "Jeddah",
    routePath: "/routes/riyadh-to-jeddah",
    metaTitle: "Riyadh to Jeddah Distance: KM, Travel Time & Fly vs Drive",
    metaDescription: "How far is Jeddah from Riyadh? Road distance on Highway 40, realistic driving time, the roughly two-hour flight, and how to choose between them.",
    h1: "Riyadh to Jeddah Distance: How Far Is It, and Is It Practical to Drive?",
    quickAnswer: {
      drivingDistance: "Roughly 850–950 km (sources vary; commonly cited around 948 km)",
      drivingTime: "Around 9 hours by road; about 1 hour 50 minutes by direct flight",
      note: "This is one of the longest regularly-driven domestic routes in Saudi Arabia — road-distance sources vary more here than on shorter routes, generally in the 842–967 km range depending on the exact route measured.",
    },
    distanceExplanation: [
      "Riyadh to Jeddah is a genuinely cross-country journey, and reported road distances vary more widely here than on shorter routes — figures range from roughly 842 km to 967 km depending on the source and exact routing, with around 948 km being a commonly cited figure. Highway 40, a six-lane controlled-access motorway spanning 1,395 km end to end, connects the two cities for the western portion of its length.",
      "The flight distance (point to point, in the air) is considerably shorter at around 852 km, which is the more relevant figure if you're comparing to a direct flight rather than the road route.",
    ],
    travelTime: [
      "At an average highway speed, the theoretical drive time works out to roughly eight and a half hours; in practice, most sources and realistic planning treat this as a nine-hour-plus journey once stops are included, since it's one of the longest single drives in the country.",
      "A direct flight, by contrast, takes around one hour and fifty minutes, and the route is operated by four airlines — a very different time commitment from the road trip.",
    ],
    transportOptions: [
      {
        mode: "Direct flight",
        suitability: "Travellers prioritising time over the road-trip experience",
        duration: "About 1 hour 50 minutes",
        advantages: "By far the fastest option for a distance of this length, served by four airlines",
        limitations: "Not door-to-door; requires airport transfers and check-in time at both ends",
      },
      {
        mode: "Private car / taxi",
        suitability: "Families and groups with a full vehicle-load of luggage, or anyone continuing on to Makkah or Taif on arrival in the west",
        duration: "Around 9 hours, typically with rest stops",
        advantages: "Door-to-door, one vehicle for the whole group and its luggage, no repeated security/check-in process",
        limitations: "A genuinely long single day of driving, or a day split with an overnight stop",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers who don't need door-to-door service",
        duration: "Longer than a direct drive, fixed schedule",
        advantages: "Lower cost than flying or a private car",
        limitations: "A very long journey on a shared, fixed-schedule vehicle",
      },
    ],
    routeSpecific: {
      heading: "Realistic transport choices for an unusually long domestic route",
      paragraphs: [
        "At roughly 850–950 km depending on the exact route, this is one of the longest journeys anyone would reasonably make by road within Saudi Arabia rather than by air — most travellers weigh it explicitly against the roughly two-hour flight before deciding.",
        "The road route matters to travellers with a specific reason not to fly: a family travelling with more luggage than checked baggage allowances comfortably cover, a group that wants to travel together in one vehicle, or someone planning to continue directly on to Makkah or Taif once they reach the west, avoiding a second airport transfer.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "Direct flight, about 1 hour 50 minutes" },
      { label: "Best for groups/luggage", value: "Private car, door to door, roughly 9 hours" },
      { label: "Key fact", value: "This is one of the longest regularly-driven domestic routes in the Kingdom" },
    ],
    faqs: [
      { question: "How far is Jeddah from Riyadh?", answer: "Road-distance sources vary between about 842 and 967 km, with roughly 948 km commonly cited; the more direct flight distance is around 852 km." },
      { question: "How long does it take to travel from Riyadh to Jeddah?", answer: "Around nine hours by road including stops, or about one hour fifty minutes by direct flight." },
      { question: "Is it practical to drive from Riyadh to Jeddah?", answer: "It's done regularly, particularly by families with a full vehicle-load of luggage or groups wanting to travel together, but most travellers who don't have a specific reason to drive choose the roughly two-hour flight instead." },
      { question: "What is the fastest way to travel this route?", answer: "A direct flight, at under two hours, compared to roughly nine hours by road." },
      { question: "Is there a train between Riyadh and Jeddah?", answer: "No direct passenger rail line connects Riyadh and Jeddah; road and air are the two practical options." },
    ],
    sources: [
      { label: "Distance from Riyadh to Jeddah (distancecalculator.net)", url: "https://www.distancecalculator.net/from-riyadh-to-JEDDAH" },
      { label: "Highway 40 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_40_(Saudi_Arabia)" },
      { label: "Riyadh to Jeddah flight time (travelmath.com)", url: "https://www.travelmath.com/flying-time/from/Riyadh,+Saudi+Arabia/to/Jeddah,+Saudi+Arabia" },
      { label: "Riyadh (RUH) to Jeddah (JED) distance (easemytrip.com)", url: "https://www.easemytrip.com/flights/distance-riyadh-ruh-to-jeddah-jed/" },
    ],
    relatedLinks: [
      { label: "Riyadh to Jeddah taxi and private transfer service", href: "/routes/riyadh-to-jeddah" },
      { label: "Jeddah to Makkah distance", href: "/distance/jeddah-to-makkah-distance" },
      { label: "Riyadh to Dammam distance", href: "/distance/riyadh-to-dammam-distance" },
    ],
  },

  {
    slug: "riyadh-to-alula-distance",
    from: "Riyadh",
    to: "AlUla",
    routePath: "/routes/riyadh-to-alula",
    metaTitle: "Riyadh to AlUla Distance: KM, Travel Time & Flight Option",
    metaDescription: "How far is AlUla from Riyadh? Road distance, realistic driving time, and the roughly 1h45m direct flight — including how frequently it runs.",
    h1: "Riyadh to AlUla Distance: How Far Is It and What's the Best Way to Get There?",
    quickAnswer: {
      drivingDistance: "Roughly 1,000–1,114 km (sources vary; commonly cited around 1,060 km)",
      drivingTime: "About 10 to 12 hours by road; roughly 1 hour 45 minutes by direct flight",
      note: "Reported road distances vary more on this route than most, since it's one of the longest in the Kingdom and different sources measure slightly different paths.",
    },
    distanceExplanation: [
      "Riyadh to AlUla is one of the longest domestic distances in Saudi Arabia, and published road-distance figures vary accordingly — from around 1,000 km to 1,114 km depending on the source, with roughly 1,060 km being a frequently cited middle figure. The main roads used include King Fahd Road and King Abdulaziz Road.",
      "Given the length and variability of this route, travellers planning the drive should treat any single figure as approximate rather than exact.",
    ],
    travelTime: [
      "By road, the drive typically takes ten to twelve hours depending on traffic, stops, and the exact route taken — a full-day undertaking rather than something to attempt in a single uninterrupted push for most travellers.",
      "By air, a direct flight takes roughly one hour forty-five minutes. As of the most recent data available, Riyadh–AlUla is served by both Flynas and Saudia, with around 14 flights a week — a genuinely frequent domestic route, reflecting AlUla's growth as a heritage-tourism destination.",
    ],
    transportOptions: [
      {
        mode: "Direct flight",
        suitability: "The large majority of tourism travellers, given the drive length",
        duration: "About 1 hour 45 minutes",
        advantages: "By far the fastest option; roughly 14 flights a week on this route, operated by Flynas and Saudia",
        limitations: "Not door-to-door; ground transport is still needed from AlUla's airport to a specific resort or hotel",
      },
      {
        mode: "Private car / taxi",
        suitability: "Travellers who want the desert crossing as part of the trip, or are combining AlUla with stops in Hail or Madinah",
        duration: "10–12 hours",
        advantages: "Door-to-door from your exact address to your specific AlUla accommodation; flexible for multi-city itineraries",
        limitations: "A very long single drive; typically split across a full day with planned stops",
      },
    ],
    routeSpecific: {
      heading: "AlUla as a flight destination, and why the airport matters here",
      paragraphs: [
        "Unlike most of the routes on this site, AlUla itself has its own airport — Prince Abdul Majeed bin Abdulaziz International Airport (ULH) — and the roughly 1,000-km road distance from Riyadh is genuinely long enough that flying is the practical default for most heritage-tourism visitors rather than an alternative to consider.",
        "AlUla's resorts and heritage-site accommodation are spread across a large area, so regardless of whether you fly or drive, ground transport from the airport (or the end of the road journey) to your specific accommodation is a separate consideration worth planning for in advance.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "Direct flight, about 1 hour 45 minutes, ~14 flights/week" },
      { label: "Best for a multi-city road trip", value: "Private car, combining with stops in Hail or Madinah" },
      { label: "Key fact", value: "AlUla has its own airport (ULH), directly served from Riyadh" },
    ],
    faqs: [
      { question: "How far is AlUla from Riyadh?", answer: "Road-distance sources vary between about 1,000 and 1,114 km, with roughly 1,060 km commonly cited." },
      { question: "Is there a direct flight from Riyadh to AlUla?", answer: "Yes, Flynas and Saudia both operate direct flights, with around 14 flights a week as of the most recent data, taking about one hour forty-five minutes." },
      { question: "How long does the road journey take?", answer: "Roughly ten to twelve hours depending on traffic, stops, and the exact route." },
      { question: "Is it practical to drive to AlUla from Riyadh?", answer: "It's done, particularly by travellers combining the trip with stops in Hail or Madinah, but given the roughly 1,000-km distance, most visitors fly instead." },
      { question: "Does AlUla have its own airport?", answer: "Yes — Prince Abdul Majeed bin Abdulaziz International Airport (ULH) serves AlUla directly, with routes from Riyadh and Jeddah." },
    ],
    sources: [
      { label: "Distance between Riyadh and AlUla (distancebetween2.com)", url: "https://distancebetween2.com/riyadh/alula" },
      { label: "Getting to and around AlUla (Experience AlUla, official)", url: "https://www.experiencealula.com/en/plan-your-trip/getting-to-and-around-alula" },
      { label: "Flights from AlUla (ULH) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-al-ula-ulh" },
      { label: "Highway 65 (Saudi Arabia) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Highway_65_(Saudi_Arabia)" },
    ],
    relatedLinks: [
      { label: "Riyadh to AlUla taxi and private transfer service", href: "/routes/riyadh-to-alula" },
      { label: "Madinah to AlUla distance", href: "/distance/madinah-to-alula-distance" },
      { label: "Riyadh to Dammam distance", href: "/distance/riyadh-to-dammam-distance" },
    ],
  },

  {
    slug: "madinah-to-alula-distance",
    from: "Madinah",
    to: "AlUla",
    routePath: "/routes/madinah-to-alula",
    metaTitle: "Madinah to AlUla Distance: KM & Travel Time (Road, No Direct Flight)",
    metaDescription: "How far is AlUla from Madinah? Road distance and driving time — and why there's currently no direct flight between the two, based on available route data.",
    h1: "Madinah to AlUla Distance: How Far Is It and How Do You Get There?",
    quickAnswer: {
      drivingDistance: "Roughly 330–368 km (sources vary; around 330 km is most commonly cited)",
      drivingTime: "About 4 to 5 hours by road",
      note: "This is a much shorter distance than the Riyadh-to-AlUla route, and — based on currently available flight-route data — there is no direct flight between Madinah and AlUla, making the road the practical option.",
    },
    distanceExplanation: [
      "The driving distance between Madinah and AlUla is reported between roughly 330 km and 368 km depending on the source, with 330 km being the figure most consistently cited. This is a much shorter and more manageable distance than the roughly 1,000-km Riyadh-to-AlUla route.",
      "As with any road-distance figure, the exact number will vary slightly depending on the specific starting hotel in Madinah and the specific accommodation in AlUla.",
    ],
    travelTime: [
      "The drive takes approximately four to five hours through open desert terrain. Because this distance is manageable in a single day, it's commonly added on to an existing Madinah stay rather than requiring separate return travel.",
      "Based on currently available route data, there is no direct flight connecting Madinah and AlUla — travellers wanting to fly would need to route via Riyadh or Jeddah first, which is a meaningfully longer overall journey than driving directly.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "The practical option for almost all travellers on this specific route, given the lack of a direct flight",
        duration: "4–5 hours",
        advantages: "Door-to-door from a Madinah hotel to a specific AlUla resort or heritage-site accommodation, no connecting flights needed",
        limitations: "A genuine multi-hour drive, though shorter than most other AlUla approach routes",
      },
    ],
    routeSpecific: {
      heading: "Why this route is usually driven, not flown",
      paragraphs: [
        "Unlike the Riyadh-to-AlUla and Jeddah-to-AlUla connections, there is currently no direct flight route between Madinah and AlUla in available route data — AlUla's air links run to Riyadh and Jeddah specifically, not Madinah. A traveller wanting to fly this leg would need to route through one of those cities, adding a connection and generally more total travel time than simply driving the roughly 330 km directly.",
        "This makes the drive the default choice for pilgrims extending a Madinah visit with an AlUla heritage stop — a manageable distance that doesn't require the flight-versus-drive decision that the much longer Riyadh route does.",
      ],
    },
    infoBoxes: [
      { label: "Practical option", value: "Private car — no direct flight currently connects the two cities" },
      { label: "Typical drive time", value: "4 to 5 hours" },
      { label: "Key fact", value: "AlUla's direct flight routes serve Riyadh and Jeddah, not Madinah" },
    ],
    faqs: [
      { question: "How far is AlUla from Madinah?", answer: "Road-distance sources vary between about 330 and 368 km, with 330 km being the most commonly cited figure." },
      { question: "Is there a direct flight from Madinah to AlUla?", answer: "Not based on currently available route data — AlUla's direct flight connections serve Riyadh and Jeddah; a Madinah traveller wanting to fly would need to connect through one of those cities." },
      { question: "How long does the road journey take?", answer: "Approximately four to five hours through open desert terrain." },
      { question: "Is this a common route for pilgrims to add on?", answer: "Yes — the relatively short, single-day drive makes it a common extension for visitors already in Madinah for a pilgrimage stay." },
      { question: "Is a private car practical for this journey?", answer: "Yes, and given the lack of a direct flight, it's the standard way to make this specific journey." },
    ],
    sources: [
      { label: "Distance from Medina to Al Ula (costtotravel.com)", url: "https://www.costtotravel.com/how-far/from-medina-saudi-arabia-to-al-ula-saudi-arabia" },
      { label: "Distance from Medina to AlUla (dashdistance.com)", url: "https://dashdistance.com/medina-sa/alula-sa" },
      { label: "Getting to and around AlUla (Experience AlUla, official)", url: "https://www.experiencealula.com/en/plan-your-trip/getting-to-and-around-alula" },
      { label: "Flights from AlUla (ULH) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-al-ula-ulh" },
    ],
    relatedLinks: [
      { label: "Madinah to AlUla taxi and private transfer service", href: "/routes/madinah-to-alula" },
      { label: "Riyadh to AlUla distance", href: "/distance/riyadh-to-alula-distance" },
      { label: "Madinah to Makkah distance", href: "/distance/madinah-to-makkah-distance" },
    ],
  },

  {
    slug: "jeddah-to-taif-distance",
    from: "Jeddah",
    to: "Taif",
    routePath: "/routes/jeddah-to-taif",
    metaTitle: "Jeddah to Taif Distance: KM, Travel Time & the Al-Hada Mountain Road",
    metaDescription: "How far is Taif from Jeddah? Road distance via the Al-Hada mountain road, driving time, and the roughly 50-minute flight alternative.",
    h1: "Jeddah to Taif Distance: How Far Is It and What's the Al-Hada Road Like?",
    quickAnswer: {
      drivingDistance: "Roughly 170–200 km",
      drivingTime: "About 2 hours by road; around 50 minutes by direct flight",
      note: "The road distance covers a significant elevation gain up the Al-Hada mountain road, not just a flat highway distance — see below.",
    },
    distanceExplanation: [
      "The driving distance from Jeddah to Taif is reported between roughly 171 km and 200 km depending on the source and the specific route measured, with figures around 170–171 km most commonly cited. The road climbs from sea level at Jeddah up into Taif's highland elevation via Al-Hada Road, the well-known mountain pass connecting the two.",
      "Because this route involves a substantial climb rather than flat terrain, the distance figure alone doesn't fully describe the journey — the road itself, engineered with guardrails and frequent turnouts for the ascent, is as relevant to trip planning as the raw kilometre count.",
    ],
    travelTime: [
      "The drive takes approximately two hours, most of it spent on the Al-Hada Road's climb rather than covering flat distance quickly. This road is specifically engineered for the mountain ascent, with a sustained sequence of curves.",
      "A direct flight between Jeddah and Taif is also available and takes around 50 minutes, with roughly 27 flights a week operated primarily by Saudia — a genuinely active domestic route given the short distance.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Most travellers, particularly families or anyone wanting to add stops along the mountain road",
        duration: "About 2 hours",
        advantages: "Door-to-door, and the ascent itself — with the changing scenery and temperature drop — is often part of the appeal rather than something to avoid",
        limitations: "The winding mountain road can cause motion sickness for some travellers, and pace matters more here than on a flat highway",
      },
      {
        mode: "Direct flight",
        suitability: "Travellers prioritising speed over the scenic drive",
        duration: "About 50 minutes",
        advantages: "Fast, and a genuinely frequent route at roughly 27 flights a week",
        limitations: "Skips the Al-Hada road experience entirely, and still requires ground transport at both ends",
      },
    ],
    routeSpecific: {
      heading: "The Al-Hada mountain road and elevation change",
      paragraphs: [
        "Taif sits at a considerably higher elevation than coastal Jeddah, and the Al-Hada Road is the main route connecting them — a mountain pass specifically engineered to handle the steep ascent safely, with guardrails and turnouts built in along the way. This elevation change is also why Taif is noticeably cooler than Jeddah for much of the year, a genuine climate difference rather than just a change of scenery.",
        "Because the road involves sustained curves during the climb, it's worth planning for if you or anyone travelling with you is prone to motion sickness — a private car allows a stop partway up in a way a fixed-schedule option wouldn't.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "Direct flight, about 50 minutes, ~27 flights/week" },
      { label: "Best for the scenic mountain drive", value: "Private car via Al-Hada Road" },
      { label: "Key fact", value: "The route involves a significant elevation climb, not just flat distance" },
    ],
    faqs: [
      { question: "How far is Taif from Jeddah?", answer: "Road-distance sources vary between roughly 171 and 200 km, with about 170–171 km most commonly cited." },
      { question: "What road connects Jeddah and Taif?", answer: "The Al-Hada Road, a mountain pass specifically engineered for the climb up to Taif's highland elevation, with guardrails and turnouts along the ascent." },
      { question: "Is there a flight between Jeddah and Taif?", answer: "Yes, a direct flight takes about 50 minutes, with roughly 27 flights a week, primarily operated by Saudia." },
      { question: "How long does the road journey take?", answer: "Approximately two hours, most of it spent climbing the Al-Hada mountain road." },
      { question: "Is the mountain road difficult for those prone to motion sickness?", answer: "It involves a sustained series of curves during the climb, so travellers prone to motion sickness may want to plan for a stop partway up." },
    ],
    sources: [
      { label: "Distance Jeddah to Taif (distance.to)", url: "https://www.distance.to/Jeddah/Taif" },
      { label: "Jeddah to Taif road trip guide (finalrentals-ksa.com)", url: "https://www.finalrentals-ksa.com/blog/single/jeddah-to-taif-road-trip-guide-for-mountain-views-and-cool-air" },
      { label: "Direct flights from Taif to Jeddah (flightsfrom.com)", url: "https://www.flightsfrom.com/TIF-JED" },
    ],
    relatedLinks: [
      { label: "Jeddah to Taif taxi and private transfer service", href: "/routes/jeddah-to-taif" },
      { label: "Riyadh to Jeddah distance", href: "/distance/riyadh-to-jeddah-distance" },
      { label: "Jeddah to Makkah distance", href: "/distance/jeddah-to-makkah-distance" },
    ],
  },

  {
    slug: "khobar-to-bahrain-distance",
    from: "Khobar",
    to: "Bahrain",
    routePath: "/routes/khobar-to-bahrain",
    metaTitle: "Khobar to Bahrain Distance: KM, Causeway Crossing Time & Border Info",
    metaDescription: "How far is Bahrain from Khobar? Distance to the King Fahd Causeway, the 25 km bridge crossing itself, realistic border-crossing time, and how far into Bahrain you're actually going.",
    h1: "Khobar to Bahrain Distance: How Far Is the Causeway, and How Long Does the Crossing Take?",
    quickAnswer: {
      drivingDistance: "About 45–55 km to the causeway entrance, plus the 25 km King Fahd Causeway bridge itself",
      drivingTime: "Roughly 30–40 minutes to the causeway, then 1 to 2 hours total once border processing is included",
      note: "This route has two distances that matter: how far it is from Khobar to the Saudi causeway entrance, and how far the causeway bridge itself runs. Total trip time depends far more on border processing than on the short driving distance.",
    },
    distanceExplanation: [
      "Khobar sits closer to the King Fahd Causeway than Dammam does, since the causeway's Saudi terminus is on the coast near Khobar/Al Khobar. The drive from central Khobar to the Saudi border facility is generally in the 45–55 km range depending on the exact starting point, and from there the causeway bridge itself runs approximately 25 km across the Gulf of Bahrain to the Bahraini side.",
      "Once across, the distance to a specific Bahrain destination adds further kilometres — central Manama is roughly 20–25 km beyond the Bahraini border facility, so the full Khobar-to-Manama distance is meaningfully longer than the causeway crossing alone.",
    ],
    travelTime: [
      "The drive from Khobar to the Saudi side of the causeway itself takes roughly 30 to 40 minutes under normal traffic. The bridge crossing adds more distance than time in isolation, but the border facility at the midpoint — where both Saudi exit and Bahraini entry formalities are handled — is what actually determines how long the full crossing takes.",
      "Total journey time, Khobar to a Bahrain destination, commonly runs 1 to 2 hours including border processing; this can extend well beyond that on weekends and public holidays, when the causeway is known for heavy passenger-vehicle volume in both directions.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Most travellers, especially those wanting door-to-door service without transferring vehicles at the border",
        duration: "1–2 hours total, more at peak weekend times",
        advantages: "No vehicle change at the border, flexible departure timing, direct to a specific Manama hotel or destination",
        limitations: "Subject to causeway queue length, which varies significantly by day and time",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers without a private vehicle",
        duration: "Scheduled service; check SAPTCO's current timetable for departure times and fares",
        advantages: "A recognised cross-border coach service operates on this corridor, connecting Saudi Eastern Province cities to Manama",
        limitations: "Fixed departure times, and still subject to the same border-processing queue as private vehicles",
      },
    ],
    routeSpecific: {
      heading: "The causeway itself is a large part of this journey",
      paragraphs: [
        "Unlike a typical point-to-point drive, a meaningful share of the Khobar-to-Bahrain trip is the causeway bridge and border facility rather than open road — the roughly 25 km King Fahd Causeway includes an artificial island partway across where Saudi exit and Bahraini entry procedures both take place, and it's this step, not the driving distance on either side, that most affects total trip time.",
        "Where exactly you're headed in Bahrain changes the real distance meaningfully: central Manama is a further 20–25 km past the border facility, while some parts of the Bahraini side nearer the causeway landing are considerably closer — so 'distance to Bahrain' and 'distance to your specific hotel in Bahrain' are genuinely different numbers.",
      ],
    },
    infoBoxes: [
      { label: "Causeway bridge length", value: "Approximately 25 km, Saudi coast to Bahraini coast" },
      { label: "Khobar to causeway entrance", value: "Roughly 45–55 km" },
      { label: "Biggest time variable", value: "Border processing time at the midpoint facility, not the driving distance" },
    ],
    faqs: [
      { question: "How far is Bahrain from Khobar?", answer: "Roughly 45–55 km from central Khobar to the Saudi side of the King Fahd Causeway, plus the approximately 25 km bridge crossing itself — total distance to a specific Bahrain destination depends on where you're headed once across." },
      { question: "How long does the King Fahd Causeway crossing take?", answer: "The drive to the causeway is about 30–40 minutes; total trip time including border processing commonly runs 1 to 2 hours, and longer on weekends when passenger-vehicle volume is heaviest." },
      { question: "Is Khobar closer to the causeway than Dammam?", answer: "Yes — Khobar sits nearer the Saudi terminus of the causeway than Dammam does, so the driving portion from Khobar is somewhat shorter." },
      { question: "Does the distance change depending on where in Bahrain I'm going?", answer: "Yes — central Manama is roughly 20–25 km past the Bahraini border facility, so a trip to Manama is meaningfully longer than simply reaching the Bahraini side of the causeway." },
      { question: "Is there a bus across the causeway?", answer: "Yes, SAPTCO operates a scheduled intercity coach service connecting Saudi Eastern Province cities to Manama; check SAPTCO's current timetable for departure times and fares." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "King Fahd Causeway Authority — official crossing information", url: "https://www.kfca.com.sa/" },
      { label: "Distance from Khobar to Manama (distance.to)", url: "https://www.distance.to/Al-Khobar/Manama" },
    ],
    relatedLinks: [
      { label: "Khobar to Bahrain taxi and Causeway transfer service", href: "/routes/khobar-to-bahrain" },
      { label: "Dammam to Bahrain distance", href: "/distance/dammam-to-bahrain-distance" },
      { label: "Dammam Airport to Khobar distance", href: "/distance/dammam-airport-to-khobar-distance" },
    ],
  },

  {
    slug: "dammam-to-bahrain-distance",
    from: "Dammam",
    to: "Bahrain",
    routePath: "/routes/dammam-to-bahrain",
    metaTitle: "Dammam to Bahrain Distance: KM, Causeway Crossing Time & Flight Option",
    metaDescription: "How far is Bahrain from Dammam? Distance to the King Fahd Causeway, realistic crossing time, and the roughly 45-minute direct flight alternative between Dammam and Manama.",
    h1: "Dammam to Bahrain Distance: How Far Is It, and Is Flying an Option?",
    quickAnswer: {
      drivingDistance: "About 60–70 km to the causeway entrance, plus the 25 km King Fahd Causeway bridge itself",
      drivingTime: "Roughly 45–60 minutes to the causeway, then 1.5 to 2.5 hours total once border processing is included; or about 45 minutes by direct flight",
      note: "Dammam is a little further from the causeway than Khobar, but — unlike Khobar — Dammam has its own international airport, making a direct flight a genuine alternative to the road-and-border crossing.",
    },
    distanceExplanation: [
      "The drive from central Dammam to the Saudi side of the King Fahd Causeway runs roughly 60–70 km, somewhat longer than the equivalent trip from Khobar, since Dammam sits further back from the coastal causeway terminus. From there, the causeway bridge itself covers approximately 25 km to reach the Bahraini side.",
      "Because Dammam is served by King Fahd International Airport, this route has an option Khobar's causeway page doesn't: a short direct flight to Bahrain International Airport, covering roughly 85 km of flight distance, entirely bypassing the causeway and its border queue.",
    ],
    travelTime: [
      "By road, allow 45 to 60 minutes to reach the causeway from Dammam, then a further stretch for the crossing and border processing — total trip time to a Bahrain destination commonly runs 1.5 to 2.5 hours, and longer at weekends when the causeway sees its heaviest volume.",
      "By air, the Dammam–Bahrain route is a well-served short-haul connection: roughly 19 flights a week across 6 airlines, with a flight time of around 45 minutes, and Gulf Air the most frequently used carrier on the route.",
    ],
    transportOptions: [
      {
        mode: "Direct flight (DMM–BAH)",
        suitability: "Travellers prioritising speed and wanting to avoid the causeway border queue entirely",
        duration: "About 45 minutes in the air",
        advantages: "Bypasses road traffic and the causeway crossing entirely; a genuinely frequent route with roughly 19 flights a week across 6 airlines",
        limitations: "Airport check-in and security add time beyond the 45-minute flight; not door-to-door",
      },
      {
        mode: "Private car / taxi",
        suitability: "Travellers who want door-to-door service, are bringing more luggage than carry-on allowances, or prefer not to fly a short domestic-style hop",
        duration: "1.5–2.5 hours total, more at weekends",
        advantages: "No vehicle change at the border, direct to a specific Manama hotel or destination",
        limitations: "Subject to causeway queue length, which is the main source of unpredictability on this route",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers without a private vehicle",
        duration: "Scheduled service; check SAPTCO's current timetable for departure times and fares",
        advantages: "A recognised coach service connects Dammam, Khobar, and Manama on this corridor",
        limitations: "Fixed departure times, and still subject to the causeway border queue",
      },
    ],
    routeSpecific: {
      heading: "The one route on this corridor where flying is a genuine option",
      paragraphs: [
        "Because Dammam has its own international airport, this is the one Bahrain-Causeway-corridor route where a short flight is a realistic alternative to the causeway drive — Khobar and other Eastern Province points don't have this option locally, since they route through Dammam's airport if flying at all. Gulf Air is the most-used carrier on the roughly 45-minute Dammam-to-Bahrain hop.",
        "For travellers driving instead, the distance from Dammam to the causeway is somewhat longer than from Khobar, since Dammam sits further from the coast — worth factoring in if you're comparing the two Eastern Province starting points for a causeway crossing.",
      ],
    },
    infoBoxes: [
      { label: "Causeway bridge length", value: "Approximately 25 km, Saudi coast to Bahraini coast" },
      { label: "Direct flight option", value: "About 45 minutes, ~19 flights/week across 6 airlines" },
      { label: "Key fact", value: "Dammam is the only nearby Eastern Province city with its own airport served directly to Bahrain" },
    ],
    faqs: [
      { question: "How far is Bahrain from Dammam?", answer: "Roughly 60–70 km from central Dammam to the Saudi side of the King Fahd Causeway, plus the approximately 25 km bridge crossing; by air, the flight distance is around 85 km." },
      { question: "Is there a direct flight from Dammam to Bahrain?", answer: "Yes — roughly 19 flights a week operate between Dammam and Bahrain International Airport across 6 airlines, with Gulf Air the most frequently used carrier and a flight time of about 45 minutes." },
      { question: "How long does the causeway crossing take from Dammam?", answer: "The drive to the causeway takes about 45–60 minutes; total trip time including border processing commonly runs 1.5 to 2.5 hours, longer at weekends." },
      { question: "Is Dammam further from the causeway than Khobar?", answer: "Yes — Dammam sits further back from the coastal causeway terminus than Khobar, so the driving portion is somewhat longer." },
      { question: "Should I drive or fly from Dammam to Bahrain?", answer: "It depends on your priorities: flying avoids the causeway border queue and takes about 45 minutes in the air, while driving offers door-to-door service without a vehicle change at the border." },
    ],
    sources: [
      { label: "King Fahd Causeway (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_Causeway" },
      { label: "Flights from Dammam (DMM) to Bahrain (BAH) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-dammam-dmm-to-bahrain-bah" },
      { label: "Distance from Dammam to Manama (distance.to)", url: "https://www.distance.to/Dammam/Manama" },
    ],
    relatedLinks: [
      { label: "Dammam to Bahrain taxi and Causeway transfer service", href: "/routes/dammam-to-bahrain" },
      { label: "Khobar to Bahrain distance", href: "/distance/khobar-to-bahrain-distance" },
      { label: "Dammam Airport to Khobar distance", href: "/distance/dammam-airport-to-khobar-distance" },
    ],
  },

  {
    slug: "riyadh-to-qatar-border-distance",
    from: "Riyadh",
    to: "the Qatar Border",
    routePath: "/routes/riyadh-to-qatar-border",
    metaTitle: "Riyadh to Qatar Border Distance: KM to Salwa/Abu Samra & Travel Time",
    metaDescription: "How far is the Qatar border from Riyadh? Road distance to the Salwa/Abu Samra crossing via Al Hofuf, realistic driving time, and how that differs from the distance to Doha.",
    h1: "Riyadh to Qatar Border Distance: How Far Is the Salwa Crossing, and How Is It Different From the Distance to Doha?",
    quickAnswer: {
      drivingDistance: "Roughly 460–500 km to the Salwa/Abu Samra border crossing via Al Hofuf",
      drivingTime: "About 5 to 6 hours to the border itself, before any border-crossing time",
      straightLineDistance: "Total Riyadh-to-Doha air distance is around 578 km, for reference — a different figure from the border-only driving distance",
      note: "The distance to the Saudi-Qatar border crossing point and the distance to Doha are two different figures — this page covers the drive to the border itself, which is shorter than a full Riyadh-to-Doha trip.",
    },
    distanceExplanation: [
      "The drive from Riyadh to the Salwa/Abu Samra border crossing — the sole land crossing between Saudi Arabia and Qatar — runs via the Riyadh–Al Kharj–Al Hofuf–Salwa road, with sources placing the distance in the roughly 460–500 km range depending on the exact routing and measurement point used.",
      "This is distinct from the distance to Doha itself: the total Riyadh-to-Doha air distance is around 578 km, and the road distance to Doha (border crossing plus the further drive on the Qatari side) is longer again than the distance to the border alone. Anyone planning a trip to Doha specifically, rather than just to the crossing point, should budget for meaningfully more distance and time beyond what's listed here.",
    ],
    travelTime: [
      "The drive from Riyadh to the Salwa/Abu Samra crossing takes roughly five to six hours under normal driving conditions, largely on open desert highway via Al Hofuf.",
      "This figure covers driving time only — it does not include time spent at the border crossing itself, which varies by traffic volume, vehicle checks, and processing at the time of travel, and which can add a substantial amount to total journey time. Travellers continuing on to Doha should add the further Qatari-side driving distance and time on top of both figures.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Almost all travellers making this crossing, given the lack of practical rail or short-haul flight alternatives for a land-border trip",
        duration: "5–6 hours driving to the border, plus border processing and any onward driving to Doha",
        advantages: "Door-to-door from Riyadh to the border crossing (or onward into Qatar), flexible timing around border conditions",
        limitations: "A long single drive, and total time is significantly affected by border-crossing conditions on the day of travel",
      },
    ],
    routeSpecific: {
      heading: "Border distance vs. Doha distance: two different numbers",
      paragraphs: [
        "It's worth being precise about what 'Riyadh to Qatar' means as a distance question: the drive to the Salwa/Abu Samra crossing point itself is roughly 460–500 km, but that is not the same as the distance to Doha, which sits further into Qatar beyond the border. A traveller heading specifically to Doha should treat the border-crossing distance as a waypoint, not the destination.",
        "Because this is Saudi Arabia and Qatar's only land border crossing, it carries all road traffic between the two countries — passenger vehicles, commercial freight, and everything in between — which is part of why border-processing time is the least predictable part of this route, more so than the driving distance itself.",
      ],
    },
    infoBoxes: [
      { label: "Border crossing", value: "Salwa (Saudi side) / Abu Samra (Qatari side) — the only land crossing between the two countries" },
      { label: "Riyadh to border", value: "Roughly 460–500 km via Al Hofuf" },
      { label: "Riyadh to Doha (air distance, for reference)", value: "Around 578 km" },
    ],
    faqs: [
      { question: "How far is the Qatar border from Riyadh?", answer: "Roughly 460–500 km via the Riyadh–Al Hofuf–Salwa road to the Salwa/Abu Samra crossing, according to independently cross-checked route sources." },
      { question: "Is the distance to the Qatar border the same as the distance to Doha?", answer: "No — the border crossing is a waypoint, not the destination. The total Riyadh-to-Doha air distance is around 578 km, and travellers continuing to Doha need to add the further driving distance on the Qatari side of the border." },
      { question: "How long does the drive to the border take?", answer: "Roughly five to six hours of driving under normal conditions, not counting time spent at the border crossing itself." },
      { question: "Is this the only land crossing between Saudi Arabia and Qatar?", answer: "Yes — Salwa (on the Saudi side) and Abu Samra (on the Qatari side) form the sole land border crossing between the two countries." },
      { question: "What affects total journey time the most?", answer: "Border-crossing processing time, which varies by traffic volume and vehicle checks on the day of travel, tends to affect total trip time more than the driving distance itself." },
    ],
    sources: [
      { label: "Salwa/Abu Samra border crossing overview (logcluster.org logistics assessment)", url: "https://dlca.logcluster.org/saudi-arabia-qatar-border-crossing-salwa" },
      { label: "Riyadh to Doha distance and route discussion (Tripadvisor travel forum)", url: "https://www.tripadvisor.com/ShowTopic-g293947-i379-k11294857-Driving_from_Riyadh_to_Doha-Doha.html" },
      { label: "Riyadh to Doha air distance (saakin.qa)", url: "https://saakin.qa/en/blog/distance-from-riyadh-to-doha" },
    ],
    relatedLinks: [
      { label: "Riyadh to Qatar Border taxi and transfer service", href: "/routes/riyadh-to-qatar-border" },
      { label: "Riyadh to Dammam distance", href: "/distance/riyadh-to-dammam-distance" },
      { label: "Riyadh to Jeddah distance", href: "/distance/riyadh-to-jeddah-distance" },
    ],
  },

  {
    slug: "dammam-airport-to-khobar-distance",
    from: "Dammam Airport",
    to: "Khobar",
    routePath: "/routes/dammam-airport-to-khobar",
    metaTitle: "Dammam Airport to Khobar Distance: KM & Realistic Transfer Time",
    metaDescription: "How far is King Fahd International Airport from Khobar? Road distance, realistic driving time, and why the exact figure depends on which part of Khobar you're headed to.",
    h1: "Dammam Airport to Khobar Distance: How Far Is the Transfer, and How Long Does It Take?",
    quickAnswer: {
      drivingDistance: "Roughly 45–56 km, depending on the exact area of Khobar",
      drivingTime: "About 35 to 45 minutes under normal traffic",
      straightLineDistance: "Around 45 km as the crow flies",
      note: "King Fahd International Airport (DMM) sits well outside both Dammam and Khobar, in a large dedicated airport zone — so this transfer is longer than a typical in-city airport hop, and the exact distance depends heavily on which part of Khobar you're travelling to.",
    },
    distanceExplanation: [
      "King Fahd International Airport is not adjacent to Khobar — it's built on a large dedicated site well north of both Dammam and Khobar, and different route-measurement sources place the driving distance to Khobar anywhere from roughly 45 km to 56 km, depending on the specific part of Khobar used as the endpoint (central Khobar, the Corniche area, or the southern edge of the city closer to Dammam and the causeway all give different figures).",
      "This wider range, compared to a typical airport-to-city-centre distance, reflects both the airport's genuinely large footprint — its terminal buildings sit a significant distance from the airport boundary itself — and Khobar's own size as a destination, since 'Khobar' covers a substantial area rather than a single point.",
    ],
    travelTime: [
      "Under normal traffic, the drive from the airport to Khobar takes roughly 35 to 45 minutes, largely via Highway 65/King Fahd Road connecting the airport zone to the Eastern Province's coastal cities.",
      "Travel time can extend during peak commuting hours on weekdays, when the highways connecting the airport to Dammam and Khobar carry heavier traffic, and airport-adjacent congestion at flight-heavy periods can add to the start of the journey before reaching open highway.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Almost all arriving travellers, especially those with luggage or connecting directly to a hotel or business meeting",
        duration: "35–45 minutes to central Khobar",
        advantages: "Direct from the arrivals hall to a specific Khobar address, no transfers, flight time can be tracked for pickup timing",
        limitations: "Subject to road traffic, particularly during weekday peak commuting hours",
      },
      {
        mode: "SAPTCO airport bus / intercity connections",
        suitability: "Budget travellers without heavy luggage",
        duration: "Longer than a direct transfer, on a scheduled timetable",
        advantages: "Lower cost, connects into SAPTCO's wider Eastern Province network",
        limitations: "Fixed schedule, not door-to-door to a specific Khobar address",
      },
    ],
    routeSpecific: {
      heading: "Why 'distance to Khobar' isn't one fixed number",
      paragraphs: [
        "Because King Fahd International Airport serves the whole Dammam-Khobar-Dhahran metropolitan area rather than sitting inside any one of the three cities, the real transfer distance depends heavily on your specific destination within Khobar — a hotel near the Corniche on Khobar's western edge is a noticeably different distance from the airport than an address on Khobar's southern side, nearer Dhahran and the causeway.",
        "This also means that if your onward plans involve continuing past Khobar — to the King Fahd Causeway toward Bahrain, for instance — it's worth thinking of the airport transfer as the first leg of a longer trip rather than a fixed, standalone distance, since the total distance from touchdown to a Bahrain-bound border crossing is meaningfully more than the airport-to-Khobar figure alone.",
      ],
    },
    infoBoxes: [
      { label: "Typical driving distance", value: "45–56 km depending on the destination area within Khobar" },
      { label: "Typical driving time", value: "35–45 minutes under normal traffic" },
      { label: "Key fact", value: "King Fahd International Airport serves the wider Dammam-Khobar-Dhahran area, not just one city" },
    ],
    faqs: [
      { question: "How far is Dammam Airport from Khobar?", answer: "Sources vary between roughly 45 and 56 km, depending on the exact area of Khobar used as the destination — central Khobar and the Corniche area give somewhat different figures than Khobar's southern edge." },
      { question: "How long does the transfer from the airport to Khobar take?", answer: "Roughly 35 to 45 minutes under normal traffic conditions, and longer during weekday peak commuting hours." },
      { question: "Why does the distance vary so much for this route?", answer: "King Fahd International Airport is built on a large dedicated site outside all three Eastern Province cities it serves, and 'Khobar' itself covers a substantial area, so the exact distance depends on both which part of the airport and which part of Khobar are used as endpoints." },
      { question: "Is a private car the best option for this transfer?", answer: "Yes — it's a direct, door-to-door option from the arrivals hall to a specific Khobar address, without the fixed schedule of a bus service." },
      { question: "Does this transfer connect onward to the King Fahd Causeway?", answer: "It can — the airport-to-Khobar leg is often the first part of a longer trip toward the causeway and Bahrain, which adds further distance beyond this figure." },
    ],
    sources: [
      { label: "Distance from King Fahd International Airport to Khobar (travelmath.com)", url: "https://www.travelmath.com/drive-distance/from/Dammam+Airport,+Saudi+Arabia/to/Al+Khobar,+Saudi+Arabia" },
      { label: "King Fahd International Airport (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Fahd_International_Airport" },
    ],
    relatedLinks: [
      { label: "Dammam Airport to Khobar taxi and transfer service", href: "/routes/dammam-airport-to-khobar" },
      { label: "Khobar to Bahrain distance", href: "/distance/khobar-to-bahrain-distance" },
      { label: "Dammam to Bahrain distance", href: "/distance/dammam-to-bahrain-distance" },
    ],
  },

  {
    slug: "makkah-to-jeddah-distance",
    from: "Makkah",
    to: "Jeddah",
    routePath: "/routes/makkah-to-jeddah",
    metaTitle: "Makkah to Jeddah Distance: KM, Travel Time & Airport vs City Center",
    metaDescription: "How far is Jeddah from Makkah? Road distance, driving time, the Haramain train, and why the distance depends heavily on whether you're headed to Jeddah's airport or city centre.",
    h1: "Makkah to Jeddah Distance: How Far Is It, and Does Your Jeddah Destination Change the Answer?",
    quickAnswer: {
      drivingDistance: "Roughly 85–95 km by road",
      drivingTime: "Typically 60–90 minutes",
      straightLineDistance: "About 68 km as the crow flies",
      note: "This leg is most often travelled as a departure journey — leaving Makkah after a pilgrimage stay — and the real distance depends heavily on whether you're headed to King Abdulaziz International Airport or into central Jeddah.",
    },
    distanceExplanation: [
      "Leaving Makkah for Jeddah covers the same physical road as the Jeddah-to-Makkah direction — generally 82 to 95 km depending on the exact start and end points — but which end point matters more on this leg, since a large share of travellers making this specific journey are heading to a flight rather than to a Jeddah hotel.",
      "King Abdulaziz International Airport, on Jeddah's north side, is around 85 km from central Makkah and is closer than most points in central or southern Jeddah — so a traveller flying out is typically looking at the shorter end of the range, while a traveller heading into the city for a Jeddah stay should expect the longer end.",
    ],
    travelTime: [
      "Under normal conditions, the drive takes roughly 60 to 90 minutes on Highway 40. Because this is frequently an end-of-trip journey timed against a flight departure, travellers should build in extra buffer time beyond the base driving estimate, particularly during Hajj and Ramadan when both the highway and Makkah's local roads carry significantly higher volume.",
      "Realistic planning during peak pilgrimage periods should assume 90 to 120 minutes rather than the off-peak 60–90 minute figure, especially for a flight-timed departure where arriving late isn't an option.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Travellers timing their departure against a specific flight, or families and groups with luggage",
        duration: "60–90 minutes (longer in peak season)",
        advantages: "Direct to the airport terminal or a specific Jeddah hotel, flight time can be tracked for pickup timing, no transfers",
        limitations: "Subject to road traffic, which matters more here given how often this leg is tied to a flight departure",
      },
      {
        mode: "Haramain High-Speed Railway",
        suitability: "Travellers comfortable managing their own luggage from the Makkah station through to the airport or city",
        duration: "Part of the wider Jeddah–Makkah–Madinah line, running at up to 300 km/h",
        advantages: "Fast, fixed schedule, avoids road traffic — useful for a predictable flight-timed departure",
        limitations: "The Makkah station sits in Al Rusaifah, about 3–4 km from the Haram, so reaching it from a Haram-area hotel requires a short local transfer first",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget-conscious travellers without a flight to catch",
        duration: "Longer than a direct drive, subject to the bus schedule",
        advantages: "Lower cost, part of a nationwide network",
        limitations: "Fixed departure times make it less suitable for a flight-timed departure",
      },
    ],
    routeSpecific: {
      heading: "Leaving Makkah: airport departure vs. a Jeddah city stay",
      paragraphs: [
        "Because Makkah has no airport of its own, every pilgrim or visitor flying onward has to make this exact leg — and the practical distance for that traveller is specifically to King Abdulaziz International Airport, around 85 km away, rather than to Jeddah as a whole. For travellers instead continuing to a few days in Jeddah before flying home, the relevant distance is to their specific hotel, which can run closer to 95 km depending on location.",
        "This distinction matters for timing a departure: an airport-bound traveller should build in buffer time ahead of check-in and security, while a city-bound traveller has more flexibility and can treat the same 60–90 minute range as a rough guide rather than a hard deadline.",
      ],
    },
    infoBoxes: [
      { label: "To Jeddah Airport (JED)", value: "Around 85 km from central Makkah — the shorter end of the range" },
      { label: "To central Jeddah", value: "Can run to 95 km or more, depending on the exact hotel location" },
      { label: "Key fact", value: "Makkah has no airport — every onward flight departure starts with this exact leg" },
    ],
    faqs: [
      { question: "How far is Jeddah Airport from Makkah?", answer: "About 85 km by road, on the shorter end of the Makkah-to-Jeddah distance range, since the airport sits on Jeddah's north side closer to Makkah than central Jeddah does." },
      { question: "How many kilometres is Makkah from Jeddah?", answer: "Road distance is generally cited between 82 and 95 km depending on the exact start and end points; the straight-line distance is about 68 km." },
      { question: "Should I build in extra time if I'm catching a flight from Makkah?", answer: "Yes — beyond the base 60–90 minute driving estimate, build in buffer time for check-in and security, and expect longer journey times during Hajj and Ramadan specifically." },
      { question: "Is there a train from Makkah to Jeddah?", answer: "Yes, the Haramain High-Speed Railway connects Makkah's Al Rusaifah station to Jeddah, including a station near the airport, though reaching the Makkah station from a Haram-area hotel needs a short local transfer first." },
      { question: "Does the distance depend on whether I'm going to the airport or the city?", answer: "Yes — the airport is closer to Makkah than central or southern Jeddah is, so your specific destination changes the real distance meaningfully." },
    ],
    sources: [
      { label: "Distance between Jeddah and Makkah (distancebetween2.com)", url: "https://distancebetween2.com/jeddah/makkah" },
      { label: "Jeddah to Mecca driving distance (travelmath.com)", url: "https://www.travelmath.com/drive-distance/from/Jeddah,+Saudi+Arabia/to/Mecca,+Saudi+Arabia" },
      { label: "Haramain High-Speed Railway overview (Visit Saudi)", url: "https://www.visitsaudi.com/en/stories/haramain-high-speed-railway" },
      { label: "Why there is no airport in Makkah (hotelsplatform.com)", url: "https://hotelsplatform.com/blog/why-are-there-no-airports-in-makkah-and-the-nearest-airports-to-it" },
    ],
    relatedLinks: [
      { label: "Makkah to Jeddah taxi and private transfer service", href: "/routes/makkah-to-jeddah" },
      { label: "Jeddah to Makkah distance (reverse direction)", href: "/distance/jeddah-to-makkah-distance" },
      { label: "Makkah to Madinah distance", href: "/distance/makkah-to-madinah-distance" },
    ],
  },

  {
    slug: "madinah-to-jeddah-distance",
    from: "Madinah",
    to: "Jeddah",
    routePath: "/routes/madinah-to-jeddah",
    metaTitle: "Madinah to Jeddah Distance: KM, Flight Time & Departure Planning",
    metaDescription: "How far is Jeddah from Madinah? Road distance, the roughly one-hour flight, the Haramain train, and what to know when this is your last leg before flying home.",
    h1: "Madinah to Jeddah Distance: How Far Is It, and How Should You Plan a Departure Journey?",
    quickAnswer: {
      drivingDistance: "About 410–420 km",
      drivingTime: "4 to 5 hours by road; around 1 hour by direct flight",
      note: "This leg is very often the final journey of a pilgrimage trip, made against an international flight departure from Jeddah — timing and buffer time matter as much here as the raw distance.",
    },
    distanceExplanation: [
      "The road distance from Madinah to Jeddah is generally cited between 409 and 420 km via Highway 15, the same road used in the reverse direction, passing through Badr and along the coastal corridor via Rabigh and King Abdullah Economic City before reaching Jeddah.",
      "Because a large share of travellers on this specific leg are heading to King Abdulaziz International Airport for an international departure rather than to a Jeddah hotel, the airport's location on Jeddah's north side — reached slightly before the rest of the city — is the more relevant reference point for many journeys on this route.",
    ],
    travelTime: [
      "By road, the drive takes roughly four to five hours depending on traffic conditions — a long enough journey that most travellers with an international flight to catch build in a substantial buffer, or choose not to drive it at all.",
      "A direct flight from Madinah to Jeddah takes around one hour, and — as on the reverse direction — it's a very frequently served route, with roughly 441 flights a week across four airlines, making it a practical way to connect to an onward international flight from Jeddah without the four-to-five-hour drive.",
    ],
    transportOptions: [
      {
        mode: "Direct flight",
        suitability: "Travellers connecting onward to an international flight from Jeddah, or anyone prioritising a predictable, short journey",
        duration: "About 1 hour in the air",
        advantages: "By far the fastest option, very high flight frequency (around 441 flights per week), straightforward connection to an onward international departure",
        limitations: "Airport check-in and security add time beyond the 1-hour flight itself; requires transferring at Jeddah's airport rather than arriving door-to-door",
      },
      {
        mode: "Haramain High-Speed Railway",
        suitability: "Travellers wanting a fast ground option that still connects near the airport",
        duration: "Part of the 449 km, up-to-300-km/h Jeddah–Makkah–Madinah line",
        advantages: "Fast, avoids road traffic, and the Jeddah end of the line includes a station near King Abdulaziz Airport",
        limitations: "The Madinah station is about 8–10 km from Masjid an-Nabawi, requiring a local transfer to reach it first",
      },
      {
        mode: "Private car / taxi",
        suitability: "Families and groups with luggage, or travellers who'd rather go hotel-to-airport in one direct trip without a station transfer",
        duration: "4–5 hours",
        advantages: "Hotel-to-airport in a single vehicle, flexible timing built around an actual flight departure",
        limitations: "The longest of the three options in pure travel time, which matters more here given how often this is a flight-timed journey",
      },
    ],
    routeSpecific: {
      heading: "Planning this leg as an international departure day",
      paragraphs: [
        "For many pilgrims, this is the last domestic leg before flying home internationally from Jeddah, having visited Madinah after Makkah — which makes the choice between the roughly one-hour flight, the Haramain train, and the four-to-five-hour drive less about cost alone and more about how much buffer time is available before an international check-in deadline.",
        "Because King Abdulaziz International Airport sits on Jeddah's north side, travellers flying onward internationally are generally looking at a slightly shorter final approach than those continuing into central Jeddah for a stay — worth factoring in when comparing timing estimates against a specific international flight.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "Direct flight, about 1 hour, 441 flights/week across 4 airlines" },
      { label: "Fastest ground option", value: "Haramain High-Speed Railway" },
      { label: "Best for a flight-timed hotel departure", value: "Private car, hotel to airport, 4–5 hours" },
    ],
    faqs: [
      { question: "How far is Madinah from Jeddah?", answer: "Road distance is generally cited between 409 and 420 km via Highway 15, the same distance as the Jeddah-to-Madinah direction." },
      { question: "Is there a direct flight from Madinah to Jeddah?", answer: "Yes, it's a very frequently served route — around 441 flights per week across four airlines, with a flight time of about one hour." },
      { question: "How much buffer time should I plan if I'm flying internationally from Jeddah?", answer: "This isn't something we can state a fixed number for, since it depends on your airline's specific check-in requirements — but given the roughly one-hour domestic flight or four-to-five-hour drive from Madinah, most travellers build in a meaningful buffer beyond the base travel time before an international departure." },
      { question: "Is there a train between Madinah and Jeddah?", answer: "Yes, the Haramain High-Speed Railway connects Madinah directly to Jeddah, including a station near King Abdulaziz International Airport." },
      { question: "What's the fastest way to reach Jeddah's airport from Madinah?", answer: "A direct flight, at around one hour, is the fastest option; the Haramain train is the fastest ground option and connects near the airport." },
    ],
    sources: [
      { label: "Jeddah to Madinah driving distance and route (explore-saudi.com)", url: "https://explore-saudi.com/en/jeddah-to-medina-road-trip-stops-2026/" },
      { label: "Jeddah to Medina by car (harmaincab.com)", url: "https://harmaincab.com/jeddah-to-medina-by-car/" },
      { label: "Jeddah to Madinah flight schedule and frequency (flightsfrom.com)", url: "https://www.flightsfrom.com/JED-MED" },
      { label: "Haramain High-Speed Railway overview (Visit Saudi)", url: "https://www.visitsaudi.com/en/stories/haramain-high-speed-railway" },
    ],
    relatedLinks: [
      { label: "Madinah to Jeddah taxi and private transfer service", href: "/routes/madinah-to-jeddah" },
      { label: "Jeddah to Madinah distance (reverse direction)", href: "/distance/jeddah-to-madinah-distance" },
      { label: "Makkah to Jeddah distance", href: "/distance/makkah-to-jeddah-distance" },
    ],
  },

  {
    slug: "taif-to-jeddah-distance",
    from: "Taif",
    to: "Jeddah",
    routePath: "/routes/taif-to-jeddah",
    metaTitle: "Taif to Jeddah Distance: KM, the Al-Hada Descent & Travel Time",
    metaDescription: "How far is Jeddah from Taif? Road distance down the Al-Hada mountain road, driving time, and the roughly 50-minute flight alternative.",
    h1: "Taif to Jeddah Distance: How Far Is It, and What's the Descent Like?",
    quickAnswer: {
      drivingDistance: "Roughly 170–200 km",
      drivingTime: "About 2 hours by road; around 50 minutes by direct flight",
      note: "This direction is a descent from Taif's highland elevation down to sea level at Jeddah, on the same Al-Hada Road used outbound — the distance is the same, but the drive itself feels different heading downhill.",
    },
    distanceExplanation: [
      "The driving distance from Taif down to Jeddah covers the same road as the outbound Jeddah-to-Taif direction — generally reported between roughly 171 km and 200 km depending on the source, with figures around 170–171 km most commonly cited — descending via Al-Hada Road from Taif's highland elevation to the coast.",
      "As with the ascent, this is a mountain road rather than flat highway for a significant portion of the route, so the descent involves the same sequence of engineered curves and turnouts as the climb, just in the opposite direction.",
    ],
    travelTime: [
      "The drive takes approximately two hours, with the descent down Al-Hada Road forming a substantial part of the journey before it levels out onto the coastal approach to Jeddah.",
      "A direct flight from Taif to Jeddah is also available, taking around 50 minutes, with roughly 27 flights a week — the same frequency as the outbound route, since it's operated as a two-way schedule primarily by Saudia.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Most travellers, particularly those who'd rather not manage airport check-in for a short domestic hop",
        duration: "About 2 hours",
        advantages: "Door-to-door, and the descent offers clear views down toward the coast as the elevation drops",
        limitations: "The winding mountain road can cause motion sickness for some travellers on the way down just as it can on the way up",
      },
      {
        mode: "Direct flight",
        suitability: "Travellers prioritising speed, especially those connecting onward from Jeddah's airport",
        duration: "About 50 minutes",
        advantages: "Fast, and useful for a same-day connection to an onward flight from Jeddah",
        limitations: "Skips the Al-Hada road descent entirely, and still requires ground transport at both ends",
      },
    ],
    routeSpecific: {
      heading: "Descending Al-Hada Road: what changes heading downhill",
      paragraphs: [
        "Travelling from Taif to Jeddah means descending rather than climbing Al-Hada Road, and while the distance is identical to the outbound direction, the drive itself has a different character — a steady drop in elevation and, correspondingly, a noticeable rise in temperature as the road leaves Taif's cooler highland climate and approaches Jeddah's coastal heat.",
        "For travellers connecting onward from Jeddah — particularly to an international flight from King Abdulaziz International Airport — the roughly 50-minute flight from Taif can be the more practical option, landing close to the airport itself rather than requiring the full drive into the city first.",
      ],
    },
    infoBoxes: [
      { label: "Fastest option", value: "Direct flight, about 50 minutes, ~27 flights/week" },
      { label: "Best for the scenic mountain descent", value: "Private car via Al-Hada Road" },
      { label: "Key fact", value: "Same distance as the Jeddah-to-Taif direction, but a descent rather than a climb" },
    ],
    faqs: [
      { question: "How far is Jeddah from Taif?", answer: "Road-distance sources vary between roughly 171 and 200 km, with about 170–171 km most commonly cited — the same distance as the Jeddah-to-Taif direction." },
      { question: "Is the drive down from Taif easier than the drive up?", answer: "The distance and general road conditions are the same in both directions; some travellers find a descent more comfortable than a climb, though the road's curves are present either way." },
      { question: "Is there a flight from Taif to Jeddah?", answer: "Yes, a direct flight takes about 50 minutes, with roughly 27 flights a week, primarily operated by Saudia." },
      { question: "How long does the road journey take?", answer: "Approximately two hours, including the descent down Al-Hada Road." },
      { question: "Is flying useful if I'm connecting to an international flight from Jeddah?", answer: "It can be — landing at Jeddah's airport directly avoids the drive into the city first, which may suit a tight onward connection better than the two-hour road option." },
    ],
    sources: [
      { label: "Distance Jeddah to Taif (distance.to)", url: "https://www.distance.to/Jeddah/Taif" },
      { label: "Jeddah to Taif road trip guide (finalrentals-ksa.com)", url: "https://www.finalrentals-ksa.com/blog/single/jeddah-to-taif-road-trip-guide-for-mountain-views-and-cool-air" },
      { label: "Direct flights from Taif to Jeddah (flightsfrom.com)", url: "https://www.flightsfrom.com/TIF-JED" },
    ],
    relatedLinks: [
      { label: "Taif to Jeddah taxi and private transfer service", href: "/routes/taif-to-jeddah" },
      { label: "Jeddah to Taif distance (reverse direction)", href: "/distance/jeddah-to-taif-distance" },
      { label: "Makkah to Jeddah distance", href: "/distance/makkah-to-jeddah-distance" },
    ],
  },

  {
    slug: "jeddah-to-yanbu-distance",
    from: "Jeddah",
    to: "Yanbu",
    routePath: "/routes/jeddah-to-yanbu",
    metaTitle: "Jeddah to Yanbu Distance: KM, Travel Time & Coastal Highway Route",
    metaDescription: "How far is Yanbu from Jeddah? Road distance up the Red Sea coastal highway, realistic driving time, and how the distance shifts depending on whether you're headed to Yanbu Al Bahr or the industrial city.",
    h1: "Jeddah to Yanbu Distance: How Far Is It Up the Red Sea Coast?",
    quickAnswer: {
      drivingDistance: "Roughly 330–350 km via the coastal highway",
      drivingTime: "About 3.5 hours under normal driving conditions",
      straightLineDistance: "Around 310 km as the crow flies",
      note: "'Yanbu' covers more than one area — the historic port town (Yanbu Al Bahr), the diving and Red Sea tourism areas, and the large Royal Commission industrial city (Yanbu Al Sinaiyah) are all part of greater Yanbu, and your specific destination affects the exact distance.",
    },
    distanceExplanation: [
      "Jeddah to Yanbu runs up the Red Sea coastal highway, with road-distance sources generally placing the figure between roughly 330 and 350 km, passing King Abdullah Economic City (KAEC) and Rabigh along the way before continuing north.",
      "Because Yanbu is a genuinely large urban area — combining the historic port and old town, Red Sea diving and tourism areas, and the separate Royal Commission for Jubail and Yanbu industrial city — the exact distance depends meaningfully on which part of Yanbu you're headed to, with the industrial city and port facilities generally sitting a little further from Jeddah than the old town and coastal tourism areas closer to the highway.",
    ],
    travelTime: [
      "The drive takes approximately three and a half hours under normal conditions on a well-maintained coastal highway, making it a manageable single-day trip rather than requiring an overnight stop.",
      "Traffic is generally lighter on this route than on the busier Jeddah-Makkah or Jeddah-Madinah corridors, since it isn't a pilgrimage route, though conditions can vary around KAEC and Rabigh where the highway passes through more built-up areas.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Most travellers, particularly those headed to Yanbu's diving resorts or Red Sea tourism areas rather than a fixed transit point",
        duration: "About 3.5 hours",
        advantages: "Door-to-door to a specific resort, dive centre, or address within greater Yanbu — useful given how spread out the area is",
        limitations: "A genuine multi-hour drive; the exact time depends on which part of Yanbu is the final destination",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers without heavy luggage",
        duration: "Longer than a direct drive, on a fixed schedule",
        advantages: "Lower cost, connects into the national SAPTCO network",
        limitations: "Station-to-station rather than door-to-door, less practical for reaching a specific resort or dive site",
      },
      {
        mode: "Direct flight (Saudia, limited frequency)",
        suitability: "Travellers for whom the exact schedule works, given the limited flight frequency",
        duration: "About 1 hour 10 minutes in the air",
        advantages: "Avoids the road drive entirely for the small number of scheduled flights available",
        limitations: "Operates only a few times a week (twice weekly, per Saudia's published schedule as flight number SV1582), so it's not a flexible option most travellers can plan around",
      },
    ],
    routeSpecific: {
      heading: "Yanbu is more than one destination",
      paragraphs: [
        "Yanbu isn't a single point but a large urban area with genuinely different districts: Yanbu Al Bahr, the historic port town and old city; the Red Sea diving and coastal tourism areas that have grown around it; and Yanbu Al Sinaiyah, the large Royal Commission for Jubail and Yanbu industrial city built from 1975 onward around the King Fahd Industrial Port. These sit at different distances from Jeddah, so 'how far to Yanbu' genuinely depends on which of these you mean.",
        "For travellers heading to Yanbu specifically for Red Sea diving or coastal tourism, the relevant distance is generally to the coastal/old-town side of Yanbu; for business travel connected to the petrochemical or industrial sector, the industrial city — home to major oil and LNG pipeline terminal infrastructure — sits at a slightly different point and is worth confirming as the specific destination before estimating total travel time.",
      ],
    },
    infoBoxes: [
      { label: "Typical driving distance", value: "330–350 km via the Red Sea coastal highway" },
      { label: "Typical driving time", value: "About 3.5 hours" },
      { label: "Key fact", value: "Yanbu covers several distinct areas — old town/port, coastal tourism, and the separate industrial city — at slightly different distances" },
    ],
    faqs: [
      { question: "How far is Yanbu from Jeddah?", answer: "Road-distance sources generally place the figure between roughly 330 and 350 km via the Red Sea coastal highway, with the exact distance depending on which part of Yanbu you're headed to." },
      { question: "How long does the drive take?", answer: "About three and a half hours under normal driving conditions — a manageable single-day trip." },
      { question: "Is there a flight between Jeddah and Yanbu?", answer: "Yes, but with limited frequency — Saudia operates a direct flight (flight number SV1582) roughly twice a week, taking about 1 hour 10 minutes, so it isn't a flexible option most travellers can rely on for specific dates." },
      { question: "Does the distance change depending on which part of Yanbu I'm going to?", answer: "Yes — Yanbu's old town/port area, its Red Sea diving and tourism areas, and the separate Royal Commission industrial city sit at slightly different distances from Jeddah, so your specific destination matters." },
      { question: "Is this a busy route with heavy traffic?", answer: "Generally lighter than the Jeddah-Makkah or Jeddah-Madinah pilgrimage corridors, since it isn't a pilgrimage route, though traffic can vary around KAEC and Rabigh where the highway passes through built-up areas." },
    ],
    sources: [
      { label: "Distance from Jeddah to Yanbu (distancecalculator.net)", url: "https://www.distancecalculator.net/from-jeddah-to-yanbu" },
      { label: "Flights from Yanbu (YNB) to Jeddah (JED) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-ynb-to-jed" },
      { label: "Royal Commission for Jubail and Yanbu (Wikipedia)", url: "https://en.wikipedia.org/wiki/Royal_Commission_for_Jubail_and_Yanbu" },
    ],
    relatedLinks: [
      { label: "Jeddah to Yanbu taxi and private transfer service", href: "/routes/jeddah-to-yanbu" },
      { label: "Yanbu to Jeddah distance (reverse direction)", href: "/distance/yanbu-to-jeddah-distance" },
      { label: "Jeddah to KAEC distance", href: "/distance/jeddah-to-kaec-distance" },
    ],
  },

  {
    slug: "yanbu-to-jeddah-distance",
    from: "Yanbu",
    to: "Jeddah",
    routePath: "/routes/yanbu-to-jeddah",
    metaTitle: "Yanbu to Jeddah Distance: KM, Travel Time & Airport Connections",
    metaDescription: "How far is Jeddah from Yanbu? Road distance down the Red Sea coastal highway, driving time, and what to know if you're connecting to a flight from Jeddah's airport.",
    h1: "Yanbu to Jeddah Distance: How Far Is It, and What Should Airport-Bound Travellers Know?",
    quickAnswer: {
      drivingDistance: "Roughly 330–350 km via the coastal highway",
      drivingTime: "About 3.5 hours under normal driving conditions",
      straightLineDistance: "Around 310 km as the crow flies",
      note: "Whether you're starting from Yanbu's old town/port, its Red Sea tourism areas, or the separate industrial city changes the exact starting distance — worth confirming before estimating total travel time to Jeddah.",
    },
    distanceExplanation: [
      "The drive south from Yanbu to Jeddah follows the same Red Sea coastal highway as the outbound direction, generally reported between roughly 330 and 350 km, passing Rabigh and King Abdullah Economic City before reaching Jeddah.",
      "Because Yanbu itself spans several distinct areas — the historic port and old town (Yanbu Al Bahr), the Red Sea diving and coastal tourism zones, and the separate Royal Commission industrial city (Yanbu Al Sinaiyah) — the real starting distance depends on which part of Yanbu the journey begins in, with the industrial city generally a little further from Jeddah than the old town and coastal areas.",
    ],
    travelTime: [
      "Allow approximately three and a half hours for the drive under normal conditions. For travellers timing this against a flight from Jeddah's King Abdulaziz International Airport, it's worth building in buffer time beyond the base driving estimate, since a three-and-a-half-hour journey leaves less margin for unexpected delays than a shorter transfer would.",
      "Traffic is generally lighter than on the pilgrimage-heavy Jeddah-Makkah and Jeddah-Madinah corridors, though the approach through KAEC and Rabigh can see more built-up-area traffic than the open highway sections further north.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Travellers connecting to a flight from Jeddah's airport, or anyone wanting door-to-door pickup from a specific Yanbu location",
        duration: "About 3.5 hours",
        advantages: "Can pick up directly from a dive resort, hotel, or industrial-city address, with flight time factored into departure planning",
        limitations: "A genuine multi-hour drive that needs buffer time if a flight connection is involved",
      },
      {
        mode: "Direct flight (Saudia, limited frequency)",
        suitability: "Travellers whose dates align with the limited available flights",
        duration: "About 1 hour 10 minutes in the air",
        advantages: "Avoids the road drive for the scheduled flights that are available, landing near Jeddah's airport for onward connections",
        limitations: "Operates only around twice a week as flight SV1582 per Saudia's published schedule, so it can't be relied on for a specific arbitrary date",
      },
      {
        mode: "SAPTCO intercity bus",
        suitability: "Budget travellers without a flight to catch",
        duration: "Longer than a direct drive, fixed schedule",
        advantages: "Lower cost, part of the national network",
        limitations: "Fixed timetable, less suitable for a flight-timed departure",
      },
    ],
    routeSpecific: {
      heading: "Starting point within Yanbu affects the real distance",
      paragraphs: [
        "Because greater Yanbu spans the old port town, Red Sea tourism and diving areas, and the separate Royal Commission industrial city built from 1975 around the King Fahd Industrial Port, the true starting distance to Jeddah depends on where within Yanbu the journey begins — a pickup from a Red Sea dive resort and a pickup from the industrial city are not quite the same distance, even though both are 'Yanbu' in a general sense.",
        "For travellers making this journey to connect onward internationally from Jeddah's King Abdulaziz International Airport, treating the roughly 3.5-hour drive as a minimum rather than a fixed figure — and building in a buffer for the international check-in deadline — is the more realistic way to plan than assuming the base driving time alone.",
      ],
    },
    infoBoxes: [
      { label: "Typical driving distance", value: "330–350 km via the Red Sea coastal highway" },
      { label: "Typical driving time", value: "About 3.5 hours" },
      { label: "Key fact", value: "Starting point within greater Yanbu (old town, coastal tourism, or industrial city) affects the exact distance" },
    ],
    faqs: [
      { question: "How far is Jeddah from Yanbu?", answer: "Road-distance sources generally place the figure between roughly 330 and 350 km via the Red Sea coastal highway, the same range as the outbound direction." },
      { question: "How long does the drive take?", answer: "About three and a half hours under normal driving conditions." },
      { question: "Is there a flight from Yanbu to Jeddah?", answer: "Yes, but at limited frequency — Saudia operates a direct flight (SV1582) roughly twice a week, taking about 1 hour 10 minutes, so it shouldn't be relied on for an arbitrary specific date." },
      { question: "Should I build in extra time if I'm connecting to an international flight from Jeddah?", answer: "It's worth treating the roughly 3.5-hour drive as a minimum and adding buffer time for an international check-in deadline, since it's a long enough journey that unexpected delays leave less margin than a short in-city transfer would." },
      { question: "Does my starting point within Yanbu matter?", answer: "Yes — Yanbu's old town/port area, its coastal tourism zones, and the separate industrial city sit at slightly different distances from Jeddah, so the exact starting point affects the real driving distance." },
    ],
    sources: [
      { label: "Distance from Jeddah to Yanbu (distancecalculator.net)", url: "https://www.distancecalculator.net/from-jeddah-to-yanbu" },
      { label: "Flights from Yanbu (YNB) to Jeddah (JED) (flightconnections.com)", url: "https://www.flightconnections.com/flights-from-ynb-to-jed" },
      { label: "Royal Commission for Jubail and Yanbu (Wikipedia)", url: "https://en.wikipedia.org/wiki/Royal_Commission_for_Jubail_and_Yanbu" },
    ],
    relatedLinks: [
      { label: "Yanbu to Jeddah taxi and private transfer service", href: "/routes/yanbu-to-jeddah" },
      { label: "Jeddah to Yanbu distance (outbound direction)", href: "/distance/jeddah-to-yanbu-distance" },
      { label: "Jeddah to Makkah distance", href: "/distance/jeddah-to-makkah-distance" },
    ],
  },

  {
    slug: "jeddah-to-kaec-distance",
    from: "Jeddah",
    to: "KAEC",
    routePath: "/routes/jeddah-to-kaec",
    metaTitle: "Jeddah to KAEC Distance: KM, Travel Time & Haramain Train Option",
    metaDescription: "How far is King Abdullah Economic City from Jeddah? Road distance, driving time, and the Haramain train's Hejaz Gate station serving KAEC directly.",
    h1: "Jeddah to KAEC Distance: How Far Is It, and Is the Haramain Train an Option?",
    quickAnswer: {
      drivingDistance: "Roughly 100–125 km via the coastal highway",
      drivingTime: "About 1 hour to 1 hour 15 minutes under normal conditions",
      note: "The exact distance and time depend on which part of KAEC you're headed to — the Haramain train station, the Bay La Sun business and residential district, or the industrial/port zone are spread across a large master-planned area.",
    },
    distanceExplanation: [
      "King Abdullah Economic City sits north of Jeddah along the Red Sea coastal highway, with road-distance sources generally placing the figure between roughly 100 and 125 km, depending on the exact area of KAEC used as the destination.",
      "KAEC is a large master-planned city rather than a single point — it includes the Hejaz Gate Haramain train station, the Bay La Sun business park and residential/marina district, industrial and port zones, and further-out developments, so the specific destination within KAEC affects the real distance from Jeddah.",
    ],
    travelTime: [
      "Under normal driving conditions, the trip takes approximately one hour to one hour fifteen minutes on a well-maintained coastal highway, making it one of the shorter and more straightforward routes on this corridor.",
      "Because KAEC's Haramain station also serves as a stop on the same high-speed line connecting Jeddah, Makkah, and Madinah, the train is a genuine time-competitive alternative here in a way it isn't for shorter, more local trips.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Most travellers, particularly those headed to a specific business address, residential development, or the port/industrial zone",
        duration: "About 1 hour to 1 hour 15 minutes",
        advantages: "Door-to-door to a specific address within KAEC's large master-planned area, no station transfer needed",
        limitations: "Subject to ordinary highway traffic conditions",
      },
      {
        mode: "Haramain High-Speed Railway",
        suitability: "Travellers headed to or near the Hejaz Gate station specifically, or connecting onward toward Makkah or Madinah",
        duration: "A stop on the wider Jeddah–Makkah–Madinah line, running at up to 300 km/h",
        advantages: "KAEC's Hejaz Gate station is under 30 minutes from both Jeddah city and King Abdulaziz International Airport, and under an hour to Makkah or Madinah — useful if KAEC is one stop on a wider pilgrimage or business itinerary",
        limitations: "Only practical if your specific KAEC destination is near the Hejaz Gate station; other parts of KAEC still need a local transfer from there",
      },
    ],
    routeSpecific: {
      heading: "KAEC is a large city, not one address",
      paragraphs: [
        "King Abdullah Economic City is a genuinely large master-planned development, with the Hejaz Gate Haramain train station, the Bay La Sun business park and marina district, residential communities, and a separate industrial/port zone all sitting at different points within it — 'distance to KAEC' from Jeddah depends meaningfully on which of these is the actual destination.",
        "For business travellers, Bay La Sun's business park is a common destination and generally reachable within the stated driving time range; for travellers connecting via the Haramain train specifically, the Hejaz Gate station's under-30-minute link to both Jeddah city and its airport makes KAEC a genuinely convenient stop on a wider Jeddah-Makkah-Madinah rail itinerary.",
      ],
    },
    infoBoxes: [
      { label: "Typical driving distance", value: "100–125 km via the coastal highway" },
      { label: "Typical driving time", value: "About 1 hour to 1 hour 15 minutes" },
      { label: "Key fact", value: "KAEC's Hejaz Gate Haramain station is under 30 minutes from Jeddah city and its airport" },
    ],
    faqs: [
      { question: "How far is KAEC from Jeddah?", answer: "Road-distance sources generally place the figure between roughly 100 and 125 km, depending on which part of KAEC's large master-planned area is the destination." },
      { question: "How long does the drive take?", answer: "About one hour to one hour fifteen minutes under normal driving conditions." },
      { question: "Is there a train to KAEC?", answer: "Yes — the Haramain High-Speed Railway has a station at KAEC's Hejaz Gate, under 30 minutes from both Jeddah city and King Abdulaziz International Airport, and under an hour from Makkah or Madinah." },
      { question: "Does the distance change depending on where in KAEC I'm going?", answer: "Yes — KAEC includes the Hejaz Gate train station area, the Bay La Sun business and residential district, and separate industrial/port zones, all at slightly different distances from Jeddah." },
      { question: "Is a private car or the train better for reaching KAEC?", answer: "It depends on your specific destination within KAEC — the train is convenient if you're headed near the Hejaz Gate station, while a private car is more practical for other parts of the city, including the business park or industrial zone." },
    ],
    sources: [
      { label: "King Abdullah Economic City (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Abdullah_Economic_City" },
      { label: "Distance from Jeddah to KAEC (distancecalculator.net)", url: "https://www.distancecalculator.net/from-jeddah-to-king-abdullah-economic-city" },
      { label: "Haramain High-Speed Railway stations (Wego)", url: "https://blog.wego.com/haramain-high-speed-railway/" },
    ],
    relatedLinks: [
      { label: "Jeddah to KAEC taxi and private transfer service", href: "/routes/jeddah-to-kaec" },
      { label: "KAEC to Jeddah distance (reverse direction)", href: "/distance/kaec-to-jeddah-distance" },
      { label: "Jeddah to Yanbu distance", href: "/distance/jeddah-to-yanbu-distance" },
    ],
  },

  {
    slug: "kaec-to-jeddah-distance",
    from: "KAEC",
    to: "Jeddah",
    routePath: "/routes/kaec-to-jeddah",
    metaTitle: "KAEC to Jeddah Distance: KM, Travel Time & Airport Transfers",
    metaDescription: "How far is Jeddah from King Abdullah Economic City? Road distance, driving time, and options for connecting to King Abdulaziz International Airport.",
    h1: "KAEC to Jeddah Distance: How Far Is It, and What Are the Airport Connection Options?",
    quickAnswer: {
      drivingDistance: "Roughly 100–125 km via the coastal highway",
      drivingTime: "About 1 hour to 1 hour 15 minutes under normal conditions",
      note: "A large share of this route's traffic is business travellers or residents connecting to King Abdulaziz International Airport — worth planning around the airport specifically rather than 'Jeddah' generally.",
    },
    distanceExplanation: [
      "The drive south from King Abdullah Economic City to Jeddah covers the same coastal highway as the outbound direction, generally reported between roughly 100 and 125 km depending on the exact starting point within KAEC's large master-planned area.",
      "Because KAEC includes the Hejaz Gate train station area, the Bay La Sun business and residential district, and separate industrial/port zones, the real starting distance varies by a meaningful margin depending on where specifically the journey begins.",
    ],
    travelTime: [
      "Allow approximately one hour to one hour fifteen minutes for the drive to Jeddah under normal conditions — one of the shorter, more predictable routes on this corridor.",
      "For travellers connecting to a flight, King Abdulaziz International Airport sits on Jeddah's north side, generally making it a slightly shorter approach from KAEC than continuing into central or southern Jeddah.",
    ],
    transportOptions: [
      {
        mode: "Private car / taxi",
        suitability: "Business travellers and residents connecting to King Abdulaziz International Airport or a specific Jeddah address",
        duration: "About 1 hour to 1 hour 15 minutes",
        advantages: "Door-to-door from a specific KAEC address to the airport terminal or a Jeddah destination, no station transfer needed",
        limitations: "Subject to ordinary highway traffic conditions",
      },
      {
        mode: "Haramain High-Speed Railway",
        suitability: "Travellers based near KAEC's Hejaz Gate station specifically",
        duration: "A stop on the wider Jeddah–Makkah–Madinah line, running at up to 300 km/h",
        advantages: "Under 30 minutes to both Jeddah city and King Abdulaziz International Airport from the Hejaz Gate station",
        limitations: "Only convenient if your KAEC starting point is near the Hejaz Gate station; other parts of KAEC need a local transfer to reach it first",
      },
    ],
    routeSpecific: {
      heading: "A common route for airport connections",
      paragraphs: [
        "For KAEC's growing residential and business community, this leg is very often a direct airport-connection trip rather than a trip into Jeddah's city centre — King Abdulaziz International Airport sits on Jeddah's north side, making it a comparatively short and predictable transfer from KAEC compared to continuing further into the city.",
        "For those based specifically near KAEC's Hejaz Gate Haramain station, the train offers a genuinely fast under-30-minute link to both Jeddah city and its airport, making it worth considering alongside a private car depending on exactly where within KAEC the journey starts.",
      ],
    },
    infoBoxes: [
      { label: "Typical driving distance", value: "100–125 km via the coastal highway" },
      { label: "Typical driving time", value: "About 1 hour to 1 hour 15 minutes" },
      { label: "Key fact", value: "King Abdulaziz International Airport sits on Jeddah's north side, generally the shortest approach from KAEC" },
    ],
    faqs: [
      { question: "How far is Jeddah from KAEC?", answer: "Road-distance sources generally place the figure between roughly 100 and 125 km, the same range as the outbound direction, depending on the exact starting point within KAEC." },
      { question: "How long does the drive take?", answer: "About one hour to one hour fifteen minutes under normal driving conditions." },
      { question: "Is KAEC a good base for reaching Jeddah's airport?", answer: "It's a comparatively short and predictable transfer, since King Abdulaziz International Airport sits on Jeddah's north side, generally the closest approach from KAEC compared to continuing further into the city." },
      { question: "Is there a train from KAEC to Jeddah?", answer: "Yes, from KAEC's Hejaz Gate Haramain station, which is under 30 minutes from both Jeddah city and King Abdulaziz International Airport — though it's only convenient if your KAEC starting point is near that station." },
      { question: "Does my starting point within KAEC affect the distance?", answer: "Yes — KAEC's Hejaz Gate area, the Bay La Sun business district, and the industrial/port zones sit at slightly different distances from Jeddah." },
    ],
    sources: [
      { label: "King Abdullah Economic City (Wikipedia)", url: "https://en.wikipedia.org/wiki/King_Abdullah_Economic_City" },
      { label: "Distance from Jeddah to KAEC (distancecalculator.net)", url: "https://www.distancecalculator.net/from-jeddah-to-king-abdullah-economic-city" },
      { label: "Haramain High-Speed Railway stations (Wego)", url: "https://blog.wego.com/haramain-high-speed-railway/" },
    ],
    relatedLinks: [
      { label: "KAEC to Jeddah taxi and private transfer service", href: "/routes/kaec-to-jeddah" },
      { label: "Jeddah to KAEC distance (outbound direction)", href: "/distance/jeddah-to-kaec-distance" },
      { label: "Jeddah to Yanbu distance", href: "/distance/jeddah-to-yanbu-distance" },
    ],
  },
];

export function getDistancePage(slug: string): DistancePage | undefined {
  return distancePages.find((p) => p.slug === slug);
}
