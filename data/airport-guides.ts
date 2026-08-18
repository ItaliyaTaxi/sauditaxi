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
  /** ISO date this guide's content was last substantively reviewed/updated. */
  lastUpdated?: string;
}

export const airportGuides: Record<string, AirportGuide> = {
  // ── RIYADH · RUH ──────────────────────────────────────────────────────────
  "riyadh-airport": {
    lastUpdated: "2026-08-04",
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
          "Most arrivals head to hotels in Olaya, the <a href='/riyadh/king-khalid-airport-to-kafd'>King Abdullah Financial District (KAFD)</a>, or the diplomatic quarter, while visitors often continue to <a href='/taxi-service/riyadh'>explore Riyadh</a> attractions such as historic <a href='/riyadh/riyadh-to-diriyah-transfers'>Diriyah & Bujairi Terrace</a>, the National Museum, and major events via our <a href='/riyadh/king-khalid-airport-to-ricec-exhibition-center'>Riyadh exhibition center transfers</a>. Browse <a href='/cities/riyadh'>Riyadh hotel transfers</a> for fixed-price rides straight to your hotel.",
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
      {
        question: "How far in advance should I book a Riyadh airport transfer?",
        answer:
          "Booking a day or two ahead is comfortable for most travellers, though same-day requests are usually possible. During major events such as Riyadh Season or large conferences, book earlier to guarantee your preferred vehicle class.",
      },
      {
        question: "What vehicle should I choose for a business trip from RUH?",
        answer:
          "A business sedan or SUV suits most solo executives and small teams heading to Olaya or KAFD. For a visiting delegation or a day with several meetings, a van keeps everyone together and a full-day chauffeur booking removes the need to arrange separate local transport.",
      },
      {
        question: "Is the price for a Riyadh airport taxi fixed, or does it change with traffic?",
        answer:
          "Your fare is fixed and agreed before you travel. Traffic on Airport Road, immigration queues, or baggage delays never change the price you were quoted.",
      },
      {
        question: "How far is King Khalid Airport from Diriyah and the Riyadh Season venues?",
        answer:
          "Diriyah is on the opposite side of the city from the airport, so allow roughly 45–60 minutes depending on which Riyadh Season venue or district you're visiting and current traffic.",
      },
      {
        question: "Do you offer wheelchair-accessible vehicles at RUH?",
        answer:
          "Let us know about any mobility needs when you book so we can arrange a suitable vehicle and allow extra time at pickup — mention this alongside your flight number so your driver is prepared.",
      },
      {
        question: "What's the best time to arrive at Riyadh airport to avoid traffic?",
        answer:
          "Mid-morning and early afternoon arrivals generally clear Airport Road faster than the evening rush. Whatever time you land, flight tracking means your driver is ready regardless, so this affects your drive time more than your pickup.",
      },
    
      {
        question: "Do you provide direct long-distance transfers from Riyadh Airport to Jeddah, Makkah, or Madinah?",
        answer:
          "Yes, arriving passengers at King Khalid Airport (RUH) can book direct private transfers including our <a href='/routes/riyadh-airport-to-jeddah'>Riyadh Airport to Jeddah transfer</a>, our <a href='/routes/riyadh-airport-to-makkah'>Riyadh Airport to Makkah Umrah transfer</a>, and our <a href='/routes/riyadh-airport-to-madinah'>Riyadh Airport to Madinah transfer</a>.",
      },
    ],
  },

  // ── JEDDAH · JED ──────────────────────────────────────────────────────────
  "jeddah-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How far ahead should I book during peak Umrah season or Ramadan?",
        answer:
          "Book at least a week ahead where possible during Ramadan and peak Umrah months, when flight banks are largest and vehicle demand is highest. Outside those periods, a day or two ahead is usually enough.",
      },
      {
        question: "What vehicle suits a large pilgrim group from JED?",
        answer:
          "A van or minibus is the practical choice for groups of six or more travelling together with shared luggage and Zamzam water, keeping the whole party in one vehicle for one fixed price rather than splitting across several cars.",
      },
      {
        question: "Can the driver stop at a miqat on the way from JED to Makkah?",
        answer:
          "Yes, if you haven't entered ihram before landing. Mention this when you book so your driver can plan a stop at the appropriate miqat point on the route to Makkah.",
      },
      {
        question: "Is a private transfer from JED a good option for women travelling alone?",
        answer:
          "Yes. The vehicle is exclusively yours for the journey, with no strangers sharing the ride, which many solo female travellers and pilgrims find more comfortable than shared transport.",
      },
      {
        question: "How far is Jeddah Corniche from the airport?",
        answer:
          "The Corniche and central Jeddah hotels are a more direct, shorter drive than the routes to Makkah or Madinah — typically well under an hour depending on your exact hotel and traffic.",
      },
      {
        question: "Is airport transfer available 24/7 at JED?",
        answer:
          "Yes. Flights land around the clock throughout Umrah and Hajj seasons, and meet-and-greet pickup is available for any arrival time, day or night.",
      },
    
      {
        question: "Can I book a direct transfer from Jeddah Airport to Riyadh?",
        answer:
          "Yes, we provide meet-and-greet pickups at King Abdulaziz Airport (JED) with direct overland transfer via our <a href='/routes/jeddah-airport-to-riyadh'>private Jeddah Airport to Riyadh transfer</a> service.",
      },
    
      {
        question: "Do you offer direct transfers from Jeddah Airport to Taif or Yanbu?",
        answer:
          "Yes, arriving passengers at King Abdulaziz Airport (JED) can book our <a href='/routes/jeddah-airport-to-taif'>Jeddah Airport to Taif transfer</a> or our <a href='/routes/jeddah-airport-to-yanbu'>Jeddah Airport to Yanbu transfer</a>.",
      },
    ],
  },

  // ── MADINAH · MED ─────────────────────────────────────────────────────────
  "madinah-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How far in advance should I book a Madinah airport transfer?",
        answer:
          "A day or two ahead is usually sufficient outside peak season. During Ramadan and busy Umrah periods, book at least a week ahead to secure your preferred vehicle and pickup time.",
      },
      {
        question: "What is the best vehicle for elderly pilgrims arriving at MED?",
        answer:
          "An SUV with easier entry height is generally more comfortable than a low sedan for elderly travellers, and it's worth mentioning any mobility needs when booking so we can allow extra time and choose the most suitable vehicle.",
      },
      {
        question: "Is the fare from Madinah airport fixed regardless of my hotel's exact location?",
        answer:
          "Yes, once your hotel address is confirmed at booking, the price is fixed for that destination and does not change due to traffic, immigration queues, or how long baggage claim takes.",
      },
      {
        question: "How far is Quba Mosque from Madinah airport?",
        answer:
          "Quba Mosque is on the opposite side of central Madinah from the airport, roughly 20 km away. Most travellers visit Quba as part of a separate Ziyarat trip from their hotel rather than directly from the airport.",
      },
      {
        question: "Is it safe for a woman to book a private transfer alone from Madinah airport?",
        answer:
          "Yes. Your vehicle is private and exclusive to your booking, with a licensed driver and no shared passengers, which is a common and practical choice for women travelling to Madinah without a male relative.",
      },
      {
        question: "Can the driver wait if I want to visit the Prophet's Mosque before checking into my hotel?",
        answer:
          "Let us know when booking if you'd like a brief stop before heading to your hotel, and we can plan the routing and any waiting time around it as part of your transfer.",
      },
    
      {
        question: "Can I book a transfer from Madinah Airport directly to Riyadh?",
        answer:
          "Yes, we provide meet-and-greet arrivals at Prince Mohammad Airport (MED) with direct transfer to Riyadh via our <a href='/routes/madinah-airport-to-riyadh'>private Madinah Airport to Riyadh transfer</a>.",
      },
    ],
  },

  // ── DAMMAM · DMM ──────────────────────────────────────────────────────────
  "dammam-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How far in advance should corporate travellers book from DMM?",
        answer:
          "A day ahead is typically enough for a standard pickup. For recurring business travel, a corporate account with pre-arranged bookings removes the need to book each trip individually — ask our team to set one up.",
      },
      {
        question: "What is the best vehicle for an Aramco or corporate team arriving together?",
        answer:
          "A van or minibus keeps a visiting team together for one fixed price, while a single business sedan or SUV suits a solo executive who values a discreet, professional pickup.",
      },
      {
        question: "Is the price from DMM to Khobar or Jubail fixed in advance?",
        answer:
          "Yes. Your fare is agreed before you travel based on your exact destination, with no meter and no change for traffic or wait time within the agreed booking.",
      },
      {
        question: "How long does the crossing to Bahrain take after landing at DMM?",
        answer:
          "Including the drive to the King Fahd Causeway and the border crossing itself, budget roughly one to one and a half hours from the airport to arriving in Bahrain, longer on Thursday or Friday when the causeway is busiest.",
      },
      {
        question: "How hot does it get at Dammam airport in summer, and does it affect the transfer?",
        answer:
          "Eastern Province summers are hot and humid, but the transfer itself is unaffected — vehicles are air-conditioned throughout, and drivers carry water for longer trips such as the Riyadh or Bahrain routes.",
      },
      {
        question: "Is airport transfer available for early-morning or overnight flights at DMM?",
        answer:
          "Yes. Meet-and-greet pickup runs around the clock, and flight tracking means your driver is ready whenever you actually land, including early-morning or late-night arrivals.",
      },
    
      {
        question: "Can I book a private transfer from Dammam Airport directly to Riyadh?",
        answer:
          "Yes, we provide meet-and-greet pickups at King Fahd Airport (DMM) with direct highway transfer via our <a href='/routes/dammam-airport-to-riyadh'>private Dammam Airport to Riyadh transfer</a>.",
      },
    ],
  },

  // ── TAIF · TIF ────────────────────────────────────────────────────────────
  "taif-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How far ahead should I book during Taif's summer escape season?",
        answer:
          "Book a few days ahead during the peak summer months (roughly June through August), when Taif sees the most demand as a cool-weather retreat from Makkah and Jeddah.",
      },
      {
        question: "What vehicle is best for the Al Hada mountain road?",
        answer:
          "A standard sedan is comfortable for most travellers, while an SUV offers a smoother ride and extra stability on the switchbacks, particularly useful for families or anyone prone to motion sickness on winding roads.",
      },
      {
        question: "Is the fixed price for Taif to Makkah the same regardless of traffic on Al Hada road?",
        answer:
          "Yes, your fare is agreed before travel and doesn't change if traffic on the mountain road is heavier than usual — you only pay the price confirmed at booking.",
      },
      {
        question: "How far are Taif's rose farms from the airport?",
        answer:
          "The main rose-growing areas are a short drive from the airport and city centre, easily added as a stop on your transfer or a separate local outing during your stay.",
      },
      {
        question: "Is Taif airport a good gateway for family trips?",
        answer:
          "Yes. Taif's cooler mountain climate and attractions like the rose farms and cable car make it a popular family stop, and we can arrange an SUV or van with child seats for a comfortable arrival.",
      },
      {
        question: "Can I combine a Taif airport arrival with an onward Umrah trip to Makkah?",
        answer:
          "Yes. Many travellers land at Taif, spend a day or two in the cooler highlands, then continue down the Al Hada road to Makkah — mention this plan when booking so both legs are arranged together.",
      },
    ],
  },

  // ── ABHA · AHB ────────────────────────────────────────────────────────────
  "abha-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How far ahead should I book during the Abha summer festival season?",
        answer:
          "Book several days ahead during the peak summer festival months, when Asir sees its highest visitor numbers and vehicle demand is at its busiest.",
      },
      {
        question: "How far is Habala from Abha airport?",
        answer:
          "Habala, the hanging village, is a scenic drive from the airport through the Asir mountains — allow extra time beyond a flat-road distance given the winding terrain, and treat it as a half-day outing rather than a quick stop.",
      },
      {
        question: "Is the price for an Abha airport transfer fixed despite the mountain roads?",
        answer:
          "Yes. Your fare is agreed before travel regardless of road conditions, fog, or how winding the specific route is on the day.",
      },
      {
        question: "What should I pack for the temperature difference when landing in Abha?",
        answer:
          "Even in warm months, Abha's altitude keeps evenings noticeably cooler than the rest of Saudi Arabia, and mist is common. A light jacket or layer is worth packing regardless of season.",
      },
      {
        question: "Are vehicles suited to Asir's foggy mountain conditions?",
        answer:
          "Yes. Drivers who regularly cover the Asir highlands are used to planning around fog and adjusting timing accordingly, and vehicles are well maintained for the mountain driving conditions.",
      },
      {
        question: "Can you connect Abha airport with Jazan or Najran on the same trip?",
        answer:
          "Yes. We run private intercity transfers linking Abha with both Jazan on the coast and Najran inland, useful for a combined southern-Saudi itinerary by private car.",
      },
    
      {
        question: "Do you provide direct transfers from Abha Airport to Jeddah or Riyadh?",
        answer:
          "Yes, arriving passengers at Abha Airport (AHB) can book direct private overland transfers via our <a href='/routes/abha-airport-to-jeddah'>Abha Airport to Jeddah transfer</a> or our <a href='/routes/abha-airport-to-riyadh'>Abha Airport to Riyadh transfer</a>.",
      },
    ],
  },

  // ── TABUK · TUU ───────────────────────────────────────────────────────────
  "tabuk-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How should NEOM-bound business travellers book from Tabuk airport?",
        answer:
          "Share your project site or meeting location and arrival time when booking, and consider a corporate account if your company sends staff to NEOM regularly, so recurring trips don't need individual arrangement each time.",
      },
      {
        question: "What vehicle is best for the long desert distances around Tabuk?",
        answer:
          "An SUV is the practical default for comfort over longer distances, while a van suits teams or families travelling together with luggage across the region's larger distances between towns.",
      },
      {
        question: "Is the fare fixed for long routes like Tabuk to NEOM or AlUla?",
        answer:
          "Yes, the price is agreed and fixed before you travel based on your exact destination, regardless of how long the drive takes on the day.",
      },
      {
        question: "How far is the historic Hejaz Railway station from Tabuk airport?",
        answer:
          "Tabuk Castle and the Hejaz Railway station are within the city itself, a straightforward short drive from the airport rather than a long detour.",
      },
      {
        question: "Is it safe to travel the long desert routes around Tabuk by private car?",
        answer:
          "Yes. Drivers who cover this region regularly plan fuel and rest stops for the distances involved, and vehicles are checked and air-conditioned for comfort on longer legs such as the route toward NEOM or AlUla.",
      },
      {
        question: "How cold does Tabuk get in winter, and should I plan around it?",
        answer:
          "Tabuk's highland winters can be genuinely cold, occasionally with frost, so pack a warm layer — the transfer itself is unaffected, as vehicles are comfortable and climate-controlled year-round.",
      },
    ],
  },

  // ── YANBU · YNB ───────────────────────────────────────────────────────────
  "yanbu-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How far ahead should I book during dive season in Yanbu?",
        answer:
          "Book a few days ahead during the peak diving months, when resort and dive-centre transfers are in highest demand along the Yanbu coast.",
      },
      {
        question: "What vehicle should I choose if I'm carrying dive gear?",
        answer:
          "An SUV or van gives enough space for dive bags and equipment alongside regular luggage — mention your gear when booking so we send a suitably sized vehicle.",
      },
      {
        question: "Is the fare fixed for the drive from Yanbu airport to Madinah?",
        answer:
          "Yes, the price for the inland route to Madinah is agreed before you travel and does not change based on traffic or rest stops within the trip.",
      },
      {
        question: "Is Yanbu airport a good gateway for a family beach holiday?",
        answer:
          "Yes. Yanbu's resorts and corniche are a popular family destination, and we can arrange an SUV or van with child seats for a comfortable transfer from the airport.",
      },
      {
        question: "Do you serve business travellers heading to Yanbu's industrial city?",
        answer:
          "Yes. We provide direct transfers to the Royal Commission area and industrial city for energy-sector business travellers, alongside the resort and corniche transfers for leisure guests.",
      },
      {
        question: "Can I book a return transfer from Yanbu back to the airport in advance?",
        answer:
          "Yes. You can book your return airport transfer at the same time as your arrival pickup, which is worth doing if you're on a tight schedule for a departing flight.",
      },
    ],
  },

  // ── ALULA · ULH ───────────────────────────────────────────────────────────
  "alula-airport": {
    lastUpdated: "2026-08-04",
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
          "From the airport we drive to AlUla's resorts via our dedicated <a href='/alula/alula-airport-to-habitas-and-banyan-tree'>Habitas and Banyan Tree transfers</a>, the restored Old Town, the ancient Nabataean tombs of Hegra, Dadan, Elephant Rock, and the mirrored Maraya concert hall. Distances between sites are easy by private car, and we can arrange a driver for touring across your stay.",
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
      {
        question: "How far ahead should I book during AlUla's peak events season?",
        answer:
          "Book well ahead during the cooler-season events calendar, when AlUla's resorts and transfers see their highest demand of the year.",
      },
      {
        question: "What vehicle is best for touring AlUla's spread-out sites?",
        answer:
          "An SUV is comfortable for most couples and small families touring between Hegra, the Old Town, and Maraya, while a van suits larger groups wanting to stay together across a full day of sightseeing.",
      },
      {
        question: "Is the price fixed if I book a driver for a full day of AlUla sightseeing?",
        answer:
          "Yes, a full-day touring arrangement is quoted as one fixed price agreed before you start, covering the driver's time between sites rather than being charged per stop.",
      },
      {
        question: "How far is Elephant Rock from AlUla airport?",
        answer:
          "Elephant Rock (Jabal AlFil) is a short drive from the airport and resorts, easily combined with a Maraya or Old Town visit on the same outing.",
      },
      {
        question: "Is AlUla airport a good gateway for a family heritage trip?",
        answer:
          "Yes. AlUla's sites are reached comfortably by private car, making it manageable for families with children or grandparents, and we can arrange a suitable vehicle with child seats on request.",
      },
      {
        question: "Can you arrange transport for a multi-day AlUla stay, not just the airport transfer?",
        answer:
          "Yes. Beyond the initial airport pickup, we can arrange a driver for hotel transfers and sightseeing across your whole stay, so you're not booking a separate ride for each day.",
      },
    
      {
        question: "Can I book long-distance private transfers from AlUla Airport to Riyadh or Jeddah?",
        answer:
          "Yes, we provide direct luxury overland transfers from ULH Airport including our <a href='/routes/alula-airport-to-riyadh'>AlUla Airport to Riyadh transfer</a> and <a href='/routes/alula-airport-to-jeddah'>AlUla Airport to Jeddah transfer</a>.",
      },
    ],
  },

  // ── JAZAN · GIZ ───────────────────────────────────────────────────────────
  "jazan-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How far ahead should I book a Jazan airport transfer?",
        answer:
          "A day or two ahead is usually enough. If you're timing your pickup around a specific Farasan ferry sailing, book a little earlier so we can plan the transfer around the current schedule.",
      },
      {
        question: "What vehicle suits the Fifa Mountains drive from Jazan?",
        answer:
          "An SUV handles the steep, winding roads into the Fifa Mountains more comfortably than a low sedan, particularly for families or anyone prone to motion sickness.",
      },
      {
        question: "Is the price fixed for the transfer to the Farasan ferry terminal?",
        answer:
          "Yes, the fare to the ferry terminal is agreed before you travel and doesn't change based on traffic or how busy the terminal is on arrival.",
      },
      {
        question: "How humid is Jazan, and does it affect the ride?",
        answer:
          "Jazan is tropical and humid year-round, but the transfer itself stays comfortable — vehicles are air-conditioned throughout, and drivers carry water on longer trips inland.",
      },
      {
        question: "Is Jazan airport suitable for a family beach and mountain trip?",
        answer:
          "Yes. Families often combine the corniche with a Fifa Mountains day trip, and we can arrange an SUV or van with child seats for both legs.",
      },
      {
        question: "Is meet-and-greet available for all Jazan flight times?",
        answer:
          "Yes, meet-and-greet pickup is available for any arrival time. Share your flight number when booking and your driver will be waiting regardless of the hour.",
      },
    ],
  },

  // ── HAIL · HAS ────────────────────────────────────────────────────────────
  "hail-airport": {
    lastUpdated: "2026-08-04",
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
      {
        question: "How far in advance should I book a Hail airport transfer?",
        answer:
          "A day ahead is usually sufficient. If you're planning a longer desert leg toward AlUla or Qassim, let us know your timing early so the route and rest stops can be planned properly.",
      },
      {
        question: "What vehicle is best for the open desert routes around Hail?",
        answer:
          "An SUV is the comfortable default for the region's longer distances, while a van suits groups or families travelling together toward the rock-art sites or onward to AlUla.",
      },
      {
        question: "How far is A'arif Fort from Hail airport?",
        answer:
          "A'arif Fort and the Qishlah are within Hail city itself, a short drive from the airport rather than a long detour.",
      },
      {
        question: "Is the price fixed for the drive from Hail toward AlUla?",
        answer:
          "Yes, the fare for longer intercity legs such as the route toward AlUla is agreed and fixed before you travel, regardless of fuel or rest stops along the way.",
      },
      {
        question: "Is a Hail airport transfer suitable for a family trip to the rock art sites?",
        answer:
          "Yes. The Jubbah petroglyphs make a good family day trip by private car, and we can arrange a suitable vehicle with child seats and allow extra time for the desert drive.",
      },
      {
        question: "Can you arrange transport from Hail toward Qassim as well as AlUla?",
        answer:
          "Yes. Besides the route toward AlUla, we run private intercity transfers from Hail toward Qassim, useful if your itinerary continues through the northern desert region.",
      },
    ],
  },
  // ── RED SEA INTERNATIONAL · RSI ──────────────────────────────────────────
  "red-sea-airport": {
    lastUpdated: "2026-08-18",
    keywords: [
      "red sea airport transfer",
      "red sea international airport taxi",
      "RSI airport chauffeur",
      "red sea resort private transfer",
      "st regis red sea airport transfer",
    ],
    sections: [
      {
        heading: "Arriving at Red Sea International Airport (RSI)",
        paragraphs: [
          "Red Sea International Airport (RSI) is the dedicated gateway to the Red Sea destination—one of the world's most ambitious regenerative tourism projects. Designed by Foster + Partners with its iconic dune-inspired canopy, RSI welcomes direct domestic and international flights from Riyadh, Jeddah, and international hubs.",
          "Situated on the mainland coastal plain near Hanak, the airport connects directly to marine terminals, seaplane docks, and mainland resort corridors. Because the destination is strictly access-managed and car rentals or standard street taxis are unavailable, pre-arranged executive road transport is essential.",
        ],
      },
      {
        heading: "Meet & Greet to Island Jetties and Coastal Resorts",
        paragraphs: [
          "When you land at RSI, your private chauffeur greets you inside the arrivals concourse, assists with your luggage and diving gear, and escorts you directly to your executive 4x4 SUV or premium van.",
          "From RSI, our drivers provide transfers to all key destination access points:",
          "• **Marine Red Sea Jetties:** For chartered boat transfers to Ummahat Island (The St. Regis Red Sea Resort and Nujuma, a Ritz-Carlton Reserve).",
          "• **Shebara Island Terminal:** For marine departures to the stainless-steel overwater orbs of Shebara.",
          "• **Desert Rock Resort:** Mountain canyon transfers into the granite cliffs of the inland desert.",
          "• **Umluj & Yanbu Connections:** Mainland transfers connecting coastal hotels, dive centers, and neighboring cities.",
        ],
      },
      {
        heading: "Luxury Vehicles and Luggage Handling",
        paragraphs: [
          "Our Red Sea fleet consists of late-model luxury 4x4 SUVs (GMC Yukon, Chevrolet Tahoe) and executive passenger vans fitted with high-specification climate control and spacious luggage compartments for resort luggage, sports gear, and family needs.",
          "Every booking includes fixed pricing agreed in advance with real-time flight tracking, ensuring zero stress whether your flight arrives on schedule or experiences air traffic delays.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I reach the island resorts (St. Regis, Nujuma) from RSI Airport?",
        answer:
          "Our private transfer takes you from RSI Airport directly to the dedicated coastal marine jetty (typically 20–30 minutes drive), where your resort's luxury boat or seaplane transfer connects directly to your island villa.",
      },
      {
        question: "Where will my driver meet me at Red Sea International Airport?",
        answer:
          "Your driver will wait inside the RSI arrivals terminal with a personalized name board, assist with your luggage, and guide you directly to your private vehicle.",
      },
      {
        question: "Can I book a transfer from RSI Airport to Umluj or Yanbu?",
        answer:
          "Yes. We provide fixed-price intercity and coastal transfers from RSI Airport south to Umluj (approx. 1 hour) and Yanbu (approx. 2.5 hours).",
      },
      {
        question: "What happens if my inbound flight to RSI is delayed?",
        answer:
          "We track all flights landing at RSI in real time. Your pickup time adjusts automatically with free wait time included, ensuring your driver is ready when you disembark.",
      },
    ],
  },
  // ── NEOM BAY · NUM ───────────────────────────────────────────────────────
  "neom-bay-airport": {
    lastUpdated: "2026-08-18",
    keywords: [
      "neom bay airport transfer",
      "neom bay airport taxi",
      "NUM airport chauffeur",
      "sindalah island transfer neom",
      "neom community private car",
    ],
    sections: [
      {
        heading: "Arriving at NEOM Bay Airport (NUM)",
        paragraphs: [
          "NEOM Bay Airport (NUM) is the primary aviation hub serving the visionary NEOM region in the northwest corner of Saudi Arabia. Located in the Sharma district along the Gulf of Aqaba coastline, the airport handles commercial and private charter flights connecting Riyadh, Jeddah, London, Dubai, and regional centers.",
          "Due to the vast geography of NEOM's development sectors and the absence of public transit or street taxis, pre-booking a private executive chauffeur is the most reliable way to navigate between airport terminals, accommodation camps, coastal marinas, and project sites.",
        ],
      },
      {
        heading: "Transfers to Sindalah Island Connections and NEOM Communities",
        paragraphs: [
          "Our private transfer service covers all primary destinations across the NEOM region:",
          "• **Sindalah Island Marine Terminals:** Direct transfers to coastal departure docks and yacht marinas for guests heading to Sindalah luxury island.",
          "• **NEOM Community 1 & Community 2:** Executive door-to-door transport for consultants, corporate visitors, and residents.",
          "• **Sharma & Magna Coastal Districts:** Comfortable travel to coastal resorts, project headquarters, and Gulf of Aqaba beachfronts.",
          "• **Tabuk Intercity Link:** Long-distance transfers connecting NUM with Tabuk city and Tabuk Regional Airport (TUU).",
        ],
      },
      {
        heading: "Executive Vehicles for Business and VIP Travel",
        paragraphs: [
          "We provide premium full-size 4x4 SUVs (GMC Yukon, Chevrolet Suburban) and business sedans engineered for comfort across northern desert and coastal expressways. Experienced drivers familiar with NEOM security access protocols ensure timely, professional service.",
          "Bookings feature fixed quotes with no hidden fees or remote-area surcharges, complete with round-the-clock WhatsApp support.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far is NEOM Bay Airport from the Sindalah Island boat departure dock?",
        answer:
          "The drive from NUM Airport to the coastal marina departure point for Sindalah Island takes approximately 20 to 30 minutes by private vehicle.",
      },
      {
        question: "Where will my driver meet me at NEOM Bay Airport (NUM)?",
        answer:
          "Your driver will wait inside the NUM arrivals hall with a personalized name sign, handle your luggage, and escort you to your vehicle in the designated VIP pickup area.",
      },
      {
        question: "Can you provide transfers between NEOM Bay Airport and Tabuk?",
        answer:
          "Yes. We operate long-distance private transfers between NEOM Bay Airport and Tabuk (approx. 150 km, ~1 hour 45 min) with fixed pricing agreed in advance.",
      },
      {
        question: "Are child seats available for family travel in NEOM?",
        answer:
          "Yes. Child safety seats and booster seats can be arranged upon request during booking.",
      },
    ],
  },
};
