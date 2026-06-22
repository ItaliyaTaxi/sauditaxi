import type { ServiceContent } from "./types";

export const content: ServiceContent = {
  overview: {
    heading: "Private City Taxi Service Across Saudi Arabia",
    paragraphs: [
      "Getting around a Saudi city efficiently — whether you are a resident heading to a business meeting in Riyadh's Olaya district, a tourist exploring Jeddah's UNESCO-listed Al-Balad, or a pilgrim moving between landmarks in Makkah — demands more than a random ride-hailing app and a prayer for surge pricing. Saudi Private Transfers provides a dedicated city taxi and transfer service in every major Saudi city, giving you a pre-booked, fixed-price private car with a vetted, English-speaking driver who already knows where you are going before he pulls up.",
      "Our city service covers the full spectrum of urban mobility needs. A single hotel pickup to a government ministry on King Fahd Road. A round-trip from your Khobar apartment to the Dhahran Mall and back. A half-day of back-to-back client visits across Riyadh's Diplomatic Quarter, King Abdullah Financial District, and back to Kingdom Centre. A full-day driver hire in Taif so you can explore Al Hada Mountain, the rose farms, and the cable car without watching a meter climb. We build every booking around your schedule, not around the driver's next job.",
      "The difference between a private city car and a street taxi or metered cab is felt immediately. Your driver meets you at the lobby door, not at the kerb after a five-minute search. The fare is agreed before you leave. There are no detours, no extended 'scenic routes', and no surprise tolls added at the end. If you need to stop at a pharmacy, wait outside a government building, or add a second drop-off, the driver accommodates that — because you are paying for his time, not for a fixed point-to-point trip. For business travellers carrying laptops and documents, families travelling with young children, women travelling alone, and visitors who do not speak Arabic, this model is simply more practical than any alternative.",
      "Saudi Arabia's cities are large, traffic is heavy, and the rhythm of the day is shaped by prayer times. Navigating all of that requires local knowledge. Our drivers know which roads seize up after the Dhuhr prayer, which route into Jeddah Corniche actually moves on a Thursday evening, and where to enter the Haramain areas in Makkah and Madinah without getting caught in restricted access zones. That expertise is part of the service."
    ]
  },

  whyChoose: {
    heading: "Why Saudi Private Transfers for City Rides",
    items: [
      {
        title: "Fixed Fares, Zero Surge",
        text: "Your fare is confirmed when you book — not when you arrive, not when the driver accepts the job. During Ramadan evenings, Eid traffic, or a summer storm in Jeddah, the price on your confirmation email is the price you pay. Ride-hailing apps in Saudi Arabia apply surge multipliers that can triple a fare during peak hours. We do not."
      },
      {
        title: "Same Vetted Driver Every Time",
        text: "When you book a half-day or full-day city driver, you keep the same professional throughout. He learns your preferences, knows your office building's entrance, and handles your luggage without being asked. Our drivers hold Saudi driving licences, carry background checks, and are trained in customer service and route knowledge before their first booking."
      },
      {
        title: "English-Speaking Professionals",
        text: "Every driver in our city fleet communicates confidently in English. This matters when you need to explain that you require a specific gate, that the meeting has moved to a different address, or simply that you would like the air conditioning turned down. Non-Arabic speakers travelling for business or tourism should not have to use translation apps to speak to their driver."
      },
      {
        title: "Full-Day and Hourly Hire",
        text: "Not every trip has a single destination. Our hourly city car hire lets you keep a driver on standby for a morning of errands in Riyadh, a full day of sightseeing in Madinah, or a business roadshow across multiple Dammam and Khobar offices. Rates are transparent, minimums are clearly stated at booking, and you are never pushed into an unnecessarily long hire window."
      },
      {
        title: "Hotel, Airport, and Any-Door Pickup",
        text: "We pick up from hotel lobbies, residential compounds, office buildings, shopping malls, hospitals, and any other address you name. Our drivers track your location and adjust if you are running late. No standing on a pavement refreshing an app and watching a car circle the block."
      },
      {
        title: "Women Travelling Safely and Comfortably",
        text: "Saudi Arabia has made great strides in women's mobility since 2018, but travelling alone as a woman still benefits from a known, pre-booked driver rather than an anonymous match. Our female passengers can request a female driver where available, share their trip details with a contact before departure, and travel without the social friction that can come from unbooked street-level rides."
      },
      {
        title: "Clean, Modern Fleet with Child Seat Option",
        text: "Our city vehicles are serviced on a fixed maintenance schedule, cleaned between every hire, and non-smoking. Families can request a child seat at booking at no extra charge. Larger groups can book an SUV or MPV through the same platform."
      }
    ]
  },

  coverage: {
    heading: "Cities We Serve Across Saudi Arabia",
    paragraphs: [
      "Saudi Private Transfers operates city car service in every major metropolitan area in the Kingdom. In Riyadh, we cover the full spread of the capital — from the northern compounds near King Khalid International Airport down through Olaya and King Fahd Road, east to the diplomatic and government districts, and out to Diriyah for heritage visits. Jeddah service covers the historic Corniche waterfront, the Al-Balad UNESCO quarter, the northern business corridor around Tahlia Street, and King Abdulaziz International Airport connections within the city.",
      "In the holy cities, our service is designed around the specific needs of pilgrims and religious visitors. Makkah drivers know every permitted access point to the Masjid al-Haram and the Clock Tower complex, and can move efficiently between Mina, Arafat, Muzdalifah, and the city hotels during Hajj and Umrah seasons. In Madinah, we cover transfers between the Prophet's Mosque, Quba Mosque, Masjid al-Qiblatayn, the date markets, and all major hotels on the Haram perimeter. On the Eastern Seaboard, we serve Dammam and Khobar as a single connected zone — the King Fahd Causeway approach, the Khobar Corniche, Dhahran, Aramco Campus access, and the main shopping and residential districts.",
      "We also provide city car service in Taif, where full-day hire is popular for visiting Al Hada, the Shafa highlands, and the seasonal rose distilleries. Yanbu, Jubail, Abha, Buraidah, and Hofuf are covered for both single rides and business contract hire. If your city is not listed, contact us — our network extends to secondary cities through a verified partner fleet."
    ],
    cities: [
      { label: "Riyadh", slug: "riyadh" },
      { label: "Jeddah", slug: "jeddah" },
      { label: "Makkah", slug: "makkah" },
      { label: "Madinah", slug: "madinah" },
      { label: "Dammam", slug: "dammam" },
      { label: "Khobar", slug: "khobar" },
      { label: "Taif", slug: "taif" },
      { label: "Yanbu", slug: "yanbu" },
      { label: "Jubail", slug: "jubail" },
      { label: "Abha", slug: "abha" }
    ]
  },

  popularRoutes: {
    heading: "Popular City Transfer Routes",
    intro: "The journeys below represent the most frequently requested city-to-city and within-city connections on our platform. Each one is served by a professional driver who knows the route, typical traffic patterns, and any seasonal access restrictions. Fares for all routes are fixed and confirmed at booking.",
    routes: [
      {
        from: "Riyadh City Centre (Olaya / KAFD)",
        to: "Diriyah Heritage District",
        distance: "22 km",
        duration: "25–35 min",
        benefit: "Skip the weekend parking chaos at Diriyah — your driver drops you at the Bujairi Terrace entrance and collects you when you are ready.",
        href: "/routes/riyadh-to-dammam"
      },
      {
        from: "Jeddah Corniche Hotels",
        to: "Al-Balad Historic District",
        distance: "8 km",
        duration: "15–25 min",
        benefit: "Al-Balad's narrow lanes make it a poor match for ride-hailing. A fixed-price private car with a waiting option lets you explore at your own pace without watching the clock."
      },
      {
        from: "Jeddah",
        to: "Taif",
        distance: "88 km",
        duration: "1 hr 20 min",
        benefit: "A scenic mountain road that rewards an unhurried ascent — book a full-day driver and spend time in Al Hada and the Taif rose farms rather than rushing back the same afternoon.",
        href: "/routes/jeddah-to-taif"
      },
      {
        from: "Makkah Haram Hotels",
        to: "Madinah",
        distance: "420 km",
        duration: "4 hrs",
        benefit: "Pilgrims completing Umrah often pair Makkah with a visit to Madinah. A private transfer avoids shared buses and lets families with elderly relatives or young children travel on their own schedule.",
        href: "/routes/makkah-to-madinah"
      },
      {
        from: "Jeddah",
        to: "Makkah",
        distance: "80 km",
        duration: "1 hr",
        benefit: "Frequent pilgrims and business travellers between Jeddah and Makkah benefit from the fixed SAR fare — no negotiation, no meter, no waiting for a shared van to fill.",
        href: "/routes/jeddah-to-makkah"
      },
      {
        from: "Dammam Airport (DMM)",
        to: "Khobar City Centre",
        distance: "30 km",
        duration: "25–35 min",
        benefit: "Eastern Province business travellers land at Dammam and work in Khobar. A meet-and-greet city transfer connects both seamlessly, with no ride-hailing availability gamble at arrivals.",
        href: "/routes/dammam-airport-to-khobar"
      }
    ]
  },

  booking: {
    heading: "How to Book a City Transfer",
    steps: [
      {
        title: "Choose Your Trip Type",
        text: "Select a single point-to-point ride, a round trip with a waiting period, or hourly and full-day driver hire. If you need the driver to make multiple stops — for example, a hotel pickup, a meeting in the KAFD, and then a restaurant in Olaya — enter each stop in the stops field. The fare updates automatically."
      },
      {
        title: "Enter Your Pickup Details",
        text: "Provide your pickup address, date, and time. For hotel pickups, add the hotel name and your room number so the driver can meet you in the lobby. For residential compounds, include the compound name and villa number. The more specific you are, the smoother your departure."
      },
      {
        title: "Select Your Vehicle",
        text: "Choose from a standard saloon for solo travellers or couples, an executive saloon for business travel, an SUV for families or passengers with large luggage, or a 7-seat MPV for groups. All vehicle types are available in every covered city."
      },
      {
        title: "Confirm and Pay",
        text: "Review the fixed fare and pay by card, Apple Pay, or Mada. Your booking confirmation is sent by email and WhatsApp immediately. No cash is required at the point of travel — the driver does not handle money, which removes any ambiguity about fare or tip."
      },
      {
        title: "Track Your Driver",
        text: "Thirty minutes before your pickup, you receive a live tracking link and the driver's name and phone number. You can call or WhatsApp him directly if plans change. The driver monitors your flight or meeting status if you have shared it at booking."
      },
      {
        title: "Travel and Rate",
        text: "After your journey, rate your driver in the app or by replying to the confirmation message. High ratings unlock driver preference — if you found an exceptional driver, you can request him for future Riyadh bookings. Complaints are reviewed within 24 hours and fare disputes resolved within 48."
      }
    ]
  },

  travelerTips: {
    heading: "Practical Tips for Getting Around Saudi Cities",
    paragraphs: [
      "Traffic in Saudi cities is dense and time-sensitive in ways that can surprise first-time visitors. Riyadh's King Fahd Road — the capital's main north-south artery — can slow to a crawl between 7:30 and 9:00 in the morning and again between 4:00 and 7:00 in the evening. Jeddah's coastal roads and the approach to Al-Balad back up heavily on Thursday and Friday evenings when residents head out for the weekend. If your schedule has any flexibility, booking your city ride for 9:30 rather than 9:00 can save 20 minutes. When you book with Saudi Private Transfers, the confirmation includes a recommended departure time based on the route and day.",
      "Prayer times reshape the city five times a day. Shops close, traffic thins, and restaurants may not seat new guests during the prayer period. The two most disruptive for daytime travel are Dhuhr (around midday) and Asr (mid-afternoon), when a journey that would normally take 15 minutes can extend to 30 if you catch a red light as prayers begin. Your driver will flag this if your pickup time falls close to a prayer window. Planning meetings at least 30 minutes after the end of a prayer window is advisable.",
      "Women travelling alone will find that pre-booked private transfers are consistently the most comfortable option. You know the driver's name and licence number before he arrives. The journey is tracked. The trip record is on your account. If you are a foreign national or expatriate unfamiliar with the local app ecosystem, booking through Saudi Private Transfers in English and receiving a WhatsApp confirmation removes the uncertainty that sometimes accompanies local app-based rides.",
      "Tipping is not expected or required when you book through our platform. The fare is all-inclusive. That said, drivers genuinely appreciate a tip for exceptional service — particularly for full-day hire or for a driver who helped carry luggage up a flight of stairs or waited an extra hour without complaint. A tip of SAR 10–20 for a single ride or SAR 50–100 for a full day is generous and always welcome, but never obligatory.",
      "For tourists visiting multiple landmarks in a single city, full-day driver hire is almost always better value than individual rides. A day touring Riyadh's Diriyah, the National Museum, the Murabba Palace, and dinner in Al Bujairi costs less with a retained driver than booking four separate rides, and you avoid the gap time between rides. Ask for an itinerary quote when you book — we will suggest a realistic schedule based on opening hours and typical traffic patterns.",
      "The Riyadh Metro is a genuine alternative for some city journeys — particularly the Blue Line connecting King Khalid International Airport to the city centre, and the Green Line along King Abdullah Road. It is air-conditioned, punctual, and very affordable. However, it does not serve most hotels directly, does not carry large luggage conveniently, and does not reach Diriyah, the Diplomatic Quarter, or most residential compounds. Our advice: use the Metro for a quick solo trip to a central station and a private car for everything else."
    ]
  },

  trustSafety: {
    heading: "Safety, Licensing, and Service Standards",
    items: [
      {
        title: "Licensed and Regulated Drivers",
        text: "Every driver on our platform holds a valid Saudi driving licence, has passed a Ministry of Transport background check, and carries the correct commercial vehicle permit for passenger hire. We do not use unlicensed 'informal' drivers regardless of demand spikes during peak seasons."
      },
      {
        title: "Vehicle Safety Inspections",
        text: "Our city fleet undergoes Istimara (vehicle registration and safety) checks on the Saudi schedule and an additional internal roadworthiness inspection every six months. Vehicles older than five years are retired from the fleet. You will never be collected in a car that is unroadworthy or uninsured."
      },
      {
        title: "Full Third-Party Insurance",
        text: "All vehicles carry commercial passenger insurance that covers the driver and every occupant for the duration of the journey. This goes beyond the basic compulsory cover and includes medical evacuation coverage — important for visitors who may not carry comprehensive travel insurance."
      },
      {
        title: "Transparent Pricing, No Hidden Charges",
        text: "The price you confirm at booking is the price you pay. There are no fuel surcharges, no after-hours fees added post-journey, no tolls charged separately. If your driver enters a toll road, the cost is already included. If a route change adds significant distance, we contact you before proceeding — we do not present a higher bill after the fact."
      },
      {
        title: "24/7 Customer Support in Arabic and English",
        text: "Our support team is reachable around the clock by WhatsApp, phone, and live chat. This is not an offshore call centre reading from a script — our agents are based in Saudi Arabia, understand the local geography, and can resolve a driver location issue or rebooking request in minutes, not days."
      },
      {
        title: "Data Privacy and Payment Security",
        text: "Payments are processed through PCI-DSS compliant gateways. We do not store card numbers on our servers. Trip data and personal information are held under Saudi PDPL (Personal Data Protection Law) compliance. Your journey history is visible only to you and — in aggregate, anonymised form — to our operations team for service improvement."
      }
    ]
  },

  faqs: [
    {
      question: "What is the difference between a city transfer and a regular taxi in Saudi Arabia?",
      answer: "A city transfer from Saudi Private Transfers is pre-booked, fixed-price, and assigned to a named, vetted driver before you travel. A regular metered taxi or ride-hailing match is unbooked, subject to surge pricing, and assigned to an anonymous driver. For planned journeys — hotel pickups, business meetings, airport connections within a city — a city transfer gives you certainty on price, driver, and pickup time."
    },
    {
      question: "Can I book a driver for a full day of sightseeing or business meetings?",
      answer: "Yes. Full-day driver hire is one of our most popular city products. You retain the same driver for a set number of hours (minimum four hours in most cities), and he drives you between as many locations as you need within the city. This is ideal for tourists covering multiple landmarks, business travellers with back-to-back meetings across different districts, and medical tourists attending multiple hospital appointments."
    },
    {
      question: "How does pricing work for city transfers with waiting time?",
      answer: "If your booking includes a return journey with a defined wait — for example, dropping you at a government ministry and waiting 90 minutes for your appointment — the waiting time is included in the quoted fare. If the wait overruns by more than 30 minutes, an additional per-hour charge applies at the rate shown at booking. You will never be surprised by a fee you were not told about in advance."
    },
    {
      question: "Do you offer city transfers in Makkah and Madinah for pilgrims?",
      answer: "Yes. We operate in both holy cities with drivers who are experienced in Haram area access restrictions, the movement patterns during Hajj and Umrah seasons, and the hotel zones around the Prophet's Mosque and Masjid al-Haram. Non-Muslim drivers do not enter the restricted Makkah zone — all Makkah drivers are Muslim, as required by Saudi law."
    },
    {
      question: "Can a woman book a city transfer and travel alone safely?",
      answer: "Absolutely. Many of our passengers are women travelling alone for business, shopping, medical appointments, and sightseeing. The driver's full name, photo, and licence plate are sent to you before pickup. You can share your live trip link with a contact. Where available, you can request a female driver at booking. All drivers have signed a code of conduct that requires professional behaviour at all times."
    },
    {
      question: "Is English spoken by all your city drivers?",
      answer: "All drivers in our main city fleet have passed an English communication assessment. They can understand and respond to destination changes, follow address instructions in English, and hold a basic service conversation. For complex conversations — detailed itineraries, specific building access instructions — we recommend sending details by WhatsApp before pickup so the driver can prepare."
    },
    {
      question: "How far in advance do I need to book a city transfer?",
      answer: "For most cities, you can book with as little as two hours' notice for a standard saloon. For full-day hire, executive vehicles, or groups requiring an MPV, we recommend booking 24 hours in advance to guarantee availability, particularly during Ramadan, Eid, Hajj season, and public holidays when demand surges."
    },
    {
      question: "Can I change my destination or add stops after the journey has started?",
      answer: "Yes, within reason. If your plans change mid-journey — you need to add a stop at a pharmacy, or your meeting has moved buildings — tell your driver directly. Minor route additions are handled at no extra charge. If the journey significantly expands (for example, you want to add a second district to your shopping trip), the driver will confirm a fare adjustment with you before proceeding. Nothing is added to your account without your agreement."
    },
    {
      question: "Do I need to pay in cash, or can I use a card?",
      answer: "All bookings are prepaid by card, Apple Pay, or Mada at the time of booking. No cash changes hands during the journey. This removes the common friction of fare negotiation, currency confusion, or incorrect change. For corporate clients with approved accounts, monthly invoicing is available."
    },
    {
      question: "What vehicle types are available for city hire?",
      answer: "Our city fleet includes standard saloons (Toyota Camry, Hyundai Sonata class), executive saloons (Mercedes E-Class, BMW 5-Series class), full-size SUVs (Toyota Land Cruiser, Chevrolet Suburban class), and 7-seat MPVs for group travel. Vehicle type is selected at booking and confirmed in your confirmation email."
    },
    {
      question: "Are there any areas in Riyadh where you do not operate?",
      answer: "We cover all districts of Riyadh without restriction, including the Diplomatic Quarter, KAFD, Diriyah, Olaya, Malaz, Shumaisi, and the southern residential zones. For gated compounds, your driver will need the compound name at booking to coordinate with gate security. Diplomatic Quarter access requires prior gate registration which your driver handles via the standard DQ visitor protocol."
    },
    {
      question: "How do I find my driver at a shopping mall or landmark?",
      answer: "Your driver will send you his exact location via WhatsApp 10 minutes before the agreed collection time. For large venues like Mall of Arabia or the Red Sea Mall in Jeddah, we include a standard meeting point (usually the main entrance or a named gate) in the confirmation. You can call the driver directly on the number provided if you cannot locate him."
    },
    {
      question: "Is child seat provision available for family city trips?",
      answer: "Yes. Request a child seat (infant bucket, forward-facing toddler seat, or booster) at the time of booking at no additional charge. Please include your child's approximate age and weight so we match the correct seat type. Child seats are cleaned and safety-checked between each use."
    },
    {
      question: "How do city transfers in Dammam and Khobar work given that they are separate cities?",
      answer: "We treat Dammam and Khobar as a single service zone given the short distance between them. A booking that starts in Dammam and ends in Khobar, or vice versa, is handled as a standard city transfer with no inter-city premium. Dhahran and the Aramco residential area are also included in this zone."
    },
    {
      question: "Can I request the same driver for all my city trips on a multi-day visit?",
      answer: "Yes. After your first journey, you can flag your driver as a preferred driver in your account. Subsequent bookings will be offered to that driver first, subject to his availability. For multi-day business visits, our operations team can also block-book a single driver for the full duration of your stay at a pre-agreed rate."
    },
    {
      question: "What happens if my driver is late?",
      answer: "Our on-time performance for city transfers is above 94%. If your driver is delayed by more than 10 minutes beyond the scheduled pickup, you will receive an automatic notification and a revised arrival estimate. If the delay causes you to miss a meeting or flight connection and the delay was our fault, we will issue a partial or full refund depending on the impact — assessed on a case-by-case basis by our customer team."
    },
    {
      question: "Is the Riyadh Metro a better option for some journeys than booking a city car?",
      answer: "For solo travellers making a direct trip between two Metro-served stations — particularly the Blue Line from the airport to the city centre — the Metro is fast, cheap, and comfortable. For hotel-to-destination journeys with luggage, group travel, or any destination off the Metro network (which includes Diriyah, the Diplomatic Quarter, and most hotels), a private city car is more practical. Many of our regular customers use both: Metro for quick solo hops and Saudi Private Transfers for everything else."
    }
  ],

  relatedServices: [
    { label: "Airport Transfers", href: "/airport-transfers" },
    { label: "Intercity Transfers", href: "/intercity-transfers" },
    { label: "Umrah Taxi Service", href: "/umrah-taxi-service" },
    { label: "Ziyarat Taxi Service", href: "/ziyarat-taxi-service" },
    { label: "Hotel Transfers", href: "/services/hotel-transfers" },
    { label: "Border Crossings", href: "/border-transfers" }
  ],

  relatedBlogSlugs: [
    "riyadh-metro-vs-taxi",
    "taxi-cost-saudi-arabia-price-guide",
    "top-tourist-destinations-private-taxi-saudi-arabia",
    "private-chauffeur-vs-ride-hailing-saudi-arabia"
  ],

  keywords: [
    "private taxi Saudi Arabia",
    "city taxi service",
    "hourly car hire Riyadh",
    "full-day driver Saudi Arabia",
    "English-speaking driver Riyadh",
    "hotel pickup Jeddah",
    "chauffeur service Riyadh",
    "city transfer Makkah",
    "private car Madinah",
    "Khobar city taxi",
    "Taif driver hire",
    "Saudi Arabia private transfer"
  ]
};
