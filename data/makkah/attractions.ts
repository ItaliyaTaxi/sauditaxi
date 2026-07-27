import type { PointTransfer } from "../jeddah/types";

/**
 * Makkah Ziyarat / historical-site transfer pages (category "attraction"),
 * served at /makkah/{slug}. Written respectfully and factually about the sacred
 * sites — no invented hadith, dates, or rulings. Makkah entry is for Muslims
 * only; the audience is pilgrims. Paragraph strings may contain inline
 * single-quoted <a href='/...'> links.
 */
const raw: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "makkah-ziyarat-tour",
    category: "attraction",
    from: "Makkah",
    to: "Ziyarat Tour",
    h1: "Makkah Ziyarat Tour by Private Car",
    metaTitle: "Makkah Ziyarat Tour | Private Car with Driver",
    metaDescription:
      "Private Makkah Ziyarat tour by car — the holy sites of the Hajj, Jabal al-Noor, Jabal Thawr and more, with an experienced driver, waiting time and fixed pricing.",
    intro:
      "See the historic Islamic sites around Makkah in comfort — the sites of the Hajj at Mina, Arafat and Muzdalifah, the mountains of Hira and Thawr, and Masjid Aisha — with your own private car, driver, and unhurried timing.",
    duration: "Half or full day",
    highlights: [
      "Private car and driver for a flexible Ziyarat itinerary",
      "The Hajj sites: Mina, Arafat, Muzdalifah and Jabal Rahmah",
      "Views of Jabal al-Noor (Cave of Hira) and Jabal Thawr",
      "Fixed pricing, waiting time, and air-conditioned comfort",
    ],
    sections: [
      {
        heading: "What a Makkah Ziyarat tour includes",
        paragraphs: [
          "A Ziyarat tour is a visit to the historic Islamic sites around Makkah, undertaken to reflect on the events of the Prophet Muhammad's (peace be upon him) life and the rites of the Hajj. Our private tour typically takes in the plains of Mina, the plain and Mount of Arafat with Jabal al-Rahmah, and Muzdalifah, alongside views of Jabal al-Noor and Jabal Thawr and a stop at Masjid Aisha (the Tan'im miqat).",
          "The exact route is yours to shape. Some pilgrims want a broad half-day overview, while others prefer a fuller day with more time at each site. Because the car and driver are dedicated to you, the itinerary flexes around your energy, your prayers, and the crowds — quite unlike a fixed coach tour. To arrange the whole trip end to end, see our wider <a href='/ziyarat-taxi-service'>Ziyarat taxi service</a>.",
        ],
      },
      {
        heading: "The holy sites of the Hajj",
        paragraphs: [
          "Mina, Arafat, and Muzdalifah are the sites central to the Hajj, and visiting them outside the pilgrimage season lets you understand the rites in calm and space. At Arafat, the gentle rise of Jabal al-Rahmah is the most recognised landmark, and your driver can explain the layout of the plains as you travel between them.",
          "These sites lie a short drive apart to the east of Makkah, and a private car links them efficiently without the long waits of group transport. If you are combining your visit with the onward pilgrimage, our <a href='/routes/makkah-to-madinah'>Makkah to Madinah transfer</a> continues the journey to the Prophet's Mosque.",
        ],
      },
      {
        heading: "Jabal al-Noor and Jabal Thawr",
        paragraphs: [
          "Two mountains feature on almost every Ziyarat itinerary. Jabal al-Noor holds the Cave of Hira, where the first revelation came to the Prophet (peace be upon him), while Jabal Thawr holds the cave where he and Abu Bakr sheltered during the Hijrah. Both involve long, steep climbs to the caves themselves, so many visitors view and reflect from the base.",
          "We offer dedicated transfers to each if you wish to spend longer there — see our <a href='/makkah/makkah-to-cave-of-hira'>Cave of Hira transfer</a> and <a href='/makkah/makkah-to-jabal-thawr'>Jabal Thawr transfer</a>. On the general Ziyarat tour, your driver allows time for photographs and quiet reflection at each.",
        ],
      },
      {
        heading: "Why a private car suits Ziyarat",
        paragraphs: [
          "Ziyarat involves several stops spread across the outskirts of Makkah, often in strong heat. A private, air-conditioned car with a waiting driver means you move between sites in comfort, pause as long as you like, and never worry about finding onward transport in areas where taxis are scarce.",
          "It is also the gentlest option for families travelling with elderly relatives or children, who can rest in the cool cabin between stops. Our <a href='/taxi-service/makkah'>Makkah taxi service</a> provides the same comfort for everyday rides around the city.",
        ],
      },
      {
        heading: "Respectful, knowledgeable drivers",
        paragraphs: [
          "Our drivers are familiar with the Ziyarat sites and their significance, and they conduct the tour with the respect these places deserve. They can point out the landmarks and explain the geography of the sites, while leaving the spiritual reflection entirely to you.",
          "We do not offer religious rulings or invent history; the focus is on comfortable, reliable transport and accurate practical guidance so you can concentrate on your visit.",
        ],
      },
      {
        heading: "Comfort, timing, and vehicles",
        paragraphs: [
          "Tours are run in clean, air-conditioned sedans, SUVs, vans, or minibuses depending on your group size, with room for everyone to travel together. Water and unhurried timing make a real difference in the Makkah heat, especially on a full-day itinerary.",
          "We plan the tour around prayer times so you can pray at the appropriate points, and the driver adjusts the order of stops to avoid the busiest periods where possible.",
        ],
      },
      {
        heading: "Booking your Ziyarat tour",
        paragraphs: [
          "Tell us your hotel, how many are travelling, and whether you would like a half or full day, and we confirm a suitable vehicle and a fixed, all-in price with waiting time included. Booking is quick over WhatsApp through our <a href='/get-quote'>get a quote</a> page.",
          "Arriving for Umrah first? Our <a href='/makkah/jeddah-airport-to-makkah-umrah'>Jeddah airport to Makkah Umrah transfer</a> brings you from the airport, and the <a href='/makkah/makkah-hotel-to-haram-transfer'>hotel to Haram transfer</a> handles your prayer-time rides throughout your stay.",
        ],
      },
    ],
    faqs: [
      { question: "What sites does the Makkah Ziyarat tour cover?", answer: "A typical tour visits the Hajj sites of Mina, Arafat (with Jabal al-Rahmah) and Muzdalifah, with views of Jabal al-Noor and Jabal Thawr and a stop at Masjid Aisha. The exact route is flexible and shaped around your time and interests." },
      { question: "How long does the Ziyarat tour take?", answer: "It can be a half day for a broad overview or a full day for more time at each site. Because the car and driver are dedicated to you, the pace and duration are yours to set." },
      { question: "Do we climb the mountains of Hira and Thawr?", answer: "The climbs to the caves are long and steep, so many visitors view and reflect from the base. If you want longer at either, we offer dedicated Cave of Hira and Jabal Thawr transfers." },
      { question: "Is the tour suitable for elderly pilgrims and families?", answer: "Yes. A private, air-conditioned car with a waiting driver is the gentlest way to visit the spread-out sites, letting elderly travellers and children rest in comfort between stops." },
      { question: "Can we pray during the tour?", answer: "Yes. We plan the itinerary around prayer times so you can pray at appropriate points, and the driver adjusts the order of stops to help you avoid the busiest periods." },
      { question: "Is the price fixed and does it include waiting time?", answer: "Yes. You agree a fixed, all-in price before the tour that includes the driver's waiting time at each stop, with no meter and no surge pricing." },
    ],
    relatedTransferSlugs: [
      "makkah-to-cave-of-hira",
      "makkah-to-jabal-thawr",
      "makkah-historical-sites-tour",
      "makkah-to-mina",
      "makkah-to-muzdalifah",
      "makkah-to-arafat",
    ],
    relatedRouteSlugs: ["makkah-to-madinah", "jeddah-to-makkah"],
    keywords: [
      "makkah ziyarat tour",
      "makkah ziyarat by car",
      "ziyarat tour makkah private driver",
      "makkah holy sites tour",
      "mina arafat muzdalifah tour",
    ],
  },
  {
    slug: "makkah-to-cave-of-hira",
    category: "attraction",
    from: "Makkah",
    to: "Cave of Hira (Jabal al-Noor)",
    h1: "Makkah to Cave of Hira (Jabal al-Noor) Transfer",
    metaTitle: "Makkah to Cave of Hira Transfer | Jabal al-Noor Taxi",
    metaDescription:
      "Private transfer from your Makkah hotel to Jabal al-Noor, the Cave of Hira. About 5 km, with a waiting driver, comfortable vehicle and fixed pricing.",
    intro:
      "A private transfer from your Makkah hotel to Jabal al-Noor, the mountain of the Cave of Hira where the first revelation came to the Prophet Muhammad (peace be upon him) — with a driver who waits while you visit.",
    distance: "approx. 5 km from the Haram",
    duration: "2–3 hours with waiting",
    highlights: [
      "Direct ride to the foot of Jabal al-Noor",
      "Driver waits while you visit and reflect",
      "Comfortable, air-conditioned vehicle for the short trip",
      "Fixed pricing and family-friendly vehicles",
    ],
    sections: [
      {
        heading: "Jabal al-Noor and the Cave of Hira",
        paragraphs: [
          "Jabal al-Noor, the Mountain of Light, rises a few kilometres northeast of the Masjid al-Haram. Near its summit is the Cave of Hira, where the Prophet Muhammad (peace be upon him) received the first revelation of the Qur'an. For many pilgrims, seeing the mountain is a deeply moving part of their time in Makkah.",
          "The site sits about 5 km from the central hotel area, a short drive that a private car covers easily. Because parking and onward transport near the mountain can be difficult, having a driver who waits for you makes the visit far simpler than relying on a one-way taxi.",
        ],
      },
      {
        heading: "What to expect on arrival",
        paragraphs: [
          "The climb to the cave itself is long and steep, taking most people well over an hour each way on rough steps, and it is demanding in the heat. Many visitors choose to view and reflect from the base of the mountain rather than attempt the full ascent, which is entirely appropriate.",
          "If you do intend to climb, go early in the day, carry water, and allow plenty of time; your driver can wait throughout. We are happy to advise on realistic timings when you book, and to combine the visit with our broader <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a>.",
        ],
      },
      {
        heading: "Why book a private transfer with waiting",
        paragraphs: [
          "The value of this service is the waiting driver. Whether you spend twenty minutes at the base or several hours climbing, your car is there when you return, cool and ready, with no need to find a ride back to your hotel in an area where taxis are unpredictable.",
          "This is especially reassuring for families and for anyone visiting outside the busiest hours. For your everyday prayer-time rides, our <a href='/makkah/makkah-hotel-to-haram-transfer'>Makkah hotel to Haram transfer</a> offers the same waiting-driver convenience closer to the mosque.",
        ],
      },
      {
        heading: "Comfort and vehicles",
        paragraphs: [
          "The transfer uses a clean, air-conditioned vehicle sized to your group, from a sedan for one or two visitors to an SUV or van for families. The short drive is comfortable, and the cool cabin is a welcome refuge before and after time in the sun.",
          "Child seats are available on request, and if anyone in your group has mobility needs, let us know so we can send a suitable vehicle and allow extra time.",
        ],
      },
      {
        heading: "Respect and accuracy",
        paragraphs: [
          "We approach this sacred site with respect. Our drivers can explain where the mountain and cave are and share the practical realities of a visit, but we do not offer religious rulings or embellish the history.",
          "The focus is on getting you there and back in comfort and safety so you can reflect on the significance of the place in your own way.",
        ],
      },
      {
        heading: "Booking your Cave of Hira transfer",
        paragraphs: [
          "Tell us your hotel, how long you would like at the mountain, and your group size, and we confirm a fixed price with waiting time included. You can book in minutes over WhatsApp via our <a href='/get-quote'>get a quote</a> page.",
          "Arriving for Umrah? Start with our <a href='/makkah/jeddah-airport-to-makkah-umrah'>Jeddah airport to Makkah Umrah transfer</a>, and consider pairing the Cave of Hira with a visit to <a href='/makkah/makkah-to-jabal-thawr'>Jabal Thawr</a> on the same outing.",
        ],
      },
    ],
    faqs: [
      { question: "How far is the Cave of Hira from Makkah hotels?", answer: "Jabal al-Noor, which holds the Cave of Hira, is about 5 km northeast of the Haram — a short drive from the central hotel area that a private car covers easily." },
      { question: "Can I climb up to the Cave of Hira?", answer: "You can, but the climb is long and steep and takes most people well over an hour each way in the heat. Many visitors reflect from the base instead. Go early, carry water, and allow plenty of time if you climb." },
      { question: "Will the driver wait while I visit?", answer: "Yes. Your driver waits whether you stay twenty minutes at the base or several hours climbing, so your car is ready for the return with no need to find another ride." },
      { question: "Is this suitable for elderly visitors?", answer: "The drive is easy and comfortable, though the climb to the cave is strenuous. Elderly visitors often reflect from the base. Request a larger vehicle and tell us any mobility needs when booking." },
      { question: "Can I combine it with other Ziyarat sites?", answer: "Yes. The Cave of Hira pairs well with Jabal Thawr or a fuller Makkah Ziyarat tour, all of which we can arrange with the same private car and driver." },
      { question: "Is the price fixed?", answer: "Yes. You agree a fixed, all-in price before travel that includes the driver's waiting time, with no meter and no surge pricing." },
    ],
    relatedTransferSlugs: ["makkah-ziyarat-tour", "makkah-to-jabal-thawr", "makkah-hotel-to-haram-transfer"],
    relatedRouteSlugs: ["jeddah-to-makkah"],
    keywords: [
      "makkah to cave of hira taxi",
      "jabal al-noor transfer",
      "cave of hira transport",
      "mountain of light makkah taxi",
      "hira cave private car",
    ],
  },
  {
    slug: "makkah-to-jabal-thawr",
    category: "attraction",
    from: "Makkah",
    to: "Jabal Thawr",
    h1: "Makkah to Jabal Thawr Transfer",
    metaTitle: "Makkah to Jabal Thawr Transfer | Cave of Thawr Taxi",
    metaDescription:
      "Private transfer from your Makkah hotel to Jabal Thawr, the mountain of the Cave of Thawr. About 8 km south, with a waiting driver and fixed pricing.",
    intro:
      "A private transfer from your Makkah hotel to Jabal Thawr, the mountain south of the city where the Prophet Muhammad (peace be upon him) and Abu Bakr sheltered in the Cave of Thawr during the Hijrah — with a driver who waits for you.",
    distance: "approx. 8 km south of the Haram",
    duration: "2–3 hours with waiting",
    highlights: [
      "Direct ride to the foot of Jabal Thawr",
      "Driver waits while you visit and reflect",
      "Comfortable, air-conditioned vehicle for the short trip",
      "Fixed pricing and family-friendly vehicles",
    ],
    sections: [
      {
        heading: "Jabal Thawr and the Cave of Thawr",
        paragraphs: [
          "Jabal Thawr stands to the south of Makkah, roughly 8 km from the Haram. It is remembered as the mountain of the Cave of Thawr, where the Prophet Muhammad (peace be upon him) and his companion Abu Bakr al-Siddiq took shelter for three nights during the migration, the Hijrah, to Madinah.",
          "As with Jabal al-Noor, the mountain holds deep significance for pilgrims, and many include it in their Ziyarat. The short drive south is straightforward by private car, and a waiting driver removes the difficulty of finding transport back from the quieter southern outskirts.",
        ],
      },
      {
        heading: "What to expect at the mountain",
        paragraphs: [
          "The cave sits high on the mountain, and the climb is long, steep, and rocky — generally considered more demanding than Jabal al-Noor. It is not a casual walk, and many visitors choose to view and reflect from lower down rather than attempt the full ascent.",
          "If you plan to climb, set out early, wear suitable footwear, carry water, and allow several hours; your driver will wait throughout. We can advise on realistic expectations when you book, and combine the trip with our <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a>.",
        ],
      },
      {
        heading: "The convenience of a waiting driver",
        paragraphs: [
          "Because Jabal Thawr is away from the busy central district, onward taxis can be hard to find, so a private transfer with a waiting driver is the practical choice. However long you spend at the mountain, your car is ready for the return journey to your hotel.",
          "This reliability matters most for families and for visits outside peak hours. For rides around the mosque during your stay, our <a href='/makkah/makkah-hotel-to-haram-transfer'>hotel to Haram transfer</a> offers the same convenience.",
        ],
      },
      {
        heading: "Comfort and vehicles",
        paragraphs: [
          "The transfer uses a clean, air-conditioned vehicle matched to your group size, from a sedan to a spacious van. The southern drive is short and comfortable, and the cool cabin is welcome before and after time outdoors in the heat.",
          "Child seats are available on request, and we can send a larger, easier-access vehicle for anyone with mobility needs — just tell us when booking.",
        ],
      },
      {
        heading: "A respectful visit",
        paragraphs: [
          "We treat Jabal Thawr with the respect it deserves. Our drivers can help you locate the mountain and understand the practicalities of a visit, without offering religious rulings or adding to the historical account.",
          "Our role is simply to bring you there and back safely and comfortably, so your reflection at the site is entirely your own.",
        ],
      },
      {
        heading: "Booking your Jabal Thawr transfer",
        paragraphs: [
          "Share your hotel, how long you would like at the mountain, and your group size, and we confirm a fixed price with waiting time included. Booking takes only minutes over WhatsApp through our <a href='/get-quote'>get a quote</a> page.",
          "Many pilgrims pair Jabal Thawr with the <a href='/makkah/makkah-to-cave-of-hira'>Cave of Hira</a> on one outing, and begin their trip with our <a href='/makkah/jeddah-airport-to-makkah-umrah'>Jeddah airport to Makkah Umrah transfer</a>.",
        ],
      },
    ],
    faqs: [
      { question: "How far is Jabal Thawr from Makkah?", answer: "Jabal Thawr is about 8 km south of the Haram, a short and straightforward drive by private car from the central hotel area." },
      { question: "Is the climb up Jabal Thawr difficult?", answer: "Yes. The climb to the Cave of Thawr is long, steep, and rocky, and is generally considered harder than Jabal al-Noor. Many visitors reflect from lower down. If you climb, go early with water and suitable footwear." },
      { question: "Does the driver wait at the mountain?", answer: "Yes. Your driver waits however long you spend, so your car is ready for the return journey — important here, as taxis are scarce in the quieter southern outskirts." },
      { question: "Can elderly pilgrims visit Jabal Thawr?", answer: "The drive is easy, but the climb is strenuous, so elderly visitors usually reflect from the base. Request a larger, easier-access vehicle and tell us any mobility needs when booking." },
      { question: "Can I visit both Jabal Thawr and the Cave of Hira?", answer: "Yes. Many pilgrims combine the two on a single outing, or include them in a fuller Ziyarat tour, all arranged with the same private car and driver." },
      { question: "Is the price fixed with waiting included?", answer: "Yes. You agree a fixed, all-in price before travel that includes the driver's waiting time, with no meter and no surge pricing." },
    ],
    relatedTransferSlugs: ["makkah-ziyarat-tour", "makkah-to-cave-of-hira", "makkah-hotel-to-haram-transfer"],
    relatedRouteSlugs: ["jeddah-to-makkah"],
    keywords: [
      "makkah to jabal thawr taxi",
      "cave of thawr transfer",
      "jabal thawr private car",
      "thawr mountain makkah taxi",
      "jabal thawr ziyarat transport",
    ],
  },
  {
    slug: "makkah-historical-sites-tour",
    category: "attraction",
    from: "Makkah",
    to: "Historical Sites Tour",
    h1: "Makkah Historical Sites Tour by Private Car",
    metaTitle: "Makkah Historical Sites Tour | Private Heritage Car Tour",
    metaDescription:
      "Private Makkah historical sites tour by car — the Makkah Museum, Hudaybiyyah, heritage landmarks and the Hajj plains, with a knowledgeable driver.",
    intro:
      "A private, heritage-focused tour of Makkah's historical landmarks and museums — from the Makkah Museum and the Hudaybiyyah area to the plains of the Hajj — with an air-conditioned car, a knowledgeable driver, and a flexible pace.",
    duration: "Half day",
    highlights: [
      "Heritage-focused itinerary around Makkah's landmarks",
      "Makkah Museum and the Hudaybiyyah historical area",
      "Context on the Hajj sites and the Clock Tower district",
      "Private air-conditioned car with a knowledgeable driver",
    ],
    sections: [
      {
        heading: "A heritage tour of Makkah",
        paragraphs: [
          "Where the Ziyarat tour focuses on the spiritual sites of the Hajj and the Prophet's (peace be upon him) life, this historical sites tour takes a broader heritage view — the museums, historic areas, and landmarks that tell the story of Makkah through time. It is ideal for pilgrims who want context and history alongside their worship.",
          "The tour is private and flexible, so you can dwell on the places that interest you most. It complements rather than repeats our <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a>, and many visitors do both on separate days.",
        ],
      },
      {
        heading: "The Makkah Museum and heritage collections",
        paragraphs: [
          "The Makkah Museum, housed in the historic Al-Zahir Palace, gathers artefacts, manuscripts, and exhibits on the history of the city and the development of the two Holy Mosques. It is an excellent starting point for understanding how Makkah has grown across the centuries.",
          "Your driver brings you to the museum and waits while you explore, then continues the tour at your pace. This waiting-driver model runs through all our services, including the everyday <a href='/makkah/makkah-hotel-to-haram-transfer'>hotel to Haram transfer</a>.",
        ],
      },
      {
        heading: "The Hudaybiyyah area",
        paragraphs: [
          "To the west of Makkah lies the historic area associated with Hudaybiyyah, remembered for the treaty of that name, where Masjid al-Hudaybiyyah stands near the boundary of the Haram. It is a meaningful stop for visitors interested in the events of early Islamic history.",
          "The site is a short drive out of the city, easily included in a half-day itinerary. Your driver explains the geography and significance without offering religious interpretation, keeping the focus on accurate, practical context.",
        ],
      },
      {
        heading: "Context on the Hajj plains and the Clock Tower",
        paragraphs: [
          "A historical tour naturally passes the plains of Mina, Arafat, and Muzdalifah, and your driver can explain how these sites function during the Hajj and how the infrastructure around them has developed. Back in the centre, the towering Abraj Al-Bait Clock Tower represents modern Makkah and its transformation.",
          "Seeing the ancient and the modern side by side gives a fuller sense of the city. For deeper spiritual visits to the Hajj sites themselves, the dedicated <a href='/ziyarat-taxi-service'>Ziyarat taxi service</a> is the better fit.",
        ],
      },
      {
        heading: "Why a private heritage tour works best",
        paragraphs: [
          "Makkah's historical sites are spread across the city and its outskirts, and a private, air-conditioned car with a waiting driver lets you cover them comfortably in half a day. You set the pace, linger where you like, and avoid the long waits of group transport in the heat.",
          "Families and older visitors especially appreciate the comfort and flexibility. For local rides beyond the tour, our <a href='/taxi-service/makkah'>Makkah taxi service</a> covers the whole city.",
        ],
      },
      {
        heading: "Knowledgeable, respectful drivers",
        paragraphs: [
          "Our drivers know Makkah's landmarks and their history and are happy to share accurate context as you travel. They treat every site with respect and do not invent history or offer religious rulings, leaving reflection and interpretation to you.",
          "The tour is about comfortable, reliable transport and genuine local knowledge, so you come away with a richer understanding of the city.",
        ],
      },
      {
        heading: "Booking your historical sites tour",
        paragraphs: [
          "Tell us your hotel, group size, and the landmarks you most want to see, and we confirm a suitable vehicle and a fixed, all-in price for the half day. Booking is quick over WhatsApp via our <a href='/get-quote'>get a quote</a> page.",
          "Arriving for Umrah first? Begin with our <a href='/makkah/jeddah-airport-to-makkah-umrah'>Jeddah airport to Makkah Umrah transfer</a>, and plan the onward pilgrimage with the <a href='/routes/makkah-to-madinah'>Makkah to Madinah transfer</a>.",
        ],
      },
    ],
    faqs: [
      { question: "How is the historical tour different from the Ziyarat tour?", answer: "The Ziyarat tour focuses on the spiritual sites of the Hajj and the Prophet's (peace be upon him) life, while the historical tour takes a broader heritage view — museums, historic areas, and landmarks. Many visitors do both on separate days." },
      { question: "What does the historical sites tour include?", answer: "A typical half-day covers the Makkah Museum, the Hudaybiyyah historical area, context on the Hajj plains, and the modern Clock Tower district. The route is flexible and shaped around your interests." },
      { question: "How long does the tour take?", answer: "It is usually a half-day itinerary, though it can be extended. Because the car and driver are dedicated to you, the pace and duration are yours to decide." },
      { question: "Will the driver explain the sites?", answer: "Yes. Our drivers share accurate historical and practical context about the landmarks, while treating each site with respect and leaving religious interpretation to you." },
      { question: "Is the tour comfortable for families?", answer: "Yes. A private, air-conditioned car with a waiting driver lets families and older visitors explore the spread-out sites comfortably, resting in the cool cabin between stops." },
      { question: "Is the price fixed?", answer: "Yes. You agree a fixed, all-in price before the tour, including the driver's waiting time, with no meter and no surge pricing." },
    ],
    relatedTransferSlugs: ["makkah-ziyarat-tour", "makkah-to-cave-of-hira", "makkah-to-jabal-thawr"],
    relatedRouteSlugs: ["makkah-to-madinah", "jeddah-to-makkah"],
    keywords: [
      "makkah historical sites tour",
      "makkah heritage tour by car",
      "makkah museum tour",
      "hudaybiyyah visit makkah",
      "makkah landmarks private tour",
    ],
  },
  {
    slug: "makkah-to-mina",
    category: "attraction",
    from: "Makkah",
    to: "Mina",
    h1: "Makkah to Mina Transfer",
    metaTitle: "Makkah to Mina Transfer | Private Car with Driver",
    metaDescription:
      "Private transfer from your Makkah hotel to Mina, about 6 km east of the Haram. Waiting driver, fixed pricing, and comfortable vehicles for Hajj-season visits.",
    intro:
      "A private transfer from your Makkah hotel to Mina, the valley of white tents a short drive east of the Haram, central to the rites of Hajj — with a driver who waits while you visit.",
    distance: "approx. 6 km east of the Haram",
    duration: "1–2 hours with waiting (longer during Hajj)",
    highlights: [
      "Direct ride to Mina from your Makkah hotel",
      "Driver waits or returns at a time you choose",
      "Comfortable, air-conditioned vehicle for the short trip",
      "Fixed pricing, with allowance for Hajj-season traffic",
    ],
    sections: [
      {
        heading: "Mina and its place in the Hajj",
        paragraphs: [
          "Mina is a valley a short distance east of Masjid al-Haram, known for the vast tent city that houses pilgrims during the days of Hajj and for the Jamarat, where the symbolic stoning ritual takes place. Outside the Hajj season, the valley is far quieter, and many visitors come to see the site and its significance for themselves.",
          "The distance from central Makkah is about 6 kilometres, ordinarily a short drive, though during the Hajj period road access and pedestrian movement are tightly managed by the authorities, and travel times can be considerably longer. Our <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a> also includes Mina as part of a wider itinerary if you would like to see several Hajj sites in one outing.",
        ],
      },
      {
        heading: "Visiting outside the Hajj season",
        paragraphs: [
          "For most of the year, Mina is accessible by private car with none of the crowd management in place during Hajj, and a visit is straightforward and unhurried. Your driver can wait while you look around or bring you back at an agreed time.",
          "During Hajj itself, access is heavily restricted to pilgrims performing the rites under official arrangements, and general sightseeing transfers are not appropriate at that time — we advise checking with us on current access before booking a visit close to the Hajj dates.",
        ],
      },
      {
        heading: "Comfort and vehicles",
        paragraphs: [
          "The transfer runs in a clean, air-conditioned vehicle sized to your group, from a sedan to a van for larger families. Given Makkah's heat, the short ride is a welcome contrast to time spent outdoors at the site.",
          "Child seats are available on request, and we can advise on realistic timing for your visit when you book.",
        ],
      },
      {
        heading: "Booking your Mina transfer",
        paragraphs: [
          "Tell us your hotel, preferred timing, and whether you would like the driver to wait, and we confirm a fixed price before you travel. Booking takes a few minutes over WhatsApp through our <a href='/get-quote'>get a quote</a> page.",
          "Many visitors combine Mina with <a href='/makkah/makkah-to-muzdalifah'>Muzdalifah</a> and <a href='/makkah/makkah-to-arafat'>Arafat</a> on the same outing, or as part of our broader <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a>.",
        ],
      },
    ],
    faqs: [
      { question: "How far is Mina from Makkah hotels?", answer: "Mina is about 6 kilometres east of the Haram, ordinarily a short drive by private car outside the Hajj period." },
      { question: "Can I visit Mina at any time of year?", answer: "Outside the Hajj season, yes — the valley is accessible and a visit is straightforward. During Hajj itself, access is restricted to pilgrims performing the rites, so general sightseeing is not appropriate then." },
      { question: "Will the driver wait for me at Mina?", answer: "Yes, if you would like. Tell us your plans when booking and we will either wait or return at an agreed time." },
      { question: "Is Mina included in the Makkah Ziyarat tour?", answer: "Yes. Our combined Makkah Ziyarat tour visits Mina alongside Arafat, Muzdalifah, and other historic sites in one itinerary, if you would prefer to see several places together." },
      { question: "Is the transfer suitable for families?", answer: "Yes. We provide air-conditioned sedans, SUVs, and vans sized to your group, with child seats available on request." },
      { question: "Is the price fixed?", answer: "Yes. The fare is agreed before you travel, with allowance made for any Hajj-season traffic restrictions, and does not change once confirmed." },
    ],
    relatedTransferSlugs: ["makkah-to-muzdalifah", "makkah-to-arafat", "makkah-ziyarat-tour"],
    relatedRouteSlugs: ["jeddah-to-makkah"],
    keywords: [
      "makkah to mina taxi",
      "mina transfer makkah",
      "mina private car",
      "mina hajj transport",
      "makkah mina taxi service",
    ],
  },
  {
    slug: "makkah-to-muzdalifah",
    category: "attraction",
    from: "Makkah",
    to: "Muzdalifah",
    h1: "Makkah to Muzdalifah Transfer",
    metaTitle: "Makkah to Muzdalifah Transfer | Private Car with Driver",
    metaDescription:
      "Private transfer from your Makkah hotel to Muzdalifah, the open plain between Mina and Arafat. Waiting driver, fixed pricing, comfortable vehicles.",
    intro:
      "A private transfer from your Makkah hotel to Muzdalifah, the open plain between Mina and Arafat where pilgrims gather overnight during Hajj — with a driver who waits while you visit.",
    distance: "approx. 9 km east of the Haram",
    duration: "1–2 hours with waiting (longer during Hajj)",
    highlights: [
      "Direct ride to Muzdalifah from your Makkah hotel",
      "Driver waits or returns at a time you choose",
      "Comfortable, air-conditioned vehicle for the short trip",
      "Fixed pricing, with allowance for Hajj-season traffic",
    ],
    sections: [
      {
        heading: "Muzdalifah and its place in the Hajj",
        paragraphs: [
          "Muzdalifah is an open plain lying between Mina and Arafat, about 9 kilometres from the Haram. During Hajj, pilgrims travel here after the Day of Arafah to spend the night in the open, and it is where many gather pebbles for the stoning ritual carried out at Mina.",
          "Outside the Hajj period, Muzdalifah is a quiet, largely open site, and a private transfer is a simple way to see the plain and understand its place in the wider Hajj journey. Our <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a> covers Muzdalifah alongside Mina and Arafat for visitors who want a fuller picture of the Hajj sites.",
        ],
      },
      {
        heading: "Visiting outside the Hajj season",
        paragraphs: [
          "For most of the year, Muzdalifah is easily reached by private car and a visit is unhurried, with your driver waiting or returning at a time that suits you. There is little formal infrastructure at the site itself, since its significance is tied specifically to the days of Hajj.",
          "As with the other Hajj sites, access during Hajj itself is managed for pilgrims performing the rites, and general sightseeing transfers are not suitable during that period — ask us about current access if your visit falls close to the Hajj dates.",
        ],
      },
      {
        heading: "Comfort and vehicles",
        paragraphs: [
          "We provide a clean, air-conditioned vehicle matched to your group, from a sedan to a van for larger parties, so the short desert-plain drive stays comfortable regardless of the heat outside.",
          "Child seats are available on request, and we can advise on realistic timing when you book.",
        ],
      },
      {
        heading: "Booking your Muzdalifah transfer",
        paragraphs: [
          "Share your hotel and preferred timing, and we confirm a fixed price before you travel. Booking is quick over WhatsApp through our <a href='/get-quote'>get a quote</a> page.",
          "Muzdalifah pairs naturally with <a href='/makkah/makkah-to-mina'>Mina</a> and <a href='/makkah/makkah-to-arafat'>Arafat</a> on the same trip, or as part of our combined <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a>.",
        ],
      },
    ],
    faqs: [
      { question: "How far is Muzdalifah from Makkah?", answer: "Muzdalifah is about 9 kilometres from the Haram, lying between Mina and Arafat, and is a short drive by private car outside the Hajj period." },
      { question: "What happens at Muzdalifah during Hajj?", answer: "Pilgrims travel there after the Day of Arafah to spend the night in the open and gather pebbles used in the stoning ritual at Mina. Outside Hajj, the site is quiet and open to visit." },
      { question: "Can I visit Muzdalifah year-round?", answer: "Outside the Hajj period, yes. During Hajj itself, access is managed for pilgrims performing the rites, so we advise checking current access if your visit is close to the Hajj dates." },
      { question: "Is Muzdalifah included in the Ziyarat tour?", answer: "Yes. Our Makkah Ziyarat tour includes Muzdalifah along with Mina, Arafat, and other historic sites for visitors who want to see several places together." },
      { question: "Will the driver wait at the site?", answer: "Yes, if you would like. Tell us your plans when booking and we will wait or return at an agreed time." },
      { question: "Is the price fixed?", answer: "Yes. The fare is agreed before travel and does not change, with allowance made for any Hajj-season access restrictions." },
    ],
    relatedTransferSlugs: ["makkah-to-mina", "makkah-to-arafat", "makkah-ziyarat-tour"],
    relatedRouteSlugs: ["jeddah-to-makkah"],
    keywords: [
      "makkah to muzdalifah taxi",
      "muzdalifah transfer",
      "muzdalifah private car",
      "muzdalifah hajj transport",
      "makkah muzdalifah taxi service",
    ],
  },
  {
    slug: "makkah-to-arafat",
    category: "attraction",
    from: "Makkah",
    to: "Arafat",
    h1: "Makkah to Arafat (Jabal al-Rahmah) Transfer",
    metaTitle: "Makkah to Arafat Transfer | Jabal al-Rahmah Private Car",
    metaDescription:
      "Private transfer from your Makkah hotel to Arafat and Jabal al-Rahmah, about 20 km southeast of the Haram. Waiting driver, fixed pricing, comfortable vehicles.",
    intro:
      "A private transfer from your Makkah hotel to the plain of Arafat and Jabal al-Rahmah, the Mount of Mercy, central to the Day of Arafah during Hajj — with a driver who waits while you visit.",
    distance: "approx. 20 km southeast of the Haram",
    duration: "2–3 hours with waiting (longer during Hajj)",
    highlights: [
      "Direct ride to Arafat and Jabal al-Rahmah",
      "Driver waits or returns at a time you choose",
      "Comfortable, air-conditioned vehicle for the longer drive",
      "Fixed pricing, with allowance for Hajj-season traffic",
    ],
    sections: [
      {
        heading: "Arafat and Jabal al-Rahmah",
        paragraphs: [
          "The plain of Arafat lies about 20 kilometres southeast of the Haram, and standing here on the Day of Arafah is a central rite of the Hajj. The most recognised landmark on the plain is Jabal al-Rahmah, the Mount of Mercy, a modest hill that pilgrims and visitors climb for its view over the surrounding plain.",
          "Outside the Hajj season, Arafat is quiet and straightforward to visit by private car, with the drive taking a little longer than the closer sites of Mina and Muzdalifah. Our <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a> includes Arafat alongside the other Hajj sites in one flexible itinerary.",
        ],
      },
      {
        heading: "Visiting outside the Hajj season",
        paragraphs: [
          "For most of the year, the plain and Jabal al-Rahmah are open and accessible, and a private transfer lets you take the time to walk the hill and take in the surroundings without the crowds of the Hajj period. Comfortable footwear is worth bringing if you plan to climb the mount, as the ground is uneven.",
          "During Hajj itself, Arafat is reserved for pilgrims performing the standing rite, and general sightseeing is not appropriate then — we advise checking current access with us if your visit falls near the Hajj dates.",
        ],
      },
      {
        heading: "Comfort for the longer drive",
        paragraphs: [
          "At around 20 kilometres each way, this is one of the longer point-to-point Ziyarat transfers, so we use a comfortable, air-conditioned vehicle matched to your group size, from a sedan to a van for larger families.",
          "Child seats are available on request, and if anyone in your group has mobility needs, let us know so we can plan accordingly around the uneven ground near Jabal al-Rahmah.",
        ],
      },
      {
        heading: "Booking your Arafat transfer",
        paragraphs: [
          "Share your hotel, group size, and preferred timing, and we confirm a fixed price with waiting time included. Booking takes a few minutes over WhatsApp through our <a href='/get-quote'>get a quote</a> page.",
          "Arafat is often combined with <a href='/makkah/makkah-to-mina'>Mina</a> and <a href='/makkah/makkah-to-muzdalifah'>Muzdalifah</a> on the same outing, following the route of the Hajj, or arranged as part of our <a href='/makkah/makkah-ziyarat-tour'>Makkah Ziyarat tour</a>.",
        ],
      },
    ],
    faqs: [
      { question: "How far is Arafat from Makkah?", answer: "The plain of Arafat is about 20 kilometres southeast of the Haram, making it one of the longer Ziyarat transfers, at around two to three hours including time at the site." },
      { question: "What is Jabal al-Rahmah?", answer: "Jabal al-Rahmah, the Mount of Mercy, is the best-known landmark on the plain of Arafat, a modest hill that pilgrims and visitors climb for its view, central to the Day of Arafah during Hajj." },
      { question: "Can I visit Arafat outside the Hajj season?", answer: "Yes. Outside Hajj, the plain and Jabal al-Rahmah are open and quiet to visit. During Hajj itself, the site is reserved for pilgrims performing the standing rite." },
      { question: "Do I need to climb Jabal al-Rahmah?", answer: "No, it is optional. The hill is modest in height but the ground is uneven, so comfortable footwear helps if you do climb." },
      { question: "Can I combine Arafat with Mina and Muzdalifah?", answer: "Yes. Many visitors see all three sites in one outing, following the route of the Hajj, or through our combined Makkah Ziyarat tour." },
      { question: "Is the price fixed?", answer: "Yes. The fare is agreed before travel and includes waiting time at the site, with allowance made for any Hajj-season access restrictions." },
    ],
    relatedTransferSlugs: ["makkah-to-mina", "makkah-to-muzdalifah", "makkah-ziyarat-tour"],
    relatedRouteSlugs: ["jeddah-to-makkah"],
    keywords: [
      "makkah to arafat taxi",
      "arafat transfer makkah",
      "jabal al-rahmah taxi",
      "mount of mercy transfer",
      "arafat private car makkah",
    ],
  },
];

export const makkahAttractions: PointTransfer[] = raw.map((t) => ({
  ...t,
  citySlug: "makkah",
}));
