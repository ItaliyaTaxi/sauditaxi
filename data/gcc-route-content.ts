import type { GccCountry } from "@/lib/route-journey";

/**
 * Content for Saudi -> GCC international road-transfer route pages, rendered
 * by components/routes/GccRouteView.tsx. Split into two layers:
 *
 * - `gccCountryFacts`: the border-crossing facts and the company-vs-
 *   government responsibility split, which are genuinely the same for every
 *   route crossing the same border (a fact, not editorial filler — kept in
 *   sync with the single source of truth in data/border-guides.ts).
 * - `gccRouteContent`: the route-specific narrative (intro, timeline,
 *   border experience, destination arrival, vehicle notes, who it suits,
 *   comparison, checklist, booking) — unique per route, adapted from each
 *   route's own existing `about`/`notes`/`sections`/`richLayout` content in
 *   data/routes.ts rather than rewritten from scratch, since that content
 *   was already genuinely route-specific and factually careful.
 */

export interface GccCountryFacts {
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

export const gccCountryFacts: Record<GccCountry, GccCountryFacts> = {
  bahrain: {
    crossingName: "King Fahd Causeway (Passport Island)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the vehicle for the whole journey",
      "The causeway toll and cross-border vehicle documentation",
      "Timing your departure around known peak crossing periods",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What Saudi and Bahraini authorities control",
    authorityControls: [
      "Saudi exit and Bahraini entry immigration decisions",
      "Passport and visa eligibility for your nationality",
      "Customs inspection and any restricted-goods rules",
      "How long the queue at Passport Island runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport, and most non-GCC travellers require a Bahrain visa — many nationalities can use an eVisa or visa on arrival, while GCC citizens and residents follow separate rules.",
    documentsItems: [
      "Valid passport",
      "Bahrain visa or entry permit, if required for your nationality",
      "Saudi Iqama alongside your passport, if you're a Saudi resident",
      "Receipts or documentation for anything you're declaring at customs",
    ],
    documentsDisclaimer:
      "Visa and customs rules differ by nationality and change from time to time. Confirm current requirements with official Bahraini sources before you travel — we advise on the general process, but eligibility decisions are made by Saudi and Bahraini border officials, not by us.",
    borderPageHref: "/border-transfers/bahrain-causeway",
    borderPageLabel: "Read our King Fahd Causeway border guide",
  },
  qatar: {
    crossingName: "Salwa Border Crossing (Abu Samra)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the vehicle for the whole journey",
      "Route planning and rest stops for the desert drive",
      "Flight tracking, where the pickup starts at an airport",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What Saudi and Qatari authorities control",
    authorityControls: [
      "Saudi exit and Qatari entry immigration decisions",
      "Passport and visa eligibility for your nationality",
      "Customs inspection and any restricted-goods rules",
      "How long processing at Salwa runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport and the appropriate entry permission for Qatar — many nationalities can obtain a Qatar visa online or on arrival, while GCC citizens and residents follow separate rules.",
    documentsItems: [
      "Valid passport",
      "Qatar visa or entry permit, if required for your nationality",
      "Saudi Iqama alongside your passport, if you're a Saudi resident",
      "Any documentation for goods you're declaring at customs",
    ],
    documentsDisclaimer:
      "Qatari entry requirements vary by nationality and are updated from time to time. Confirm current rules with official Qatari sources before you travel — we advise on the general process, but eligibility decisions belong to Saudi and Qatari border officials, not to us.",
    borderPageHref: "/border-transfers/qatar-border",
    borderPageLabel: "Read our Qatar border guide",
  },
  kuwait: {
    crossingName: "Al Khafji / Nuwaiseeb Border Crossing",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the vehicle for the whole journey",
      "Route planning and rest stops for the long northern drive",
      "Flight tracking, where the pickup or drop-off is an airport",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What Saudi and Kuwaiti authorities control",
    authorityControls: [
      "Saudi exit and Kuwaiti entry immigration decisions",
      "Passport and visa eligibility for your nationality",
      "Customs inspection — Kuwait's rules on restricted goods are strict",
      "How long processing at Khafji/Nuwaiseeb runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport and the appropriate Kuwait entry permission. Visa rules differ by nationality and change over time, and GCC citizens and residents follow separate procedures.",
    documentsItems: [
      "Valid passport",
      "Kuwait visa or entry permit, if required for your nationality",
      "Saudi Iqama alongside your passport, if you're a Saudi resident",
      "Awareness that Kuwait's customs rules on restricted goods are strict",
    ],
    documentsDisclaimer:
      "Kuwaiti entry and customs requirements vary by nationality and change over time. Confirm current rules with official Kuwaiti sources before you travel — eligibility decisions are made by Saudi and Kuwaiti border officials, not by us.",
    borderPageHref: "/border-transfers/kuwait-border",
    borderPageLabel: "Read our Kuwait border guide",
  },
  uae: {
    crossingName: "Al Batha (Saudi) / Al Ghuwaifat (UAE)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the long-haul vehicle for the whole journey",
      "Rest-stop planning for a genuine full-day drive",
      "Arranging the correct cross-border vehicle documentation",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What Saudi and UAE authorities control",
    authorityControls: [
      "Saudi exit and Emirati entry immigration decisions",
      "Passport and visa eligibility for your nationality",
      "Mandatory UAE vehicle insurance, generally purchased at the border",
      "How long processing at Al Batha / Al Ghuwaifat runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport, any visa or entry permit that applies to your nationality, and the correct vehicle documentation for cross-border driving.",
    documentsItems: [
      "Valid passport",
      "UAE visa or entry permit, if required for your nationality",
      "Correct cross-border vehicle documentation (arranged when you book)",
      "Awareness that mandatory third-party UAE vehicle insurance is typically purchased at the border itself",
    ],
    documentsDisclaimer:
      "UAE entry and vehicle requirements vary by nationality and are updated periodically. Confirm current rules with official UAE sources before you travel — we arrange the paperwork we can control, but eligibility decisions belong to Saudi and Emirati border officials, not to us.",
    borderPageHref: "/border-transfers/uae-border",
    borderPageLabel: "Read our UAE border guide",
  },
};

export interface GccStepContent {
  label: string;
  detail?: string;
}

export interface GccScenarioContent {
  title: string;
  description: string;
}

export interface GccComparisonRowContent {
  criterion: string;
  road: string;
  flight: string;
}

export interface GccRouteContent {
  introHeading: string;
  introParagraphs: string[];
  timelineHeading: string;
  timeline: GccStepContent[];
  borderHeading: string;
  borderParagraphs: string[];
  destinationHeading: string;
  destinationParagraphs: string[];
  vehicleText: string;
  whoSuits: GccScenarioContent[];
  comparisonIntro?: string;
  comparison?: GccComparisonRowContent[];
  checklist: string[];
  bookingSteps: GccStepContent[];
  mapOrigin?: string;
  mapDestination?: string;
}

export const gccRouteContent: Record<string, GccRouteContent> = {
  // ───────────────────────────── BAHRAIN ─────────────────────────────
  "khobar-to-bahrain": {
    introHeading: "The King Fahd Causeway Journey from Khobar",
    introParagraphs: [
      "Khobar sits closer to the King Fahd Causeway than any other Eastern Province city, which makes this the route Bahrain-bound weekend travellers and Khobar-based business commuters use most — a short, domestic-feeling hop that happens to end in another country, popular enough that many locals treat a Manama evening as a routine outing rather than a trip.",
      "The drive from Khobar to the causeway covers about 55 kilometres and takes around an hour before border formalities. There's a causeway toll and cross-border vehicles need valid insurance and documentation, both of which we handle as part of the transfer.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Khobar pickup", detail: "Collected from your hotel, home, or office anywhere in Khobar." },
      { label: "Causeway approach", detail: "A short, roughly hour-long drive to the King Fahd Causeway." },
      { label: "Passport Island crossing", detail: "Saudi exit and Bahraini entry formalities handled together at the midpoint." },
      { label: "Bahrain arrival", detail: "Door-to-door to Manama or elsewhere in Bahrain, no vehicle change." },
    ],
    borderHeading: "Crossing at Passport Island",
    borderParagraphs: [
      "Immigration and customs for both countries are handled at the halfway point on Passport Island, so allow extra time beyond the driving time itself. Weekend evenings and public holidays see the longest queues, so a Thursday-evening departure often takes noticeably longer than the same trip on a weekday morning.",
      "Your driver takes you door-to-door from anywhere in Khobar directly into Manama or elsewhere in Bahrain, with no need to change vehicles at the border — useful for business travellers going straight to an office or hotel, and for families who'd rather not manage luggage through two separate transfers.",
    ],
    destinationHeading: "Arriving in Manama or Elsewhere in Bahrain",
    destinationParagraphs: [
      "Because this route is used so heavily for short, planned trips — a Khobar business traveller with a Manama meeting, or a weekend visit to Bahrain's restaurants and waterfront — border timing matters more here than the driving distance itself.",
      "Tell us your specific Bahrain destination when booking; the drop-off can be central Manama or elsewhere in the country, all on the same fixed price.",
    ],
    vehicleText: "A standard sedan suits solo or paired travellers; an SUV or van suits families or groups with more luggage for the crossing.",
    whoSuits: [
      { title: "Business travellers", description: "Khobar's proximity to the Causeway makes a same-day Manama meeting genuinely practical." },
      { title: "Weekend visitors", description: "A well-worn short trip for friends and families visiting Bahrain's restaurants and waterfront." },
      { title: "Groups needing one vehicle", description: "Everyone and their documents move through Passport Island together rather than in separate cars." },
    ],
    checklist: [
      "Valid passport (and Bahrain visa if required for your nationality)",
      "Exact Manama or Bahrain drop-off address",
      "Passenger and luggage count",
      "A weekday-morning departure if timing is flexible — queues are shortest then",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Tell us your Khobar pickup point and exact Bahrain address." },
      { label: "Confirm vehicle & price", detail: "We confirm a fixed, all-in price and suitable vehicle before you travel." },
      { label: "Driver meets you", detail: "Your driver arrives at the agreed time and manages the causeway crossing." },
      { label: "Door-to-door arrival", detail: "Continue straight to your Bahrain destination, no vehicle change." },
    ],
    mapOrigin: "Khobar, Saudi Arabia",
    mapDestination: "Manama, Bahrain",
  },

  "dammam-to-bahrain": {
    introHeading: "Dammam City and King Fahd Airport Departures",
    introParagraphs: [
      "Unlike the short Khobar-to-Causeway hop, this route usually starts further back — at King Fahd International Airport, a Dammam hotel, or a corporate office — which means the border crossing is only the middle part of a longer journey rather than the whole trip.",
      "The drive from Dammam to the causeway covers about 70 kilometres and takes around an hour fifteen minutes before border formalities — noticeably further than the Khobar approach. Many travellers begin this trip from King Fahd International Airport, going straight from arrivals to the causeway without a stop in the city, which is where a tracked, flight-timed pickup matters most.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Dammam pickup", detail: "From your hotel, office, or King Fahd Airport arrivals." },
      { label: "Causeway approach", detail: "About 70 km and roughly an hour fifteen minutes to the King Fahd Causeway." },
      { label: "Passport Island crossing", detail: "Saudi exit and Bahraini entry formalities handled together." },
      { label: "Bahrain arrival", detail: "Door-to-door to Manama or elsewhere in Bahrain." },
    ],
    borderHeading: "Crossing at Passport Island",
    borderParagraphs: [
      "There's a causeway toll and cross-border vehicles need valid insurance and documentation, which we handle as part of the transfer. Weekend evenings and public holidays see the longest queues at Passport Island, so weekday mornings are generally the smoothest time to cross regardless of whether you're starting from the airport, a hotel, or an office.",
      "A meaningful share of this route's bookings are corporate travellers landing at King Fahd Airport and continuing straight on to Manama for a same-day or overnight meeting — for that pattern, the value is in a single tracked transfer rather than an airport taxi followed by a separate causeway booking.",
    ],
    destinationHeading: "Arriving in Manama or Elsewhere in Bahrain",
    destinationParagraphs: [
      "For a shorter, Khobar-based version of this same crossing, see our Khobar to Bahrain route — this Dammam departure suits travellers starting from the airport, the city centre, or a corporate address further back from the causeway.",
      "Tell us your specific Bahrain destination when booking, since the drop-off point changes the total distance even though the airport or city pickup and the causeway crossing stay the same.",
    ],
    vehicleText: "A comfort sedan suits most business travellers; families or groups with more luggage often prefer an SUV for the crossing.",
    whoSuits: [
      { title: "Corporate travellers via King Fahd Airport", description: "A single tracked transfer from arrivals straight to a Manama meeting, rather than an airport taxi plus a separate causeway booking." },
      { title: "Dammam families", description: "The well-worn causeway trip to Bahrain, door-to-door with no vehicle change." },
      { title: "Anyone starting from an office or hotel", description: "Pickup from a specific Dammam address rather than a fixed meeting point." },
    ],
    checklist: [
      "Valid passport (and Bahrain visa if required for your nationality)",
      "Flight number, if starting from King Fahd Airport",
      "Exact Manama or Bahrain drop-off address",
      "Passenger and luggage count",
      "A weekday-morning departure if timing is flexible",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Dammam pickup point (or flight number) and exact Bahrain address." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable vehicle confirmed before you travel." },
      { label: "Driver meets you", detail: "At your address, or tracked to your flight if starting from the airport." },
      { label: "Door-to-door arrival", detail: "Continue across the causeway straight to your Bahrain destination." },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Manama, Bahrain",
  },

  "dammam-airport-to-bahrain": {
    introHeading: "From the Arrivals Hall Straight to Bahrain",
    introParagraphs: [
      "King Fahd International Airport sits well outside Dammam itself, on a large site shared by the wider Eastern Province, and for travellers whose actual destination is Bahrain, driving into the city first only to head back out to the causeway makes little sense. Our transfer skips that detour: your driver waits inside the arrivals hall with your name clearly displayed.",
      "King Fahd Airport's own published figures put the drive to Manama via the causeway at around 103 kilometres, typically about an hour and a half of driving before border formalities — a meaningfully different starting point from a Khobar or Dammam city pickup, since the airport sits closer to the highway leading north to the causeway than it does to the city centre.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Airport meet-and-greet", detail: "Driver waiting in the arrivals hall, your flight tracked in real time." },
      { label: "Direct causeway approach", detail: "The route runs directly toward the causeway, skipping central Dammam." },
      { label: "Passport Island crossing", detail: "Saudi exit and Bahraini entry formalities handled together." },
      { label: "Bahrain arrival", detail: "Door-to-door to Manama, Seef, the Diplomatic Area, or elsewhere in Bahrain." },
    ],
    borderHeading: "Crossing the King Fahd Causeway",
    borderParagraphs: [
      "The causeway runs 25 kilometres across the Gulf, linking Al Khobar on the Saudi side with Al Jasra on the Bahraini side. Partway across sits Passport Island, an artificial island built specifically to house both countries' border facilities — since 2017 it has operated as a one-stop crossing for Saudi exit and Bahraini entry together.",
      "Border volume varies by time and day — weekends and public holidays typically see more crossings than a weekday morning — and we can't promise an exact processing time, but your driver manages the crossing itself so there's nothing for you to navigate alone.",
    ],
    destinationHeading: "Manama or Elsewhere in Bahrain",
    destinationParagraphs: [
      "Not every Bahrain-bound traveller from this airport is headed to central Manama. Some are continuing to the Seef District's hotels and offices, others to the Diplomatic Area, and some to addresses well beyond the capital. Tell us your exact destination when booking rather than just 'Bahrain' — the drop-off point changes the total distance meaningfully, even though the airport pickup and the causeway crossing stay the same.",
      "Business travellers heading to a Seef District office, families going to a particular hotel, and residents returning to a Bahrain address all start from the same King Fahd Airport pickup but end up on genuinely different final legs.",
    ],
    vehicleText: "International arrivals usually mean more luggage than a short domestic hop. We size the vehicle to your group — a sedan for one or two passengers, an SUV for a family or extra bags, or a van for larger groups — so mention your group size and luggage when requesting a quote.",
    whoSuits: [
      { title: "International arrivals connecting onward", description: "One continuous journey from the terminal into Bahrain, with no second vehicle to arrange." },
      { title: "Business travellers to Seef or the Diplomatic Area", description: "A specific destination beyond central Manama, on the same fixed price." },
      { title: "Families with checked luggage", description: "A vehicle sized to your group and bags, keeping everyone together through the border." },
    ],
    checklist: [
      "Flight number and arrival date",
      "Exact Bahrain destination (Manama, Seef, Diplomatic Area, or elsewhere)",
      "Passenger and luggage count",
      "Valid passport (and Bahrain visa if required for your nationality)",
      "A buffer for immigration and baggage claim before the causeway leg begins",
    ],
    bookingSteps: [
      { label: "Share your flight & destination", detail: "Flight number, arrival date, and exact Bahrain address." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel — no deposit needed for a quote." },
      { label: "Driver waits in arrivals", detail: "Name board held inside the terminal, flight tracked for delays." },
      { label: "Door-to-door arrival", detail: "Straight from the terminal across the causeway to your Bahrain address." },
    ],
    mapOrigin: "King Fahd International Airport, Saudi Arabia",
    mapDestination: "Manama, Bahrain",
  },

  "riyadh-to-bahrain": {
    introHeading: "Two Stages: The Highway East, Then the Causeway",
    introParagraphs: [
      "Riyadh to Bahrain is a genuine cross-country drive — first east across the desert to the Eastern Province, then the King Fahd Causeway as the final stage into Bahrain — and a private car turns that distance into a single relaxed journey rather than a flight plus a separate airport transfer.",
      "The drive has two genuinely different halves. The first is the long highway run east from the capital across the Eastern Province — the same corridor used for a Riyadh-to-Dammam trip — and the second is the causeway itself, the 25-kilometre crossing that forms the final stage. Most of the distance and most of the driving time belongs to the first stage.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Riyadh departure", detail: "Pickup from your hotel, home, or office." },
      { label: "Desert highway east", detail: "The long run across the interior to the Eastern Province." },
      { label: "Rest stops", detail: "Sensible pacing for refreshments and a stretch, built in as needed." },
      { label: "Passport Island crossing", detail: "The King Fahd Causeway, the final stage into Bahrain." },
      { label: "Bahrain arrival", detail: "Door-to-door to your Manama address." },
    ],
    borderHeading: "The King Fahd Causeway After the Long Drive",
    borderParagraphs: [
      "By the time you reach the causeway, you have already covered the bulk of the distance. It crosses 25 kilometres from Al Khobar on the Saudi side to Al Jasra on the Bahraini side, with the border facility on Passport Island roughly midway — a combined, one-stop crossing since 2017.",
      "Crossing volume tends to build at weekends and around public holidays. We can't promise an exact border processing time, and after several hours of driving already, we recommend simply building a comfortable buffer into your overall schedule rather than planning to the minute.",
    ],
    destinationHeading: "Arriving in Manama",
    destinationParagraphs: [
      "Because the Eastern Province leg alone already covers several hundred kilometres before the causeway is even reached, this is a meaningfully longer undertaking than any of the Eastern-Province-to-Bahrain routes we also run — plan for a genuine half-day journey rather than a quick hop.",
      "Your driver continues from the causeway directly to your Manama address, or elsewhere in Bahrain if that's where you're headed.",
    ],
    vehicleText: "We use clean, air-conditioned vehicles matched to your group size for the distance involved, from a sedan for one or two passengers to a van for a larger party.",
    whoSuits: [
      { title: "Families with children", description: "Rest stops built into the schedule rather than pushed straight through, at no extra cost." },
      { title: "Groups who'd rather stay together", description: "One vehicle covering the whole distance instead of a flight plus a separate causeway transfer." },
      { title: "Travellers with substantial luggage", description: "No baggage limits within the vehicle's capacity, unlike flying." },
    ],
    comparisonIntro: "Many travellers weigh this drive against a short flight. Neither is universally better — it depends on your priorities.",
    comparison: [
      { criterion: "Total time, door to door", road: "A half-day journey: highway drive, rest stops, and the causeway crossing", flight: "Faster in the air, plus airport transfers and check-in at both ends" },
      { criterion: "Check-in / security", road: "None — you leave when you're ready", flight: "Arrive early for check-in and security" },
      { criterion: "Baggage", road: "No weight limits within the vehicle's capacity", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Border experience", road: "One combined crossing at Passport Island", flight: "Passport control and customs at each airport" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport (and Bahrain visa if required for your nationality)",
      "Riyadh pickup point and Manama destination",
      "Passenger and luggage count",
      "Preferred travel time — allow a comfortable buffer for the causeway",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Riyadh pickup point, Bahrain destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your address, with rest stops planned for the drive east." },
      { label: "Causeway crossing & arrival", detail: "Continue across the causeway straight to your Bahrain address." },
    ],
    mapOrigin: "Riyadh, Saudi Arabia",
    mapDestination: "Manama, Bahrain",
  },

  "khobar-to-bahrain-airport": {
    introHeading: "The King Fahd Causeway Journey to Bahrain Airport",
    introParagraphs: [
      "This route serves Khobar-based travellers with a Bahrain Airport (BAH) departure — a business trip continuing onward, a resident flying out for a holiday, or a visitor heading home. Khobar sits closer to the causeway than any other Eastern Province city, which keeps this one of our shorter Bahrain-bound drives.",
      "The drive covers about 70 kilometres and takes around an hour fifteen minutes of driving before border formalities. We plan the departure time around your flight, not the other way around, since immigration queues at Passport Island are the least predictable part of the journey.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Khobar pickup", detail: "Collected from your hotel, home, or office." },
      { label: "Causeway approach", detail: "About 70 km toward the King Fahd Causeway." },
      { label: "Passport Island crossing", detail: "Saudi exit and Bahraini entry formalities together." },
      { label: "Bahrain Airport drop-off", detail: "Curbside at Bahrain International Airport (BAH), Muharraq." },
    ],
    borderHeading: "Crossing at Passport Island Before Your Flight",
    borderParagraphs: [
      "Immigration and customs for both countries are handled at Passport Island, roughly midway across the causeway. Processing time genuinely varies — weekend evenings and public holidays see the longest queues, so we recommend allowing a generous margin before an international check-in rather than planning to the minute.",
      "We plan pickup time working backward from your departure, factoring in the drive, the crossing, and check-in at BAH — but we can't promise an exact crossing duration, since that depends on immigration volume on the day rather than anything we control.",
    ],
    destinationHeading: "Arriving at Bahrain International Airport",
    destinationParagraphs: [
      "Your driver continues past central Manama to the airport itself in Muharraq, dropping you at departures rather than requiring a separate onward taxi once you're in Bahrain.",
      "If your actual destination is Manama or elsewhere in Bahrain rather than the airport, our Khobar to Bahrain route covers that instead.",
    ],
    vehicleText: "A standard sedan suits solo or paired travellers; an SUV or van suits families or groups travelling with more luggage for an international flight.",
    whoSuits: [
      { title: "Business travellers departing BAH", description: "A single tracked transfer timed to your check-in window rather than a fixed schedule." },
      { title: "Residents flying home for a visit", description: "Door-to-door from a Khobar address straight to departures." },
      { title: "Families with checked luggage", description: "A vehicle sized to your group, with room for bags ahead of an international flight." },
    ],
    checklist: [
      "Flight number and departure time",
      "Valid passport (and Bahrain visa/entry permit if required)",
      "Passenger and luggage count",
      "A generous buffer before check-in — border queues are the least predictable part",
      "Exact Khobar pickup address",
    ],
    bookingSteps: [
      { label: "Share your flight & pickup", detail: "Flight number, departure time, and your Khobar pickup address." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver collects you", detail: "Timed backward from your check-in window, allowing for the crossing." },
      { label: "Drop-off at BAH departures", detail: "Curbside at Bahrain International Airport, with time to spare for check-in." },
    ],
    mapOrigin: "Khobar, Saudi Arabia",
    mapDestination: "Bahrain International Airport, Bahrain",
  },

  "dammam-to-bahrain-airport": {
    introHeading: "Dammam to Bahrain International Airport",
    introParagraphs: [
      "This route serves Dammam-based travellers with a Bahrain Airport (BAH) departure. Because Dammam sits further from the causeway than Khobar does, this is a slightly longer approach — about 85 kilometres and around an hour thirty minutes of driving before the border itself.",
      "Many bookings on this route come from travellers who'd rather not manage two separate legs — a taxi to the causeway followed by a local Bahraini transfer to the terminal — and prefer one tracked, door-to-door car for the whole trip instead.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Dammam pickup", detail: "From your hotel, business tower, or home address." },
      { label: "Causeway approach", detail: "About 85 km toward the King Fahd Causeway." },
      { label: "Passport Island crossing", detail: "Saudi exit and Bahraini entry formalities together." },
      { label: "Bahrain Airport drop-off", detail: "Curbside at Bahrain International Airport (BAH), Muharraq." },
    ],
    borderHeading: "Crossing at Passport Island Before Your Flight",
    borderParagraphs: [
      "Border formalities are handled together at Passport Island, roughly midway across the causeway. Processing time genuinely varies with immigration volume — weekends and holidays typically run longer than a weekday morning — so we plan pickup with a buffer rather than promising a fixed crossing time.",
      "There's a causeway toll and cross-border vehicles need valid insurance and documentation; both are arranged as part of the fixed price, so there are no separate fees to settle at the border yourself.",
    ],
    destinationHeading: "Arriving at Bahrain International Airport",
    destinationParagraphs: [
      "Your driver continues past central Manama directly to the airport in Muharraq, so there's no second vehicle to arrange once you're across the border.",
      "If your actual destination is Manama or elsewhere in Bahrain rather than the airport, our Dammam to Bahrain route covers that journey instead.",
    ],
    vehicleText: "A comfort sedan suits most solo or business travellers; families or groups with more luggage often prefer an SUV for the crossing ahead of an international flight.",
    whoSuits: [
      { title: "Business travellers departing BAH", description: "One tracked transfer rather than two separate legs across the border." },
      { title: "Families flying out together", description: "A vehicle sized to your group and luggage, all the way to departures." },
      { title: "Anyone starting from a Dammam hotel or office", description: "Door-to-door pickup, no need to arrange a separate causeway taxi." },
    ],
    checklist: [
      "Flight number and departure time",
      "Valid passport (and Bahrain visa/entry permit if required)",
      "Passenger and luggage count",
      "A generous buffer before check-in for the border crossing",
      "Exact Dammam pickup address",
    ],
    bookingSteps: [
      { label: "Share your flight & pickup", detail: "Flight number, departure time, and your Dammam pickup address." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver collects you", detail: "Timed backward from your check-in window, allowing for the crossing." },
      { label: "Drop-off at BAH departures", detail: "Curbside at Bahrain International Airport, with time to spare." },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Bahrain International Airport, Bahrain",
  },

  // ───────────────────────────── KUWAIT ─────────────────────────────
  "dammam-to-kuwait-city": {
    introHeading: "North on Highway 95, the Full Length of the Eastern Province",
    introParagraphs: [
      "Highway 95, sometimes called the Abu Hadriyah Highway, is the coastal corridor that runs the length of Saudi Arabia's Eastern Province — passing near Khobar, Dammam, Qatif and Jubail before reaching Khafji at the Kuwaiti border. A Dammam-to-Kuwait City trip covers most of this highway's length, which makes it a genuinely long drive even before the border crossing is factored in.",
      "A private transfer collects you from your specific Dammam address — a hotel, an office, a residential district — rather than a fixed meeting point, and takes you the entire way north on a single fixed price.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Dammam departure", detail: "Pickup from your specific address." },
      { label: "Highway 95 north", detail: "The coastal corridor through the Eastern Province toward Khafji." },
      { label: "Rest stops", detail: "Refreshments and a stretch, built in as the drive needs them." },
      { label: "Khafji / Nuwaiseeb crossing", detail: "Saudi exit and Kuwaiti entry formalities." },
      { label: "Kuwait City arrival", detail: "Door-to-door to your specific destination." },
    ],
    borderHeading: "Crossing at Khafji / Nuwaiseeb",
    borderParagraphs: [
      "The border crossing sits at Khafji on the Saudi side and Nuwaiseeb on the Kuwaiti side, at the northern end of Highway 95. Crossing conditions vary by day and time, and we can't promise an exact processing duration on any given trip; your driver is familiar with the route and manages the crossing itself.",
      "This is one of the longer journeys we operate, and comfort over that distance depends on sensible pacing rather than pushing straight through — we build in rest stops for refreshments and a stretch as the drive needs them.",
    ],
    destinationHeading: "Arriving in Kuwait City",
    destinationParagraphs: [
      "Kuwait City itself covers a range of districts and neighbourhoods, so your exact destination — a downtown hotel, a business address, or elsewhere in the wider metropolitan area — determines the final stretch of the drive once you're across the border. Tell us specifically where you're headed rather than just 'Kuwait City' so your driver can route directly.",
      "Business travellers, families visiting relatives, and anyone who prefers a single continuous journey to flying and arranging separate transport all use this route for broadly similar reasons: no airport check-in, no baggage limits, and a single vehicle from door to door.",
    ],
    vehicleText: "Because the fare is fixed and agreed before you travel, a longer break never changes what you pay — there's no reason to rush the stops to save money on a drive this long.",
    whoSuits: [
      { title: "Business travellers", description: "A specific Kuwait City address rather than just a general drop-off, on one continuous journey." },
      { title: "Families visiting relatives", description: "No airport check-in or baggage limits, and rest stops built in for children or elderly travellers." },
      { title: "Anyone who prefers one vehicle", description: "The whole trip in a single car rather than flying plus arranging separate ground transport." },
    ],
    comparisonIntro: "For this length of journey, the choice between road and air genuinely depends on what you're carrying and how you value your time.",
    comparison: [
      { criterion: "Total time, door to door", road: "A full day's journey: highway drive, rest stops, and the border crossing", flight: "Faster in the air, plus transfers and check-in at both ends" },
      { criterion: "Baggage", road: "No weight limits within the vehicle's capacity", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Border experience", road: "One land crossing at Khafji/Nuwaiseeb, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport (and Kuwait visa if required for your nationality)",
      "Exact Dammam pickup point and Kuwait City destination",
      "Passenger and luggage count",
      "Preferred travel time, with a buffer for the border crossing",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Dammam pickup point, Kuwait City destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and suitable long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Dammam address, with rest stops planned for the drive north." },
      { label: "Border crossing & arrival", detail: "Khafji/Nuwaiseeb handled by your driver, then straight to your destination." },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Kuwait City, Kuwait",
  },

  "riyadh-to-kuwait-city": {
    introHeading: "The Longest Cross-Border Route We Operate",
    introParagraphs: [
      "Of every GCC crossing on our network, Riyadh to Kuwait City covers the most ground. The route follows Highway 40 east from the capital to the Eastern Province — the same corridor used for a Riyadh-to-Dammam trip — before joining Highway 95 north along the coast to Khafji, the crossing into Kuwait.",
      "Distance estimates for the full journey vary depending on the exact route taken and the source consulted, but a realistic plan is somewhere in the region of 600 to 700 kilometres before the border is even reached — a different undertaking from our shorter Bahrain routes, and a full-day journey by any reasonable measure.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Riyadh departure", detail: "Pickup from your address." },
      { label: "Highway 40 east", detail: "To the Eastern Province, the same corridor as a Riyadh-Dammam trip." },
      { label: "Highway 95 north", detail: "Along the coast toward Khafji." },
      { label: "Rest stops", detail: "Timed sensibly through the Eastern Province leg." },
      { label: "Khafji / Nuwaiseeb crossing", detail: "A standard land border, no causeway involved." },
      { label: "Kuwait City arrival", detail: "The remaining stretch to your specific destination." },
    ],
    borderHeading: "A Standard Land Border, Not a Causeway Crossing",
    borderParagraphs: [
      "Unlike the Bahrain routes, which cross the King Fahd Causeway and its Passport Island border facility, the Khafji/Nuwaiseeb crossing into Kuwait is a conventional land border — Saudi exit formalities on one side, Kuwaiti entry formalities on the other, with no bridge or artificial island involved.",
      "As with any land border, we can't promise an exact processing time — conditions vary by day and time of travel — but your driver is experienced with this specific crossing and manages the formalities so you don't have to.",
    ],
    destinationHeading: "Arriving in Kuwait City",
    destinationParagraphs: [
      "Once across the border, the remaining drive into Kuwait City covers a further stretch before reaching your actual destination — a downtown hotel, a business address, or elsewhere in the metropolitan area. Tell us specifically where you're headed so the final leg is planned correctly rather than guessed at.",
      "Given how long this specific route is overall, most travellers making it are covering real distance for a specific reason — business, family, or relocation — rather than treating it as a casual day trip, and we plan the whole journey with that in mind.",
    ],
    vehicleText: "A drive covering several hundred kilometres before a border crossing needs real planning rather than a rushed departure — vehicles are chosen for long-distance comfort and matched to your group and luggage.",
    whoSuits: [
      { title: "Business travellers", description: "A specific Kuwait City address planned properly rather than a guessed final leg." },
      { title: "Families relocating or visiting", description: "Rest stops built into the Eastern Province leg, at no extra cost given the fixed price." },
      { title: "Travellers with a specific reason to drive", description: "Given the length, most on this route have a real reason to cover this distance rather than treating it casually." },
    ],
    comparisonIntro: "This is the longest route in our network, so the road-versus-air trade-off is real. Neither is universally better.",
    comparison: [
      { criterion: "Total time, door to door", road: "A full day's journey: two highways, rest stops, and the border", flight: "Far faster in the air, plus transfers at both ends" },
      { criterion: "Baggage", road: "No weight limits within the vehicle's capacity", flight: "Airline baggage allowance and excess fees apply" },
      { criterion: "Border experience", road: "One standard land crossing, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Booking with notice", road: "Recommended given the length of the route", flight: "Standard airline booking windows apply" },
    ],
    checklist: [
      "Valid passport (and Kuwait visa if required for your nationality)",
      "Exact Riyadh pickup point and Kuwait City destination",
      "Passenger and luggage count",
      "As much booking notice as you can manage, given the route length",
      "A comfortable buffer for the border crossing",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Riyadh pickup point, Kuwait City destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and long-distance vehicle, ideally booked with notice." },
      { label: "Driver meets you", detail: "At your Riyadh address, with rest stops planned across both highways." },
      { label: "Border crossing & arrival", detail: "Khafji/Nuwaiseeb handled by your driver, then on to your destination." },
    ],
    mapOrigin: "Riyadh, Saudi Arabia",
    mapDestination: "Kuwait City, Kuwait",
  },

  "dammam-to-kuwait-airport": {
    introHeading: "Dammam to Kuwait International Airport: Route Overview",
    introParagraphs: [
      "The road journey from Dammam to Kuwait International Airport runs around 470 kilometres north through the Eastern Province, across the Khafji border, and on to the terminal on the southern side of Kuwait City. In free-flowing conditions the driving time is roughly five hours, with border formalities on top.",
      "It suits travellers who prefer a single continuous journey from their Dammam door to the departure gate, with no onward transfer to arrange in Kuwait. Our drivers know the highway and plan sensible rest stops.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Dammam departure", detail: "Pickup from your address." },
      { label: "Highway 95 north", detail: "Through the Eastern Province toward Khafji." },
      { label: "Rest stops", detail: "Planned along the way for a drive of this length." },
      { label: "Khafji / Nuwaiseeb crossing", detail: "Saudi exit and Kuwaiti entry formalities." },
      { label: "Kuwait Airport drop-off", detail: "At the terminal, timed to your flight." },
    ],
    borderHeading: "Crossing the Border and Timing Your Flight",
    borderParagraphs: [
      "The journey crosses into Kuwait at the Khafji border, opposite Nuwaiseeb, passing Saudi exit and Kuwaiti entry formalities. It is busiest at weekends and on holidays, so we plan the timing carefully and work back from your flight to leave a comfortable margin for the border, the drive and check-in.",
      "Because documentation requirements vary by nationality and are updated from time to time, we advise on the current procedures when you book and always recommend allowing extra time so a busy crossing never puts your flight at risk.",
    ],
    destinationHeading: "Arriving at Kuwait International Airport",
    destinationParagraphs: [
      "Travelling by private car means you leave from your Dammam door and are dropped right at the Kuwait International Airport terminal, with no onward transfer to arrange. For groups and families, one vehicle for everyone is often simpler than coordinating separate arrangements.",
      "For the city rather than the airport, our Dammam to Kuwait City transfer covers the same corridor.",
    ],
    vehicleText: "A five-hour drive to catch a flight is only relaxing in the right vehicle — clean, air-conditioned cars chosen for distance and matched to your group and luggage, with rest stops built in as needed.",
    whoSuits: [
      { title: "Travellers catching a flight from KWI", description: "Timed backward from departure, with a comfortable margin for the border and check-in." },
      { title: "Families and groups", description: "One vehicle for everyone, simpler than coordinating separate arrangements." },
      { title: "Anyone avoiding a domestic connection", description: "One continuous journey from a Dammam address to the terminal itself." },
    ],
    checklist: [
      "Flight number and departure time",
      "Valid passport (and Kuwait visa if required for your nationality)",
      "Passenger and luggage count",
      "A comfortable margin for the border crossing before check-in",
      "Exact Dammam pickup address",
    ],
    bookingSteps: [
      { label: "Share your flight & pickup", detail: "Flight details, departure time, and your Dammam pickup point." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver collects you", detail: "Timed backward from your flight, allowing for the border and check-in." },
      { label: "Drop-off at the terminal", detail: "Straight to Kuwait International Airport departures." },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Kuwait International Airport, Kuwait",
  },

  // ───────────────────────────── QATAR ─────────────────────────────
  "dammam-airport-to-doha": {
    introHeading: "Meeting You at King Fahd International Airport",
    introParagraphs: [
      "This transfer starts inside the terminal, not at the curb. Your driver tracks your flight number and is positioned in the arrivals hall holding a name board before you clear immigration and baggage claim, so there is no searching for transport after a long flight. Free waiting time is built in to cover a delayed landing or a slow queue through arrivals.",
      "Because King Fahd International Airport sits on a large site outside Dammam city, the drive to the Qatar border begins directly from the terminal — you do not need to travel into Dammam first, one of the practical advantages of booking the airport-to-Doha leg specifically.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Airport arrival", detail: "Driver waiting in arrivals, flight tracked." },
      { label: "Eastern Province road", detail: "Highway south toward the Salwa border." },
      { label: "Salwa border crossing", detail: "Saudi exit / Qatari entry formalities." },
      { label: "Doha arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "Crossing at Salwa: Why We Don't Promise an Exact Time",
    borderParagraphs: [
      "The Salwa border — opposite Abu Samra on the Qatari side — reopened in January 2021 after the earlier Gulf-wide travel restrictions were lifted, and it now functions as a normal land crossing for private vehicles.",
      "How long that takes is genuinely variable — travellers report anywhere from under an hour during quiet periods to several hours at busy times, particularly weekends and holidays. We do not promise a fixed crossing time because no one honestly can; what we do promise is a fixed price regardless of how long the crossing takes.",
    ],
    destinationHeading: "Arriving in Doha",
    destinationParagraphs: [
      "Once through the border, the final stretch continues into Doha itself, where your driver takes you directly to your hotel, business address, or residence — there is no second vehicle or local taxi to arrange at the other end.",
      "For the return leg, see our Doha to Dammam Airport transfer, which is built specifically around getting back to a flight rather than mirroring this journey. If your trip starts from central Dammam or Khobar rather than the airport, our Al Khobar to Doha transfer covers that instead.",
    ],
    vehicleText: "International arrivals usually mean more luggage than a short domestic hop — we size the vehicle to your group and what you're carrying, from a sedan to a van for larger groups.",
    whoSuits: [
      { title: "International arrivals connecting onward", description: "One continuous journey from the terminal into Qatar, timed to your actual landing." },
      { title: "Business travellers", description: "A tracked transfer straight to a Doha hotel or office, skipping a Dammam-city detour." },
      { title: "Families with checked luggage", description: "A vehicle sized to your group, keeping everyone together through the border." },
    ],
    checklist: [
      "Flight number and arrival date",
      "Exact Doha destination",
      "Valid passport (and Qatar visa if required for your nationality)",
      "Passenger and luggage count",
      "A buffer for immigration and baggage claim before the border leg begins",
    ],
    bookingSteps: [
      { label: "Share your flight & destination", detail: "Flight number, arrival date, and exact Doha address." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you fly." },
      { label: "Driver waits in arrivals", detail: "Name board held inside the terminal, flight tracked automatically." },
      { label: "Border crossing & arrival", detail: "Salwa handled by your driver, then straight to your Doha address." },
    ],
    mapOrigin: "King Fahd International Airport, Saudi Arabia",
    mapDestination: "Doha, Qatar",
  },

  "riyadh-to-doha": {
    introHeading: "Driving to Doha from Riyadh: How the Journey Unfolds",
    introParagraphs: [
      "The route leaves Riyadh heading south-east, crossing the width of the Saudi interior before reaching the Eastern Province and the Salwa border. It is a genuinely long single-day journey — around 570 to 600 kilometres depending on your exact starting point in Riyadh, with pure driving time of roughly five and a half to six and a half hours before the border crossing is added.",
      "Independent route-distance sources vary somewhat on the exact figure for this specific city pair, generally clustering in the 550-600 kilometre range rather than a single precise number, so we present it as a range rather than false precision.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Riyadh departure", detail: "Pickup from your address." },
      { label: "Long-distance highway", detail: "South-east across the interior." },
      { label: "Eastern Province", detail: "Approaching the border region." },
      { label: "Salwa border crossing", detail: "Saudi exit / Qatari entry." },
      { label: "Doha arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "Crossing the Salwa Border on a Long Drive",
    borderParagraphs: [
      "By the time you reach Salwa, you have already covered the bulk of the distance, and the crossing — opposite Abu Samra on the Qatari side — is the final stage before Doha. It reopened in January 2021 and functions as a normal land crossing for private vehicles.",
      "Processing time is genuinely variable: reports range from under an hour in quiet periods to several hours at busy times, especially weekends and holidays. We do not promise an exact crossing time, and recommend treating the last stretch of the journey with some flexibility.",
    ],
    destinationHeading: "Arriving in Doha",
    destinationParagraphs: [
      "For groups and families in particular, a single vehicle covering the whole distance can work out more practical than multiple flight tickets plus transfers on both sides, even though the total travel time is longer.",
      "Once through the border, your driver continues to your specific Doha destination — a hotel, business address, or residence, whether West Bay, The Pearl-Qatar, or elsewhere.",
    ],
    vehicleText: "This route uses cars specifically suited to distance — air-conditioned, comfortable for a full day, with rest stops built in as needed rather than treated as an inconvenience.",
    whoSuits: [
      { title: "Families with children or elderly relatives", description: "Removes the need to coordinate multiple legs or connections for a genuinely long drive." },
      { title: "Groups and business travellers", description: "Rest, work, or spread out across a single vehicle for six-plus hours." },
      { title: "Travellers who value door-to-door continuity", description: "Picked up at your Riyadh address and delivered to your actual Doha destination, not just the airport." },
    ],
    comparisonIntro: "Flying is faster in the air; the road journey offers something different. Neither is universally better.",
    comparison: [
      { criterion: "Total time, door to door", road: "A full day: long highway drive, rest stops, and the border", flight: "Faster in the air, plus transfers at both ends" },
      { criterion: "Check-in / baggage", road: "No check-in, no weight limits within the vehicle's capacity", flight: "Airport check-in and baggage allowance apply" },
      { criterion: "Group travel", road: "Everyone and their luggage in one vehicle", flight: "Multiple tickets and coordinated transfers" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport (and Qatar visa if required for your nationality)",
      "Exact Riyadh pickup point and Doha destination",
      "Passenger and luggage count",
      "A comfortable buffer for the border crossing",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Riyadh pickup point, Doha destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and long-distance vehicle." },
      { label: "Driver meets you", detail: "At your Riyadh address, with rest stops planned for the long drive." },
      { label: "Border crossing & arrival", detail: "Salwa handled by your driver, then straight to your Doha address." },
    ],
    mapOrigin: "Riyadh, Saudi Arabia",
    mapDestination: "Doha, Qatar",
  },

  "al-khobar-to-doha": {
    introHeading: "Starting Your Journey from Al Khobar",
    introParagraphs: [
      "Al Khobar sits close to the Eastern Province's southern reach toward Qatar, which makes this one of the shorter Doha crossings we run — though still a real half-day journey, not a short hop. Pickup is door-to-door anywhere in Al Khobar — the Corniche hotels, the business district, or further out toward Dammam and Dhahran on request.",
      "The drive covers roughly 400 to 420 kilometres depending on your exact starting point, with pure driving time of around four and a half to five and a half hours before the Salwa crossing — meaningfully less driving than the Riyadh-Doha journey, since Al Khobar already sits well down the Eastern Province toward the border.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Al Khobar pickup", detail: "Corniche, hotel, or address." },
      { label: "Eastern Province road", detail: "South toward the Salwa border." },
      { label: "Salwa border crossing", detail: "Saudi exit / Qatari entry." },
      { label: "Doha arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "The Cross-Border Part of the Journey",
    borderParagraphs: [
      "The route crosses into Qatar at Salwa, opposite Abu Samra on the Qatari side — the sole land border between the two countries, reopened in January 2021.",
      "Processing time varies genuinely by day and time — commonly reported as anywhere from under an hour to several hours, busiest at weekends and on holidays. Because this is a shorter drive than the Riyadh route, the border crossing makes up a proportionally larger share of the total journey time here.",
    ],
    destinationHeading: "Arriving in Doha",
    destinationParagraphs: [
      "Once through the border, the final stretch continues into Doha, where your driver takes you directly to your hotel, business address, or residence.",
      "For journeys starting at the airport rather than the city, our Dammam Airport to Doha transfer is built specifically around flight arrivals.",
    ],
    vehicleText: "A quiet crossing can mean the whole trip runs close to the pure driving estimate; a busy one adds meaningfully more, so we build reasonable flexibility into the schedule rather than promising a single total-journey number.",
    whoSuits: [
      { title: "Eastern Province travellers to Doha", description: "The shortest of our Doha routes, since Al Khobar already sits well down the coast toward the border." },
      { title: "Groups preferring one vehicle", description: "Door-to-door from Al Khobar, Dammam, or Dhahran on request." },
      { title: "Business travellers", description: "A half-day journey that suits a single-vehicle trip better than coordinating a flight plus transfers." },
    ],
    checklist: [
      "Valid passport (and Qatar visa if required for your nationality)",
      "Exact Al Khobar pickup point and Doha destination",
      "Passenger and luggage count",
      "A comfortable buffer for the border, since it's a larger share of this shorter trip",
      "Emergency contact details",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Al Khobar (or Dammam/Dhahran) pickup point and Doha destination." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver meets you", detail: "At your address, heading south toward the Salwa crossing." },
      { label: "Border crossing & arrival", detail: "Salwa handled by your driver, then straight to your Doha address." },
    ],
    mapOrigin: "Al Khobar, Saudi Arabia",
    mapDestination: "Doha, Qatar",
  },

  // ───────────────────────────── UAE ─────────────────────────────
  "riyadh-to-dubai": {
    introHeading: "How the Riyadh to Dubai Road Journey Unfolds",
    introParagraphs: [
      "This is genuinely one of the longer private-transfer drives on our network. The route leaves Riyadh heading east, crossing a substantial stretch of the Saudi interior — via Al Kharj and Haradh — before reaching the Al Batha border late in the journey. Independent route-distance sources put the total at roughly 950 to 1,000 kilometres, with pure driving time of around nine to ten hours before the border crossing is added.",
      "This is a full day on the road by any honest measure, and travellers researching it should plan for that from the outset rather than treating it as an extended regional hop.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Riyadh departure", detail: "Pickup from your address." },
      { label: "Long-distance desert highway", detail: "East across the Saudi interior." },
      { label: "Rest-stop planning", detail: "A genuine full-day drive, paced properly." },
      { label: "Al Batha border", detail: "Saudi exit / Emirati entry." },
      { label: "UAE road journey", detail: "On toward Dubai via the E11." },
      { label: "Dubai arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "Arriving in Dubai After a Long Drive",
    borderParagraphs: [
      "The Al Batha crossing on the Saudi side, opposite Al Ghuwaifat on the Emirati side, is the sole land border between the two countries and operates 24 hours a day. Processing time for passenger vehicles is commonly reported as ranging from around 45 minutes during quiet periods up to several hours at busy times, particularly weekends and holidays — we don't promise a fixed duration, since it genuinely depends on conditions on the day.",
      "Crossing into the UAE requires the correct vehicle documentation as well as passport and visa requirements specific to your nationality — cross-border driving rules are more involved than a standard land-border crossing on foot, and we arrange the appropriate paperwork when you book rather than leaving it to be sorted at the crossing itself.",
    ],
    destinationHeading: "Arriving in Dubai",
    destinationParagraphs: [
      "Once through, your driver continues to your specific Dubai address — a hotel, a business meeting, or a residence — completing a journey that started at your door in Riyadh without a single change of vehicle.",
      "For the return direction, see our Dubai to Riyadh transfer, which has its own distinct planning focus rather than mirroring this page.",
    ],
    vehicleText: "A drive of nine to ten hours needs proper rest-stop planning, not an afterthought — stops for meals, refreshments, and a genuine stretch, at no extra cost given the fixed price.",
    whoSuits: [
      { title: "Families and groups with substantial luggage", description: "Vehicles sized for families and groups with room for bags and child seats on request." },
      { title: "Travellers who value door-to-door continuity", description: "No check-in, no baggage limits, and nothing to arrange at the Dubai end." },
      { title: "Anyone who prefers the road to flying", description: "Seeing the country pass by rather than flying over it, as a considered choice rather than a faster one." },
    ],
    comparisonIntro: "For pure speed, flying wins outright. The road journey offers a genuinely different kind of trip.",
    comparison: [
      { criterion: "Total time, door to door", road: "~9-10 hrs driving, plus the border and rest stops", flight: "A fraction of the time in the air, plus transfers and check-in at both ends" },
      { criterion: "Check-in / baggage", road: "No check-in, no weight limits within the vehicle's capacity", flight: "Airport check-in and baggage allowance apply" },
      { criterion: "Vehicle documentation", road: "Correct cross-border paperwork arranged when you book", flight: "Not applicable" },
      { criterion: "Flexibility", road: "Rest stops and pace adjusted en route", flight: "Fixed flight schedule" },
    ],
    checklist: [
      "Valid passport and any UAE visa/entry permit required for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Exact Riyadh pickup point and Dubai destination",
      "Passenger and luggage count",
      "A generous buffer for the border crossing",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Riyadh pickup point, Dubai destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and long-haul vehicle, with paperwork arranged." },
      { label: "Driver meets you", detail: "At your Riyadh address, with rest stops planned for the full day." },
      { label: "Border crossing & arrival", detail: "Al Batha/Al Ghuwaifat handled by your driver, then on to Dubai." },
    ],
    mapOrigin: "Riyadh, Saudi Arabia",
    mapDestination: "Dubai, United Arab Emirates",
  },

  "dammam-to-dubai": {
    introHeading: "Starting the Journey from Dammam",
    introParagraphs: [
      "Pickup is door-to-door anywhere in Dammam or the wider Eastern Province, and the route heads south-east from the outset toward the UAE. This is still a genuine multi-hour undertaking — shorter than the equivalent journey from Riyadh, but not a route to underestimate as a quick trip.",
      "The Eastern Province sits meaningfully closer to the Al Batha border than the Saudi capital does, which is what makes this route a genuinely more direct approach to Dubai. Independent distance sources put the total road distance at approximately 850 to 870 kilometres, with pure driving time of roughly seven and a half to eight hours before the border stage.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Dammam departure", detail: "Pickup from your Eastern Province address." },
      { label: "Toward the UAE", detail: "South-east across the Eastern Province." },
      { label: "Al Batha border", detail: "Saudi exit / Emirati entry." },
      { label: "UAE road journey", detail: "On toward Dubai." },
      { label: "Dubai arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "Crossing at Al Batha / Al Ghuwaifat",
    borderParagraphs: [
      "Crossing into the UAE at Al Batha/Al Ghuwaifat, the sole land border between the two countries, requires the correct vehicle documentation in addition to a valid passport and any visa relevant to your nationality; we arrange the appropriate paperwork when you book.",
      "Processing time at the crossing itself is genuinely variable for passenger vehicles — commonly reported as around 45 minutes in quiet periods up to several hours during weekends and holidays — and we don't attach a fixed duration to it.",
    ],
    destinationHeading: "Arriving in Dubai",
    destinationParagraphs: [
      "Once through the border, your driver continues to your specific Dubai destination — a hotel, a business meeting, or a residence — completing a single continuous journey from your Dammam door.",
      "For the return leg, see our Dubai to Dammam transfer, and our Dammam taxi service covers local journeys once you're back in the Eastern Province.",
    ],
    vehicleText: "A drive approaching eight hours benefits from real rest-stop planning, which we build in as standard — refreshment breaks and a genuine stretch as needed, at no extra cost given the fixed price.",
    whoSuits: [
      { title: "Eastern Province travellers to the UAE", description: "A more direct approach to Dubai than starting from Riyadh, roughly 90 minutes to two hours shorter." },
      { title: "Families and groups", description: "Vehicles sized for families and groups, with room for luggage and child seats on request." },
      { title: "Anyone crossing with a vehicle-load of luggage", description: "No weight limits within the vehicle's capacity, unlike flying." },
    ],
    checklist: [
      "Valid passport and any UAE visa/entry permit required for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Exact Dammam pickup point and Dubai destination",
      "Passenger and luggage count",
      "A generous buffer for the border crossing",
    ],
    bookingSteps: [
      { label: "Share pickup & destination", detail: "Your Dammam pickup point, Dubai destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price and long-distance vehicle, with paperwork arranged." },
      { label: "Driver meets you", detail: "At your Eastern Province address, with rest stops planned for the drive." },
      { label: "Border crossing & arrival", detail: "Al Batha/Al Ghuwaifat handled by your driver, then on to Dubai." },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Dubai, United Arab Emirates",
  },

  "jeddah-to-dubai": {
    introHeading: "Jeddah to Dubai: An Honest Overview",
    introParagraphs: [
      "The overland journey from Jeddah to Dubai is a genuine cross-country haul of around 1,250 kilometres, crossing Saudi Arabia from the Red Sea coast to the UAE via the Al Batha border. Driving time is in the region of thirteen to fourteen hours, plus border formalities — which realistically means the journey is broken with substantial rest or an overnight stop.",
      "We want to be straightforward: for most travellers, a short flight is the sensible choice, and we would always say so. That said, some travellers genuinely prefer the road, whether for the luggage freedom, to travel as a group in one vehicle, to avoid flying, or to see the country along the way.",
    ],
    timelineHeading: "How the Journey Unfolds",
    timeline: [
      { label: "Jeddah departure", detail: "Pickup from your address." },
      { label: "Cross-country drive", detail: "Red Sea coast to the Saudi interior, typically split over two days." },
      { label: "Overnight stop", detail: "Planned rest given the genuine length of the drive." },
      { label: "Al Batha border", detail: "Saudi exit / Emirati entry." },
      { label: "Dubai arrival", detail: "Door-to-door to your destination." },
    ],
    borderHeading: "The Al Batha Border Crossing",
    borderParagraphs: [
      "The journey crosses into the UAE at the Al Batha border, opposite Al Ghuwaifat, passing Saudi exit and Emirati entry formalities. On a route this long, the crossing is a small part of the overall time, but it still needs to be planned for.",
      "This is where honesty matters most: driving a private vehicle all the way from Saudi Arabia into the UAE requires the correct border and vehicle documentation, and the rules vary by nationality and are updated from time to time. We advise on the current procedures, arrange the appropriate paperwork, and discuss the realistic options with you when you book.",
    ],
    destinationHeading: "Arriving in Dubai After a Two-Day Drive",
    destinationParagraphs: [
      "This route suits travellers with a specific reason to drive: large families or groups with a lot of luggage, those who prefer not to fly, or travellers who want to see the peninsula. It is a considered, premium choice rather than the fastest one.",
      "For the return, our Dubai to Jeddah transfer mirrors this journey. The shorter Eastern Province legs are covered by our Dammam to Dubai transfer, which many find a more practical starting point.",
    ],
    vehicleText: "A drive of this length is not something to rush in a single stint — vehicles are chosen for long-distance comfort, clean and air-conditioned, and matched to your group and luggage.",
    whoSuits: [
      { title: "Large families or groups with heavy luggage", description: "A vehicle-load of belongings that would be impractical or expensive to fly." },
      { title: "Travellers who prefer not to fly", description: "A genuinely long alternative for those who'd rather stay on the road." },
      { title: "Anyone wanting to see the country", description: "A premium, considered choice rather than the fastest way to get there." },
    ],
    comparisonIntro: "For most people flying is the sensible choice given the distance — we say so honestly rather than overselling the drive.",
    comparison: [
      { criterion: "Total time, door to door", road: "~1,250 km, typically split across two days with an overnight stop", flight: "A few hours in the air, plus transfers at both ends" },
      { criterion: "Who it suits", road: "Large groups with heavy luggage, or a genuine preference not to fly", flight: "Most travellers, given the distance" },
      { criterion: "Border experience", road: "One land crossing at Al Batha/Al Ghuwaifat, handled by your driver", flight: "Passport control and customs at each airport" },
      { criterion: "Booking with notice", road: "Recommended, given the length and documentation involved", flight: "Standard airline booking windows" },
    ],
    checklist: [
      "Valid passport and any UAE visa/entry permit required for your nationality",
      "Correct cross-border vehicle documentation, arranged when you book",
      "Plans for an overnight stop partway through the drive",
      "Passenger and luggage count",
      "A clear discussion with us of your specific reason for driving, so we can advise honestly",
    ],
    bookingSteps: [
      { label: "Discuss your plans", detail: "Given the length, we recommend discussing your requirements with us in detail first." },
      { label: "Share pickup & destination", detail: "Your Jeddah pickup point, Dubai destination, and group size." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price agreed once the plan, including any overnight stop, is set." },
      { label: "Two-day journey & arrival", detail: "Rest stops, an overnight stay, the border crossing, then on to Dubai." },
    ],
    mapOrigin: "Jeddah, Saudi Arabia",
    mapDestination: "Dubai, United Arab Emirates",
  },
};
