export interface Faq {
  question: string;
  answer: string;
}

/**
 * Homepage FAQ section (H2 #12 of the 2026 heading-structure update) —
 * matches the primary services introduced on the page itself: booking,
 * airport transfers, Umrah, Makkah-Madinah, city-to-city, cross-border, and
 * day trips. Every answer restates a fact already established elsewhere on
 * the site (see generalFaqs, aboutFaqs, and the relevant service pages).
 */
export const homeFaqs: Faq[] = [
  {
    question: "How do I book a private transfer in Saudi Arabia?",
    answer:
      "Share your pickup, drop-off, date, time, and passenger count through WhatsApp or our quote form. We reply with a fixed, all-in price and vehicle recommendation — no app, no account, and no prepayment required.",
  },
  {
    question: "Can I book an airport transfer in Saudi Arabia?",
    answer:
      "Yes. We offer meet-and-greet airport pickup at major Saudi airports including Riyadh, Jeddah, Madinah, and Dammam, with flight tracking so an early or delayed landing never costs you the ride.",
  },
  {
    question: "Do you provide transfers between Makkah and Madinah?",
    answer:
      "Yes. We provide private Makkah to Madinah transfers along the Hijra highway, with rest-stop flexibility for families and elders, and a vehicle sized to your group and luggage.",
  },
  {
    question: "Do you provide Umrah transfers?",
    answer:
      "Yes. We specialise in Umrah transportation — Jeddah and Madinah airport pickups, hotel transfers near the Haram and the Prophet's Mosque, Makkah to Madinah rides, and miqat stops for ihram — arranged calmly and in advance.",
  },
  {
    question: "Do you provide city-to-city transfers across Saudi Arabia?",
    answer:
      "Yes. Private, direct journeys between major Saudi cities — including Riyadh, Jeddah, Makkah, Madinah, and Dammam — in a single vehicle for the whole trip, with no shared stops along the way.",
  },
  {
    question: "Do you offer cross-border transfers from Saudi Arabia to GCC countries?",
    answer:
      "Yes, for selected routes — including transfers to and from Bahrain, Kuwait, Qatar, and the UAE. These are planned as long-distance drives around the crossing itself, and requirements can vary, so check current border and visa rules before you travel.",
  },
  {
    question: "Can I book a private car for a day trip in Saudi Arabia?",
    answer:
      "Yes. Popular day trips include Riyadh to Diriyah and Jeddah to Taif, with your driver waiting to bring you back the same day — just share your itinerary when you request a quote.",
  },
];

/** General FAQs used on other pages and as a fallback elsewhere. */
export const generalFaqs: Faq[] = [
  {
    question: "How can I book a taxi in Saudi Arabia?",
    answer:
      "You can book in minutes through WhatsApp or our quote form. Send your pickup, drop-off, date, time, and passenger count, and we reply with a fixed quote — no app or account needed.",
  },
  {
    question: "Do you provide airport pickup?",
    answer:
      "Yes. We offer meet-and-greet airport pickup at every major Saudi airport including Riyadh, Jeddah, Madinah, and Dammam, with flight tracking so delays never cost you the ride.",
  },
  {
    question: "Can I book a taxi from Jeddah airport to Makkah?",
    answer:
      "Yes. Jeddah airport to Makkah is our most popular transfer. We meet you at the Hajj Terminal or Terminal 1 and drive directly to your Makkah hotel near the Haram.",
  },
  {
    question: "Do you provide Makkah to Madinah private transfers?",
    answer:
      "Yes. We provide comfortable private Makkah to Madinah transfers along the Hijra highway, with rest-stop flexibility for families and elders.",
  },
  {
    question: "Can I book a border transfer from Saudi Arabia to Bahrain?",
    answer:
      "Yes. We provide private transfers over the King Fahd Causeway from Khobar and Dammam directly to Manama and anywhere in Bahrain.",
  },
  {
    question: "Are vehicles available for families and groups?",
    answer:
      "Yes. We offer economy and comfort cars, business sedans, SUVs, vans, and minibuses — so families and large groups can travel together with their luggage.",
  },
  {
    question: "Can I request a quote on WhatsApp?",
    answer:
      "Absolutely. WhatsApp is the fastest way to get a quote. Tap any WhatsApp button on the site and your trip details are prefilled for you.",
  },
  {
    question: "How do airport transfers work?",
    answer:
      "Share your flight number and pickup time when you book. We track the flight, your driver waits in the arrivals hall with a name board, helps with your luggage, and drives you directly to your hotel or destination — all for the price agreed in advance.",
  },
  {
    question: "Can I pre-book my transfer in advance?",
    answer:
      "Yes, and we recommend it. Pre-booking guarantees a vehicle and a fixed price, and is especially important during Umrah, Hajj, and Ramadan when demand is high. You can book days or weeks ahead with no prepayment required.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Nothing — we monitor your flight in real time and adjust the pickup automatically. Free wait time is included for airport pickups, so a delayed or early arrival never costs you the ride or an extra fee.",
  },
  {
    question: "Are child seats available?",
    answer:
      "Yes. Child and booster seats can be added to any booking at no surprise cost — just tell us the number and ages of children travelling when you request your quote and we will arrange the right vehicle.",
  },
  {
    question: "Do your drivers speak English?",
    answer:
      "Yes. Our drivers speak English and Arabic, and many are experienced with international travellers and pilgrims. If you need a driver with another language, let us know and we will do our best to arrange it.",
  },
  {
    question: "How do I pay for my transfer?",
    answer:
      "Payment is simple and flexible — most customers pay the driver directly in cash (SAR) or by card on the day. The price is fixed when you book, with no meter, no surge pricing, and no hidden fees.",
  },
  {
    question: "Is Umrah and Hajj transportation available?",
    answer:
      "Yes. We specialise in pilgrim transport: Jeddah and Madinah airport pickups, hotel transfers near the Haram, Makkah to Madinah rides, miqat stops for ihram, Ziyarat tours, and group vehicles for Hajj parties.",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "Yes. Because there is no prepayment, you can cancel or change a booking free of charge with reasonable notice. Just message us on WhatsApp and we will update or cancel your transfer.",
  },
  {
    question: "Can I book transport for a large group?",
    answer:
      "Yes. Alongside sedans and SUVs we operate vans and minibuses for families and large groups, so everyone travels together with their luggage. For Hajj and big pilgrim groups we recommend booking early in the season.",
  },
  {
    question: "Are your vehicles licensed and insured?",
    answer:
      "Yes. We use licensed, well-maintained vehicles driven by professional, vetted drivers, so your transfer is safe, legal, and comfortable from pickup to drop-off.",
  },
];

/** FAQs specific to the About page — company/service scope, not booking mechanics. */
export const aboutFaqs: Faq[] = [
  {
    question: "What does Saudi Private Transfers provide?",
    answer:
      "Private, pre-booked transportation across Saudi Arabia — airport transfers, city-to-city journeys, hotel and destination pickups, and selected cross-border transfers into the GCC.",
  },
  {
    question: "Which cities and destinations can I travel between?",
    answer:
      "Major Saudi cities and gateways including Riyadh, Jeddah, Makkah, Madinah, Dammam, Al Khobar, AlUla and Taif, plus routes between them. See our routes and city pages for the full list.",
  },
  {
    question: "Do you provide airport transfers?",
    answer:
      "Yes. Airport transfers are coordinated around your actual flight, with pickup timing adjusted for early or delayed landings rather than a fixed slot.",
  },
  {
    question: "Can I arrange a private transfer between Saudi Arabia and another GCC country?",
    answer:
      "Yes, for selected routes — including transfers to and from Bahrain, Kuwait, Qatar and the UAE. Cross-border journeys are planned around the crossing itself, not just the drive to it.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Share your pickup, destination, date, time and passenger count through WhatsApp or the quote form. We reply with a fixed price before you travel — no app or account required.",
  },
  {
    question: "Can vehicle selection account for luggage?",
    answer:
      "Yes. Vehicles are chosen by passenger count and luggage volume — from a sedan for light travel up to a van or minibus for a full family or group.",
  },
];
