export interface Faq {
  question: string;
  answer: string;
}

/** General FAQs used on the homepage and as a fallback elsewhere. */
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
];
