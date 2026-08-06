/**
 * Long-form, border-specific guide content merged into data/borders.ts.
 * Paragraph strings may contain inline <a href='/path'> links (single-quoted)
 * and are rendered with dangerouslySetInnerHTML in
 * app/border-transfers/[border]/page.tsx.
 *
 * Cross-border rules (visas, customs allowances, vehicle documents, and
 * crossing hours) vary by nationality and change frequently. This content is
 * deliberately general and repeatedly advises travellers to verify current
 * regulations with official sources. It invents no prices or guarantees.
 */
import type { Faq } from "./faqs";

export interface BorderGuide {
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: Faq[];
  keywords?: string[];
  lastUpdated?: string;
}

export const borderGuides: Record<string, BorderGuide> = {
  // ── BAHRAIN · King Fahd Causeway ──────────────────────────────────────────
  "bahrain-causeway": {
    lastUpdated: "2026-08-05",
    keywords: [
      "saudi to bahrain taxi",
      "king fahd causeway transfer",
      "khobar to manama taxi",
      "dammam to bahrain border",
      "bahrain causeway crossing",
    ],
    sections: [
      {
        heading: "Crossing the King Fahd Causeway",
        paragraphs: [
          "The King Fahd Causeway is a roughly 25 km series of bridges and embankments linking Saudi Arabia's Eastern Province directly to Bahrain. Immigration and customs for both countries are handled at the halfway point on Passport Island, where vehicles pass through Saudi exit formalities and then Bahraini entry. Our driver takes you door-to-door from any Eastern Province location across the causeway into Bahrain.",
          "Because both sets of formalities happen on the causeway, the process is usually smoother than a remote land border — but queues build at peak times, so allow extra time and travel earlier in the day when you can.",
        ],
      },
      {
        heading: "Passports, visas and documents",
        paragraphs: [
          "You'll need a valid passport, and most non-GCC travellers require a Bahrain visa — many nationalities can use Bahrain's eVisa or visa on arrival, while GCC citizens and residents follow separate rules. Requirements differ by nationality and change from time to time, so please verify the current visa and residency rules with official Bahraini sources before you travel.",
          "If you're a resident of Saudi Arabia, carry your Iqama along with your passport. Keep documents easily accessible for the checks on Passport Island.",
        ],
      },
      {
        heading: "Customs, vehicle and toll",
        paragraphs: [
          "Customs officers may inspect luggage on either side, and there are limits on what can be carried across — alcohol and certain goods are restricted, so check current allowances. There is a causeway toll, and cross-border private vehicles require valid insurance and documentation. We handle the toll and vehicle paperwork as part of the transfer so you can focus on your trip.",
          "Declare anything you're unsure about rather than risk a delay, and keep receipts for valuable items you're carrying.",
        ],
      },
      {
        heading: "Timing, hours and travel tips",
        paragraphs: [
          "The causeway operates around the clock, but traffic peaks sharply on weekend evenings and around public holidays, when queues at Passport Island can be long. Weekday mornings are usually the quietest. From the Saudi side, pickup cities include Khobar, Dammam, Jubail, and Hofuf — see our <a href='/taxi-service/khobar'>Khobar</a> and <a href='/taxi-service/dammam'>Dammam</a> taxi services for local rides, or arrive first via <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a>.",
          "Cross-border rules can change, so always confirm the latest requirements before you set out. We'll share the driver's details and a realistic timing plan on WhatsApp before your trip.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you drive all the way into Bahrain?",
        answer:
          "Yes. The King Fahd Causeway transfer is door-to-door — we collect you in the Eastern Province and drive across the causeway to Manama or anywhere in Bahrain.",
      },
      {
        question: "What documents do I need to cross to Bahrain?",
        answer:
          "A valid passport, and for most non-GCC travellers a Bahrain visa (often available as an eVisa or on arrival). Rules vary by nationality and change, so verify current requirements with official Bahraini sources before you travel.",
      },
      {
        question: "How long does the causeway crossing take?",
        answer:
          "It varies with traffic and immigration queues. The causeway is open 24/7, but weekend evenings and holidays are busiest; weekday mornings are usually quickest. We build extra time into the transfer.",
      },
      {
        question: "Is there a toll on the King Fahd Causeway?",
        answer:
          "Yes, there is a causeway toll, and cross-border vehicles need valid insurance and documents. We handle the toll and vehicle paperwork as part of the transfer.",
      },
      {
        question: "Can I bring anything I like across the border?",
        answer:
          "No. Customs limits apply and some goods, including alcohol, are restricted. Check current allowances and declare anything you're unsure about to avoid delays.",
      },
      {
        question: "Which Saudi cities do you collect from for Bahrain?",
        answer:
          "We collect from Khobar, Dammam, Jubail, Hofuf, and other Eastern Province locations, and can meet you at Dammam airport for a direct onward transfer to Bahrain.",
      },
      {
        question: "How far in advance should I book a Bahrain Causeway transfer?",
        answer:
          "Same-day booking is often possible, but booking a day ahead gives more vehicle choice, especially around weekend evenings and holidays when causeway traffic peaks.",
      },
      {
        question: "What vehicle should I book for a family crossing to Bahrain?",
        answer:
          "For families we recommend a larger sedan or van depending on group size and luggage — mention passenger count and any car seats needed when requesting your quote.",
      },
      {
        question: "Is the price fixed even if the causeway queue is long?",
        answer:
          "Yes, we agree a fixed price before you travel; immigration queues at Passport Island don't change your fare.",
      },
      {
        question: "Can I book a return transfer from Bahrain back to Saudi Arabia?",
        answer:
          "Yes, we arrange return transfers from Bahrain back into the Eastern Province — let us know your return date when booking, or contact us once you're ready to head back.",
      },
      {
        question: "What happens if my visa or documents aren't in order at the crossing?",
        answer:
          "Immigration decisions at Passport Island are made by Saudi and Bahraini border officials, not by us — we strongly recommend confirming your visa and document requirements with official sources before you travel to avoid delays.",
      },
      {
        question: "Is the King Fahd Causeway transfer suitable for business travellers?",
        answer:
          "Yes, many business travellers use this route for day trips to Manama; we can plan pickup and return timing around your meeting schedule.",
      },
    ],
  },

  // ── QATAR · Salwa Crossing ────────────────────────────────────────────────
  "qatar-border": {
    lastUpdated: "2026-08-05",
    keywords: [
      "saudi to qatar taxi",
      "salwa border crossing transfer",
      "riyadh to qatar border",
      "dammam to salwa taxi",
      "saudi qatar land border",
    ],
    sections: [
      {
        heading: "The Salwa border crossing to Qatar",
        paragraphs: [
          "The Salwa crossing (Abu Samra on the Qatari side) is the single land gateway between Saudi Arabia and Qatar, out on the desert coast southeast of Hofuf. Our private transfer drives you from Riyadh, Dammam, Hofuf, or Khobar across the desert to the crossing, with comfortable vehicles and planned rest and fuel stops for the long journey. We typically drop you at the crossing, with onward Qatar transport arranged separately.",
          "This is a long-haul desert route, so a private car with a local driver adds real comfort and flexibility compared with public options.",
        ],
      },
      {
        heading: "Passports, visas and documents",
        paragraphs: [
          "You'll need a valid passport and the appropriate entry permission for Qatar — many nationalities can obtain a Qatar visa online or on arrival, while GCC citizens and residents follow separate rules. Requirements vary by nationality and change, so please verify the current Qatar entry and visa rules with official sources before you travel.",
          "Saudi residents should carry their Iqama alongside their passport, and keep documents ready for exit and entry checks at the crossing.",
        ],
      },
      {
        heading: "Customs, waiting times and hours",
        paragraphs: [
          "Customs checks apply on both sides, with the usual restrictions on alcohol and certain goods — check current allowances before you travel. Waiting times at Salwa vary with traffic and the volume of travellers, and can be longer around holidays. Crossing hours and procedures can change, so confirm the latest operating information before setting out.",
          "Because the crossing is remote, we plan fuel and rest stops and make sure the vehicle is well prepared for the desert drive.",
        ],
      },
      {
        heading: "Pickup cities and travel tips",
        paragraphs: [
          "We collect from Riyadh, Dammam, Hofuf, and Khobar — explore our <a href='/taxi-service/riyadh'>Riyadh</a> and <a href='/taxi-service/dammam'>Dammam</a> taxi services for local rides, or arrive first via <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a>. For nearer neighbours, see our <a href='/border-transfers/bahrain-causeway'>Bahrain Causeway transfer</a>.",
          "Cross-border regulations can change at short notice, so always confirm current requirements. We'll agree timing and share the driver's details on WhatsApp before your trip.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the Saudi–Qatar land border?",
        answer:
          "The single land crossing is at Salwa (Abu Samra on the Qatari side), on the desert coast southeast of Hofuf. We drive there from Riyadh, Dammam, Hofuf, and Khobar.",
      },
      {
        question: "What documents do I need to cross to Qatar?",
        answer:
          "A valid passport and the appropriate entry permission for Qatar. Many nationalities can obtain a visa online or on arrival, but rules vary by nationality and change — verify current requirements with official sources before you travel.",
      },
      {
        question: "Do you drive into Qatar or drop at the border?",
        answer:
          "We typically drive you to the Salwa crossing, with onward Qatar transport arranged separately. Tell us your plans and we'll advise on the smoothest option.",
      },
      {
        question: "How long is the drive to the Qatar border?",
        answer:
          "It's a long desert journey from Riyadh or the Eastern Province. We use comfortable vehicles and plan fuel and rest stops; request a fixed quote with your pickup city and timing.",
      },
      {
        question: "What are the customs rules at Salwa?",
        answer:
          "Customs checks apply on both sides, with restrictions on alcohol and certain goods. Check current allowances and declare anything you're unsure about to avoid delays.",
      },
      {
        question: "Are the crossing hours fixed?",
        answer:
          "Crossing hours and procedures can change. Please confirm the latest operating information for the Salwa crossing before you set out.",
      },
      {
        question: "How far in advance should I book a Qatar border transfer?",
        answer:
          "Given the long desert route, booking at least a day ahead is recommended so we can plan the vehicle, driver, and rest stops properly.",
      },
      {
        question: "What vehicle is best for the long drive to Salwa?",
        answer:
          "A comfortable sedan suits most travellers; for families or groups with more luggage we recommend a larger vehicle or van — mention passenger count when requesting your quote.",
      },
      {
        question: "Is the price fixed for the whole journey to Salwa?",
        answer:
          "Yes, we agree a fixed price before you travel based on your pickup city, so traffic or fuel stops along the way don't change your fare.",
      },
      {
        question: "Can you arrange a return transfer from the Qatar border?",
        answer:
          "Yes, we can arrange a pickup back from Salwa into Saudi Arabia for your return journey — let us know your plans when booking.",
      },
      {
        question: "Who do I contact if my Qatar visa isn't approved in time?",
        answer:
          "Visa approval is handled by Qatari immigration authorities, not by us — we recommend confirming your visa status with official Qatari sources well before your travel date.",
      },
      {
        question: "Is this route suitable for business travel to Qatar?",
        answer:
          "Yes, though most business travellers to Doha fly given the distance; the Salwa crossing suits those who prefer a private overland trip or need to bring a vehicle-load of luggage.",
      },
    ],
  },

  // ── UAE · Al Batha Crossing ───────────────────────────────────────────────
  "uae-border": {
    lastUpdated: "2026-08-05",
    keywords: [
      "saudi to uae taxi",
      "al batha border crossing transfer",
      "dammam to uae border",
      "saudi to abu dhabi border",
      "al batha ghweifat crossing",
    ],
    sections: [
      {
        heading: "The Al Batha border crossing to the UAE",
        paragraphs: [
          "Al Batha (Ghweifat on the UAE side) is the main land crossing between Saudi Arabia's Eastern Province and the United Arab Emirates, on the route toward Abu Dhabi and Dubai. Our private transfer drives you from Dammam, Khobar, Hofuf, or Riyadh to the crossing with comfortable vehicles and planned rest stops. We usually drop at the crossing, with onward UAE transport arranged separately.",
          "It's a long route, and Al Batha is one of the busier Gulf land crossings, so timing your trip well makes a real difference.",
        ],
      },
      {
        heading: "Passports, visas and documents",
        paragraphs: [
          "You'll need a valid passport and the appropriate UAE entry permission — many nationalities are eligible for a UAE visa on arrival or an eVisa, while GCC citizens and residents follow separate rules. Requirements vary by nationality and change, so verify current UAE entry and visa rules with official sources before you travel.",
          "Saudi residents should carry their Iqama with their passport, and have documents ready for exit and entry checks.",
        ],
      },
      {
        heading: "Customs, waiting times and hours",
        paragraphs: [
          "Customs checks apply on both sides, with restrictions on alcohol and certain goods — check current allowances. Al Batha can be busy, and waiting times vary with traffic and the number of travellers, particularly around weekends and holidays. Crossing procedures and hours can change, so confirm the latest information before you travel.",
          "We prepare the vehicle for the long drive and plan fuel and rest stops along the way.",
        ],
      },
      {
        heading: "Pickup cities and travel tips",
        paragraphs: [
          "We collect from Dammam, Khobar, Hofuf, and Riyadh — see our <a href='/taxi-service/dammam'>Dammam</a> and <a href='/taxi-service/khobar'>Khobar</a> taxi services, or arrive first via <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a>. For a shorter Gulf hop, compare our <a href='/border-transfers/bahrain-causeway'>Bahrain Causeway transfer</a>.",
          "For very long journeys, many travellers ultimately find flying quicker; a private car is ideal when you prefer door-to-crossing comfort or are carrying significant luggage. Always confirm current cross-border rules before setting out.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the Saudi–UAE land border?",
        answer:
          "The main crossing is at Al Batha (Ghweifat on the UAE side), on the route toward Abu Dhabi and Dubai. We drive there from Dammam, Khobar, Hofuf, and Riyadh.",
      },
      {
        question: "What documents do I need to cross to the UAE?",
        answer:
          "A valid passport and the appropriate UAE entry permission. Many nationalities are eligible for a visa on arrival or eVisa, but rules vary by nationality and change — verify current requirements with official sources first.",
      },
      {
        question: "Do you drive into the UAE or drop at the border?",
        answer:
          "We usually drive you to the Al Batha crossing, with onward UAE transport arranged separately. Tell us your plans and we'll advise on the best option.",
      },
      {
        question: "How busy is the Al Batha crossing?",
        answer:
          "Al Batha is one of the busier Gulf land crossings. Waiting times vary with traffic and the number of travellers, and are longer around weekends and holidays.",
      },
      {
        question: "Is it faster to fly to the UAE?",
        answer:
          "For very long journeys, flying is often quicker. A private car suits travellers who prefer door-to-crossing comfort or are carrying significant luggage.",
      },
      {
        question: "What are the customs rules at Al Batha?",
        answer:
          "Customs checks apply on both sides, with restrictions on alcohol and certain goods. Check current allowances and declare anything you're unsure about.",
      },
      {
        question: "How far in advance should I book a UAE border transfer?",
        answer:
          "Booking at least a day ahead is recommended given the long route and Al Batha's busier traffic, especially around weekends and holidays.",
      },
      {
        question: "What vehicle is best for the drive to Al Batha?",
        answer:
          "A comfortable sedan suits most travellers; for families or groups with extra luggage we recommend a larger vehicle — mention passenger count when requesting your quote.",
      },
      {
        question: "Is the price fixed for the whole journey to the UAE border?",
        answer:
          "Yes, we agree a fixed price before you travel based on your pickup city, so traffic doesn't change your fare.",
      },
      {
        question: "Can you arrange a return transfer from the UAE border?",
        answer:
          "Yes, we can arrange a pickup back from Al Batha into Saudi Arabia for your return journey — let us know your plans when booking.",
      },
      {
        question: "Who handles visa questions for entering the UAE?",
        answer:
          "Visa approval is handled by UAE immigration authorities, not by us — confirm your visa status and eligibility with official UAE sources before you travel.",
      },
      {
        question: "Is this route suitable for business travel to Abu Dhabi or Dubai?",
        answer:
          "Most business travellers to the UAE fly given the distance from the Eastern Province; the Al Batha crossing suits those who prefer a private overland trip or are carrying significant luggage.",
      },
    ],
  },

  // ── KUWAIT · Al Khafji Crossing ───────────────────────────────────────────
  "kuwait-border": {
    lastUpdated: "2026-08-05",
    keywords: [
      "saudi to kuwait taxi",
      "al khafji border crossing transfer",
      "dammam to kuwait border",
      "khafji nuwaiseeb crossing",
      "saudi kuwait land border",
    ],
    sections: [
      {
        heading: "The Al Khafji border crossing to Kuwait",
        paragraphs: [
          "The Al Khafji crossing (Nuwaiseeb on the Kuwaiti side) sits on the northern Gulf coast and is the main land gateway between Saudi Arabia and Kuwait. Our private transfer drives you from Dammam, Jubail, Khobar, or Riyadh up the northern route to the crossing, with comfortable vehicles and planned rest stops. We typically drop at the crossing, with onward Kuwait transport arranged separately.",
          "The coastal desert route is straightforward, but timing around commuter and weekend peaks helps keep the crossing smooth.",
        ],
      },
      {
        heading: "Passports, visas and documents",
        paragraphs: [
          "You'll need a valid passport and the appropriate Kuwait entry permission. Visa rules differ by nationality and change over time, and GCC citizens and residents follow separate procedures, so please verify current Kuwait entry and visa requirements with official sources before you travel.",
          "Saudi residents should carry their Iqama with their passport, and keep documents ready for exit and entry checks at the crossing.",
        ],
      },
      {
        heading: "Customs, waiting times and hours",
        paragraphs: [
          "Customs checks apply on both sides, with restrictions on alcohol and certain goods — Kuwait's rules are strict, so check current allowances carefully. Waiting times vary with traffic and the number of travellers, and are longer at weekends and around holidays. Crossing hours and procedures can change, so confirm the latest details before you set out.",
          "We prepare the vehicle for the drive and plan fuel and rest stops on the way north.",
        ],
      },
      {
        heading: "Pickup cities and travel tips",
        paragraphs: [
          "We collect from Dammam, Jubail, Khobar, and Riyadh — see our <a href='/taxi-service/dammam'>Dammam</a> and <a href='/taxi-service/jubail'>Jubail</a> taxi services, or arrive first via <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a>. For other Gulf neighbours, compare our <a href='/border-transfers/bahrain-causeway'>Bahrain</a> and <a href='/border-transfers/qatar-border'>Qatar</a> transfers.",
          "Cross-border regulations can change at short notice, so always confirm the latest requirements. We'll agree timing and share the driver's details on WhatsApp before your trip.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the Saudi–Kuwait land border?",
        answer:
          "The main crossing is at Al Khafji (Nuwaiseeb on the Kuwaiti side) on the northern Gulf coast. We drive there from Dammam, Jubail, Khobar, and Riyadh.",
      },
      {
        question: "What documents do I need to cross to Kuwait?",
        answer:
          "A valid passport and the appropriate Kuwait entry permission. Visa rules vary by nationality and change, so verify current requirements with official Kuwaiti sources before you travel.",
      },
      {
        question: "Do you drive into Kuwait or drop at the border?",
        answer:
          "We typically drive you to the Al Khafji crossing, with onward Kuwait transport arranged separately. Tell us your plans and we'll advise on the smoothest option.",
      },
      {
        question: "Are Kuwait's customs rules strict?",
        answer:
          "Yes. Kuwait applies strict customs rules, with alcohol and certain goods prohibited. Check current allowances carefully and declare anything you're unsure about.",
      },
      {
        question: "How long is the drive to the Kuwait border?",
        answer:
          "It's a few hours up the northern coast from the Eastern Province, longer from Riyadh. We use comfortable vehicles and plan rest stops; request a fixed quote with your pickup city.",
      },
      {
        question: "Are the crossing hours fixed?",
        answer:
          "Crossing hours and procedures can change. Please confirm the latest operating information for the Al Khafji crossing before you set out.",
      },
      {
        question: "How far in advance should I book a Kuwait border transfer?",
        answer:
          "Booking at least a day ahead is recommended, particularly around weekends and holidays when the coastal route sees more traffic.",
      },
      {
        question: "What vehicle is best for the drive to Al Khafji?",
        answer:
          "A comfortable sedan suits most travellers; for families or groups with extra luggage we recommend a larger vehicle — mention passenger count when requesting your quote.",
      },
      {
        question: "Is the price fixed for the whole journey to Kuwait?",
        answer:
          "Yes, we agree a fixed price before you travel based on your pickup city, so traffic doesn't change your fare.",
      },
      {
        question: "Can you arrange a return transfer from the Kuwait border?",
        answer:
          "Yes, we can arrange a pickup back from Al Khafji into Saudi Arabia for your return journey — let us know your plans when booking.",
      },
      {
        question: "Who handles visa questions for entering Kuwait?",
        answer:
          "Visa approval is handled by Kuwaiti immigration authorities, not by us — confirm your visa status and eligibility with official Kuwaiti sources before you travel, especially given Kuwait's strict customs rules.",
      },
      {
        question: "Is this route suitable for business travel to Kuwait City?",
        answer:
          "Yes, the northern coastal route is a practical option for business travellers who prefer a private overland trip from the Eastern Province.",
      },
    ],
  },

  // ── JORDAN · Al Haditha / Al Durra Crossing ───────────────────────────────
  "jordan-border": {
    lastUpdated: "2026-08-05",
    keywords: [
      "saudi to jordan taxi",
      "al haditha border crossing transfer",
      "tabuk to jordan border",
      "saudi jordan land border",
      "al durra crossing",
    ],
    sections: [
      {
        heading: "Crossings to Jordan from northern Saudi Arabia",
        paragraphs: [
          "Saudi Arabia and Jordan are linked by land crossings in the north, including Al Haditha in the northeast and Al Durra on the Red Sea coast near Haql. Our private transfer drives you from Tabuk, Hail, Riyadh, or AlUla to the appropriate crossing, with comfortable vehicles and planned rest and fuel stops for the long northern journey. We typically drop at the crossing, with onward Jordan transport arranged separately.",
          "These are long-haul desert routes, so a private car with a local driver adds comfort and flexibility over the distances involved.",
        ],
      },
      {
        heading: "Passports, visas and documents",
        paragraphs: [
          "You'll need a valid passport and the appropriate entry permission for Jordan — many visitors obtain a Jordan visa in advance or on arrival, and options such as the Jordan Pass exist for tourists, but rules vary by nationality and change. Please verify current Jordan entry and visa requirements with official sources before you travel.",
          "Saudi residents should carry their Iqama with their passport, and keep documents ready for exit and entry checks at the crossing.",
        ],
      },
      {
        heading: "Customs, waiting times and hours",
        paragraphs: [
          "Customs checks apply on both sides, with the usual restrictions on certain goods — check current allowances before you travel. Waiting times vary with traffic and traveller numbers, and the northern crossings can be quieter than the busy Gulf routes. Crossing hours and procedures can change, so confirm the latest operating details before you set out.",
          "Because the routes are remote, we plan fuel and rest stops and prepare the vehicle for the desert drive.",
        ],
      },
      {
        heading: "Pickup cities and travel tips",
        paragraphs: [
          "We collect from Tabuk, Hail, Riyadh, and AlUla — explore our <a href='/taxi-service/tabuk'>Tabuk</a> taxi service, arrive first via <a href='/airport-transfer/tabuk-airport'>Tabuk airport transfer</a>, or combine your trip with heritage sightseeing at <a href='/airport-transfer/alula-airport'>AlUla</a>. Many travellers heading to Aqaba use the coastal Al Durra crossing near Haql.",
          "Cross-border regulations can change, so always confirm current requirements before setting out. We'll agree timing and share the driver's details on WhatsApp before your trip.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which crossings link Saudi Arabia and Jordan?",
        answer:
          "The north has land crossings including Al Haditha in the northeast and Al Durra on the Red Sea coast near Haql (convenient for Aqaba). We drive to the appropriate crossing from Tabuk, Hail, Riyadh, and AlUla.",
      },
      {
        question: "What documents do I need to cross to Jordan?",
        answer:
          "A valid passport and the appropriate entry permission for Jordan. Many visitors use a visa on arrival or the Jordan Pass, but rules vary by nationality and change — verify current requirements with official sources first.",
      },
      {
        question: "Do you drive into Jordan or drop at the border?",
        answer:
          "We typically drive you to the crossing, with onward Jordan transport arranged separately. Tell us your destination and we'll advise on the best route and option.",
      },
      {
        question: "How long is the drive to the Jordan border?",
        answer:
          "It's a long northern desert journey, shorter from Tabuk than from Riyadh. We use comfortable vehicles and plan fuel and rest stops; request a fixed quote with your pickup city and timing.",
      },
      {
        question: "Are the northern crossings busy?",
        answer:
          "The northern crossings to Jordan are generally quieter than the busy Gulf routes, but waiting times still vary with traffic and traveller numbers.",
      },
      {
        question: "Can you combine the trip with AlUla sightseeing?",
        answer:
          "Yes. Many travellers combine the northern route with a stop in AlUla for heritage sightseeing. We can arrange a driver and itinerary to suit your plans.",
      },
      {
        question: "How far in advance should I book a Jordan border transfer?",
        answer:
          "Booking at least a day ahead is recommended given the long northern route, so we can plan the vehicle, driver, and rest stops properly.",
      },
      {
        question: "What vehicle is best for the long drive to the Jordan border?",
        answer:
          "A comfortable sedan suits most travellers; for families or groups with more luggage we recommend a larger vehicle — mention passenger count when requesting your quote.",
      },
      {
        question: "Is the price fixed for the whole journey to the Jordan border?",
        answer:
          "Yes, we agree a fixed price before you travel based on your pickup city, so traffic and fuel stops don't change your fare.",
      },
      {
        question: "Can you arrange a return transfer from the Jordan border?",
        answer:
          "Yes, we can arrange a pickup back into Saudi Arabia from either crossing for your return journey — let us know your plans when booking.",
      },
      {
        question: "Who handles visa questions for entering Jordan?",
        answer:
          "Visa approval is handled by Jordanian immigration authorities, not by us — confirm your visa status and eligibility, including Jordan Pass options, with official Jordanian sources before you travel.",
      },
      {
        question: "Should I use Al Haditha or Al Durra for Aqaba?",
        answer:
          "Al Durra, near Haql on the Red Sea coast, is generally the more convenient crossing for travellers heading to Aqaba; tell us your destination and we'll recommend the appropriate route.",
      },
    ],
  },
};
