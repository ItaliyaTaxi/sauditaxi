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
];

export function getDistancePage(slug: string): DistancePage | undefined {
  return distancePages.find((p) => p.slug === slug);
}
