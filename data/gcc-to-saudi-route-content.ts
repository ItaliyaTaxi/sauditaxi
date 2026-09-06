import type { GccCountry } from "@/lib/route-journey";

/**
 * Content for GCC -> Saudi international road-transfer route pages, rendered
 * by components/routes/GccToSaudiRouteView.tsx. Mirrors the split used by
 * data/gcc-route-content.ts (the reverse direction): border-crossing facts
 * and the company-vs-government responsibility split are genuinely the same
 * facts for every route crossing the same border, kept in sync with
 * data/border-guides.ts, but phrased for this direction specifically (exit
 * happens on the GCC side, entry on the Saudi side — the reverse order from
 * the Saudi -> GCC pages). Every narrative section (GCC departure, border
 * experience, Saudi-side driving, Saudi destination, who it suits,
 * checklist, booking) is unique per route, adapted from each route's own
 * existing `about`/`notes`/`sections`/`richLayout`/`customLayout` content in
 * data/routes.ts.
 */

export interface GccToSaudiCountryFacts {
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

export const gccToSaudiCountryFacts: Record<GccCountry, GccToSaudiCountryFacts> = {
  bahrain: {
    crossingName: "King Fahd Causeway (Passport Island)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the vehicle for the whole journey",
      "The causeway toll and cross-border vehicle documentation",
      "Timing your departure around known peak crossing periods",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What Bahraini and Saudi authorities control",
    authorityControls: [
      "Bahraini exit and Saudi entry immigration decisions",
      "Passport and visa eligibility for your nationality",
      "Customs inspection and any restricted-goods rules",
      "How long the queue at Passport Island runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport and any Saudi visa or entry permit that applies to your nationality — requirements vary considerably depending on where you're travelling from.",
    documentsItems: [
      "Valid passport",
      "Saudi visa or entry permit, if required for your nationality",
      "Bahrain residency documentation alongside your passport, if you're a Bahrain resident",
      "Receipts or documentation for anything you're declaring at customs",
    ],
    documentsDisclaimer:
      "Saudi entry requirements differ by nationality and change from time to time. Confirm current requirements with official Saudi sources before you travel — we advise on the general process, but eligibility decisions are made by Bahraini and Saudi border officials, not by us.",
    borderPageHref: "/border-transfers/bahrain-causeway",
    borderPageLabel: "Read our King Fahd Causeway border guide",
  },
  qatar: {
    crossingName: "Salwa Border Crossing (Abu Samra)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the vehicle for the whole journey",
      "Route planning and rest stops for the desert drive",
      "Flight tracking, where the journey ends at a Saudi airport",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What Qatari and Saudi authorities control",
    authorityControls: [
      "Qatari exit and Saudi entry immigration decisions",
      "Passport and visa eligibility for your nationality",
      "Customs inspection and any restricted-goods rules",
      "How long processing at Salwa runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport and any Saudi visa or entry permit that applies to your nationality — requirements vary considerably depending on where you're travelling from.",
    documentsItems: [
      "Valid passport",
      "Saudi visa or entry permit, if required for your nationality",
      "Qatar residency documentation alongside your passport, if you're a Qatar resident",
      "Any documentation for goods you're declaring at customs",
    ],
    documentsDisclaimer:
      "Saudi entry requirements vary by nationality and are updated from time to time. Confirm current rules with official Saudi sources before you travel — we advise on the general process, but eligibility decisions belong to Qatari and Saudi border officials, not to us.",
    borderPageHref: "/border-transfers/qatar-border",
    borderPageLabel: "Read our Qatar border guide",
  },
  kuwait: {
    crossingName: "Al Khafji / Nuwaiseeb Border Crossing",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the vehicle for the whole journey",
      "Route planning and rest stops for the long southbound drive",
      "Flight tracking, where the pickup or drop-off is an airport",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What Kuwaiti and Saudi authorities control",
    authorityControls: [
      "Kuwaiti exit and Saudi entry immigration decisions",
      "Passport and visa eligibility for your nationality",
      "Customs inspection — Kuwait's exit-side rules can be strict",
      "How long processing at Nuwaiseeb/Khafji runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport and any Saudi visa or entry permit that applies to your nationality. Visa rules differ by nationality and change over time.",
    documentsItems: [
      "Valid passport",
      "Saudi visa or entry permit, if required for your nationality",
      "Kuwait residency documentation alongside your passport, if you're a Kuwait resident",
      "Awareness that Kuwaiti customs rules on restricted goods can be strict",
    ],
    documentsDisclaimer:
      "Saudi entry requirements vary by nationality and change over time. Confirm current rules with official Saudi sources before you travel — eligibility decisions are made by Kuwaiti and Saudi border officials, not by us.",
    borderPageHref: "/border-transfers/kuwait-border",
    borderPageLabel: "Read our Kuwait border guide",
  },
  uae: {
    crossingName: "Al Ghuwaifat (UAE) / Al Batha (Saudi)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the long-haul vehicle for the whole journey",
      "Rest-stop planning for a genuine full-day drive",
      "Arranging the correct cross-border vehicle documentation",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What Emirati and Saudi authorities control",
    authorityControls: [
      "Emirati exit and Saudi entry immigration decisions",
      "Passport and visa eligibility for your nationality",
      "Vehicle inspection and cross-border documentation checks",
      "How long processing at Al Ghuwaifat / Al Batha runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport, any Saudi visa or entry permit for your nationality, and the correct vehicle documentation for cross-border driving.",
    documentsItems: [
      "Valid passport",
      "Saudi visa or entry permit, if required for your nationality",
      "Correct cross-border vehicle documentation (arranged when you book)",
      "UAE residency documentation alongside your passport, if you're a UAE resident",
    ],
    documentsDisclaimer:
      "Saudi entry and vehicle requirements vary by nationality and are updated periodically. Confirm current rules with official Saudi sources before you travel — we arrange the paperwork we can control, but eligibility decisions belong to Emirati and Saudi border officials, not to us.",
    borderPageHref: "/border-transfers/uae-border",
    borderPageLabel: "Read our UAE border guide",
  },
};

export interface GccToSaudiStepContent {
  label: string;
  detail?: string;
}

export interface GccToSaudiScenarioContent {
  title: string;
  description: string;
}

export interface GccToSaudiComparisonRowContent {
  criterion: string;
  road: string;
  flight: string;
}

export interface GccToSaudiRouteContent {
  departureHeading: string;
  departureParagraphs: string[];
  timelineHeading: string;
  timeline: GccToSaudiStepContent[];
  beforeBorderLabel: string;
  beforeBorderText: string;
  afterBorderLabel: string;
  afterBorderText: string;
  borderHeading: string;
  borderParagraphs: string[];
  saudiJourneyHeading: string;
  saudiJourneyParagraphs: string[];
  destinationHeading: string;
  destinationParagraphs: string[];
  vehicleText: string;
  whoSuits: GccToSaudiScenarioContent[];
  comparisonIntro?: string;
  comparison?: GccToSaudiComparisonRowContent[];
  checklist: string[];
  bookingSteps: GccToSaudiStepContent[];
  mapOrigin?: string;
  mapDestination?: string;
}

export const gccToSaudiRouteContent: Record<string, GccToSaudiRouteContent> = {
  // ───────────────────────────── BAHRAIN ─────────────────────────────
  "bahrain-airport-to-dammam": {
    departureHeading: "Starting From Muharraq, Not From Manama",
    departureParagraphs: [
      "Bahrain International Airport is on Muharraq Island, connected to central Manama by its own bridges rather than sitting inside the capital, so a transfer that begins at the airport is a genuinely different starting point from one that begins at a Manama hotel. Your driver waits inside the arrivals hall itself, tracking your flight, and the route from there heads toward the King Fahd Causeway without first routing through the city.",
      "Because this is an international arrival, expect the usual sequence of immigration and baggage claim before you reach the exit — normal for any airport, and one more reason a driver who's waiting inside rather than circling outside makes the start of the journey easier.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Muharraq arrival", detail: "Driver waiting in arrivals, flight tracked." },
      { label: "Toward the Causeway", detail: "Direct route, no detour through Manama." },
      { label: "Passport Island crossing", detail: "Bahraini exit / Saudi entry formalities." },
      { label: "Dammam or King Fahd Airport", detail: "Whichever you specify at booking." },
    ],
    beforeBorderLabel: "On the Bahrain side",
    beforeBorderText: "Meet-and-greet inside Muharraq arrivals, then a direct drive toward the causeway — no stop in central Manama.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "A short remaining drive into the Eastern Province, ending at a Dammam address or continuing to King Fahd Airport.",
    borderHeading: "Crossing the King Fahd Causeway Into Saudi Arabia",
    borderParagraphs: [
      "The King Fahd Causeway covers 25 kilometres between Al Jasra on the Bahraini side and Al Khobar on the Saudi side, with the border facility on Passport Island roughly midway across. Since 2017 the crossing has run as a one-stop process, combining Bahraini exit formalities, Saudi entry formalities, vehicle clearance and customs at a single stop on the island rather than two separate checkpoints.",
      "Crossing volume tends to build at weekends and around public holidays; we can't promise an exact processing time on any given day, but your driver handles the crossing itself, so there's nothing you need to manage on your own.",
    ],
    saudiJourneyHeading: "Dammam City or King Fahd Airport — Two Different Destinations",
    saudiJourneyParagraphs: [
      "Where your journey actually ends matters here. A Dammam city address — a hotel, an office, a residential district — is a different final leg from King Fahd International Airport, which sits outside the city on its own large site and is the more relevant drop-off if you're connecting onward to a domestic or international flight rather than staying in Dammam itself.",
      "Tell us which applies when you book. Both are covered by the same fixed-price service from Muharraq, but naming the correct destination upfront means your driver plans the right route from the causeway onward.",
    ],
    destinationHeading: "Arriving in the Eastern Province",
    destinationParagraphs: [
      "Arrivals from an international flight typically come with more baggage than a short regional hop, so we match the vehicle to what you're actually carrying rather than assuming a standard load.",
      "Travelling as a single group through the border also keeps the crossing itself simpler, since everyone's documents move through Passport Island together rather than being processed across separate cars.",
    ],
    vehicleText: "A sedan suits one or two passengers with normal luggage, an SUV gives families and heavier packers more room, and a van covers larger groups travelling together with all their bags in one vehicle.",
    whoSuits: [
      { title: "International arrivals connecting onward", description: "One continuous journey from Muharraq into the Eastern Province, timed to your actual landing." },
      { title: "Travellers heading to King Fahd Airport", description: "A direct onward connection rather than a detour into Dammam city first." },
      { title: "Families with checked luggage", description: "A vehicle sized to your group, keeping everyone together through the border." },
    ],
    checklist: [
      "Flight number and arrival date",
      "Exact destination — Dammam address or King Fahd Airport",
      "Passenger and luggage count",
      "Valid passport (and Saudi visa if required for your nationality)",
      "A buffer for immigration and baggage claim before the causeway leg begins",
    ],
    bookingSteps: [
      { label: "Share your flight & destination", detail: "Flight number, arrival date, and Dammam address or King Fahd Airport." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver waits in arrivals", detail: "Name board held inside Muharraq's arrivals hall, flight tracked." },
      { label: "Door-to-door arrival", detail: "Straight from the terminal across the causeway to your destination." },
    ],
    mapOrigin: "Bahrain International Airport, Bahrain",
    mapDestination: "Dammam, Saudi Arabia",
  },

  "bahrain-to-khobar": {
    departureHeading: "The Shortest Crossing Between Bahrain and Saudi Arabia",
    departureParagraphs: [
      "Of the Eastern Province destinations reachable from Bahrain, Al Khobar is the closest. The city sits right at the Saudi end of the King Fahd Causeway, so once you're across the crossing itself you're effectively already in Khobar rather than facing a further drive inland the way a Dammam or Riyadh-bound traveller would.",
      "A private transfer collects you from wherever you're staying in Bahrain — a Manama hotel, a Seef District office, the Diplomatic Area, or elsewhere — and takes you door to door to Khobar. Because Bahrain is compact, the difference in distance between pickup points is small, but telling us your exact address still means your driver plans the most direct route to the causeway.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Bahrain pickup", detail: "Manama, Seef, the Diplomatic Area, or elsewhere." },
      { label: "Toward the Causeway", detail: "A short, direct approach given how close Khobar sits to the border." },
      { label: "Passport Island crossing", detail: "Bahraini exit / Saudi entry formalities." },
      { label: "Khobar arrival", detail: "Corniche, hotel, or a specific address." },
    ],
    beforeBorderLabel: "On the Bahrain side",
    beforeBorderText: "Pickup from anywhere in Bahrain, followed by the shortest causeway approach of any Eastern Province destination.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "Effectively already in Khobar once across — a short final stretch to the Corniche or your specific address.",
    borderHeading: "Crossing the Causeway",
    borderParagraphs: [
      "The journey crosses the King Fahd Causeway via Passport Island, the artificial island roughly midway across that has housed a combined, one-stop border facility since 2017 — Bahraini exit formalities, Saudi entry formalities, vehicle clearance and customs are all handled at the same stop. Because the route itself is short, time spent at this crossing is the main variable in your total journey, more so than on longer routes where driving time dominates.",
      "Weekend evenings, when leisure traffic returns from Bahrain, tend to be busiest — we can't promise an exact crossing time, but your driver manages the process either way.",
    ],
    saudiJourneyHeading: "A Short Final Stretch Into Khobar",
    saudiJourneyParagraphs: [
      "Because Khobar sits right at the causeway's Saudi end, there isn't a long inland drive the way there would be to Dammam or Riyadh — the border crossing itself is the main part of the journey after leaving Bahrain.",
      "If your actual destination is further inland — Dammam, or King Fahd International Airport for an onward flight — that's a different, longer leg than this one, and we cover it too; just tell us your real endpoint when you book.",
    ],
    destinationHeading: "Arriving at the Khobar Corniche or a Specific Address",
    destinationParagraphs: [
      "Al Khobar's Corniche — the waterfront promenade along the Gulf, with walking paths, green space and a run of restaurants — is a common destination for weekend visitors and a recognisable landmark if you're describing your drop-off point. But we also take you directly to a specific hotel, business address or residential building.",
      "So the fixed price reflects the journey you're actually taking rather than assuming Khobar by default, tell us your real endpoint at booking.",
    ],
    vehicleText: "A standard sedan suits solo or paired travellers; an SUV or van suits families or groups with more luggage for the crossing.",
    whoSuits: [
      { title: "Business travellers based in Bahrain", description: "Seef offices and Diplomatic Area addresses regularly make this same-day crossing." },
      { title: "Weekend travellers returning to the Eastern Province", description: "The shortest of the Bahrain-Saudi crossings for a quick return." },
      { title: "Groups continuing further inland", description: "Tell us if your real destination is Dammam or King Fahd Airport rather than Khobar itself." },
    ],
    checklist: [
      "Valid passport (and Saudi visa if required for your nationality)",
      "Exact Bahrain pickup point and Khobar destination",
      "Passenger and luggage count",
      "A weekday-morning departure if timing is flexible — queues are shortest then",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Bahrain pickup point and Khobar destination." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable vehicle confirmed before you travel." },
      { label: "Driver meets you", detail: "At your Bahrain address, heading directly toward the causeway." },
      { label: "Door-to-door arrival", detail: "Continue straight to your Khobar destination, no vehicle change." },
    ],
    mapOrigin: "Manama, Bahrain",
    mapDestination: "Al Khobar, Saudi Arabia",
  },

  "manama-to-dammam": {
    departureHeading: "Central Manama: The Natural Starting Point",
    departureParagraphs: [
      "Most travellers making this specific trip are already based somewhere in Manama itself — a hotel in the Seef District, an office in the Diplomatic Area near the embassies and the National Theatre, or a residence elsewhere in the capital — rather than arriving fresh off a flight. That's a meaningfully different starting point from the airport transfers we also run: you're not tracking a flight or clearing immigration first, you're simply being collected from wherever you already are in the city.",
      "Because Manama's business and hotel districts are spread across a few distinct areas, your exact pickup address matters for planning the most direct route to the causeway — tell us whether you're in Seef, the Diplomatic Area, or elsewhere when you book.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Manama pickup", detail: "From your specific hotel or office address." },
      { label: "Toward the Causeway", detail: "The most direct route from your pickup point." },
      { label: "Passport Island crossing", detail: "Bahraini exit / Saudi entry formalities." },
      { label: "Dammam or King Fahd Airport", detail: "Whichever you specify at booking." },
    ],
    beforeBorderLabel: "On the Bahrain side",
    beforeBorderText: "Pickup from your exact Manama address — Seef, the Diplomatic Area, or elsewhere — not a fixed meeting point.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "A further drive into the Eastern Province to a Dammam address, or on to King Fahd Airport if that's your final leg.",
    borderHeading: "Crossing the King Fahd Causeway",
    borderParagraphs: [
      "Leaving Bahrain for Saudi Arabia, the route crosses the causeway's 25 kilometres to Al Khobar on the Saudi side, passing through the combined Bahraini-exit-and-Saudi-entry checkpoint on Passport Island partway across — a one-stop process for passport control, vehicle clearance and customs, in place since 2017. Crossing volume varies through the week and tends to be higher at weekends and around public holidays.",
      "We can't promise an exact time at the border on a given day, but the fixed price you agree covers the crossing regardless of how long it takes.",
    ],
    saudiJourneyHeading: "Dammam City or King Fahd Airport — Say Which",
    saudiJourneyParagraphs: [
      "Dammam itself, as the Eastern Province's largest city, covers considerably more ground than just the causeway landing point at Khobar, and your specific destination within it — a business district, a hotel, a residential area — changes the final stretch of the drive. King Fahd International Airport is a separate consideration again: it sits outside the city on its own site, and is the relevant drop-off only if you're connecting onward to a flight rather than staying in Dammam itself.",
      "Confirming which of these applies when you book means your driver routes correctly from the causeway onward, rather than defaulting to the city centre when you actually need the airport, or the reverse.",
    ],
    destinationHeading: "Vehicles for Business and Leisure Travel From Manama",
    destinationParagraphs: [
      "We size the car to your trip: a sedan for a solo business traveller or a couple, an SUV for a family or anyone with more luggage, and a van for larger groups moving together. Every vehicle is air-conditioned and kept clean for the causeway drive, and child seats are available on request for families.",
      "Business travellers appreciate being able to work or make calls during the drive rather than managing a taxi change at the border, while families and groups find it easier to keep everyone and their bags together through a single crossing.",
    ],
    vehicleText: "A sedan suits a solo business traveller or a couple; an SUV suits a family or anyone with more luggage; a van suits larger groups moving together.",
    whoSuits: [
      { title: "Business travellers from Seef or the Diplomatic Area", description: "Pickup from an exact address rather than a fixed meeting point, timed to a meeting on the Saudi side." },
      { title: "Families heading to a Dammam hotel", description: "One vehicle, door-to-door, with child seats available on request." },
      { title: "Travellers connecting through King Fahd Airport", description: "Say which destination applies so the route is planned correctly from the causeway onward." },
    ],
    checklist: [
      "Valid passport (and Saudi visa if required for your nationality)",
      "Exact Manama pickup address and Dammam destination (or King Fahd Airport)",
      "Passenger and luggage count",
      "Preferred departure time",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Manama pickup address and Dammam destination — city or King Fahd Airport." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver meets you", detail: "At your exact Manama address, heading toward the causeway." },
      { label: "Door-to-door arrival", detail: "Continue across the causeway to your Dammam destination." },
    ],
    mapOrigin: "Manama, Bahrain",
    mapDestination: "Dammam, Saudi Arabia",
  },

  "bahrain-to-riyadh": {
    departureHeading: "This Journey Starts With the Border, Not Ends With It",
    departureParagraphs: [
      "Where the Riyadh-to-Bahrain direction covers the long Eastern Province highway first and reaches the causeway as its final stage, this journey runs the other way round: you cross into Saudi Arabia almost immediately after leaving Bahrain, and the long inland drive to Riyadh is what follows. That changes the shape of the day — the border crossing happens while you're still fresh from your Manama pickup, rather than after several hours of driving.",
      "We collect you from your hotel, office or any address in Bahrain, so tell us your exact pickup point when booking rather than assuming a fixed Manama meeting spot.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Bahrain pickup", detail: "From your exact hotel, office, or address." },
      { label: "Early border crossing", detail: "The causeway comes right after departure, not at the end." },
      { label: "Long Eastern Province drive", detail: "West across the desert toward Riyadh." },
      { label: "Rest stops", detail: "Built in for the long remaining drive." },
      { label: "Riyadh arrival", detail: "Hotel, office, or King Khalid International Airport." },
    ],
    beforeBorderLabel: "On the Bahrain side",
    beforeBorderText: "A short approach to the causeway — the border comes almost immediately after your Manama pickup.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "The long haul: several hours west across the Eastern Province and the Saudi interior to Riyadh.",
    borderHeading: "Crossing Into Saudi Arabia Early",
    borderParagraphs: [
      "The King Fahd Causeway runs 25 kilometres from Al Jasra on the Bahraini side to Al Khobar on the Saudi side, with the border facility on Passport Island roughly midway — a combined, one-stop crossing for Bahraini exit and Saudi entry formalities since 2017.",
      "Because this crossing happens near the start of the trip rather than the end, a longer wait here has more effect on your overall arrival time in Riyadh than it would on the reverse direction. We can't promise an exact processing time, but your driver manages the crossing and the fixed price you've agreed covers however long it takes.",
    ],
    saudiJourneyHeading: "The Long Haul Across the Eastern Province",
    saudiJourneyParagraphs: [
      "Once across the causeway, the route continues west along the same highway corridor used for an Eastern-Province-to-Riyadh trip — a genuine multi-hour drive across open desert terrain. We build in rest stops for refreshments and a stretch as the journey needs them, which matters more here than on shorter routes given how much driving remains after the border.",
      "Our drivers pace the whole day sensibly, factoring in both the crossing and the long highway stretch so nothing feels rushed at either end.",
    ],
    destinationHeading: "Riyadh Hotel, Office, or the Airport",
    destinationParagraphs: [
      "Riyadh is a large, spread-out capital, and your specific destination — a hotel, a business address, a residential district, or King Khalid International Airport for an onward flight — determines the final part of the drive. If your journey ends at the airport, tell us your flight details when booking so we can time the whole trip around your actual departure rather than a rough estimate.",
      "Business travellers with a fixed meeting time, families arriving at a specific hotel, and anyone connecting onward by air all use this route — the same fixed-price service covers each, once we know exactly where you're headed.",
    ],
    vehicleText: "We use clean, air-conditioned vehicles matched to your group size for the distance involved, from a sedan for one or two passengers to a van for a larger party.",
    whoSuits: [
      { title: "Business travellers with a Riyadh meeting", description: "The border is out of the way early, leaving the long drive to plan around rather than an unpredictable finish." },
      { title: "Families arriving at a specific hotel", description: "Rest stops built into the long Eastern Province leg at no extra cost." },
      { title: "Travellers connecting through King Khalid Airport", description: "Share your flight details so the whole trip is timed around your departure." },
    ],
    comparisonIntro: "Many travellers weigh this drive against a short flight. Neither is universally better — it depends on your priorities.",
    comparison: [
      { criterion: "Total time, door to door", road: "A half-day journey: early causeway crossing, then a long highway drive", flight: "Faster in the air, plus airport transfers and check-in at both ends" },
      { criterion: "Check-in / security", road: "None — you leave when you're ready", flight: "Arrive early for check-in and security" },
      { criterion: "Baggage", road: "No weight limits within the vehicle's capacity", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Border experience", road: "One combined crossing at Passport Island, early in the trip", flight: "Passport control and customs at each airport" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport (and Saudi visa if required for your nationality)",
      "Bahrain pickup point and Riyadh destination (or flight details)",
      "Passenger and luggage count",
      "Preferred travel time — allow a comfortable buffer for the early border crossing",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Bahrain pickup point, Riyadh destination or flight details, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Bahrain address, heading toward the causeway first." },
      { label: "Border crossing & long drive", detail: "Passport Island handled early, then the long Eastern Province drive to Riyadh." },
    ],
    mapOrigin: "Manama, Bahrain",
    mapDestination: "Riyadh, Saudi Arabia",
  },

  "bahrain-airport-to-khobar": {
    departureHeading: "Starting From Muharraq, Not From Manama",
    departureParagraphs: [
      "Bahrain International Airport sits on Muharraq Island, a separate area connected to Manama by its own bridges, so a transfer that begins at the airport is a genuinely different starting point from one that begins at a Manama hotel. Your driver waits inside the arrivals hall itself, tracking your flight, and the route from there heads toward the King Fahd Causeway without first routing through the city.",
      "Because this is an international arrival, expect the usual sequence of immigration and baggage claim before you reach the exit — normal for any airport, and one more reason a driver who's waiting inside rather than circling outside makes the start of the journey easier.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Muharraq arrival", detail: "Driver waiting in arrivals, flight tracked." },
      { label: "Toward the Causeway", detail: "Direct route, no detour through Manama." },
      { label: "Passport Island crossing", detail: "Bahraini exit / Saudi entry formalities." },
      { label: "Khobar arrival", detail: "Hotel, Corniche, or residential address." },
    ],
    beforeBorderLabel: "On the Bahrain side",
    beforeBorderText: "Meet-and-greet inside Muharraq arrivals, then a direct drive toward the causeway.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "One of the shorter crossings — Khobar sits right at the causeway's Saudi end.",
    borderHeading: "Crossing the King Fahd Causeway Into Saudi Arabia",
    borderParagraphs: [
      "The causeway covers 25 kilometres between Al Jasra on the Bahraini side and Al Khobar on the Saudi side, with the border facility on Passport Island roughly midway across — a one-stop process since 2017, combining Bahraini exit formalities, Saudi entry formalities, vehicle clearance and customs at a single stop.",
      "Crossing volume tends to build at weekends and around public holidays; we can't promise an exact processing time, but your driver handles the crossing itself.",
    ],
    saudiJourneyHeading: "A Short Final Stretch Into Khobar",
    saudiJourneyParagraphs: [
      "Because Khobar sits right at the causeway's Saudi end, this is one of the shorter Bahrain-Saudi crossings — there isn't a long inland drive the way there would be to Dammam or Riyadh.",
      "If your actual destination is further inland — Dammam, or King Fahd International Airport for an onward flight — that's a different, longer leg, and we cover it too; tell us your real endpoint when you book.",
    ],
    destinationHeading: "Arriving in Al Khobar",
    destinationParagraphs: [
      "Once across, your driver continues directly to your hotel, the Corniche, or a specific residential address — arrivals from an international flight typically come with more baggage than a short regional hop, so we match the vehicle to what you're actually carrying.",
      "Travelling as a single group through the border also keeps the crossing itself simpler, since everyone's documents move through Passport Island together.",
    ],
    vehicleText: "A sedan suits one or two passengers with normal luggage; an SUV or van suits families or groups with more bags after an international flight.",
    whoSuits: [
      { title: "International arrivals connecting onward", description: "One continuous journey from Muharraq into Khobar, timed to your actual landing." },
      { title: "Business travellers with a Khobar meeting", description: "A tracked transfer straight to your hotel or office rather than a taxi change at the border." },
      { title: "Families with checked luggage", description: "A vehicle sized to your group, keeping everyone together through the border." },
    ],
    checklist: [
      "Flight number and arrival date",
      "Exact Khobar destination",
      "Passenger and luggage count",
      "Valid passport (and Saudi visa if required for your nationality)",
      "A buffer for immigration and baggage claim before the causeway leg begins",
    ],
    bookingSteps: [
      { label: "Share your flight & destination", detail: "Flight number, arrival date, and exact Khobar address." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver waits in arrivals", detail: "Name board held inside Muharraq's arrivals hall, flight tracked." },
      { label: "Door-to-door arrival", detail: "Straight from the terminal across the causeway to your Khobar address." },
    ],
    mapOrigin: "Bahrain International Airport, Bahrain",
    mapDestination: "Al Khobar, Saudi Arabia",
  },

  // ───────────────────────────── KUWAIT ─────────────────────────────
  "kuwait-city-to-dammam": {
    departureHeading: "Starting in Kuwait City",
    departureParagraphs: [
      "Kuwait City covers a wide metropolitan area, so we collect you from your specific address — a downtown hotel, a business district office, or a residential area — rather than a fixed pickup point. From there, the route heads south toward the Nuwaiseeb border crossing, the start of the long haul back into Saudi Arabia.",
      "Confirming your exact pickup location matters more here than it might on a shorter trip, simply because the drive ahead is long enough that starting from the right point saves real time over the full journey.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Kuwait City pickup", detail: "From your specific hotel, office, or address." },
      { label: "South to the border", detail: "Toward the Nuwaiseeb crossing." },
      { label: "Nuwaiseeb / Khafji crossing", detail: "Kuwaiti exit / Saudi entry formalities." },
      { label: "Highway 95 south", detail: "Past Jubail and Qatif toward Dammam." },
      { label: "Dammam or King Fahd Airport", detail: "Whichever you specify at booking." },
    ],
    beforeBorderLabel: "On the Kuwait side",
    beforeBorderText: "Pickup from your specific Kuwait City address, then south toward the Nuwaiseeb crossing.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "A long southbound drive on Highway 95 through the Eastern Province to Dammam or King Fahd Airport.",
    borderHeading: "Crossing at Nuwaiseeb / Khafji",
    borderParagraphs: [
      "The border crossing sits at Nuwaiseeb on the Kuwaiti side and Khafji on the Saudi side, where Highway 95 continues south into the Eastern Province. Requirements vary meaningfully by nationality, so check the current rules for your passport before you travel.",
      "As with any land border, conditions vary by day and time, and we can't promise an exact processing duration. Your driver manages the crossing itself, and the fixed price you've agreed covers however long it takes.",
    ],
    saudiJourneyHeading: "The Long Drive South on Highway 95",
    saudiJourneyParagraphs: [
      "Once across the border, the route follows Highway 95 south through the Eastern Province's coastal corridor — past Jubail and Qatif before reaching Dammam and Khobar. It's a genuinely long stretch of driving, and we build in rest stops for refreshments and a stretch as the journey needs them.",
      "Because the fare is fixed and agreed before you travel, taking the time to stop and rest never adds to what you pay.",
    ],
    destinationHeading: "Dammam City or King Fahd Airport — Say Which",
    destinationParagraphs: [
      "Once you're back in the Eastern Province, your actual destination matters: a Dammam city address is a different final leg from King Fahd International Airport, which sits outside the city and is the relevant drop-off only if you're connecting onward to a flight.",
      "If your journey ends at the airport, share your flight details when booking so we can time the whole trip around your actual departure.",
    ],
    vehicleText: "We size the vehicle to your group and luggage — a sedan for one or two passengers, an SUV or van for families and larger groups on the long southbound drive.",
    whoSuits: [
      { title: "Travellers with a Dammam or Khobar destination", description: "A single continuous journey down Highway 95, no onward transfer to arrange." },
      { title: "Families relocating or visiting", description: "Rest stops built into the long southbound leg, at no extra cost given the fixed price." },
      { title: "Travellers connecting through King Fahd Airport", description: "Share flight details so the trip is timed around your actual departure." },
    ],
    checklist: [
      "Valid passport (and Saudi visa if required for your nationality)",
      "Exact Kuwait City pickup point and Dammam destination (or King Fahd Airport)",
      "Passenger and luggage count",
      "Preferred travel time, with a buffer for the border crossing",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Kuwait City pickup point, Dammam destination or flight details, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Kuwait City address, heading south toward the border." },
      { label: "Border crossing & arrival", detail: "Nuwaiseeb/Khafji handled by your driver, then south on Highway 95 to your destination." },
    ],
    mapOrigin: "Kuwait City, Kuwait",
    mapDestination: "Dammam, Saudi Arabia",
  },

  "kuwait-city-to-riyadh": {
    departureHeading: "Kuwait City to Riyadh: Route Overview",
    departureParagraphs: [
      "The drive from Kuwait City to Riyadh covers around 500 kilometres, heading south from the Kuwaiti capital across the border and on across the Saudi desert to the capital. A private car makes it a relaxed, door-to-door journey, collecting you in Kuwait City and delivering you to your Riyadh address or the airport.",
      "Travellers choose the car over a flight for the space, the luggage freedom and one continuous journey with no check-in or onward transfer. Our drivers know the highway and plan sensible rest stops.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Kuwait City pickup", detail: "From your specific hotel, office, or address." },
      { label: "South to the border", detail: "Toward the Nuwaiseeb crossing." },
      { label: "Nuwaiseeb / Khafji crossing", detail: "Kuwaiti exit / Saudi entry formalities." },
      { label: "Long desert drive", detail: "Across Saudi Arabia toward Riyadh." },
      { label: "Riyadh arrival", detail: "Hotel, address, or airport." },
    ],
    beforeBorderLabel: "On the Kuwait side",
    beforeBorderText: "Pickup from your specific Kuwait City address, then south toward the Nuwaiseeb crossing.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "Roughly five hours of desert highway remain after the border, before reaching Riyadh.",
    borderHeading: "Crossing Into Saudi Arabia and Timing Your Flight",
    borderParagraphs: [
      "The journey crosses from Kuwait into Saudi Arabia at Nuwaiseeb and Khafji, passing Kuwaiti exit and Saudi entry formalities at the crossing. It is busiest at weekends and on holidays, so we plan the timing carefully.",
      "If your journey ends at the airport for an onward flight, we time the whole trip around your departure, allowing for the border, the long drive and check-in. Because documentation requirements vary by nationality and change from time to time, we advise on the current procedures when you book.",
    ],
    saudiJourneyHeading: "Comfort on the Long Drive",
    saudiJourneyParagraphs: [
      "A five-hour drive is only pleasant in the right vehicle, so we use clean, air-conditioned cars chosen for distance and matched to your group and luggage, with rest stops built in as needed. Because the fare is fixed, a longer break or a slower stretch never changes the cost.",
      "Travelling by private car means you leave from your Kuwait City door and arrive at your Riyadh door, with no onward transfer to arrange.",
    ],
    destinationHeading: "Who Chooses the Kuwait City to Riyadh Drive",
    destinationParagraphs: [
      "The route suits families who value space and flexibility, business travellers who want to rest or work en route and arrive door-to-door, and groups who prefer to travel together. It is also popular with residents making the journey regularly and with visitors combining time in Kuwait with a stay in the capital.",
      "Whichever describes you, the same fixed-price, 24/7 service applies with a professional driver.",
    ],
    vehicleText: "A single vehicle for everyone is often more comfortable and more economical than separate flights and taxis for groups and families making this long drive.",
    whoSuits: [
      { title: "Families valuing space and flexibility", description: "Rest stops built into the long desert drive, at no extra cost." },
      { title: "Business travellers", description: "Rest or work en route and arrive door-to-door in Riyadh, no check-in queues." },
      { title: "Residents making the journey regularly", description: "A familiar, predictable service across Highway 40/95 and the Nuwaiseeb crossing." },
    ],
    comparisonIntro: "For this length of journey, the choice between road and air genuinely depends on what you're carrying and how you value your time.",
    comparison: [
      { criterion: "Total time, door to door", road: "A full day's journey: highway drive, rest stops, and the border crossing", flight: "Faster in the air, plus transfers and check-in at both ends" },
      { criterion: "Baggage", road: "No weight limits within the vehicle's capacity", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Border experience", road: "One land crossing at Nuwaiseeb/Khafji, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport (and Saudi visa if required for your nationality)",
      "Exact Kuwait City pickup point and Riyadh destination",
      "Passenger and luggage count",
      "Preferred travel time, with a buffer for the border crossing",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Kuwait City pickup point, Riyadh destination or flight details, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Kuwait City address, heading south toward the border." },
      { label: "Border crossing & long drive", detail: "Nuwaiseeb/Khafji handled by your driver, then the desert drive to Riyadh." },
    ],
    mapOrigin: "Kuwait City, Kuwait",
    mapDestination: "Riyadh, Saudi Arabia",
  },

  "kuwait-airport-to-dammam": {
    departureHeading: "Meet and Greet and the Border Crossing",
    departureParagraphs: [
      "We track your inbound flight, so your driver is in position whenever you actually land at Kuwait International Airport, early or delayed. You are met at arrivals by a professional who helps with your bags and walks you to the car, with free waiting time included after landing.",
      "Arriving at Kuwait International Airport and continuing into Saudi Arabia's Eastern Province is a long journey of around 470 kilometres, and a private car makes it a relaxed, door-to-door trip from the terminal.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Kuwait Airport arrival", detail: "Driver waiting in arrivals, flight tracked." },
      { label: "South to the border", detail: "Toward the Nuwaiseeb crossing." },
      { label: "Nuwaiseeb / Khafji crossing", detail: "Kuwaiti exit / Saudi entry formalities." },
      { label: "Dammam arrival", detail: "Door-to-door to your address." },
    ],
    beforeBorderLabel: "On the Kuwait side",
    beforeBorderText: "Driver waiting inside arrivals with your flight tracked, then a direct route south toward the border.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "A further stretch south through the Eastern Province to your Dammam address.",
    borderHeading: "Crossing at Nuwaiseeb / Khafji",
    borderParagraphs: [
      "The journey then crosses from Kuwait into Saudi Arabia at Nuwaiseeb and Khafji, passing Kuwaiti exit and Saudi entry formalities. It is busiest at weekends and holidays. You will need a valid passport and any Saudi visa or entry permit for your nationality, and because requirements vary and change, we advise on current procedures when you book.",
      "As with any land border, we can't promise an exact processing duration on a given day, but your driver manages the crossing itself.",
    ],
    saudiJourneyHeading: "Comfort on the Long Drive",
    saudiJourneyParagraphs: [
      "A five-hour drive after a flight is only pleasant in the right vehicle, so we use clean, air-conditioned cars chosen for distance and matched to your group and luggage, with rest stops built in as needed. Because the fare is fixed, a longer break or a slower stretch never changes the cost.",
      "Travelling by private car means you are met at the Kuwait terminal and dropped at your Dammam door, with no onward transfer to arrange.",
    ],
    destinationHeading: "Arriving in Dammam",
    destinationParagraphs: [
      "For groups and families, one vehicle for everyone is often more comfortable and more economical than separate arrangements after a long international flight.",
      "For the outbound direction, our Dammam to Kuwait Airport transfer mirrors this journey.",
    ],
    vehicleText: "International arrivals typically come with more luggage than a short hop — we size the vehicle to your group and bags rather than assuming a standard load.",
    whoSuits: [
      { title: "International arrivals connecting onward", description: "One continuous journey from the terminal into the Eastern Province, timed to your actual landing." },
      { title: "Families with checked luggage", description: "A vehicle sized to your group, keeping everyone together through the border." },
      { title: "Business travellers with a Dammam meeting", description: "A tracked transfer straight to your address rather than a taxi change at the border." },
    ],
    checklist: [
      "Flight number and arrival date",
      "Exact Dammam destination",
      "Passenger and luggage count",
      "Valid passport (and Saudi visa if required for your nationality)",
      "A buffer for immigration and baggage claim before the border leg begins",
    ],
    bookingSteps: [
      { label: "Share your flight & destination", detail: "Flight number, arrival date, and exact Dammam address." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver waits in arrivals", detail: "Name board held inside the terminal, flight tracked for delays." },
      { label: "Border crossing & arrival", detail: "Nuwaiseeb/Khafji handled by your driver, then straight to your Dammam address." },
    ],
    mapOrigin: "Kuwait International Airport, Kuwait",
    mapDestination: "Dammam, Saudi Arabia",
  },

  // ───────────────────────────── QATAR ─────────────────────────────
  "doha-to-dammam-airport": {
    departureHeading: "Working Backward From Your Flight",
    departureParagraphs: [
      "The honest starting point for this journey is not Doha, it is your departure time at King Fahd International Airport. We plan the pickup by working backward: your airline's check-in deadline, minus reasonable time at the terminal, minus the driving time, minus a genuine buffer for the Salwa border crossing. Tell us your flight details when you book and we set the pickup time accordingly.",
      "This matters more on this route than on most, because the border-crossing stage is the one part of the journey that cannot be timed precisely in advance.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Doha pickup", detail: "Collected from your address." },
      { label: "Road to the border", detail: "Toward Abu Samra / Salwa." },
      { label: "Border processing", detail: "Variable duration — planned for." },
      { label: "Eastern Province drive", detail: "On to the airport." },
      { label: "Dammam Airport drop-off", detail: "With buffer before check-in." },
    ],
    beforeBorderLabel: "On the Qatar side",
    beforeBorderText: "Pickup from your Doha address, timed backward from your flight's check-in deadline.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "The remaining drive north into the Eastern Province, dropping you directly at your King Fahd Airport terminal.",
    borderHeading: "The Border Crossing and Flight Planning",
    borderParagraphs: [
      "Qatari exit and Saudi entry formalities are handled at the crossing — Abu Samra on the Qatari side, Salwa on the Saudi side, the sole land border between the two countries, reopened in January 2021. Processing time is reported to vary substantially, from under an hour in quiet periods to several hours during weekends and holidays.",
      "Because this journey ends at a flight, we build in a genuine buffer for the crossing rather than assuming the best case. If your flight is time-sensitive, mention that when booking so we can plan an earlier departure from Doha.",
    ],
    saudiJourneyHeading: "Pure Driving Time vs Total Journey Time",
    saudiJourneyParagraphs: [
      "The driving distance from Doha to Dammam Airport is around 420 kilometres, and in free-flowing conditions the pure driving time — the border excluded — is roughly four and a half to five hours. That figure alone, though, is not the number to plan a flight around.",
      "Total journey time also includes the Abu Samra/Salwa border crossing, which we treat as a genuinely separate and variable stage. We do not fold it into a single headline number, because doing so would create a false sense of precision that could put your flight at risk.",
    ],
    destinationHeading: "Arriving at King Fahd Airport With Time to Spare",
    destinationParagraphs: [
      "Once across the border, the route continues north into the Eastern Province to King Fahd International Airport, where your driver drops you directly at the terminal for your airline. We do not cut the margin close on a journey this long — the goal is a comfortable arrival with time for check-in and security, not a rushed dash to the gate.",
      "If you are not flying and just need to reach the Eastern Province cities, our Doha to Al Khobar transfer covers that instead.",
    ],
    vehicleText: "We size the vehicle to your group and luggage for the long drive; mention your flight and group size when booking.",
    whoSuits: [
      { title: "Travellers catching a flight from King Fahd Airport", description: "Pickup timed backward from your check-in deadline, with a genuine buffer for the border." },
      { title: "Time-sensitive connections", description: "Mention a tight connection when booking so we can plan an earlier Doha departure." },
      { title: "Families and groups", description: "One vehicle for everyone, dropped directly at the correct terminal." },
    ],
    checklist: [
      "Flight number and departure time",
      "Whether your connection is time-sensitive",
      "Passenger and luggage count",
      "Valid passport (and Saudi visa if required for your nationality)",
      "A genuine buffer for the Salwa crossing before check-in",
    ],
    bookingSteps: [
      { label: "Share your flight details", detail: "Departure time and airline, so we can work backward to a pickup time." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you fly." },
      { label: "Driver collects you", detail: "Timed with a genuine buffer for the Salwa crossing." },
      { label: "Drop-off at the correct terminal", detail: "Directly at King Fahd Airport, with time for check-in and security." },
    ],
    mapOrigin: "Doha, Qatar",
    mapDestination: "King Fahd International Airport, Saudi Arabia",
  },

  "doha-to-riyadh": {
    departureHeading: "Leaving Doha for Riyadh",
    departureParagraphs: [
      "The journey begins with pickup anywhere in Doha — your hotel, home, or office — and heads for the Abu Samra crossing on the Qatari side of the border, the starting point of the long drive into Saudi Arabia. Unlike a short domestic transfer, this is a full-day undertaking, and the pickup time is planned with that in mind rather than treated as a quick errand.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Doha departure", detail: "Pickup from your address." },
      { label: "Border crossing", detail: "Abu Samra / Salwa." },
      { label: "Saudi interior drive", detail: "Long highway journey north-west." },
      { label: "Approaching Riyadh", detail: "City outskirts." },
      { label: "Riyadh drop-off", detail: "Hotel, business address, or airport." },
    ],
    beforeBorderLabel: "On the Qatar side",
    beforeBorderText: "Pickup anywhere in Doha, then north toward the Abu Samra crossing — the border comes early in this direction.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "A single uninterrupted drive of roughly five and a half to six and a half hours across the Saudi interior to Riyadh.",
    borderHeading: "The Cross-Border Road Journey Into Saudi Arabia",
    borderParagraphs: [
      "The crossing at Abu Samra/Salwa — the only land border between Qatar and Saudi Arabia, reopened in January 2021 — comes early in this direction, right after leaving Doha, rather than at the end as it would on the return trip. That has a practical upside: once you are through, the rest of the journey is a single uninterrupted drive across Saudi Arabia with nothing else to clear.",
      "As with any land border, processing time is genuinely variable — reports range from under an hour in quiet periods to several hours during weekends and holidays — so we build flexibility into the schedule rather than promising an exact crossing time.",
    ],
    saudiJourneyHeading: "Understanding the Long Drive to Riyadh",
    saudiJourneyParagraphs: [
      "Once across the border, the route continues north-west across the Saudi interior toward Riyadh, covering roughly 570 to 600 kilometres in total and around five and a half to six and a half hours of pure driving. It is a long, straightforward highway drive rather than a technically difficult one, and the vehicle is set up accordingly — comfortable for distance, with rest stops built in as needed.",
    ],
    destinationHeading: "Choosing the Right Final Drop-Off in Riyadh",
    destinationParagraphs: [
      "Riyadh is a large, spread-out city, and where exactly you need to be changes the practical end of the journey — a hotel in the business district, a residential compound, an embassy or company address, or King Khalid International Airport for an onward flight all sit in different parts of the city. Tell us your specific destination when booking so the final approach is planned correctly.",
      "If your journey continues by air from Riyadh, mention that too — we can factor a reasonable buffer into the schedule.",
    ],
    vehicleText: "A long, straightforward highway drive calls for a vehicle set up for distance — comfortable seating, air conditioning, and rest stops built in as needed.",
    whoSuits: [
      { title: "Travellers who prefer one uninterrupted drive", description: "The border comes early, so the rest of the trip is a single continuous journey with nothing else to clear." },
      { title: "Business travellers connecting through Riyadh", description: "A specific business or embassy address rather than a generic city drop-off." },
      { title: "Travellers continuing by air from Riyadh", description: "Share flight details so a reasonable buffer is built into the schedule." },
    ],
    checklist: [
      "Valid passport (and Saudi visa if required for your nationality)",
      "Exact Doha pickup point and Riyadh destination",
      "Passenger and luggage count",
      "A comfortable buffer for the early border crossing",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Doha pickup point, Riyadh destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Doha address, heading toward the border first." },
      { label: "Border crossing & long drive", detail: "Abu Samra/Salwa handled early, then the uninterrupted drive to Riyadh." },
    ],
    mapOrigin: "Doha, Qatar",
    mapDestination: "Riyadh, Saudi Arabia",
  },

  "doha-to-al-khobar": {
    departureHeading: "Leaving Doha for Saudi Arabia",
    departureParagraphs: [
      "The journey begins with pickup anywhere in Doha and heads north toward the Salwa crossing — the only land border between Qatar and Saudi Arabia. This isn't a short regional hop; it's a genuine multi-hour drive, and the pickup is planned with that in mind, particularly if the drive is timed around an onward flight or meeting on the Saudi side.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Doha departure", detail: "Pickup from your address." },
      { label: "Cross-border journey", detail: "Abu Samra (Qatar) / Salwa (Saudi)." },
      { label: "Eastern Province", detail: "Onto the Saudi coastal highway." },
      { label: "Al Khobar arrival", detail: "Hotel, Corniche, or business address." },
    ],
    beforeBorderLabel: "On the Qatar side",
    beforeBorderText: "Pickup anywhere in Doha, then north toward the Salwa crossing.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "North along the Eastern Province coastal highway to your specific Al Khobar address.",
    borderHeading: "Crossing From Qatar Into the Eastern Province",
    borderParagraphs: [
      "Qatari exit and Saudi entry formalities are both handled at the Salwa/Abu Samra crossing, which reopened in January 2021 and now operates as a normal land border for private vehicles. Processing time genuinely varies — commonly reported as anywhere from under an hour during quiet periods to several hours at busy times, especially weekends and holidays — and we don't promise a fixed duration for it.",
      "A valid passport and any visa or entry permit relevant to your specific nationality are required. Requirements vary by nationality and can change, so it's worth confirming current rules close to your travel date.",
    ],
    saudiJourneyHeading: "How the Road Journey to Al Khobar Unfolds",
    saudiJourneyParagraphs: [
      "Once clear of Doha, the route runs toward the border before continuing north along the Eastern Province coastal highway network toward Al Khobar. The drive covers roughly 400 to 420 kilometres and takes approximately four and a half to five and a half hours of pure driving, not including the border stage.",
      "Al Khobar's own layout matters here: the city's hotels, the Corniche, and its business district sit along a fairly wide stretch of coastline, so where exactly you're headed within Al Khobar makes a real difference to the last part of the drive.",
    ],
    destinationHeading: "Arriving in Al Khobar",
    destinationParagraphs: [
      "Your driver takes you directly to your specific Al Khobar destination — a hotel, the Corniche, a business meeting, or an onward connection toward Dammam if that's where your trip continues. Tell us your exact address when booking so the final approach is planned correctly.",
    ],
    vehicleText: "A comfortable sedan suits most solo or paired travellers; families or groups with more luggage often prefer an SUV for the long drive.",
    whoSuits: [
      { title: "Business travellers with an Al Khobar meeting", description: "A specific business address rather than a generic Corniche drop-off." },
      { title: "Travellers continuing to Dammam", description: "Tell us if your real destination is further inland than Al Khobar." },
      { title: "Groups arriving together", description: "One vehicle covering the whole distance, no separate transfers to arrange." },
    ],
    checklist: [
      "Valid passport (and Saudi visa if required for your nationality)",
      "Exact Doha pickup point and Al Khobar destination",
      "Passenger and luggage count",
      "A comfortable buffer for the border, since it's a larger share of this shorter trip",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Doha pickup point and Al Khobar destination." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver meets you", detail: "At your Doha address, heading north toward the Salwa crossing." },
      { label: "Border crossing & arrival", detail: "Salwa handled by your driver, then straight to your Al Khobar address." },
    ],
    mapOrigin: "Doha, Qatar",
    mapDestination: "Al Khobar, Saudi Arabia",
  },

  // ───────────────────────────── UAE ─────────────────────────────
  "dubai-to-riyadh": {
    departureHeading: "Leaving Dubai for Riyadh",
    departureParagraphs: [
      "The journey begins with pickup anywhere in Dubai and heads west toward the Al Ghuwaifat crossing on the UAE side of the border — a substantial opening stretch before the border is even reached. Unlike a short regional transfer, this is a full-day undertaking from the outset, and the departure time from Dubai is planned with the entire nine-to-ten-hour drive in mind, not just the first leg.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Dubai departure", detail: "Pickup from your address." },
      { label: "Border crossing", detail: "Al Ghuwaifat / Al Batha." },
      { label: "Long Saudi road journey", detail: "West across the interior." },
      { label: "Riyadh approach", detail: "City outskirts." },
      { label: "Final destination", detail: "Hotel, address, or airport." },
    ],
    beforeBorderLabel: "On the UAE side",
    beforeBorderText: "Pickup anywhere in Dubai, then a substantial opening stretch west toward the Al Ghuwaifat crossing.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "A long, straightforward highway drive deep into the Saudi interior toward Riyadh.",
    borderHeading: "Crossing Into Saudi Arabia",
    borderParagraphs: [
      "Emirati exit and Saudi entry formalities are handled at Al Ghuwaifat/Al Batha, the sole land border between the two countries, which operates 24 hours a day. Processing time for passenger vehicles is commonly reported as ranging from around 45 minutes during quiet periods to several hours at busy times, particularly weekends and holidays — we treat this as a genuinely variable stage rather than promising a fixed duration.",
      "Cross-border driving into Saudi Arabia requires the correct vehicle documentation alongside a valid passport and any visa or entry permit for your specific nationality. We arrange the appropriate paperwork when you book, since these requirements are more involved than a standard walk-through border crossing.",
    ],
    saudiJourneyHeading: "The Long Road to Riyadh",
    saudiJourneyParagraphs: [
      "Once across the border, the route settles into a long, straightforward highway drive deep into the Saudi interior toward Riyadh — a substantial stretch on its own, separate from the driving already covered on the UAE side. Total road distance for the full Dubai-to-Riyadh journey runs approximately 950 to 1,000 kilometres, with pure driving time of roughly nine to ten hours.",
      "This back half of the journey benefits from proper rest-stop planning just as much as the opening stretch does — we build in stops for meals and a genuine break as needed, at no extra cost given the fixed price agreed before you travel.",
    ],
    destinationHeading: "Arriving at Your Destination in Riyadh",
    destinationParagraphs: [
      "Riyadh is a large, spread-out capital, and exactly where you're headed changes the practical end of the journey — a hotel in the business district, a residential compound, an embassy address, or King Khalid International Airport for an onward flight all sit in different parts of the city. Tell us your specific destination when booking so the final approach is planned correctly.",
      "If your trip continues by air from Riyadh, mention that too — we can build a reasonable buffer into the schedule for check-in.",
    ],
    vehicleText: "A nine-to-ten-hour drive needs proper rest-stop planning, not an afterthought — we build in stops for meals and a genuine stretch at no extra cost.",
    whoSuits: [
      { title: "Families and groups with substantial luggage", description: "Vehicles sized for families and groups with room for bags and child seats on request." },
      { title: "Travellers who value door-to-door continuity", description: "No check-in, no baggage limits, and nothing to arrange at the Riyadh end." },
      { title: "Travellers connecting through King Khalid Airport", description: "Share flight details so a reasonable buffer is built into the schedule." },
    ],
    comparisonIntro: "For pure speed, flying wins outright. The road journey offers a genuinely different kind of trip.",
    comparison: [
      { criterion: "Total time, door to door", road: "~9-10 hrs driving, plus the border and rest stops", flight: "A fraction of the time in the air, plus transfers and check-in at both ends" },
      { criterion: "Check-in / baggage", road: "No check-in, no weight limits within the vehicle's capacity", flight: "Airport check-in and baggage allowance apply" },
      { criterion: "Vehicle documentation", road: "Correct cross-border paperwork arranged when you book", flight: "Not applicable" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport and any Saudi visa/entry permit required for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Exact Dubai pickup point and Riyadh destination",
      "Passenger and luggage count",
      "A generous buffer for the border crossing",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Dubai pickup point, Riyadh destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and long-haul vehicle, with paperwork arranged." },
      { label: "Driver meets you", detail: "At your Dubai address, with rest stops planned for the full day." },
      { label: "Border crossing & arrival", detail: "Al Ghuwaifat/Al Batha handled by your driver, then on to Riyadh." },
    ],
    mapOrigin: "Dubai, United Arab Emirates",
    mapDestination: "Riyadh, Saudi Arabia",
  },

  "dubai-to-dammam": {
    departureHeading: "Starting the Journey From Dubai",
    departureParagraphs: [
      "Pickup is door-to-door anywhere in Dubai, and the route heads north-west from the outset toward the Al Ghuwaifat crossing — a genuine full-day undertaking, though somewhat shorter than the equivalent journey to Riyadh, since the Eastern Province sits closer to the border than the Saudi capital does.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Dubai departure", detail: "Pickup from your address." },
      { label: "Crossing into Saudi Arabia", detail: "Al Ghuwaifat / Al Batha." },
      { label: "Saudi road journey", detail: "North-west toward the Eastern Province." },
      { label: "Eastern Province", detail: "Approaching Dammam." },
      { label: "Dammam arrival", detail: "Address or King Fahd Airport." },
    ],
    beforeBorderLabel: "On the UAE side",
    beforeBorderText: "Pickup anywhere in Dubai, heading north-west toward the Al Ghuwaifat crossing.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "A further drive north-west into the Eastern Province, meaningfully shorter than the Riyadh leg.",
    borderHeading: "Crossing Into Saudi Arabia",
    borderParagraphs: [
      "Emirati exit and Saudi entry formalities are handled at Al Ghuwaifat/Al Batha, the sole land border between the UAE and Saudi Arabia, operating 24 hours a day. Processing time for passenger vehicles is genuinely variable — commonly reported as around 45 minutes during quiet periods up to several hours at busy times, particularly weekends and holidays — and we don't attach a fixed figure to it.",
      "Cross-border driving into Saudi Arabia requires the correct vehicle documentation alongside a valid passport and any visa relevant to your specific nationality. We arrange the appropriate paperwork when you book.",
    ],
    saudiJourneyHeading: "From the Border to Dammam",
    saudiJourneyParagraphs: [
      "Once across, the route continues north-west into Saudi Arabia's Eastern Province. Total road distance for the full Dubai-to-Dammam journey runs approximately 850 to 870 kilometres, with pure driving time of roughly seven and a half to eight hours — a substantial drive, though meaningfully shorter than the same journey would be to Riyadh, given how much closer the Eastern Province sits to the UAE border.",
      "We build in proper rest stops across a drive of this length, at no extra cost given the fixed price agreed before you travel.",
    ],
    destinationHeading: "Arriving in the Eastern Province",
    destinationParagraphs: [
      "Your driver continues to your specific Dammam address, the Corniche, Khobar on request, or directly to King Fahd International Airport if your journey continues by air — tell us which when booking so the final approach and any check-in buffer are planned correctly.",
    ],
    vehicleText: "We build in proper rest stops across a drive of this length, with vehicles matched to your group and luggage.",
    whoSuits: [
      { title: "Travellers heading to the Eastern Province", description: "A meaningfully shorter drive than the equivalent Riyadh journey, given the UAE border's proximity." },
      { title: "Travellers connecting through King Fahd Airport", description: "Direct drop-off at the terminal if your journey continues by air." },
      { title: "Groups and families", description: "One vehicle covering the whole distance with room for luggage." },
    ],
    checklist: [
      "Valid passport and any Saudi visa/entry permit required for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Exact Dubai pickup point and Dammam destination (or King Fahd Airport)",
      "Passenger and luggage count",
      "A generous buffer for the border crossing",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Dubai pickup point, Dammam destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and long-distance vehicle, with paperwork arranged." },
      { label: "Driver meets you", detail: "At your Dubai address, with rest stops planned for the drive." },
      { label: "Border crossing & arrival", detail: "Al Ghuwaifat/Al Batha handled by your driver, then on to Dammam." },
    ],
    mapOrigin: "Dubai, United Arab Emirates",
    mapDestination: "Dammam, Saudi Arabia",
  },

  "dubai-to-jeddah": {
    departureHeading: "Dubai to Jeddah: An Honest Overview",
    departureParagraphs: [
      "The overland journey from Dubai to Jeddah is a cross-country haul of around 1,250 kilometres, crossing from the UAE into Saudi Arabia and on to the Red Sea coast via the Al Batha border. Driving time is in the region of thirteen to fourteen hours, plus border formalities, which realistically means the journey is broken with substantial rest or an overnight stop. We will always be straightforward: for most travellers, a short flight is the sensible choice.",
      "For those who genuinely prefer the road, whether for luggage freedom, to travel as a group, to avoid flying, or to see the country, we provide a comfortable, professionally driven, door-to-door private car with the whole journey planned properly.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Dubai departure", detail: "Pickup from your address." },
      { label: "Cross-country drive", detail: "Typically split over two days with an overnight stop." },
      { label: "Border crossing", detail: "Al Ghuwaifat / Al Batha." },
      { label: "Across Saudi Arabia", detail: "West toward the Red Sea coast." },
      { label: "Jeddah arrival", detail: "Door-to-door to your destination." },
    ],
    beforeBorderLabel: "On the UAE side",
    beforeBorderText: "Pickup anywhere in Dubai, the start of one of the longest overland journeys in the region.",
    afterBorderLabel: "On the Saudi side",
    afterBorderText: "A cross-country drive to the Red Sea coast, realistically split across two days with an overnight stop.",
    borderHeading: "The Al Batha Border Crossing",
    borderParagraphs: [
      "The journey crosses from the UAE into Saudi Arabia at Al Ghuwaifat and Al Batha, passing Emirati exit and Saudi entry formalities. On a route this long the crossing is a small part of the overall time, but it still needs planning. You will need a valid passport and any Saudi visa or entry permit that applies to your nationality.",
      "Honesty matters most here: driving a private vehicle all the way from the UAE into Saudi Arabia requires the correct border and vehicle documentation, and the rules vary by nationality and are updated from time to time. We advise on the current procedures, arrange the appropriate paperwork, and discuss the realistic options with you when you book.",
    ],
    saudiJourneyHeading: "How We Plan Such a Long Journey",
    saudiJourneyParagraphs: [
      "A drive of this length should not be rushed in a single stint. We plan proper rest stops for meals, prayer and sleep, and for many guests the journey is split across two days with an overnight stop, which is far safer and more comfortable. Vehicles are chosen for long-distance comfort, clean and air-conditioned, and matched to your group and luggage.",
      "Travelling this way removes airport check-in, baggage limits and onward transfers, and you leave from your Dubai door and arrive at your Jeddah door.",
    ],
    destinationHeading: "Who It Suits, and Arriving in Jeddah",
    destinationParagraphs: [
      "This route suits travellers with a specific reason to drive: large families or groups with a lot of luggage, those who prefer not to fly, or travellers who want to see the peninsula. It is a considered, premium choice rather than the fastest one.",
      "Because of the length and documentation involved, we recommend discussing your plans with us in detail before booking.",
    ],
    vehicleText: "Vehicles are chosen for long-distance comfort, clean and air-conditioned, and matched to your group and luggage for a two-day journey.",
    whoSuits: [
      { title: "Large families or groups with heavy luggage", description: "A vehicle-load of belongings that would be impractical or expensive to fly." },
      { title: "Travellers who prefer not to fly", description: "A genuinely long alternative for those who'd rather stay on the road." },
      { title: "Anyone wanting to see the country", description: "A premium, considered choice rather than the fastest way to get there." },
    ],
    comparisonIntro: "For most people flying is the sensible choice given the distance — we say so honestly rather than overselling the drive.",
    comparison: [
      { criterion: "Total time, door to door", road: "~1,250 km, typically split across two days with an overnight stop", flight: "A few hours in the air, plus transfers at both ends" },
      { criterion: "Who it suits", road: "Large groups with heavy luggage, or a genuine preference not to fly", flight: "Most travellers, given the distance" },
      { criterion: "Border experience", road: "One land crossing at Al Ghuwaifat/Al Batha, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Booking with notice", road: "Recommended, given the length and documentation involved", flight: "Standard airline booking windows" },
    ],
    checklist: [
      "Valid passport and any Saudi visa/entry permit required for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Plans for an overnight stop partway through the drive",
      "Passenger and luggage count",
      "A clear discussion with us of your specific reason for driving, so we can advise honestly",
    ],
    bookingSteps: [
      { label: "Discuss your plans", detail: "Given the length, we recommend discussing your requirements with us in detail first." },
      { label: "Share pickup & destination", detail: "Your Dubai pickup point, Jeddah destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price agreed once the plan, including any overnight stop, is set." },
      { label: "Two-day journey & arrival", detail: "Rest stops, an overnight stay, the border crossing, then on to Jeddah." },
    ],
    mapOrigin: "Dubai, United Arab Emirates",
    mapDestination: "Jeddah, Saudi Arabia",
  },
};
