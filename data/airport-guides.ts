/**
 * Long-form, airport-specific guide content merged into data/airports.ts.
 * Kept separate so the base airport records stay readable. Paragraph strings
 * may contain inline <a href='/path'> links (single-quoted) and are rendered
 * with dangerouslySetInnerHTML in app/airport-transfer/[airport]/page.tsx.
 *
 * Content is written to be genuinely useful and is hedged where facts vary
 * (terminal assignments, entry rules for the holy cities). It invents no
 * prices, credentials, or guarantees.
 */
import type { Faq } from "./faqs";

export interface AirportGuide {
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: Faq[];
  keywords?: string[];
}

export const airportGuides: Record<string, AirportGuide> = {
  // ── RIYADH · RUH ──────────────────────────────────────────────────────────
  "riyadh-airport": {
    keywords: [
      "riyadh airport taxi",
      "king khalid airport transfer",
      "RUH airport pickup",
      "riyadh airport to hotel",
      "riyadh airport meet and greet",
    ],
    sections: [
      {
        heading: "Terminals at King Khalid International Airport (RUH)",
        paragraphs: [
          "King Khalid International Airport sits about 35 km north of central Riyadh and is organised across five terminals. Terminals 1 and 2 handle most international flights, Terminals 3 and 4 are used for domestic services, and Terminal 5 serves low-cost carriers. Terminal assignments occasionally change, so always check your boarding pass or airline app for the current terminal before you travel.",
          "Each terminal has its own arrivals hall and pickup area. When you book, tell us your airline and flight number so your driver waits at the correct terminal — this matters most on late-night arrivals when walking between terminals is inconvenient with luggage.",
        ],
      },
      {
        heading: "Arrival process and meet & greet",
        paragraphs: [
          "After landing, you'll clear passport control, collect your bags, and pass through customs into the arrivals hall. If you hold an eVisa or visa on arrival, allow extra time at immigration during peak evening banks of flights. Your driver tracks your flight and is already waiting when you step out.",
          "For meet & greet, your driver stands in the arrivals hall with a name board, helps with your luggage, and walks you to the vehicle in the car park. There's no hunting for a taxi rank and no queue — useful if you're arriving tired or travelling with family.",
        ],
      },
      {
        heading: "Pickup points, parking and waiting time",
        paragraphs: [
          "Private cars pick up from the designated arrivals car park at each terminal. Because your quote is fixed in advance, short waits for immigration or baggage don't change the price. We include a reasonable amount of free wait time and monitor your flight so a delay is handled automatically.",
          "If you prefer a kerbside pickup rather than a hall meet & greet, just tell us — we'll arrange a pickup point that suits your terminal and share the driver's details on WhatsApp before arrival.",
        ],
      },
      {
        heading: "Where travellers go from RUH",
        paragraphs: [
          "Most arrivals head to hotels in Olaya, the King Abdullah Financial District (KAFD), or the diplomatic quarter, while visitors often continue to <a href='/taxi-service/riyadh'>explore Riyadh</a> attractions such as historic Diriyah, the National Museum, and the Riyadh Season venues. Browse <a href='/cities/riyadh'>Riyadh hotel transfers</a> for fixed-price rides straight to your hotel.",
          "RUH is also a springboard for intercity travel. We run <a href='/intercity-transfers'>private intercity transfers</a> toward Qassim, Hail, and the Eastern Province, and connect to other <a href='/airport-transfers'>Saudi airport transfers</a> if your journey continues by air.",
        ],
      },
      {
        heading: "Family, accessibility and travel tips",
        paragraphs: [
          "Travelling with children or older relatives is easier in a private vehicle: request child seats when you book, and let us know if you need extra help with mobility or a larger vehicle for wheelchairs and equipment. Vans and SUVs are available for groups travelling with several suitcases.",
          "Riyadh summers are hot, so vehicles are air-conditioned and drivers keep water on longer trips. For business travellers, an early confirmed pickup avoids the morning rush on Airport Road; for late arrivals, flight tracking means your driver simply waits.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which terminal will my driver meet me at RUH?",
        answer:
          "Your driver waits at the terminal matching your flight — Terminals 1–2 for most international arrivals, 3–4 for domestic, and 5 for low-cost carriers. Share your flight number when booking so we position the driver correctly.",
      },
      {
        question: "How far is King Khalid Airport from central Riyadh?",
        answer:
          "The airport is roughly 35 km north of the city centre. Driving time is usually around 30–45 minutes depending on traffic on Airport Road and the time of day.",
      },
      {
        question: "Do you provide meet & greet inside the arrivals hall at RUH?",
        answer:
          "Yes. Your driver waits in the arrivals hall with a name board, assists with luggage, and walks you to the vehicle. You can also request a kerbside pickup if you prefer.",
      },
      {
        question: "What happens if my flight to Riyadh is delayed?",
        answer:
          "We track your flight number in real time and adjust the pickup automatically, with free wait time included, so a delay never costs you the ride.",
      },
      {
        question: "Can you take me from Riyadh airport to another city?",
        answer:
          "Yes. Besides city hotels, we run private intercity transfers from RUH toward Qassim, Hail, Dammam, and beyond — request a fixed quote with your destination and travel time.",
      },
      {
        question: "Are child seats and larger vehicles available at RUH?",
        answer:
          "Yes. Request child seats when you book, and choose an SUV, van, or minibus if you're travelling as a group or with extra luggage.",
      },
    ],
  },

  // ── JEDDAH · JED ──────────────────────────────────────────────────────────
  "jeddah-airport": {
    keywords: [
      "jeddah airport taxi",
      "king abdulaziz airport transfer",
      "jeddah airport to makkah",
      "JED to madinah taxi",
      "umrah airport pickup jeddah",
    ],
    sections: [
      {
        heading: "Terminals at King Abdulaziz International Airport (JED)",
        paragraphs: [
          "King Abdulaziz International Airport is around 19 km north of central Jeddah and is the busiest pilgrim gateway in the Kingdom. Terminal 1 now handles most international and domestic flights, while the dedicated Hajj Terminal operates during the Hajj and peak Umrah seasons. Confirm your terminal with your airline before arrival, as pilgrim-season operations can shift.",
          "Because so many arrivals continue straight to Makkah or Madinah, we position drivers to move quickly from the terminal to the highway. Tell us your flight number and onward destination and your driver will be ready as you exit.",
        ],
      },
      {
        heading: "Arrival, meet & greet and pilgrim schedules",
        paragraphs: [
          "After immigration, baggage claim, and customs, your driver meets you in the arrivals hall with a name board and helps with luggage. Many pilgrims arrive already in ihram or intending to enter it, so we allow time for prayer and comfort stops and keep the transfer unhurried.",
          "Umrah and Hajj arrivals often land in large banks of flights, so immigration queues can be long. Your fixed quote and included wait time mean you can move at your own pace without worrying about a rising meter.",
        ],
      },
      {
        heading: "JED to Makkah and Madinah",
        paragraphs: [
          "Makkah is roughly 90 km from the airport, usually around a 60–90 minute drive, while Madinah is about 420 km — a longer journey many pilgrims prefer to make by private car for comfort and flexible stops. We drive door-to-door to your hotel near the Haram in either city. Please note that entry to Makkah is for Muslims only, and central Madinah around the Prophet's Mosque is likewise restricted; verify current regulations before you travel.",
          "For city stays, browse <a href='/cities/jeddah'>Jeddah hotel transfers</a> for fixed-price rides to hotels near the Corniche, or explore our full <a href='/taxi-service/jeddah'>Jeddah taxi service</a> for local trips, business travel, and sightseeing.",
        ],
      },
      {
        heading: "Luggage, family and group travel",
        paragraphs: [
          "Pilgrim groups often travel with Zamzam water and multiple suitcases, so choose an SUV, van, or minibus for extra space. Request child seats for young travellers, and let us know if anyone in your group needs mobility assistance so we can send a suitable vehicle and driver.",
          "For onward air travel we also connect to other <a href='/airport-transfers'>Saudi airport transfers</a>, and to intercity routes such as Jeddah to Taif via the scenic Al Hada road.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is the transfer from Jeddah airport to Makkah?",
        answer:
          "Makkah is about 90 km from King Abdulaziz Airport, typically a 60–90 minute drive door-to-door to your hotel, depending on traffic and the time of day.",
      },
      {
        question: "Can you take me from Jeddah airport to Madinah?",
        answer:
          "Yes. Madinah is roughly 420 km from JED. Many pilgrims prefer a private car for the comfort and flexible rest stops on this longer route. We drive directly to your hotel.",
      },
      {
        question: "Which terminal handles Umrah and Hajj flights at JED?",
        answer:
          "Terminal 1 handles most international arrivals year-round, while the dedicated Hajj Terminal operates in peak Hajj and Umrah seasons. Confirm your terminal with your airline before travel.",
      },
      {
        question: "Is entry to Makkah open to all travellers?",
        answer:
          "Entry to Makkah is for Muslims only, and central Madinah around the Prophet's Mosque is similarly restricted. Please verify the current regulations that apply to your trip before booking.",
      },
      {
        question: "Do you help with luggage and Zamzam water?",
        answer:
          "Yes. Drivers assist with luggage, and we recommend an SUV, van, or minibus for groups travelling with several suitcases or Zamzam water.",
      },
      {
        question: "What if my Umrah flight arrives late at night?",
        answer:
          "We track your flight and your driver waits regardless of the arrival time. Meet & greet in the arrivals hall means you're collected as soon as you clear customs.",
      },
    ],
  },

  // ── MADINAH · MED ─────────────────────────────────────────────────────────
  "madinah-airport": {
    keywords: [
      "madinah airport taxi",
      "prince mohammad airport transfer",
      "MED to prophet's mosque taxi",
      "madinah airport to makkah",
      "madinah ziyarat transfer",
    ],
    sections: [
      {
        heading: "Arriving at Prince Mohammad bin Abdulaziz Airport (MED)",
        paragraphs: [
          "Madinah's airport is around 15 km from the Prophet's Mosque, making it one of the quickest holy-city transfers in the Kingdom. The terminal handles both international and domestic flights, with a straightforward arrivals flow: immigration, baggage claim, then the arrivals hall where your driver waits with a name board.",
          "Central Madinah, around the Prophet's Mosque, is restricted to Muslim visitors. Please verify the current rules that apply to your journey before you travel, and let us know your hotel so we can plan the most direct route.",
        ],
      },
      {
        heading: "Meet & greet and prayer-time routing",
        paragraphs: [
          "Your driver meets you in arrivals, assists with luggage, and drives directly to your hotel near the Haram. Because pilgrim schedules revolve around prayer times, drivers plan routes to avoid road closures around the mosque at peak periods and keep your arrival smooth.",
          "A fixed quote and included wait time mean late arrivals and immigration queues never change your price — helpful after a long international flight.",
        ],
      },
      {
        heading: "Ziyarat, Makkah and onward travel",
        paragraphs: [
          "Many visitors combine their stay with Ziyarat trips to sites such as Quba Mosque and the area of Uhud, which we can arrange as private half-day tours. For onward pilgrimage, we drive from Madinah to Makkah (roughly 420 km) door-to-door, and to <a href='/airport-transfer/jeddah-airport'>Jeddah airport</a> for departures.",
          "Explore our full <a href='/taxi-service/madinah'>Madinah taxi service</a> for hotel transfers and local trips, or continue to <a href='/airport-transfer/alula-airport'>AlUla</a> and the northwest for heritage sightseeing.",
        ],
      },
      {
        heading: "Family, luggage and travel tips",
        paragraphs: [
          "Vans and SUVs suit families and groups travelling with luggage or Zamzam water, and child seats are available on request. If anyone needs mobility assistance, tell us in advance so we can send a suitable vehicle.",
          "Madinah's climate is milder than the Red Sea coast but still warm; vehicles are air-conditioned and drivers carry water on longer trips such as the Makkah route.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is Madinah airport from the Prophet's Mosque?",
        answer:
          "The airport is about 15 km from the Prophet's Mosque, usually a 20–30 minute drive door-to-door to hotels around the Haram.",
      },
      {
        question: "Can non-Muslims travel into central Madinah?",
        answer:
          "Central Madinah around the Prophet's Mosque is restricted to Muslim visitors. Please verify the current regulations that apply to your trip before you travel.",
      },
      {
        question: "Do you arrange Ziyarat tours from Madinah?",
        answer:
          "Yes. We can arrange private Ziyarat trips to sites such as Quba Mosque and the Uhud area, with a driver and comfortable vehicle for your group.",
      },
      {
        question: "Can you drive me from Madinah to Makkah?",
        answer:
          "Yes. We provide private door-to-door transfers from Madinah to Makkah (about 420 km), with flexible rest and prayer stops on the way.",
      },
      {
        question: "What if my flight to Madinah is delayed?",
        answer:
          "We track your flight and adjust pickup automatically, with free wait time, so your driver is waiting whenever you land.",
      },
      {
        question: "Are larger vehicles available at MED?",
        answer:
          "Yes. Choose an SUV, van, or minibus for groups or extra luggage, and request child seats when you book.",
      },
    ],
  },

  // ── DAMMAM · DMM ──────────────────────────────────────────────────────────
  "dammam-airport": {
    keywords: [
      "dammam airport taxi",
      "king fahd airport transfer",
      "DMM to khobar taxi",
      "dammam airport to bahrain",
      "eastern province airport pickup",
    ],
    sections: [
      {
        heading: "Arriving at King Fahd International Airport (DMM)",
        paragraphs: [
          "King Fahd International Airport is the largest airport in the world by land area and sits about 40 km northwest of Dammam, serving the whole Eastern Province metro of Dammam, Khobar, and Dhahran. International and domestic flights share the main terminal, with a clear arrivals flow into a single hall where your driver waits.",
          "Because many arrivals are business travellers heading to Aramco, Jubail, or the corniche hotels in Khobar, we prioritise a quick, fixed-price transfer straight from the terminal to your destination.",
        ],
      },
      {
        heading: "Meet & greet, pickup and parking",
        paragraphs: [
          "Your driver meets you in arrivals with a name board, helps with luggage, and walks you to the vehicle in the car park. Fixed pricing means immigration queues or baggage delays don't change the fare, and flight tracking handles any schedule change automatically.",
          "For corporate travellers we can arrange discreet, on-time pickups and return airport drops timed to your meetings across Dhahran and Jubail.",
        ],
      },
      {
        heading: "Onward to Khobar, Jubail and Bahrain",
        paragraphs: [
          "Popular transfers from DMM include Khobar's corniche hotels, Dhahran, and the industrial hub of Jubail. The airport is also the natural gateway to Bahrain via the King Fahd Causeway: see our <a href='/border-transfers/bahrain-causeway'>Bahrain Causeway transfer</a> for a door-to-door cross-border ride to Manama. Cross-border travellers need valid documents; verify current visa rules before you travel.",
          "For city rides and business travel, explore our full <a href='/taxi-service/dammam'>Dammam taxi service</a>, or connect to other <a href='/airport-transfers'>Saudi airport transfers</a> and <a href='/intercity-transfers'>intercity routes</a> toward Riyadh and Hofuf.",
        ],
      },
      {
        heading: "Family, groups and travel tips",
        paragraphs: [
          "The Eastern Province is hot and humid in summer, so vehicles are air-conditioned and drivers carry water on longer trips such as the Riyadh route. Vans and SUVs suit families and groups with luggage, and child seats are available on request.",
          "If you're connecting to Bahrain, allow extra time at both sides of the causeway for immigration, especially on weekends and holidays when the crossing is busiest.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is King Fahd Airport from Khobar and Dammam?",
        answer:
          "The airport is about 40 km from central Dammam and a similar distance to Khobar, typically a 30–45 minute drive depending on traffic.",
      },
      {
        question: "Can you take me from Dammam airport to Bahrain?",
        answer:
          "Yes. We provide private transfers over the King Fahd Causeway to Manama and anywhere in Bahrain. You'll need valid travel documents; please verify current visa rules before you travel.",
      },
      {
        question: "Do you serve Jubail and Dhahran from DMM?",
        answer:
          "Yes. We run fixed-price transfers from the airport to Jubail, Dhahran, Aramco areas, and Khobar's corniche hotels, with meet & greet on arrival.",
      },
      {
        question: "Is meet & greet available at King Fahd Airport?",
        answer:
          "Yes. Your driver waits in the arrivals hall with a name board, helps with luggage, and walks you to the vehicle. Kerbside pickup can be arranged on request.",
      },
      {
        question: "What if my flight to Dammam is delayed?",
        answer:
          "We track your flight in real time and adjust the pickup automatically, with free wait time, so a delay never costs you the ride.",
      },
      {
        question: "Are vehicles suitable for business and group travel?",
        answer:
          "Yes. Choose comfort or business class for corporate trips, or an SUV, van, or minibus for groups and extra luggage. Child seats are available on request.",
      },
    ],
  },

  // ── TAIF · TIF ────────────────────────────────────────────────────────────
  "taif-airport": {
    keywords: [
      "taif airport taxi",
      "taif regional airport transfer",
      "taif airport to makkah",
      "al hada road taxi",
      "taif to jeddah transfer",
    ],
    sections: [
      {
        heading: "Arriving at Taif Regional Airport (TIF)",
        paragraphs: [
          "Taif Regional Airport serves the cool mountain city that sits above Makkah at around 1,800 metres. The single terminal keeps arrivals simple: clear immigration, collect your bags, and meet your driver in the arrivals hall. Taif's higher altitude makes it a popular summer retreat and a comfortable base for pilgrims combining Umrah with a highland stay.",
          "Tell us your flight number and hotel when you book, and your driver will be ready as you exit — whether you're heading to a city hotel, a rose farm, or straight down the mountain to Makkah.",
        ],
      },
      {
        heading: "The scenic Al Hada road to Makkah",
        paragraphs: [
          "The drive from Taif to Makkah descends the dramatic Al Hada mountain road, a series of switchbacks with sweeping views. It's roughly 90 km and usually around 90 minutes, and experienced local drivers handle the gradient carefully. Entry to Makkah is for Muslims only; please verify the current rules before you travel.",
          "The Al Hada cable car (teleferic) near the top is a highlight in its own right, and we can add a photo stop on request. For onward travel, we also drive from Taif to <a href='/airport-transfer/jeddah-airport'>Jeddah airport</a> and city.",
        ],
      },
      {
        heading: "Taif highlights and travel tips",
        paragraphs: [
          "Taif is famous for its rose farms, which are at their best in spring, plus cooler air, fruit orchards, and mountain viewpoints. Explore our full <a href='/taxi-service/taif'>Taif taxi service</a> for local sightseeing and hotel transfers, or continue toward Makkah and Jeddah with a private driver.",
          "Mountain weather can be cooler and misty, especially in the mornings; vehicles are comfortable and drivers plan around the winding roads. Families and groups can request an SUV or van for extra space.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is the drive from Taif airport to Makkah?",
        answer:
          "Makkah is about 90 km from Taif via the Al Hada mountain road, usually around a 90 minute drive with careful handling of the switchbacks. Entry to Makkah is for Muslims only.",
      },
      {
        question: "Can you take me from Taif to Jeddah?",
        answer:
          "Yes. We provide private transfers from Taif to Jeddah city and Jeddah airport, with fixed pricing agreed before you travel.",
      },
      {
        question: "Is the Al Hada road safe by private car?",
        answer:
          "Yes. The Al Hada road is a well-used mountain route with switchbacks; our local drivers know it well and drive at a comfortable, careful pace.",
      },
      {
        question: "When is the best time to see Taif's rose farms?",
        answer:
          "The rose harvest is typically in spring. We can add a rose-farm or cable-car stop to your transfer on request.",
      },
      {
        question: "What if my flight to Taif is delayed?",
        answer:
          "We track your flight and your driver waits, with free wait time included, so a delay doesn't affect your fixed price.",
      },
      {
        question: "Are larger vehicles available at Taif airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for families or groups, and request child seats when you book.",
      },
    ],
  },

  // ── ABHA · AHB ────────────────────────────────────────────────────────────
  "abha-airport": {
    keywords: [
      "abha airport taxi",
      "abha international airport transfer",
      "abha to al soudah taxi",
      "khamis mushait airport pickup",
      "asir highlands transfer",
    ],
    sections: [
      {
        heading: "Arriving at Abha International Airport (AHB)",
        paragraphs: [
          "Abha International Airport is the gateway to the green Asir highlands, one of the coolest and most scenic corners of Saudi Arabia at over 2,000 metres. The single terminal has a simple arrivals flow, and your driver waits in the hall with a name board. Abha and neighbouring Khamis Mushait sit close together, so most transfers are short.",
          "The highlands are a popular summer escape, with mist, cooler temperatures, and mountain views — pack a light layer even in warm months.",
        ],
      },
      {
        heading: "Al Soudah, cable cars and mountain resorts",
        paragraphs: [
          "From the airport we drive to Abha and Khamis Mushait hotels, the cable cars, and the highland resorts around Al Soudah near Jabal Sawda, one of the Kingdom's highest points. Roads climb and wind through the mountains, so allow a little extra time and enjoy the scenery.",
          "Explore our full <a href='/taxi-service/abha'>Abha taxi service</a> for sightseeing and hotel transfers, and consider a day trip to the hanging village of Habala or the terraced Asir countryside with a private driver.",
        ],
      },
      {
        heading: "Family travel and tips",
        paragraphs: [
          "Asir is a firm family favourite, especially during the summer festival season. Request child seats and choose an SUV or van for extra space on the mountain roads. Weather can change quickly at altitude, so drivers plan routes around fog and busy holiday traffic.",
          "For onward travel we connect to <a href='/airport-transfer/jazan-airport'>Jazan</a> on the tropical coast and to Najran, giving you a full southern-highlands itinerary by private car.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is Abha airport from Khamis Mushait?",
        answer:
          "Khamis Mushait is close to Abha, usually a short 20–30 minute drive from the airport depending on your exact destination and traffic.",
      },
      {
        question: "Can you take me to Al Soudah from Abha airport?",
        answer:
          "Yes. We drive to the Al Soudah highland resorts and viewpoints near Jabal Sawda, with a local driver used to the winding mountain roads.",
      },
      {
        question: "Is Abha good for family travel?",
        answer:
          "Yes. The cool Asir highlands are a popular family destination, especially in summer. Request child seats and an SUV or van for comfort on the mountain roads.",
      },
      {
        question: "What is the weather like in Abha?",
        answer:
          "Abha is cooler and often misty thanks to its altitude of over 2,000 metres. A light layer is useful even in warm months, and drivers plan around fog when needed.",
      },
      {
        question: "What if my flight to Abha is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time included, so your fixed price is unaffected by delays.",
      },
      {
        question: "Do you offer day trips around Asir?",
        answer:
          "Yes. We arrange private day trips to Habala, the terraced countryside, and mountain viewpoints, with a driver and comfortable vehicle.",
      },
    ],
  },

  // ── TABUK · TUU ───────────────────────────────────────────────────────────
  "tabuk-airport": {
    keywords: [
      "tabuk airport taxi",
      "tabuk regional airport transfer",
      "tabuk to neom taxi",
      "tabuk airport pickup",
      "northwest saudi transfer",
    ],
    sections: [
      {
        heading: "Arriving at Tabuk Regional Airport (TUU)",
        paragraphs: [
          "Tabuk Regional Airport serves the northwest of the Kingdom and is a practical gateway for both business travellers heading to the NEOM development region and tourists exploring the Red Sea coast and historic Tabuk. The single terminal keeps arrivals straightforward, and your driver waits in the hall with a name board.",
          "Tell us your flight and destination when you book — whether it's a city hotel, a project site, or an onward drive to AlUla — and your driver will be ready as you exit.",
        ],
      },
      {
        heading: "NEOM, Tabuk city and the northwest",
        paragraphs: [
          "From the airport we transfer to Tabuk hotels, NEOM project areas, and landmarks such as Tabuk Castle and the historic Hejaz Railway station. The region's long distances suit private travel, with comfortable vehicles and planned rest stops.",
          "Explore our full <a href='/taxi-service/tabuk'>Tabuk taxi service</a> for local trips, or continue to <a href='/airport-transfer/alula-airport'>AlUla</a> for heritage sightseeing at Hegra and the Old Town.",
        ],
      },
      {
        heading: "Travel tips for the northwest",
        paragraphs: [
          "Distances in the northwest are large and services between towns can be sparse, so a private car with a local driver adds real peace of mind. Vehicles are air-conditioned, and drivers carry water and plan fuel and rest stops on longer routes.",
          "Winters in the Tabuk highlands can be genuinely cold, occasionally with frost, so pack accordingly. Families and groups can request an SUV or van for extra space and luggage.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you take me from Tabuk airport to NEOM?",
        answer:
          "Yes. We provide private transfers from Tabuk airport toward NEOM project areas, with comfortable vehicles and planned rest stops for the distances involved.",
      },
      {
        question: "How far is AlUla from Tabuk?",
        answer:
          "AlUla is a long drive from Tabuk across the northwest. Many travellers prefer a private car for the comfort and flexible stops; request a fixed quote with your timing.",
      },
      {
        question: "Is meet & greet available at Tabuk airport?",
        answer:
          "Yes. Your driver waits in the arrivals hall with a name board and helps with your luggage to the vehicle.",
      },
      {
        question: "What is the weather like in Tabuk?",
        answer:
          "Tabuk's highland climate brings cold winters, occasionally with frost, and warm summers. Pack a warm layer if you're visiting in winter.",
      },
      {
        question: "What if my flight to Tabuk is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price.",
      },
      {
        question: "Are larger vehicles available at Tabuk airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for groups or extra luggage, and request child seats when you book.",
      },
    ],
  },

  // ── YANBU · YNB ───────────────────────────────────────────────────────────
  "yanbu-airport": {
    keywords: [
      "yanbu airport taxi",
      "yanbu airport transfer",
      "yanbu to madinah taxi",
      "yanbu red sea resort transfer",
      "yanbu industrial city pickup",
    ],
    sections: [
      {
        heading: "Arriving at Yanbu Airport (YNB)",
        paragraphs: [
          "Yanbu Airport serves the Red Sea industrial and resort city, a hub for both energy-sector business travel and coastal leisure. The single terminal has a simple arrivals flow, and your driver meets you in the hall with a name board and helps with luggage.",
          "Whether you're heading to a beach resort, the Royal Commission waterfront, or an onward drive to Madinah, tell us your flight and destination and your driver will be ready on arrival.",
        ],
      },
      {
        heading: "Beaches, the industrial city and Madinah",
        paragraphs: [
          "From the airport we transfer to Yanbu's resorts and the corniche, the Royal Commission area, and industrial city for business travellers. Yanbu is also a popular diving base on the Red Sea. For pilgrims and tourists, we drive to <a href='/airport-transfer/madinah-airport'>Madinah</a> — a scenic couple of hours inland — and to Jeddah.",
          "Explore our full <a href='/taxi-service/yanbu'>Yanbu taxi service</a> for local trips and hotel transfers, or connect to other <a href='/airport-transfers'>Saudi airport transfers</a> for onward travel.",
        ],
      },
      {
        heading: "Travel tips for the Red Sea coast",
        paragraphs: [
          "The coast is hot and humid in summer, so vehicles are air-conditioned and drivers carry water on longer trips such as the Madinah route. Vans and SUVs suit families, dive groups with equipment, and business teams travelling together.",
          "If you're combining a beach stay with a visit to Madinah, a private car makes the inland leg comfortable with flexible rest and prayer stops.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you take me from Yanbu airport to Madinah?",
        answer:
          "Yes. We provide private transfers from Yanbu to Madinah, a scenic inland drive of roughly a couple of hours, door-to-door to your hotel.",
      },
      {
        question: "Do you serve Yanbu's beach resorts and industrial city?",
        answer:
          "Yes. We transfer to Red Sea resorts, the corniche, the Royal Commission waterfront, and the industrial city, with meet & greet on arrival.",
      },
      {
        question: "Is Yanbu good for diving trips?",
        answer:
          "Yes. Yanbu is a popular Red Sea diving base. Choose an SUV or van if you're travelling with dive equipment, and we'll drive you to your resort or dive centre.",
      },
      {
        question: "What if my flight to Yanbu is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price.",
      },
      {
        question: "Is meet & greet available at Yanbu airport?",
        answer:
          "Yes. Your driver waits in the arrivals hall with a name board and helps with your luggage to the vehicle.",
      },
      {
        question: "Are larger vehicles available at Yanbu airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for groups, families, or dive teams, and request child seats when you book.",
      },
    ],
  },

  // ── ALULA · ULH ───────────────────────────────────────────────────────────
  "alula-airport": {
    keywords: [
      "alula airport taxi",
      "alula international airport transfer",
      "alula airport to hegra",
      "alula old town transfer",
      "madain salih taxi",
    ],
    sections: [
      {
        heading: "Arriving at AlUla International Airport (ULH)",
        paragraphs: [
          "AlUla International Airport is the gateway to one of the Kingdom's flagship heritage destinations, home to Hegra (Madain Salih), Saudi Arabia's first UNESCO World Heritage Site. The airport is a short drive from the resorts and the Old Town, and your driver meets you in arrivals with a name board and helps with luggage.",
          "AlUla is a managed destination with a seasonal events calendar, so tell us your resort or hotel and arrival time and we'll plan a direct, comfortable transfer.",
        ],
      },
      {
        heading: "Hegra, the Old Town and Maraya",
        paragraphs: [
          "From the airport we drive to AlUla's resorts, the restored Old Town, the ancient Nabataean tombs of Hegra, Dadan, Elephant Rock, and the mirrored Maraya concert hall. Distances between sites are easy by private car, and we can arrange a driver for touring across your stay.",
          "Explore our full <a href='/taxi-service/alula'>AlUla taxi service</a> for sightseeing, and connect to <a href='/airport-transfer/madinah-airport'>Madinah</a> or <a href='/airport-transfer/tabuk-airport'>Tabuk</a> for onward heritage travel across the northwest.",
        ],
      },
      {
        heading: "Travel tips for AlUla",
        paragraphs: [
          "AlUla's desert setting means warm days and cooler evenings, especially in the cooler-season peak visitor months. Vehicles are air-conditioned and comfortable for touring, and SUVs and vans suit families and groups with luggage.",
          "Some heritage sites are visited via managed experiences with their own transport; a private car is ideal for hotel transfers, restaurants, viewpoints, and moving between experiences at your own pace.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is AlUla airport from the Old Town and Hegra?",
        answer:
          "The airport is a short drive from AlUla's resorts and Old Town, with Hegra and the other heritage sites a little further out — all easy by private car.",
      },
      {
        question: "Can you provide a driver for touring AlUla?",
        answer:
          "Yes. We can arrange a private driver and vehicle for hotel transfers and sightseeing across your stay, moving between viewpoints, restaurants, and experiences at your own pace.",
      },
      {
        question: "Can you take me from AlUla to Madinah or Tabuk?",
        answer:
          "Yes. We provide private onward transfers from AlUla to Madinah and Tabuk, with comfortable vehicles for the longer desert routes.",
      },
      {
        question: "When is the best time to visit AlUla?",
        answer:
          "The cooler months are the peak visitor season, with a busy events calendar. Days are warm and evenings cooler, so pack a light layer.",
      },
      {
        question: "What if my flight to AlUla is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price.",
      },
      {
        question: "Are larger vehicles available at AlUla airport?",
        answer:
          "Yes. Choose an SUV or van for families and groups with luggage, and request child seats when you book.",
      },
    ],
  },

  // ── JAZAN · GIZ ───────────────────────────────────────────────────────────
  "jazan-airport": {
    keywords: [
      "jazan airport taxi",
      "jazan airport transfer",
      "jazan to farasan ferry taxi",
      "jazan corniche pickup",
      "fifa mountains transfer",
    ],
    sections: [
      {
        heading: "Arriving at Jazan Airport (GIZ)",
        paragraphs: [
          "Jazan Airport serves the tropical southwest coast, a lush, humid region very different from the rest of the Kingdom. The single terminal has a simple arrivals flow, and your driver meets you in the hall with a name board. Many visitors continue to the Farasan Islands ferry or up into the Fifa Mountains.",
          "Tell us your destination and arrival time when you book, and your driver will be ready — whether it's a corniche hotel, the ferry terminal, or the highlands.",
        ],
      },
      {
        heading: "Farasan ferry, the corniche and Fifa Mountains",
        paragraphs: [
          "From the airport we transfer to Jazan's corniche hotels, the Farasan Islands ferry terminal for the crossing to the coral archipelago, and the terraced Fifa Mountains inland. Ferry schedules and capacity vary, so plan your timing and check the current sailing details in advance.",
          "Explore our full <a href='/taxi-service/jazan'>Jazan taxi service</a> for local trips, and connect to <a href='/airport-transfer/abha-airport'>Abha</a> and Najran for a full southern itinerary by private car.",
        ],
      },
      {
        heading: "Travel tips for the tropical southwest",
        paragraphs: [
          "Jazan is hot and humid, so vehicles are air-conditioned and drivers carry water. The mountain roads into Fifa are steep and winding, and a local driver makes the trip comfortable. Vans and SUVs suit families and groups with luggage.",
          "If you're catching the Farasan ferry, allow time for the terminal and sailing, and let us know your return plans so we can arrange the pickup back to the airport or your hotel.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you take me from Jazan airport to the Farasan ferry?",
        answer:
          "Yes. We drive to the Farasan Islands ferry terminal. Sailing schedules and capacity vary, so please check the current ferry details and allow time at the terminal.",
      },
      {
        question: "Do you serve the Fifa Mountains from Jazan?",
        answer:
          "Yes. We transfer to the terraced Fifa Mountains inland, with a local driver used to the steep, winding roads.",
      },
      {
        question: "What is the climate like in Jazan?",
        answer:
          "Jazan is tropical — hot and humid year-round. Vehicles are air-conditioned and drivers carry water for comfort.",
      },
      {
        question: "Can you connect Jazan with Abha or Najran?",
        answer:
          "Yes. We provide private intercity transfers from Jazan to Abha and Najran, ideal for a combined southern-highlands and coast itinerary.",
      },
      {
        question: "What if my flight to Jazan is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price.",
      },
      {
        question: "Are larger vehicles available at Jazan airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for families or groups, and request child seats when you book.",
      },
    ],
  },

  // ── HAIL · HAS ────────────────────────────────────────────────────────────
  "hail-airport": {
    keywords: [
      "hail airport taxi",
      "hail regional airport transfer",
      "hail to jubbah rock art taxi",
      "hail airport pickup",
      "hail to alula transfer",
    ],
    sections: [
      {
        heading: "Arriving at Hail Regional Airport (HAS)",
        paragraphs: [
          "Hail Regional Airport serves the historic northern desert city, a crossroads of old caravan routes ringed by the Aja and Salma mountains. The single terminal has a simple arrivals flow, and your driver meets you in the hall with a name board and helps with luggage.",
          "Hail is known for its heritage and generous desert hospitality, and it makes a practical gateway toward AlUla and the northern Nafud sands.",
        ],
      },
      {
        heading: "Rock art, forts and onward to AlUla",
        paragraphs: [
          "From the airport we transfer to Hail city hotels, A'arif Fort, the Qishlah, and the remarkable Jubbah rock-art site — a UNESCO-listed collection of ancient petroglyphs out in the desert. Distances are large, so a private car with a local driver is the comfortable choice.",
          "Explore our full <a href='/taxi-service/hail'>Hail taxi service</a> for local trips, and continue to <a href='/airport-transfer/alula-airport'>AlUla</a> or toward Qassim with planned rest and fuel stops on the longer routes.",
        ],
      },
      {
        heading: "Travel tips for the northern desert",
        paragraphs: [
          "Hail's desert climate brings hot summers and cold winters, occasionally with frost, so pack accordingly. Vehicles are air-conditioned and drivers carry water and plan fuel stops on the long, open routes between towns.",
          "Families and groups can request an SUV or van for extra space, and we can arrange a driver for day trips out to the rock-art sites and desert landscapes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you take me to the Jubbah rock-art site from Hail?",
        answer:
          "Yes. We arrange private trips to the UNESCO-listed Jubbah petroglyphs, out in the desert, with a local driver and comfortable vehicle.",
      },
      {
        question: "Can you drive from Hail to AlUla?",
        answer:
          "Yes. We provide private transfers from Hail toward AlUla, with planned rest and fuel stops on the longer desert route.",
      },
      {
        question: "What is the weather like in Hail?",
        answer:
          "Hail has a desert climate with hot summers and cold winters that occasionally bring frost. Pack a warm layer if you're visiting in winter.",
      },
      {
        question: "Is meet & greet available at Hail airport?",
        answer:
          "Yes. Your driver waits in the arrivals hall with a name board and helps with your luggage to the vehicle.",
      },
      {
        question: "What if my flight to Hail is delayed?",
        answer:
          "We track your flight and your driver waits with free wait time, so a delay doesn't change your fixed price.",
      },
      {
        question: "Are larger vehicles available at Hail airport?",
        answer:
          "Yes. Choose an SUV, van, or minibus for families or groups, and request child seats when you book.",
      },
    ],
  },
};
