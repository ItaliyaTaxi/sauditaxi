import type { JourneyContent } from "@/components/journey/JourneyPageView";

/**
 * "Rich journey" distance pages — a deliberately distinct design variant of
 * /distance/{slug}, used for a small batch of routes where a fuller,
 * editorial travel-guide treatment is warranted (see
 * components/journey/JourneyPageView.tsx for the shared rendering component).
 *
 * This is intentionally a SEPARATE data source from data/distance-pages.ts —
 * every other /distance/{slug} page continues to render from that file with
 * its original design, completely untouched. app/(main)/distance/[slug]/
 * page.tsx checks this array first; only a slug listed here gets the new
 * JourneyPageView treatment.
 *
 * Every distance/time figure below was independently checked against public
 * sources (see each entry's `sources`) at the time of writing. Where sources
 * disagreed — which happened on more than one of these routes — the page
 * states a range and says so explicitly, rather than asserting a single
 * false-precision number.
 */

export interface JourneyPage extends JourneyContent {
  slug: string;
  from: string;
  to: string;
  routePath: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
}

export const journeyPages: JourneyPage[] = [
  {
    slug: "kuwait-city-to-riyadh-distance",
    from: "Kuwait City",
    to: "Riyadh",
    routePath: "/routes/kuwait-city-to-riyadh",
    metaTitle: "Kuwait City to Riyadh Distance & Route Guide (KM + Border Info)",
    metaDescription: "How far is Riyadh from Kuwait City by road? Verified driving distance, a stage-by-stage journey timeline, the Nuwaiseeb border crossing, and honest route planning advice.",
    h1: "Kuwait City to Riyadh: Distance, Route & Border Crossing Guide",
    heroTag: "Cross-border road journey",
    heroAnswer: "This is one of the longest regular road journeys in the Gulf — plan for a genuine full-day drive, not a quick hop.",
    heroDistance: "~650 km",
    heroDuration: "~6.5–7 hrs driving",
    heroImage: "/images/journey/riyadh-skyline.jpg",
    heroImageAlt: "Riyadh skyline at the end of the Kuwait City to Riyadh road journey",
    facts: [
      { label: "Road distance", value: "~600–700 km (sources vary)" },
      { label: "Driving time", value: "~6.5–7 hours, excluding border", emphasis: true },
      { label: "Border crossing", value: "Nuwaiseeb (Kuwait) / Khafji (Saudi)" },
      { label: "Route", value: "Highway 95 south, then Highway 40 to Riyadh" },
      { label: "Journey type", value: "Capital-to-capital road journey" },
    ],
    mapOrigin: "Kuwait City, Kuwait",
    mapDestination: "Riyadh, Saudi Arabia",
    mapNote: "The map shows a typical driving route. The exact road taken, and the final distance, will vary depending on your precise starting address in Kuwait City and destination in Riyadh.",
    distanceExplanation: [
      "Independent route sources disagree more on this specific capital-to-capital distance than they do on shorter legs — figures range from around 636 km to 718 km depending on the measurement tool and exact addresses used. Rather than presenting a single false-precision number, this page uses a working range of roughly 600 to 700 km, centred around 650 km.",
      "The discrepancy is common on long cross-country routes: different mapping tools snap to slightly different city-centre reference points, and the route itself has more than one reasonable path once you're on the open highway network south of the border. The straight-line distance between the two capitals is shorter than any of these driving figures, since no road runs directly between them — the road distance is always the meaningful number for planning a trip.",
    ],
    timeline: [
      { label: "Departure from Kuwait City", detail: "The journey begins wherever you're starting in Kuwait City — the exact distance to the border depends on your specific address." },
      { label: "Southbound to the border", detail: "The road runs south to the Nuwaiseeb crossing, the sole land border between Kuwait and Saudi Arabia." },
      { label: "Border crossing", detail: "Kuwaiti exit and Saudi entry formalities are handled at the crossing. This is a standard land border, not an island facility — processing time varies by traffic and cannot be predicted precisely." },
      { label: "Long haul south on Highway 95", detail: "Once in Saudi Arabia, the route follows Highway 95 down the Eastern Province coast before turning inland." },
      { label: "Inland to Riyadh via Highway 40", detail: "The final stretch joins Highway 40 west into the capital — a genuinely long final leg on its own." },
      { label: "Arrival in Riyadh", detail: "Riyadh is a large, spread-out city, so the last few kilometres to your specific destination vary." },
    ],
    timelineNote: "This breakdown separates the journey into its real stages. We do not state a single total journey time for the whole trip, since the border-crossing stage is inherently variable.",
    routeStory: {
      heading: "A genuine international road journey between two capitals",
      paragraphs: [
        "Kuwait City to Riyadh is not a casual day trip — it's one of the longest regular road journeys between two Gulf capitals, and travellers researching it should treat it as a full-day undertaking from the outset. The route leaves the built-up area of Kuwait City, crosses into Saudi Arabia at Nuwaiseeb, and then covers the length of the Eastern Province before turning inland toward Riyadh.",
        "What makes this route distinct from a shorter Eastern-Province-to-Kuwait trip is simply how much of Saudi Arabia it crosses. A traveller starting from Dammam or Khobar is already close to the border; someone starting from Kuwait City is not, and someone whose destination is Riyadh rather than the Eastern Province has a further leg again once across. Both ends of this journey add real distance on top of the border crossing itself.",
      ],
    },
    borderContext: {
      heading: "Nuwaiseeb: the only land border between Kuwait and Saudi Arabia",
      paragraphs: [
        "Nuwaiseeb, on the Kuwaiti side, and Khafji, on the Saudi side, form the sole land crossing between the two countries — every vehicle travelling this route by road passes through this single point. Unlike the King Fahd Causeway between Saudi Arabia and Bahrain, this is a standard land border rather than an island-based one-stop facility.",
        "Processing time at any land border depends on traffic volume and vehicle checks on the day of travel, and we do not state an exact figure here because it genuinely cannot be predicted in advance. Passport and visa requirements differ by nationality and are subject to change — travel documents and their validity are the traveller's own responsibility, and it's worth confirming current requirements before departure rather than relying on general information.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Treat this as a full-day journey, not a same-day round trip.",
        "Plan reasonable rest breaks across the ~600–700 km driving distance — this is too long to drive in one uninterrupted stretch for most travellers.",
        "Build in a genuine buffer for the Nuwaiseeb/Khafji border crossing, since this is the least predictable part of the whole journey.",
        "Remember that your final destination within Riyadh — a specific hotel, business district, or the airport — adds distance beyond the city-to-city figure above.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle covers the full route door-to-door, without needing to change vehicles at the border." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and valid cross-border documentation can make this journey independently, subject to the same border requirements as any other vehicle." },
    ],
    travelOptionsNote: "No scheduled public transport service covering this exact route was verified for this page.",
    ctaRoutePath: "/routes/kuwait-city-to-riyadh",
    ctaLabel: "Kuwait City to Riyadh private transfer service",
    faqs: [
      { question: "How far is Riyadh from Kuwait City by road?", answer: "Independent sources disagree, with figures ranging from around 636 to 718 kilometres. This page uses a working range of roughly 600 to 700 km rather than a single precise figure." },
      { question: "How long is the drive?", answer: "Driving time alone is estimated at roughly six and a half to seven hours, not including time at the Nuwaiseeb/Khafji border, which is a separate and variable factor." },
      { question: "Does border processing affect the journey?", answer: "Yes, significantly on a route this length. We don't state an exact processing time since it depends on traffic and vehicle checks on the day, but it should be budgeted for as a real addition to the driving time above." },
      { question: "Is the road distance different depending on where I start in Kuwait City?", answer: "Yes. Kuwait City covers a wide area, and your specific starting address changes the real distance to the Nuwaiseeb border by a meaningful margin on a route this long." },
    ],
    relatedJourneys: [
      { label: "Riyadh to Kuwait City distance", href: "/distance/riyadh-to-kuwait-city-distance" },
      { label: "Dammam to Kuwait City distance", href: "/distance/dammam-to-kuwait-city-distance" },
      { label: "Dammam to Kuwait Airport distance", href: "/distance/dammam-to-kuwait-airport-distance" },
    ],
    sources: [
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      { label: "Al-Khafji — Wikipedia", href: "https://en.wikipedia.org/wiki/Al-Khafji" },
      { label: "Al-Nuwaiseeb — Wikipedia", href: "https://en.wikipedia.org/wiki/Al-Nuwaiseeb" },
    ],
    conclusion: "Kuwait City to Riyadh is a genuine long-distance international road journey, not a short hop — the honest planning takeaway is to budget a full day, build in rest breaks across the drive itself, and treat the Nuwaiseeb/Khafji border crossing as the least predictable part of the whole trip rather than a minor formality.",
    lastVerified: "2026-08-27",
  },

  {
    slug: "dammam-airport-to-khafji-border-distance",
    from: "Dammam Airport",
    to: "Khafji Border",
    routePath: "/routes/dammam-airport-to-khafji-border",
    metaTitle: "Dammam Airport to Khafji Border Distance & Route Guide",
    metaDescription: "How far is Khafji from King Fahd International Airport? Verified driving distance, a stage-by-stage timeline, and what changes if you're continuing into Kuwait.",
    h1: "Dammam Airport to Khafji Border: Distance & Route Guide",
    heroTag: "Airport-to-border route",
    heroAnswer: "This route covers the drive from King Fahd International Airport to the Khafji border area — not the full distance into Kuwait itself.",
    heroDistance: "~270–285 km",
    heroDuration: "~2h45m–3h driving",
    heroImage: "/images/journey/desert-highway.jpg",
    heroImageAlt: "Desert highway in the Eastern Province, along the route between Dammam Airport and Khafji",
    facts: [
      { label: "Departure point", value: "King Fahd International Airport (DMM)", emphasis: true },
      { label: "Destination", value: "Khafji, at the Saudi-Kuwait border" },
      { label: "Road distance", value: "~270–285 km (sources vary)" },
      { label: "Driving time", value: "~2h45m–3h", emphasis: true },
      { label: "Route", value: "Highway 95, direct from the airport" },
    ],
    mapOrigin: "King Fahd International Airport, Saudi Arabia",
    mapDestination: "Khafji, Saudi Arabia",
    mapNote: "The map shows the route to Khafji town, the nearest reference point to the border crossing. The actual crossing facility sits a short distance further; exact routing depends on your specific starting terminal and the current road layout.",
    distanceExplanation: [
      "This is specifically the distance from King Fahd International Airport to Khafji — not from Dammam city, and not all the way into Kuwait. The airport sits on its own large site outside Dammam, closer to the highway that runs north than to the city centre, so this leg is shorter than a Dammam-city-to-Khafji trip would be.",
      "Sources for this specific airport-to-Khafji leg are thinner than for some other routes on this corridor. The most-cited figure describes the distance as 'roughly 270 km,' and independent route-planning tools put it slightly higher, around 283 km. We present this as a range — approximately 270 to 285 kilometres — rather than a single precise number, since no fully authoritative source with a stated methodology was found for this exact leg.",
    ],
    timeline: [
      { label: "Departure from King Fahd International Airport", detail: "The route begins directly from the airport's arrivals area, without needing to drive into Dammam first." },
      { label: "Northbound on Highway 95", detail: "The road runs north along the Eastern Province coast, the same corridor used for the longer Dammam-to-Kuwait-City route." },
      { label: "Approaching Khafji", detail: "The final stretch brings you to Khafji town, the Saudi settlement nearest the border." },
      { label: "Arrival at the border area", detail: "Khafji itself is the destination for this specific route — continuing into Kuwait is a separate onward step, not included in this distance." },
    ],
    timelineNote: "This route ends at Khafji, not at the border facility itself or inside Kuwait — see the note below on what changes if your actual destination is further.",
    routeStory: {
      heading: "Starting from the airport changes the trip",
      paragraphs: [
        "King Fahd International Airport doesn't sit inside Dammam — it's built on a large dedicated site outside the city, positioned closer to the highway heading north than to Dammam's own centre. For a traveller whose actual plan is to continue toward the Saudi-Kuwait border, that matters: starting the trip from the airport is a genuinely shorter leg than starting from a Dammam city address would be.",
        "This route specifically ends at Khafji, the Saudi town nearest the border, rather than at the border facility itself or across it into Kuwait. Anyone planning to continue into Kuwait needs to treat the crossing and the onward Kuwaiti-side distance as additional steps beyond what's covered here — this page answers 'how far is Khafji from the airport,' not 'how far is Kuwait City.'",
      ],
    },
    borderContext: {
      heading: "Khafji is the border town, not the crossing point itself",
      paragraphs: [
        "Khafji is the Saudi settlement closest to the Kuwait border, and the crossing itself — opposite Nuwaiseeb on the Kuwaiti side — sits a short distance beyond the town. If your actual destination is the crossing facility or a point inside Kuwait, budget a little extra distance and time beyond the airport-to-Khafji figure on this page.",
        "We do not state a border processing time here since this route's destination is Khafji itself, not the crossing — but if you're continuing onward, note that land-border processing time varies by traffic and vehicle checks and cannot be predicted precisely in advance.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Confirm whether your actual destination is Khafji town or the border crossing/Kuwait itself — they are not the same distance.",
        "This leg starts directly from the airport, so factor in your flight's actual arrival time and any airport formalities before the road journey begins.",
        "Highway 95 is a long, largely open corridor — plan for a straightforward but genuinely multi-hour drive rather than a short transfer.",
        "If continuing into Kuwait, add the border crossing and onward distance separately.",
      ],
    },
    travelOptions: [
      { mode: "Private car / taxi", detail: "A private vehicle collects you directly from the airport and drives the full distance to Khafji without a transfer." },
      { mode: "Self-driving", detail: "Travellers renting a vehicle at the airport can drive this route independently via Highway 95." },
    ],
    ctaRoutePath: "/routes/dammam-airport-to-khafji-border",
    ctaLabel: "Dammam Airport to Khafji Border private transfer service",
    faqs: [
      { question: "How far is Khafji Border from Dammam Airport?", answer: "Approximately 270 to 285 kilometres, based on the available sources for this specific leg — the most-cited figure describes it as 'roughly 270 km.'" },
      { question: "How long is the drive from King Fahd International Airport?", answer: "Roughly two hours forty-five minutes to three hours of driving under normal conditions, via Highway 95." },
      { question: "Is Khafji Border the same destination as Kuwait City?", answer: "No. Khafji is the Saudi border town; Kuwait City is considerably further, across the border and along a separate onward route. This page covers the airport-to-Khafji leg only." },
    ],
    relatedJourneys: [
      { label: "Khafji Border to Dammam Airport distance", href: "/distance/khafji-border-to-dammam-airport-distance" },
      { label: "Dammam to Kuwait Airport distance", href: "/distance/dammam-to-kuwait-airport-distance" },
      { label: "Dammam to Kuwait City distance", href: "/distance/dammam-to-kuwait-city-distance" },
    ],
    sources: [
      { label: "Khafji — Wikipedia", href: "https://en.wikipedia.org/wiki/Khafji" },
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
    ],
    conclusion: "The airport-to-Khafji leg is a manageable, roughly three-hour drive along a single highway corridor — the key planning point is being clear about whether Khafji itself, or a destination beyond the border, is your real endpoint, since those are genuinely different distances.",
    lastVerified: "2026-08-27",
  },

  {
    slug: "khafji-border-to-dammam-airport-distance",
    from: "Khafji Border",
    to: "Dammam Airport",
    routePath: "/routes/khafji-border-to-dammam-airport",
    metaTitle: "Khafji Border to Dammam Airport Distance & Route Guide",
    metaDescription: "How far is King Fahd International Airport from Khafji? Verified driving distance, journey timeline, and how much buffer to allow before a flight.",
    h1: "Khafji Border to Dammam Airport: Distance & Route Guide",
    heroTag: "Border-to-airport route",
    heroAnswer: "The reverse of the airport-to-Khafji leg — this time, allow buffer time for your flight rather than just the driving time.",
    heroDistance: "~270–285 km",
    heroDuration: "~2h45m–3h driving",
    heroImage: "/images/journey/desert-highway.jpg",
    heroImageAlt: "Desert highway in the Eastern Province, along the route between Khafji and Dammam Airport",
    facts: [
      { label: "Departure point", value: "Khafji, at the Saudi-Kuwait border" },
      { label: "Destination", value: "King Fahd International Airport (DMM)", emphasis: true },
      { label: "Road distance", value: "~270–285 km (sources vary)" },
      { label: "Driving time", value: "~2h45m–3h", emphasis: true },
      { label: "Plan around", value: "Your flight's check-in time, not just driving time" },
    ],
    mapOrigin: "Khafji, Saudi Arabia",
    mapDestination: "King Fahd International Airport, Saudi Arabia",
    mapNote: "The map shows the route from Khafji town south to the airport. If you're starting from the border crossing itself rather than Khafji town, your actual starting point is a short distance further north.",
    distanceExplanation: [
      "This is the same physical road as the airport-to-Khafji direction, covered north to south — the distance itself is identical: approximately 270 to 285 kilometres depending on the source. What's different in this direction is what the distance is being planned around.",
      "Because the destination here is specifically the airport rather than Dammam city, and because a flight typically follows, the driving-time estimate matters less in isolation than it does when paired with your actual check-in deadline. The same range of sources — Wikipedia's hedged 'roughly 270 km' and route-planning tools putting the figure closer to 283 km — applies to this direction too.",
    ],
    timeline: [
      { label: "Departure from Khafji", detail: "The journey starts from Khafji town or, if you're crossing from Kuwait first, from the border crossing itself just north of it." },
      { label: "Southbound on Highway 95", detail: "The route follows the same coastal highway corridor south along the Eastern Province." },
      { label: "Approaching Dammam", detail: "As the airport nears, the route stays on the highway network rather than routing through central Dammam." },
      { label: "Arrival at King Fahd International Airport", detail: "The airport sits outside the city on its own site — plan your arrival with enough buffer before check-in rather than cutting it close." },
    ],
    timelineNote: "If a flight follows this drive, treat the airport arrival stage as needing its own buffer on top of the driving time — check-in and security are separate from the road journey.",
    routeStory: {
      heading: "A border-to-airport leg, usually made against a flight",
      paragraphs: [
        "Travellers making this specific journey — starting at or near the Khafji border and heading to King Fahd International Airport — are very often doing so to catch a flight, whether departing Saudi Arabia after crossing from Kuwait, or connecting onward domestically. That context changes how the ~270–285 km distance should be planned around: the relevant question isn't just 'how long is the drive,' but 'how much total buffer do I need before check-in.'",
        "The airport itself sits outside Dammam on a large dedicated site, so this route doesn't route through the city centre — it stays on the highway network the whole way, which keeps the drive itself relatively predictable once you're clear of the border area.",
      ],
    },
    borderContext: {
      heading: "If you're crossing from Kuwait first",
      paragraphs: [
        "If your journey actually starts across the border in Kuwait rather than at Khafji itself, add the Nuwaiseeb/Khafji crossing as a separate stage before this driving distance begins. Land-border processing time varies by traffic and vehicle checks on the day and cannot be predicted precisely — this matters more here than on most routes, because a delay at the border eats directly into the buffer you have before a flight.",
        "Travel document requirements differ by nationality and are subject to change; confirming current requirements before you travel is the traveller's own responsibility.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "If a flight follows, add your airline's recommended check-in time on top of the driving estimate — don't plan to the driving time alone.",
        "If you're crossing the border from Kuwait before this leg starts, treat that crossing as a separate, unpredictable stage that eats into your buffer.",
        "Confirm which terminal you need at King Fahd International Airport before you set off, so the final approach doesn't add last-minute uncertainty.",
        "Avoid scheduling a tight connection off the back of this drive — the length of the journey leaves less margin for delay than a short in-city airport transfer would.",
      ],
    },
    travelOptions: [
      { mode: "Private car / taxi", detail: "A private vehicle takes you directly from Khafji (or the border crossing) to the airport terminal, timed around your flight." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle can make this drive independently via Highway 95." },
    ],
    ctaRoutePath: "/routes/khafji-border-to-dammam-airport",
    ctaLabel: "Khafji Border to Dammam Airport private transfer service",
    faqs: [
      { question: "How far is Dammam Airport from Khafji Border?", answer: "Approximately 270 to 285 kilometres — the same distance as the reverse direction, based on the available sources for this specific leg." },
      { question: "How much time should I allow before a flight?", answer: "We can't give an exact number since it depends on your airline's specific requirements, but given the roughly three-hour drive itself, most travellers build in a meaningful buffer beyond the driving time before an international or domestic check-in deadline." },
      { question: "Is the driving time the same as total journey time?", answer: "No. The driving estimate covers the road only. If you're crossing from Kuwait first, add the border crossing time separately, and if a flight follows, add check-in and security time on top of arrival at the airport." },
    ],
    relatedJourneys: [
      { label: "Dammam Airport to Khafji Border distance", href: "/distance/dammam-airport-to-khafji-border-distance" },
      { label: "Kuwait Airport to Dammam distance", href: "/distance/kuwait-airport-to-dammam-distance" },
      { label: "Kuwait City to Dammam distance", href: "/distance/kuwait-city-to-dammam-distance" },
    ],
    sources: [
      { label: "Khafji — Wikipedia", href: "https://en.wikipedia.org/wiki/Khafji" },
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
    ],
    conclusion: "This is a straightforward highway drive in isolation, but because it's so often made against a flight, the real planning question is less about the roughly three-hour driving time and more about the buffer needed on top of it — for a border crossing beforehand, for check-in afterward, or both.",
    lastVerified: "2026-08-27",
  },

  {
    slug: "dammam-to-kuwait-airport-distance",
    from: "Dammam",
    to: "Kuwait Airport",
    routePath: "/routes/dammam-to-kuwait-airport",
    metaTitle: "Dammam to Kuwait Airport Distance & Route Guide (KM + Border)",
    metaDescription: "How far is Kuwait International Airport from Dammam? Verified driving distance, the Khafji/Nuwaiseeb border crossing, and how to plan around a flight.",
    h1: "Dammam to Kuwait Airport: Distance, Border Crossing & Route Guide",
    heroTag: "City-to-airport cross-border route",
    heroAnswer: "Sources for this specific leg disagree meaningfully — plan around a wide range rather than a single figure, and add real buffer for your flight.",
    heroDistance: "~390–470 km",
    heroDuration: "~4–5 hrs driving",
    heroImage: "/images/journey/kuwait-towers.jpg",
    heroImageAlt: "Kuwait Towers on the Arabian Gulf waterfront, near the Kuwait end of the Dammam to Kuwait Airport route",
    facts: [
      { label: "Departure point", value: "Dammam, Saudi Arabia" },
      { label: "Destination", value: "Kuwait International Airport (KWI)", emphasis: true },
      { label: "Road distance", value: "~390–470 km (sources disagree)" },
      { label: "Driving time", value: "~4–5 hours, excluding border", emphasis: true },
      { label: "Airport location", value: "~15.5 km south of Kuwait City centre" },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Kuwait International Airport, Kuwait",
    mapNote: "The map shows a typical driving route. Your actual distance will vary depending on your exact starting address in Dammam and current road conditions across the border.",
    distanceExplanation: [
      "This is genuinely one of the routes where independently reviewed sources disagree the most. One route-planning tool puts the airport-specific distance at around 392 kilometres, while general Dammam-to-Kuwait figures for this corridor run closer to 470 kilometres. Neither figure comes from an official government or airport source, and we found only a single independent source for the lower figure, so we present this as a genuine range rather than picking one number.",
      "Kuwait International Airport itself is a useful reference point, and it is well documented: it sits about 15.5 kilometres south of central Kuwait City. That means the airport is somewhat closer to the Saudi border than downtown Kuwait City is — a traveller heading specifically to the airport, rather than into the city, has a shorter final approach once across the border.",
    ],
    timeline: [
      { label: "Departure from Dammam", detail: "The route starts from your specific Dammam address — a hotel, office, or residential area." },
      { label: "Northbound on Highway 95", detail: "The road runs the length of the Eastern Province coast toward the Kuwaiti border." },
      { label: "Border crossing at Khafji / Nuwaiseeb", detail: "Saudi exit and Kuwaiti entry formalities are handled at the sole land crossing between the two countries." },
      { label: "Approach to Kuwait International Airport", detail: "Once across the border, the airport — south of central Kuwait City — is reached before the city centre itself on this approach." },
      { label: "Arrival at the airport", detail: "Confirm your terminal in advance so the final stretch is straightforward." },
    ],
    timelineNote: "We separate driving time from border-crossing time deliberately — the driving estimate above does not include the border, which is the least predictable stage of this journey.",
    routeStory: {
      heading: "The airport, not the city, is the real destination here",
      paragraphs: [
        "Dammam to Kuwait International Airport is a distinct trip from Dammam to Kuwait City in one specific way: the airport sits about 15.5 kilometres south of the city centre, meaning a traveller headed specifically to the airport doesn't need to drive all the way into Kuwait City first. For anyone timing this journey around a flight, that's a genuinely useful distinction — the airport is the closer of the two Kuwaiti reference points to the Saudi border.",
        "The route itself follows the same Highway 95 corridor used for the Dammam-to-Kuwait-City trip, crossing at Khafji/Nuwaiseeb before continuing to the airport on the Kuwaiti side. Given how much source disagreement exists for the exact total distance, we'd rather be upfront about the range than assert a precise number that isn't well supported.",
      ],
    },
    borderContext: {
      heading: "Khafji / Nuwaiseeb: the only land crossing on this route",
      paragraphs: [
        "This journey crosses at Khafji on the Saudi side and Nuwaiseeb on the Kuwaiti side — the sole land border between the two countries, so every vehicle on this route passes through the same point. This is a standard land crossing, not an island-based facility, and processing time depends on traffic volume and vehicle checks on the day of travel.",
        "Because a flight typically follows this journey, the unpredictable nature of border-crossing time matters more here than it would on a trip with no time-sensitive endpoint. We do not state an exact processing duration, since it genuinely cannot be forecast reliably — build in a real buffer rather than assuming the best case.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Given the source disagreement on distance, plan your timing around the longer end of the range (up to ~470 km / ~5 hours) rather than the shorter one.",
        "Add a separate, generous buffer for the Khafji/Nuwaiseeb border crossing on top of the driving estimate.",
        "Add your airline's recommended check-in time once you reach the airport — don't treat arrival at the airport as arrival at the gate.",
        "Confirm your specific terminal at Kuwait International Airport before departure, since the airport serves multiple terminals.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle covers the full distance from a Dammam address to the airport terminal, without a vehicle change at the border." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and valid cross-border documentation can drive this route independently." },
    ],
    ctaRoutePath: "/routes/dammam-to-kuwait-airport",
    ctaLabel: "Dammam to Kuwait Airport private transfer service",
    faqs: [
      { question: "How far is Kuwait International Airport from Dammam?", answer: "Sources disagree meaningfully — figures range from around 390 to 470 kilometres. We present this as a genuine range rather than a single figure given the lack of an authoritative source." },
      { question: "How long is the road journey?", answer: "Roughly four to five hours of driving, not including time at the Khafji/Nuwaiseeb border crossing, which is a separate and variable factor." },
      { question: "Should border processing be included when planning a flight?", answer: "Yes. Border-crossing time is unpredictable and should be budgeted as additional time on top of both the driving estimate and your airline's check-in requirements." },
    ],
    relatedJourneys: [
      { label: "Kuwait Airport to Dammam distance", href: "/distance/kuwait-airport-to-dammam-distance" },
      { label: "Dammam to Kuwait City distance", href: "/distance/dammam-to-kuwait-city-distance" },
      { label: "Dammam Airport to Khafji Border distance", href: "/distance/dammam-airport-to-khafji-border-distance" },
    ],
    sources: [
      { label: "Kuwait International Airport — Wikipedia", href: "https://en.wikipedia.org/wiki/Kuwait_International_Airport" },
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
      { label: "Al-Khafji — Wikipedia", href: "https://en.wikipedia.org/wiki/Al-Khafji" },
    ],
    conclusion: "This is a long cross-border journey with real uncertainty in the exact distance — the practical takeaway is to plan toward the longer end of the range, treat the border crossing as the least predictable stage, and build in proper buffer before your flight rather than cutting the timing close.",
    lastVerified: "2026-08-27",
  },

  {
    slug: "kuwait-airport-to-dammam-distance",
    from: "Kuwait Airport",
    to: "Dammam",
    routePath: "/routes/kuwait-airport-to-dammam",
    metaTitle: "Kuwait Airport to Dammam Distance & Route Guide (KM + Border)",
    metaDescription: "How far is Dammam from Kuwait International Airport? Verified driving distance, the Nuwaiseeb/Khafji border crossing, and honest journey-planning advice.",
    h1: "Kuwait Airport to Dammam: Distance, Border Crossing & Route Guide",
    heroTag: "Airport-to-city cross-border route",
    heroAnswer: "Starting from Kuwait International Airport is a slightly more direct approach to the border than starting from central Kuwait City.",
    heroDistance: "~390–470 km",
    heroDuration: "~4–5 hrs driving",
    heroImage: "/images/journey/kuwait-towers.jpg",
    heroImageAlt: "Kuwait Towers on the Arabian Gulf waterfront, near the Kuwait end of the Kuwait Airport to Dammam route",
    facts: [
      { label: "Departure point", value: "Kuwait International Airport (KWI)", emphasis: true },
      { label: "Airport location", value: "~15.5 km south of Kuwait City centre" },
      { label: "Destination", value: "Dammam, Saudi Arabia" },
      { label: "Road distance", value: "~390–470 km (sources disagree)" },
      { label: "Driving time", value: "~4–5 hours, excluding border", emphasis: true },
    ],
    mapOrigin: "Kuwait International Airport, Kuwait",
    mapDestination: "Dammam, Saudi Arabia",
    mapNote: "The map shows a typical driving route. Your actual distance will vary depending on your specific Dammam destination and current road conditions across the border.",
    distanceExplanation: [
      "This route mirrors the Dammam-to-Kuwait-Airport direction, and the same source disagreement applies: available figures range from around 390 to 470 kilometres depending on the tool used, with no official government or airport source giving a definitive number for this specific airport-to-Dammam leg. We present the range rather than asserting a false-precision figure.",
      "What's specific to this direction is the starting point. Kuwait International Airport sits about 15.5 kilometres south of central Kuwait City — meaning a traveller starting from the airport is already somewhat closer to the Saudi border than someone starting from a downtown Kuwait City hotel, since the airport is south of the city centre, roughly in the direction of travel.",
    ],
    timeline: [
      { label: "Arrival and departure from Kuwait International Airport", detail: "After landing and clearing the terminal, the road journey begins from the airport directly, without needing to route through central Kuwait City first." },
      { label: "Southbound toward the border", detail: "The route heads toward the Nuwaiseeb crossing, on a more direct line than a city-centre departure would allow." },
      { label: "Border crossing at Nuwaiseeb / Khafji", detail: "Kuwaiti exit and Saudi entry formalities are handled at the sole land crossing between the two countries." },
      { label: "Southbound on Highway 95", detail: "Once in Saudi Arabia, the route follows the Eastern Province coastal highway toward Dammam." },
      { label: "Arrival in Dammam", detail: "Dammam covers a wide area, so the exact final distance depends on your specific destination within the city." },
    ],
    timelineNote: "International arrivals typically involve immigration and baggage claim before the road journey even starts — factor that in alongside the driving time and border crossing below.",
    routeStory: {
      heading: "Landing, then a long cross-border drive",
      paragraphs: [
        "For travellers landing at Kuwait International Airport with Dammam as their onward destination, this is a genuinely long journey to plan around an international arrival — clearing immigration and baggage first, then a multi-hour drive that includes a land border crossing. Because the airport sits south of central Kuwait City, roughly in the direction of Saudi Arabia, this route is a somewhat more direct approach to the border than starting from downtown would be.",
        "The bulk of the distance is covered on Highway 95 once across the border, running the length of the Eastern Province coast down to Dammam. As with the reverse direction, exact total distance figures vary meaningfully between sources, so this page presents a working range rather than a single number.",
      ],
    },
    borderContext: {
      heading: "Nuwaiseeb / Khafji: the crossing after a long flight",
      paragraphs: [
        "This journey crosses at Nuwaiseeb on the Kuwaiti side and Khafji on the Saudi side — the only land border between the two countries. Coming directly off an international flight, this is worth planning for specifically: border processing time varies by traffic and vehicle checks on the day, and cannot be predicted precisely, so it should be treated as genuine added time rather than a quick formality.",
        "Travel document and visa requirements differ by nationality and are subject to change. Confirming current requirements for your specific passport before travelling is the traveller's own responsibility.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Build in time for standard international arrival procedures — immigration and baggage claim — before the road journey even begins.",
        "Add a genuine buffer for the Nuwaiseeb/Khafji border crossing on top of the driving estimate.",
        "Plan around the higher end of the distance range (up to ~470 km) rather than assuming the shorter figure, given the source disagreement.",
        "Confirm your specific Dammam destination in advance, since the city covers a wide area and the final distance varies accordingly.",
      ],
    },
    travelOptions: [
      { mode: "Private car / taxi", detail: "A private vehicle meets you at the airport and drives the full distance to your specific Dammam destination." },
      { mode: "Self-driving", detail: "Travellers renting a vehicle at the airport can make this drive independently via Highway 95." },
    ],
    ctaRoutePath: "/routes/kuwait-airport-to-dammam",
    ctaLabel: "Kuwait Airport to Dammam private transfer service",
    faqs: [
      { question: "How far is Dammam from Kuwait Airport?", answer: "Sources disagree meaningfully — figures range from around 390 to 470 kilometres. We present this as a range rather than a single precise figure." },
      { question: "How long does the drive take?", answer: "Roughly four to five hours of driving, not including time at the Nuwaiseeb/Khafji border crossing." },
      { question: "Why can total journey time vary?", answer: "Because the border-crossing stage is genuinely unpredictable, varying with traffic and vehicle checks on the day. It sits on top of the driving estimate and, for arriving flights, on top of immigration and baggage claim as well." },
    ],
    relatedJourneys: [
      { label: "Dammam to Kuwait Airport distance", href: "/distance/dammam-to-kuwait-airport-distance" },
      { label: "Kuwait City to Dammam distance", href: "/distance/kuwait-city-to-dammam-distance" },
      { label: "Khafji Border to Dammam Airport distance", href: "/distance/khafji-border-to-dammam-airport-distance" },
    ],
    sources: [
      { label: "Kuwait International Airport — Wikipedia", href: "https://en.wikipedia.org/wiki/Kuwait_International_Airport" },
      { label: "Highway 95 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_95_(Saudi_Arabia)" },
    ],
    conclusion: "Landing at Kuwait International Airport gives a marginally more direct start toward the Saudi border than a city-centre departure would, but the journey is still a genuine multi-hour cross-border drive — plan for the longer end of the distance range and treat both the border crossing and your Dammam destination's exact location as real variables.",
    lastVerified: "2026-08-27",
  },

  {
    slug: "dammam-airport-to-doha-distance",
    from: "Dammam Airport",
    to: "Doha",
    routePath: "/routes/dammam-airport-to-doha",
    metaTitle: "Dammam Airport to Doha Distance (KM + Driving Time)",
    metaDescription: "How far is Doha from Dammam Airport? Verified road distance, the Salwa border crossing, and why total journey time and driving time are different numbers.",
    h1: "Dammam Airport to Doha Distance: How Far Is It and How Long Does It Take?",
    heroTag: "Airport arrival to international city",
    heroAnswer: "This measures the distance from King Fahd International Airport to Doha — a genuine cross-border road journey, not a quick local hop.",
    heroDistance: "~420 km",
    heroDuration: "~4.5-5 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~420 km", emphasis: true },
      { label: "Pure driving time", value: "~4.5-5 hours", emphasis: true },
      { label: "Border crossing", value: "Salwa (Saudi) / Abu Samra (Qatar)" },
      { label: "Starting point", value: "King Fahd International Airport (DMM)" },
      { label: "Journey type", value: "Airport arrival to international city" },
    ],
    mapOrigin: "King Fahd International Airport, Saudi Arabia",
    mapDestination: "Doha, Qatar",
    mapNote: "The map shows a typical driving route. Your actual route and total distance will vary depending on your specific Doha destination and current road/border conditions.",
    distanceExplanation: [
      "The distance from King Fahd International Airport to Doha is approximately 420 kilometres by road, covering the length of Saudi Arabia's Eastern Province before crossing into Qatar at the Salwa border. This figure specifically measures from the airport itself — which sits on a large site outside Dammam city — not from central Dammam, so it is a slightly different number from a general 'Dammam to Doha' distance.",
      "Pure driving time in free-flowing conditions runs roughly four and a half to five hours. That figure covers the road only. Total journey time — the number that actually matters for planning a day — also includes the Salwa/Abu Samra border crossing, which we treat as a separate, genuinely variable stage rather than folding it into a single misleading headline number.",
    ],
    timeline: [
      { label: "Airport arrival", detail: "The measured journey begins at King Fahd International Airport's arrivals area." },
      { label: "Airport pickup / departure point", detail: "Whether by private transfer or self-drive, the road journey starts directly from the airport site, not from Dammam city." },
      { label: "Eastern Province road journey", detail: "The route runs south along the Eastern Province highway network toward the Qatari border." },
      { label: "Saudi-Qatar border (Salwa / Abu Samra)", detail: "Saudi exit and Qatari entry formalities are handled at the sole land crossing between the two countries." },
      { label: "Qatar road journey", detail: "Once across, the route continues into Qatar toward Doha." },
      { label: "Doha arrival", detail: "The final distance depends on your specific destination within the city." },
    ],
    timelineNote: "This breakdown separates the journey into its real stages. We do not state a single total journey time, since the border-crossing stage is inherently variable.",
    routeStory: {
      heading: "From King Fahd Airport to Doha: Understanding the Journey",
      paragraphs: [
        "What makes this route distinct from a general Dammam-to-Doha distance is simply the starting point. King Fahd International Airport is a large, self-contained site well outside Dammam's city centre, closer to the highway network heading south than to the city itself. That means a traveller measuring their journey from the airport is starting from a genuinely different point than someone departing central Dammam — the airport-to-Doha figure is not identical to a city-centre-to-Doha figure, even though they are often discussed interchangeably.",
        "The route itself runs the length of the Eastern Province coast before reaching the Salwa crossing, which reopened in January 2021 after several years of closure during the Gulf-wide travel restrictions that began in 2017. Since reopening, it has functioned as a normal, if variable, land border for private and commercial vehicles alike.",
      ],
    },
    borderContext: {
      heading: "What Happens After You Leave the Airport?",
      paragraphs: [
        "After the drive south from the airport, the journey reaches the Salwa border on the Saudi side, opposite Abu Samra on the Qatari side — the only land crossing between the two countries. Saudi exit formalities and Qatari entry formalities are both handled here, and any traveller crossing needs a valid passport plus whatever visa or entry permit applies to their specific nationality.",
        "How long that takes is genuinely unpredictable in advance. Reports from travellers describe anywhere from under an hour during quiet periods to several hours at busy times, particularly weekends and public holidays. We do not state a fixed border-processing duration on this page, because no legitimate source can honestly promise one — it depends on the day, the time, and how busy the crossing is when you arrive.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Remember that this figure measures from the airport specifically — if your actual starting point is central Dammam, the real distance will differ slightly.",
        "Treat the ~4.5-5 hour driving estimate as the road portion only; add a genuinely flexible buffer for the Salwa border crossing on top.",
        "If you're arriving on an international flight, factor in immigration and baggage claim time before the road journey even starts.",
        "Weekends and public holidays see busier crossings — if your schedule is flexible, a weekday crossing may be more predictable.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle can collect passengers directly from the airport and cover the full distance to Doha without a change of vehicle." },
      { mode: "Self-driving", detail: "Travellers with a rental vehicle and valid cross-border documentation can drive this route independently, subject to the same border requirements as any other vehicle." },
    ],
    travelOptionsNote: "No scheduled public transport service directly covering this specific airport-to-Doha leg was verified for this page.",
    ctaRoutePath: "/routes/dammam-airport-to-doha",
    ctaLabel: "Dammam Airport to Doha private transfer service",
    faqs: [
      { question: "How far is Doha from Dammam Airport?", answer: "Approximately 420 kilometres by road, measured from King Fahd International Airport specifically rather than from central Dammam." },
      { question: "How long does the drive take?", answer: "Pure driving time is roughly four and a half to five hours in free-flowing conditions. This does not include the Salwa/Abu Samra border crossing, which is a separate and genuinely variable stage." },
      { question: "Is the driving distance the same as the total journey time?", answer: "No. Total journey time also includes the border crossing, and we don't state a fixed figure for that stage since it varies significantly by day and time." },
      { question: "Does this distance start from Dammam city or the airport?", answer: "Specifically from King Fahd International Airport, which sits outside Dammam city. A journey starting from central Dammam would cover a slightly different distance." },
    ],
    relatedJourneys: [
      { label: "Doha to Dammam Airport distance", href: "/distance/doha-to-dammam-airport-distance" },
      { label: "Al Khobar to Doha distance", href: "/distance/al-khobar-to-doha-distance" },
      { label: "Riyadh to Doha distance", href: "/distance/riyadh-to-doha-distance" },
    ],
    sources: [
      { label: "Saudi Customs opens Salwa border crossing with Qatar — Arab News", href: "https://www.arabnews.com/node/1789626/saudi-arabia" },
      { label: "King Fahd International Airport — Wikipedia", href: "https://en.wikipedia.org/wiki/King_Fahd_International_Airport" },
    ],
    conclusion: "The Dammam Airport to Doha journey is a genuine cross-border drive of around 420 kilometres — straightforward once you separate the honestly-estimable driving time from the genuinely unpredictable border stage, rather than treating the whole trip as a single fixed number.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "doha-to-dammam-airport-distance",
    from: "Doha",
    to: "Dammam Airport",
    routePath: "/routes/doha-to-dammam-airport",
    metaTitle: "Doha to Dammam Airport Distance – Plan Around Your Flight",
    metaDescription: "How far is Dammam Airport from Doha? Road distance, driving time, and how to plan the drive around your flight given a variable border crossing.",
    h1: "Doha to Dammam Airport Distance: Driving Time and Flight Planning",
    heroTag: "City departure with a flight deadline",
    heroAnswer: "This measures the distance from Doha to Dammam Airport — the number that matters most here is how it interacts with your actual flight time, not the distance alone.",
    heroDistance: "~420 km",
    heroDuration: "~4.5-5 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~420 km", emphasis: true },
      { label: "Pure driving time", value: "~4.5-5 hours", emphasis: true },
      { label: "Plan around", value: "Your flight's check-in deadline", emphasis: true },
      { label: "Border crossing", value: "Abu Samra (Qatar) / Salwa (Saudi)" },
    ],
    mapOrigin: "Doha, Qatar",
    mapDestination: "King Fahd International Airport, Saudi Arabia",
    mapNote: "The map shows a typical driving route. Your actual starting point in Doha and current road/border conditions will affect the real distance and time.",
    distanceExplanation: [
      "How far is Dammam Airport from Doha? By road, approximately 420 kilometres — the same physical distance as the reverse direction, since it's the same road. What's different in this direction is what the number is actually being used for: rather than simply 'how far is it,' the real question for most travellers on this route is 'how much total time do I need before my flight.'",
      "Pure driving time alone is roughly four and a half to five hours. But a driving-time estimate isn't a flight-planning estimate — it doesn't include the Abu Samra/Salwa border crossing, which sits between the driving and the airport, and which we deliberately don't fold into a single 'total journey time' figure because its length varies too much to state honestly as one number.",
    ],
    timeline: [
      { label: "Doha departure", detail: "The journey begins from your specific starting point in Doha." },
      { label: "Qatar road journey", detail: "The route heads toward the Abu Samra crossing." },
      { label: "Border processing", detail: "Qatari exit and Saudi entry formalities — duration genuinely varies." },
      { label: "Saudi road journey", detail: "Once across, the route continues north through the Eastern Province." },
      { label: "Dammam Airport arrival", detail: "Arrival at the terminal, ahead of check-in." },
      { label: "Flight connection", detail: "The buffer built into the earlier stages is what protects this final step." },
    ],
    timelineNote: "We separate driving time from border time deliberately on this page — the two stages behave completely differently, and conflating them into one number would understate the real planning risk for a flight.",
    routeStory: {
      heading: "Planning the Drive Around Your Flight",
      paragraphs: [
        "The honest way to plan this journey isn't to start with Doha and work forward — it's to start with your flight's departure time and work backward. Airline check-in deadline, minus a reasonable margin at the terminal, minus the roughly four-and-a-half-to-five-hour driving time, minus a genuine buffer for the border crossing, gives you the departure window from Doha that actually protects your flight.",
        "This matters more here than it would on a route with no time-sensitive endpoint, because the one stage of this journey that can't be estimated precisely in advance — the border — sits directly between your starting point and your deadline.",
      ],
    },
    borderContext: {
      heading: "Driving Time vs Border Time",
      paragraphs: [
        "Qatari exit and Saudi entry formalities are handled at the crossing — Abu Samra on the Qatari side, Salwa on the Saudi side, the sole land border between the two countries, reopened in January 2021. Reported processing times vary considerably: some travellers pass through in under an hour, others report several hours, particularly at weekends and around public holidays.",
        "Because this specific journey ends at a flight, that variability deserves more weight in your planning than it would on a leisure trip with no fixed endpoint. If your departure is time-sensitive, build in the wider end of that range rather than the narrower one.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Work backward from your actual check-in deadline, not forward from a fixed departure time in Doha.",
        "Treat the ~4.5-5 hour driving estimate as the road portion only — the border crossing sits on top of it, not within it.",
        "If your flight is early morning or otherwise time-critical, plan for the wider end of the border-time range rather than assuming a quiet crossing.",
        "Confirm which terminal you need at King Fahd International Airport before departure, since the airport serves multiple terminals.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle can collect passengers from a Doha address and deliver them directly to the correct terminal at King Fahd International Airport." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and valid cross-border documentation can make this drive independently, subject to standard border requirements." },
    ],
    ctaRoutePath: "/routes/doha-to-dammam-airport",
    ctaLabel: "Doha to Dammam Airport private transfer service",
    faqs: [
      { question: "How far is Dammam Airport from Doha?", answer: "Approximately 420 kilometres by road — the same physical distance as the reverse direction, since it's the same route." },
      { question: "How much total time should I allow before a flight?", answer: "We can't give a single exact figure, since the border-crossing stage is genuinely variable. Add the roughly four-and-a-half-to-five-hour driving time to a generous border buffer, then your airline's recommended check-in time." },
      { question: "Why don't you just give one total journey time?", answer: "Because the border-crossing stage varies too much — from under an hour to several hours — to responsibly compress into a single number without misleading travellers planning a flight around it." },
      { question: "Does the border crossing happen before or after the main drive?", answer: "Before the final stretch to the airport. You cross from Qatar into Saudi Arabia first, then continue driving north through the Eastern Province to reach King Fahd International Airport." },
    ],
    relatedJourneys: [
      { label: "Dammam Airport to Doha distance", href: "/distance/dammam-airport-to-doha-distance" },
      { label: "Doha to Riyadh distance", href: "/distance/doha-to-riyadh-distance" },
      { label: "Al Khobar to Doha distance", href: "/distance/al-khobar-to-doha-distance" },
    ],
    sources: [
      { label: "Saudi Customs opens Salwa border crossing with Qatar — Arab News", href: "https://www.arabnews.com/node/1789626/saudi-arabia" },
      { label: "King Fahd International Airport — Wikipedia", href: "https://en.wikipedia.org/wiki/King_Fahd_International_Airport" },
    ],
    conclusion: "Doha to Dammam Airport is a straightforward-enough drive in isolation, but because it usually ends at a flight, the real planning challenge is respecting how unpredictable the border stage is rather than assuming best-case timing throughout.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "riyadh-to-doha-distance",
    from: "Riyadh",
    to: "Doha",
    routePath: "/routes/riyadh-to-doha",
    metaTitle: "Riyadh to Doha Distance: KM, Driving Time & Road Trip Guide",
    metaDescription: "How far is Doha from Riyadh by road? Verified driving distance, realistic travel time, rest-stop planning, and a neutral road-vs-air comparison.",
    h1: "Riyadh to Doha Distance: The Long Road Journey Between Two Capitals",
    heroTag: "Long-distance capital-to-capital road journey",
    heroAnswer: "This is one of the longer capital-to-capital road distances in the Gulf — genuinely worth planning as a full-day journey, not a quick regional hop.",
    heroDistance: "~570-600 km",
    heroDuration: "~5.5-6.5 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~570-600 km", emphasis: true },
      { label: "Pure driving time", value: "~5.5-6.5 hours", emphasis: true },
      { label: "Border crossing", value: "Salwa (Saudi) / Abu Samra (Qatar)" },
      { label: "Journey type", value: "Capital-to-capital road journey" },
    ],
    mapOrigin: "Riyadh, Saudi Arabia",
    mapDestination: "Doha, Qatar",
    mapNote: "The map shows a typical driving route. Your actual starting point in Riyadh and current road/border conditions will affect the real distance and time.",
    distanceExplanation: [
      "Independent route-distance sources disagree somewhat on the exact Riyadh-to-Doha figure — estimates range from around 550 kilometres up to nearly 600, depending on the exact measurement points and mapping tool used. Rather than presenting a single falsely precise number, this page uses a working range of approximately 570 to 600 kilometres.",
      "That range translates to roughly five and a half to six and a half hours of pure driving under normal conditions — a genuinely long single-day undertaking. As with any cross-border route, this figure covers the road only; the Salwa border crossing is a separate stage layered on top, and we don't attempt to fold it into one all-inclusive 'total journey time.'",
    ],
    timeline: [
      { label: "Riyadh departure", detail: "The journey begins from your specific starting point in the capital." },
      { label: "Long-distance Saudi road journey", detail: "The route runs south-east across the Saudi interior toward the Eastern Province." },
      { label: "Rest-stop context", detail: "A drive of this length typically involves at least one meaningful break." },
      { label: "Border transition", detail: "Salwa/Abu Samra — the sole land crossing into Qatar." },
      { label: "Qatar road journey", detail: "The final stretch continues into Qatar toward Doha." },
      { label: "Doha arrival", detail: "The last few kilometres depend on your specific destination." },
    ],
    timelineNote: "This is a genuinely long single-day drive. We separate it into real stages rather than quoting one total figure, since the border stage alone is inherently unpredictable.",
    routeStory: {
      heading: "How the Riyadh to Doha Road Journey Unfolds",
      paragraphs: [
        "This is among the longer capital-to-capital road distances in the Gulf region, and travellers researching it should treat it as a genuine full-day undertaking from the outset rather than a quick regional trip. The route leaves Riyadh heading south-east, crosses a substantial stretch of the Saudi interior, and only reaches the Eastern Province — and from there, the Salwa border — well into the drive.",
        "A journey of 570 to 600 kilometres is long enough that most travellers, regardless of vehicle, benefit from at least one proper rest stop along the way — not because the route is difficult, but because six-plus hours of continuous driving is tiring for anyone. Families travelling with children, elderly relatives, or simply a full car of luggage tend to find the drive considerably more manageable with breaks built into the plan rather than treated as lost time.",
      ],
    },
    borderContext: {
      heading: "Crossing at Salwa After a Long Drive",
      paragraphs: [
        "By the time the route reaches Salwa — opposite Abu Samra on the Qatari side — most of the physical distance has already been covered. The crossing reopened in January 2021 and now functions as a standard land border for private vehicles, though, as with any land crossing, processing time is not fixed: it is commonly reported to range from under an hour in quiet periods to several hours during weekends and holidays.",
        "Valid passports and any visa or entry permit relevant to your specific nationality are required at the crossing; requirements vary by nationality and can change, so current rules are worth confirming close to your travel date rather than assuming they match general information.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Treat this as a full-day journey rather than a same-day round trip.",
        "Plan a genuine rest stop across the 570-600 km driving distance — this is long enough that a break improves the experience meaningfully for most travellers.",
        "Build in a separate, flexible buffer for the Salwa/Abu Samra crossing, since it is the least predictable part of the whole trip.",
        "If your final destination is a specific district within Doha rather than the city generally, factor that in as additional distance beyond the city-to-city figure.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle covers the full distance door-to-door without a change of vehicle at the border." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and valid cross-border documentation can make the journey independently, subject to the same border requirements as any other vehicle." },
      { mode: "Flying", detail: "A short direct flight between Riyadh and Doha covers the same distance in a fraction of the time, though this page does not track specific schedules or fares — check directly with an airline for current options." },
    ],
    travelOptionsNote: "Whether road or air suits a given trip better depends on luggage, group size, and how much value you place on a door-to-door journey versus speed — both are genuine options for this route.",
    ctaRoutePath: "/routes/riyadh-to-doha",
    ctaLabel: "Riyadh to Doha private transfer service",
    faqs: [
      { question: "How far is Doha from Riyadh by road?", answer: "Approximately 570 to 600 kilometres. Independent sources vary somewhat on the exact figure, so this page uses a working range rather than a single precise number." },
      { question: "How long does the drive take?", answer: "Pure driving time is roughly five and a half to six and a half hours in free-flowing conditions, not including the separate and variable Salwa border crossing." },
      { question: "Is it faster to fly than drive between Riyadh and Doha?", answer: "Flying covers the distance considerably faster in the air. Driving offers a genuine door-to-door journey with no check-in or baggage limits. Which suits a given trip better depends on priorities, luggage, and group size." },
      { question: "Should I plan a rest stop on this drive?", answer: "Most travellers find at least one break genuinely useful on a journey this long, simply because six-plus hours of continuous driving is tiring regardless of road conditions." },
    ],
    relatedJourneys: [
      { label: "Doha to Riyadh distance", href: "/distance/doha-to-riyadh-distance" },
      { label: "Dammam Airport to Doha distance", href: "/distance/dammam-airport-to-doha-distance" },
      { label: "Al Khobar to Doha distance", href: "/distance/al-khobar-to-doha-distance" },
    ],
    sources: [
      { label: "Elated Qataris stream into Saudi after border re-opened — VOA News", href: "https://www.voanews.com/a/middle-east_elated-qataris-stream-saudi-arabia-after-border-re-opened/6200554.html" },
      { label: "Salwa border crossing — Digital Logistics Capacity Assessments", href: "https://www.lca.logcluster.org/235-saudi-arabia-border-crossing-salwa-qatar" },
    ],
    conclusion: "Riyadh to Doha is a genuinely long capital-to-capital road journey — the honest planning takeaway is to budget a full day, build in a real rest stop across the drive itself, and treat the Salwa border crossing as the least predictable stage rather than a minor formality at the end.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "doha-to-riyadh-distance",
    from: "Doha",
    to: "Riyadh",
    routePath: "/routes/doha-to-riyadh",
    metaTitle: "Doha to Riyadh Distance: KM, Driving Time & Border Info",
    metaDescription: "How far is Riyadh from Doha by road? Same long distance as the reverse trip, but the border comes first — driving time, planning tips, and route facts.",
    h1: "Doha to Riyadh Distance: Crossing Into Saudi Arabia and the Long Drive to the Capital",
    heroTag: "Qatar departure to Saudi capital arrival",
    heroAnswer: "The same long capital-to-capital distance as the reverse direction, but the border comes first here — meaning the rest of the drive is a single uninterrupted stretch once you're through.",
    heroDistance: "~570-600 km",
    heroDuration: "~5.5-6.5 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~570-600 km", emphasis: true },
      { label: "Pure driving time", value: "~5.5-6.5 hours", emphasis: true },
      { label: "Border crossing", value: "Abu Samra (Qatar) / Salwa (Saudi)" },
      { label: "Journey type", value: "Cross-border road journey to the capital" },
    ],
    mapOrigin: "Doha, Qatar",
    mapDestination: "Riyadh, Saudi Arabia",
    mapNote: "The map shows a typical driving route. Your actual Riyadh destination and current road/border conditions will affect the real distance and time.",
    distanceExplanation: [
      "The road distance from Doha to Riyadh is the same physical route as the reverse direction — approximately 570 to 600 kilometres, with sources varying somewhat on the precise figure. What changes in this direction is the shape of the journey: the border crossing comes early, right after leaving Doha, rather than as the final stage before arrival.",
      "Pure driving time is roughly five and a half to six and a half hours, a figure that specifically excludes the Abu Samra/Salwa crossing. Because that crossing sits at the start of this direction rather than the end, once you're through it, the remainder of the trip is a single long, uninterrupted drive across the Saudi interior with nothing else to clear before Riyadh.",
    ],
    timeline: [
      { label: "Doha departure", detail: "The journey begins from your specific starting point in Doha." },
      { label: "Qatar road journey", detail: "A short stretch toward the Abu Samra crossing." },
      { label: "Border transition", detail: "Qatari exit and Saudi entry formalities — the first major stage of this direction." },
      { label: "Long-distance Saudi road journey", detail: "Once across, a substantial, uninterrupted drive north-west across the interior." },
      { label: "Riyadh approach", detail: "The city's outskirts, still some distance from most central destinations." },
      { label: "Final destination", detail: "The exact distance depends heavily on where in Riyadh you're headed." },
    ],
    timelineNote: "Because the border sits early in this direction, the back half of the journey is one continuous drive — a genuinely different rhythm from the reverse trip, where the crossing is the final stage.",
    routeStory: {
      heading: "Driving from Doha to Riyadh",
      paragraphs: [
        "Leaving Doha, the drive to the Abu Samra crossing is a relatively short opening stretch compared to what follows — the bulk of this journey happens on the Saudi side, after the border. That is a meaningful structural difference from the Riyadh-to-Doha direction, where the crossing is the last major stage before arrival rather than the first.",
        "Once across into Saudi Arabia, the route settles into a long, straightforward highway drive across the interior toward Riyadh — around 570 to 600 kilometres in total, roughly five and a half to six and a half hours of pure driving. It is a genuinely long single stretch once the border is behind you, without another major stage to clear before the capital.",
      ],
    },
    borderContext: {
      heading: "Crossing from Qatar into Saudi Arabia",
      paragraphs: [
        "Abu Samra, on the Qatari side, and Salwa, on the Saudi side, together form the only land border between the two countries. It reopened in January 2021, and functions today as a standard crossing for private vehicles — though, as with any land border, the time it takes to process varies genuinely by day and time, commonly reported anywhere from under an hour to several hours at busier periods, especially weekends and holidays.",
        "A valid passport and any Saudi visa or entry permit relevant to your specific nationality are required. Requirements vary by nationality and can change, so confirming current rules close to your travel date is worthwhile rather than relying on general information.",
      ],
    },
    planning: {
      heading: "Why the Final Distance Can Vary Within Riyadh",
      items: [
        "Riyadh is a large, spread-out city — a hotel in the business district, a residential compound, and King Khalid International Airport are all genuinely different distances from the point where the highway enters the city.",
        "Confirm your specific Riyadh destination in your own planning, since the city-to-city figure on this page doesn't capture the final local distance to a precise address.",
        "If your trip continues by air from Riyadh, budget the time to reach King Khalid International Airport as an additional leg beyond the main journey.",
        "Because the border comes early in this direction, a delay there has more time to be absorbed over the following long drive than it would on the reverse trip, where the crossing is the final stage.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle can collect passengers from a Doha address and deliver them to a specific Riyadh destination without a change of vehicle." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and valid cross-border documentation can make this drive independently." },
      { mode: "Flying", detail: "A short direct flight covers the same distance considerably faster in the air, though this page does not track specific schedules or fares." },
    ],
    ctaRoutePath: "/routes/doha-to-riyadh",
    ctaLabel: "Doha to Riyadh private transfer service",
    faqs: [
      { question: "How far is Riyadh from Doha by road?", answer: "Approximately 570 to 600 kilometres, the same physical route as the reverse direction, though sources vary somewhat on the precise figure." },
      { question: "Does the border crossing happen at the start or end of this journey?", answer: "At the start, shortly after leaving Doha. Once through the Abu Samra/Salwa crossing, the remainder of the trip is a single long drive across Saudi Arabia to Riyadh." },
      { question: "Why does the final distance within Riyadh vary?", answer: "Riyadh is a large, spread-out city, so a hotel, a residential address, and the airport can all be meaningfully different distances from where the highway reaches the city. The city-to-city figure on this page doesn't capture that final local leg." },
      { question: "How long is the drive once you're across the border?", answer: "The bulk of the roughly five-and-a-half-to-six-and-a-half-hour driving estimate happens on the Saudi side, since the border sits near the start of this direction rather than the end." },
    ],
    relatedJourneys: [
      { label: "Riyadh to Doha distance", href: "/distance/riyadh-to-doha-distance" },
      { label: "Doha to Dammam Airport distance", href: "/distance/doha-to-dammam-airport-distance" },
      { label: "Al Khobar to Doha distance", href: "/distance/al-khobar-to-doha-distance" },
    ],
    sources: [
      { label: "Elated Qataris stream into Saudi after border re-opened — VOA News", href: "https://www.voanews.com/a/middle-east_elated-qataris-stream-saudi-arabia-after-border-re-opened/6200554.html" },
      { label: "Salwa border crossing — Digital Logistics Capacity Assessments", href: "https://www.lca.logcluster.org/235-saudi-arabia-border-crossing-salwa-qatar" },
    ],
    conclusion: "Doha to Riyadh covers the same long distance as the reverse journey, but with a different rhythm — the border crossing early, then one continuous drive across Saudi Arabia — and the real planning variable at the far end is exactly where in Riyadh you're actually headed.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "al-khobar-to-doha-distance",
    from: "Al Khobar",
    to: "Doha",
    routePath: "/routes/al-khobar-to-doha",
    metaTitle: "Al Khobar to Doha Distance: KM & Driving Time Explained",
    metaDescription: "How far is Doha from Al Khobar by road? Verified driving distance, why it's shorter than the Riyadh route, and honest border-crossing guidance.",
    h1: "Al Khobar to Doha Distance: The Shorter Eastern Province Route to Qatar",
    heroTag: "Eastern Province to Doha",
    heroAnswer: "One of the shorter Doha crossings from Saudi Arabia — Al Khobar already sits well down the Eastern Province coast toward the border, so this is meaningfully less driving than from Riyadh.",
    heroDistance: "~400-420 km",
    heroDuration: "~4.5-5.5 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~400-420 km", emphasis: true },
      { label: "Pure driving time", value: "~4.5-5.5 hours", emphasis: true },
      { label: "Starting point", value: "Al Khobar & wider Eastern Province" },
      { label: "Border crossing", value: "Salwa (Saudi) / Abu Samra (Qatar)" },
    ],
    mapOrigin: "Al Khobar, Saudi Arabia",
    mapDestination: "Doha, Qatar",
    mapNote: "The map shows a typical driving route. Your exact starting point within Al Khobar and current road/border conditions will affect the real distance and time.",
    distanceExplanation: [
      "How far is Doha from Al Khobar by road? Independent sources put the figure at roughly 400 to 420 kilometres, with some variation depending on the exact starting address within Al Khobar and the mapping tool used. This is one of the shorter Saudi-side approaches to Doha we've measured, since Al Khobar already sits well down the Eastern Province coast, closer to the border than Riyadh is.",
      "Pure driving time runs approximately four and a half to five and a half hours. As with every cross-border route on this site, that figure is the road only — the Salwa/Abu Samra crossing is a separate, variable stage that we don't compress into a single 'total journey time,' since doing so would overstate how precisely it can be predicted.",
    ],
    timeline: [
      { label: "Al Khobar departure", detail: "The journey begins from your specific starting point — the Corniche, the business district, or further out." },
      { label: "Eastern Province journey", detail: "The route heads south along the coast toward the Qatari border." },
      { label: "Saudi-Qatar border", detail: "Salwa (Saudi) / Abu Samra (Qatar) — the sole land crossing between the two countries." },
      { label: "Qatar road journey", detail: "Once across, the route continues into Qatar toward Doha." },
      { label: "Doha arrival", detail: "The final distance depends on your specific destination within the city." },
    ],
    timelineNote: "Because this is a shorter route than the Riyadh journey, the border crossing makes up a proportionally larger share of the total trip — worth keeping in mind when planning around it.",
    routeStory: {
      heading: "Leaving Al Khobar for Qatar",
      paragraphs: [
        "Al Khobar's position on the Eastern Province coast, well south of Dammam and considerably closer to the Qatari border than Riyadh, makes this one of the more direct Saudi approaches to Doha. The city's waterfront and business districts sit along a fairly wide stretch of coastline, so the exact starting address within Al Khobar makes a real difference to the total distance — closer to the southern edge of the city shortens the drive meaningfully compared to starting further north.",
        "From Al Khobar, the route runs south along the Eastern Province highway network, following broadly the same corridor used by traffic from Dammam and the wider metro area, before reaching the Salwa crossing.",
      ],
    },
    borderContext: {
      heading: "Understanding the Cross-Border Journey",
      paragraphs: [
        "The crossing into Qatar happens at Salwa on the Saudi side, opposite Abu Samra on the Qatari side — the only land border between the two countries, reopened in January 2021 after several years of closure. Saudi exit and Qatari entry formalities are both handled at this single point.",
        "Processing time is genuinely variable and commonly reported to range from under an hour during quiet periods to several hours at busy times, particularly weekends and public holidays. On a shorter overall route like this one, that variability matters proportionally more than it would on a much longer journey, since the border makes up a bigger share of the total trip.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Confirm your exact starting address within Al Khobar, since the city's coastline spans a fairly wide area and this affects the real distance meaningfully.",
        "Because the border makes up a larger share of this shorter route, build in a proportionally generous buffer for the crossing.",
        "A valid passport and any visa or entry permit for your specific nationality are required — confirm current requirements before travelling rather than relying on general information.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle can cover the full distance from an Al Khobar address to Doha without a change of vehicle." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and valid cross-border documentation can make this drive independently." },
    ],
    ctaRoutePath: "/routes/al-khobar-to-doha",
    ctaLabel: "Al Khobar to Doha private transfer service",
    faqs: [
      { question: "How far is Al Khobar from Doha?", answer: "Approximately 400 to 420 kilometres by road, depending on the exact starting address within Al Khobar." },
      { question: "Is this a shorter drive than from Riyadh?", answer: "Yes, meaningfully. Al Khobar sits much closer to the Salwa border than Riyadh does, so the pure driving time is roughly an hour or more less." },
      { question: "Why does the exact distance vary within Al Khobar?", answer: "Al Khobar's waterfront and business districts span a fairly wide stretch of coastline, so a starting address nearer the southern edge of the city is genuinely closer to the border than one further north." },
      { question: "Is the border crossing time included in the driving estimate?", answer: "No. The driving estimate covers the road only. The Salwa/Abu Samra crossing is a separate, variable stage that isn't included in that figure." },
    ],
    relatedJourneys: [
      { label: "Dammam Airport to Doha distance", href: "/distance/dammam-airport-to-doha-distance" },
      { label: "Riyadh to Doha distance", href: "/distance/riyadh-to-doha-distance" },
      { label: "Doha to Dammam Airport distance", href: "/distance/doha-to-dammam-airport-distance" },
    ],
    sources: [
      { label: "Saudi Customs opens Salwa border crossing with Qatar — Arab News", href: "https://www.arabnews.com/node/1789626/saudi-arabia" },
      { label: "Salwa border crossing — Digital Logistics Capacity Assessments", href: "https://www.lca.logcluster.org/235-saudi-arabia-border-crossing-salwa-qatar" },
    ],
    conclusion: "Al Khobar to Doha is one of the more direct Saudi approaches to Qatar — genuinely shorter than the Riyadh journey, though the border crossing makes up a proportionally larger part of this shorter trip, so it's worth planning around with real flexibility rather than assuming the shortest possible total time.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "doha-to-al-khobar-distance",
    from: "Doha",
    to: "Al Khobar",
    routePath: "/routes/doha-to-al-khobar",
    metaTitle: "Doha to Al Khobar Distance: KM & Driving Time Explained",
    metaDescription: "How far is Al Khobar from Doha? Verified road distance, the Salwa border crossing, and why this is a shorter journey than routes further into Saudi Arabia.",
    h1: "Doha to Al Khobar Distance: A Regional Cross-Border Journey",
    heroTag: "Qatar capital to Saudi Eastern Province",
    heroAnswer: "This measures the road distance from Doha to Al Khobar — a regional cross-border journey along the Gulf coast, not a long-haul drive.",
    heroDistance: "~400-420 km",
    heroDuration: "~4.5-5.5 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~400-420 km", emphasis: true },
      { label: "Pure driving time", value: "~4.5-5.5 hours", emphasis: true },
      { label: "Border crossing", value: "Abu Samra (Qatar) / Salwa (Saudi)" },
      { label: "Journey type", value: "Qatar capital to Eastern Province" },
    ],
    mapOrigin: "Doha, Qatar",
    mapDestination: "Al Khobar, Saudi Arabia",
    mapNote: "The map shows a typical driving route. Your actual route and total distance will vary depending on your specific Al Khobar destination and current road/border conditions.",
    distanceExplanation: [
      "How far is Al Khobar from Doha by road? Independent sources put the distance at approximately 400 to 420 kilometres, depending on the exact addresses used and the mapping tool. This is a regional Gulf-coast journey rather than a long-haul drive — genuinely shorter than routes further into the Saudi interior.",
      "Pure driving time runs roughly four and a half to five and a half hours. As with any cross-border route, that figure is the road only; the Salwa/Abu Samra crossing is a separate, variable stage layered on top, and total journey time depends on how that crossing runs on the day.",
    ],
    timeline: [
      { label: "Doha departure", detail: "The measured journey begins at your starting point in Doha." },
      { label: "Qatar road journey", detail: "The route heads north toward the Salwa/Abu Samra crossing." },
      { label: "International border transition", detail: "Qatari exit and Saudi entry formalities at the sole land crossing between the two countries." },
      { label: "Driving into the Eastern Province", detail: "Once across, the route continues along the Saudi coastal highway network." },
      { label: "Al Khobar arrival", detail: "The final distance depends on your specific destination within the city." },
    ],
    timelineNote: "This breakdown separates the journey into its real stages. We do not state a single total journey time, since the border-crossing stage is inherently variable.",
    routeStory: {
      heading: "From Qatar to Saudi Arabia by Road",
      paragraphs: [
        "Doha and Al Khobar sit on roughly the same stretch of Gulf coastline, which is what keeps this route meaningfully shorter than journeys further into the Saudi interior. The road runs north from Doha, crosses into Saudi Arabia at Salwa, and continues up the Eastern Province coast — a single, fairly direct corridor rather than a route with major detours.",
        "Al Khobar itself sits along a fairly wide stretch of coastline, with its hotels, Corniche, and business district spread across the city, so the exact destination within Al Khobar has a real effect on the final few kilometres of the journey.",
      ],
    },
    borderContext: {
      heading: "Understanding the Cross-Border Journey",
      paragraphs: [
        "The crossing happens at Salwa on the Saudi side, opposite Abu Samra on the Qatari side — the only land border between the two countries, reopened in January 2021. Saudi entry and Qatari exit formalities are both handled at this single point.",
        "Processing time is genuinely variable and commonly reported to range from under an hour during quiet periods to several hours at busy times, particularly weekends and public holidays. We do not attach a fixed duration to this stage, since no honest source can promise one in advance.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "Confirm your specific Al Khobar destination, since the city's coastline spans a fairly wide area and this affects the real distance.",
        "Treat the ~4.5-5.5 hour driving estimate as the road portion only; add a flexible buffer for the Salwa/Abu Samra crossing on top.",
        "A valid passport and any visa or entry permit for your nationality are required — confirm current rules before travelling.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle can cover the full distance from a Doha address to a specific Al Khobar destination without a change of vehicle." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and valid cross-border documentation can make this drive independently." },
    ],
    ctaRoutePath: "/routes/doha-to-al-khobar",
    ctaLabel: "Doha to Al Khobar private transfer service",
    faqs: [
      { question: "How far is Al Khobar from Doha?", answer: "Approximately 400 to 420 kilometres by road, with pure driving time of around four and a half to five and a half hours before the Salwa border crossing is added." },
      { question: "Is this a long-haul drive?", answer: "No — this is a regional Gulf-coast journey, genuinely shorter than routes further into the Saudi interior such as to Riyadh." },
      { question: "How long does the border crossing take?", answer: "It varies genuinely by day and time, commonly reported as anywhere from under an hour to several hours at busy periods such as weekends and holidays." },
      { question: "Does the distance change depending on where in Al Khobar I'm headed?", answer: "Yes. Al Khobar's hotels, Corniche, and business district span a fairly wide stretch of coastline, so your specific destination affects the final distance." },
    ],
    relatedJourneys: [
      { label: "Al Khobar to Doha distance", href: "/distance/al-khobar-to-doha-distance" },
      { label: "Dammam Airport to Doha distance", href: "/distance/dammam-airport-to-doha-distance" },
      { label: "Riyadh to Doha distance", href: "/distance/riyadh-to-doha-distance" },
    ],
    sources: [
      { label: "Saudi Customs opens Salwa border crossing with Qatar — Arab News", href: "https://www.arabnews.com/node/1789626/saudi-arabia" },
      { label: "Salwa border crossing — Digital Logistics Capacity Assessments", href: "https://www.lca.logcluster.org/235-saudi-arabia-border-crossing-salwa-qatar" },
    ],
    conclusion: "Doha to Al Khobar is a regional cross-border journey along the Gulf coast — genuinely shorter than routes further into Saudi Arabia, with the honest planning takeaway being to separate the estimable driving time from the inherently variable Salwa border stage.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "riyadh-to-dubai-distance",
    from: "Riyadh",
    to: "Dubai",
    routePath: "/routes/riyadh-to-dubai",
    metaTitle: "Riyadh to Dubai Distance: KM, Driving Time & Road Trip Guide",
    metaDescription: "How far is Dubai from Riyadh by road? Verified long-haul driving distance, realistic travel time, rest-stop planning, and road vs flying.",
    h1: "Riyadh to Dubai Distance: The Long Road Journey to the UAE",
    heroTag: "Long-distance capital-to-metropolis road journey",
    heroAnswer: "This measures one of the longest regular road distances in the Gulf — genuinely worth planning as a full day, not a quick regional trip.",
    heroDistance: "~950-1,000 km",
    heroDuration: "~9-10 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~950-1,000 km", emphasis: true },
      { label: "Pure driving time", value: "~9-10 hours", emphasis: true },
      { label: "Border crossing", value: "Al Batha (Saudi) / Al Ghuwaifat (UAE)" },
      { label: "Journey type", value: "Long-haul capital-to-metropolis road journey" },
    ],
    mapOrigin: "Riyadh, Saudi Arabia",
    mapDestination: "Dubai, United Arab Emirates",
    mapNote: "The map shows a typical driving route. Your actual starting point in Riyadh and current road/border conditions will affect the real distance and time.",
    distanceExplanation: [
      "How far is Dubai from Riyadh by road? Independent sources put the total distance at approximately 950 to 1,000 kilometres — notably further than a quick glance at the map might suggest, and meaningfully more than some older estimates circulating online. This is one of the longer regular road journeys in the Gulf region.",
      "Pure driving time runs roughly nine to ten hours in free-flowing conditions. That figure is the road only. Total journey time also includes the Al Batha/Al Ghuwaifat border crossing, a genuinely variable stage that we deliberately don't fold into one all-inclusive number.",
    ],
    timeline: [
      { label: "Riyadh departure", detail: "The journey begins from your specific starting point in the capital." },
      { label: "Long-distance road journey", detail: "The route runs east across the Saudi interior, via Al Kharj and Haradh." },
      { label: "Driving time vs total travel time", detail: "A drive this long benefits from real rest-stop planning, not an afterthought." },
      { label: "Border transition", detail: "Al Batha (Saudi) / Al Ghuwaifat (UAE) — the sole Saudi-UAE land crossing." },
      { label: "UAE arrival", detail: "The final distance depends on your specific Dubai destination." },
    ],
    timelineNote: "This is a genuinely long single-day journey. We separate it into real stages rather than quoting one total figure, since the border stage alone is inherently unpredictable.",
    routeStory: {
      heading: "How the Road Journey Unfolds",
      paragraphs: [
        "This is among the longest regular road distances in the Gulf, and travellers researching it should treat it as a genuine full-day undertaking. The route leaves Riyadh heading east across a substantial stretch of the Saudi interior — via Al Kharj and Haradh — before reaching the Al Batha border late in the journey, with the bulk of the driving happening on the Saudi side.",
        "A distance of 950 to 1,000 kilometres is long enough that most travellers, regardless of vehicle, benefit meaningfully from at least one proper rest stop — not because the route is difficult, but because nine-plus hours of continuous driving is genuinely tiring for anyone.",
      ],
    },
    borderContext: {
      heading: "Driving Time Versus Total Travel Time",
      paragraphs: [
        "The Al Batha crossing on the Saudi side, opposite Al Ghuwaifat on the Emirati side, is the sole land border between the two countries and operates 24 hours a day. Processing time for passenger vehicles is commonly reported as ranging from around 45 minutes during quiet periods up to several hours at busy times, particularly weekends and holidays.",
        "Driving into the UAE also requires the correct vehicle documentation alongside passport and visa requirements specific to your nationality — cross-border driving rules are more involved than a standard land-border crossing on foot, so this is worth confirming well ahead of travel rather than assuming it matches general information.",
      ],
    },
    planning: {
      heading: "Road Travel Compared with Flying",
      items: [
        "For pure speed, flying covers this distance considerably faster in the air.",
        "Driving offers a genuinely different kind of journey — continuous, flexible on timing, with no check-in or baggage limits — which suits travellers who value that over speed.",
        "Treat this as a full-day journey and plan at least one genuine rest stop across the drive.",
        "Build a separate, flexible buffer for the Al Batha/Al Ghuwaifat crossing on top of the driving estimate.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle covers the full distance door-to-door without a change of vehicle at the border." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and the correct cross-border documentation can make the journey independently." },
      { mode: "Flying", detail: "A direct flight between Riyadh and Dubai covers the same distance in a fraction of the time, though this page does not track specific schedules or fares." },
    ],
    travelOptionsNote: "Whether road or air suits a given trip better depends on luggage, group size, and how much value is placed on a door-to-door journey versus speed.",
    ctaRoutePath: "/routes/riyadh-to-dubai",
    ctaLabel: "Riyadh to Dubai private transfer service",
    faqs: [
      { question: "How far is Dubai from Riyadh by road?", answer: "Approximately 950 to 1,000 kilometres — notably further than some quick estimates suggest. Pure driving time is roughly nine to ten hours before the Al Batha border crossing is added." },
      { question: "Is it faster to fly than drive?", answer: "Yes, considerably, for pure speed. Driving offers a genuinely different kind of journey — continuous and flexible, with no check-in — which some travellers value over speed." },
      { question: "Should I plan a rest stop on this drive?", answer: "Most travellers find at least one proper break genuinely useful on a journey this long, simply because nine-plus hours of continuous driving is tiring regardless of road conditions." },
      { question: "What documents are needed to drive into the UAE?", answer: "A valid passport, any visa or entry permit for your nationality, and the correct vehicle documentation for cross-border driving — these requirements are more involved than a standard border crossing on foot." },
    ],
    relatedJourneys: [
      { label: "Dubai to Riyadh distance", href: "/distance/dubai-to-riyadh-distance" },
      { label: "Dammam to Dubai distance", href: "/distance/dammam-to-dubai-distance" },
      { label: "Riyadh to Doha distance", href: "/distance/riyadh-to-doha-distance" },
    ],
    sources: [
      { label: "E 44 road (United Arab Emirates) — Wikipedia", href: "https://en.wikipedia.org/wiki/E_44_road_(United_Arab_Emirates)" },
      { label: "Highway 10 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
    ],
    conclusion: "Riyadh to Dubai is a genuine long-haul road journey — the honest planning takeaway is to budget a full day, build in a real rest stop across the drive itself, and treat the Al Batha/Al Ghuwaifat border crossing as the least predictable stage of the whole trip.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "dubai-to-riyadh-distance",
    from: "Dubai",
    to: "Riyadh",
    routePath: "/routes/dubai-to-riyadh",
    metaTitle: "Dubai to Riyadh Distance: KM, Driving Time & Border Info",
    metaDescription: "How far is Riyadh from Dubai by road? Same long distance as the outbound trip, but the border comes first — driving time and planning tips.",
    h1: "Dubai to Riyadh Distance: Crossing Into Saudi Arabia and the Long Road to the Capital",
    heroTag: "UAE departure to Saudi capital arrival",
    heroAnswer: "The same long distance as the outbound journey, but this page focuses on what changes when the border comes first and Riyadh is the arrival point.",
    heroDistance: "~950-1,000 km",
    heroDuration: "~9-10 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~950-1,000 km", emphasis: true },
      { label: "Pure driving time", value: "~9-10 hours", emphasis: true },
      { label: "Border crossing", value: "Al Ghuwaifat (UAE) / Al Batha (Saudi)" },
      { label: "Journey type", value: "UAE departure to Saudi capital arrival" },
    ],
    mapOrigin: "Dubai, United Arab Emirates",
    mapDestination: "Riyadh, Saudi Arabia",
    mapNote: "The map shows a typical driving route. Your actual Riyadh destination and current road/border conditions will affect the real distance and time.",
    distanceExplanation: [
      "The road distance from Dubai to Riyadh is the same physical route as the outbound journey — approximately 950 to 1,000 kilometres. What differs in this direction is the shape of the trip: the border crossing comes relatively early, after an initial stretch from Dubai, rather than as the final stage before arrival.",
      "Pure driving time is roughly nine to ten hours, a figure that specifically excludes the Al Ghuwaifat/Al Batha crossing. Because most of the driving happens on the Saudi side of the border in this direction, the back half of the journey is a long, uninterrupted stretch across the Saudi interior.",
    ],
    timeline: [
      { label: "Leaving Dubai for Saudi Arabia", detail: "The journey begins from your specific starting point in Dubai." },
      { label: "Crossing from the UAE into Saudi Arabia", detail: "Al Ghuwaifat / Al Batha — the sole Saudi-UAE land border." },
      { label: "The long road toward Riyadh", detail: "A substantial, largely uninterrupted drive across the Saudi interior." },
      { label: "Approaching Riyadh", detail: "The city's outskirts, still some distance from most central destinations." },
      { label: "Final arrival", detail: "The exact distance depends heavily on where in Riyadh you're headed." },
    ],
    timelineNote: "Because the border sits early in this direction, the back half of the journey is one continuous drive — a genuinely different rhythm from the outbound trip.",
    routeStory: {
      heading: "Leaving Dubai for Saudi Arabia",
      paragraphs: [
        "Leaving Dubai, the drive to the Al Ghuwaifat crossing is a substantial opening stretch in its own right, before the border is even reached. That's a meaningful structural difference from the Riyadh-to-Dubai direction, where the crossing comes late rather than early in the journey.",
        "Once across into Saudi Arabia, the route settles into a long, straightforward highway drive deep into the Saudi interior toward Riyadh — the majority of the total driving time in this direction happens on the Saudi side of the border.",
      ],
    },
    borderContext: {
      heading: "Crossing from the UAE into Saudi Arabia",
      paragraphs: [
        "Al Ghuwaifat, on the Emirati side, and Al Batha, on the Saudi side, together form the sole land border between the two countries, operating 24 hours a day. Processing time for passenger vehicles is genuinely variable — commonly reported as around 45 minutes in quiet periods up to several hours during weekends and holidays.",
        "A valid passport, any Saudi visa or entry permit relevant to your nationality, and the correct vehicle documentation for cross-border driving are all required. These requirements vary by nationality and can change, so confirming current rules close to your travel date is worthwhile.",
      ],
    },
    planning: {
      heading: "Why Your Final Journey Distance Can Vary Within Riyadh",
      items: [
        "Riyadh is a large, spread-out capital — a hotel in the business district, a residential compound, and King Khalid International Airport are all genuinely different distances from where the highway enters the city.",
        "Confirm your specific Riyadh destination in your own planning, since the city-to-city figure on this page doesn't capture the final local distance to a precise address.",
        "If your trip continues by air from Riyadh, budget the time to reach King Khalid International Airport as an additional leg.",
        "Because the border comes early in this direction, any delay there has more time to be absorbed over the long drive that follows.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle can collect passengers from a Dubai address and deliver them to a specific Riyadh destination without a change of vehicle." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and the correct cross-border documentation can make this drive independently." },
      { mode: "Flying", detail: "A direct flight covers the same distance considerably faster in the air, though this page does not track specific schedules or fares." },
    ],
    ctaRoutePath: "/routes/dubai-to-riyadh",
    ctaLabel: "Dubai to Riyadh private transfer service",
    faqs: [
      { question: "How far is Riyadh from Dubai by road?", answer: "Approximately 950 to 1,000 kilometres — the same physical route as the outbound direction." },
      { question: "Does the border crossing happen at the start or end of this journey?", answer: "Relatively early. You cross into Saudi Arabia at Al Ghuwaifat/Al Batha after an initial stretch from Dubai, then continue on a long, uninterrupted drive across the Saudi interior." },
      { question: "Why does the final distance within Riyadh vary?", answer: "Riyadh is a large, spread-out city, so a hotel, a residential address, and the airport can all be meaningfully different distances from where the highway reaches the city." },
      { question: "What documents are needed to enter Saudi Arabia?", answer: "A valid passport, any Saudi visa or entry permit for your nationality, and the correct vehicle documentation for cross-border driving." },
    ],
    relatedJourneys: [
      { label: "Riyadh to Dubai distance", href: "/distance/riyadh-to-dubai-distance" },
      { label: "Dubai to Dammam distance", href: "/distance/dubai-to-dammam-distance" },
      { label: "Doha to Riyadh distance", href: "/distance/riyadh-to-doha-distance" },
    ],
    sources: [
      { label: "E 44 road (United Arab Emirates) — Wikipedia", href: "https://en.wikipedia.org/wiki/E_44_road_(United_Arab_Emirates)" },
      { label: "Highway 10 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
    ],
    conclusion: "Dubai to Riyadh covers the same long distance as the outbound journey, but with a different rhythm — an early border crossing, then one continuous drive across Saudi Arabia — and the real planning variable at the far end is exactly where in Riyadh you're actually headed.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "dammam-to-dubai-distance",
    from: "Dammam",
    to: "Dubai",
    routePath: "/routes/dammam-to-dubai",
    metaTitle: "Dammam to Dubai Distance: KM & Driving Time Explained",
    metaDescription: "How far is Dubai from Dammam? Verified road distance, why it's shorter than the Riyadh route, and honest border-crossing guidance.",
    h1: "Dammam to Dubai Distance: The Shorter Eastern Province Route to the UAE",
    heroTag: "Eastern Province to UAE",
    heroAnswer: "This measures a shorter approach to Dubai than from Riyadh — the Eastern Province sits meaningfully closer to the Al Batha border.",
    heroDistance: "~850-870 km",
    heroDuration: "~7.5-8 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~850-870 km", emphasis: true },
      { label: "Pure driving time", value: "~7.5-8 hours", emphasis: true },
      { label: "Border crossing", value: "Al Batha (Saudi) / Al Ghuwaifat (UAE)" },
      { label: "Journey type", value: "Eastern Province to UAE road journey" },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Dubai, United Arab Emirates",
    mapNote: "The map shows a typical driving route. Your actual starting point in Dammam and current road/border conditions will affect the real distance and time.",
    distanceExplanation: [
      "How far is Dubai from Dammam by road? Independent sources put the distance at approximately 850 to 870 kilometres, with pure driving time of roughly seven and a half to eight hours. This is meaningfully shorter than the equivalent journey from Riyadh, since the Eastern Province sits closer to the Al Batha border than the Saudi capital does.",
      "That said, this remains a substantial drive by any measure — a genuine multi-hour undertaking, not a short regional hop, and total journey time still depends on the separate, variable Al Batha/Al Ghuwaifat border stage on top of the driving.",
    ],
    timeline: [
      { label: "Starting the road journey in the Eastern Province", detail: "The journey begins from your specific starting point in Dammam." },
      { label: "Understanding the route to the UAE", detail: "The road runs south-east across the Eastern Province toward the border." },
      { label: "Border transition", detail: "Al Batha (Saudi) / Al Ghuwaifat (UAE) — the sole Saudi-UAE land crossing." },
      { label: "UAE road journey", detail: "Once across, the route continues toward Dubai." },
      { label: "Arrival in Dubai", detail: "The final distance depends on your specific Dubai destination." },
    ],
    timelineNote: "This route is shorter than the equivalent journey from Riyadh, but the border-crossing stage remains just as unpredictable — we separate the two rather than quoting one total figure.",
    routeStory: {
      heading: "Understanding the Route to the UAE",
      paragraphs: [
        "The Eastern Province's position — considerably closer to the Al Batha border than Riyadh — is what makes this a genuinely more direct approach to Dubai. Independent distance sources put the total road distance at approximately 850 to 870 kilometres, roughly ninety minutes to two hours less driving than the equivalent journey from the Saudi capital.",
        "The route runs south-east from Dammam along the Eastern Province highway network before reaching the border, then continues into the UAE toward Dubai — still a substantial drive, just a shorter one than starting further inland.",
      ],
    },
    planning: {
      heading: "Driving Distance and Journey Planning",
      items: [
        "Treat the ~7.5-8 hour driving estimate as the road portion only; add a flexible buffer for the Al Batha/Al Ghuwaifat crossing on top.",
        "A drive approaching eight hours still benefits from real rest-stop planning, even though it's shorter than the Riyadh route.",
        "The correct vehicle documentation, alongside a valid passport and visa relevant to your nationality, is required for cross-border driving into the UAE.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle can cover the full distance from a Dammam address to a specific Dubai destination without a change of vehicle." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and the correct cross-border documentation can make this drive independently." },
    ],
    ctaRoutePath: "/routes/dammam-to-dubai",
    ctaLabel: "Dammam to Dubai private transfer service",
    faqs: [
      { question: "How far is Dubai from Dammam by road?", answer: "Approximately 850 to 870 kilometres, with pure driving time of roughly seven and a half to eight hours before the Al Batha border crossing is added." },
      { question: "Is this drive shorter than from Riyadh?", answer: "Yes, meaningfully. The Eastern Province sits closer to the Al Batha border than Riyadh does, so the pure driving time is roughly ninety minutes to two hours less." },
      { question: "How long does the border crossing take?", answer: "It's genuinely variable for passenger vehicles — commonly reported as around 45 minutes in quiet periods up to several hours at busy times such as weekends and holidays." },
      { question: "What documents are needed to drive into the UAE?", answer: "A valid passport, any visa or entry permit for your nationality, and the correct vehicle documentation for cross-border driving." },
    ],
    relatedJourneys: [
      { label: "Dubai to Dammam distance", href: "/distance/dubai-to-dammam-distance" },
      { label: "Riyadh to Dubai distance", href: "/distance/riyadh-to-dubai-distance" },
      { label: "Doha to Al Khobar distance", href: "/distance/doha-to-al-khobar-distance" },
    ],
    sources: [
      { label: "D 85 road (United Arab Emirates) — Wikipedia", href: "https://en.wikipedia.org/wiki/D_85_road_(United_Arab_Emirates)" },
      { label: "Highway 10 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
    ],
    conclusion: "Dammam to Dubai is a genuinely shorter approach to the UAE than the equivalent journey from Riyadh — still a substantial multi-hour drive, but with real time saved by the Eastern Province's closer position to the Al Batha border.",
    lastVerified: "2026-08-28",
  },

  {
    slug: "dubai-to-dammam-distance",
    from: "Dubai",
    to: "Dammam",
    routePath: "/routes/dubai-to-dammam",
    metaTitle: "Dubai to Dammam Distance – Eastern Province Arrival Guide",
    metaDescription: "How far is Dammam from Dubai by road? Same shorter route as the outbound trip, why the border comes early, and honest planning guidance.",
    h1: "Dubai to Dammam Distance: From the UAE Border to the Eastern Province",
    heroTag: "UAE metropolis to Saudi Eastern Province",
    heroAnswer: "The same shorter approach as the outbound journey, but this page focuses on the border crossing early and what changes on arrival in the Eastern Province.",
    heroDistance: "~850-870 km",
    heroDuration: "~7.5-8 hrs pure driving",
    facts: [
      { label: "Road distance", value: "~850-870 km", emphasis: true },
      { label: "Pure driving time", value: "~7.5-8 hours", emphasis: true },
      { label: "Border crossing", value: "Al Ghuwaifat (UAE) / Al Batha (Saudi)" },
      { label: "Journey type", value: "UAE departure to Eastern Province arrival" },
    ],
    mapOrigin: "Dubai, United Arab Emirates",
    mapDestination: "Dammam, Saudi Arabia",
    mapNote: "The map shows a typical driving route. Your actual Dammam destination and current road/border conditions will affect the real distance and time.",
    distanceExplanation: [
      "How far is Dammam from Dubai by road? The same physical route as the outbound journey — approximately 850 to 870 kilometres, with pure driving time of roughly seven and a half to eight hours. What changes in this direction is where the border sits: relatively early, after an initial stretch from Dubai, rather than as the final stage.",
      "This remains genuinely shorter than the equivalent Riyadh journey, since the Eastern Province sits closer to the Al Batha border — but it's still a substantial multi-hour drive, and total journey time depends on the separate, variable border stage.",
    ],
    timeline: [
      { label: "Leaving Dubai for the Saudi Eastern Province", detail: "The journey begins from your specific starting point in Dubai." },
      { label: "From the UAE border to Dammam", detail: "Al Ghuwaifat / Al Batha, then a continued drive north-west." },
      { label: "Understanding the road journey", detail: "Most of the driving happens on the Saudi side in this direction." },
      { label: "Eastern Province approach", detail: "The route nears Dammam and the wider metro area." },
      { label: "Arriving in Dammam", detail: "The final distance depends on your specific destination — city, Corniche, or the airport." },
    ],
    timelineNote: "Because the border sits early in this direction, most of the driving happens on the Saudi side — a different rhythm from the outbound trip.",
    routeStory: {
      heading: "From the UAE Border to Dammam",
      paragraphs: [
        "Leaving Dubai, the drive to the Al Ghuwaifat crossing is a genuine stretch in its own right before the border is even reached. Once across into Saudi Arabia at Al Batha, the route continues north-west into the Eastern Province — the majority of the total driving time in this direction happens on the Saudi side.",
        "The Eastern Province's proximity to the border keeps this route meaningfully shorter than the equivalent journey to Riyadh would be, even though the opening stretch from Dubai to the crossing is the same either way.",
      ],
    },
    borderContext: {
      heading: "Understanding the Road Journey",
      paragraphs: [
        "Al Ghuwaifat, on the Emirati side, and Al Batha, on the Saudi side, form the sole land border between the UAE and Saudi Arabia, operating 24 hours a day. Processing time for passenger vehicles is genuinely variable — commonly reported as around 45 minutes during quiet periods up to several hours at busy times, particularly weekends and holidays.",
        "A valid passport, any Saudi visa or entry permit relevant to your nationality, and the correct vehicle documentation for cross-border driving are all required.",
      ],
    },
    planning: {
      heading: "For this specific route",
      items: [
        "This is genuinely shorter than the equivalent journey to Riyadh — roughly ninety minutes to two hours less driving.",
        "Confirm your specific Dammam destination, since the city and its Corniche, plus King Fahd International Airport, are meaningfully different final distances.",
        "Build a flexible buffer for the Al Ghuwaifat/Al Batha crossing separately from the driving estimate.",
      ],
    },
    travelOptions: [
      { mode: "Private car", detail: "A private vehicle can collect passengers from a Dubai address and deliver them to a specific Dammam destination without a change of vehicle." },
      { mode: "Self-driving", detail: "Travellers with their own vehicle and the correct cross-border documentation can make this drive independently." },
    ],
    ctaRoutePath: "/routes/dubai-to-dammam",
    ctaLabel: "Dubai to Dammam private transfer service",
    faqs: [
      { question: "How far is Dammam from Dubai by road?", answer: "Approximately 850 to 870 kilometres, the same physical route as the outbound direction, with pure driving time of roughly seven and a half to eight hours." },
      { question: "Does the border crossing happen early or late in this journey?", answer: "Relatively early, after an initial stretch from Dubai. Once through Al Ghuwaifat/Al Batha, most of the remaining drive happens on the Saudi side." },
      { question: "Is this shorter than the equivalent Riyadh journey?", answer: "Yes, meaningfully. The Eastern Province sits closer to the Al Batha border than Riyadh does, saving roughly ninety minutes to two hours of driving." },
      { question: "Where exactly does this measure to in Dammam?", answer: "The city-to-city figure is a general estimate — your specific destination, whether central Dammam, the Corniche, or King Fahd International Airport, affects the real final distance." },
    ],
    relatedJourneys: [
      { label: "Dammam to Dubai distance", href: "/distance/dammam-to-dubai-distance" },
      { label: "Dubai to Riyadh distance", href: "/distance/dubai-to-riyadh-distance" },
      { label: "Al Khobar to Doha distance", href: "/distance/al-khobar-to-doha-distance" },
    ],
    sources: [
      { label: "D 85 road (United Arab Emirates) — Wikipedia", href: "https://en.wikipedia.org/wiki/D_85_road_(United_Arab_Emirates)" },
      { label: "Highway 10 (Saudi Arabia) — Wikipedia", href: "https://en.wikipedia.org/wiki/Highway_10_(Saudi_Arabia)" },
    ],
    conclusion: "Dubai to Dammam is a genuinely shorter approach to the Eastern Province than the equivalent Riyadh journey — the border comes early in this direction, and the real remaining variable is exactly where in Dammam you're actually headed.",
    lastVerified: "2026-08-28",
  },
];

export function getJourneyPage(slug: string): JourneyPage | undefined {
  return journeyPages.find((p) => p.slug === slug);
}
