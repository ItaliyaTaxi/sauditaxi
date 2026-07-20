import type { PointTransfer } from "../jeddah/types";

/**
 * King Abdulaziz Port (Dammam) transfer pages — airport ↔ port, hotels ↔ port,
 * and city ↔ port. Served at /dammam/{slug} via the shared route. Paragraph
 * strings may contain inline <a href='/...'> anchors (rendered as HTML).
 */
const rawPort: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "dammam-airport-to-king-abdulaziz-port",
    category: "port",
    from: "King Fahd International Airport",
    to: "King Abdulaziz Port",
    h1: "King Fahd Airport to King Abdulaziz Port Transfer",
    metaTitle: "King Fahd Airport to King Abdulaziz Port | Taxi",
    metaDescription:
      "Fixed-price King Fahd Airport (DMM) to King Abdulaziz Port transfer with meet and greet, flight tracking and luggage help. For cruise guests and crew, 24/7.",
    intro:
      "Flying in to join a ship or a cruise at Dammam's King Abdulaziz Port? Our private transfer from King Fahd Airport includes meet and greet, flight tracking and a fixed price agreed before you travel.",
    distance: "~30 km",
    duration: "32-38 min",
    highlights: [
      "Driver waiting in DMM arrivals with a name sign",
      "Free flight tracking, so delays are covered",
      "Timed to your embarkation or ship-join window",
      "Fixed price agreed before you travel, no meter",
    ],
    sections: [
      {
        heading: "From DMM Arrivals to the Quayside",
        paragraphs: [
          "King Abdulaziz Port is Dammam's principal seaport on the Gulf coast, handling cargo, container and passenger traffic for the Eastern Province. From King Fahd International Airport it is around 30 kilometres, usually a 32 to 38 minute drive. If you are flying in to board a cruise, join a working vessel, or meet a ship berthed at the port, a pre-booked private transfer removes the uncertainty of finding transport after a long flight.",
          "The port's terminal approaches and security gates can be busy, especially around shift changes and cargo movements. Our drivers know which access roads apply and take you as close to your embarkation point as port security permits. You can see how our wider <a href='/airport-transfer/dammam-airport'>Dammam airport transfer</a> service works before you fly.",
        ],
      },
      {
        heading: "Meet and Greet After You Land",
        paragraphs: [
          "Your driver tracks your flight and waits inside the DMM arrivals hall with a printed name board, so an early or delayed landing simply shifts the pickup time. There is no negotiating a fare and no language barrier after a long journey. Seafarers joining a vessel often carry heavy kit bags, and the vehicle is sized to your group and luggage before you arrive.",
          "Reasonable waiting time after landing is always included, so immigration queues never turn into an extra charge. If you need to coordinate a group arrival for a crew change, let us know when you book and we will match the right vehicle.",
        ],
      },
      {
        heading: "Timed for Your Embarkation or Ship Join",
        paragraphs: [
          "Ships do not wait, so when you book, share your flight arrival time and your embarkation or reporting time at the port, and we will plan a pickup with a sensible buffer for traffic and terminal formalities. Cruise lines and shipping agents typically set a boarding or reporting window, and arriving comfortably within it means no last-minute rush.",
          "If your flight lands the day before you sail, we are equally happy to take you to a hotel first and handle the short hop to the port the next day through our <a href='/dammam/dammam-hotels-to-king-abdulaziz-port'>Dammam hotels to King Abdulaziz Port</a> transfer.",
        ],
      },
      {
        heading: "For Seafarers and Crew Joining a Vessel",
        paragraphs: [
          "Crew changes at King Abdulaziz Port are a regular part of our work. Seafarers flying in to sign on often arrive on tight itineraries with specific reporting times set by their agent or master, and our drivers are used to the documentation checks and access procedures at the port gates. Sharing a berth number or terminal reference when you book helps us take you to the right point.",
          "For crews travelling as a group, we can arrange a vehicle large enough for several people and their kit in one trip. The reverse leg for sign-offs is covered by our <a href='/dammam/king-abdulaziz-port-to-dammam-airport'>King Abdulaziz Port to King Fahd Airport</a> service.",
        ],
      },
      {
        heading: "Booking Your Airport-to-Port Transfer",
        paragraphs: [
          "Reserving your ride takes only a few minutes. Share your flight details, arrival date and your embarkation or reporting time at King Abdulaziz Port, and we will confirm the vehicle and a fixed, all-in price before you travel.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form. Whether you are boarding a cruise or joining a working ship, we will get you from DMM to the quayside on time.",
        ],
      },
    ],
    faqs: [
      { question: "How long is the drive from King Fahd Airport to King Abdulaziz Port?", answer: "The port is around 30 kilometres from the airport, and the drive normally takes 32 to 38 minutes. Peak traffic can push it toward the upper end, but since your price is fixed, extra minutes never change the fare." },
      { question: "Can you get me to the port in time for my cruise embarkation?", answer: "Yes. Tell us your flight arrival time and boarding window when you book, and we plan a pickup with a sensible buffer for traffic and port formalities so you reach the quayside comfortably ahead of time." },
      { question: "Do you help with luggage and kit bags?", answer: "Yes. The vehicle is sized to your group and bags before you arrive, and your driver assists with loading and unloading at no extra charge on a standard transfer." },
      { question: "Can you transfer a whole ship's crew together?", answer: "Yes. We can arrange a vehicle large enough for several crew members and their kit in a single trip. Share your numbers and reporting time when booking." },
      { question: "Is the price fixed even if my flight is delayed?", answer: "Yes. We track your flight, so the pickup adjusts to your actual landing, and reasonable waiting is included. The agreed fare does not change." },
      { question: "Do you also transfer from the port back to the airport?", answer: "Yes. Our <a href='/dammam/king-abdulaziz-port-to-dammam-airport'>King Abdulaziz Port to King Fahd Airport</a> transfer covers your departure on the same fixed-price basis." },
    ],
    relatedTransferSlugs: ["king-abdulaziz-port-to-dammam-airport", "dammam-hotels-to-king-abdulaziz-port", "dammam-airport-to-dammam-city"],
    relatedRouteSlugs: ["dammam-to-riyadh"],
    keywords: ["dammam airport to king abdulaziz port taxi", "dmm airport to dammam seaport transfer", "cruise transfer dammam airport", "seafarer transfer dammam airport"],
  },
  {
    slug: "king-abdulaziz-port-to-dammam-airport",
    category: "port",
    from: "King Abdulaziz Port",
    to: "King Fahd International Airport",
    h1: "King Abdulaziz Port to King Fahd Airport Transfer",
    metaTitle: "King Abdulaziz Port to King Fahd Airport | Taxi",
    metaDescription:
      "Book a fixed-price King Abdulaziz Port to King Fahd Airport (DMM) transfer with on-time pickup from the port gate and luggage help. Cruise and crew, 24/7.",
    intro:
      "Leaving Dammam by air after a cruise or ship assignment? Our private King Abdulaziz Port to King Fahd Airport transfer times your pickup to your flight, with luggage help and a fixed price.",
    distance: "~30 km",
    duration: "32-38 min",
    highlights: [
      "Pickup timed to your disembarkation and flight",
      "Luggage help from the port gate to your terminal",
      "Reasonable waiting included if clearance runs late",
      "Fixed fare with no surge on busy cruise days",
    ],
    sections: [
      {
        heading: "From the Port Gate to DMM Departures",
        paragraphs: [
          "Our King Abdulaziz Port to King Fahd Airport transfer collects you from the port and delivers you to the airport, roughly 30 kilometres away, in a typical 32 to 38 minutes. The focus on this leg is timing: your driver arrives at the port in good time, helps with your luggage, and sets off with enough margin to get you to the terminal comfortably before check-in closes.",
          "Disembarking passengers and crew signing off often leave in waves, and the port can be busy on a turnaround day. We plan your pickup around your expected clearance time rather than a rigid slot, and reasonable waiting is built in so a slow disembarkation does not cost you extra.",
        ],
      },
      {
        heading: "Timing Your Pickup Around Disembarkation",
        paragraphs: [
          "Getting the pickup time right is the whole art of a port-to-airport transfer. Cruise lines usually publish disembarkation groups and a final clearance time, while ships assign sign-off times to crew. Tell us your flight departure time and when you expect to be off the ship, and we will work back from your flight to protect your connection.",
          "As a rule we suggest reaching King Fahd Airport around three hours before an international departure and two hours before a domestic one, then adding the drive time and a traffic buffer. Because the price is fixed, a longer wait never changes your fare.",
        ],
      },
      {
        heading: "A Smooth Run to King Fahd International",
        paragraphs: [
          "The drive from the port heads onto Dammam's main highways toward the airport in the north of the city. Your driver takes the most reliable route to the correct terminal for your airline, and there is no meter running to reward a slower journey.",
          "If you are not flying out immediately and want to see the city first, our <a href='/taxi-service/dammam'>Dammam taxi service</a> covers hotels, the Corniche and the city centre, and we can build a stop into your journey on request.",
        ],
      },
      {
        heading: "Crew Sign-Offs and Onward Travel",
        paragraphs: [
          "Seafarers signing off at King Abdulaziz Port frequently head straight to the airport for a flight home or to another vessel. We stay flexible on sign-off timing and keep the price fixed regardless of when you actually clear the gate, and group vehicles are available for whole crews travelling together.",
          "Some crew members continue by road instead, for example onward to <a href='/routes/dammam-to-riyadh'>Riyadh</a> or across the Bahrain Causeway, all at fixed, agreed prices with professional drivers.",
        ],
      },
      {
        heading: "How to Book Your Port Pickup",
        paragraphs: [
          "Booking is quick. Send us your ship or terminal details, your expected disembarkation or sign-off time, and your flight departure, and we will confirm a fixed, all-in price before the day arrives.",
          "For the fastest reply, message us on WhatsApp for your fixed-price quote, or complete our <a href='/get-quote'>get a quote</a> form. Whether you are a cruise passenger flying home or a crew member signing off, we will get you from the quay to your gate on time.",
        ],
      },
    ],
    faqs: [
      { question: "What time will you pick me up from the port for my flight?", answer: "We work back from your flight, aiming to reach King Fahd Airport around three hours before an international departure and two hours before a domestic one, then add the drive time and a traffic buffer." },
      { question: "What if my disembarkation or crew sign-off is delayed?", answer: "We plan around your expected clearance rather than a rigid slot, and reasonable waiting is included, so a slow disembarkation does not add to the cost." },
      { question: "Where does the driver meet me at King Abdulaziz Port?", answer: "Your driver waits at an agreed meeting point near your terminal. Sharing your ship name, terminal or berth reference when you book helps us position the car precisely." },
      { question: "How long is the drive to the airport from the port?", answer: "King Fahd Airport is around 30 kilometres from the port, and the drive typically takes 32 to 38 minutes, with a buffer built into your quoted pickup time." },
      { question: "Can you take a group of crew to the airport together?", answer: "Yes. We provide vehicles large enough to carry several crew members and their kit in one trip. Let us know your numbers and sign-off time when you book." },
      { question: "Can you offer an intercity trip instead of an airport drop?", answer: "Yes. If your onward travel is to another Saudi city, we run long-distance routes such as <a href='/routes/dammam-to-riyadh'>Dammam to Riyadh</a> at fixed, agreed prices." },
    ],
    relatedTransferSlugs: ["dammam-airport-to-king-abdulaziz-port", "king-abdulaziz-port-to-dammam-hotels"],
    relatedRouteSlugs: ["dammam-to-riyadh"],
    keywords: ["king abdulaziz port to dammam airport taxi", "dammam seaport to dmm transfer", "cruise to airport taxi dammam", "crew transfer port to dammam airport"],
  },
  {
    slug: "dammam-hotels-to-king-abdulaziz-port",
    category: "port",
    from: "Dammam Hotels",
    to: "King Abdulaziz Port",
    h1: "Dammam Hotels to King Abdulaziz Port Transfer",
    metaTitle: "Dammam Hotels to King Abdulaziz Port | Cruise Taxi",
    metaDescription:
      "Fixed-price transfer from your Dammam hotel to King Abdulaziz Port with a professional driver, luggage help and no surge pricing. Cruise guests, 24/7.",
    intro:
      "Staying in Dammam and heading to the port? Our private hotel to King Abdulaziz Port transfer collects you from your lobby with a fixed price and easy help with your luggage.",
    distance: "8-20 km",
    duration: "12-25 min",
    highlights: [
      "Door-to-door pickup from your hotel lobby",
      "Short local trip, sized to your group and bags",
      "Left in good time for your boarding window",
      "Fixed price agreed in advance, no meter, 24/7",
    ],
    sections: [
      {
        heading: "A Short Local Hop to King Abdulaziz Port",
        paragraphs: [
          "For guests already staying in Dammam, the journey to King Abdulaziz Port is a short local transfer rather than a long airport run. Depending on where your hotel sits, the distance is usually between 8 and 20 kilometres and the drive takes around 12 to 25 minutes. Hotels near the city centre and the port road are closer, while those on the Corniche or further out sit a little further away.",
          "We collect you from your hotel entrance and take you directly to the port, sized and timed to your group. It is a service used by cruise passengers who spent a night or two in Dammam first, by seafarers heading out to join a vessel, and by business visitors calling on the port. See the wider set of destinations we serve on our <a href='/taxi-service/dammam'>Dammam taxi service</a> page.",
        ],
      },
      {
        heading: "Door-to-Door From Your Hotel Lobby",
        paragraphs: [
          "There is no need to walk to a rank or flag down a passing car. Your driver arrives at the agreed time, meets you at the lobby, and loads your luggage into a clean, air-conditioned vehicle. For cruise guests with several large cases, or crew with heavy kit bags, that door-to-door handling makes a real difference at the start of a travel day.",
          "If you are checking out, we can time the pickup around your checkout so there is no awkward wait with your bags in reception. Just share your hotel name and address when you book, along with the time you would like to leave.",
        ],
      },
      {
        heading: "Planning Your Departure Time",
        paragraphs: [
          "The key to a smooth hotel-to-port transfer is leaving with enough time in hand. Cruise lines set a boarding window and shipping agents assign reporting times, so work back from that to choose your pickup. Roads near the port can slow at peak hours and around prayer times, so we add a sensible buffer rather than cutting it fine.",
          "When you book, tell us your embarkation or reporting time and we will suggest a pickup that gets you there comfortably ahead of it. Because the fare is fixed, a few extra minutes in traffic never adds to the cost.",
        ],
      },
      {
        heading: "Seafarers, Agents and Business Visitors",
        paragraphs: [
          "The port is a workplace as much as a passenger gateway, and we regularly carry seafarers, shipping agents and business travellers between city hotels and the terminals. Crew joining a vessel value a punctual, reliable pickup, while agents and visitors appreciate a professional car and a fixed price.",
          "For groups, a larger vehicle keeps everyone and their bags together in a single trip. We can also help with onward or intercity travel, from a run to the airport to longer trips such as <a href='/routes/dammam-to-riyadh'>Dammam to Riyadh</a>.",
        ],
      },
      {
        heading: "Reserve Your Hotel-to-Port Ride",
        paragraphs: [
          "Booking takes only a few minutes. Share your hotel name, your destination terminal or berth at King Abdulaziz Port, and your embarkation or reporting time, and we will confirm the vehicle and a fixed, all-in price in advance.",
          "For the quickest response, message us on WhatsApp for a fixed-price quote, or fill in our <a href='/get-quote'>get a quote</a> form. From your Dammam hotel lobby to the quayside, we make the trip to the port simple and stress-free.",
        ],
      },
    ],
    faqs: [
      { question: "How far is my Dammam hotel from King Abdulaziz Port?", answer: "It depends on where you are staying. Most hotels are between 8 and 20 kilometres from the port, a drive of about 12 to 25 minutes. City-centre hotels are usually closer, while Corniche properties are a little further." },
      { question: "When should I leave my hotel to reach the port on time?", answer: "Work back from your boarding or reporting time. We add a sensible buffer for traffic and formalities and suggest a pickup that gets you there comfortably ahead of your window." },
      { question: "Will the driver collect me from my hotel lobby?", answer: "Yes. This is a door-to-door service. Your driver meets you at the lobby at the agreed time and loads your luggage into an air-conditioned vehicle." },
      { question: "Can you carry a group of crew or a family with lots of luggage?", answer: "Yes. We size the vehicle to your group and bags before the day, and larger vehicles keep everyone travelling together in one trip." },
      { question: "Is the fare fixed for such a short local trip?", answer: "Yes. The price is agreed before you travel with no meter and no surge pricing, even on a busy cruise day." },
      { question: "Do you also transfer from the port back to a hotel?", answer: "Yes. Our <a href='/dammam/king-abdulaziz-port-to-dammam-hotels'>King Abdulaziz Port to Dammam hotels</a> transfer covers the trip from the quay to your accommodation." },
    ],
    relatedTransferSlugs: ["king-abdulaziz-port-to-dammam-hotels", "dammam-airport-to-king-abdulaziz-port", "dammam-airport-to-dammam-corniche"],
    relatedRouteSlugs: ["dammam-to-riyadh"],
    keywords: ["dammam hotels to king abdulaziz port taxi", "hotel to dammam seaport transfer", "dammam cruise port transfer from hotel", "dammam port taxi from hotel"],
  },
  {
    slug: "king-abdulaziz-port-to-dammam-hotels",
    category: "port",
    from: "King Abdulaziz Port",
    to: "Dammam Hotels",
    h1: "King Abdulaziz Port to Dammam Hotels Transfer",
    metaTitle: "King Abdulaziz Port to Dammam Hotels | Cruise Taxi",
    metaDescription:
      "Just arrived by sea? Book a fixed-price King Abdulaziz Port to Dammam hotel transfer with meet and greet at the terminal and luggage help. Door-to-door, 24/7.",
    intro:
      "Just stepped off a ship in Dammam? Our private King Abdulaziz Port to hotel transfer meets you near the terminal and drives you door-to-door to your city hotel.",
    distance: "8-20 km",
    duration: "12-25 min",
    highlights: [
      "Driver meets you near the port terminal",
      "Reasonable waiting included for slow disembarkation",
      "Direct door-to-door ride to any Dammam hotel",
      "Fixed price with luggage help, no surge, 24/7",
    ],
    sections: [
      {
        heading: "From the Quay to Your Dammam Hotel",
        paragraphs: [
          "Arriving in Dammam by sea and stepping off the ship into a waiting private car makes the transition into town effortless. Our King Abdulaziz Port to hotel transfer takes you from the port to your accommodation anywhere in the city, a trip of roughly 8 to 20 kilometres that usually takes 12 to 25 minutes depending on where you are staying and the traffic.",
          "The port handles cargo, cruise and passenger traffic, and disembarkation on a busy day can be gradual. We plan the pickup around your expected clearance time and include reasonable waiting, so there is no pressure and no extra charge if formalities take a little longer than expected.",
        ],
      },
      {
        heading: "Meeting You After Disembarkation",
        paragraphs: [
          "Clearing a ship involves immigration and, for many travellers, collecting checked baggage, so the moment you actually reach the pickup point can vary. Rather than a rigid slot, we track your arrival and stay flexible, and your driver waits at an agreed meeting point near the terminal with your details to hand.",
          "For families and larger groups, the vehicle is sized so everyone and their luggage travel together in one comfortable trip, part of the same careful handling behind our wider <a href='/taxi-service/dammam'>Dammam taxi service</a>.",
        ],
      },
      {
        heading: "Settling into the City",
        paragraphs: [
          "Once you are in the car, the drive into Dammam passes the port district and toward the city centre or Corniche, depending on your hotel. Your driver knows the city well and can point out landmarks along the way, and if your room is not ready yet, we can suggest a short stop rather than sitting idle in reception.",
          "If you would like to see the sights straight away, ask about a detour along the <a href='/dammam/dammam-airport-to-dammam-corniche'>Dammam Corniche</a>. Because the price is fixed and agreed in advance, a short stop never changes your fare.",
        ],
      },
      {
        heading: "Comfort After a Long Voyage",
        paragraphs: [
          "Whether you have spent a week on a cruise or a longer stretch working aboard a vessel, a comfortable, air-conditioned car is a welcome change from the gangway and the gate. Crew members on shore leave use this transfer too, heading into the city to a hotel for a rest before their next rotation.",
          "There is no need to negotiate with drivers waiting outside the port. Your car is confirmed in advance, the price is set, and reasonable waiting is included. If you plan to return to the port later in your trip, the reverse leg is covered by our <a href='/dammam/dammam-hotels-to-king-abdulaziz-port'>hotels to King Abdulaziz Port</a> transfer.",
        ],
      },
      {
        heading: "Book Your Port-to-Hotel Transfer",
        paragraphs: [
          "Booking is straightforward. Send us your ship name, your expected disembarkation time and your Dammam hotel address, and we will confirm a fixed, all-in price and a meeting plan before you arrive.",
          "For the fastest response, message us on WhatsApp for your fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form. From the moment you step ashore in Dammam, we make getting to your hotel calm and predictable.",
        ],
      },
    ],
    faqs: [
      { question: "Where will the driver meet me after I leave the ship?", answer: "Your driver waits at an agreed meeting point near the terminal with your booking details to hand. Sharing your ship name and expected clearance time when you book lets us position the car precisely." },
      { question: "What if disembarkation takes a long time?", answer: "We plan around your expected clearance rather than a fixed slot, and reasonable waiting is included at no extra cost." },
      { question: "How long is the drive from the port to a Dammam hotel?", answer: "Most city hotels are 8 to 20 kilometres from the port, a drive of about 12 to 25 minutes depending on your location and the traffic." },
      { question: "Can you take me onward to another city after I check in?", answer: "Yes. Many arrivals rest at a Dammam hotel first, then continue on to Riyadh or elsewhere. We run long-distance routes at fixed prices with professional drivers." },
      { question: "Do you operate for late-night or early arrivals by sea?", answer: "Yes, we run 24 hours a day, so your car is confirmed in advance for whatever time you disembark." },
      { question: "Is luggage help included when I arrive by sea?", answer: "Yes. Your driver assists with loading and unloading, and the vehicle is sized to your group and bags before the day." },
    ],
    relatedTransferSlugs: ["dammam-hotels-to-king-abdulaziz-port", "king-abdulaziz-port-to-dammam-airport", "dammam-airport-to-dammam-corniche"],
    relatedRouteSlugs: ["dammam-to-riyadh"],
    keywords: ["king abdulaziz port to dammam hotels", "dammam seaport to hotel transfer", "cruise port to dammam hotel taxi", "arrive by sea dammam transfer"],
  },
  {
    slug: "dammam-city-to-king-abdulaziz-port",
    category: "port",
    from: "Dammam City",
    to: "King Abdulaziz Port",
    h1: "Dammam City to King Abdulaziz Port Transfer",
    metaTitle: "Dammam City to King Abdulaziz Port | Private Taxi",
    metaDescription:
      "Fixed-price Dammam city to King Abdulaziz Port transfer with a professional driver and door-to-door pickup from any city address. Available 24/7.",
    intro:
      "Heading to the port from central Dammam? Our private city to King Abdulaziz Port transfer collects you from any address with a fixed price and a professional driver.",
    distance: "~8 km",
    duration: "12-15 min",
    highlights: [
      "Door-to-door pickup from any Dammam city address",
      "Quick local trip, usually under 15 minutes",
      "Left in good time for your boarding or reporting window",
      "Fixed price agreed in advance, no meter, 24/7",
    ],
    sections: [
      {
        heading: "A Quick Local Trip to the Port",
        paragraphs: [
          "King Abdulaziz Port sits close to central Dammam, and the transfer from the city is one of the shortest local trips we run — around 8 kilometres, typically 12 to 15 minutes. Whether you are heading to the port for a cruise, a crew sign-on, or a business visit, we collect you from your exact address in the city and take you directly to the terminal.",
          "Because the trip is short, timing still matters — port access and gate procedures can add a few minutes at the other end, so we always build in a small buffer for your boarding or reporting window.",
        ],
      },
      {
        heading: "Door-to-Door From Central Dammam",
        paragraphs: [
          "There is no need to arrange transport from the street. Your driver arrives at your home, office or hotel at the agreed time, helps load your luggage, and heads directly for the port. This is the same door-to-door standard behind our <a href='/taxi-service/dammam'>Dammam taxi service</a>.",
          "If you are travelling with a group or heavy kit bags, let us know when you book and we will match a suitably sized vehicle at no extra cost.",
        ],
      },
      {
        heading: "Planning Around Port Formalities",
        paragraphs: [
          "Cruise lines and shipping agents typically set a reporting window, and we work back from that time to suggest your pickup. Roads near the port district can be a little busier during peak hours, so leaving a few minutes early is always the safer choice.",
          "Because the fare is fixed regardless of the exact route or timing, there is no pressure to rush and no surprise cost if traffic runs slightly heavier than usual.",
        ],
      },
      {
        heading: "For Business Visitors and Port Callers",
        paragraphs: [
          "The port is a regular destination for shipping agents, contractors and business visitors as well as passengers. A private transfer offers a professional, punctual option for a short but time-sensitive trip, with a driver who knows the terminal access points.",
          "If your visit also involves the airport, our <a href='/dammam/dammam-airport-to-king-abdulaziz-port'>King Fahd Airport to King Abdulaziz Port</a> transfer covers that longer leg on the same fixed-price basis.",
        ],
      },
      {
        heading: "Booking Your City-to-Port Transfer",
        paragraphs: [
          "Reserving takes only a few minutes. Share your pickup address, destination terminal or berth, and your reporting time, and we confirm the vehicle and a fixed price before your travel day.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form. From your Dammam address to the quayside, we keep the trip quick and predictable.",
        ],
      },
    ],
    faqs: [
      { question: "How far is central Dammam from King Abdulaziz Port?", answer: "It is only around 8 kilometres, usually a 12 to 15 minute drive, one of the shortest transfers we run in the city." },
      { question: "Will you collect me from my exact address?", answer: "Yes. This is a door-to-door service from any home, office or hotel in central Dammam. Share your exact pickup address when you book." },
      { question: "Is the price fixed for such a short trip?", answer: "Yes. The fare is agreed before you travel with no meter and no surge pricing, regardless of minor traffic delays." },
      { question: "Can you carry a group with luggage?", answer: "Yes. Vehicles are sized to your group and bags, and larger vans are available for bigger parties at no extra charge." },
      { question: "Do you also offer the reverse trip from the port?", answer: "Yes. Our <a href='/dammam/king-abdulaziz-port-to-dammam-city'>King Abdulaziz Port to Dammam city</a> transfer covers the return leg." },
      { question: "Can I book a very early or late pickup?", answer: "Yes, we operate 24/7, matching the reporting times set by cruise lines and shipping agents at any hour." },
    ],
    relatedTransferSlugs: ["king-abdulaziz-port-to-dammam-city", "dammam-airport-to-king-abdulaziz-port", "dammam-hotels-to-king-abdulaziz-port"],
    relatedRouteSlugs: ["dammam-to-riyadh"],
    keywords: ["dammam city to king abdulaziz port taxi", "dammam to seaport transfer", "dammam port pickup", "dammam city to port taxi"],
  },
  {
    slug: "king-abdulaziz-port-to-dammam-city",
    category: "port",
    from: "King Abdulaziz Port",
    to: "Dammam City",
    h1: "King Abdulaziz Port to Dammam City Transfer",
    metaTitle: "King Abdulaziz Port to Dammam City | Private Taxi",
    metaDescription:
      "Book a fixed-price King Abdulaziz Port to Dammam city transfer with meet and greet at the terminal and door-to-door delivery. Available 24/7.",
    intro:
      "Just arrived by sea in Dammam? Our private King Abdulaziz Port to city transfer meets you near the terminal and drives you door-to-door to any address in central Dammam.",
    distance: "~8 km",
    duration: "12-15 min",
    highlights: [
      "Driver meets you near the port terminal",
      "Reasonable waiting included for slow disembarkation",
      "Direct door-to-door ride to any city address",
      "Fixed price with luggage help, no surge, 24/7",
    ],
    sections: [
      {
        heading: "From the Quay to Central Dammam",
        paragraphs: [
          "Stepping off a ship at King Abdulaziz Port and into a waiting private car is a smooth way to reach the city. Because the port sits so close to central Dammam, this is one of our shortest transfers — around 8 kilometres, typically a 12 to 15 minute drive to your address in the city.",
          "The port handles cargo, cruise and passenger traffic, and disembarkation on a busy day can be gradual. We plan the pickup around your expected clearance time and include reasonable waiting at no extra cost.",
        ],
      },
      {
        heading: "Meeting You After Disembarkation",
        paragraphs: [
          "Rather than a rigid slot, we track your arrival and stay flexible, and your driver waits at an agreed meeting point near the terminal with your details to hand. Sharing your ship name and expected clearance time when you book helps us position the car precisely.",
          "For families and larger groups, the vehicle is sized so everyone and their luggage travel together in one comfortable trip.",
        ],
      },
      {
        heading: "A Quick Introduction to the City",
        paragraphs: [
          "The short drive from the port takes you straight into central Dammam, past the port district and toward the King Saud Street commercial core or wherever your destination lies. Your driver can point out landmarks along the way if it is your first visit.",
          "If you would like to continue to the Corniche or elsewhere in the city, our <a href='/taxi-service/dammam'>Dammam taxi service</a> covers every district on the same fixed-price basis.",
        ],
      },
      {
        heading: "For Seafarers and Business Visitors",
        paragraphs: [
          "Crew members on shore leave and business visitors calling at the port both use this transfer to reach the city quickly. There is no need to negotiate with drivers waiting outside the port — your car is confirmed in advance and the price is set.",
          "If you plan to return to the port later, the reverse leg is covered by our <a href='/dammam/dammam-city-to-king-abdulaziz-port'>Dammam city to King Abdulaziz Port</a> transfer.",
        ],
      },
      {
        heading: "Book Your Port-to-City Transfer",
        paragraphs: [
          "Booking is straightforward. Send us your ship name, expected disembarkation time and your Dammam city destination, and we will confirm a fixed, all-in price and a meeting plan before you arrive.",
          "For the fastest response, message us on WhatsApp for your fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form. From the quay to your door, we make arriving in Dammam calm and predictable.",
        ],
      },
    ],
    faqs: [
      { question: "Where will the driver meet me after I leave the ship?", answer: "Your driver waits at an agreed meeting point near the terminal with your booking details to hand. Sharing your ship name and expected clearance time helps us position the car precisely." },
      { question: "How long is the drive from the port into the city?", answer: "It is only around 8 kilometres, usually a 12 to 15 minute drive, one of the shortest transfers in Dammam." },
      { question: "What if disembarkation takes longer than expected?", answer: "We plan around your expected clearance rather than a fixed slot, and reasonable waiting is included at no extra cost." },
      { question: "Can you drop me at any address in the city?", answer: "Yes. This is a door-to-door service to any home, office or hotel in central Dammam. Share your destination address when you book." },
      { question: "Do you operate for late-night or early arrivals by sea?", answer: "Yes, we run 24 hours a day, so your car is confirmed for whatever time you disembark." },
      { question: "Is luggage help included?", answer: "Yes. Your driver assists with loading and unloading, and the vehicle is sized to your group and bags before the day." },
    ],
    relatedTransferSlugs: ["dammam-city-to-king-abdulaziz-port", "king-abdulaziz-port-to-dammam-airport", "king-abdulaziz-port-to-dammam-hotels"],
    relatedRouteSlugs: ["dammam-to-riyadh"],
    keywords: ["king abdulaziz port to dammam city taxi", "dammam seaport to city transfer", "dammam port to city taxi", "arrive by sea dammam city transfer"],
  },
];

export const dammamPort: PointTransfer[] = rawPort.map((t) => ({
  ...t,
  citySlug: "dammam",
}));
