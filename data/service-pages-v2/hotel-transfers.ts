import type { HotelTransfersHubContent } from "@/components/services/HotelTransfersHub";

/**
 * Hotel Transfers page — 2026 heading-structure update.
 *
 * Verified facts only: real airports (data/airports.ts), real city hub
 * pages (app/(main)/cities/[city]/page.tsx — Riyadh, Jeddah, Makkah,
 * Madinah, Dammam; Al Khobar uses /taxi-service/khobar instead since it
 * has no dedicated /cities page), real vehicle categories
 * (data/vehicles.ts). No hotel partnerships or hotel-specific claims —
 * links to the site's real city hub pages (which carry each city's actual
 * hotel table) rather than naming or listing hotels here.
 *
 * Scope note: does not compete with the homepage, Airport Transfers,
 * Intercity Transfers, city pages, Umrah, Hajj, or Ziyarat — this page
 * owns "private transportation involving hotels as the pickup or
 * destination" specifically and links out to those pages rather than
 * duplicating them.
 *
 * Previously rendered via ServiceV2View. Now rendered via the
 * page-specific HotelTransfersHub component, mirroring the Airport/
 * Intercity/Umrah/Hajj/Ziyarat restructuring, so this change doesn't
 * touch any other page.
 */
export const hotelTransfersContent: HotelTransfersHubContent = {
  eyebrow: "Hotel Transfers",
  h1: "Private Hotel Transfers in Saudi Arabia",
  dek: "Private transportation between airports, hotels, residences, cities, Makkah, and Madinah — pickup from your hotel lobby, drop-off at the next one, arranged and priced before you need it, with a driver already assigned to your booking rather than found or flagged down on the day. One fixed price, agreed in advance, for every leg of the trip.",
  heroImage: "/images/heroes/home.webp",
  heroAlt: "A hotel entrance and driveway",
  primaryCtaLabel: "Get a Quote",
  secondaryCtaLabel: "See City Hotel Coverage",
  secondaryCtaHref: "/services/hotel-transfers#coverage",

  coreServiceHeading: "Private Hotel Transfers Across Saudi Arabia",
  coreServiceParagraphs: [
    "We provide private transportation with a hotel as the pickup or the destination — airport to hotel on arrival, hotel to airport on departure, hotel to hotel when moving between cities or changing accommodation, and hotel to a specific destination and back. The hotel is a fixed, known point, so there's no separate pickup zone to find.",
    "Coverage includes business travel, family and group transportation, and journeys on to Makkah or Madinah where a hotel stay connects with your wider trip. Each transfer is a single private vehicle, booked and priced before you travel, with your driver assigned in advance.",
  ],

  airportToHotelHeading: "Airport to Hotel Transfers",
  airportToHotelIntro:
    "Meet-and-greet pickup at arrivals, with flight tracking so your driver adjusts to an early or delayed landing, and a direct drive to your hotel entrance. Your driver waits in the arrivals hall with a name sign, ready as soon as you clear customs, so there's no need to call or search the car park after a long flight.",
  airportToHotelCards: [
    {
      title: "Jeddah Airport to Hotel Transfers",
      body: "Meet-and-greet at King Abdulaziz International Airport, with a direct drive to your hotel in Jeddah, Makkah, or Madinah, timed around your flight.",
      href: "/airport-transfer/jeddah-airport",
      linkLabel: "Jeddah Airport transfers",
    },
    {
      title: "Riyadh Airport to Hotel Transfers",
      body: "Meet-and-greet at King Khalid International Airport, with direct drop-off at hotels across the capital's districts and business areas.",
      href: "/airport-transfer/riyadh-airport",
      linkLabel: "Riyadh Airport transfers",
    },
    {
      title: "Madinah Airport to Hotel Transfers",
      body: "Meet-and-greet at Prince Mohammad bin Abdulaziz International Airport, with a short direct transfer to hotels near the Prophet's Mosque.",
      href: "/airport-transfer/madinah-airport",
      linkLabel: "Madinah Airport transfers",
    },
    {
      title: "Dammam Airport to Hotel Transfers",
      body: "Meet-and-greet at King Fahd International Airport, with transfers to hotels across the Dammam, Khobar, and Dhahran metro area.",
      href: "/airport-transfer/dammam-airport",
      linkLabel: "Dammam Airport transfers",
    },
  ],

  hotelToAirportHeading: "Hotel to Airport Transfers",
  hotelToAirportIntro:
    "The reverse leg works the same way as an arrival pickup, just timed around your departure rather than a landing. Your driver collects you from the hotel entrance at the agreed time and drives directly to the terminal for your flight, with enough margin built in for check-in and security. Pickup time is worked backwards from your flight's departure, so you're neither rushed nor left waiting at the airport terminal for hours beforehand. Share these details so the pickup is planned accurately and on time:",
  hotelToAirportItems: [
    "Your hotel name and exact address",
    "Departure flight number and airline",
    "Pickup date and time",
    "Passenger count",
    "Luggage amount",
    "Which airport terminal, if you know it",
    "A contact number reachable on the morning of departure",
  ],

  hotelCityHeading: "Hotel-to-Hotel and Hotel-to-City Transfers",
  hotelCityIntro:
    "Private transportation between hotels or on to a city, destination, or another Saudi city entirely — the same booking model in every case. A single fixed price covers the whole leg, agreed before you travel, whether it's a short hop across town or a longer drive to another city.",
  hotelCityCards: [
    {
      title: "Hotel-to-Hotel Transfers",
      body: "Useful when relocating within the same city partway through a stay, or when a multi-stop itinerary moves between hotels in different cities.",
    },
    {
      title: "Hotel to City Transfers",
      body: "A private trip from your hotel to a meeting, an attraction, or any address in the city — see your city's taxi service page for local coverage.",
      href: "/city-transfers",
      linkLabel: "City transfer service",
    },
    {
      title: "Hotel to Makkah Transfers",
      body: "A direct drive from your hotel on to Makkah, whether starting the leg from Jeddah, Madinah, or elsewhere in the Kingdom.",
      href: "/routes/jeddah-to-makkah",
      linkLabel: "Jeddah to Makkah route",
    },
    {
      title: "Hotel to Madinah Transfers",
      body: "A direct drive from your hotel on to Madinah, commonly arranged alongside an Umrah itinerary that visits both holy cities.",
      href: "/routes/jeddah-to-madinah",
      linkLabel: "Jeddah to Madinah route",
    },
  ],

  makkahMadinahHeading: "Hotel Transfers in Makkah and Madinah",
  makkahMadinahIntro:
    "Private transportation for travellers staying at hotels in the two holy cities, commonly connected to an Umrah, Hajj, or Ziyarat itinerary rather than booked as a standalone trip. Hotels in both cities sit within a short drive of the Haram, so most transfers are quick, direct journeys rather than long cross-city drives.",
  makkahMadinahCards: [
    {
      title: "Makkah Hotel Transfers",
      body: "Pickup and drop-off at hotels around the Haram and Clock Tower district, whether you're arriving from the airport, another city, or moving on to Ziyarat visits during your stay. Drivers are familiar with the area's pedestrian zones and know where vehicles can and can't stop close to the Haram.",
      href: "/taxi-service/makkah",
      linkLabel: "Makkah taxi service",
    },
    {
      title: "Madinah Hotel Transfers",
      body: "Pickup and drop-off at hotels near the Prophet's Mosque, connecting with airport arrivals, Makkah-Madinah transfers, or Ziyarat visits to Quba Mosque and other sites around the city.",
      href: "/taxi-service/madinah",
      linkLabel: "Madinah taxi service",
    },
  ],

  businessFamilyHeading: "Hotel Transfers for Business Travellers and Families",
  businessFamilyIntro:
    "Practical requirements differ by traveller — tell us yours when you book so the right vehicle, and the right amount of buffer time, is already arranged before you arrive.",
  businessFamilyCards: [
    {
      title: "Business Hotel Transfers",
      body: "A firm pickup time matters most — hotel to a meeting and back, planned with enough margin for normal traffic rather than cut close. Repeat bookings for the same trip are easy to arrange for a multi-day visit.",
    },
    {
      title: "Family and Group Hotel Transportation",
      body: "Vehicle size matched to passengers and luggage, not assumed — tell us your numbers so an SUV, van, or minibus is booked when the group needs one, with everyone travelling together in a single vehicle.",
    },
  ],

  vehiclesHeading: "Choose the Right Vehicle for Your Hotel Transfer",
  vehiclesIntro: "Vehicle choice comes down to passengers and luggage more than personal preference — tell us your numbers honestly when you book.",
  vehicleCards: [
    {
      title: "Private Sedan Transfers",
      body: "Economy and Comfort sedans — Hyundai Accent, Toyota Yaris, Toyota Camry, or Hyundai Sonata — for one to three passengers with two to three bags.",
    },
    {
      title: "Premium Vehicles",
      body: "Mercedes E-Class or Lexus ES for business travel and VIP arrivals, seating up to three passengers with three bags in a premium cabin.",
    },
    {
      title: "Family Vehicles",
      body: "A Toyota Land Cruiser or GMC Yukon SUV for up to five passengers and four bags, with room for a family and extra luggage.",
    },
    {
      title: "Minivan and Group Transfers",
      body: "A Toyota Hiace or Hyundai Staria van for up to nine passengers with eight bags, or a Toyota Coaster minibus for larger groups.",
    },
  ],

  bookingHeading: "How to Book a Private Hotel Transfer",
  bookingIntro:
    "A simple four-step process from first message to confirmed pickup, usually completed over WhatsApp in a few minutes without needing to call.",
  bookingSteps: [
    { title: "1. Share Your Hotel Details", detail: "Your hotel name and exact address, for pickup, drop-off, or both, plus the city if it isn't obvious." },
    { title: "2. Provide Your Journey Information", detail: "Date, time, destination, and flight details where applicable, along with passenger and luggage count." },
    { title: "3. Receive Your Quote", detail: "A fixed, all-in price and a vehicle recommendation, agreed before you travel, with no hidden charges added later." },
    { title: "4. Confirm Your Transfer", detail: "Approve the quote and a driver is scheduled for your pickup time, no prepayment required to hold the booking." },
  ],

  bookingInfoHeading: "What Information Do I Need to Provide?",
  bookingInfoIntro:
    "Share as much of this as you can when you book — it's the fastest way to an accurate quote and a smooth pickup. Booking a day or two ahead is enough for most transfers, though we can usually accommodate same-day requests too. None of this locks you in before you're ready — a quote costs nothing, and you only confirm once the price and vehicle suit your trip.",
  bookingInfoItems: [
    "Hotel name and exact address",
    "Pickup location and destination",
    "Travel date and pickup time",
    "Flight number, where applicable",
    "Number of passengers",
    "Luggage amount",
    "Vehicle preference, if you have one",
    "A contact number reachable at pickup time",
  ],

  coverageHeading: "Hotel Transfer Coverage Across Saudi Arabia",
  coverageIntro:
    "Hotel transfers are available in the Kingdom's major cities, each with its own hotel and local coverage information. Visit a city's page below for its specific taxi and transfer details, or get in touch if your hotel is in a city not listed here.",
  coverageCards: [
    {
      title: "Riyadh Hotel Transfers",
      body: "Coverage across the capital's hotel districts, from King Fahd Road to the Diplomatic Quarter.",
      href: "/cities/riyadh",
      linkLabel: "Riyadh hotel coverage",
    },
    {
      title: "Jeddah Hotel Transfers",
      body: "Coverage including Corniche hotels and properties near the Hajj Terminal and Umrah routes.",
      href: "/cities/jeddah",
      linkLabel: "Jeddah hotel coverage",
    },
    {
      title: "Makkah Hotel Transfers",
      body: "Coverage around the Haram and Clock Tower district for pilgrims and Ziyarat visitors.",
      href: "/cities/makkah",
      linkLabel: "Makkah hotel coverage",
    },
    {
      title: "Madinah Hotel Transfers",
      body: "Coverage around the Prophet's Mosque for pilgrims arriving by air or road.",
      href: "/cities/madinah",
      linkLabel: "Madinah hotel coverage",
    },
    {
      title: "Dammam Hotel Transfers",
      body: "Coverage across the Dammam metro area, popular with Eastern Province business travellers.",
      href: "/cities/dammam",
      linkLabel: "Dammam hotel coverage",
    },
    {
      title: "Al Khobar Hotel Transfers",
      body: "Coverage for the Eastern Province's coastal city, minutes from the Bahrain Causeway.",
      href: "/taxi-service/khobar",
      linkLabel: "Al Khobar taxi service",
    },
  ],

  faqHeading: "Frequently Asked Questions About Hotel Transfers",
  faqs: [
    {
      question: "How do I book a private hotel transfer in Saudi Arabia?",
      answer:
        "Share your hotel name, pickup or destination details, date, time, and passenger count through WhatsApp or our quote form. We reply with a fixed price — no prepayment required.",
    },
    {
      question: "Can I book a transfer from an airport to my hotel?",
      answer:
        "Yes. We offer meet-and-greet airport pickup at major Saudi airports with a direct drive to your hotel, timed around your flight.",
    },
    {
      question: "Can I book a transfer from my hotel to the airport?",
      answer:
        "Yes. Share your hotel details, flight information, and preferred pickup time, and we'll confirm a driver for your departure.",
    },
    {
      question: "Do you provide hotel-to-hotel transfers?",
      answer:
        "Yes — whether relocating within the same city or moving between hotels in different cities as part of a longer trip.",
    },
    {
      question: "Can I book a hotel transfer to Makkah or Madinah?",
      answer:
        "Yes. We provide direct transfers from your hotel on to Makkah or Madinah, commonly arranged alongside an Umrah itinerary.",
    },
    {
      question: "Can families and groups book private hotel transportation?",
      answer:
        "Yes. Tell us your group size and luggage when booking and we'll match the vehicle — an SUV, van, or minibus for a family or group travelling together.",
    },
    {
      question: "What information do I need to provide when booking?",
      answer:
        "Your hotel name and address, pickup and destination details, date, time, and passenger and luggage count — flight number too, if the trip connects to an airport.",
    },
    {
      question: "Can I choose a vehicle based on my passenger and luggage requirements?",
      answer:
        "Yes. Tell us your numbers and we'll recommend a sedan, SUV, van, or minibus to match, rather than assuming a default vehicle size.",
    },
  ],

  finalCtaHeading: "Book Your Private Hotel Transfer",
  finalCtaText:
    "Share your hotel, pickup location, destination, date, time, passenger and luggage count, and flight information where applicable — we'll confirm a driver and a fixed price before you travel, with no prepayment needed to hold your booking and no obligation until you approve the quote.",
};
