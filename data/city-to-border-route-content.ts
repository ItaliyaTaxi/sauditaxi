import type { GccCountry } from "@/lib/route-journey";

/**
 * Content for Saudi City -> Border route pages, rendered by
 * components/routes/CityToBorderRouteView.tsx. These are Saudi-side-only
 * drop-off services (the service ends at the border facility; onward
 * travel into the neighbouring country is a separate arrangement) — a
 * genuinely different commercial intent from the Saudi -> GCC pages, which
 * cross the border and continue. Split the same way as the other route
 * content files: border-crossing facts and the company-vs-authority split
 * are shared per border (kept in sync with data/border-guides.ts), while
 * every narrative section is unique per route, adapted from that route's
 * own existing content in data/routes.ts.
 */

export interface CityToBorderCrossingFacts {
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

export const cityToBorderCrossingFacts: Record<GccCountry, CityToBorderCrossingFacts> = {
  qatar: {
    crossingName: "Salwa Border Crossing (Abu Samra)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the vehicle for the Saudi-side drive",
      "Route planning and rest stops for the desert drive",
      "Drop-off at the Saudi-side crossing point",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What border authorities control",
    authorityControls: [
      "Saudi exit formalities and biometric checks",
      "Qatari entry decisions and visa eligibility for your nationality",
      "Vehicle and customs inspection at the crossing",
      "How long processing at Salwa runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport and the appropriate Qatar entry permission for onward travel — requirements vary by nationality.",
    documentsItems: [
      "Valid passport",
      "Qatar visa or entry permit, if required for your nationality",
      "Vehicle documentation and insurance, if driving your own car through",
      "Any documentation for goods you're declaring at customs",
    ],
    documentsDisclaimer:
      "Qatari entry requirements vary by nationality and change over time. Confirm current rules with official Qatari sources before you travel — we advise on the general Saudi-side process, but entry decisions are made by Qatari border officials, not by us.",
    borderPageHref: "/border-transfers/qatar-border",
    borderPageLabel: "Read our Qatar border guide",
  },
  uae: {
    crossingName: "Al Batha (Saudi side) / Al Ghuwaifat (UAE side)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the long-distance vehicle for the Saudi-side drive",
      "Rest-stop planning for the drive",
      "Drop-off at the Saudi-side crossing point",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What border authorities control",
    authorityControls: [
      "Saudi exit formalities",
      "Emirati entry decisions and visa eligibility for your nationality",
      "Vehicle inspection and mandatory UAE vehicle insurance, purchased at the border",
      "How long processing at Al Batha / Al Ghuwaifat runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport, any UAE visa or entry permit for your nationality, and the correct vehicle documentation if continuing by road.",
    documentsItems: [
      "Valid passport",
      "UAE visa or entry permit, if required for your nationality",
      "Correct cross-border vehicle documentation, if continuing by road",
      "Awareness that mandatory third-party UAE vehicle insurance is typically purchased at the border itself",
    ],
    documentsDisclaimer:
      "UAE entry and vehicle requirements vary by nationality and are updated periodically. Confirm current rules with official UAE sources before you travel — we advise on the Saudi-side process, but entry decisions belong to Emirati border officials, not to us.",
    borderPageHref: "/border-transfers/uae-border",
    borderPageLabel: "Read our UAE border guide",
  },
  kuwait: {
    crossingName: "Khafji (Saudi side) / Nuwaiseeb (Kuwait side)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and flight tracking where the origin is an airport",
      "The drive north to the crossing",
      "Drop-off at the Saudi-side crossing point",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What border authorities control",
    authorityControls: [
      "Saudi exit formalities",
      "Kuwaiti entry decisions and visa eligibility for your nationality",
      "Vehicle and customs inspection at the crossing",
      "How long processing at Khafji / Nuwaiseeb runs on the day",
    ],
    documentsIntro:
      "You'll need a valid passport and the appropriate Kuwait entry permission for onward travel — requirements vary by nationality.",
    documentsItems: [
      "Valid passport",
      "Kuwait visa or entry permit, if required for your nationality",
      "Vehicle documentation, if driving your own car through",
      "Awareness that Kuwait's customs rules on restricted goods can be strict",
    ],
    documentsDisclaimer:
      "Kuwaiti entry requirements vary by nationality and change over time. Confirm current rules with official Kuwaiti sources before you travel — we advise on the general Saudi-side process, but entry decisions are made by Kuwaiti border officials, not by us.",
    borderPageHref: "/border-transfers/kuwait-border",
    borderPageLabel: "Read our Kuwait border guide",
  },
  bahrain: {
    crossingName: "King Fahd Causeway (Passport Island)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Pickup coordination and the vehicle for the Saudi-side drive",
      "The causeway toll",
      "Drop-off at the Saudi-side crossing point",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What border authorities control",
    authorityControls: [
      "Saudi exit formalities",
      "Bahraini entry decisions and visa eligibility for your nationality",
      "Vehicle and customs inspection at Passport Island",
      "How long processing runs on the day",
    ],
    documentsIntro: "You'll need a valid passport and the appropriate Bahrain entry permission for onward travel.",
    documentsItems: [
      "Valid passport",
      "Bahrain visa or entry permit, if required for your nationality",
      "Vehicle documentation and insurance, if driving your own car through",
      "Any documentation for goods you're declaring at customs",
    ],
    documentsDisclaimer:
      "Bahraini entry requirements vary by nationality and change over time. Confirm current rules with official Bahraini sources before you travel.",
    borderPageHref: "/border-transfers/bahrain-causeway",
    borderPageLabel: "Read our King Fahd Causeway border guide",
  },
};

export interface CityToBorderStepContent {
  label: string;
  detail?: string;
}

export interface CityToBorderScenarioContent {
  title: string;
  description: string;
}

export interface CityToBorderRouteContent {
  roadJourneyHeading: string;
  roadJourneyParagraphs: string[];
  timeline: CityToBorderStepContent[];
  departureIntro: string;
  departurePoints: string[];
  handoverParagraphs: string[];
  vehicleText: string;
  whoSuits: CityToBorderScenarioContent[];
  comparisonText?: string;
  checklist: string[];
  bookingSteps: CityToBorderStepContent[];
  mapOrigin?: string;
  mapDestination?: string;
}

export const cityToBorderRouteContent: Record<string, CityToBorderRouteContent> = {
  "riyadh-to-qatar-border": {
    roadJourneyHeading: "A Border-Only Transfer, Not a Riyadh-to-Doha Service",
    roadJourneyParagraphs: [
      "It's worth being precise about what this route covers: this is a private transfer from Riyadh to the Salwa crossing itself, not a through-service into Doha. Land border crossings between Saudi Arabia and Qatar involve separate immigration and vehicle checks on each side, so most private transfer operators — including us — bring you to the crossing and stop there, with a Qatar-side vehicle needed for the onward journey.",
      "The drive from Riyadh to Salwa covers about 640 kilometres across open desert and takes roughly six hours in free-flowing traffic. There are no tolls on this route, so the fixed price you agree before travelling covers the full journey to the crossing.",
    ],
    timeline: [
      { label: "Riyadh pickup", detail: "Collected from your hotel, home, or office." },
      { label: "Desert highway", detail: "The long drive south-east toward Salwa." },
      { label: "Rest stop", detail: "Planned to keep the journey comfortable." },
      { label: "Salwa border arrival", detail: "Drop-off at the Saudi-side crossing point." },
    ],
    departureIntro:
      "Given the six-hour drive plus border processing, plan your Riyadh departure with a real buffer if you have an onward connection in Doha.",
    departurePoints: [
      "Six hours of pure driving before the crossing itself",
      "Biometric and vehicle checks add time beyond the driving estimate",
      "Weekends and holidays tend to see busier crossings",
      "Share any Doha meeting time when booking so we can advise on timing",
    ],
    handoverParagraphs: [
      "Salwa is Saudi Arabia's only land border with Qatar, and it operates 24 hours a day, seven days a week, so there's no fixed opening-hours constraint on when you travel. Crossing typically involves biometric checks (fingerprints, an eye scan, and a photo) at the Saudi immigration building, followed by a separate vehicle-documentation and insurance check — travellers driving their own vehicle through should also be aware that cars older than five years and buses older than ten years are not permitted to cross.",
      "From the Saudi-side drop-off, you'll go through Saudi exit immigration and vehicle/customs checks, then continue independently on the Qatari side (Abu Samra) into Qatar. Tell us your onward plans when booking and we can advise on arranging that connection, though the connection itself is yours to arrange.",
    ],
    vehicleText:
      "Given the six-hour desert crossing, we recommend a comfortable SUV or van over a standard sedan, particularly for families or groups with luggage.",
    whoSuits: [
      { title: "Travellers arranging their own Qatar-side connection", description: "You've already sorted onward transport at Abu Samra and just need a reliable Saudi-side ride." },
      { title: "Business travellers meeting a Doha contact at the crossing", description: "A single fixed-price ride to the border, with a buffer built in for the crossing itself." },
      { title: "Families or groups with luggage", description: "An SUV or van keeps everyone and their bags together for the long desert drive." },
    ],
    comparisonText:
      "If you need the complete journey into Qatar rather than just the Saudi-side leg, our Riyadh to Doha transfer crosses the border with you and continues all the way — worth comparing the two if you haven't arranged onward transport yet.",
    checklist: [
      "Valid passport and Qatar entry permission for your nationality",
      "Vehicle documentation and insurance, if driving your own car through",
      "Onward Qatar-side transport arranged or being arranged",
      "Passenger and luggage count",
      "A realistic buffer for the border process, not just the six-hour drive",
    ],
    bookingSteps: [
      { label: "Share pickup & travel date", detail: "Your Riyadh pickup point and preferred departure time." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver meets you", detail: "At your Riyadh address, with a rest stop planned for the drive." },
      { label: "Drop-off at Salwa", detail: "At the Saudi-side crossing point, ready for exit formalities." },
    ],
    mapOrigin: "Riyadh, Saudi Arabia",
    mapDestination: "Salwa Border Crossing, Saudi Arabia",
  },

  "dammam-to-qatar-border": {
    roadJourneyHeading: "A Border-Only Transfer From the Eastern Province",
    roadJourneyParagraphs: [
      "It's worth being precise about what this route covers: this is a private transfer from Dammam to the Salwa crossing itself, not a through-service into Doha. Land border crossings between Saudi Arabia and Qatar involve separate immigration and vehicle checks on each side, so this transfer brings you to the crossing and stops there, with a Qatar-side vehicle needed for the onward journey.",
      "The drive covers about 300 kilometres south via Hofuf and takes roughly three hours in free-flowing traffic. There are no tolls on Saudi highways, so the fixed price you agree before travelling covers the full journey to the crossing.",
    ],
    timeline: [
      { label: "Dammam pickup", detail: "From your hotel, residence, or King Fahd Airport." },
      { label: "South via Hofuf", detail: "The drive toward the Salwa crossing." },
      { label: "Salwa border arrival", detail: "Drop-off at the Saudi-side crossing point." },
    ],
    departureIntro:
      "This is a shorter drive than the Riyadh route, so the border process makes up a larger share of your total journey time — plan accordingly.",
    departurePoints: [
      "Three hours of pure driving before the crossing itself",
      "Biometric and vehicle checks add time beyond the driving estimate",
      "Weekends and holidays tend to see busier crossings",
      "Share any Doha meeting time when booking so we can advise on timing",
    ],
    handoverParagraphs: [
      "Salwa is Saudi Arabia's only land border with Qatar, and it operates 24 hours a day, seven days a week. Crossing typically involves biometric checks (fingerprints, an eye scan, and a photo) at the Saudi immigration building, followed by a separate vehicle-documentation and insurance check.",
      "From the Saudi-side drop-off, you'll go through Saudi exit immigration and vehicle/customs checks, then continue independently on the Qatari side (Abu Samra) into Qatar. Tell us your onward plans when booking and we can advise on arranging that connection.",
    ],
    vehicleText:
      "We collect from any hotel, residence, or office in Dammam, Khobar, or Dhahran, and can also start from King Fahd International Airport. A comfortable sedan suits solo or paired travellers; an SUV or van suits families or groups with more luggage.",
    whoSuits: [
      { title: "Eastern Province travellers arranging their own Qatar connection", description: "The shortest of our Qatar border routes, since Dammam already sits well down the coast toward Salwa." },
      { title: "Travellers connecting from King Fahd Airport", description: "Start from the airport rather than the city if that's where your journey begins." },
      { title: "Families or groups with luggage", description: "An SUV or van keeps everyone and their bags together for the drive." },
    ],
    comparisonText:
      "If you need the complete journey into Qatar rather than just the Saudi-side leg, our Al Khobar to Doha transfer crosses the border and continues on — worth comparing if onward transport isn't yet arranged.",
    checklist: [
      "Valid passport and Qatar entry permission for your nationality",
      "Vehicle documentation and insurance, if driving your own car through",
      "Onward Qatar-side transport arranged or being arranged",
      "Passenger and luggage count",
      "A realistic buffer for the border process, given the shorter drive",
    ],
    bookingSteps: [
      { label: "Share pickup & travel date", detail: "Your Dammam, Khobar, or airport pickup point and preferred time." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver meets you", detail: "At your address, heading south via Hofuf." },
      { label: "Drop-off at Salwa", detail: "At the Saudi-side crossing point, ready for exit formalities." },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Salwa Border Crossing, Saudi Arabia",
  },

  "dammam-to-khafji-border": {
    roadJourneyHeading: "Dammam City to Khafji Border: Route Overview",
    roadJourneyParagraphs: [
      "For travellers starting from within Dammam city rather than the airport, this transfer drives you north along the Gulf coast highway to the Al Khafji border crossing, about 185 kilometres away, in roughly 2 hours 15 minutes. That's slightly longer than the airport-origin version of this route, given the added distance within the city before you reach the highway.",
      "This is a Saudi-side transfer that drops you at the border, where onward Kuwaiti transport is arranged separately. It's a popular short hop for business travellers moving between offices or meetings in the two border regions, and we can also set up a regular booking arrangement for frequent trips.",
    ],
    timeline: [
      { label: "Dammam city pickup", detail: "From your hotel, home, or office anywhere in Dammam." },
      { label: "North on the coastal highway", detail: "Toward the Khafji crossing." },
      { label: "Khafji border arrival", detail: "Drop-off at the Saudi-side crossing point." },
    ],
    departureIntro:
      "This is a short, predictable drive — the border process itself is the one part that varies, so plan a realistic buffer if you have a fixed onward connection.",
    departurePoints: [
      "About 2 hours 15 minutes of predictable driving",
      "Peak commuting hours can add a few minutes to the drive itself",
      "Border processing time varies independently of the drive",
      "Share any onward Kuwaiti-side connection timing when booking",
    ],
    handoverParagraphs: [
      "The Al Khafji / Nuwaiseeb crossing is the main land gateway to Kuwait from the Eastern Province. You'll need a valid passport and any visa required for Kuwait — requirements vary by nationality.",
      "We drop you at the Saudi side of the crossing; onward Kuwaiti transport is arranged separately. This route starts from anywhere in Dammam city itself, useful if you're not flying in but are already staying in Dammam before heading to the border — for an airport-origin version of this same crossing, see our Dammam Airport to Khafji Border transfer.",
    ],
    vehicleText:
      "A fully private transfer for your booking only — no shared rides. Drivers plan sensible rest stops along the coastal highway, particularly useful for families or longer journeys.",
    whoSuits: [
      { title: "Business travellers between Dammam and the border region", description: "A popular short hop for offices or meetings, with regular-booking arrangements available for frequent trips." },
      { title: "Travellers already in Dammam city", description: "Useful if you're not flying in but are already staying in Dammam before heading to Kuwait." },
      { title: "Families or groups on a longer journey", description: "Rest stops planned along the coastal highway as needed." },
    ],
    comparisonText:
      "If you need to travel all the way to Kuwait City rather than stopping at the border, our Dammam to Kuwait City transfer covers the full cross-border route instead.",
    checklist: [
      "Valid passport and any visa required for Kuwait",
      "Exact Dammam city pickup address",
      "Passenger and luggage count",
      "Onward Kuwaiti-side transport arranged or being arranged",
      "A realistic buffer for the border process",
    ],
    bookingSteps: [
      { label: "Share pickup & travel date", detail: "Your Dammam pickup address and preferred time." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver meets you", detail: "At your Dammam address, heading north on the coastal highway." },
      { label: "Drop-off at Khafji", detail: "At the Saudi-side crossing point, ready for exit formalities." },
    ],
    mapOrigin: "Dammam, Saudi Arabia",
    mapDestination: "Khafji Border Crossing, Saudi Arabia",
  },

  "dammam-airport-to-khafji-border": {
    roadJourneyHeading: "Dammam Airport to Khafji Border: Route Overview",
    roadJourneyParagraphs: [
      "The Khafji border is the main crossing between Saudi Arabia's Eastern Province and Kuwait, and for travellers flying into Dammam and continuing north, a private transfer to the border is the simplest first leg. We meet you at King Fahd International Airport, help with your luggage, and drive you directly to the Khafji crossing, around 180 kilometres north, in roughly two hours.",
      "This is a Saudi-side transfer that drops you at the border, where onward Kuwaiti transport is arranged separately. It is a popular arrangement for those meeting a Kuwaiti driver or company car on the other side, or coordinating a crew change or business connection at the crossing.",
    ],
    timeline: [
      { label: "Airport meet-and-greet", detail: "Driver waiting in arrivals, flight tracked." },
      { label: "North through the Eastern Province", detail: "Toward the Khafji crossing." },
      { label: "Khafji border arrival", detail: "Drop-off at the Saudi-side crossing point." },
    ],
    departureIntro:
      "Because we drop you at the border rather than crossing, the driving time is predictable — but the crossing itself isn't, so allow a buffer if you have a fixed connection.",
    departurePoints: [
      "About two hours of predictable driving from the airport",
      "Free waiting time included to cover immigration and baggage claim first",
      "Allow a comfortable buffer if meeting a fixed Kuwaiti-side connection",
      "Share your flight number so pickup adjusts automatically",
    ],
    handoverParagraphs: [
      "We track your inbound flight, so your driver is in position whenever you actually land, early or delayed. You are met in the arrivals hall at King Fahd Airport by a professional holding a name board, who helps with your bags and walks you to the car. Free waiting time is included after landing to cover immigration and baggage.",
      "From King Fahd Airport the route runs north through the Eastern Province toward the Khafji border, a drive of around 180 kilometres that typically takes about two hours in free-flowing conditions. Because we drop you at the border rather than crossing, the timing is predictable and not dependent on the crossing queues — but we recommend allowing a comfortable buffer if you have a fixed connection on the Kuwaiti side.",
    ],
    vehicleText:
      "We match the car to your group, from a sedan for one or two passengers to an SUV or van for groups with luggage or equipment, all air-conditioned for the drive north.",
    whoSuits: [
      { title: "Business travellers and crews connecting into Kuwait", description: "A tracked airport pickup and predictable drive to the border, ready for a company car or crew change." },
      { title: "Travellers meeting a Kuwaiti driver at the crossing", description: "A reliable, fixed-price ride to Khafji rather than arranging airport transport separately." },
      { title: "Groups with equipment or extra luggage", description: "An SUV or van keeps everyone and their gear together for the drive." },
    ],
    comparisonText:
      "If you need to travel all the way to Kuwait City rather than stopping at the border, our Dammam to Kuwait City transfer covers the full cross-border route instead.",
    checklist: [
      "Flight number and arrival date",
      "Valid passport and Kuwait entry permission for your nationality",
      "Onward Kuwaiti-side transport arranged or being arranged",
      "Passenger and luggage count",
      "A buffer for immigration and baggage claim before the drive north begins",
    ],
    bookingSteps: [
      { label: "Share your flight & travel date", detail: "Flight number, arrival date, and any connection timing." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before you travel." },
      { label: "Driver waits in arrivals", detail: "Name board held inside the terminal, flight tracked." },
      { label: "Drop-off at Khafji", detail: "At the Saudi-side crossing point, ready for exit formalities." },
    ],
    mapOrigin: "King Fahd International Airport, Saudi Arabia",
    mapDestination: "Khafji Border Crossing, Saudi Arabia",
  },
};
