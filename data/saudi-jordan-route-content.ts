/**
 * Content for the Saudi <-> Jordan international road-transfer routes,
 * rendered by components/routes/SaudiJordanRouteView.tsx. All six routes
 * cross the same single land border (Al Haditha on the Saudi side, Al
 * Omari on the Jordanian side, ~155 km east of Amman, operating 24/7) —
 * verified against independent sources (Saudipedia, the Digital Logistics
 * Capacity Assessment for this crossing, and Jordan's official border-
 * crossing guidance) alongside the site's own pre-existing route data,
 * which matched. Company-vs-authority responsibility and document
 * scaffolding are therefore shared as a single constant below, while every
 * narrative section is unique per route and per direction, adapted from
 * each route's own existing content in data/routes.ts.
 */

export interface SaudiJordanCrossingFacts {
  crossingName: string;
  companyControlsLabel: string;
  companyControls: string[];
  authorityControlsLabel: string;
  authorityControls: string[];
  documentsIntro: string;
  documentsItems: string[];
  documentsDisclaimer: string;
  borderPageHref: string;
  borderPageLabel: string;
}

export const saudiJordanCrossingFacts: SaudiJordanCrossingFacts = {
  crossingName: "Al Haditha (Saudi side) / Al Omari (Jordanian side)",
  companyControlsLabel: "What we handle",
  companyControls: [
    "Pickup coordination and the long-distance vehicle for the whole journey",
    "Route planning and rest stops for a genuine long-haul drive",
    "Arranging the vehicle documentation we can control before you travel",
    "A fixed price agreed before you travel",
  ],
  authorityControlsLabel: "What border authorities control",
  authorityControls: [
    "Saudi and Jordanian exit/entry immigration decisions",
    "Passport and visa eligibility for your nationality",
    "Customs and vehicle inspection at the crossing",
    "How long processing at Al Haditha / Al Omari runs on the day",
  ],
  documentsIntro:
    "You'll need a valid passport and the entry permission that applies to your nationality — requirements genuinely vary by nationality and by whether you hold Saudi residency, and they're updated from time to time.",
  documentsItems: [
    "Valid passport",
    "Visa or entry permit appropriate to your nationality, for the country you're entering",
    "Vehicle documentation and cross-border insurance for the car you're travelling in",
    "Saudi Iqama alongside your passport, if you're a Saudi resident crossing into Jordan",
  ],
  documentsDisclaimer:
    "Visa, residency, and cross-border vehicle-insurance requirements vary by nationality and change over time. Confirm current requirements with official Saudi or Jordanian sources before you travel — we advise on the general process and arrange the paperwork we can control, but entry decisions are made by Saudi and Jordanian border officials, not by us.",
  borderPageHref: "/border-transfers/jordan-border",
  borderPageLabel: "Read our Jordan border guide",
};

export interface SaudiJordanStepContent {
  label: string;
  detail?: string;
}

export interface SaudiJordanScenarioContent {
  title: string;
  description: string;
}

export interface SaudiJordanComparisonRowContent {
  criterion: string;
  road: string;
  flight: string;
}

export interface SaudiJordanRouteContent {
  journeyHeading: string;
  journeyParagraphs: string[];
  timelineHeading: string;
  timeline: SaudiJordanStepContent[];
  heritageLinkHeading?: string;
  heritageLinkParagraphs?: string[];
  borderHeading: string;
  borderParagraphs: string[];
  planningHeading: string;
  planningIntro: string;
  planningPoints: string[];
  destinationHeading: string;
  destinationParagraphs: string[];
  vehicleText: string;
  whoSuits: SaudiJordanScenarioContent[];
  comparisonIntro?: string;
  comparison?: SaudiJordanComparisonRowContent[];
  checklist: string[];
  bookingSteps: SaudiJordanStepContent[];
  mapOrigin?: string;
  mapDestination?: string;
}

export const saudiJordanRouteContent: Record<string, SaudiJordanRouteContent> = {
  "tabuk-to-amman": {
    journeyHeading: "The Road North: Tabuk to Amman",
    journeyParagraphs: [
      "Tabuk is the closest major Saudi city to the Jordan crossing, which is what makes this the most practical of the Saudi-Jordan overland routes — a genuine single-day drive rather than a journey that needs an overnight break. The road runs north from Tabuk across roughly 600 kilometres, with pure driving time of six to seven hours in free-flowing conditions before the border stage.",
      "This is still a long-distance journey by any normal measure, not a quick regional hop, so the vehicle and pacing are set up for distance from the outset — comfortable seating, air conditioning, and rest stops built in rather than treated as an afterthought.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Tabuk departure", detail: "Pickup from your address." },
      { label: "Northern highway", detail: "The direct approach to Al Haditha." },
      { label: "Al Haditha border", detail: "Saudi exit / Jordanian entry." },
      { label: "Jordan road journey", detail: "On toward Amman." },
      { label: "Amman arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "Crossing at Al Haditha / Al Omari",
    borderParagraphs: [
      "The crossing sits at Al Haditha on the Saudi side and Al Omari on the Jordanian side, roughly 155 kilometres east of Amman, and operates around the clock. The crossing can be busier at peak times, so a little patience helps, and we plan the timing with that in mind rather than assuming a quiet border every time.",
      "Cross-border driving requires the correct vehicle documentation in addition to passport and visa requirements specific to your nationality — these rules are more involved than a standard land-border crossing on foot, and we advise on the current procedures and arrange what we can when you book.",
    ],
    planningHeading: "When Should I Leave?",
    planningIntro: "Given the six-to-seven-hour drive plus the border stage, a single-day departure from Tabuk is realistic — plan your start time with a genuine buffer for the crossing.",
    planningPoints: [
      "Six to seven hours of pure driving before the border is added",
      "The border crossing is the one part of the journey that's genuinely hard to predict",
      "An early departure keeps the whole day comfortable rather than rushed",
      "Share any onward plans in Amman when booking so we can advise on timing",
    ],
    destinationHeading: "Arriving in Amman",
    destinationParagraphs: [
      "Your driver continues into Amman to your specific address — a hotel, a business meeting, or a residence. Amman is a large, spread-out capital, so telling us your exact destination when booking means the final approach is planned correctly rather than assumed.",
      "For the return direction, our Amman to Tabuk transfer mirrors this journey with its own planning focus.",
    ],
    vehicleText: "We use clean, air-conditioned vehicles chosen for distance and matched to your group and luggage, with rest stops for refreshments and a stretch built in as needed.",
    whoSuits: [
      { title: "Travellers who value door-to-door continuity", description: "No airport check-in, no baggage limits, and nothing to arrange at the Amman end." },
      { title: "Families and groups travelling together", description: "One vehicle for everyone, often more comfortable and economical than separate flights and taxis." },
      { title: "Residents and travellers combining a Saudi trip with time in Jordan", description: "A practical overland option given how close Tabuk sits to the crossing." },
    ],
    comparisonIntro: "Tabuk's proximity to the border makes this one of the more genuinely practical Saudi-Jordan drives — worth weighing against a flight rather than assuming one is automatically better.",
    comparison: [
      { criterion: "Total time, door to door", road: "A single day: highway drive plus the border crossing", flight: "Faster in the air, plus airport transfers and check-in at both ends" },
      { criterion: "Baggage", road: "No weight limits within the vehicle's capacity", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Border experience", road: "One land crossing, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport and Jordan entry permission for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Exact Tabuk pickup point and Amman destination",
      "Passenger and luggage count",
      "A realistic buffer for the border crossing",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Tabuk pickup point, Amman destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Tabuk address, with rest stops planned for the drive." },
      { label: "Border crossing & arrival", detail: "Al Haditha/Al Omari handled by your driver, then on to Amman." },
    ],
    mapOrigin: "Tabuk, Saudi Arabia",
    mapDestination: "Amman, Jordan",
  },

  "amman-to-tabuk": {
    journeyHeading: "The Road South: Amman to Tabuk",
    journeyParagraphs: [
      "This journey runs the opposite way to its outbound counterpart: departure from the Jordanian capital comes first, and the border crossing follows relatively early, before the final stretch into Saudi Arabia's Tabuk region. The drive covers around 600 kilometres, with pure driving time of six to seven hours in free-flowing conditions.",
      "Because Amman is a large, spread-out city, your exact pickup address matters for planning the most direct route toward Al Omari — tell us your specific address when booking rather than a general meeting point.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Amman departure", detail: "Pickup from your address." },
      { label: "Jordan road journey", detail: "South toward the border." },
      { label: "Al Omari border", detail: "Jordanian exit / Saudi entry." },
      { label: "Saudi highway", detail: "On toward Tabuk." },
      { label: "Tabuk arrival", detail: "Address or the airport." },
    ],
    borderHeading: "Crossing into Saudi Arabia",
    borderParagraphs: [
      "The crossing sits at Al Omari on the Jordanian side and Al Haditha on the Saudi side, and operates around the clock. It can be busier at peak times, so we plan the timing carefully rather than assuming a quiet crossing every time.",
      "Cross-border driving requires the correct vehicle documentation alongside passport and Saudi visa requirements specific to your nationality. We advise on the current procedures and arrange what we can when you book.",
    ],
    planningHeading: "When Should I Leave?",
    planningIntro: "If your journey ends at Tabuk airport for an onward flight, we plan the whole trip around your departure rather than the drive alone.",
    planningPoints: [
      "Six to seven hours of pure driving before the border is added",
      "Share your flight details if Tabuk airport is your final stop",
      "The border crossing is the one part of the journey that's genuinely hard to predict",
      "An early departure from Amman keeps the day comfortable rather than rushed",
    ],
    destinationHeading: "Arriving in Tabuk",
    destinationParagraphs: [
      "We can drop you at a specific Tabuk address or at the airport for an onward flight — tell us which when booking. Many travellers continue from Tabuk to the heritage sites of the northwest, and our Amman to AlUla transfer covers that longer journey directly.",
      "Once in Tabuk, our Tabuk taxi service and Tabuk airport transfers cover any local legs.",
    ],
    vehicleText: "We use clean, air-conditioned vehicles chosen for distance and matched to your group and luggage, with rest stops built in as needed.",
    whoSuits: [
      { title: "Travellers who prefer the road over flying", description: "A genuine door-to-door alternative for the Amman-Tabuk leg." },
      { title: "Groups who'd rather travel together", description: "One vehicle rather than coordinating separate flights and airport transfers." },
      { title: "Travellers combining Jordan with Saudi Arabia's northwest", description: "A practical first leg toward AlUla and the wider region." },
    ],
    comparisonIntro: "Tabuk's proximity to the border makes this one of the shorter Saudi-Jordan drives — a genuine alternative to flying, not just a fallback.",
    comparison: [
      { criterion: "Total time, door to door", road: "A single day: the border crossing, then a highway drive", flight: "Faster in the air, plus airport transfers and check-in at both ends" },
      { criterion: "Baggage", road: "No weight limits within the vehicle's capacity", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Onward connections", road: "Direct drop-off at a Tabuk address or the airport", flight: "A separate transfer needed after landing" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport and Saudi entry permission for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Exact Amman pickup point and Tabuk destination or flight details",
      "Passenger and luggage count",
      "A realistic buffer for the border crossing",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Amman pickup point, Tabuk destination or flight details, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Amman address, heading toward the border first." },
      { label: "Border crossing & arrival", detail: "Al Omari/Al Haditha handled by your driver, then on to Tabuk." },
    ],
    mapOrigin: "Amman, Jordan",
    mapDestination: "Tabuk, Saudi Arabia",
  },

  "alula-to-amman": {
    journeyHeading: "From the Heritage Valley to Amman",
    journeyParagraphs: [
      "This route links Saudi Arabia's flagship heritage destination with the Jordanian capital, close to Petra — a genuinely long drive of around 800 kilometres, with pure driving time of eight to nine hours through the Tabuk region before the border stage. Many travellers fly this leg, but a private car offers a true door-to-door service that appeals particularly to heritage travellers moving with camera gear and luggage.",
      "Comfort matters over a drive of this length, so vehicles are chosen for distance and matched to your group, with proper rest stops for meals and a stretch built in rather than treated as an afterthought.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "AlUla departure", detail: "Pickup from your hotel or resort." },
      { label: "Through the Tabuk region", detail: "The long northbound stretch." },
      { label: "Al Haditha border", detail: "Saudi exit / Jordanian entry." },
      { label: "Jordan road journey", detail: "On toward Amman." },
      { label: "Amman arrival", detail: "Door-to-door to your destination." },
    ],
    heritageLinkHeading: "Linking AlUla and Petra",
    heritageLinkParagraphs: [
      "This is a natural route for travellers combining AlUla's Nabataean tombs at Hegra with Petra in Jordan — the two great Nabataean heritage sites of the region. A private car carries you and your luggage door to door between the two, without the connections a flight-plus-transfer combination would involve.",
    ],
    borderHeading: "Crossing at Al Haditha / Al Omari",
    borderParagraphs: [
      "The crossing sits at Al Haditha on the Saudi side and Al Omari on the Jordanian side, roughly 155 kilometres east of Amman, and operates around the clock. It can be busier at peak times, so we plan the timing accordingly rather than assuming a quiet crossing.",
      "Cross-border driving requires the correct vehicle documentation alongside passport and visa requirements specific to your nationality. We advise on the current procedures, arrange the appropriate vehicle documentation, and recommend allowing generous time for the crossing when you book.",
    ],
    planningHeading: "When Should I Leave?",
    planningIntro: "Eight to nine hours of driving plus the border makes this a full day on the road — an early departure from AlUla keeps the schedule comfortable rather than rushed.",
    planningPoints: [
      "Eight to nine hours of pure driving before the border is added",
      "A genuinely long day, even without an overnight stop",
      "The border crossing is the one part of the journey that's hard to predict",
      "Mention any Petra or onward Jordan plans so we can advise on timing",
    ],
    destinationHeading: "Arriving in Amman",
    destinationParagraphs: [
      "Your driver continues into Amman to your specific address once through the border. For the return, our Amman to AlUla transfer mirrors this journey, and within Saudi Arabia our Madinah to AlUla transfer connects the heritage valley with the holy city.",
      "Tell us your exact Amman destination when booking so the final approach is planned correctly.",
    ],
    vehicleText: "We use clean, air-conditioned vehicles chosen for distance and matched to your group and luggage, with proper rest stops for meals, refreshments and a stretch built in as needed.",
    whoSuits: [
      { title: "Heritage travellers linking AlUla and Petra", description: "One comfortable vehicle for the whole journey, with room for camera gear and luggage." },
      { title: "Families who value space and flexibility", description: "Rest stops built into a genuinely long drive at no extra cost." },
      { title: "Groups who prefer to travel together", description: "One vehicle rather than coordinating separate flights." },
    ],
    comparisonIntro: "This is a long drive, and many travellers fly it — but for those already planning a heritage road trip, the comparison is worth setting out honestly.",
    comparison: [
      { criterion: "Total time, door to door", road: "A full day: highway drive plus the border crossing", flight: "Faster in the air, plus transfers at both ends" },
      { criterion: "Luggage & equipment", road: "No weight limits within the vehicle's capacity — useful for camera gear", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Border experience", road: "One land crossing, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Who it suits", road: "Heritage travellers who want the AlUla-Petra link overland", flight: "Most travellers, given the distance" },
    ],
    checklist: [
      "Valid passport and Jordan entry permission for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Exact AlUla pickup point and Amman destination",
      "Passenger and luggage count",
      "A generous buffer for the border crossing on a long travel day",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your AlUla pickup point, Amman destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your AlUla hotel, with rest stops planned for the long drive." },
      { label: "Border crossing & arrival", detail: "Al Haditha/Al Omari handled by your driver, then on to Amman." },
    ],
    mapOrigin: "AlUla, Saudi Arabia",
    mapDestination: "Amman, Jordan",
  },

  "amman-to-alula": {
    journeyHeading: "From Amman to the Heritage Valley",
    journeyParagraphs: [
      "This route links the Jordanian capital, close to Petra, with Saudi Arabia's flagship heritage destination — around 800 kilometres, with pure driving time of eight to nine hours through the Tabuk region before reaching AlUla. A private car makes it a relaxed, door-to-door journey, collecting you in Amman and delivering you to your AlUla hotel rather than leaving a connection to arrange at the other end.",
      "Many visitors arrive in AlUla this way to begin a wider Saudi trip, and the vehicle and pacing reflect that — comfortable seating for distance, with proper rest stops built in.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Amman departure", detail: "Pickup from your address." },
      { label: "Jordan road journey", detail: "South toward the border." },
      { label: "Al Omari border", detail: "Jordanian exit / Saudi entry." },
      { label: "Through the Tabuk region", detail: "On toward AlUla." },
      { label: "AlUla arrival", detail: "Door-to-door to your hotel." },
    ],
    heritageLinkHeading: "Linking Petra and AlUla",
    heritageLinkParagraphs: [
      "This is a natural route for travellers combining Petra in Jordan with AlUla's Nabataean tombs at Hegra — the two great Nabataean heritage sites of the region. A private car carries you and your luggage door to door between the two, rather than splitting the trip across a flight and a separate transfer.",
    ],
    borderHeading: "Crossing into Saudi Arabia",
    borderParagraphs: [
      "The crossing sits at Al Omari on the Jordanian side and Al Haditha on the Saudi side, and operates around the clock. It can be busier at peak times, so we plan the timing carefully.",
      "Cross-border driving requires the correct vehicle documentation alongside passport and Saudi visa requirements specific to your nationality. We advise on the current procedures and arrange the appropriate paperwork when you book — your driver is familiar with the northern route and guides you through the formalities.",
    ],
    planningHeading: "When Should I Leave?",
    planningIntro: "Eight to nine hours of driving plus the border makes this a full day on the road — plan your Amman departure with a realistic buffer for the crossing.",
    planningPoints: [
      "Eight to nine hours of pure driving before the border is added",
      "A genuinely long day, even without an overnight stop",
      "The border crossing is the one part of the journey that's hard to predict",
      "Mention any AlUla arrival plans (hotel check-in timing) so we can advise on pacing",
    ],
    destinationHeading: "Arriving in AlUla",
    destinationParagraphs: [
      "Your driver continues through the Tabuk region to your specific AlUla hotel. For the outbound direction, our AlUla to Amman transfer mirrors this journey, and within Saudi Arabia our Riyadh to AlUla transfer connects the heritage valley with the capital.",
      "Once in AlUla, our AlUla airport transfers and local services cover any onward legs.",
    ],
    vehicleText: "We use clean, air-conditioned vehicles chosen for distance and matched to your group and luggage, with proper rest stops built in.",
    whoSuits: [
      { title: "Heritage travellers linking Petra and AlUla", description: "One comfortable vehicle for the whole journey, with room for camera gear and luggage." },
      { title: "Travellers beginning a wider Saudi trip in AlUla", description: "A direct overland arrival rather than a flight plus a separate transfer." },
      { title: "Families and groups travelling together", description: "Rest stops built into a genuinely long drive at no extra cost." },
    ],
    comparisonIntro: "This is a long drive, and many travellers fly it — but for those pairing Petra and AlUla, the road link genuinely suits the itinerary.",
    comparison: [
      { criterion: "Total time, door to door", road: "A full day: the border crossing, then a long highway drive", flight: "Faster in the air, plus transfers at both ends" },
      { criterion: "Luggage & equipment", road: "No weight limits within the vehicle's capacity — useful for camera gear", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Onward arrival", road: "Delivered directly to your AlUla hotel", flight: "Airport transfer still needed after landing" },
      { criterion: "Who it suits", road: "Heritage travellers who want the Petra-AlUla link overland", flight: "Most travellers, given the distance" },
    ],
    checklist: [
      "Valid passport and Saudi entry permission for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Exact Amman pickup point and AlUla hotel destination",
      "Passenger and luggage count",
      "A generous buffer for the border crossing on a long travel day",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Amman pickup point, AlUla hotel, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Amman address, heading toward the border first." },
      { label: "Border crossing & arrival", detail: "Al Omari/Al Haditha handled by your driver, then on to AlUla." },
    ],
    mapOrigin: "Amman, Jordan",
    mapDestination: "AlUla, Saudi Arabia",
  },

  "madinah-to-amman": {
    journeyHeading: "Madinah to Amman: An Honest Overview",
    journeyParagraphs: [
      "This is a long haul of around 1,300 kilometres, running north through Saudi Arabia's northwest, past Tabuk, and across the Al Haditha border into Jordan. Driving time is in the region of fourteen to fifteen hours, plus border formalities, which realistically means the journey is broken with substantial rest or an overnight stop. We'll be straightforward: for most travellers a flight is the sensible choice, and we'd always say so.",
      "For those who genuinely prefer the road — for luggage freedom, to travel as a group, to avoid flying, or to see the landscape — we provide a comfortable, professionally driven, door-to-door private car with the whole journey planned properly, not rushed.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Madinah departure", detail: "Pickup from your address." },
      { label: "Northwest highway", detail: "Past Tabuk, typically with an overnight stop." },
      { label: "Al Haditha border", detail: "Saudi exit / Jordanian entry." },
      { label: "Jordan road journey", detail: "On toward Amman." },
      { label: "Amman arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "The Al Haditha Border Crossing",
    borderParagraphs: [
      "The crossing sits at Al Haditha on the Saudi side and Al Omari on the Jordanian side. On a route this long the crossing is a small part of the overall time, but it still needs planning — it can be busier at peak periods, and we build that into the schedule.",
      "Honesty matters most here: driving a private vehicle all the way from Saudi Arabia into Jordan requires the correct border and vehicle documentation, and the rules vary by nationality and are updated from time to time. We advise on the current procedures, arrange the appropriate paperwork, and discuss the realistic options with you when you book.",
    ],
    planningHeading: "When Should I Leave?",
    planningIntro: "A drive of this length shouldn't be rushed into a single stint — plan for a genuine two-day journey with an overnight stop, typically around Tabuk.",
    planningPoints: [
      "Fourteen to fifteen hours of pure driving before the border is added",
      "Realistically split across two days with an overnight stop, often around Tabuk",
      "Proper rest stops for meals, prayer and sleep, not treated as an afterthought",
      "Discuss your plans with us in detail before booking, given the length and documentation involved",
    ],
    destinationHeading: "Arriving in Amman",
    destinationParagraphs: [
      "Travelling this way removes airport check-in, baggage limits and onward transfers, and you arrive at your specific Amman address rather than just the airport. For pilgrims combining Madinah with onward travel, our Umrah taxi service covers the holy-city legs beforehand.",
      "For the return, our Amman to Madinah transfer mirrors this journey. Many travellers break the journey at Tabuk instead, and our Tabuk to Amman transfer covers that shorter, more practical northern leg.",
    ],
    vehicleText: "Vehicles are chosen for long-distance comfort and matched to your group and luggage — because the fare is fixed, the plan we agree, including rest stops and any overnight arrangement, is the price you pay.",
    whoSuits: [
      { title: "Large families or groups with a lot of luggage", description: "A vehicle-load of belongings that would be impractical or expensive to fly." },
      { title: "Travellers who prefer not to fly", description: "A genuinely long alternative for those who'd rather stay on the road." },
      { title: "Travellers combining Jordan with a wider Saudi trip", description: "A premium, considered choice rather than the fastest way to get there." },
    ],
    comparisonIntro: "For most people flying is the sensible choice given the distance — we say so honestly rather than overselling the drive.",
    comparison: [
      { criterion: "Total time, door to door", road: "~1,300 km, typically split across two days with an overnight stop", flight: "A few hours in the air, plus transfers at both ends" },
      { criterion: "Who it suits", road: "Large groups with heavy luggage, or a genuine preference not to fly", flight: "Most travellers, given the distance" },
      { criterion: "Border experience", road: "One land crossing at Al Haditha/Al Omari, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Booking with notice", road: "Recommended, given the length and documentation involved", flight: "Standard airline booking windows" },
    ],
    checklist: [
      "Valid passport and Jordan entry permission for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Plans for an overnight stop partway through the drive",
      "Passenger and luggage count",
      "A clear discussion with us of your specific reason for driving, so we can advise honestly",
    ],
    bookingSteps: [
      { label: "Discuss your plans", detail: "Given the length, we recommend discussing your requirements with us in detail first." },
      { label: "Share pickup & destination", detail: "Your Madinah pickup point, Amman destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price agreed once the plan, including any overnight stop, is set." },
      { label: "Two-day journey & arrival", detail: "Rest stops, an overnight stay, the border crossing, then on to Amman." },
    ],
    mapOrigin: "Madinah, Saudi Arabia",
    mapDestination: "Amman, Jordan",
  },

  "amman-to-madinah": {
    journeyHeading: "Amman to Madinah: An Honest Overview",
    journeyParagraphs: [
      "This is a long haul of around 1,300 kilometres, running south from Jordan across the Al Haditha border and through Saudi Arabia's northwest, past Tabuk, to the holy city. Driving time is in the region of fourteen to fifteen hours, plus border formalities, which realistically means the journey is broken with substantial rest or an overnight stop. We'll be straightforward: for most travellers a flight is the sensible choice.",
      "For those who genuinely prefer the road — for luggage freedom, to travel as a group, to avoid flying, or to combine Jordan with a pilgrimage — we provide a comfortable, professionally driven, door-to-door private car with the whole journey planned properly.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Amman departure", detail: "Pickup from your address." },
      { label: "Al Omari border", detail: "Jordanian exit / Saudi entry." },
      { label: "Northwest highway", detail: "Past Tabuk, typically with an overnight stop." },
      { label: "Approaching Madinah", detail: "The final stretch to the holy city." },
      { label: "Madinah arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "The Al Haditha Border Crossing",
    borderParagraphs: [
      "The crossing sits at Al Omari on the Jordanian side and Al Haditha on the Saudi side. On a route this long the crossing is a small part of the overall time, but it still needs planning — it can be busier at peak periods, and we build that into the schedule.",
      "Honesty matters most here: driving a private vehicle all the way from Jordan into Saudi Arabia requires the correct border and vehicle documentation, and the rules vary by nationality and are updated from time to time. We advise on the current procedures, arrange the appropriate paperwork, and discuss the realistic options with you when you book.",
    ],
    planningHeading: "When Should I Leave?",
    planningIntro: "A drive of this length shouldn't be rushed into a single stint — plan for a genuine two-day journey with an overnight stop, typically around Tabuk.",
    planningPoints: [
      "Fourteen to fifteen hours of pure driving before the border is added",
      "Realistically split across two days with an overnight stop, often around Tabuk",
      "Proper rest stops for meals, prayer and sleep, not treated as an afterthought",
      "Discuss your plans with us in detail before booking, given the length and documentation involved",
    ],
    destinationHeading: "Arriving in Madinah",
    destinationParagraphs: [
      "Travelling this way removes airport check-in, baggage limits and onward transfers, and you arrive at your specific Madinah address. For pilgrims, our Umrah taxi service covers onward travel to Makkah once you reach the holy city, and our Madinah taxi service handles local trips.",
      "For the outbound direction, our Madinah to Amman transfer mirrors this journey. Many travellers break the journey at Tabuk instead, and our Amman to Tabuk transfer covers that shorter, more practical northern leg.",
    ],
    vehicleText: "Vehicles are chosen for long-distance comfort and matched to your group and luggage — because the fare is fixed, the plan we agree, including rest stops and any overnight arrangement, is the price you pay.",
    whoSuits: [
      { title: "Large families or groups with a lot of luggage", description: "A vehicle-load of belongings that would be impractical or expensive to fly." },
      { title: "Travellers who prefer not to fly", description: "A genuinely long alternative for those who'd rather stay on the road." },
      { title: "Travellers combining Jordan with a pilgrimage", description: "A premium, considered choice rather than the fastest way to get there." },
    ],
    comparisonIntro: "For most people flying is the sensible choice given the distance — we say so honestly rather than overselling the drive.",
    comparison: [
      { criterion: "Total time, door to door", road: "~1,300 km, typically split across two days with an overnight stop", flight: "A few hours in the air, plus transfers at both ends" },
      { criterion: "Who it suits", road: "Large groups with heavy luggage, or a genuine preference not to fly", flight: "Most travellers, given the distance" },
      { criterion: "Border experience", road: "One land crossing at Al Omari/Al Haditha, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Booking with notice", road: "Recommended, given the length and documentation involved", flight: "Standard airline booking windows" },
    ],
    checklist: [
      "Valid passport and Saudi entry permission for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Plans for an overnight stop partway through the drive",
      "Passenger and luggage count",
      "A clear discussion with us of your specific reason for driving, so we can advise honestly",
    ],
    bookingSteps: [
      { label: "Discuss your plans", detail: "Given the length, we recommend discussing your requirements with us in detail first." },
      { label: "Share pickup & destination", detail: "Your Amman pickup point, Madinah destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price agreed once the plan, including any overnight stop, is set." },
      { label: "Two-day journey & arrival", detail: "Rest stops, an overnight stay, the border crossing, then on to Madinah." },
    ],
    mapOrigin: "Amman, Jordan",
    mapDestination: "Madinah, Saudi Arabia",
  },
};
