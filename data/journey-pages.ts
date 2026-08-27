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
];

export function getJourneyPage(slug: string): JourneyPage | undefined {
  return journeyPages.find((p) => p.slug === slug);
}
