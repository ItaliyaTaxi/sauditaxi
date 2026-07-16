import type { PointTransfer } from "../jeddah/types";

/**
 * Makkah Umrah-focused service pages, served at /makkah/{slug} by the same
 * PointTransferView route as hotel/attraction transfers. Written to a distinct
 * search intent so they do NOT compete with the /routes/jeddah-to-makkah and
 * /routes/madinah-to-makkah intercity pages:
 *  - jeddah-airport-to-makkah-umrah → airport arrival + ihram + meet & greet
 *  - makkah-hotel-to-haram-transfer → short local hotel↔Haram shuttle
 */
const raw: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "jeddah-airport-to-makkah-umrah",
    category: "service",
    from: "Jeddah Airport",
    to: "Makkah Umrah Transfer",
    h1: "Jeddah Airport to Makkah Umrah Transfer",
    metaTitle: "Jeddah Airport to Makkah Umrah Transfer | Private Taxi",
    metaDescription:
      "Private Umrah transfer from Jeddah airport (JED) to your Makkah hotel near the Haram. Meet and greet, miqat stop, luggage help and fixed prices, 24/7.",
    intro:
      "A calm, private Umrah transfer from King Abdulaziz International Airport straight to your Makkah hotel — with meet and greet at arrivals, a miqat stop if you need it, and a fixed price agreed before you land.",
    distance: "approx. 95 km",
    duration: "approx. 1 hour 20 min",
    highlights: [
      "Meet and greet inside the JED arrivals hall with a name board",
      "Miqat / ihram stop available on the way to Makkah",
      "Family vans for pilgrims travelling with luggage and elders",
      "Fixed price confirmed before you fly, with 24/7 flight tracking",
    ],
    sections: [
      {
        heading: "The first journey of your Umrah, handled with care",
        paragraphs: [
          "For most pilgrims, the road from Jeddah airport to Makkah is the true beginning of Umrah. After a long international flight, the last thing you want is to negotiate a fare at the kerb or wait for a shared car to fill up. Our private transfer removes that friction entirely: your driver is already tracking your flight, waiting inside the arrivals hall with a name board, and ready to take you and your family directly to your hotel near the Haram.",
          "The route covers roughly 95 km and takes around an hour and twenty minutes in normal conditions, running along the modern Makkah expressway. Because entry to Makkah is for Muslims only, our drivers are familiar with the pilgrim lanes at the dedicated checkpoints and keep the journey smooth. If you would rather compare it with the standard city option first, see our <a href='/routes/jeddah-to-makkah'>Jeddah to Makkah transfer</a> route page.",
        ],
      },
      {
        heading: "Meet and greet at King Abdulaziz International Airport",
        paragraphs: [
          "Jeddah's airport handles enormous banks of pilgrim flights, and arrivals halls can be busy and confusing after a long journey. Our meet and greet is designed for exactly that moment. Your driver monitors the flight, positions at the correct terminal — Terminal 1 or the seasonal Hajj Terminal — and greets you by name, then helps carry luggage to the vehicle so you never have to search or queue.",
          "This matters most for families arriving with children, elderly relatives, and several suitcases. Rather than herding everyone through a taxi rank, you step out of the terminal and into a waiting car. For a fuller picture of arrivals, terminals, and pickup at the airport itself, our <a href='/airport-transfer/jeddah-airport'>Jeddah airport transfer</a> page explains how the meet and greet works in detail.",
        ],
      },
      {
        heading: "The miqat and entering ihram",
        paragraphs: [
          "Many pilgrims travelling from Jeddah intend to enter ihram before reaching the boundaries of the Haram. If you have not entered ihram at the airport or in flight, we can pause at a suitable point so you can prepare, and drivers understand that this stop is part of the sacred routine rather than an inconvenience. Simply tell us your intention when you book and we build the time into the journey.",
          "Because the transfer is fully private, the pace is yours. There is no shared vehicle waiting on you and no meter running while you make wudu or change. This unhurried flexibility is one of the main reasons pilgrims choose a private Umrah transfer over a standard taxi, and it pairs naturally with our wider <a href='/umrah-taxi-service'>Umrah taxi service</a> across the Holy Cities.",
        ],
      },
      {
        heading: "Vehicles sized for pilgrims and their luggage",
        paragraphs: [
          "Umrah travel almost always means luggage — often more of it on the return, with Zamzam water and gifts. We offer a full range of vehicles so your group and bags travel together in comfort: a sedan for one or two pilgrims, an SUV for small families, and spacious vans or minibuses for larger groups travelling together. Tell us the number of passengers and suitcases and we match the right vehicle.",
          "Every car is clean, air-conditioned against the Makkah heat, and maintained to a comfortable standard for the motorway run. If you are continuing your pilgrimage afterwards, we also handle the onward <a href='/routes/makkah-to-madinah'>Makkah to Madinah transfer</a> and short local trips through our <a href='/makkah/makkah-hotel-to-haram-transfer'>Makkah hotel to Haram transfer</a>.",
        ],
      },
      {
        heading: "Direct drop-off at your Makkah hotel",
        paragraphs: [
          "We drive door-to-door to your hotel, whether it is in the Abraj Al-Bait complex beside the Clock Tower, the Jabal Omar development, or the wider central area around the Haram. Drivers know the access routes and drop-off points near each hotel cluster, including the road closures and rerouting that apply close to the mosque during peak prayer times.",
          "If you have not yet chosen accommodation, our <a href='/cities/makkah'>Makkah hotel transfers</a> hub lists the properties we serve near the Haram, and our <a href='/taxi-service/makkah'>Makkah taxi service</a> page covers local rides once you have arrived. Everything can be arranged as one seamless booking from the moment you land.",
        ],
      },
      {
        heading: "Family-friendly, and gentle for elderly pilgrims",
        paragraphs: [
          "A great many Umrah pilgrims travel with older parents, and the airport-to-Makkah leg can be tiring for them. A private transfer lets elderly travellers rest quietly in a comfortable seat, with the driver managing luggage and the family staying together in one vehicle. Child seats can be requested in advance for younger pilgrims.",
          "If anyone in your group needs extra help with mobility, let us know when booking so we can send a suitable vehicle and allow a little more time. This care is part of why families return to us for every leg of the journey, from arrival to the eventual <a href='/routes/makkah-to-jeddah'>Makkah to Jeddah transfer</a> home.",
        ],
      },
      {
        heading: "Fixed pricing and flight tracking",
        paragraphs: [
          "Your price is agreed before you travel and does not change with traffic, prayer-time delays, or a late-arriving flight. There is no meter and no surge pricing at busy pilgrim periods — the number we quote is the number you pay. That certainty is a relief when you are budgeting for a whole family's pilgrimage.",
          "We track your flight in real time, so if the aircraft is early or delayed the driver simply adjusts, with reasonable wait time included. You will not be charged extra for an immigration queue or a delayed bag, and you will never be left without a ride because a flight slipped.",
        ],
      },
      {
        heading: "How to book your Jeddah airport Umrah transfer",
        paragraphs: [
          "Booking is quick. Send your flight number, arrival date and time, the number of pilgrims and bags, your Makkah hotel, and whether you need a miqat stop. We confirm a fixed, all-in price and the right vehicle, usually within minutes over WhatsApp through our <a href='/get-quote'>get a quote</a> page.",
          "Whether you are arriving for Umrah in Ramadan, over a holiday peak, or in a quieter season, a private transfer turns a stressful first hour into a calm start to your pilgrimage. To plan the days that follow, browse our <a href='/ziyarat-taxi-service'>Ziyarat taxi service</a> and the <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a> once you have settled into your hotel.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is the transfer from Jeddah airport to Makkah?",
        answer:
          "The journey is about 95 km and normally takes around an hour and twenty minutes, depending on traffic and the time of day. Your driver knows the pilgrim lanes at the checkpoints into Makkah and keeps the ride as smooth as possible.",
      },
      {
        question: "Can the driver stop at the miqat so I can enter ihram?",
        answer:
          "Yes. If you have not entered ihram in flight or at the airport, tell us when booking and the driver will pause at a suitable point so you can prepare. Because the transfer is private, there is no rush and no extra meter running.",
      },
      {
        question: "Do you provide meet and greet inside the airport?",
        answer:
          "Yes. Your driver tracks your flight, waits inside the arrivals hall at the correct terminal with a name board, and helps carry your luggage to the vehicle, so there is no queuing at a taxi rank after a long flight.",
      },
      {
        question: "Is this different from a normal Jeddah to Makkah taxi?",
        answer:
          "It is the same road but focused on Umrah arrivals — meet and greet at the terminal, a miqat stop if needed, and vehicles sized for pilgrim luggage. For a general city-to-city ride, see our Jeddah to Makkah route page instead.",
      },
      {
        question: "Can non-Muslims take this transfer into Makkah?",
        answer:
          "Entry to Makkah is for Muslims only. This transfer is for pilgrims travelling to Makkah hotels; the driver follows the designated pilgrim routes at the city checkpoints.",
      },
      {
        question: "What if my flight is delayed or arrives at night?",
        answer:
          "We track your flight and the driver waits regardless of the arrival time, with reasonable wait time included. Your fixed price is not affected by a delay, an immigration queue, or a late-night landing.",
      },
    ],
    relatedTransferSlugs: ["makkah-hotel-to-haram-transfer", "makkah-ziyarat-tour"],
    relatedRouteSlugs: ["jeddah-to-makkah", "makkah-to-madinah"],
    keywords: [
      "jeddah airport to makkah umrah transfer",
      "umrah taxi from jeddah airport",
      "jeddah airport to makkah pilgrim transfer",
      "jed to makkah meet and greet",
      "private umrah transfer jeddah airport",
    ],
  },
  {
    slug: "makkah-hotel-to-haram-transfer",
    category: "service",
    from: "Makkah",
    to: "Hotel to Haram Transfer",
    h1: "Makkah Hotel to Haram Transfer",
    metaTitle: "Makkah Hotel to Haram Transfer | Private Car Service",
    metaDescription:
      "Private hotel to Masjid al-Haram transfers in Makkah. Short, comfortable rides for elderly and family pilgrims, with waiting time and fixed prices, 24/7.",
    intro:
      "A short, private ride between your Makkah hotel and the Masjid al-Haram — ideal for elderly pilgrims, families, and anyone staying a little further from the mosque who would rather not walk in the heat.",
    distance: "Short local ride",
    duration: "Flexible / on request",
    highlights: [
      "Private car between your hotel and the Haram gates",
      "Gentle option for elderly pilgrims and young children",
      "Waiting time and multiple prayer runs can be arranged",
      "Fixed local pricing with 24/7 availability",
    ],
    sections: [
      {
        heading: "A gentle way to reach the Haram",
        paragraphs: [
          "Many Makkah hotels sit within walking distance of the Masjid al-Haram, but not everyone can manage that walk comfortably — especially in the midday heat, during the crowds around peak prayers, or for pilgrims who are elderly, unwell, or travelling with small children. A short private transfer between your hotel and the mosque gates removes that strain and lets the whole family arrive calm and ready to worship.",
          "This service is deliberately simple: a comfortable, air-conditioned car that collects you from your hotel lobby and drops you as close to the Haram as the traffic management allows, then does the same on the return. It complements, rather than replaces, our <a href='/makkah/jeddah-airport-to-makkah-umrah'>Jeddah airport to Makkah Umrah transfer</a> for pilgrims who have already arrived and settled in.",
        ],
      },
      {
        heading: "Who this transfer is for",
        paragraphs: [
          "Elderly parents are the most frequent guests. After a long day of Tawaf and Sa'i, the walk back to a hotel in Jabal Omar or the outer central area can be exhausting, and a waiting car makes an enormous difference to their comfort and energy over a multi-day stay. Pilgrims recovering from illness or managing mobility issues benefit in the same way.",
          "Families with young children also find it invaluable, particularly for the Fajr and Isha prayers when little ones are tired. Rather than carrying children through busy streets, you travel together in one private vehicle. For sightseeing beyond prayer times, pair it with our <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a>.",
        ],
      },
      {
        heading: "Prayer-time routing and drop-off points",
        paragraphs: [
          "The roads immediately around the Masjid al-Haram are heavily managed, with closures and diversions that tighten in the minutes before and after each congregational prayer. Our drivers know these patterns well and choose the drop-off and pickup points that get you as close as possible while staying within the traffic rules, then advise the best gate for your direction of travel.",
          "Because timing around prayers is unpredictable, we recommend allowing a margin before each prayer. Tell us your hotel and intended prayer, and the driver plans the run accordingly. This local knowledge is the same expertise behind our full <a href='/taxi-service/makkah'>Makkah taxi service</a>.",
        ],
      },
      {
        heading: "Waiting time and multiple daily runs",
        paragraphs: [
          "Some pilgrims prefer a single drop-off and a later pickup; others want the driver to wait during a shorter visit. Both are possible. For families who want to return to the Haram several times a day, we can arrange repeated runs or a driver on call across your stay, so transport is never the thing that holds you back from worship.",
          "If you would like a dedicated vehicle for a longer period rather than single rides, that can be arranged too — a practical choice for larger groups coordinating several prayers and meals. Just describe your daily pattern and we will suggest the simplest arrangement.",
        ],
      },
      {
        heading: "Comfortable, clean, family-sized vehicles",
        paragraphs: [
          "Vehicles range from sedans for one or two pilgrims to SUVs and vans for families and small groups. Every car is clean, cool, and comfortable for the short hop to the mosque, with room for wheelchairs or a folded pushchair when needed. Child seats can be requested in advance.",
          "For elderly or less mobile pilgrims, a slightly larger vehicle makes getting in and out easier, and the driver is happy to assist. Mention any specific needs when you book and we will send an appropriate car.",
        ],
      },
      {
        heading: "Fixed local pricing, day and night",
        paragraphs: [
          "Short Makkah rides are quoted at a clear, fixed local price with no meter and no surge at busy prayer times. For pilgrims making several trips a day, we can agree a simple arrangement in advance so the cost is predictable across your whole stay rather than negotiated ride by ride.",
          "The service runs 24 hours a day, which matters in a city where worship follows the prayer clock rather than office hours. Whether it is a pre-dawn Fajr run or a late Isha return, a car can be ready.",
        ],
      },
      {
        heading: "Booking your hotel to Haram transfer",
        paragraphs: [
          "To arrange a ride, tell us your hotel, how many pilgrims are travelling, and whether you need a one-way drop, a return, or several runs through the day. We confirm a fixed price and a suitable vehicle, and you can book a single trip or a standing arrangement for your stay through our <a href='/get-quote'>get a quote</a> page.",
          "Once your local transport is sorted, plan the rest of your journey with our <a href='/routes/makkah-to-madinah'>Makkah to Madinah transfer</a> for the onward trip to the Prophet's Mosque, or the <a href='/makkah/makkah-to-cave-of-hira'>Cave of Hira transfer</a> for a Ziyarat visit between prayers.",
        ],
      },
    ],
    faqs: [
      {
        question: "How far are Makkah hotels from the Haram?",
        answer:
          "It varies. Hotels in the Abraj Al-Bait complex are steps away, while those in Jabal Omar or the outer central area are a short drive. This transfer suits anyone who prefers not to walk, especially in the heat or around busy prayers.",
      },
      {
        question: "Can the driver wait while we pray?",
        answer:
          "Yes. You can arrange a drop-off with a later pickup, ask the driver to wait for a shorter visit, or book several runs across the day. Tell us your pattern and we will suggest the simplest arrangement.",
      },
      {
        question: "Is this suitable for elderly or wheelchair users?",
        answer:
          "Yes. It is one of the most popular choices for elderly and less mobile pilgrims. Request a larger vehicle and mention any mobility needs when booking, and the driver will assist and allow extra time.",
      },
      {
        question: "How close to the Haram can you drop us?",
        answer:
          "As close as the traffic management allows, which tightens around prayer times. Drivers know the current drop-off points and the best gate for your direction, and will advise the shortest walk on the day.",
      },
      {
        question: "Can I book several trips a day for my whole stay?",
        answer:
          "Yes. We can arrange repeated daily runs or a driver on call across your stay, with a clear price agreed in advance so transport never gets in the way of your worship.",
      },
      {
        question: "Is the price fixed for these short rides?",
        answer:
          "Yes. Short Makkah rides are quoted at a fixed local price with no meter and no surge at peak prayer times. For multiple daily trips we can agree a simple, predictable arrangement upfront.",
      },
    ],
    relatedTransferSlugs: ["jeddah-airport-to-makkah-umrah", "makkah-ziyarat-tour", "makkah-to-cave-of-hira"],
    relatedRouteSlugs: ["makkah-to-madinah"],
    keywords: [
      "makkah hotel to haram transfer",
      "hotel to haram taxi makkah",
      "makkah haram shuttle",
      "transfer to masjid al haram",
      "makkah hotel to kaaba taxi",
    ],
  },
];

export const makkahServices: PointTransfer[] = raw.map((t) => ({
  ...t,
  citySlug: "makkah",
}));
