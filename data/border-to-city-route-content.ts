import type { GccCountry } from "@/lib/route-journey";

/**
 * Content for Border -> City / Border -> Airport route pages, rendered by
 * components/routes/BorderToCityRouteView.tsx. The journey starts at the
 * Saudi-side border facility — the reverse of the City -> Border pages
 * (data/city-to-border-route-content.ts) — so the shared per-border facts
 * here are phrased around driver meeting and pickup coordination rather
 * than drop-off, kept in sync with data/border-guides.ts. Every narrative
 * section is unique per route, adapted from that route's own existing
 * content in data/routes.ts / data/dammam-routes.ts.
 */

export interface BorderToCityCrossingFacts {
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

export const borderToCityCrossingFacts: Record<GccCountry, BorderToCityCrossingFacts> = {
  qatar: {
    crossingName: "Salwa Border Crossing (Abu Samra)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Driver and vehicle waiting on the Saudi side",
      "Coordinating pickup around your actual clearance time",
      "The Saudi-side road journey to your destination",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What border authorities control",
    authorityControls: [
      "Qatari exit formalities before you reach the Saudi side",
      "Saudi entry decisions and immigration processing",
      "Customs and vehicle inspection at the crossing",
      "How long processing at Salwa runs on the day",
    ],
    documentsIntro: "Have your passport and any documents used for Saudi entry ready and accessible as you clear the crossing.",
    documentsItems: [
      "Valid passport, already used for Saudi entry",
      "Any Saudi entry permit or visa documentation from the crossing",
      "Your booking confirmation or driver contact details, if supplied",
      "Onward destination or flight details to share with your driver",
    ],
    documentsDisclaimer:
      "Saudi entry requirements vary by nationality and change over time — these should already have been confirmed before you crossed. We advise on pickup coordination, but entry decisions were made by Saudi and Qatari border officials, not by us.",
    borderPageHref: "/border-transfers/qatar-border",
    borderPageLabel: "Read our Qatar border guide",
  },
  uae: {
    crossingName: "Al Batha (Saudi side) / Al Ghuwaifat (UAE side)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Driver and long-distance vehicle waiting on the Saudi side",
      "Coordinating pickup around your actual clearance time, by WhatsApp",
      "The Saudi-side road journey to your destination",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What border authorities control",
    authorityControls: [
      "Emirati exit formalities before you reach the Saudi side",
      "Saudi entry decisions and immigration processing",
      "Vehicle inspection at the crossing",
      "How long processing at Al Batha / Al Ghuwaifat runs on the day",
    ],
    documentsIntro: "Have your passport and any Saudi entry documentation ready and accessible as you clear the crossing.",
    documentsItems: [
      "Valid passport, already used for Saudi entry",
      "Any Saudi entry permit or visa documentation from the crossing",
      "Your booking confirmation or driver contact details, if supplied",
      "Onward destination or flight details to share with your driver",
    ],
    documentsDisclaimer:
      "Saudi entry requirements vary by nationality and are updated periodically — these should already have been confirmed before you crossed. We coordinate pickup, but entry decisions belong to Saudi and Emirati border officials, not to us.",
    borderPageHref: "/border-transfers/uae-border",
    borderPageLabel: "Read our UAE border guide",
  },
  kuwait: {
    crossingName: "Khafji (Saudi side) / Nuwaiseeb (Kuwait side)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Driver and vehicle waiting on the Saudi side",
      "Coordinating pickup around your actual clearance time",
      "The Saudi-side road journey to your destination",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What border authorities control",
    authorityControls: [
      "Kuwaiti exit formalities before you reach the Saudi side",
      "Saudi entry decisions and immigration processing",
      "Customs and vehicle inspection at the crossing",
      "How long processing at Khafji / Nuwaiseeb runs on the day",
    ],
    documentsIntro: "Have your passport and any Saudi entry documentation ready and accessible as you clear the crossing.",
    documentsItems: [
      "Valid passport, already used for Saudi entry",
      "Any Saudi entry permit or visa documentation from the crossing",
      "Your booking confirmation or driver contact details, if supplied",
      "Onward destination or flight details to share with your driver",
    ],
    documentsDisclaimer:
      "Saudi entry requirements vary by nationality and change over time — these should already have been confirmed before you crossed. We coordinate pickup, but entry decisions belong to Saudi and Kuwaiti border officials, not to us.",
    borderPageHref: "/border-transfers/kuwait-border",
    borderPageLabel: "Read our Kuwait border guide",
  },
  bahrain: {
    crossingName: "King Fahd Causeway (Passport Island)",
    companyControlsLabel: "What we handle",
    companyControls: [
      "Driver and vehicle waiting on the Saudi side",
      "Coordinating pickup around your actual clearance time",
      "The Saudi-side road journey to your destination",
      "A fixed price agreed before you travel",
    ],
    authorityControlsLabel: "What border authorities control",
    authorityControls: [
      "Bahraini exit formalities before you reach the Saudi side",
      "Saudi entry decisions and immigration processing",
      "Customs and vehicle inspection at Passport Island",
      "How long processing runs on the day",
    ],
    documentsIntro: "Have your passport and any Saudi entry documentation ready and accessible as you clear the crossing.",
    documentsItems: [
      "Valid passport, already used for Saudi entry",
      "Any Saudi entry permit or visa documentation from the crossing",
      "Your booking confirmation or driver contact details, if supplied",
      "Onward destination or flight details to share with your driver",
    ],
    documentsDisclaimer:
      "Saudi entry requirements vary by nationality and change over time. We coordinate pickup, but entry decisions belong to Saudi and Bahraini border officials, not to us.",
    borderPageHref: "/border-transfers/bahrain-causeway",
    borderPageLabel: "Read our King Fahd Causeway border guide",
  },
};

export interface BorderToCityStepContent {
  label: string;
  detail?: string;
}

export interface BorderToCityScenarioContent {
  title: string;
  description: string;
}

export interface BorderToCityRouteContent {
  afterBorderIntro?: string;
  afterBorderSteps: BorderToCityStepContent[];
  meetingParagraphs: string[];
  roadJourneyHeading: string;
  roadJourneyParagraphs: string[];
  destinationHeading: string;
  destinationParagraphs: string[];
  planningIntro: string;
  planningPoints: string[];
  vehicleText: string;
  whoSuits: BorderToCityScenarioContent[];
  checklist: string[];
  bookingSteps: BorderToCityStepContent[];
  mapOrigin?: string;
  mapDestination?: string;
}

export const borderToCityRouteContent: Record<string, BorderToCityRouteContent> = {
  "khafji-border-to-dammam-airport": {
    afterBorderIntro: "For travellers who have crossed from Kuwait and need to reach a flight, here's how the Saudi-side leg unfolds.",
    afterBorderSteps: [
      { label: "Border clearance", detail: "You complete Saudi entry formalities at Khafji." },
      { label: "Driver meeting", detail: "Your driver meets you at an agreed point on the Saudi side." },
      { label: "Vehicle boarding", detail: "Luggage loaded, drive begins south." },
      { label: "Saudi road journey", detail: "South through the Eastern Province, ~180 km." },
      { label: "Dammam Airport arrival", detail: "Drop-off at the correct terminal for your airline." },
    ],
    meetingParagraphs: [
      "Your driver meets you at an agreed point once you have cleared the Khafji crossing into Saudi Arabia, then drives you directly to King Fahd International Airport. Because clearance timing can vary, we stay flexible and coordinate around when you are actually through rather than a fixed slot.",
      "Share your expected crossing time and your flight details when you book, and we plan the pickup and drive with your departure in mind.",
    ],
    roadJourneyHeading: "The Drive South to the Airport",
    roadJourneyParagraphs: [
      "From the Khafji border the route runs south through the Eastern Province to the airport, a comfortable drive in a clean, air-conditioned vehicle sized to your group and luggage, taking roughly two hours in free-flowing conditions.",
      "Our drivers know the highway and take the reliable route to the correct terminal for your airline. If you're unsure which terminal your airline uses, share your flight details when booking and we confirm the right drop-off point in advance.",
    ],
    destinationHeading: "Arriving at King Fahd International Airport",
    destinationParagraphs: [
      "Because a flight departure is the fixed point here, we plan the pickup with a sensible margin for the drive south and airport check-in. As a guide, we aim to reach the airport around three hours before an international departure and two hours before a domestic one, then add the drive time.",
      "Because the fare is fixed, a longer wait at the border or on the road never changes what you pay.",
    ],
    planningIntro: "Work backward from your flight departure time, with border-clearance uncertainty factored in as a buffer, not a fixed figure.",
    planningPoints: [
      "Share your flight departure time so we can work back from it",
      "Border-clearance timing varies — we coordinate around when you actually clear",
      "About two hours of driving once you're on the road",
      "A margin for airport check-in is added on top of the drive",
    ],
    vehicleText: "We match the car to your party, from a sedan to an SUV or van for groups with equipment.",
    whoSuits: [
      { title: "Business travellers and crews connecting from Kuwait", description: "A tracked, flexible pickup at the border rather than arranging transport there yourself." },
      { title: "Travellers with a specific flight to catch", description: "Pickup timed backward from your departure, with a buffer for the drive and check-in." },
      { title: "Groups with equipment or extra luggage", description: "A vehicle sized to your party keeps everyone and their bags together." },
    ],
    checklist: [
      "Passport and Saudi entry documentation accessible as you clear the crossing",
      "Flight number and departure time",
      "Booking confirmation or driver contact details, if supplied",
      "Passenger and luggage count",
      "A realistic buffer, since border-clearance timing varies",
    ],
    bookingSteps: [
      { label: "Share your crossing & flight details", detail: "Expected border-clearance time and your flight departure." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before your travel day." },
      { label: "Driver meets you at the border", detail: "At an agreed point once you've cleared Khafji." },
      { label: "Drop-off at the airport", detail: "At the correct terminal for your airline." },
    ],
    mapOrigin: "Khafji Border Crossing, Saudi Arabia",
    mapDestination: "King Fahd International Airport, Saudi Arabia",
  },

  "al-batha-border-to-dammam": {
    afterBorderIntro: "For travellers who have just crossed from the UAE at Al Batha, here's how the Saudi-side leg unfolds.",
    afterBorderSteps: [
      { label: "Border clearance", detail: "You complete Saudi entry formalities at Al Batha." },
      { label: "Driver meeting", detail: "Your driver meets you at an agreed point on the Saudi side." },
      { label: "Vehicle boarding", detail: "Luggage loaded, drive begins north." },
      { label: "Saudi road journey", detail: "North into the Eastern Province, ~400 km." },
      { label: "Dammam arrival", detail: "Drop-off in the city, or onward to King Fahd Airport." },
    ],
    meetingParagraphs: [
      "Your driver meets you at an agreed point once you have cleared the Al Batha crossing into Saudi Arabia, then drives you directly to Dammam. Because clearance timing can vary, we stay flexible and coordinate the pickup around when you actually clear the crossing.",
      "Share your expected crossing time when you book, and update us if it changes — the vehicle is confirmed and waiting rather than arranged last minute.",
    ],
    roadJourneyHeading: "The Drive North Into the Eastern Province",
    roadJourneyParagraphs: [
      "From the Al Batha border the route runs north into the Eastern Province to Dammam, a comfortable drive in a clean, air-conditioned vehicle sized to your group and luggage, with a rest stop where useful, taking roughly four hours in free-flowing conditions.",
      "If your journey ends at King Fahd International Airport for an onward flight instead of the city, we plan the trip around your departure, allowing for the drive and check-in.",
    ],
    destinationHeading: "Arriving in Dammam or at King Fahd Airport",
    destinationParagraphs: [
      "The service suits business travellers and anyone connecting from the UAE to Dammam, Al Khobar, or a flight out of King Fahd Airport. We drop you at your specific address, or at the correct terminal for your airline if you're continuing by air — tell us which when booking.",
      "Because the fare is fixed, a longer wait at the border or on the road never changes what you pay.",
    ],
    planningIntro: "Coordination matters more than exact timing on this leg — share your crossing estimate and we handle the rest.",
    planningPoints: [
      "Share your expected crossing time or UAE departure time when booking",
      "Keep your phone reachable for a pickup update as you approach",
      "Tell us if you're heading to a flight from King Fahd Airport so we can plan the buffer",
      "Let us know your luggage volume in advance",
    ],
    vehicleText: "We match the car to your party, from a sedan to an SUV or van for groups with equipment.",
    whoSuits: [
      { title: "Business travellers connecting from the UAE", description: "A pre-arranged, flexible pickup rather than negotiating transport at the border itself." },
      { title: "Travellers heading to King Fahd Airport", description: "Drop-off at the correct terminal, timed around your departure." },
      { title: "Groups with luggage", description: "A vehicle sized to your party for the four-hour drive north." },
    ],
    checklist: [
      "Passport and Saudi entry documentation accessible as you clear the crossing",
      "Exact Dammam destination or flight details",
      "Booking confirmation or driver contact details, if supplied",
      "Passenger and luggage count",
      "A realistic buffer, since border-clearance timing varies",
    ],
    bookingSteps: [
      { label: "Share your crossing time & destination", detail: "Expected clearance time and your Dammam destination or flight details." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before your travel day." },
      { label: "Driver meets you at the border", detail: "At an agreed point once you've cleared Al Batha." },
      { label: "Arrival in Dammam or at the airport", detail: "Drop-off at your address or the correct terminal." },
    ],
    mapOrigin: "Al Batha Border Crossing, Saudi Arabia",
    mapDestination: "Dammam, Saudi Arabia",
  },

  "khafji-border-to-dammam": {
    afterBorderIntro: "For travellers who have just crossed from Kuwait at Khafji and are heading into Dammam city, here's how the Saudi-side leg unfolds.",
    afterBorderSteps: [
      { label: "Border clearance", detail: "You complete Saudi entry formalities at Khafji." },
      { label: "Driver meeting", detail: "Your driver waits at an agreed point on the Saudi side." },
      { label: "Vehicle boarding", detail: "Luggage loaded, drive begins south." },
      { label: "Saudi road journey", detail: "South along the Gulf coast highway, ~185 km." },
      { label: "Dammam arrival", detail: "Drop-off anywhere in the city." },
    ],
    meetingParagraphs: [
      "Your driver waits at an agreed meeting point on the Saudi side of the Al Khafji crossing after you clear immigration and customs, then drives you directly into Dammam city.",
      "This is a fully private transfer for your booking only — no shared rides and no stops for other passengers. Share your expected crossing time when booking so a vehicle is confirmed and waiting.",
    ],
    roadJourneyHeading: "The Drive South Into Dammam",
    roadJourneyParagraphs: [
      "After crossing from Kuwait at Al Khafji, the route runs south along the Gulf coast highway directly into Dammam city, about 185 kilometres away, in roughly two hours fifteen minutes, with a fixed price agreed before you travel.",
      "Comfortable vehicles with rest stops are available for the drive, and we can also route your transfer onward to Dammam Airport or further to Riyadh on request.",
    ],
    destinationHeading: "Arriving in Dammam City",
    destinationParagraphs: [
      "This short hop is popular with business travellers moving between offices or meetings on either side of the border, and we can also set up a regular booking arrangement for frequent trips.",
      "Drop-off is anywhere in Dammam city — tell us your specific address when booking, and our Dammam taxi service covers any local legs once you've arrived.",
    ],
    planningIntro: "This is a short, fairly predictable drive once you're through the border — the crossing itself is the main variable to plan around.",
    planningPoints: [
      "About two hours fifteen minutes of driving once you're on the road",
      "Border-clearance timing varies — share your estimate when booking",
      "Same-day booking is usually available given the short distance",
      "Mention if you're continuing onward to Dammam Airport or Riyadh",
    ],
    vehicleText: "A standard sedan suits most solo and business travellers on this short hop; for families or groups with extra luggage, a larger SUV or van is available.",
    whoSuits: [
      { title: "Business travellers between offices or meetings", description: "A regular booking arrangement is available for frequent trips across the border." },
      { title: "Families or groups arriving from Kuwait", description: "Comfortable vehicles with rest stops for the drive south." },
      { title: "Travellers continuing onward", description: "We can route your transfer to Dammam Airport or further to Riyadh on request." },
    ],
    checklist: [
      "Passport and Saudi entry documentation accessible as you clear the crossing",
      "Exact Dammam destination address",
      "Passenger and luggage count",
      "Mention any onward connection to the airport or Riyadh",
      "A realistic buffer, since border-clearance timing varies",
    ],
    bookingSteps: [
      { label: "Share your crossing time & destination", detail: "Expected clearance time and your Dammam address." },
      { label: "Confirm vehicle & price", detail: "A fixed, all-in price confirmed before your travel day." },
      { label: "Driver meets you at the border", detail: "At an agreed point once you've cleared Khafji." },
      { label: "Arrival in Dammam", detail: "Drop-off at your specific address." },
    ],
    mapOrigin: "Khafji Border Crossing, Saudi Arabia",
    mapDestination: "Dammam, Saudi Arabia",
  },
};
