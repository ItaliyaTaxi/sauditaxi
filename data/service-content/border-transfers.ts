import type { ServiceContent } from "./types";

export const content: ServiceContent = {
  overview: {
    heading: "Cross-Border Private Transfers from Saudi Arabia",
    paragraphs: [
      "Crossing an international border by road is a different experience from a domestic taxi ride. The stakes are higher, the planning more involved, and the margin for error smaller. Saudi Private Transfers specialises in door-to-door private car journeys that carry you from your pick-up point in Saudi Arabia all the way to your destination in Bahrain, Qatar, the UAE, Kuwait, or Jordan — not just to the border. Our drivers know the paperwork sequences, the fastest lanes, and the quirks of each crossing, so you arrive informed, on time, and without unnecessary stress.",
      "The most heavily used corridor we serve is the King Fahd Causeway, the 25-kilometre fixed link that connects the Eastern Province to the Kingdom of Bahrain. Departing from Al Khobar, Dammam, or Jubail, the drive to the causeway toll plaza takes roughly 20 minutes. Traffic can triple that figure on Thursday evenings and Friday mornings when GCC residents head to Manama for the weekend. Our dispatch team monitors crossing conditions in real time and will adjust your departure window if live wait times are rising. At the Saudi exit gate you present your passport (or GCC residence ID if you hold one), your vehicle passes through a customs scanner, and you cross to the Bahraini entry hall. Total causeway crossing time on a quiet weekday morning is 30 to 45 minutes; peak weekend congestion can push that past two hours, which is why booking a private transfer rather than public transport gives you a comfortable, air-conditioned environment to wait rather than a crowded bus queue.",
      "For travel to Qatar, our vehicles use the Salwa Border Crossing, also known as Abu Samra. The journey from Riyadh to Salwa covers roughly 640 kilometres of well-maintained dual-carriageway and takes around six hours of driving. Passengers from Dammam or Al Ahsa reach the border in three to four hours. The Salwa crossing has modernised its facilities significantly and vehicle processing is now brisk during off-peak hours, though Thursday afternoons can see queues. From Dammam to Dubai or Abu Dhabi via the Al Batha border post is a longer undertaking — typically 10 to 12 hours including the crossing — and is most popular with families relocating between the two kingdoms or travellers who prefer road comfort to the compressed experience of a short-haul flight. Our Kuwait service runs from the Eastern Province to the Nuwaiseeb crossing via the coastal highway through Al Khafji, a journey of around four hours. For Jordan, we operate on the Al Haditha corridor connecting Tabuk and Hail to Aqaba and Amman, a route favoured by Jordanian nationals and Saudi families visiting relatives.",
      "Every border-transfer booking includes a single, fully vetted driver-guide who stays with you throughout the crossing. We do not drop you at the Saudi exit gate and leave; the driver queues with the vehicle, assists with the customs declaration process, and rejoins you on the other side. If you require onward transport within the destination country beyond the border crossing or the first city, we can arrange a handover to a local partner — please mention this at the time of booking so we can co-ordinate seamlessly."
    ]
  },

  whyChoose: {
    heading: "Why Travellers Choose Saudi Private Transfers for Cross-Border Journeys",
    items: [
      {
        title: "Border-Experienced Drivers",
        text: "Every driver assigned to a cross-border trip has completed the route multiple times. They know the correct lane to join for each nationality, which gate is designated for GCC residents versus visitors, and how to handle customs declarations for common items including personal electronics, gifts, and food. This practical knowledge prevents costly delays and unnecessary secondary inspections."
      },
      {
        title: "Door-to-Hotel Pricing, No Hidden Extras",
        text: "Your quoted fare covers the full journey from your Saudi pick-up address to your destination in the neighbouring country. Causeway toll fees, fuel surcharges, and driver waiting time during the immigration process are all included. You will not be handed an invoice for extras at the border."
      },
      {
        title: "Real-Time Crossing Updates",
        text: "Our operations team tracks live queue data from the King Fahd Causeway, Salwa, Al Batha, and Al Khafji. If conditions deteriorate we contact you before departure to discuss options: an earlier start, a later departure, or an updated estimated arrival time so your hotel or host can be informed."
      },
      {
        title: "Comfortable Vehicles for Long Distances",
        text: "Cross-border journeys cover 55 kilometres at the short end and over 1,000 kilometres at the long end. We use late-model SUVs and executive saloons with full climate control, ample luggage space, and charging points for your devices. For families or groups with substantial luggage, a larger people-carrier or minibus can be requested."
      },
      {
        title: "Flexible for GCC Residents and Visitors Alike",
        text: "GCC nationals and residents travelling on a GCC ID card are processed differently from visitors on a visit visa. Our drivers understand these distinctions and will direct you to the correct counter without confusion. If you are a first-time visitor and unsure whether you need a visa for your destination country, our booking team can point you to the relevant official source before your trip."
      },
      {
        title: "Family and Group Specialisation",
        text: "Cross-border road travel is especially popular with families. We offer child seats on request, patient handling of multiple passports at the immigration hall, and vehicles sized for the whole group rather than forcing a split across two taxis."
      },
      {
        title: "Around-the-Clock Departures",
        text: "The King Fahd Causeway is open 24 hours. Many business travellers prefer an early-morning midweek departure to avoid both weekend crowds and rush-hour Manama traffic. We operate at any hour, seven days a week, to accommodate any schedule."
      }
    ]
  },

  coverage: {
    heading: "Coverage: Saudi Departure Cities for Border Transfers",
    paragraphs: [
      "Our primary departure base for border transfers is the Eastern Province, which is geographically closest to Bahrain, Qatar, and Kuwait. Al Khobar and Dammam are the natural launch points for causeway journeys to Bahrain and are within easy range of the Salwa crossing for Qatar. Jubail, Al Ahsa, and Hofuf are served with competitive fares to both crossings.",
      "Riyadh clients are routed to Qatar via the Salwa corridor and to the UAE via Al Batha. Both are full-day driving commitments and we always recommend booking a driver with a proven long-haul record for these routes. For journeys to Kuwait, Riyadh passengers typically transfer through the Eastern Province highway before heading north.",
      "In the northwest of the Kingdom, Tabuk and Hail serve as the principal gateways for Jordan-bound travellers. The Al Haditha crossing links this corridor to the Jordanian port city of Aqaba and onward to Amman. AlUla is included in our coverage for passengers wishing to combine a heritage visit with a Jordan leg. Najran in the south is currently covered for domestic connections; cross-border service from Najran to Yemen is not offered."
    ],
    cities: [
      { label: "Al Khobar", slug: "khobar" },
      { label: "Dammam", slug: "dammam" },
      { label: "Jubail", slug: "jubail" },
      { label: "Hofuf", slug: "hofuf" },
      { label: "Al Ahsa", slug: "al-ahsa" },
      { label: "Riyadh", slug: "riyadh" },
      { label: "Tabuk", slug: "tabuk" },
      { label: "Hail", slug: "hail" },
      { label: "AlUla", slug: "alula" },
      { label: "Najran", slug: "najran" }
    ]
  },

  popularRoutes: {
    heading: "Popular Cross-Border Routes",
    intro: "The distances and durations below are for driving time only and do not include border-crossing processing. We recommend adding a minimum of one hour for routine crossings and up to three hours on peak days at the King Fahd Causeway.",
    routes: [
      {
        from: "Al Khobar",
        to: "Manama, Bahrain",
        distance: "55 km",
        duration: "1 hr driving + border",
        benefit: "The shortest Saudi-to-Bahrain corridor. Al Khobar sits at the causeway approach, making this the fastest overall journey to central Manama. Ideal for business day-trips and weekend breaks.",
        href: "/routes/khobar-to-bahrain"
      },
      {
        from: "Dammam",
        to: "Manama, Bahrain",
        distance: "70 km",
        duration: "1 hr 15 min driving + border",
        benefit: "Dammam departures pick up passengers from the city centre and King Fahd International Airport before joining the causeway approach road. A favourite for families and business travellers based in the provincial capital.",
        href: "/routes/dammam-to-bahrain"
      },
      {
        from: "Riyadh",
        to: "Qatar Border (Salwa / Abu Samra)",
        distance: "640 km",
        duration: "6 hr driving + border",
        benefit: "The primary land route between the Saudi capital and Doha. The highway is excellent and the crossing at Abu Samra is modern and efficient. We recommend an early-morning departure from Riyadh to arrive in Doha before evening.",
        href: "/routes/riyadh-to-qatar-border"
      },
      {
        from: "Dammam",
        to: "Doha, Qatar via Salwa",
        distance: "395 km",
        duration: "4 hr driving + border",
        benefit: "For Eastern Province residents, Dammam to Doha is a practical alternative to flying. The Salwa crossing is straightforward, and the total door-to-hotel time for a midweek departure is typically under six hours."
      },
      {
        from: "Riyadh",
        to: "Dubai / Abu Dhabi via Al Batha",
        distance: "950 km",
        duration: "10–12 hr driving + border",
        benefit: "A full-day journey that suits families relocating between Saudi Arabia and the UAE, or travellers moving household goods. Two-driver option available on request for overnight runs with minimal stops."
      },
      {
        from: "Dammam",
        to: "Kuwait City via Al Khafji",
        distance: "520 km",
        duration: "5 hr driving + border",
        benefit: "The coastal highway through Al Khafji is the most direct land route to Kuwait. Popular with Kuwaiti nationals returning home after visits to the Eastern Province and with Saudi business travellers heading to Kuwait City."
      }
    ]
  },

  booking: {
    heading: "How to Book Your Border Transfer",
    steps: [
      {
        title: "Request a Quote Online or by Phone",
        text: "Use the booking form on this page or call our 24-hour line. Select Border Transfer as the service type and provide your full pick-up address in Saudi Arabia, your destination city and country, your preferred departure date and time, the number of passengers, and the approximate amount of luggage. We will confirm availability and send a fixed-price quote by return."
      },
      {
        title: "Confirm Passenger Details and Documents",
        text: "Once you accept the quote, share the full name and passport number of every passenger. This is essential: our drivers carry a passenger manifest at the border, and any discrepancy between the booking name and the passport causes delays. If any passenger holds a GCC residence permit and intends to use it instead of a passport, note this at this stage."
      },
      {
        title: "Receive Your Booking Confirmation and Driver Brief",
        text: "You will receive a confirmation document listing your driver name, vehicle type and plate number, agreed fare, and a crossing briefing note. The briefing note explains what to expect at each gate, where to sit while the vehicle passes through the customs scanner, and what documentation to have in your hand when you approach immigration."
      },
      {
        title: "Driver Pick-Up and Pre-Border Check",
        text: "Your driver arrives at the agreed time with plenty of buffer before the estimated crossing window. On the way to the border the driver will confirm that every passenger has the correct documents, check that no restricted items are in the luggage (see Traveler Tips below), and discuss the expected queue situation based on real-time data shared by our operations team."
      },
      {
        title: "Border Assistance: Exit and Entry Processing",
        text: "At the Saudi exit gate, the driver presents the vehicle documents and directs each passenger to the correct immigration counter. After Saudi exit stamps are obtained, the vehicle drives across and the driver parks while passengers complete entry formalities on the destination side. The driver is on hand throughout to answer questions and assist with language if needed. Causeway toll fees are paid by the driver from your included fare. Once all stamps are complete, the journey resumes to your destination."
      },
      {
        title: "Arrival and Optional Onward Arrangement",
        text: "The driver delivers you to your hotel, home address, or meeting point in the destination city. If you need return transport on a specific date, or onward travel within the destination country, inform us when booking and we will arrange it. Return journeys must be booked separately and are subject to the same advance passenger-detail requirements."
      }
    ]
  },

  travelerTips: {
    heading: "Essential Tips for Cross-Border Travel by Road",
    paragraphs: [
      "Documents are the single most critical factor in a smooth border crossing. Every passenger — including children — must have a valid travel document. For most nationalities this means a passport. GCC nationals and residents holding a valid GCC national ID card can use it at the King Fahd Causeway and the Kuwait crossing, but a full passport is required for Qatar, the UAE, and Jordan. Do not assume your GCC ID is sufficient for every destination; check the official entry requirements of the country you are visiting before you travel.",
      "Passport validity is checked at every crossing. Saudi Arabia, Bahrain, Qatar, the UAE, Kuwait, and Jordan all require your passport to be valid for a minimum of six months beyond your intended date of arrival in most circumstances. A passport expiring in four months may be refused entry even if you plan a two-day trip. Renew before you book if there is any doubt.",
      "Visa requirements vary by nationality and destination. GCC nationals and residents generally do not require advance visas for travel within the GCC. However, residents who are not GCC nationals — for example, someone holding a Saudi iqama but holding a non-GCC passport — must verify the visa policy of the destination country for their specific nationality before travelling. Jordan requires most nationalities to obtain an entry visa; a visa-on-arrival is available at the Al Haditha land crossing for many passport holders but rules change and official Jordanian immigration guidance should always be the final reference.",
      "Timing your crossing is as important as your documents. The King Fahd Causeway experiences its heaviest congestion from Thursday afternoon through Friday, and again in the reverse direction on Saturday evening and Sunday morning. If your schedule permits, a Tuesday or Wednesday morning departure typically clears the Saudi exit gate in under 20 minutes. For Qatar via Salwa, Thursday afternoons are the busiest window. For the UAE via Al Batha, Fridays and public holidays generate the longest queues.",
      "Customs guidelines must be observed. Saudi Arabia, Bahrain, Qatar, the UAE, Kuwait, and Jordan all prohibit or restrict certain categories of goods. Alcohol is illegal in Saudi Arabia and Qatar; attempting to carry it across the Saudi exit or Qatari entry is a serious offence. Prescription medication should travel in its original packaging with a prescription or a letter from a treating physician. Pork products, narcotics, and materials offensive to public morals are prohibited in all six countries. Declare cash amounts above the legal threshold for the country you are entering; thresholds vary but USD 10,000 or its equivalent is a common benchmark. Your driver will not knowingly transport restricted items and reserves the right to refuse carriage if restricted goods are discovered before departure.",
      "Luggage rules are relaxed compared to air travel but vehicle space is finite. An executive saloon comfortably handles two large suitcases plus hand luggage for two passengers. Families with four or more travellers and multiple large bags should request an SUV or people-carrier when booking. If you are transporting items of unusual size — sports equipment, musical instruments, flat-packed furniture — inform us so the correct vehicle is assigned. Excess or undisclosed luggage that prevents the vehicle door from closing safely may result in the journey being declined and a rebooking fee applied.",
      "Keep your phone charged and the booking-confirmation number accessible. If a queue is longer than anticipated, our operations team may call you with updated information. Having the driver contact number saved before you leave is good practice for any long-distance transfer but particularly important when you are crossing a border and may be separated from the vehicle for a period."
    ]
  },

  trustSafety: {
    heading: "Trust and Safety on Every Border Journey",
    items: [
      {
        title: "Fully Licensed Cross-Border Operators",
        text: "Saudi Private Transfers holds all licences required to operate commercial passenger vehicles on Saudi roads and to transit the registered border crossings we serve. Our vehicles carry the appropriate permissions, and our drivers hold professional driver licences valid for the journey type."
      },
      {
        title: "Vetted and Experienced Drivers",
        text: "Every driver undergoes criminal background screening, professional driving assessment, and route familiarisation before being cleared for border-transfer work. Drivers assigned to long-haul routes are required to have completed a minimum number of those specific crossings under supervision before operating independently."
      },
      {
        title: "Vehicle Safety and Maintenance Standards",
        text: "All vehicles in our cross-border fleet are inspected at regular intervals in line with Saudi traffic authority requirements. Long-distance vehicles receive additional pre-trip checks on tyres, brakes, fluids, and air conditioning before every border assignment. You will never depart on an underprepared vehicle."
      },
      {
        title: "Fixed, Transparent Pricing",
        text: "Your quoted price is the price you pay. It includes toll fees, driver waiting time at immigration, and fuel for the full journey. We do not apply surge pricing at weekends or on public holidays for pre-booked border transfers. Any changes you make to the booking after confirmation — such as adding a passenger or changing the drop-off address — will be requoted transparently before the change is applied."
      },
      {
        title: "Passenger Data Privacy",
        text: "The passport and personal details you provide for the border manifest are stored securely, used only for the purpose of the booking, and deleted from operational systems after a reasonable retention period. We do not share your details with third parties beyond the driver carrying your manifest and any border authority that requests the information as part of the standard crossing process."
      },
      {
        title: "24-Hour Support Line",
        text: "Our customer support team is reachable around the clock. If anything goes wrong during a crossing — a document issue, a vehicle problem, or a medical situation — call the number on your booking confirmation and a senior operations member will assist immediately. We have established contacts at the main crossing authorities and can intervene in border situations where a language barrier or procedural confusion has arisen."
      }
    ]
  },

  faqs: [
    {
      question: "Can I use my GCC resident ID instead of my passport to cross from Saudi Arabia to Bahrain?",
      answer: "GCC nationals can use their national ID card at the King Fahd Causeway. Non-GCC residents holding a Saudi iqama must check Bahrain's current entry policy for their specific nationality; many nationalities require a full passport and may also need a Bahrain visit visa. Confirm requirements with the Bahraini embassy or official immigration portal before your trip."
    },
    {
      question: "How long does it take to cross the King Fahd Causeway?",
      answer: "On a quiet weekday morning, Saudi exit and Bahraini entry processing takes 30 to 50 minutes. On a Thursday evening or Friday morning, total wait time including the queue before the first gate can exceed two hours. We monitor live conditions and will advise you if an adjusted departure time would meaningfully reduce your wait."
    },
    {
      question: "What is the causeway toll and is it included in my fare?",
      answer: "The King Fahd Causeway charges a toll per vehicle. The current fee is collected on the Saudi side in Saudi riyals. This toll is included in your quoted fare; you do not need to carry cash to pay it separately."
    },
    {
      question: "Do children need their own travel documents?",
      answer: "Yes. Every passenger, regardless of age, must have a valid travel document. Infants and children are not permitted to travel on a parent's passport at these crossings. A valid passport in the child's name is required. Some nationalities may require additional documentation such as a birth certificate or a letter from an absent parent; check the requirements of your destination country."
    },
    {
      question: "Can I carry food and drinks in the vehicle on a cross-border journey?",
      answer: "Personal snacks and non-alcoholic beverages for consumption during the journey are generally acceptable. Do not attempt to carry alcohol into Saudi Arabia, Qatar, or Kuwait; the prohibition is absolute and penalties are severe. Perishable food items are subject to customs inspection and may be confiscated. Pork products are prohibited in all countries served."
    },
    {
      question: "How far in advance should I book a border transfer?",
      answer: "For weekday journeys we can usually accommodate bookings made 24 hours ahead. For Thursday or Friday departures on the Bahrain causeway corridor — our busiest period — we strongly recommend booking at least three days in advance to secure the vehicle type you need and to allow enough time for the driver briefing and passenger manifest preparation."
    },
    {
      question: "What happens if there is a long queue at the border and my arrival is delayed?",
      answer: "Your driver will contact your destination hotel or host if you provide contact details at the time of booking. Our operations team can issue a delay notification. Border queues are outside our control; your fare will not increase because the queue was longer than expected, as driver waiting time is included."
    },
    {
      question: "Is a Saudi tourist visa holder permitted to use the King Fahd Causeway exit?",
      answer: "In general yes, provided the visa is a multiple-entry or the Saudi side does not restrict land crossings on the specific visa type. Single-entry tourist visas are consumed on first entry; if you entered Saudi Arabia on a single-entry visa you cannot re-enter after leaving. Check your visa conditions before booking. Some visa types issued for Umrah are restricted to specific entry and exit points."
    },
    {
      question: "Can you take me all the way to my hotel in Manama, not just to the Bahrain border?",
      answer: "Yes. Our border-transfer service is door to door. Your driver will take you to your hotel, residence, or any address in Bahrain that you specify at the time of booking."
    },
    {
      question: "What is the route from Riyadh to Doha and how long does it take?",
      answer: "The standard route runs east from Riyadh on the Dammam highway to the Salwa border post, also known as Abu Samra, then continues into Qatar. The total driving distance is approximately 640 kilometres and takes around six hours of driving time, plus the crossing itself. With a mid-trip stop for prayer and refreshments and a straightforward border processing time, plan for eight to nine hours total."
    },
    {
      question: "How do I get from Riyadh to Dubai by road?",
      answer: "The route from Riyadh to Dubai passes through the Al Batha border post in the Eastern Province and then through the UAE via Abu Dhabi. The total driving distance is approximately 950 kilometres, which is a 10 to 12 hour drive. Most passengers choose to depart very early in the morning or book an overnight departure. A two-driver option is available for this route on request."
    },
    {
      question: "Can you arrange the return journey from Bahrain or Qatar?",
      answer: "Yes, return journeys can be booked at the same time as the outbound trip or separately. You will need to provide the same passenger details for the return. Please note that the driver for the return is often different from the outbound driver unless you specifically request the same driver and they are available."
    },
    {
      question: "What vehicles are used for long-distance border transfers?",
      answer: "For one to three passengers with standard luggage, we typically assign a late-model Toyota Camry or similar executive saloon. For families or larger groups we use Toyota Land Cruiser, GMC Yukon, or equivalent seven-seater SUVs. For groups of eight or more, a minibus is available. Specify your passenger count and luggage volume at booking and we will recommend the right vehicle."
    },
    {
      question: "Is there a direct road from Saudi Arabia to Jordan?",
      answer: "Yes. The land crossing at Al Haditha on the Saudi side links to Al Durra on the Jordanian side and provides access to Aqaba and the Desert Highway toward Amman. The route departs from Tabuk in northwestern Saudi Arabia. It is a well-established corridor popular with Jordanian nationals who work in Saudi Arabia and with Saudi families visiting Jordan."
    },
    {
      question: "Are there any restrictions on the amount of cash I can carry across borders?",
      answer: "Yes. Each country sets its own currency declaration threshold. As a general rule, carrying USD 10,000 or its equivalent in any currency without declaration is a violation in most of the countries we serve. If you are carrying large amounts of cash, declare it at the customs desk. Undeclared excess cash can be confiscated and may result in further penalties. This applies in both directions."
    },
    {
      question: "What if my passport is due to expire in less than six months?",
      answer: "Most countries in the region require at least six months of passport validity beyond the date of arrival. A passport with less than six months remaining may be refused entry at the border, and the driver will not be able to assist beyond transporting you back to your Saudi departure point. Renew your passport before booking if there is any question about its validity period."
    },
    {
      question: "Can I carry my prescription medication on a cross-border journey?",
      answer: "Yes, but carry the original prescription or a letter from your doctor, and keep the medication in its original pharmacy packaging. Some controlled substances require an import permit from the destination country. Strong painkillers, sedatives, and ADHD medications are frequently flagged at border crossings. Check the restricted medication list for your destination country with its embassy before you travel."
    },
    {
      question: "Do you offer group rates for cross-border transfers?",
      answer: "Yes. Groups of five or more passengers travelling together qualify for a group rate. Contact our booking team directly rather than using the online form so we can assess the correct vehicle configuration and apply the group discount accurately."
    },
    {
      question: "Is it possible to make a stop inside Saudi Arabia before reaching the border?",
      answer: "Yes. A single intermediate stop of up to 20 minutes — for fuel, prayer, or refreshments — is included in your booking at no extra charge. Longer stops or additional pick-up points are treated as route extensions and priced accordingly. Inform us of any planned stops when you book so the driver can factor them into the schedule."
    }
  ],

  relatedServices: [
    { label: "Intercity Transfers", href: "/intercity-transfers" },
    { label: "Airport Transfers", href: "/airport-transfers" },
    { label: "City Transfers", href: "/city-transfers" },
    { label: "Umrah Taxi Service", href: "/umrah-taxi-service" },
    { label: "Hotel Transfers", href: "/services/hotel-transfers" }
  ],

  relatedBlogSlugs: [
    "saudi-to-bahrain-taxi-king-fahd-causeway",
    "saudi-arabia-entry-requirements-pilgrims-2026",
    "saudi-arabia-intercity-taxi-services-guide"
  ],

  keywords: [
    "Saudi border taxi",
    "border transfer Saudi Arabia",
    "King Fahd Causeway transfer",
    "Saudi Arabia to Bahrain private transfer",
    "Bahrain transfer from Khobar",
    "Bahrain transfer from Dammam",
    "Salwa Border crossing taxi",
    "Saudi Arabia to Qatar transfer",
    "Al Batha Border transfer",
    "Saudi Arabia to UAE private car",
    "Al Khafji border transfer",
    "Saudi Arabia to Kuwait taxi",
    "Al Haditha border crossing",
    "Saudi Arabia to Jordan transfer",
    "cross-border transport GCC",
    "GCC travel by road",
    "private transfer Saudi Arabia",
    "long-distance taxi Saudi Arabia",
    "causeway crossing private car",
    "door to door border transfer"
  ]
};
