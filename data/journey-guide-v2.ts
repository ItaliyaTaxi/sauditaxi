import type { JourneyV2Content } from "@/components/journey-v2/JourneyGuideV2View";

/**
 * "Journey V2" — the premium long-distance planning-guide collection at
 * /distance/{slug}, replacing the old "rich journey" design (see
 * data/journey-pages.ts, components/journey/JourneyPageView.tsx, both now
 * unused — kept only for structural safety, see the header comment there).
 *
 * Distinct in purpose from the other two /distance/{slug} collections:
 * - data/distance-pages.ts / data/distance-guide-v2.ts answer "how far, how
 *   long, what's the road like" for domestic and short cross-border legs.
 * - This collection answers "what is this specific long-distance journey
 *   actually like, and how do I plan around it" for the genuinely long
 *   Gulf-crossing routes: Kuwait, Qatar and UAE, both directions, plus the
 *   airport-specific variants of each.
 *
 * Rendered by components/journey-v2/JourneyGuideV2View.tsx. Wired into
 * app/(main)/distance/[slug]/page.tsx ahead of the old journeyPages array
 * (now empty) and app/ar/[...slug]/page.tsx via the "journeyV2" ArPageType.
 *
 * Every distance/time/border fact below was carried forward from the
 * original journey-pages.ts entries (themselves independently sourced — see
 * each entry's `sources`) or, for the company/authority border-responsibility
 * split, reused verbatim from the already-verified data/gcc-route-content.ts
 * facts for the same border crossing, so the claims stay consistent across
 * the Journey guide and the corresponding commercial route page.
 */

export interface JourneyGuideV2Page extends JourneyV2Content {
  slug: string;
  from: string;
  to: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

export const journeyGuideV2Pages: JourneyGuideV2Page[] = [
  // ── Kuwait cluster ───────────────────────────────────────────────────────
  {
    slug: "kuwait-city-to-riyadh-distance",
    from: "Kuwait City",
    to: "Riyadh",
    h1: "Kuwait City to Riyadh: A Full-Day Cross-Border Road Journey",
    metaTitle: "Kuwait City to Riyadh Journey Guide: Distance, Border & Planning",
    metaDescription: "Planning the Kuwait City to Riyadh drive? Verified distance, a stage-by-stage journey guide, the Nuwaiseeb border crossing, and honest full-day planning advice.",
    eyebrow: "Long-Distance Journey Guide",
    dek: "One of the longest regular road journeys in the Gulf — genuinely worth planning as a full day, not a quick hop between capitals.",
    lastVerified: "2026-08-27",
    stats: [
      { label: "Road distance", value: "~600-700 km" },
      { label: "Pure driving time", value: "~6.5-7 hrs", emphasis: true },
      { label: "Border crossing", value: "Nuwaiseeb / Khafji" },
      { label: "Journey type", value: "Capital-to-capital" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Kuwait City",
        items: [
          "Confirm your exact starting address — Kuwait City covers a wide area, and the distance to Nuwaiseeb varies by a meaningful margin on a route this long.",
          "Plan for a full day, not a same-day round trip.",
          "Check current Saudi entry requirements for your nationality before departure.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "A typical driving route. Your exact distance depends on your specific starting address and destination.",
        origin: "Kuwait City, Kuwait",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "How the Journey Unfolds",
        steps: [
          { label: "Departure from Kuwait City", detail: "The exact distance to the border depends on your specific address." },
          { label: "Southbound to Nuwaiseeb", detail: "The sole land border between Kuwait and Saudi Arabia." },
          { label: "Border crossing", detail: "Kuwaiti exit and Saudi entry formalities — a standard land border, not an island facility." },
          { label: "Long haul south on Highway 95", detail: "Down the Eastern Province coast before turning inland." },
          { label: "Inland to Riyadh via Highway 40", detail: "A genuinely long final leg on its own." },
          { label: "Arrival in Riyadh", detail: "A large, spread-out city — the last few kilometres to your specific destination vary." },
        ],
        note: "We separate the journey into its real stages rather than quoting one total time, since the border stage is inherently variable.",
      },
      {
        type: "roadReality",
        heading: "What the Road Is Actually Like",
        paragraphs: [
          "This route covers the full width of the Eastern Province highway network before it even reaches the border, then continues deep into the Saudi interior toward Riyadh — a genuinely long single stretch of desert highway, not a scenic drive with frequent stops.",
          "A distance of 600 to 700 kilometres is long enough that most travellers, regardless of vehicle, benefit from at least one proper rest stop — not because the route is difficult, but because seven-plus hours of continuous driving is tiring for anyone.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Crossing at Nuwaiseeb / Khafji",
        paragraphs: [
          "Nuwaiseeb, on the Kuwaiti side, and Khafji, on the Saudi side, form the sole land crossing between the two countries — every vehicle on this route passes through this single point. This is a standard land border, not an island-based one-stop facility, and processing time genuinely varies by traffic and vehicle checks on the day.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination and the vehicle for the whole journey",
          "Route planning and rest stops for the long southbound drive",
          "A fixed price agreed before you travel",
        ],
        authorityControlsLabel: "What Saudi and Kuwaiti authorities control",
        authorityControls: [
          "Saudi entry and Kuwaiti exit immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Nuwaiseeb/Khafji runs on the day",
        ],
        documentsNote: "Passport and visa requirements differ by nationality and are subject to change — confirming current requirements before you travel is the traveller's own responsibility.",
      },
      {
        type: "scenarios",
        heading: "Who This Journey Works For",
        items: [
          { title: "Families and groups", description: "One vehicle for the whole distance, with rest stops planned in rather than treated as lost time." },
          { title: "Business travellers with luggage", description: "A door-to-door option that avoids checked-baggage limits for a genuine full-day undertaking." },
          { title: "Travellers without a flight option", description: "No direct short-haul flight schedule was verified for this specific city pair at the time of writing — road remains the practical option for many." },
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car", bestFor: "Door-to-door travel without a vehicle change at the border", advantage: "One vehicle for the full route, flexible timing", limitation: "A genuine full-day undertaking" },
          { mode: "Self-driving", bestFor: "Travellers with their own vehicle and valid cross-border documentation", advantage: "Full independence", limitation: "Subject to the same border requirements as any other vehicle" },
        ],
        note: "No scheduled public transport service covering this exact route was verified for this page.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Confirm your exact Kuwait City starting address",
          "Check current Saudi entry requirements for your nationality",
          "Plan at least one rest stop across the drive",
          "Build in a genuine buffer for the border crossing",
          "Confirm your specific Riyadh destination in advance",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Riyadh to Kuwait City distance guide", href: "/distance/riyadh-to-kuwait-city-distance" },
          { label: "Dammam to Kuwait City distance guide", href: "/distance/dammam-to-kuwait-city-distance" },
          { label: "Kuwait City to Riyadh private transfer service", href: "/routes/kuwait-city-to-riyadh" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Kuwait City to Riyadh private transfer",
        linkPath: "/routes/kuwait-city-to-riyadh",
      },
    ],
    faqs: [
      { question: "How far is Riyadh from Kuwait City by road?", answer: "Independent sources disagree, with figures ranging from around 636 to 718 kilometres. This page uses a working range of roughly 600 to 700 km rather than a single precise figure." },
      { question: "How long is the drive?", answer: "Driving time alone is estimated at roughly six and a half to seven hours, not including time at the Nuwaiseeb/Khafji border, which is a separate and variable factor." },
      { question: "Does border processing affect the journey?", answer: "Yes, significantly on a route this length. We don't state an exact processing time since it depends on traffic and vehicle checks on the day, but it should be budgeted for as a real addition to the driving time above." },
      { question: "Is the road distance different depending on where I start in Kuwait City?", answer: "Yes. Kuwait City covers a wide area, and your specific starting address changes the real distance to the Nuwaiseeb border by a meaningful margin on a route this long." },
      { question: "Is it better to fly or drive this route?", answer: "No direct short-haul flight schedule between these two specific cities was verified for this page — for most travellers, the road journey is the practical option, planned as a full day." },
      { question: "Who handles the border paperwork on a private transfer?", answer: "A private transfer arranges the vehicle, route and timing, but immigration and visa eligibility decisions belong to Saudi and Kuwaiti border officials — not to the transfer company." },
    ],
    sources: [
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      { label: "Al-Khafji — Wikipedia", url: "https://en.wikipedia.org/wiki/Al-Khafji" },
      { label: "Al-Nuwaiseeb — Wikipedia", url: "https://en.wikipedia.org/wiki/Al-Nuwaiseeb" },
    ],
  },

  {
    slug: "dammam-airport-to-khafji-border-distance",
    from: "Dammam Airport",
    to: "Khafji Border",
    h1: "Dammam Airport to Khafji Border: The Airport-to-Border-Town Leg",
    metaTitle: "Dammam Airport to Khafji Border Journey Guide (KM + Route)",
    metaDescription: "How far is Khafji from King Fahd International Airport? Verified driving distance, a stage-by-stage journey guide, and what changes if you're continuing into Kuwait.",
    eyebrow: "Airport-to-Border-Town Guide",
    dek: "This journey ends at Khafji town itself — not at the crossing, and not inside Kuwait. Continuing onward is a separate step.",
    lastVerified: "2026-08-27",
    stats: [
      { label: "Road distance", value: "~270-285 km" },
      { label: "Pure driving time", value: "~2h45m-3h", emphasis: true },
      { label: "Destination", value: "Khafji town (Saudi side)" },
      { label: "Journey type", value: "Airport to border town" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave the Airport",
        items: [
          "Confirm whether your actual destination is Khafji town or the border crossing/Kuwait itself — they are not the same distance.",
          "Factor in your flight's actual arrival time and any airport formalities before the road journey begins.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "The route to Khafji town, the nearest reference point to the border crossing. The crossing facility itself sits a short distance further.",
        origin: "King Fahd International Airport, Saudi Arabia",
        destination: "Khafji, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "How the Journey Unfolds",
        steps: [
          { label: "Departure from King Fahd International Airport", detail: "Directly from the airport's arrivals area, without needing to drive into Dammam first." },
          { label: "Northbound on Highway 95", detail: "The same corridor used for the longer Dammam-to-Kuwait-City route." },
          { label: "Approaching Khafji", detail: "The final stretch brings you to Khafji town, the Saudi settlement nearest the border." },
          { label: "Arrival at the border area", detail: "Khafji itself is the destination — continuing into Kuwait is a separate onward step." },
        ],
      },
      {
        type: "roadReality",
        heading: "What the Road Is Actually Like",
        paragraphs: [
          "King Fahd International Airport doesn't sit inside Dammam — it's built on a large dedicated site outside the city, closer to the highway heading north than to Dammam's own centre. Starting the trip from the airport is a genuinely shorter leg than starting from a Dammam city address would be.",
          "Highway 95 is a long, largely open corridor for this entire leg — a straightforward but genuinely multi-hour drive rather than a short transfer.",
        ],
      },
      {
        type: "arrivalPanel",
        heading: "Khafji Is the Border Town, Not the Crossing Itself",
        paragraphs: [
          "Khafji is the Saudi settlement closest to the Kuwait border, and the crossing itself — opposite Nuwaiseeb on the Kuwaiti side — sits a short distance beyond the town. If your actual destination is the crossing facility or a point inside Kuwait, budget a little extra distance and time beyond this airport-to-Khafji figure.",
          "We do not state a border-processing time here since this route's destination is Khafji itself, not the crossing — see our Khafji Border to Dammam Airport and Kuwait City guides for the onward legs.",
        ],
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Confirm your real destination — Khafji town, the crossing, or Kuwait itself",
          "Factor in your flight's arrival time before the road journey begins",
          "If continuing into Kuwait, add the border crossing and onward distance separately",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Khafji Border to Dammam Airport distance guide", href: "/distance/khafji-border-to-dammam-airport-distance" },
          { label: "Dammam to Kuwait Airport distance guide", href: "/distance/dammam-to-kuwait-airport-distance" },
          { label: "Dammam to Kuwait City distance", href: "/distance/dammam-to-kuwait-city-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dammam Airport to Khafji Border private transfer",
        linkPath: "/routes/dammam-airport-to-khafji-border",
      },
    ],
    faqs: [
      { question: "How far is Khafji Border from Dammam Airport?", answer: "Approximately 270 to 285 kilometres, based on the available sources for this specific leg." },
      { question: "How long is the drive from King Fahd International Airport?", answer: "Roughly two hours forty-five minutes to three hours of driving under normal conditions, via Highway 95." },
      { question: "Is Khafji Border the same destination as Kuwait City?", answer: "No. Khafji is the Saudi border town; Kuwait City is considerably further, across the border and along a separate onward route. This page covers the airport-to-Khafji leg only." },
      { question: "Does this route cross into Kuwait?", answer: "No. This journey ends at Khafji town on the Saudi side. Crossing the border is a separate onward step with its own distance and border-processing time." },
      { question: "Why does the airport make this shorter than a Dammam-city departure?", answer: "King Fahd International Airport sits outside Dammam on its own site, closer to the highway heading north than the city centre is, so starting here is a genuinely shorter leg." },
    ],
    sources: [
      { label: "Khafji — Wikipedia", url: "https://en.wikipedia.org/wiki/Khafji" },
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
    ],
  },

  {
    slug: "khafji-border-to-dammam-airport-distance",
    from: "Khafji Border",
    to: "Dammam Airport",
    h1: "Khafji Border to Dammam Airport: Planning Around Your Flight",
    metaTitle: "Khafji Border to Dammam Airport Journey Guide (KM + Route)",
    metaDescription: "How far is King Fahd International Airport from Khafji? Verified driving distance, a journey guide, and how much buffer to allow before a flight.",
    eyebrow: "Border-Town-to-Airport Guide",
    dek: "The reverse of the airport-to-Khafji leg — this time, the planning question is buffer before your flight, not just driving time.",
    lastVerified: "2026-08-27",
    stats: [
      { label: "Road distance", value: "~270-285 km" },
      { label: "Pure driving time", value: "~2h45m-3h", emphasis: true },
      { label: "Plan around", value: "Your flight's check-in time", emphasis: true },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Khafji",
        items: [
          "If you're crossing the border from Kuwait before this leg starts, treat that crossing as a separate, unpredictable stage that eats into your buffer.",
          "Confirm which terminal you need at King Fahd International Airport before you set off.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "The route from Khafji town south to the airport. If starting from the border crossing itself, your actual starting point is a short distance further north.",
        origin: "Khafji, Saudi Arabia",
        destination: "King Fahd International Airport, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "How the Journey Unfolds",
        steps: [
          { label: "Departure from Khafji", detail: "Or, if crossing from Kuwait first, from the border crossing itself just north of it." },
          { label: "Southbound on Highway 95", detail: "The same coastal highway corridor south along the Eastern Province." },
          { label: "Approaching Dammam", detail: "The route stays on the highway network rather than routing through central Dammam." },
          { label: "Arrival at King Fahd International Airport", detail: "The airport sits outside the city on its own site — allow buffer before check-in." },
        ],
        note: "If a flight follows this drive, treat the airport arrival as needing its own buffer on top of the driving time.",
      },
      {
        type: "timingReality",
        heading: "Timing Reality",
        pureDriving: "~2h45m-3h",
        factors: [
          "If a flight follows, add your airline's recommended check-in time on top of the driving estimate",
          "If crossing from Kuwait first, add the Nuwaiseeb/Khafji crossing as a separate, unpredictable stage",
          "Avoid scheduling a tight connection off the back of this drive — the length leaves less margin than a short in-city transfer",
        ],
      },
      {
        type: "roadReality",
        heading: "A Border-to-Airport Leg, Usually Made Against a Flight",
        paragraphs: [
          "Travellers making this specific journey are very often doing so to catch a flight, whether departing Saudi Arabia after crossing from Kuwait, or connecting onward domestically. The relevant planning question isn't just 'how long is the drive,' but 'how much total buffer do I need before check-in.'",
          "The airport sits outside Dammam on a large dedicated site, so this route stays on the highway network the whole way, keeping the drive itself relatively predictable once clear of the border area.",
        ],
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Confirm your terminal at King Fahd International Airport in advance",
          "Add your airline's recommended check-in buffer to the driving estimate",
          "If crossing from Kuwait first, budget separate time for that crossing",
          "Avoid booking a tight onward connection off this drive",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Dammam Airport to Khafji Border distance guide", href: "/distance/dammam-airport-to-khafji-border-distance" },
          { label: "Kuwait Airport to Dammam distance guide", href: "/distance/kuwait-airport-to-dammam-distance" },
          { label: "Kuwait City to Dammam distance", href: "/distance/kuwait-city-to-dammam-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Khafji Border to Dammam Airport private transfer",
        linkPath: "/routes/khafji-border-to-dammam-airport",
      },
    ],
    faqs: [
      { question: "How far is Dammam Airport from Khafji Border?", answer: "Approximately 270 to 285 kilometres — the same distance as the reverse direction, based on the available sources for this specific leg." },
      { question: "How much time should I allow before a flight?", answer: "We can't give an exact number since it depends on your airline's specific requirements, but given the roughly three-hour drive itself, most travellers build in a meaningful buffer beyond the driving time." },
      { question: "Is the driving time the same as total journey time?", answer: "No. The driving estimate covers the road only. If crossing from Kuwait first, add the border crossing time separately, and if a flight follows, add check-in and security time on top." },
      { question: "Does this route start at the border crossing or at Khafji town?", answer: "This page measures from Khafji town. If your actual starting point is the crossing facility itself, it sits a short distance further north." },
      { question: "Is there a public transport option for this leg?", answer: "No scheduled public transport service covering this exact route was verified for this page; a private car or self-driving are the practical options." },
    ],
    sources: [
      { label: "Khafji — Wikipedia", url: "https://en.wikipedia.org/wiki/Khafji" },
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
    ],
  },

  {
    slug: "dammam-to-kuwait-airport-distance",
    from: "Dammam",
    to: "Kuwait Airport",
    h1: "Dammam to Kuwait Airport: Distance, Border Crossing & Flight Planning",
    metaTitle: "Dammam to Kuwait Airport Journey Guide (KM + Border)",
    metaDescription: "How far is Kuwait International Airport from Dammam? Verified driving distance, the Khafji/Nuwaiseeb border crossing, and how to plan around a flight.",
    eyebrow: "City-to-Airport Cross-Border Guide",
    dek: "Sources for this specific leg disagree meaningfully — plan around a wide range rather than a single figure, and add real buffer for a flight.",
    lastVerified: "2026-08-27",
    stats: [
      { label: "Road distance", value: "~390-470 km" },
      { label: "Pure driving time", value: "~4-5 hrs", emphasis: true },
      { label: "Border crossing", value: "Khafji / Nuwaiseeb" },
      { label: "Airport location", value: "~15.5 km south of Kuwait City" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Dammam",
        items: [
          "Given the source disagreement on distance, plan your timing around the longer end of the range (up to ~470 km / ~5 hours).",
          "Confirm your specific terminal at Kuwait International Airport before departure.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "A typical driving route. Your actual distance depends on your exact Dammam address and current road conditions across the border.",
        origin: "Dammam, Saudi Arabia",
        destination: "Kuwait International Airport, Kuwait",
      },
      {
        type: "stages",
        heading: "How the Journey Unfolds",
        steps: [
          { label: "Departure from Dammam", detail: "From your specific address — a hotel, office, or residential area." },
          { label: "Northbound on Highway 95", detail: "The length of the Eastern Province coast toward the Kuwaiti border." },
          { label: "Border crossing at Khafji / Nuwaiseeb", detail: "Saudi exit and Kuwaiti entry formalities at the sole land crossing." },
          { label: "Approach to Kuwait International Airport", detail: "South of central Kuwait City — reached before the city centre on this approach." },
          { label: "Arrival at the airport", detail: "Confirm your terminal in advance." },
        ],
        note: "We separate driving time from border-crossing time deliberately — the driving estimate does not include the border, the least predictable stage of this journey.",
      },
      {
        type: "roadReality",
        heading: "The Airport, Not the City, Is the Real Destination Here",
        paragraphs: [
          "Dammam to Kuwait International Airport is a distinct trip from Dammam to Kuwait City in one specific way: the airport sits about 15.5 kilometres south of the city centre, meaning a traveller headed specifically to the airport doesn't need to drive all the way into Kuwait City first.",
          "One route-planning tool puts the airport-specific distance at around 392 kilometres, while general Dammam-to-Kuwait figures for this corridor run closer to 470 kilometres. Neither figure comes from an official government or airport source, so we present this as a genuine range.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Khafji / Nuwaiseeb: the Only Land Crossing on This Route",
        paragraphs: [
          "This journey crosses at Khafji on the Saudi side and Nuwaiseeb on the Kuwaiti side — the sole land border between the two countries. Because a flight typically follows this journey, the unpredictable nature of border-crossing time matters more here than it would on a trip with no time-sensitive endpoint.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination and the vehicle for the whole journey",
          "Route planning and rest stops for the long northern drive",
          "Flight tracking, where the pickup or drop-off is an airport",
        ],
        authorityControlsLabel: "What Saudi and Kuwaiti authorities control",
        authorityControls: [
          "Saudi exit and Kuwaiti entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Khafji/Nuwaiseeb runs on the day",
        ],
        documentsNote: "Kuwaiti entry and customs requirements vary by nationality and change over time — confirm current rules with official Kuwaiti sources before travelling.",
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car", bestFor: "Door-to-door to the airport terminal, timed around a flight", advantage: "No vehicle change at the border", limitation: "A genuine multi-hour drive plus the border" },
          { mode: "Self-driving", bestFor: "Travellers with their own vehicle and valid cross-border documentation", advantage: "Full independence", limitation: "Subject to standard border requirements" },
        ],
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Plan around the longer end of the distance range (~470 km / ~5 hours)",
          "Add a generous buffer for the Khafji/Nuwaiseeb border crossing",
          "Add your airline's recommended check-in time once at the airport",
          "Confirm your specific terminal at Kuwait International Airport",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Kuwait Airport to Dammam distance guide", href: "/distance/kuwait-airport-to-dammam-distance" },
          { label: "Dammam to Kuwait City distance", href: "/distance/dammam-to-kuwait-city-distance" },
          { label: "Dammam Airport to Khafji Border distance guide", href: "/distance/dammam-airport-to-khafji-border-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dammam to Kuwait Airport private transfer",
        linkPath: "/routes/dammam-to-kuwait-airport",
      },
    ],
    faqs: [
      { question: "How far is Kuwait International Airport from Dammam?", answer: "Sources disagree meaningfully — figures range from around 390 to 470 kilometres. We present this as a genuine range rather than a single figure given the lack of an authoritative source." },
      { question: "How long is the road journey?", answer: "Roughly four to five hours of driving, not including time at the Khafji/Nuwaiseeb border crossing, which is a separate and variable factor." },
      { question: "Should border processing be included when planning a flight?", answer: "Yes. Border-crossing time is unpredictable and should be budgeted as additional time on top of both the driving estimate and your airline's check-in requirements." },
      { question: "Is the airport closer to the border than Kuwait City centre?", answer: "Yes — the airport sits about 15.5 km south of central Kuwait City, so a traveller headed there doesn't need to drive into the city first." },
      { question: "Who is responsible for visa approval at the border?", answer: "Saudi and Kuwaiti border officials make immigration and visa-eligibility decisions — a private transfer arranges the journey but does not control entry decisions." },
    ],
    sources: [
      { label: "Kuwait International Airport — Wikipedia", url: "https://en.wikipedia.org/wiki/Kuwait_International_Airport" },
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      { label: "Al-Khafji — Wikipedia", url: "https://en.wikipedia.org/wiki/Al-Khafji" },
    ],
  },

  {
    slug: "kuwait-airport-to-dammam-distance",
    from: "Kuwait Airport",
    to: "Dammam",
    h1: "Kuwait Airport to Dammam: Landing, Then a Long Cross-Border Drive",
    metaTitle: "Kuwait Airport to Dammam Journey Guide (KM + Border)",
    metaDescription: "How far is Dammam from Kuwait International Airport? Verified driving distance, the Nuwaiseeb/Khafji border crossing, and honest journey-planning advice.",
    eyebrow: "Airport-to-City Cross-Border Guide",
    dek: "Starting from Kuwait International Airport is a slightly more direct approach to the border than starting from central Kuwait City.",
    lastVerified: "2026-08-27",
    stats: [
      { label: "Road distance", value: "~390-470 km" },
      { label: "Pure driving time", value: "~4-5 hrs", emphasis: true },
      { label: "Border crossing", value: "Nuwaiseeb / Khafji" },
      { label: "Airport location", value: "~15.5 km south of Kuwait City" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "After You Land",
        items: [
          "Build in time for standard international arrival procedures — immigration and baggage claim — before the road journey even begins.",
          "Plan around the higher end of the distance range (up to ~470 km) rather than assuming the shorter figure.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "A typical driving route. Your actual distance depends on your specific Dammam destination and current road conditions across the border.",
        origin: "Kuwait International Airport, Kuwait",
        destination: "Dammam, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "How the Journey Unfolds",
        steps: [
          { label: "Arrival and departure from Kuwait International Airport", detail: "The road journey begins directly from the airport, without routing through central Kuwait City first." },
          { label: "Southbound toward the border", detail: "A more direct line than a city-centre departure would allow." },
          { label: "Border crossing at Nuwaiseeb / Khafji", detail: "Kuwaiti exit and Saudi entry formalities at the sole land crossing." },
          { label: "Southbound on Highway 95", detail: "The Eastern Province coastal highway toward Dammam." },
          { label: "Arrival in Dammam", detail: "The exact final distance depends on your specific destination within the city." },
        ],
        note: "International arrivals typically involve immigration and baggage claim before the road journey even starts.",
      },
      {
        type: "roadReality",
        heading: "Landing, Then a Long Cross-Border Drive",
        paragraphs: [
          "For travellers landing at Kuwait International Airport with Dammam as their onward destination, this is a genuinely long journey to plan around an international arrival — clearing immigration and baggage first, then a multi-hour drive that includes a land border crossing.",
          "Because the airport sits south of central Kuwait City, roughly in the direction of Saudi Arabia, this route is a somewhat more direct approach to the border than starting from downtown would be.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Nuwaiseeb / Khafji: the Crossing After a Long Flight",
        paragraphs: [
          "This journey crosses at Nuwaiseeb on the Kuwaiti side and Khafji on the Saudi side — the only land border between the two countries. Coming directly off an international flight, this is worth planning for specifically.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Meeting you at the airport and tracking your flight",
          "Pickup coordination and the vehicle for the full journey",
          "Route planning and rest stops for the southbound drive",
        ],
        authorityControlsLabel: "What Saudi and Kuwaiti authorities control",
        authorityControls: [
          "Kuwaiti exit and Saudi entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Nuwaiseeb/Khafji runs on the day",
        ],
        documentsNote: "Travel document and visa requirements differ by nationality and are subject to change. Confirming current requirements for your specific passport before travelling is the traveller's own responsibility.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Build in time for immigration and baggage claim on arrival",
          "Add a genuine buffer for the Nuwaiseeb/Khafji border crossing",
          "Plan around the higher end of the distance range (~470 km)",
          "Confirm your specific Dammam destination in advance",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Dammam to Kuwait Airport distance guide", href: "/distance/dammam-to-kuwait-airport-distance" },
          { label: "Kuwait City to Dammam distance", href: "/distance/kuwait-city-to-dammam-distance" },
          { label: "Khafji Border to Dammam Airport distance guide", href: "/distance/khafji-border-to-dammam-airport-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Kuwait Airport to Dammam private transfer",
        linkPath: "/routes/kuwait-airport-to-dammam",
      },
    ],
    faqs: [
      { question: "How far is Dammam from Kuwait Airport?", answer: "Sources disagree meaningfully — figures range from around 390 to 470 kilometres. We present this as a range rather than a single precise figure." },
      { question: "How long does the drive take?", answer: "Roughly four to five hours of driving, not including time at the Nuwaiseeb/Khafji border crossing." },
      { question: "Why can total journey time vary?", answer: "Because the border-crossing stage is genuinely unpredictable, varying with traffic and vehicle checks on the day. It sits on top of the driving estimate and, for arriving flights, on top of immigration and baggage claim as well." },
      { question: "Is starting from the airport faster than from Kuwait City centre?", answer: "Marginally more direct — the airport sits south of the city centre, roughly toward the Saudi border, so the approach is somewhat shorter than a downtown departure." },
      { question: "Can a private transfer meet me at arrivals?", answer: "Yes — a pre-arranged private transfer can track your flight and meet you at the terminal, though it cannot influence immigration processing itself." },
    ],
    sources: [
      { label: "Kuwait International Airport — Wikipedia", url: "https://en.wikipedia.org/wiki/Kuwait_International_Airport" },
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
    ],
  },

  // ── Qatar cluster ────────────────────────────────────────────────────────
  {
    slug: "dammam-airport-to-doha-distance",
    from: "Dammam Airport",
    to: "Doha",
    h1: "Dammam Airport to Doha: A Cross-Border Journey, Not a Local Hop",
    metaTitle: "Dammam Airport to Doha Journey Guide (KM + Driving Time)",
    metaDescription: "How far is Doha from Dammam Airport? Verified road distance, the Salwa border crossing, and why total journey time and driving time are different numbers.",
    eyebrow: "Airport-Arrival Journey Guide",
    dek: "This measures the distance from King Fahd International Airport to Doha — a genuine cross-border road journey, not a quick local hop.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~420 km" },
      { label: "Pure driving time", value: "~4.5-5 hrs", emphasis: true },
      { label: "Border crossing", value: "Salwa / Abu Samra" },
      { label: "Starting point", value: "King Fahd International Airport" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave the Airport",
        items: [
          "Remember that this figure measures from the airport specifically — a central-Dammam departure covers a slightly different distance.",
          "If arriving on an international flight, factor in immigration and baggage claim time before the road journey even starts.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual route and total distance will vary depending on your specific Doha destination and current road/border conditions.",
        origin: "King Fahd International Airport, Saudi Arabia",
        destination: "Doha, Qatar",
      },
      {
        type: "stages",
        heading: "How the Journey Unfolds",
        steps: [
          { label: "Airport arrival", detail: "The measured journey begins at King Fahd International Airport's arrivals area." },
          { label: "Airport departure point", detail: "The road journey starts directly from the airport site, not from Dammam city." },
          { label: "Eastern Province road journey", detail: "South along the Eastern Province highway network toward the Qatari border." },
          { label: "Saudi-Qatar border (Salwa / Abu Samra)", detail: "Saudi exit and Qatari entry formalities at the sole land crossing." },
          { label: "Qatar road journey", detail: "Once across, the route continues into Qatar toward Doha." },
          { label: "Doha arrival", detail: "The final distance depends on your specific destination within the city." },
        ],
        note: "This breakdown separates the journey into its real stages — we don't state a single total journey time, since the border stage is inherently variable.",
      },
      {
        type: "roadReality",
        heading: "From King Fahd Airport to Doha: Understanding the Journey",
        paragraphs: [
          "What makes this route distinct from a general Dammam-to-Doha distance is simply the starting point. King Fahd International Airport is a large, self-contained site well outside Dammam's city centre, closer to the highway network heading south than to the city itself.",
          "The route runs the length of the Eastern Province coast before reaching the Salwa crossing, which reopened in January 2021 after several years of closure during the Gulf-wide travel restrictions that began in 2017.",
        ],
      },
      {
        type: "timingReality",
        heading: "Timing Reality",
        pureDriving: "~4.5-5 hrs",
        factors: [
          "Weekends and public holidays see busier crossings — a weekday crossing may be more predictable if your schedule is flexible",
          "Reports from travellers describe anywhere from under an hour during quiet periods to several hours at busy times",
        ],
        note: "No legitimate source can honestly promise a fixed border-processing duration — it depends on the day, the time, and how busy the crossing is when you arrive.",
      },
      {
        type: "borderPanel",
        heading: "What Happens After You Leave the Airport",
        paragraphs: [
          "After the drive south from the airport, the journey reaches the Salwa border on the Saudi side, opposite Abu Samra on the Qatari side — the only land crossing between the two countries.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination directly from the airport, with flight tracking",
          "Route planning and rest stops for the desert drive",
          "A fixed price agreed before you travel",
        ],
        authorityControlsLabel: "What Saudi and Qatari authorities control",
        authorityControls: [
          "Saudi exit and Qatari entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Salwa runs on the day",
        ],
        documentsNote: "Visa and entry requirements vary by nationality and are updated from time to time. Confirm current requirements with official Qatari sources before travelling.",
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car", bestFor: "Airport pickup with no vehicle change at the border", advantage: "Direct from arrivals to Doha", limitation: "A genuine multi-hour cross-border drive" },
          { mode: "Self-driving", bestFor: "Travellers with a rental vehicle and valid cross-border documentation", advantage: "Full independence", limitation: "Subject to the same border requirements as any other vehicle" },
        ],
        note: "No scheduled public transport service directly covering this specific airport-to-Doha leg was verified for this page.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Confirm whether your figure should be from the airport or central Dammam",
          "Build in immigration and baggage-claim time if arriving internationally",
          "Add a flexible buffer for the Salwa border crossing",
          "Prefer a weekday crossing if your schedule allows it",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Doha to Dammam Airport distance guide", href: "/distance/doha-to-dammam-airport-distance" },
          { label: "Al Khobar to Doha distance guide", href: "/distance/al-khobar-to-doha-distance" },
          { label: "Riyadh to Doha distance guide", href: "/distance/riyadh-to-doha-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dammam Airport to Doha private transfer",
        linkPath: "/routes/dammam-airport-to-doha",
      },
    ],
    faqs: [
      { question: "How far is Doha from Dammam Airport?", answer: "Approximately 420 kilometres by road, measured from King Fahd International Airport specifically rather than from central Dammam." },
      { question: "How long does the drive take?", answer: "Pure driving time is roughly four and a half to five hours in free-flowing conditions. This does not include the Salwa/Abu Samra border crossing, which is a separate and genuinely variable stage." },
      { question: "Is the driving distance the same as the total journey time?", answer: "No. Total journey time also includes the border crossing, and we don't state a fixed figure for that stage since it varies significantly by day and time." },
      { question: "Does this distance start from Dammam city or the airport?", answer: "Specifically from King Fahd International Airport, which sits outside Dammam city. A journey starting from central Dammam would cover a slightly different distance." },
      { question: "When did the Salwa border reopen?", answer: "In January 2021, after several years of closure during the Gulf-wide travel restrictions that began in 2017. It now functions as a normal, if variable, land border." },
      { question: "Who decides how long the border crossing takes?", answer: "Saudi and Qatari border officials — a private transfer can time your departure around known peak periods, but cannot control processing time itself." },
    ],
    sources: [
      { label: "Saudi Customs opens Salwa border crossing with Qatar — Arab News", url: "https://www.arabnews.com/node/1789626/saudi-arabia" },
      { label: "King Fahd International Airport — Wikipedia", url: "https://en.wikipedia.org/wiki/King_Fahd_International_Airport" },
    ],
  },

  {
    slug: "doha-to-dammam-airport-distance",
    from: "Doha",
    to: "Dammam Airport",
    h1: "Doha to Dammam Airport: Planning the Drive Around Your Flight",
    metaTitle: "Doha to Dammam Airport Journey Guide – Plan Around Your Flight",
    metaDescription: "How far is Dammam Airport from Doha? Road distance, driving time, and how to plan the drive around your flight given a variable border crossing.",
    eyebrow: "City-Departure Flight-Planning Guide",
    dek: "The number that matters most here is how the distance interacts with your actual flight time, not the distance alone.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~420 km" },
      { label: "Pure driving time", value: "~4.5-5 hrs", emphasis: true },
      { label: "Plan around", value: "Your flight's check-in deadline", emphasis: true },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Doha",
        items: [
          "Work backward from your actual check-in deadline, not forward from a fixed departure time in Doha.",
          "If your flight is early morning or otherwise time-critical, plan for the wider end of the border-time range.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual starting point in Doha and current road/border conditions will affect the real distance and time.",
        origin: "Doha, Qatar",
        destination: "King Fahd International Airport, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "How the Journey Unfolds",
        steps: [
          { label: "Doha departure", detail: "From your specific starting point in Doha." },
          { label: "Qatar road journey", detail: "Heading toward the Abu Samra crossing." },
          { label: "Border processing", detail: "Qatari exit and Saudi entry formalities — duration genuinely varies." },
          { label: "Saudi road journey", detail: "Once across, north through the Eastern Province." },
          { label: "Dammam Airport arrival", detail: "Arrival at the terminal, ahead of check-in." },
        ],
        note: "We separate driving time from border time deliberately — conflating them would understate the real planning risk for a flight.",
      },
      {
        type: "roadReality",
        heading: "Planning the Drive Around Your Flight",
        paragraphs: [
          "The honest way to plan this journey isn't to start with Doha and work forward — it's to start with your flight's departure time and work backward. Airline check-in deadline, minus a reasonable margin at the terminal, minus the roughly four-and-a-half-to-five-hour driving time, minus a genuine buffer for the border crossing, gives you the departure window from Doha that actually protects your flight.",
        ],
      },
      {
        type: "timingReality",
        heading: "Timing Reality",
        pureDriving: "~4.5-5 hrs",
        factors: [
          "Qatari exit and Saudi entry formalities are handled at Abu Samra/Salwa, the sole land border, reopened in January 2021",
          "Reported processing times vary considerably: some pass through in under an hour, others report several hours, particularly at weekends and holidays",
        ],
        note: "Because this journey ends at a flight, this variability deserves more weight in your planning than it would on a leisure trip.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Work backward from your check-in deadline to set a departure time",
          "Treat driving time and border time as two separate additions, not one figure",
          "Confirm your terminal at King Fahd International Airport in advance",
          "Build in extra margin for an early-morning or otherwise time-critical flight",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Dammam Airport to Doha distance guide", href: "/distance/dammam-airport-to-doha-distance" },
          { label: "Doha to Riyadh distance guide", href: "/distance/doha-to-riyadh-distance" },
          { label: "Al Khobar to Doha distance guide", href: "/distance/al-khobar-to-doha-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Doha to Dammam Airport private transfer",
        linkPath: "/routes/doha-to-dammam-airport",
      },
    ],
    faqs: [
      { question: "How far is Dammam Airport from Doha?", answer: "Approximately 420 kilometres by road — the same physical distance as the reverse direction, since it's the same route." },
      { question: "How much total time should I allow before a flight?", answer: "We can't give a single exact figure, since the border-crossing stage is genuinely variable. Add the roughly four-and-a-half-to-five-hour driving time to a generous border buffer, then your airline's recommended check-in time." },
      { question: "Why don't you just give one total journey time?", answer: "Because the border-crossing stage varies too much — from under an hour to several hours — to responsibly compress into a single number without misleading travellers planning a flight around it." },
      { question: "Does the border crossing happen before or after the main drive?", answer: "Before the final stretch to the airport. You cross from Qatar into Saudi Arabia first, then continue driving north through the Eastern Province to reach King Fahd International Airport." },
      { question: "Can a private transfer guarantee I make my flight?", answer: "A private transfer can plan the departure time and route, but border-processing time is controlled by Saudi and Qatari authorities, not the transfer company — building in a genuine buffer is the traveller's responsibility." },
    ],
    sources: [
      { label: "Saudi Customs opens Salwa border crossing with Qatar — Arab News", url: "https://www.arabnews.com/node/1789626/saudi-arabia" },
      { label: "King Fahd International Airport — Wikipedia", url: "https://en.wikipedia.org/wiki/King_Fahd_International_Airport" },
    ],
  },

  {
    slug: "riyadh-to-doha-distance",
    from: "Riyadh",
    to: "Doha",
    h1: "Riyadh to Doha: The Long Road Journey Between Two Capitals",
    metaTitle: "Riyadh to Doha Journey Guide: KM, Driving Time & Road Trip",
    metaDescription: "How far is Doha from Riyadh by road? Verified driving distance, realistic travel time, rest-stop planning, and a neutral road-vs-air comparison.",
    eyebrow: "Long-Distance Journey Guide",
    dek: "One of the longer capital-to-capital road distances in the Gulf — genuinely worth planning as a full-day journey, not a quick regional hop.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~570-600 km" },
      { label: "Pure driving time", value: "~5.5-6.5 hrs", emphasis: true },
      { label: "Border crossing", value: "Salwa / Abu Samra" },
      { label: "Journey type", value: "Capital-to-capital" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Riyadh",
        items: [
          "Treat this as a full-day journey rather than a same-day round trip.",
          "Plan a genuine rest stop across the drive — a break improves the experience meaningfully on a journey this long.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual starting point in Riyadh and current road/border conditions will affect the real distance and time.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Doha, Qatar",
      },
      {
        type: "stages",
        heading: "How the Riyadh to Doha Road Journey Unfolds",
        steps: [
          { label: "Riyadh departure", detail: "From your specific starting point in the capital." },
          { label: "Long-distance Saudi road journey", detail: "South-east across the Saudi interior toward the Eastern Province." },
          { label: "Rest-stop context", detail: "A drive of this length typically involves at least one meaningful break." },
          { label: "Border transition", detail: "Salwa/Abu Samra — the sole land crossing into Qatar." },
          { label: "Qatar road journey", detail: "The final stretch continues into Qatar toward Doha." },
          { label: "Doha arrival", detail: "The last few kilometres depend on your specific destination." },
        ],
        note: "This is a genuinely long single-day drive — we separate it into real stages rather than quoting one total figure.",
      },
      {
        type: "roadReality",
        heading: "What the Road Is Actually Like",
        paragraphs: [
          "This is among the longer capital-to-capital road distances in the Gulf region, and travellers researching it should treat it as a genuine full-day undertaking from the outset rather than a quick regional trip. The route leaves Riyadh heading south-east, crosses a substantial stretch of the Saudi interior, and only reaches the Eastern Province — and from there, the Salwa border — well into the drive.",
          "A journey of 570 to 600 kilometres is long enough that most travellers, regardless of vehicle, benefit from at least one proper rest stop along the way — not because the route is difficult, but because six-plus hours of continuous driving is tiring for anyone. Families travelling with children, elderly relatives, or a full car of luggage tend to find the drive considerably more manageable with breaks built into the plan.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Crossing at Salwa After a Long Drive",
        paragraphs: [
          "By the time the route reaches Salwa — opposite Abu Samra on the Qatari side — most of the physical distance has already been covered. The crossing reopened in January 2021 and now functions as a standard land border for private vehicles.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination and the vehicle for the whole journey",
          "Route planning and rest stops for the desert drive",
          "A fixed price agreed before you travel",
        ],
        authorityControlsLabel: "What Saudi and Qatari authorities control",
        authorityControls: [
          "Saudi exit and Qatari entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Salwa runs on the day",
        ],
        documentsNote: "Requirements vary by nationality and can change, so current rules are worth confirming close to your travel date.",
      },
      {
        type: "scenarios",
        heading: "Who This Journey Works For",
        items: [
          { title: "Families with children or elderly relatives", description: "The drive is considerably more manageable with rest breaks built into the plan rather than treated as lost time." },
          { title: "Groups with a full car of luggage", description: "A door-to-door road trip avoids checked-baggage limits for a genuine full day on the road." },
          { title: "Travellers who value flexibility over speed", description: "No check-in, no baggage limits, and full control over the schedule — at the cost of a much longer total trip than flying." },
        ],
      },
      {
        type: "transportOptions",
        heading: "Road Travel Compared with Flying",
        options: [
          { mode: "Private car", bestFor: "Door-to-door travel without a vehicle change at the border", advantage: "Full flexibility on timing and stops", limitation: "A genuine full-day undertaking" },
          { mode: "Self-driving", bestFor: "Travellers with their own vehicle and valid cross-border documentation", advantage: "Full independence", limitation: "Subject to standard border requirements" },
          { mode: "Flying", bestFor: "Time-sensitive travellers", advantage: "Covers the distance in a fraction of the time", limitation: "This page does not track specific schedules or fares" },
        ],
        note: "Whether road or air suits a given trip better depends on luggage, group size, and how much value you place on a door-to-door journey versus speed.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Treat this as a full-day journey",
          "Plan a genuine rest stop across the drive",
          "Build in a flexible buffer for the Salwa/Abu Samra crossing",
          "Confirm your specific Doha district or destination in advance",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Doha to Riyadh distance guide", href: "/distance/doha-to-riyadh-distance" },
          { label: "Dammam Airport to Doha distance guide", href: "/distance/dammam-airport-to-doha-distance" },
          { label: "Al Khobar to Doha distance guide", href: "/distance/al-khobar-to-doha-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Riyadh to Doha private transfer",
        linkPath: "/routes/riyadh-to-doha",
      },
    ],
    faqs: [
      { question: "How far is Doha from Riyadh by road?", answer: "Approximately 570 to 600 kilometres. Independent sources vary somewhat on the exact figure, so this page uses a working range rather than a single precise number." },
      { question: "How long does the drive take?", answer: "Pure driving time is roughly five and a half to six and a half hours in free-flowing conditions, not including the separate and variable Salwa border crossing." },
      { question: "Is it faster to fly than drive between Riyadh and Doha?", answer: "Flying covers the distance considerably faster in the air. Driving offers a genuine door-to-door journey with no check-in or baggage limits. Which suits a given trip better depends on priorities, luggage, and group size." },
      { question: "Should I plan a rest stop on this drive?", answer: "Most travellers find at least one break genuinely useful on a journey this long, simply because six-plus hours of continuous driving is tiring regardless of road conditions." },
      { question: "Is this a suitable drive for families with children?", answer: "Yes, with planning — building rest breaks into the schedule rather than treating them as lost time makes a meaningful difference on a journey this length." },
      { question: "Who is responsible for border-crossing time?", answer: "Saudi and Qatari border officials — a private transfer can time departure around known peak periods, but cannot control how long processing takes on the day." },
    ],
    sources: [
      { label: "Elated Qataris stream into Saudi after border re-opened — VOA News", url: "https://www.voanews.com/a/middle-east_elated-qataris-stream-saudi-arabia-after-border-re-opened/6200554.html" },
      { label: "Salwa border crossing — Digital Logistics Capacity Assessments", url: "https://www.lca.logcluster.org/235-saudi-arabia-border-crossing-salwa-qatar" },
    ],
  },

  {
    slug: "doha-to-riyadh-distance",
    from: "Doha",
    to: "Riyadh",
    h1: "Doha to Riyadh: Crossing Into Saudi Arabia First, Then the Long Drive",
    metaTitle: "Doha to Riyadh Journey Guide: KM, Driving Time & Border Info",
    metaDescription: "How far is Riyadh from Doha by road? Same long distance as the reverse trip, but the border comes first — driving time, planning tips, and route facts.",
    eyebrow: "Cross-Border Capital Journey Guide",
    dek: "The same long distance as the reverse direction, but the border comes first here — once through, the rest of the drive is one uninterrupted stretch.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~570-600 km" },
      { label: "Pure driving time", value: "~5.5-6.5 hrs", emphasis: true },
      { label: "Border crossing", value: "Abu Samra / Salwa" },
      { label: "Journey type", value: "Cross-border to the capital" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Doha",
        items: [
          "Confirm your specific Riyadh destination in advance — the city-to-city figure doesn't capture the final local distance to a precise address.",
          "If your trip continues by air from Riyadh, budget the time to reach King Khalid International Airport as an additional leg.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual Riyadh destination and current road/border conditions will affect the real distance and time.",
        origin: "Doha, Qatar",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "Driving from Doha to Riyadh",
        steps: [
          { label: "Doha departure", detail: "From your specific starting point in Doha." },
          { label: "Qatar road journey", detail: "A short stretch toward the Abu Samra crossing." },
          { label: "Border transition", detail: "Qatari exit and Saudi entry formalities — the first major stage of this direction." },
          { label: "Long-distance Saudi road journey", detail: "Once across, a substantial, uninterrupted drive north-west across the interior." },
          { label: "Riyadh approach", detail: "The city's outskirts, still some distance from most central destinations." },
          { label: "Final destination", detail: "The exact distance depends heavily on where in Riyadh you're headed." },
        ],
        note: "Because the border sits early in this direction, the back half of the journey is one continuous drive — a different rhythm from the reverse trip.",
      },
      {
        type: "roadReality",
        heading: "Driving from Doha to Riyadh",
        paragraphs: [
          "Leaving Doha, the drive to the Abu Samra crossing is a relatively short opening stretch compared to what follows — the bulk of this journey happens on the Saudi side, after the border. That is a meaningful structural difference from the Riyadh-to-Doha direction, where the crossing is the last major stage before arrival rather than the first.",
          "Once across into Saudi Arabia, the route settles into a long, straightforward highway drive across the interior toward Riyadh — a genuinely long single stretch once the border is behind you, without another major stage to clear before the capital.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Crossing from Qatar into Saudi Arabia",
        paragraphs: [
          "Abu Samra, on the Qatari side, and Salwa, on the Saudi side, together form the only land border between the two countries. It reopened in January 2021, and functions today as a standard crossing for private vehicles.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination and the vehicle for the whole journey",
          "Route planning for the long Saudi-side stretch that follows",
          "A fixed price agreed before you travel",
        ],
        authorityControlsLabel: "What Saudi and Qatari authorities control",
        authorityControls: [
          "Qatari exit and Saudi entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Abu Samra/Salwa runs on the day",
        ],
        documentsNote: "A valid passport and any Saudi visa or entry permit relevant to your nationality are required; requirements vary and can change.",
      },
      {
        type: "arrivalPanel",
        heading: "Why the Final Distance Can Vary Within Riyadh",
        paragraphs: [
          "Riyadh is a large, spread-out city — a hotel in the business district, a residential compound, and King Khalid International Airport are all genuinely different distances from the point where the highway enters the city.",
          "Because the border comes early in this direction, a delay there has more time to be absorbed over the following long drive than it would on the reverse trip, where the crossing is the final stage.",
        ],
      },
      {
        type: "transportOptions",
        heading: "Ways to Make the Journey",
        options: [
          { mode: "Private car", bestFor: "Door-to-door to a specific Riyadh address", advantage: "No vehicle change at the border", limitation: "A genuine full-day undertaking" },
          { mode: "Self-driving", bestFor: "Travellers with their own vehicle and valid cross-border documentation", advantage: "Full independence", limitation: "Subject to standard border requirements" },
          { mode: "Flying", bestFor: "Time-sensitive travellers", advantage: "Covers the distance considerably faster", limitation: "This page does not track specific schedules or fares" },
        ],
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Confirm your specific Riyadh destination in advance",
          "Budget extra time if continuing onward from King Khalid International Airport",
          "Build in a buffer for the Abu Samra/Salwa crossing near the start of your day",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Riyadh to Doha distance guide", href: "/distance/riyadh-to-doha-distance" },
          { label: "Doha to Dammam Airport distance guide", href: "/distance/doha-to-dammam-airport-distance" },
          { label: "Al Khobar to Doha distance guide", href: "/distance/al-khobar-to-doha-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Doha to Riyadh private transfer",
        linkPath: "/routes/doha-to-riyadh",
      },
    ],
    faqs: [
      { question: "How far is Riyadh from Doha by road?", answer: "Approximately 570 to 600 kilometres, the same physical route as the reverse direction, though sources vary somewhat on the precise figure." },
      { question: "Does the border crossing happen at the start or end of this journey?", answer: "At the start, shortly after leaving Doha. Once through the Abu Samra/Salwa crossing, the remainder of the trip is a single long drive across Saudi Arabia to Riyadh." },
      { question: "Why does the final distance within Riyadh vary?", answer: "Riyadh is a large, spread-out city, so a hotel, a residential address, and the airport can all be meaningfully different distances from where the highway reaches the city." },
      { question: "How long is the drive once you're across the border?", answer: "The bulk of the roughly five-and-a-half-to-six-and-a-half-hour driving estimate happens on the Saudi side, since the border sits near the start of this direction rather than the end." },
      { question: "Does a border delay affect this direction differently than the reverse trip?", answer: "Yes — because the crossing happens early here, a longer wait has the rest of the long Saudi-side drive to be absorbed into, unlike the reverse direction where a delay is the last thing before arrival." },
    ],
    sources: [
      { label: "Elated Qataris stream into Saudi after border re-opened — VOA News", url: "https://www.voanews.com/a/middle-east_elated-qataris-stream-saudi-arabia-after-border-re-opened/6200554.html" },
      { label: "Salwa border crossing — Digital Logistics Capacity Assessments", url: "https://www.lca.logcluster.org/235-saudi-arabia-border-crossing-salwa-qatar" },
    ],
  },

  {
    slug: "al-khobar-to-doha-distance",
    from: "Al Khobar",
    to: "Doha",
    h1: "Al Khobar to Doha: The Shorter Eastern Province Route to Qatar",
    metaTitle: "Al Khobar to Doha Journey Guide: KM & Driving Time",
    metaDescription: "How far is Doha from Al Khobar by road? Verified driving distance, why it's shorter than the Riyadh route, and honest border-crossing guidance.",
    eyebrow: "Regional Cross-Border Guide",
    dek: "One of the shorter Doha crossings from Saudi Arabia — Al Khobar already sits well down the Eastern Province coast toward the border.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~400-420 km" },
      { label: "Pure driving time", value: "~4.5-5.5 hrs", emphasis: true },
      { label: "Border crossing", value: "Salwa / Abu Samra" },
      { label: "Starting point", value: "Al Khobar & wider Eastern Province" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Al Khobar",
        items: [
          "Confirm your exact starting address — Al Khobar's coastline spans a fairly wide area, and this affects the real distance meaningfully.",
          "Because the border makes up a larger share of this shorter route, build in a proportionally generous buffer for the crossing.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your exact starting point within Al Khobar and current road/border conditions will affect the real distance and time.",
        origin: "Al Khobar, Saudi Arabia",
        destination: "Doha, Qatar",
      },
      {
        type: "stages",
        heading: "How the Journey Unfolds",
        steps: [
          { label: "Al Khobar departure", detail: "From the Corniche, the business district, or further out." },
          { label: "Eastern Province journey", detail: "South along the coast toward the Qatari border." },
          { label: "Saudi-Qatar border", detail: "Salwa (Saudi) / Abu Samra (Qatar) — the sole land crossing." },
          { label: "Qatar road journey", detail: "Once across, the route continues into Qatar toward Doha." },
          { label: "Doha arrival", detail: "The final distance depends on your specific destination within the city." },
        ],
        note: "Because this is a shorter route than the Riyadh journey, the border crossing makes up a proportionally larger share of the total trip.",
      },
      {
        type: "roadReality",
        heading: "Leaving Al Khobar for Qatar",
        paragraphs: [
          "Al Khobar's position on the Eastern Province coast, well south of Dammam and considerably closer to the Qatari border than Riyadh, makes this one of the more direct Saudi approaches to Doha. The city's waterfront and business districts sit along a fairly wide stretch of coastline, so the exact starting address makes a real difference to the total distance.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Understanding the Cross-Border Journey",
        paragraphs: [
          "The crossing into Qatar happens at Salwa on the Saudi side, opposite Abu Samra on the Qatari side — the only land border between the two countries, reopened in January 2021.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination from your exact Al Khobar address",
          "Route planning for the shorter southbound stretch to the border",
          "A fixed price agreed before you travel",
        ],
        authorityControlsLabel: "What Saudi and Qatari authorities control",
        authorityControls: [
          "Saudi exit and Qatari entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Salwa runs on the day",
        ],
        documentsNote: "A valid passport and any visa or entry permit for your nationality are required — confirm current requirements before travelling.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Confirm your exact Al Khobar starting address",
          "Build a proportionally generous buffer for the Salwa/Abu Samra crossing",
          "Confirm your specific Doha destination in advance",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Doha to Al Khobar distance guide", href: "/distance/doha-to-al-khobar-distance" },
          { label: "Dammam Airport to Doha distance guide", href: "/distance/dammam-airport-to-doha-distance" },
          { label: "Riyadh to Doha distance guide", href: "/distance/riyadh-to-doha-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Al Khobar to Doha private transfer",
        linkPath: "/routes/al-khobar-to-doha",
      },
    ],
    faqs: [
      { question: "How far is Al Khobar from Doha?", answer: "Approximately 400 to 420 kilometres by road, depending on the exact starting address within Al Khobar." },
      { question: "Is this a shorter drive than from Riyadh?", answer: "Yes, meaningfully. Al Khobar sits much closer to the Salwa border than Riyadh does, so the pure driving time is roughly an hour or more less." },
      { question: "Why does the exact distance vary within Al Khobar?", answer: "Al Khobar's waterfront and business districts span a fairly wide stretch of coastline, so a starting address nearer the southern edge of the city is genuinely closer to the border than one further north." },
      { question: "Is the border crossing time included in the driving estimate?", answer: "No. The driving estimate covers the road only. The Salwa/Abu Samra crossing is a separate, variable stage that isn't included in that figure." },
      { question: "Does the border make up a bigger share of this trip than the Riyadh route?", answer: "Yes — because the overall drive is shorter, the crossing's variability has proportionally more effect on total trip time than it does on the longer Riyadh journey." },
    ],
    sources: [
      { label: "Saudi Customs opens Salwa border crossing with Qatar — Arab News", url: "https://www.arabnews.com/node/1789626/saudi-arabia" },
      { label: "Salwa border crossing — Digital Logistics Capacity Assessments", url: "https://www.lca.logcluster.org/235-saudi-arabia-border-crossing-salwa-qatar" },
    ],
  },

  {
    slug: "doha-to-al-khobar-distance",
    from: "Doha",
    to: "Al Khobar",
    h1: "Doha to Al Khobar: A Regional Cross-Border Journey",
    metaTitle: "Doha to Al Khobar Journey Guide: KM & Driving Time",
    metaDescription: "How far is Al Khobar from Doha? Verified road distance, the Salwa border crossing, and why this is a shorter journey than routes further into Saudi Arabia.",
    eyebrow: "Regional Cross-Border Guide",
    dek: "A regional cross-border journey along the Gulf coast, not a long-haul drive.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~400-420 km" },
      { label: "Pure driving time", value: "~4.5-5.5 hrs", emphasis: true },
      { label: "Border crossing", value: "Abu Samra / Salwa" },
      { label: "Journey type", value: "Qatar capital to Eastern Province" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Doha",
        items: [
          "Confirm your specific Al Khobar destination — the city's coastline spans a fairly wide area and this affects the real distance.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual route and total distance will vary depending on your specific Al Khobar destination and current road/border conditions.",
        origin: "Doha, Qatar",
        destination: "Al Khobar, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "From Qatar to Saudi Arabia by Road",
        steps: [
          { label: "Doha departure", detail: "From your starting point in Doha." },
          { label: "Qatar road journey", detail: "North toward the Salwa/Abu Samra crossing." },
          { label: "International border transition", detail: "Qatari exit and Saudi entry formalities at the sole land crossing." },
          { label: "Driving into the Eastern Province", detail: "Once across, the Saudi coastal highway network." },
          { label: "Al Khobar arrival", detail: "The final distance depends on your specific destination within the city." },
        ],
      },
      {
        type: "roadReality",
        heading: "From Qatar to Saudi Arabia by Road",
        paragraphs: [
          "Doha and Al Khobar sit on roughly the same stretch of Gulf coastline, which is what keeps this route meaningfully shorter than journeys further into the Saudi interior. The road runs north from Doha, crosses into Saudi Arabia at Salwa, and continues up the Eastern Province coast — a single, fairly direct corridor rather than a route with major detours.",
          "Al Khobar itself sits along a fairly wide stretch of coastline, with its hotels, Corniche, and business district spread across the city, so the exact destination has a real effect on the final few kilometres of the journey.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Understanding the Cross-Border Journey",
        paragraphs: [
          "The crossing happens at Salwa on the Saudi side, opposite Abu Samra on the Qatari side — the only land border between the two countries, reopened in January 2021.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination from your Doha address",
          "Route planning and timing for the crossing",
          "A fixed price agreed before you travel",
        ],
        authorityControlsLabel: "What Saudi and Qatari authorities control",
        authorityControls: [
          "Qatari exit and Saudi entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Salwa runs on the day",
        ],
        documentsNote: "A valid passport and any visa or entry permit for your nationality are required — confirm current rules before travelling.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Confirm your specific Al Khobar destination in advance",
          "Treat the driving estimate as the road portion only, and add a flexible border buffer",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Al Khobar to Doha distance guide", href: "/distance/al-khobar-to-doha-distance" },
          { label: "Dammam Airport to Doha distance guide", href: "/distance/dammam-airport-to-doha-distance" },
          { label: "Riyadh to Doha distance guide", href: "/distance/riyadh-to-doha-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Doha to Al Khobar private transfer",
        linkPath: "/routes/doha-to-al-khobar",
      },
    ],
    faqs: [
      { question: "How far is Al Khobar from Doha?", answer: "Approximately 400 to 420 kilometres by road, with pure driving time of around four and a half to five and a half hours before the Salwa border crossing is added." },
      { question: "Is this a long-haul drive?", answer: "No — this is a regional Gulf-coast journey, genuinely shorter than routes further into the Saudi interior such as to Riyadh." },
      { question: "How long does the border crossing take?", answer: "It varies genuinely by day and time, commonly reported as anywhere from under an hour to several hours at busy periods such as weekends and holidays." },
      { question: "Does the distance change depending on where in Al Khobar I'm headed?", answer: "Yes. Al Khobar's hotels, Corniche, and business district span a fairly wide stretch of coastline, so your specific destination affects the final distance." },
      { question: "Is there public transport across this border?", answer: "No scheduled public transport service covering this exact route was verified for this page; a private car or self-driving are the practical options." },
    ],
    sources: [
      { label: "Saudi Customs opens Salwa border crossing with Qatar — Arab News", url: "https://www.arabnews.com/node/1789626/saudi-arabia" },
      { label: "Salwa border crossing — Digital Logistics Capacity Assessments", url: "https://www.lca.logcluster.org/235-saudi-arabia-border-crossing-salwa-qatar" },
    ],
  },

  // ── UAE / Dubai cluster ──────────────────────────────────────────────────
  {
    slug: "riyadh-to-dubai-distance",
    from: "Riyadh",
    to: "Dubai",
    h1: "Riyadh to Dubai: The Long Road Journey to the UAE",
    metaTitle: "Riyadh to Dubai Journey Guide: KM, Driving Time & Road Trip",
    metaDescription: "How far is Dubai from Riyadh by road? Verified long-haul driving distance, realistic travel time, rest-stop planning, and road vs flying.",
    eyebrow: "Long-Distance Journey Guide",
    dek: "One of the longest regular road distances in the Gulf — genuinely worth planning as a full day, not a quick regional trip.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~950-1,000 km" },
      { label: "Pure driving time", value: "~9-10 hrs", emphasis: true },
      { label: "Border crossing", value: "Al Batha / Al Ghuwaifat" },
      { label: "Journey type", value: "Long-haul capital-to-metropolis" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Riyadh",
        items: [
          "Treat this as a full-day journey and plan at least one genuine rest stop across the drive.",
          "Confirm the correct vehicle documentation for cross-border driving into the UAE well ahead of travel.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual starting point in Riyadh and current road/border conditions will affect the real distance and time.",
        origin: "Riyadh, Saudi Arabia",
        destination: "Dubai, United Arab Emirates",
      },
      {
        type: "stages",
        heading: "How the Road Journey Unfolds",
        steps: [
          { label: "Riyadh departure", detail: "From your specific starting point in the capital." },
          { label: "Long-distance road journey", detail: "East across the Saudi interior, via Al Kharj and Haradh." },
          { label: "Rest-stop planning", detail: "A drive this long benefits from real rest-stop planning, not an afterthought." },
          { label: "Border transition", detail: "Al Batha (Saudi) / Al Ghuwaifat (UAE) — the sole Saudi-UAE land crossing." },
          { label: "UAE arrival", detail: "The final distance depends on your specific Dubai destination." },
        ],
        note: "This is a genuinely long single-day journey — we separate it into real stages rather than quoting one total figure.",
      },
      {
        type: "roadReality",
        heading: "How the Road Journey Unfolds",
        paragraphs: [
          "This is among the longest regular road distances in the Gulf, and travellers researching it should treat it as a genuine full-day undertaking. The route leaves Riyadh heading east across a substantial stretch of the Saudi interior — via Al Kharj and Haradh — before reaching the Al Batha border late in the journey, with the bulk of the driving happening on the Saudi side.",
          "A distance of 950 to 1,000 kilometres is long enough that most travellers, regardless of vehicle, benefit meaningfully from at least one proper rest stop — not because the route is difficult, but because nine-plus hours of continuous driving is genuinely tiring for anyone.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Driving Time Versus Total Travel Time",
        paragraphs: [
          "The Al Batha crossing on the Saudi side, opposite Al Ghuwaifat on the Emirati side, is the sole land border between the two countries and operates 24 hours a day.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination and the long-haul vehicle for the whole journey",
          "Rest-stop planning for a genuine full-day drive",
          "Arranging the correct cross-border vehicle documentation",
        ],
        authorityControlsLabel: "What Saudi and UAE authorities control",
        authorityControls: [
          "Saudi exit and Emirati entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "Mandatory UAE vehicle insurance, generally purchased at the border",
        ],
        documentsNote: "Driving into the UAE requires the correct vehicle documentation alongside passport and visa requirements specific to your nationality — more involved than a standard land-border crossing on foot.",
      },
      {
        type: "scenarios",
        heading: "Who This Journey Works For",
        items: [
          { title: "Road-trip travellers", description: "For those who value the drive itself, a genuinely different kind of journey — continuous and flexible, with no check-in." },
          { title: "Groups with a full vehicle of luggage", description: "One vehicle for the whole distance avoids checked-baggage limits on a very long trip." },
          { title: "Time-sensitive travellers", description: "Flying covers this distance considerably faster — worth comparing directly against the nine-to-ten-hour drive." },
        ],
      },
      {
        type: "transportOptions",
        heading: "Road Travel Compared with Flying",
        options: [
          { mode: "Private car", bestFor: "Door-to-door without a vehicle change at the border", advantage: "Continuous, flexible timing, no baggage limits", limitation: "A genuine full-day undertaking" },
          { mode: "Self-driving", bestFor: "Travellers with the correct cross-border documentation", advantage: "Full independence", limitation: "Requires UAE vehicle insurance and documentation" },
          { mode: "Flying", bestFor: "Time-sensitive travellers", advantage: "Covers the distance in a fraction of the time", limitation: "This page does not track specific schedules or fares" },
        ],
        note: "Whether road or air suits a given trip better depends on luggage, group size, and how much value is placed on a door-to-door journey versus speed.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Treat this as a full-day journey with at least one rest stop",
          "Arrange the correct cross-border vehicle documentation in advance",
          "Build a flexible buffer for the Al Batha/Al Ghuwaifat crossing",
          "Confirm your specific Dubai destination in advance",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Dubai to Riyadh distance guide", href: "/distance/dubai-to-riyadh-distance" },
          { label: "Dammam to Dubai distance guide", href: "/distance/dammam-to-dubai-distance" },
          { label: "Riyadh to Doha distance guide", href: "/distance/riyadh-to-doha-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Riyadh to Dubai private transfer",
        linkPath: "/routes/riyadh-to-dubai",
      },
    ],
    faqs: [
      { question: "How far is Dubai from Riyadh by road?", answer: "Approximately 950 to 1,000 kilometres — notably further than some quick estimates suggest. Pure driving time is roughly nine to ten hours before the Al Batha border crossing is added." },
      { question: "Is it faster to fly than drive?", answer: "Yes, considerably, for pure speed. Driving offers a genuinely different kind of journey — continuous and flexible, with no check-in — which some travellers value over speed." },
      { question: "Should I plan a rest stop on this drive?", answer: "Most travellers find at least one proper break genuinely useful on a journey this long, simply because nine-plus hours of continuous driving is tiring regardless of road conditions." },
      { question: "What documents are needed to drive into the UAE?", answer: "A valid passport, any visa or entry permit for your nationality, and the correct vehicle documentation for cross-border driving — these requirements are more involved than a standard border crossing on foot." },
      { question: "Does the Al Batha crossing operate 24 hours?", answer: "Yes — the crossing operates around the clock, though processing time still varies by traffic and vehicle checks on the day." },
    ],
    sources: [
      { label: "E 44 road (United Arab Emirates) — Wikipedia", url: "https://en.wikipedia.org/wiki/E_44_road_(United_Arab_Emirates)" },
      { label: "Highway 10 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
    ],
  },

  {
    slug: "dubai-to-riyadh-distance",
    from: "Dubai",
    to: "Riyadh",
    h1: "Dubai to Riyadh: Crossing Into Saudi Arabia and the Long Road to the Capital",
    metaTitle: "Dubai to Riyadh Journey Guide: KM, Driving Time & Border Info",
    metaDescription: "How far is Riyadh from Dubai by road? Same long distance as the outbound trip, but the border comes first — driving time and planning tips.",
    eyebrow: "UAE-Departure Journey Guide",
    dek: "The same long distance as the outbound journey, but here the border comes first and Riyadh is the arrival point.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~950-1,000 km" },
      { label: "Pure driving time", value: "~9-10 hrs", emphasis: true },
      { label: "Border crossing", value: "Al Ghuwaifat / Al Batha" },
      { label: "Journey type", value: "UAE departure, Saudi capital arrival" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Dubai",
        items: [
          "Confirm the correct vehicle documentation for cross-border driving into Saudi Arabia well ahead of travel.",
          "Plan for the border crossing early in this direction, not at the end.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual Riyadh destination and current road/border conditions will affect the real distance and time.",
        origin: "Dubai, United Arab Emirates",
        destination: "Riyadh, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "Leaving Dubai for Saudi Arabia",
        steps: [
          { label: "Leaving Dubai for Saudi Arabia", detail: "From your specific starting point in Dubai." },
          { label: "Crossing from the UAE into Saudi Arabia", detail: "Al Ghuwaifat / Al Batha — the sole Saudi-UAE land border." },
          { label: "The long road toward Riyadh", detail: "A substantial, largely uninterrupted drive across the Saudi interior." },
          { label: "Approaching Riyadh", detail: "The city's outskirts, still some distance from most central destinations." },
          { label: "Final arrival", detail: "The exact distance depends heavily on where in Riyadh you're headed." },
        ],
        note: "Because the border sits early in this direction, the back half of the journey is one continuous drive — a different rhythm from the outbound trip.",
      },
      {
        type: "roadReality",
        heading: "Leaving Dubai for Saudi Arabia",
        paragraphs: [
          "Leaving Dubai, the drive to the Al Ghuwaifat crossing is a substantial opening stretch in its own right, before the border is even reached. Once across into Saudi Arabia, the route settles into a long, straightforward highway drive deep into the Saudi interior toward Riyadh — the majority of the total driving time in this direction happens on the Saudi side of the border.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Crossing from the UAE into Saudi Arabia",
        paragraphs: [
          "Al Ghuwaifat, on the Emirati side, and Al Batha, on the Saudi side, together form the sole land border between the two countries, operating 24 hours a day.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination and the long-haul vehicle for the whole journey",
          "Route planning for the long Saudi-side stretch",
          "Arranging the correct cross-border vehicle documentation",
        ],
        authorityControlsLabel: "What Saudi and UAE authorities control",
        authorityControls: [
          "Emirati exit and Saudi entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Al Ghuwaifat/Al Batha runs on the day",
        ],
        documentsNote: "A valid passport, any Saudi visa or entry permit relevant to your nationality, and the correct vehicle documentation for cross-border driving are all required; these vary by nationality and can change.",
      },
      {
        type: "arrivalPanel",
        heading: "Why Your Final Journey Distance Can Vary Within Riyadh",
        paragraphs: [
          "Riyadh is a large, spread-out capital — a hotel in the business district, a residential compound, and King Khalid International Airport are all genuinely different distances from where the highway enters the city.",
          "Because the border comes early in this direction, any delay there has more time to be absorbed over the long drive that follows.",
        ],
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Arrange the correct cross-border vehicle documentation before departure",
          "Confirm your specific Riyadh destination in advance",
          "Budget extra time if continuing onward from King Khalid International Airport",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Riyadh to Dubai distance guide", href: "/distance/riyadh-to-dubai-distance" },
          { label: "Dubai to Dammam distance guide", href: "/distance/dubai-to-dammam-distance" },
          { label: "Doha to Riyadh distance guide", href: "/distance/doha-to-riyadh-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dubai to Riyadh private transfer",
        linkPath: "/routes/dubai-to-riyadh",
      },
    ],
    faqs: [
      { question: "How far is Riyadh from Dubai by road?", answer: "Approximately 950 to 1,000 kilometres — the same physical route as the outbound direction." },
      { question: "Since the border comes early here, does that change how the trip feels?", answer: "Yes — once you clear Al Ghuwaifat/Al Batha, there's nothing left but one long, uninterrupted push across the Saudi interior, so the crossing is more of an opening formality than a final hurdle before arrival." },
      { question: "Should I expect a precise arrival time in Riyadh?", answer: "Treat the drive estimate as a range rather than a fixed time — Riyadh's highway entry point can still be a meaningful distance from a specific hotel, residential address, or King Khalid International Airport depending on where you're actually headed." },
      { question: "What documents are needed to enter Saudi Arabia?", answer: "A valid passport, any Saudi visa or entry permit for your nationality, and the correct vehicle documentation for cross-border driving." },
      { question: "Is this drive typically split across two days?", answer: "Some travellers do split it with an overnight stop rather than driving the full nine-to-ten hours in one push, particularly combined with the border crossing near the start." },
    ],
    sources: [
      { label: "E 44 road (United Arab Emirates) — Wikipedia", url: "https://en.wikipedia.org/wiki/E_44_road_(United_Arab_Emirates)" },
      { label: "Highway 10 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
    ],
  },

  {
    slug: "dammam-to-dubai-distance",
    from: "Dammam",
    to: "Dubai",
    h1: "Dammam to Dubai: The Shorter Eastern Province Route to the UAE",
    metaTitle: "Dammam to Dubai Journey Guide: KM & Driving Time",
    metaDescription: "How far is Dubai from Dammam? Verified road distance, why it's shorter than the Riyadh route, and honest border-crossing guidance.",
    eyebrow: "Eastern-Province-to-UAE Guide",
    dek: "A shorter approach to Dubai than from Riyadh — the Eastern Province sits meaningfully closer to the Al Batha border.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~850-870 km" },
      { label: "Pure driving time", value: "~7.5-8 hrs", emphasis: true },
      { label: "Border crossing", value: "Al Batha / Al Ghuwaifat" },
      { label: "Journey type", value: "Eastern Province to UAE" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Dammam",
        items: [
          "Treat the ~7.5-8 hour driving estimate as the road portion only; add a flexible buffer for the border crossing on top.",
          "Arrange the correct vehicle documentation and visa for the UAE in advance.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual starting point in Dammam and current road/border conditions will affect the real distance and time.",
        origin: "Dammam, Saudi Arabia",
        destination: "Dubai, United Arab Emirates",
      },
      {
        type: "stages",
        heading: "Understanding the Route to the UAE",
        steps: [
          { label: "Starting the road journey in the Eastern Province", detail: "From your specific starting point in Dammam." },
          { label: "South-east across the Eastern Province", detail: "Toward the border." },
          { label: "Border transition", detail: "Al Batha (Saudi) / Al Ghuwaifat (UAE) — the sole Saudi-UAE land crossing." },
          { label: "UAE road journey", detail: "Once across, the route continues toward Dubai." },
          { label: "Arrival in Dubai", detail: "The final distance depends on your specific Dubai destination." },
        ],
        note: "This route is shorter than the equivalent journey from Riyadh, but the border-crossing stage remains just as unpredictable.",
      },
      {
        type: "roadReality",
        heading: "Understanding the Route to the UAE",
        paragraphs: [
          "The Eastern Province's position — considerably closer to the Al Batha border than Riyadh — is what makes this a genuinely more direct approach to Dubai. Independent distance sources put the total road distance at approximately 850 to 870 kilometres, roughly ninety minutes to two hours less driving than the equivalent journey from the Saudi capital.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Driving Distance and Journey Planning",
        paragraphs: [
          "The correct vehicle documentation, alongside a valid passport and visa relevant to your nationality, is required for cross-border driving into the UAE.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination and the vehicle for the whole journey",
          "Rest-stop planning for the drive",
          "Arranging the correct cross-border vehicle documentation",
        ],
        authorityControlsLabel: "What Saudi and UAE authorities control",
        authorityControls: [
          "Saudi exit and Emirati entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "Mandatory UAE vehicle insurance, generally purchased at the border",
        ],
        documentsNote: "Requirements vary by nationality and change over time — confirm current rules before travelling.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "Arrange UAE vehicle documentation and insurance in advance",
          "Add a flexible buffer for the Al Batha/Al Ghuwaifat crossing",
          "A drive approaching eight hours still benefits from real rest-stop planning",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Dubai to Dammam distance guide", href: "/distance/dubai-to-dammam-distance" },
          { label: "Riyadh to Dubai distance guide", href: "/distance/riyadh-to-dubai-distance" },
          { label: "Doha to Al Khobar distance guide", href: "/distance/doha-to-al-khobar-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dammam to Dubai private transfer",
        linkPath: "/routes/dammam-to-dubai",
      },
    ],
    faqs: [
      { question: "How far is Dubai from Dammam by road?", answer: "Approximately 850 to 870 kilometres, with pure driving time of roughly seven and a half to eight hours before the Al Batha border crossing is added." },
      { question: "Is this drive shorter than from Riyadh?", answer: "Yes, meaningfully. The Eastern Province sits closer to the Al Batha border than Riyadh does, so the pure driving time is roughly ninety minutes to two hours less." },
      { question: "How long does the border crossing take?", answer: "It's genuinely variable for passenger vehicles — commonly reported as around 45 minutes in quiet periods up to several hours at busy times such as weekends and holidays." },
      { question: "What documents are needed to drive into the UAE?", answer: "A valid passport, any visa or entry permit for your nationality, and the correct vehicle documentation for cross-border driving." },
      { question: "Is this still a long enough drive to need a rest stop?", answer: "Yes — at nearly eight hours, most travellers still benefit from at least one break, even though it's shorter than the equivalent Riyadh route." },
    ],
    sources: [
      { label: "D 85 road (United Arab Emirates) — Wikipedia", url: "https://en.wikipedia.org/wiki/D_85_road_(United_Arab_Emirates)" },
      { label: "Highway 10 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
    ],
  },

  {
    slug: "dubai-to-dammam-distance",
    from: "Dubai",
    to: "Dammam",
    h1: "Dubai to Dammam: From the UAE Border to the Eastern Province",
    metaTitle: "Dubai to Dammam Journey Guide – Eastern Province Arrival",
    metaDescription: "How far is Dammam from Dubai by road? Same shorter route as the outbound trip, why the border comes early, and honest planning guidance.",
    eyebrow: "UAE-Departure Journey Guide",
    dek: "The same shorter approach as the outbound journey, but here the border comes early and Dammam is the arrival point.",
    lastVerified: "2026-08-28",
    stats: [
      { label: "Road distance", value: "~850-870 km" },
      { label: "Pure driving time", value: "~7.5-8 hrs", emphasis: true },
      { label: "Border crossing", value: "Al Ghuwaifat / Al Batha" },
      { label: "Journey type", value: "UAE departure, Eastern Province arrival" },
    ],
    blocks: [
      {
        type: "prepPanel",
        heading: "Before You Leave Dubai",
        items: [
          "Arrange the correct cross-border vehicle documentation before departure.",
          "Confirm your specific Dammam destination — the city, its Corniche, and King Fahd International Airport are meaningfully different final distances.",
        ],
      },
      {
        type: "map",
        heading: "Route Map",
        caption: "Your actual Dammam destination and current road/border conditions will affect the real distance and time.",
        origin: "Dubai, United Arab Emirates",
        destination: "Dammam, Saudi Arabia",
      },
      {
        type: "stages",
        heading: "From the UAE Border to Dammam",
        steps: [
          { label: "Leaving Dubai for the Saudi Eastern Province", detail: "From your specific starting point in Dubai." },
          { label: "From the UAE border to Dammam", detail: "Al Ghuwaifat / Al Batha, then a continued drive north-west." },
          { label: "Most of the drive on the Saudi side", detail: "The majority of the total driving time happens after the border in this direction." },
          { label: "Eastern Province approach", detail: "The route nears Dammam and the wider metro area." },
          { label: "Arriving in Dammam", detail: "The final distance depends on your specific destination — city, Corniche, or the airport." },
        ],
        note: "Because the border sits early in this direction, most of the driving happens on the Saudi side — a different rhythm from the outbound trip.",
      },
      {
        type: "roadReality",
        heading: "From the UAE Border to Dammam",
        paragraphs: [
          "Leaving Dubai, the drive to the Al Ghuwaifat crossing is a genuine stretch in its own right before the border is even reached. Once across into Saudi Arabia at Al Batha, the route continues north-west into the Eastern Province — the majority of the total driving time in this direction happens on the Saudi side.",
        ],
      },
      {
        type: "borderPanel",
        heading: "Understanding the Road Journey",
        paragraphs: [
          "Al Ghuwaifat, on the Emirati side, and Al Batha, on the Saudi side, form the sole land border between the UAE and Saudi Arabia, operating 24 hours a day.",
        ],
        companyHandlesLabel: "What a private transfer handles",
        companyHandles: [
          "Pickup coordination and the long-haul vehicle for the whole journey",
          "Route planning for the drive into the Eastern Province",
          "Arranging the correct cross-border vehicle documentation",
        ],
        authorityControlsLabel: "What Saudi and UAE authorities control",
        authorityControls: [
          "Emirati exit and Saudi entry immigration decisions",
          "Passport and visa eligibility for your nationality",
          "How long processing at Al Ghuwaifat/Al Batha runs on the day",
        ],
        documentsNote: "A valid passport, any Saudi visa or entry permit relevant to your nationality, and the correct vehicle documentation are all required.",
      },
      {
        type: "checklist",
        heading: "Practical Checklist",
        items: [
          "This is genuinely shorter than the equivalent journey to Riyadh — roughly ninety minutes to two hours less driving",
          "Confirm your specific Dammam destination in advance",
          "Build a flexible buffer for the Al Ghuwaifat/Al Batha crossing",
        ],
      },
      {
        type: "relatedLinks",
        heading: "Related Reading",
        links: [
          { label: "Dammam to Dubai distance guide", href: "/distance/dammam-to-dubai-distance" },
          { label: "Dubai to Riyadh distance guide", href: "/distance/dubai-to-riyadh-distance" },
          { label: "Al Khobar to Doha distance guide", href: "/distance/al-khobar-to-doha-distance" },
        ],
      },
      {
        type: "cta",
        text: "Planning to make this journey by private vehicle?",
        linkLabel: "See our Dubai to Dammam private transfer",
        linkPath: "/routes/dubai-to-dammam",
      },
    ],
    faqs: [
      { question: "How far is Dammam from Dubai by road?", answer: "Approximately 850 to 870 kilometres, the same physical route as the outbound direction, with pure driving time of roughly seven and a half to eight hours." },
      { question: "Does the border crossing happen early or late in this journey?", answer: "Relatively early, after an initial stretch from Dubai. Once through Al Ghuwaifat/Al Batha, most of the remaining drive happens on the Saudi side." },
      { question: "Is this shorter than the equivalent Riyadh journey?", answer: "Yes, meaningfully. The Eastern Province sits closer to the Al Batha border than Riyadh does, saving roughly ninety minutes to two hours of driving." },
      { question: "Where exactly does this measure to in Dammam?", answer: "The city-to-city figure is a general estimate — your specific destination, whether central Dammam, the Corniche, or King Fahd International Airport, affects the real final distance." },
      { question: "Is self-driving a realistic option for this route?", answer: "Yes, for travellers with their own vehicle and the correct cross-border documentation, subject to the same border requirements as any other vehicle." },
    ],
    sources: [
      { label: "D 85 road (United Arab Emirates) — Wikipedia", url: "https://en.wikipedia.org/wiki/D_85_road_(United_Arab_Emirates)" },
      { label: "Highway 10 (Saudi Arabia) — Wikipedia", url: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
    ],
  },

];

export function getJourneyGuideV2Page(slug: string): JourneyGuideV2Page | undefined {
  return journeyGuideV2Pages.find((p) => p.slug === slug);
}
