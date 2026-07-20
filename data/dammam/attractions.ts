import type { PointTransfer } from "../jeddah/types";

/**
 * King Fahd International Airport (DMM) ↔ Dammam landmark transfer pages
 * (city centre, Corniche, business district, and a hotels hub). Served at
 * /dammam/{slug} via the shared route. Paragraph strings may contain inline
 * <a href='/...'> anchors (rendered as HTML).
 */
const rawAttractions: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "dammam-airport-to-dammam-city",
    category: "attraction",
    from: "King Fahd International Airport",
    to: "Dammam City",
    h1: "King Fahd Airport to Dammam City Taxi",
    metaTitle: "King Fahd Airport to Dammam City Taxi | Private Transfer",
    metaDescription:
      "Book a fixed-price King Fahd Airport (DMM) to Dammam City taxi with meet and greet, flight tracking and English-speaking drivers. Door-to-door, 24/7.",
    intro:
      "Land at King Fahd International Airport and go straight into central Dammam. Our private airport to Dammam city transfer includes meet and greet, flight tracking and a fixed price agreed before you travel.",
    distance: "~22 km",
    duration: "22-28 min",
    highlights: [
      "Driver waiting in DMM arrivals with a name sign",
      "Free flight tracking, so delays are covered",
      "Fixed price agreed before you travel, no meter",
      "Direct door-to-door ride to any Dammam city address",
    ],
    sections: [
      {
        heading: "From DMM Arrivals to Central Dammam",
        paragraphs: [
          "King Fahd International Airport is the largest airport in the world by land area, and its terminal sits well north of the city it serves, so a reliable ride into central Dammam matters from the moment you land. Our private transfer covers the roughly 22 kilometres between the airport and the city centre in about 22 to 28 minutes, taking you straight to your hotel, office or home address without a detour through a taxi rank.",
          "Because the airport is so spread out, first-time visitors often underestimate how far arrivals sits from the city. A pre-booked driver removes that uncertainty entirely: your car is confirmed for your flight, the price is fixed, and you are collected right outside the terminal. You can see how our wider <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a> service works before you fly, so you know exactly what to expect on the ground.",
        ],
      },
      {
        heading: "Meet and Greet After You Land",
        paragraphs: [
          "Once you collect your luggage and walk into the arrivals hall, your driver is already tracking your flight and waiting with a clearly printed name board. There is no wandering between exits or negotiating a fare, and no language barrier to navigate after a long journey. If you are travelling with family, extra luggage, or need a child seat, this is arranged before you land so nothing slows you down at the kerb.",
          "Reasonable waiting time is always included, so an early or delayed landing never turns into an extra charge. Business travellers heading into Dammam's energy and petrochemical sector particularly value this certainty, since meetings and schedules rarely allow room for an unpredictable airport pickup.",
        ],
      },
      {
        heading: "The Drive into Dammam City",
        paragraphs: [
          "Leaving the airport, the route runs south along the main highway network into the city, passing the growing business park district before reaching central Dammam and its King Saud Street commercial core. In free-flowing conditions the trip is quick; during peak commuting hours or around prayer times, the same distance can edge toward the upper end of the window. Your driver chooses the sensible route rather than the longest one, because the fare does not change with the clock.",
          "Whether your destination is a city-centre hotel, an office on Prince Mohammed bin Fahd Road, or a family home, the vehicle takes you directly there. If you would like to see the waterfront first, ask about a short stop along the <a href='/dammam/dammam-airport-to-dammam-corniche'>Dammam Corniche</a> on the way.",
        ],
      },
      {
        heading: "Why Choose a Private Transfer Over the Taxi Rank",
        paragraphs: [
          "Airport taxi ranks can mean unclear pricing and a wait in the heat before a car is even available. A private transfer replaces that with a single agreed price, a named driver and a confirmed vehicle, with no surge pricing when several flights land together. What we quote before you travel is exactly what you pay, door to door.",
          "This is the same standard behind every route in our <a href='/airport-transfers'>airport transfers</a> network, whether you are heading into the city, onward to Khobar and the Bahrain Causeway, or to a business meeting in the industrial districts.",
        ],
      },
      {
        heading: "Booking Your Airport-to-City Transfer",
        paragraphs: [
          "Reserving your ride takes only a few minutes. Share your flight number, arrival date and Dammam city destination, and we confirm the vehicle and an all-in fixed price before you travel. We operate 24/7, which matters for the many flights that reach DMM late at night or before dawn.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form and we will reply with a clear confirmation. From the terminal to your Dammam address, we keep the ride simple and predictable.",
        ],
      },
    ],
    faqs: [
      { question: "How far is King Fahd Airport from Dammam city centre?", answer: "It is around 22 kilometres from the terminal to central Dammam, a drive of roughly 22 to 28 minutes depending on traffic. Because the airport is so large, the walk from arrivals to the pickup point itself can take a few extra minutes, which our drivers plan for." },
      { question: "Where will my driver meet me at DMM?", answer: "Your driver waits inside the arrivals hall with a printed name board after you clear the terminal and collect your luggage. There is no taxi queue to search for, and flight tracking means an early or late landing simply shifts the pickup time." },
      { question: "Is the price fixed even in heavy traffic?", answer: "Yes. The fare is agreed before you travel, with no meter and no surge pricing. Peak-hour traffic or a busy period around prayer times may add a few minutes to the drive, but it never changes what you pay." },
      { question: "Can you drop me at a specific hotel or office in Dammam?", answer: "Yes. This is a door-to-door service to any address in the city, whether that is a hotel near King Saud Street, an office on Prince Mohammed bin Fahd Road, or a residential address. Share the exact location when you book." },
      { question: "Do you offer the reverse trip from Dammam city to the airport?", answer: "Yes. Our <a href='/dammam/dammam-city-to-dammam-airport'>Dammam city to King Fahd Airport</a> transfer mirrors this service, with pickup timed to your flight and the same fixed-price promise." },
      { question: "Are vehicles available for families and groups?", answer: "Yes. We offer sedans, SUVs and larger vans sized to your group and luggage. Let us know your numbers when booking and we will match the right vehicle at no extra cost." },
    ],
    relatedTransferSlugs: ["dammam-city-to-dammam-airport", "dammam-airport-to-dammam-corniche", "dammam-airport-to-hotels"],
    relatedRouteSlugs: ["dammam-airport-to-khobar", "dammam-to-riyadh"],
    keywords: ["king fahd airport to dammam city taxi", "dmm airport to dammam transfer", "dammam airport pickup", "king fahd international airport taxi to dammam"],
  },
  {
    slug: "dammam-city-to-dammam-airport",
    category: "attraction",
    from: "Dammam City",
    to: "King Fahd International Airport",
    h1: "Dammam City to King Fahd Airport Taxi",
    metaTitle: "Dammam City to King Fahd Airport Taxi | Private Transfer",
    metaDescription:
      "Reliable Dammam city to King Fahd Airport (DMM) transfer with on-time pickup, luggage help and fixed prices. Professional drivers, door-to-door, 24/7.",
    intro:
      "Flying out of Dammam? Book a private city to King Fahd Airport transfer with a punctual pickup from your hotel or home, luggage help and a fixed fare agreed in advance.",
    distance: "~22 km",
    duration: "22-28 min",
    highlights: [
      "On-time pickup timed to your check-in window",
      "Help loading luggage from your hotel or office",
      "Fixed fare with no surge pricing",
      "Comfortable ride to the correct DMM terminal entrance",
    ],
    sections: [
      {
        heading: "From Your Dammam Address to the Terminal",
        paragraphs: [
          "Because King Fahd International Airport sits well outside the city, leaving enough time for the drive matters more here than at a compact city airport. Our private Dammam city to airport transfer collects you from your hotel, office or home and delivers you to the terminal, a trip of roughly 22 kilometres that normally takes 22 to 28 minutes.",
          "Given the airport's scale, we also factor in the time needed to reach check-in once you are dropped off, and we plan the pickup accordingly. Whether you are a business traveller heading home after meetings in the Eastern Province or a family leaving after a stay on the Corniche, the ride is calm, direct and timed around your flight.",
        ],
      },
      {
        heading: "Timing Your Pickup Around Your Flight",
        paragraphs: [
          "We generally suggest reaching King Fahd Airport around three hours before an international departure and two hours before a domestic one, then adding the drive time and a sensible traffic buffer. When you book, share your flight time and we will recommend a pickup that gets you there comfortably rather than at the last minute.",
          "Dammam's roads are generally manageable, but the routes leading out toward the airport can slow during the morning and late-afternoon rush or around prayer times, so we build margin into the schedule. Because the price is fixed, extra minutes in traffic never change your fare.",
        ],
      },
      {
        heading: "Door-to-Door Pickup, No Street Hailing",
        paragraphs: [
          "There is no need to stand outside your hotel hoping a taxi passes. Your driver arrives at the agreed time, meets you at the lobby or entrance, and loads your luggage into a clean, air-conditioned vehicle. If you are checking out of a hotel, we can time the pickup around your checkout so there is no awkward wait with bags in reception.",
          "This same door-to-door standard applies whether you are travelling from a city-centre hotel, a home in a residential district, or an office in the business park near <a href='/dammam/business-district-to-dammam-airport'>Dammam's business district</a>.",
        ],
      },
      {
        heading: "A Smooth Run to King Fahd International",
        paragraphs: [
          "The drive heads north out of the city toward the airport complex, passing the business park district before reaching the sprawling terminal grounds. Your driver knows the correct approach roads and the right terminal entrance for your airline, so there is no confusion when you arrive with a schedule to keep.",
          "If you are flying out after a business trip and need an intercity connection instead, we also run long-distance routes such as <a href='/routes/dammam-to-riyadh'>Dammam to Riyadh</a> at the same fixed-price standard.",
        ],
      },
      {
        heading: "Booking Your City-to-Airport Ride",
        paragraphs: [
          "Reserving takes only a few minutes. Share your pickup address, flight time and passenger count, and we confirm the vehicle and an all-in fixed price before your travel day. We operate 24/7, covering the early and late flights common on Eastern Province business routes.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form and we will reply with a clear confirmation. From your Dammam address to the terminal door, we make the trip to King Fahd Airport simple and stress-free.",
        ],
      },
    ],
    faqs: [
      { question: "How early should I leave Dammam city for my flight?", answer: "Aim to reach the terminal about three hours before an international flight and two hours before a domestic one, then add the roughly 25-minute drive plus a traffic buffer. Tell us your flight time and we will suggest a suitable pickup." },
      { question: "Will you collect me from any address in Dammam?", answer: "Yes. This is a door-to-door service from any hotel, office or home in the city. Share your exact pickup address when you book and your driver will meet you there at the agreed time." },
      { question: "How long is the drive to King Fahd Airport?", answer: "It is around 22 kilometres from central Dammam, usually 22 to 28 minutes. Peak-hour traffic or a busy period around prayer times can extend it slightly, which is why we build in a buffer when planning your pickup." },
      { question: "Which terminal will you drop me at?", answer: "We drop you at the entrance for the terminal your airline uses. Share your flight details when booking and we will confirm the correct drop-off point in advance so there is no confusion on arrival." },
      { question: "Is the fare fixed regardless of traffic?", answer: "Yes. The price is agreed before you travel with no meter and no surge pricing, even during peak hours. What you are quoted is the full fare, including luggage help." },
      { question: "Can I book a very early or late flight departure?", answer: "Yes, we run 24/7. Many flights out of Dammam leave before dawn or late at night, and your car is confirmed in advance for whatever time you need to depart." },
    ],
    relatedTransferSlugs: ["dammam-airport-to-dammam-city", "dammam-corniche-to-dammam-airport", "hotels-to-dammam-airport"],
    relatedRouteSlugs: ["dammam-to-riyadh", "dammam-airport-to-khobar"],
    keywords: ["dammam city to king fahd airport taxi", "dammam to dmm airport transfer", "dammam airport drop off", "dammam city to airport taxi"],
  },
  {
    slug: "dammam-airport-to-dammam-corniche",
    category: "attraction",
    from: "King Fahd International Airport",
    to: "Dammam Corniche",
    h1: "King Fahd Airport to Dammam Corniche Taxi",
    metaTitle: "King Fahd Airport to Dammam Corniche Taxi | Transfer",
    metaDescription:
      "Fixed-price King Fahd Airport (DMM) to Dammam Corniche taxi with meet and greet, flight tracking and door-to-door service to the waterfront. Available 24/7.",
    intro:
      "Heading straight for the waterfront? Our private King Fahd Airport to Dammam Corniche transfer includes meet and greet, flight tracking and a fixed price to your Corniche hotel or destination.",
    distance: "~24 km",
    duration: "25-32 min",
    highlights: [
      "Driver waiting in DMM arrivals with a name sign",
      "Direct door-to-door ride to any Corniche address",
      "Fixed price agreed before you travel, no meter",
      "Ideal for families heading to Corniche hotels and parks",
    ],
    sections: [
      {
        heading: "From the Terminal to the Waterfront",
        paragraphs: [
          "The Dammam Corniche is the city's showcase waterfront, lined with parks, promenades and family attractions along the Gulf. From King Fahd International Airport it is around 24 kilometres, a drive of roughly 25 to 32 minutes depending on traffic. Our private transfer takes you directly from arrivals to your Corniche hotel or destination, with no detour through a taxi rank.",
          "Families flying in for a beach and waterfront break particularly value this route, since it removes the need to negotiate transport with young children and luggage in tow. Our <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a> service is built around exactly this kind of smooth, door-to-door arrival.",
        ],
      },
      {
        heading: "Meet and Greet, Then Straight to the Sea",
        paragraphs: [
          "Your driver tracks your flight and waits inside the arrivals hall with a printed name board, so there is no searching for transport after a long journey. Luggage is loaded promptly, and if you are travelling with children, a car seat can be arranged in advance at no extra cost.",
          "Reasonable waiting time is included, so an early or delayed landing never becomes an additional charge. From there, it is a direct run out to the Corniche, past the business districts and toward the coastline that gives Dammam its most photographed views.",
        ],
      },
      {
        heading: "Arriving at Dammam's Waterfront",
        paragraphs: [
          "The Corniche stretches along the Gulf with landscaped parks, fountains, waterfront restaurants and family-friendly promenades, and it is home to several of the city's best-known hotels. Whether your destination is a Corniche-facing hotel or a specific park entrance, your driver takes you as close as road access allows.",
          "If your stay includes both sightseeing and business, the Corniche sits within easy reach of the city centre, and our <a href='/dammam/dammam-airport-to-dammam-city'>airport to Dammam city</a> transfer covers that onward leg on the same fixed-price basis.",
        ],
      },
      {
        heading: "Why a Fixed-Price Private Transfer Works Best",
        paragraphs: [
          "An airport taxi rank offers no certainty on price or wait time, particularly when several flights land close together. A private transfer replaces that with one agreed fare, a confirmed vehicle and a professional, English-speaking driver, so families can relax the moment they land.",
          "This is the same reliable standard behind every route in our <a href='/airport-transfers'>airport transfers</a> network, whether the destination is the waterfront, the city centre, or onward to Khobar and the Bahrain Causeway.",
        ],
      },
      {
        heading: "Booking Your Corniche Transfer",
        paragraphs: [
          "Reserving your ride takes only a few minutes. Share your flight number, arrival date and Corniche hotel or destination, and we confirm the vehicle and a fixed price before you travel. We operate 24/7 for early and late arrivals alike.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form and we will confirm your ride. From the terminal to the Gulf shoreline, we keep the journey simple.",
        ],
      },
    ],
    faqs: [
      { question: "How far is King Fahd Airport from Dammam Corniche?", answer: "It is around 24 kilometres, a drive of roughly 25 to 32 minutes depending on traffic. Given the airport's large size, allow a little extra time for the walk from your gate to the pickup point." },
      { question: "Can you drop us right at our Corniche hotel?", answer: "Yes. This is a door-to-door service, and your driver takes you as close to your Corniche hotel or destination as road access allows. Share the exact address when you book." },
      { question: "Do you provide child seats for family transfers?", answer: "Yes. Let us know the number and ages of children travelling when you book, and a suitable child or booster seat will be arranged at no extra cost." },
      { question: "Is the price fixed even with airport delays?", answer: "Yes. We track your flight, so an early or late landing shifts the pickup time rather than the price. The fare agreed before you travel is exactly what you pay." },
      { question: "Can I also book a return trip from the Corniche to the airport?", answer: "Yes. Our <a href='/dammam/dammam-corniche-to-dammam-airport'>Dammam Corniche to King Fahd Airport</a> transfer mirrors this service for your departure, timed to your flight." },
      { question: "Do you serve other waterfront and city destinations too?", answer: "Yes. Alongside the Corniche, we cover the city centre, business district, and every major Dammam hotel — see our <a href='/taxi-service/dammam'>Dammam taxi service</a> for the full coverage." },
    ],
    relatedTransferSlugs: ["dammam-corniche-to-dammam-airport", "dammam-airport-to-dammam-city", "dammam-airport-to-hotels"],
    relatedRouteSlugs: ["dammam-airport-to-khobar", "dammam-to-riyadh"],
    keywords: ["king fahd airport to dammam corniche taxi", "dmm airport to corniche transfer", "dammam corniche airport pickup", "dammam waterfront taxi from airport"],
  },
  {
    slug: "dammam-corniche-to-dammam-airport",
    category: "attraction",
    from: "Dammam Corniche",
    to: "King Fahd International Airport",
    h1: "Dammam Corniche to King Fahd Airport Taxi",
    metaTitle: "Dammam Corniche to King Fahd Airport Taxi | Transfer",
    metaDescription:
      "Book a fixed-price Dammam Corniche to King Fahd Airport (DMM) transfer with on-time pickup, luggage help and comfortable vehicles. Door-to-door, 24/7.",
    intro:
      "Finishing your stay on the waterfront? Our private Dammam Corniche to King Fahd Airport transfer gives you a punctual pickup, luggage help and a fixed fare to your flight.",
    distance: "~24 km",
    duration: "25-32 min",
    highlights: [
      "Pickup direct from your Corniche hotel or address",
      "Fixed fare with no surge pricing",
      "Timed with margin for the airport's large terminal",
      "Comfortable vehicles for families and groups",
    ],
    sections: [
      {
        heading: "From the Waterfront to Your Flight",
        paragraphs: [
          "Leaving the Dammam Corniche for a flight means covering around 24 kilometres to King Fahd International Airport, a drive of roughly 25 to 32 minutes. Because the airport is unusually large by land area, we build in extra time beyond the drive itself so you are not rushing between the terminal entrance and check-in.",
          "Whether you are checking out of a Corniche-facing hotel or leaving a waterfront apartment, your driver collects you at the entrance, loads your luggage, and heads directly for the airport with a fixed price agreed in advance.",
        ],
      },
      {
        heading: "Getting the Timing Right",
        paragraphs: [
          "We recommend arriving at King Fahd Airport around three hours before an international departure and two hours before a domestic one, then adding the drive and a sensible buffer. Share your flight time when you book and we will suggest a pickup that leaves you unhurried.",
          "Traffic along the route can build during peak commuting hours, so leaving a little earlier than you think necessary is always the safer choice. Since the fare is fixed, a longer drive in traffic never adds to your cost.",
        ],
      },
      {
        heading: "Door-to-Door From the Corniche",
        paragraphs: [
          "There is no need to arrange transport from the street outside your hotel. Your driver arrives at the agreed time, meets you at the lobby, and helps load your bags into an air-conditioned vehicle sized to your group. Families finishing a beach and waterfront stay often carry extra luggage, and this is accounted for when the vehicle is arranged.",
          "If you would like to combine your departure with a last stop in the city centre, our <a href='/dammam/dammam-city-to-dammam-airport'>Dammam city to airport</a> transfer covers that same route on request.",
        ],
      },
      {
        heading: "The Route to King Fahd International",
        paragraphs: [
          "From the Corniche, the drive heads inland and then north toward the airport complex, passing the business districts before reaching the terminal grounds. Your driver knows the correct approach for your airline's terminal, so you are dropped exactly where you need to be.",
          "If your next stop is another Saudi city rather than a flight, we also run long-distance routes such as <a href='/routes/dammam-to-riyadh'>Dammam to Riyadh</a> at the same fixed, agreed price.",
        ],
      },
      {
        heading: "Booking Your Corniche-to-Airport Ride",
        paragraphs: [
          "Reserving takes only a few minutes. Share your Corniche hotel or address, flight time and passenger count, and we confirm the vehicle and a fixed price before your travel day. We run 24/7 for early and late departures.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form. From the Gulf waterfront to your terminal, we keep the trip smooth and predictable.",
        ],
      },
    ],
    faqs: [
      { question: "How long does it take to reach the airport from the Corniche?", answer: "It is around 24 kilometres, usually 25 to 32 minutes. Because King Fahd Airport is very large, we also factor in extra time to reach check-in once you are dropped off." },
      { question: "Will the driver collect me from my Corniche hotel lobby?", answer: "Yes. This is a door-to-door pickup from your hotel entrance or address. Share your exact location when booking and your driver will meet you there at the agreed time." },
      { question: "How early should I leave for an international flight?", answer: "Aim to reach the terminal about three hours before departure, plus the drive time and a traffic buffer. Tell us your flight time and we will recommend a suitable pickup from the Corniche." },
      { question: "Is the fare fixed if the drive takes longer than expected?", answer: "Yes. The price is agreed before you travel with no meter and no surge pricing, regardless of traffic conditions along the way." },
      { question: "Can you carry a family with beach luggage and strollers?", answer: "Yes. We size the vehicle to your group and bags before the day, and larger vans are available for bigger families or extra luggage at no separate charge." },
      { question: "Do you also offer the reverse trip into the Corniche?", answer: "Yes. Our <a href='/dammam/dammam-airport-to-dammam-corniche'>King Fahd Airport to Dammam Corniche</a> transfer covers your arrival on the same fixed-price basis." },
    ],
    relatedTransferSlugs: ["dammam-airport-to-dammam-corniche", "dammam-city-to-dammam-airport", "hotels-to-dammam-airport"],
    relatedRouteSlugs: ["dammam-to-riyadh", "dammam-airport-to-khobar"],
    keywords: ["dammam corniche to king fahd airport taxi", "corniche to dmm airport transfer", "dammam corniche airport drop off", "waterfront to dammam airport taxi"],
  },
  {
    slug: "dammam-airport-to-business-district",
    category: "attraction",
    from: "King Fahd International Airport",
    to: "Dammam Business District",
    h1: "King Fahd Airport to Dammam Business District Taxi",
    metaTitle: "King Fahd Airport to Dammam Business District Taxi",
    metaDescription:
      "Fixed-price King Fahd Airport (DMM) to Dammam business district transfer with flight tracking and meet and greet. Trusted by energy-sector travellers, 24/7.",
    intro:
      "Travelling for business in the Eastern Province? Our private King Fahd Airport to Dammam business district transfer offers meet and greet, flight tracking and a fixed price to your office or meeting.",
    distance: "~19 km",
    duration: "20-25 min",
    highlights: [
      "Driver waiting in DMM arrivals with a name sign",
      "Corporate account and receipt options available",
      "Fixed price agreed before you travel, no meter",
      "Quick, direct run to Dammam's business districts",
    ],
    sections: [
      {
        heading: "A Reliable Start to a Business Trip",
        paragraphs: [
          "Dammam is the commercial heart of the Eastern Province, home to energy, petrochemical and logistics companies whose visitors rely on predictable ground transport. From King Fahd International Airport to the city's business district is around 19 kilometres, one of the quicker legs from the terminal, usually taking 20 to 25 minutes.",
          "For business travellers on a tight schedule, an unreliable airport pickup can derail an entire day of meetings. Our private transfer removes that risk with a confirmed driver, a fixed price and a route planned around getting you to your office or meeting on time.",
        ],
      },
      {
        heading: "Meet and Greet for the Working Traveller",
        paragraphs: [
          "Your driver tracks your flight and waits inside arrivals with a clearly printed name board, so there is no time lost searching for transport after landing. Luggage, laptop bags and equipment cases are handled carefully, and the vehicle is air-conditioned and comfortable for the drive into the city.",
          "Reasonable waiting time is included, so a delayed inbound flight or a slow immigration queue never turns into an extra charge or a missed meeting. This is the standard we apply across our <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a> service for business and leisure travellers alike.",
        ],
      },
      {
        heading: "Into Dammam's Commercial Core",
        paragraphs: [
          "The route runs south from the airport past the business park district toward the office towers and commercial streets that anchor Dammam's economy. Whether your destination is an energy-company headquarters, a bank, or a meeting venue, your driver takes you directly there rather than through a general city drop-off point.",
          "Corporate travellers often need a receipt or a repeat booking pattern for recurring visits, and our team can arrange this alongside your transfer, along with onward trips such as <a href='/routes/dammam-airport-to-khobar'>King Fahd Airport to Al Khobar</a> for meetings across the metro area.",
        ],
      },
      {
        heading: "Why Businesses Choose a Private Transfer",
        paragraphs: [
          "A private car removes the unpredictability of a taxi rank at exactly the moment punctuality matters most. There is no surge pricing when several flights arrive together, no language barrier explaining an office address, and no meter creating pressure to rush through traffic.",
          "This reliability extends across our full <a href='/airport-transfers'>airport transfers</a> network, supporting the steady flow of engineers, contractors and executives who move through King Fahd Airport for the Eastern Province's energy sector.",
        ],
      },
      {
        heading: "Booking Your Business Transfer",
        paragraphs: [
          "Reserving your ride takes only a few minutes. Share your flight number, arrival date and office or meeting address, and we confirm the vehicle and a fixed price before you travel. We operate 24/7, covering the early and late flights common on business routes.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form and we will confirm your booking. From the terminal to your meeting, we keep the ride efficient and dependable.",
        ],
      },
    ],
    faqs: [
      { question: "How long is the drive from King Fahd Airport to the business district?", answer: "It is around 19 kilometres, usually 20 to 25 minutes, one of the quicker routes from the terminal. Traffic during peak commuting hours can add a few minutes, which we account for in your pickup time." },
      { question: "Can you provide a receipt for corporate travel?", answer: "Yes. We can provide a receipt for your booking, and companies with recurring travel needs can set up a simple repeat-booking arrangement with our team." },
      { question: "Do you track flights for business travellers too?", answer: "Yes. Every airport pickup, business or leisure, includes flight tracking, so a delayed arrival never means a missed connection to your meeting." },
      { question: "Can you carry laptop bags and equipment cases?", answer: "Yes. Vehicles are sized to your luggage and equipment, and drivers assist with careful handling of business bags and cases at no extra charge." },
      { question: "Do you offer onward transfers across the Dammam metro area?", answer: "Yes. We run routes to Khobar, Dhahran, Jubail and other Eastern Province business hubs — see our <a href='/routes/dammam-airport-to-khobar'>King Fahd Airport to Al Khobar</a> route for an example." },
      { question: "Is the price fixed for business bookings?", answer: "Yes. The fare is agreed before you travel with no meter and no surge pricing, so travel costs are predictable and easy to expense." },
    ],
    relatedTransferSlugs: ["business-district-to-dammam-airport", "dammam-airport-to-dammam-city", "dammam-airport-to-hotels"],
    relatedRouteSlugs: ["dammam-airport-to-khobar", "dammam-to-riyadh"],
    keywords: ["king fahd airport to dammam business district taxi", "dmm airport corporate transfer", "dammam business travel taxi", "dammam airport to office transfer"],
  },
  {
    slug: "business-district-to-dammam-airport",
    category: "attraction",
    from: "Dammam Business District",
    to: "King Fahd International Airport",
    h1: "Dammam Business District to King Fahd Airport Taxi",
    metaTitle: "Dammam Business District to King Fahd Airport Taxi",
    metaDescription:
      "Book a fixed-price Dammam business district to King Fahd Airport (DMM) transfer with on-time pickup and corporate booking options. Door-to-door, 24/7.",
    intro:
      "Heading to the airport after meetings in Dammam? Our private business district to King Fahd Airport transfer offers punctual pickup from your office and a fixed fare to your flight.",
    distance: "~19 km",
    duration: "20-25 min",
    highlights: [
      "Pickup direct from your office or meeting venue",
      "Corporate accounts and receipts available",
      "Fixed fare with no surge pricing",
      "Quick, direct run to King Fahd Airport",
    ],
    sections: [
      {
        heading: "From the Office to Your Flight",
        paragraphs: [
          "Leaving Dammam's business district for King Fahd International Airport is a short, direct run of about 19 kilometres, usually 20 to 25 minutes. For business travellers, that predictability matters as much as the destination — a late pickup can mean a missed flight after a full day of meetings.",
          "Our driver arrives at your office or meeting venue at the agreed time, ready to load laptop bags and luggage, and heads straight for the airport with the route already planned around current traffic conditions.",
        ],
      },
      {
        heading: "Timed Around Your Meeting Schedule",
        paragraphs: [
          "We recommend allowing about three hours before an international departure and two hours before a domestic one, plus the drive and a sensible buffer. If your meeting runs long, a quick message lets us adjust the pickup, and the fixed price stays the same.",
          "Business travellers moving between Dammam, Khobar and Dhahran on the same day often build a transfer straight into their itinerary, and our team can help coordinate multiple pickups across a single visit.",
        ],
      },
      {
        heading: "Direct Pickup, No Waiting on the Street",
        paragraphs: [
          "There is no need to arrange a ride from outside your office building. Your driver meets you at the entrance or lobby at the agreed time, and the vehicle is air-conditioned and comfortable for the short run to the airport, with space for equipment cases and business luggage.",
          "If your day includes a stop elsewhere in the city first, we can build that into the route — see our <a href='/dammam/dammam-city-to-dammam-airport'>Dammam city to airport</a> transfer for a similar door-to-door pattern.",
        ],
      },
      {
        heading: "A Quick Run to King Fahd International",
        paragraphs: [
          "The drive heads north from the business district toward the airport complex, one of the more direct legs in the city given the district's proximity to the main highway. Your driver takes the correct route to your airline's terminal, so there is no confusion when you arrive with a schedule to keep.",
          "If your next stop is another Saudi city instead of a flight, our intercity routes such as <a href='/routes/dammam-to-riyadh'>Dammam to Riyadh</a> follow the same fixed-price, corporate-friendly standard.",
        ],
      },
      {
        heading: "Booking Your Business-to-Airport Transfer",
        paragraphs: [
          "Reserving takes only a few minutes. Share your office address, flight time and passenger count, and we confirm the vehicle and a fixed price before your travel day. We operate 24/7 to match early and late business flights.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form. From your meeting to the terminal, we keep business travel efficient and predictable.",
        ],
      },
    ],
    faqs: [
      { question: "How long does it take from the business district to King Fahd Airport?", answer: "It is around 19 kilometres, usually 20 to 25 minutes, one of the quicker airport runs in the city. Peak traffic can add a few minutes, which we build into your pickup time." },
      { question: "Can the pickup be arranged around a meeting schedule?", answer: "Yes. Tell us your expected meeting end time and flight, and we will plan the pickup with a sensible buffer. If plans change, a quick message lets us adjust." },
      { question: "Do you offer corporate accounts for regular travellers?", answer: "Yes. Companies with recurring travel can arrange a simple repeat-booking pattern and receipts through our team." },
      { question: "Is the fare fixed for business bookings?", answer: "Yes. The price is agreed before you travel, with no meter and no surge pricing, making it easy to plan and expense." },
      { question: "Can you handle multiple pickups across one visit?", answer: "Yes. We can coordinate several pickups across a single trip, for example between meetings in Dammam, Khobar and Dhahran." },
      { question: "Do you offer the arrival leg as well?", answer: "Yes. Our <a href='/dammam/dammam-airport-to-business-district'>King Fahd Airport to Dammam business district</a> transfer covers your arrival on the same fixed-price basis." },
    ],
    relatedTransferSlugs: ["dammam-airport-to-business-district", "dammam-city-to-dammam-airport", "hotels-to-dammam-airport"],
    relatedRouteSlugs: ["dammam-to-riyadh", "dammam-airport-to-khobar"],
    keywords: ["dammam business district to king fahd airport taxi", "dammam corporate airport transfer", "office to dmm airport taxi", "dammam business travel airport pickup"],
  },
  {
    slug: "dammam-airport-to-hotels",
    category: "service",
    from: "King Fahd International Airport",
    to: "Dammam Hotels",
    h1: "King Fahd Airport to Dammam Hotels Transfer",
    metaTitle: "King Fahd Airport to Dammam Hotels | Private Taxi",
    metaDescription:
      "Book a fixed-price transfer from King Fahd Airport (DMM) to any Dammam hotel — meet and greet, flight tracking, and door-to-door service. Available 24/7.",
    intro:
      "Landing in Dammam and heading to your hotel? Our private King Fahd Airport to hotel transfer covers every major property in the city, with meet and greet, flight tracking and a fixed price agreed in advance.",
    distance: "18-24 km",
    duration: "20-27 min",
    highlights: [
      "Covers every major hotel in Dammam, city-wide",
      "Driver waiting in DMM arrivals with a name sign",
      "Free flight tracking, so delays are covered",
      "Fixed price agreed before you travel, no meter",
    ],
    sections: [
      {
        heading: "One Reliable Transfer to Any Dammam Hotel",
        paragraphs: [
          "Whether you are booked into a Corniche-facing five-star, a business hotel near the office towers, or a value-focused property in the city centre, our King Fahd Airport to hotel transfer covers the whole city on the same fixed-price basis. Most Dammam hotels sit between 18 and 24 kilometres from the terminal, a drive of roughly 20 to 27 minutes.",
          "We run dedicated transfer pages for every major hotel in the city, from the <a href='/dammam/king-fahd-airport-to-sheraton-dammam-hotel-convention-centre'>Sheraton Dammam Hotel & Convention Centre</a> to the <a href='/dammam/king-fahd-airport-to-dana-rayhaan-by-rotana'>Dana Rayhaan by Rotana</a> and beyond — see the full list on our <a href='/cities/dammam'>Dammam airport transfers</a> hub.",
        ],
      },
      {
        heading: "Meet and Greet, Wherever You Are Staying",
        paragraphs: [
          "Your driver tracks your flight and waits inside the DMM arrivals hall with a printed name board, so the moment you clear the terminal you are heading straight for your hotel rather than searching for transport. Reasonable waiting time is included at no extra cost, covering delayed landings and slow immigration queues.",
          "Luggage is handled with care regardless of your hotel category, and families needing a child seat or extra space simply mention it when booking. This same standard applies across our full <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a> service.",
        ],
      },
      {
        heading: "Every District Covered",
        paragraphs: [
          "Dammam's hotels span several distinct districts — the Corniche waterfront, the city centre around King Saud Street, Prince Mohammed bin Fahd Road, and the business park near the airport itself. Our drivers know each district well, so whichever area your hotel sits in, the route is planned efficiently rather than generically.",
          "If your hotel is not listed on a dedicated page yet, simply share the name and address when you book and we will confirm the fare and pickup details directly.",
        ],
      },
      {
        heading: "Why Guests Choose a Fixed-Price Transfer",
        paragraphs: [
          "An airport taxi rank offers no certainty on price, particularly on busy arrival days. A private transfer replaces that with one agreed fare, a confirmed vehicle and a professional driver, so the trip to your hotel is calm and predictable regardless of which property you are staying at.",
          "This reliability is the same across every hotel route in our network, part of the wider <a href='/airport-transfers'>airport transfers</a> service that covers the whole of Dammam and the Eastern Province.",
        ],
      },
      {
        heading: "Booking Your Hotel Transfer",
        paragraphs: [
          "Reserving takes only a few minutes. Share your flight number, arrival date and hotel name, and we confirm the vehicle and an all-in fixed price before you travel. We operate 24/7 for early and late arrivals alike.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form and we will reply with a clear confirmation. From the terminal to your hotel lobby, we keep the journey simple.",
        ],
      },
    ],
    faqs: [
      { question: "Do you cover every hotel in Dammam?", answer: "Yes. We provide fixed-price transfers to every major hotel in the city, from five-star Corniche properties to business and budget hotels in the centre. See our <a href='/cities/dammam'>Dammam airport transfers</a> hub for the full list, or simply share your hotel name when booking." },
      { question: "How long is the drive from the airport to my hotel?", answer: "Most Dammam hotels are 18 to 24 kilometres from King Fahd Airport, a drive of roughly 20 to 27 minutes. The exact time depends on which district your hotel is in and the traffic on the day." },
      { question: "Where will my driver meet me at the airport?", answer: "Your driver waits inside the DMM arrivals hall with a printed name board after you collect your luggage. We track your flight, so an early or late landing simply shifts the pickup time." },
      { question: "Is the price fixed no matter which hotel I choose?", answer: "The price is fixed once you share your hotel, agreed before you travel with no meter and no surge pricing. Different hotels sit at different distances, so the fare is quoted for your specific destination." },
      { question: "Can you also take me from my hotel back to the airport?", answer: "Yes. Our <a href='/dammam/hotels-to-dammam-airport'>Dammam hotels to King Fahd Airport</a> transfer covers the return leg on the same fixed-price basis, timed to your flight." },
      { question: "Do you provide vehicles for families and groups?", answer: "Yes. Sedans, SUVs and larger vans are available depending on your group size and luggage, at no separate charge for standard bookings." },
    ],
    relatedTransferSlugs: ["hotels-to-dammam-airport", "dammam-airport-to-dammam-city", "dammam-airport-to-dammam-corniche"],
    relatedRouteSlugs: ["dammam-airport-to-khobar", "dammam-to-riyadh"],
    keywords: ["king fahd airport to dammam hotels taxi", "dmm airport hotel transfer", "dammam airport to hotel pickup", "dammam hotel transfer from airport"],
  },
  {
    slug: "hotels-to-dammam-airport",
    category: "service",
    from: "Dammam Hotels",
    to: "King Fahd International Airport",
    h1: "Dammam Hotels to King Fahd Airport Transfer",
    metaTitle: "Dammam Hotels to King Fahd Airport | Private Taxi",
    metaDescription:
      "Book a fixed-price transfer from any Dammam hotel to King Fahd Airport (DMM) — punctual pickup, luggage help, and a fare agreed in advance. 24/7 service.",
    intro:
      "Checking out and flying home? Our private Dammam hotel to King Fahd Airport transfer collects you from any hotel in the city with a punctual pickup and a fixed price agreed in advance.",
    distance: "18-24 km",
    duration: "20-27 min",
    highlights: [
      "Covers every major hotel in Dammam, city-wide",
      "On-time pickup timed to your check-in window",
      "Fixed fare with no surge pricing",
      "Comfortable ride to the correct DMM terminal entrance",
    ],
    sections: [
      {
        heading: "From Any Dammam Hotel to Your Flight",
        paragraphs: [
          "Whichever hotel you are staying at, our transfer collects you at the entrance and drives you directly to King Fahd International Airport. Most Dammam hotels sit between 18 and 24 kilometres from the terminal, a drive of roughly 20 to 27 minutes, and because the airport is unusually spread out, we plan a comfortable buffer beyond the drive itself.",
          "This route is covered for every major property in the city, including dedicated transfers from hotels such as the <a href='/dammam/braira-dammam-hotel-to-king-fahd-airport'>Braira Dammam Hotel</a> and the <a href='/dammam/carlton-al-moaibed-hotel-to-king-fahd-airport'>Carlton Al Moaibed Hotel</a> — see the full list on our <a href='/cities/dammam'>Dammam airport transfers</a> hub.",
        ],
      },
      {
        heading: "Timing Your Pickup Correctly",
        paragraphs: [
          "We suggest reaching the airport around three hours before an international departure and two hours before a domestic one, plus the drive and a sensible margin for the terminal's size. Share your flight time and hotel name when booking, and we will recommend a suitable pickup.",
          "Because the price is fixed, a longer wait in traffic never adds to your fare. If your checkout runs a little later than planned, a quick message lets us adjust the pickup where possible.",
        ],
      },
      {
        heading: "Door-to-Door From Your Hotel Lobby",
        paragraphs: [
          "There is no need to arrange transport from the street. Your driver arrives at the agreed time, meets you at the lobby, and loads your luggage into an air-conditioned vehicle sized to your group. This applies equally to five-star Corniche hotels, business properties, and value-focused city-centre options.",
          "If your hotel is not listed on a dedicated page yet, simply share the name and pickup time when you book and we will confirm the fare directly.",
        ],
      },
      {
        heading: "A Comfortable Run to King Fahd International",
        paragraphs: [
          "The route runs north toward the airport complex from wherever your hotel sits in the city, and your driver takes the correct approach for your airline's terminal so you are dropped exactly where you need to be.",
          "If your next stop is another Saudi city rather than a flight, we also run long-distance routes such as <a href='/routes/dammam-to-riyadh'>Dammam to Riyadh</a> at the same fixed, agreed price.",
        ],
      },
      {
        heading: "Booking Your Hotel-to-Airport Ride",
        paragraphs: [
          "Reserving takes only a few minutes. Share your hotel name, flight time and passenger count, and we confirm the vehicle and a fixed price before your travel day. We operate 24/7 for early and late departures.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form. From your hotel lobby to the terminal, we keep the trip smooth and predictable.",
        ],
      },
    ],
    faqs: [
      { question: "Do you collect from every hotel in Dammam?", answer: "Yes. We cover every major hotel in the city, from Corniche five-star properties to city-centre budget options. See our <a href='/cities/dammam'>Dammam airport transfers</a> hub for the full list, or share your hotel name when booking." },
      { question: "How early should I leave my hotel for my flight?", answer: "Aim to reach the terminal about three hours before an international flight and two hours before a domestic one, then add the drive time. Tell us your flight and hotel and we will suggest a pickup." },
      { question: "Will the driver collect me from the hotel lobby?", answer: "Yes. This is a door-to-door pickup from your hotel entrance. Your driver arrives at the agreed time and helps load your luggage into the vehicle." },
      { question: "Is the fare fixed no matter which hotel I'm staying at?", answer: "The fare is fixed once you share your hotel, agreed before you travel with no meter and no surge pricing. Different hotels sit at different distances, so the price reflects your specific starting point." },
      { question: "Can you also take me from the airport to my hotel on arrival?", answer: "Yes. Our <a href='/dammam/dammam-airport-to-hotels'>King Fahd Airport to Dammam hotels</a> transfer covers your arrival with meet and greet and flight tracking." },
      { question: "Do you provide larger vehicles for families or groups?", answer: "Yes. Sedans, SUVs and vans are available depending on your party size and luggage, at no separate charge for a standard transfer." },
    ],
    relatedTransferSlugs: ["dammam-airport-to-hotels", "dammam-city-to-dammam-airport", "dammam-corniche-to-dammam-airport"],
    relatedRouteSlugs: ["dammam-to-riyadh", "dammam-airport-to-khobar"],
    keywords: ["dammam hotels to king fahd airport taxi", "dammam hotel airport transfer", "hotel to dmm airport pickup", "dammam hotel to airport taxi"],
  },
];

export const dammamAttractions: PointTransfer[] = rawAttractions.map((t) => ({
  ...t,
  citySlug: "dammam",
}));
