import type { PointTransfer } from "./types";

/**
 * Jeddah seaport (Jeddah Islamic Port) and Haramain railway (Sulaymaniyah
 * station) transfer pages — airport ↔ point and hotels ↔ point. Served at
 * /jeddah/{slug}. Paragraph strings may contain inline <a href='/...'> anchors.
 */
const raw: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "jeddah-airport-to-jeddah-islamic-port",
    category: "port",
    from: "Jeddah Airport",
    to: "Jeddah Islamic Port",
    h1: "Jeddah Airport to Jeddah Islamic Port Transfer",
    metaTitle: "Jeddah Airport to Jeddah Islamic Port | Private Taxi",
    metaDescription:
      "Fixed-price Jeddah Airport to Jeddah Islamic Port transfer with meet and greet, flight tracking and luggage help. Door-to-door ride for cruise guests, 24/7.",
    intro:
      "Flying in for a cruise or joining a ship? Our private Jeddah Airport to Jeddah Islamic Port transfer includes meet and greet, flight tracking, luggage help and a fixed price agreed before you travel.",
    distance: "~40 km",
    duration: "40-55 min",
    highlights: [
      "Driver waiting in JED arrivals with a name sign",
      "Free flight tracking, so delays are covered",
      "Timed to your cruise embarkation or ship join",
      "Fixed price agreed before you travel, no meter",
    ],
    sections: [
      {
        heading: "From JED Arrivals to the Quayside",
        paragraphs: [
          "Jeddah Islamic Port sits on the Red Sea coast about 40 kilometres from King Abdulaziz International Airport, and the drive between the two usually takes 40 to 55 minutes depending on traffic and the time of day. If you are flying in to board a cruise, join a working vessel, or connect with a ship berthed at the port, the last thing you want after a long flight is uncertainty about how you will reach the quayside. A pre-booked private transfer removes that worry entirely: a driver is confirmed for your flight, the fare is agreed in advance, and the car is waiting when you clear the terminal.",
          "The port is one of the busiest on the Red Sea, handling cargo, passenger and cruise traffic, so its access roads and gates can be busy at peak hours. Our drivers know which terminal approaches and holding areas apply and will take you as close to your embarkation point as port security permits. You can read more about how our wider <a href='/airport-transfer/jeddah-airport'>Jeddah airport transfer</a> service works before you fly, so you know exactly what to expect on the ground.",
        ],
      },
      {
        heading: "Meet and Greet After You Land",
        paragraphs: [
          "When your flight lands at JED, your driver is already tracking it, so an early or delayed arrival simply shifts the pickup time to match. Once you have collected your baggage and walked into the arrivals concourse, you will find your driver waiting with a clearly printed name board rather than lost somewhere in a taxi queue. There is no negotiating a fare, no language barrier and no wondering which exit to use. For travellers reaching Jeddah after a long international leg, that certainty is worth a great deal.",
          "Luggage is handled with care from the moment you meet. Cruise passengers often travel with large suitcases, and seafarers joining a ship may carry heavy kit bags, so the vehicle is sized to your group and your bags before you arrive. If you need a child seat or extra space for a wheelchair or oversized case, let us know when you book and it will be arranged. Reasonable waiting time after landing is always included, so immigration queues never turn into an extra charge.",
        ],
      },
      {
        heading: "Timed for Your Cruise Embarkation or Ship Join",
        paragraphs: [
          "Ships do not wait, which is why a transfer built around your schedule matters so much. When you book, share your flight arrival time and your embarkation or reporting time at the port, and we will plan a pickup that leaves a sensible buffer for traffic and terminal formalities. Cruise lines and shipping agents usually set a check-in or boarding window, and arriving comfortably within it means you can hand over your bags and settle in without a last-minute rush.",
          "If your flight arrives the day before you sail, we are equally happy to take you to a hotel first and then handle the short hop to the port the next day. Many guests prefer to break the journey this way, and our <a href='/jeddah/hotels-to-jeddah-islamic-port'>Jeddah hotels to Jeddah Islamic Port</a> transfer is designed for exactly that leg. Whatever your timing, the fare is fixed, so a longer wait in traffic never changes what you pay.",
        ],
      },
      {
        heading: "The Drive to Jeddah Islamic Port",
        paragraphs: [
          "Leaving the airport, the route follows Jeddah's main expressways down toward the coast, passing the modern commercial districts before reaching the port area in the north-central part of the city. In free-flowing conditions the run is quick and smooth; during morning and late-afternoon peaks, or around prayer times, the same distance can edge toward the upper end of the window. Your driver chooses the most sensible line rather than the longest, because the price does not move with the clock and there is no meter running.",
          "The vehicle is air-conditioned and comfortable, a welcome relief after a flight into the Red Sea heat. If this is your first visit to Jeddah, your driver can point out landmarks along the way, and if you would like to see a little of the city before you sail, ask about a stop along the <a href='/jeddah/jeddah-airport-to-jeddah-corniche'>Jeddah Corniche</a>. For those combining the trip with onward pilgrimage travel, we also run the popular route from <a href='/routes/jeddah-to-makkah'>Jeddah to Makkah</a>.",
        ],
      },
      {
        heading: "For Seafarers and Crew Joining a Vessel",
        paragraphs: [
          "Crew changes at Jeddah Islamic Port are a regular part of our work. Seafarers flying in to sign on to a vessel often arrive on tight itineraries with specific reporting times set by their agent or master. We coordinate the pickup around your flight and your join time, and our drivers are used to the documentation checks and access procedures at the port gates. If your agent has provided a berth number or terminal reference, sharing it when you book helps us take you to the right point.",
          "For crews travelling as a group, we can arrange a vehicle large enough for several people and their kit in one trip, which is usually simpler and more economical than separate cars. If your join is delayed or brought forward at short notice, get in touch and we will do our best to adjust. The same team also handles the reverse leg for sign-offs through our <a href='/jeddah/jeddah-islamic-port-to-jeddah-airport'>Jeddah Islamic Port to Jeddah Airport</a> service.",
        ],
      },
      {
        heading: "Why a Fixed-Price Private Transfer",
        paragraphs: [
          "Airport taxi ranks can be a gamble: unclear pricing, no English, and a fare you only learn at the end. A private transfer replaces all of that with a single agreed price, a named driver and a confirmed vehicle. There is no surge pricing when flights bunch together or when the port is busy with a cruise call, and there are no hidden extras for luggage or reasonable waiting. What we quote is what you pay, door to door.",
          "We operate around the clock, which suits the many flights that reach Jeddah late at night or before dawn, and every driver is professional, licensed and familiar with the port approaches. This is the same standard we apply across our <a href='/airport-transfers'>airport transfers</a> service, whether you are travelling alone or moving a whole crew.",
        ],
      },
      {
        heading: "Booking Your Airport-to-Port Transfer",
        paragraphs: [
          "Reserving your ride takes only a few minutes. Share your flight details, arrival date and your embarkation or reporting time at Jeddah Islamic Port, and we will confirm the vehicle and a fixed, all-in price before you travel. No deposit is needed simply to see a fare, and there are no surprise costs at the end of the journey.",
          "For the fastest response, message us on WhatsApp for a fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form and we will reply with a clear confirmation. Whether you are boarding a cruise, joining a working ship or meeting a vessel in port, we will get you from JED to the quayside on time and without stress.",
        ],
      },
    ],
    faqs: [
      { question: "Where will I meet my driver at Jeddah Airport?", answer: "Your driver waits inside the JED arrivals hall with a printed name board, after you collect your baggage and clear the terminal. There is no taxi rank to search for. Because we track your flight, an early or late landing simply shifts the pickup, and our contact number connects you if you cannot spot the driver at once." },
      { question: "How long is the drive from JED to Jeddah Islamic Port?", answer: "The port is around 40 kilometres from the airport, and the drive normally takes 40 to 55 minutes. Light traffic makes it quicker, while peak hours or busy periods around prayer times can push it toward the upper end. Since your price is fixed, extra minutes in traffic never change the fare." },
      { question: "Can you get me to the port in time for my cruise embarkation?", answer: "Yes. Tell us your flight arrival time and your boarding or reporting window when you book, and we plan a pickup with a sensible buffer for traffic and port formalities. Arriving comfortably within your embarkation window lets you hand over your bags and settle in without a last-minute rush." },
      { question: "Do you help with luggage and large kit bags?", answer: "Absolutely. The vehicle is sized to your group and your bags before you arrive, whether you are a cruise passenger with several suitcases or a seafarer carrying heavy kit. Your driver assists with loading and unloading, and there is no separate luggage charge on a standard transfer." },
      { question: "Can you transfer a whole ship's crew together?", answer: "Yes. For crew changes we can arrange a vehicle large enough to carry several people and their kit in a single trip, which is usually simpler and cheaper than separate cars. Share your numbers and reporting time when booking, and we will match the right vehicle and plan the port access." },
      { question: "Is the price fixed even if my flight is delayed?", answer: "Yes. We track your flight number, so the pickup adjusts to your actual landing and reasonable waiting is included at no extra cost. The fare is agreed before you travel with no surge pricing and no meter, so a delay or heavy traffic never changes what you pay." },
    ],
    relatedTransferSlugs: ["jeddah-islamic-port-to-jeddah-airport", "hotels-to-jeddah-islamic-port", "jeddah-airport-to-jeddah-corniche"],
    relatedRouteSlugs: ["jeddah-to-makkah"],
    keywords: ["jeddah airport to jeddah islamic port", "jed airport to seaport transfer", "jeddah airport to port taxi", "cruise transfer jeddah airport", "seafarer transfer jeddah airport"],
  },
  {
    slug: "jeddah-islamic-port-to-jeddah-airport",
    category: "port",
    from: "Jeddah Islamic Port",
    to: "Jeddah Airport",
    h1: "Jeddah Islamic Port to Jeddah Airport Transfer",
    metaTitle: "Jeddah Islamic Port to Jeddah Airport | Private Taxi",
    metaDescription:
      "Book a fixed-price Jeddah Islamic Port to Jeddah Airport transfer with on-time pickup from your terminal and luggage help. Cruise departures, 24/7.",
    intro:
      "Leaving Jeddah by air after a cruise or ship assignment? Our private Jeddah Islamic Port to Jeddah Airport transfer times your pickup to your flight, with luggage help and a fixed price agreed in advance.",
    distance: "~40 km",
    duration: "40-55 min",
    highlights: [
      "Pickup timed to your disembarkation and flight",
      "Luggage help from the port gate to your terminal",
      "Reasonable waiting included if clearance runs late",
      "Fixed fare with no surge on busy cruise days",
    ],
    sections: [
      {
        heading: "From the Port Gate to JED Departures",
        paragraphs: [
          "When it is time to leave, our Jeddah Islamic Port to Jeddah Airport transfer collects you from the port and delivers you to King Abdulaziz International Airport, roughly 40 kilometres away, in a typical 40 to 55 minutes. The focus on this leg is timing: your driver arrives at the port in good time, helps with your luggage, and sets off with enough margin to get you to the terminal comfortably before your check-in closes.",
          "Disembarking passengers and crew signing off often leave the ship in waves, and the port can be busy on a cruise turnaround day. We plan your pickup around your expected clearance time rather than a rigid slot, and reasonable waiting is built in so a slow disembarkation does not cost you extra. Share your ship, terminal or berth reference when you book and we will position the car at a sensible meeting point.",
        ],
      },
      {
        heading: "Timing Your Pickup Around Disembarkation",
        paragraphs: [
          "Getting the pickup time right is the whole art of a port-to-airport transfer. Cruise lines usually publish disembarkation groups and a final clearance time, while ships assign sign-off times to crew, and immigration and customs formalities can add a little unpredictability. When you book, tell us your flight departure time and when you expect to be off the ship, and we will work back from your flight to set a pickup that protects your connection.",
          "As a rule we suggest reaching King Abdulaziz International Airport around three hours before an international departure and two hours before a domestic one, then add the drive time and a traffic buffer on top. If your plans change on the day, a quick message lets us adjust the car. Because the price is fixed, a longer wait at the terminal or in traffic never changes your fare.",
        ],
      },
      {
        heading: "A Smooth Run to King Abdulaziz International",
        paragraphs: [
          "The drive from the port heads back onto Jeddah's main expressways toward the airport in the north of the city. In quiet conditions it is a straightforward run, while peak-hour traffic or busy periods around prayer times can push it toward the upper end of the window, which is exactly why we build in a buffer. Your driver takes the most reliable route to the correct terminal for your airline, rather than the longest, and there is no meter running to reward delay.",
          "The car is air-conditioned and comfortable, a calm end to a trip whether you have spent a week at sea or a short assignment aboard. If you are not flying out immediately and want to see the city first, our <a href='/cities/jeddah'>Jeddah transfers</a> network covers hotels, the Corniche and the old town, and we can build a stop into your journey on request.",
        ],
      },
      {
        heading: "For Cruise Passengers Flying Home",
        paragraphs: [
          "For most cruise guests, the transfer to the airport is the final step of the holiday, and it should be the easy part. We meet you near the terminal exit, take charge of the suitcases, and get you to JED without the stress of finding a taxi on a busy turnaround morning when hundreds of others want the same thing. A confirmed car and a fixed price mean you can enjoy your last hours in port instead of worrying about the ride.",
          "If your flight is not until the evening and you would rather not wait at the airport, we can drop you at a hotel or take you for a few hours of sightseeing first. Guests who arrived by sea and want to explore before flying often pair this leg with our <a href='/jeddah/jeddah-islamic-port-to-hotels'>Jeddah Islamic Port to hotels</a> transfer earlier in the day.",
        ],
      },
      {
        heading: "Crew Sign-Offs and Onward Travel",
        paragraphs: [
          "Seafarers signing off at Jeddah Islamic Port frequently head straight to the airport for a flight home or to another vessel. We understand that sign-off timing can slip, so we stay flexible and keep the price fixed regardless of when you actually clear the gate. Group vehicles are available for whole crews travelling together, keeping the trip simple and cost-effective.",
          "Some crew members have onward domestic connections rather than international ones, for example continuing to Madinah or another Saudi city. If you need intercity travel instead of an airport drop, our <a href='/routes/jeddah-to-madinah'>Jeddah to Madinah</a> route and other long-distance services are available, all at fixed, agreed prices with professional drivers.",
        ],
      },
      {
        heading: "Fixed Prices, Professional Drivers, 24/7",
        paragraphs: [
          "Every port-to-airport booking comes with a single agreed fare, a professional licensed driver and a private, air-conditioned vehicle. There is no surge pricing on a busy cruise day, no charge for reasonable waiting, and no per-kilometre meter. What we quote covers the pickup at the port, luggage help and door-to-door delivery to your terminal at JED, the same promise behind all our <a href='/airport-transfers'>airport transfers</a>.",
          "We run 24 hours a day, which matters when ships clear early in the morning or flights leave late at night. If you also need the arrival leg for a future trip, our <a href='/jeddah/jeddah-airport-to-jeddah-islamic-port'>Jeddah Airport to Jeddah Islamic Port</a> transfer mirrors this service in reverse, so both directions can be locked in together.",
        ],
      },
      {
        heading: "How to Book Your Port Pickup",
        paragraphs: [
          "Booking is quick. Send us your ship or terminal details, your expected disembarkation or sign-off time, and your flight departure, and we will confirm a fixed, all-in price and a pickup plan before the day arrives. There is no deposit needed just to receive a quote, and no surprise costs at the end.",
          "For the fastest reply, message us on WhatsApp for your fixed-price quote, or complete our <a href='/get-quote'>get a quote</a> form and we will send a clear confirmation. Whether you are a cruise passenger flying home or a crew member signing off, we will get you from the quay to your gate on time.",
        ],
      },
    ],
    faqs: [
      { question: "What time will you pick me up from the port for my flight?", answer: "We work back from your flight. As a guide, aim to reach King Abdulaziz International around three hours before an international departure and two hours before a domestic one, then we add the drive time and a traffic buffer. Tell us your flight and expected clearance time and we set the pickup accordingly." },
      { question: "What if my disembarkation or crew sign-off is delayed?", answer: "We stay flexible and plan around your expected clearance rather than a rigid slot. Reasonable waiting is included, so a slow disembarkation does not add to the cost. If timing slips on the day, a quick message lets us adjust the car, and your fixed price stays the same." },
      { question: "Where does the driver meet me at Jeddah Islamic Port?", answer: "Your driver waits at an agreed meeting point near your terminal with your booking details to hand. Because port access is controlled, sharing your ship name, terminal or berth reference when you book helps us position the car precisely and get you moving quickly toward the airport." },
      { question: "How long is the drive to the airport from the port?", answer: "King Abdulaziz International Airport is around 40 kilometres from the port, and the drive typically takes 40 to 55 minutes. Peak-hour traffic or busy periods around prayer times can push it toward the upper end, which is why we build a buffer into the pickup time you are quoted." },
      { question: "Can you take a group of crew to the airport together?", answer: "Yes. We provide vehicles large enough to carry several crew members and their kit in one trip, which is simpler and more economical than booking separate cars. Let us know your numbers and sign-off time when you book and we will match the right vehicle." },
      { question: "Can you offer an intercity trip instead of an airport drop?", answer: "Yes. If your onward travel is to another Saudi city rather than a flight, we run long-distance routes such as Jeddah to Madinah and Jeddah to Makkah at fixed, agreed prices with professional drivers. Just tell us your destination when you book and we will quote the whole trip." },
    ],
    relatedTransferSlugs: ["jeddah-airport-to-jeddah-islamic-port", "jeddah-islamic-port-to-hotels"],
    relatedRouteSlugs: ["jeddah-to-madinah", "jeddah-to-makkah"],
    keywords: ["jeddah islamic port to jeddah airport", "jeddah seaport to jed transfer", "cruise to airport taxi jeddah", "jeddah port to airport pickup", "crew transfer port to jeddah airport"],
  },
  {
    slug: "hotels-to-jeddah-islamic-port",
    category: "port",
    from: "Jeddah Hotels",
    to: "Jeddah Islamic Port",
    h1: "Jeddah Hotels to Jeddah Islamic Port Transfer",
    metaTitle: "Jeddah Hotels to Jeddah Islamic Port | Cruise Taxi",
    metaDescription:
      "Fixed-price transfer from your Jeddah hotel to Jeddah Islamic Port with a friendly driver, luggage help and no surge pricing. Ideal for cruise guests, 24/7.",
    intro:
      "Staying in Jeddah and heading to the port? Our private hotel to Jeddah Islamic Port transfer collects you from your lobby with a fixed price, a professional driver and easy help with your luggage.",
    distance: "10-25 km",
    duration: "20-40 min",
    highlights: [
      "Door-to-door pickup from your hotel lobby",
      "Short local trip, sized to your group and bags",
      "Left in good time for your boarding window",
      "Fixed price agreed in advance, no meter, 24/7",
    ],
    sections: [
      {
        heading: "A Short Local Hop to Jeddah Islamic Port",
        paragraphs: [
          "For guests already staying in Jeddah, the journey to Jeddah Islamic Port is a short local transfer rather than a long airport run. Depending on where your hotel sits, the distance is usually between 10 and 25 kilometres and the drive takes around 20 to 40 minutes. Hotels in the north of the city or near the Corniche are closer, while those in the old town or the south sit a little further out, and traffic through the centre can vary through the day.",
          "Whatever your starting point, we collect you from your hotel entrance and take you directly to the port, sized and timed to your group. It is a service used by cruise passengers who spent a night or two exploring the city first, by seafarers heading out to join a vessel, and by business visitors calling on the port. You can see the wider set of destinations we serve on our <a href='/taxi-service/jeddah'>Jeddah taxi service</a> page.",
        ],
      },
      {
        heading: "Door-to-Door From Your Hotel Lobby",
        paragraphs: [
          "There is no need to walk to a rank or flag down a passing car in the heat. Your driver arrives at the agreed time, meets you at the lobby or entrance, and loads your luggage into a clean, air-conditioned vehicle. For cruise guests with several large cases, or crew with heavy kit bags, that door-to-door handling makes a real difference at the start of a travel day.",
          "If you are checking out of your hotel, we can time the pickup around your checkout so there is no awkward wait with your bags in reception. Just share your hotel name and address when you book, along with the time you would like to leave, and we will confirm the details. Many guests also use our <a href='/jeddah/hotels-to-jeddah-corniche'>hotels to Jeddah Corniche</a> transfer for sightseeing during the same stay.",
        ],
      },
      {
        heading: "Planning Your Departure Time in the City",
        paragraphs: [
          "The key to a smooth hotel-to-port transfer is leaving with enough time in hand. Cruise lines set a boarding window and shipping agents assign reporting times, so work back from that to choose your pickup. Jeddah traffic is generally manageable, but the centre and the roads near the port can slow at peak hours and around prayer times, so we add a sensible buffer rather than cutting it fine.",
          "When you book, tell us your embarkation or reporting time and we will suggest a pickup that gets you there comfortably ahead of it. Because the fare is fixed, spending a few extra minutes in traffic never adds to the cost, and there is no meter creating pressure to rush. Arriving early and relaxed is always better than arriving flustered with minutes to spare.",
        ],
      },
      {
        heading: "For Cruise Guests Who Explored Jeddah First",
        paragraphs: [
          "Many cruise passengers build a night or two in Jeddah into their trip, seeing the UNESCO-listed old town of Al-Balad, the waterfront and the markets before they sail. If that is you, this transfer is the final, easy step that connects your city stay to your ship. We handle the luggage and the route so your last morning in Jeddah stays relaxed.",
          "Some guests prefer to do their sightseeing after the cruise instead, arriving by sea and then staying in the city. For that reverse pattern, our <a href='/jeddah/jeddah-islamic-port-to-hotels'>Jeddah Islamic Port to hotels</a> transfer covers the trip from the quay to your accommodation. Either way, the booking process and the fixed-price promise are the same.",
        ],
      },
      {
        heading: "Seafarers, Agents and Business Visitors",
        paragraphs: [
          "The port is a workplace as much as a passenger gateway, and we regularly carry seafarers, shipping agents and business travellers between city hotels and the terminals. Crew joining a vessel value a punctual, reliable pickup and a driver familiar with the gate procedures, while agents and visitors making port calls appreciate a professional car and a fixed price they can budget for with confidence.",
          "For groups, a larger vehicle keeps everyone and their bags together in a single trip. If your reporting time shifts, a quick message lets us adjust the pickup. We can also help with onward or intercity travel, from a run to the airport to longer trips such as <a href='/routes/jeddah-to-makkah'>Jeddah to Makkah</a>, all under the same fixed-price approach.",
        ],
      },
      {
        heading: "The Saudi Private Transfers Difference",
        paragraphs: [
          "Choosing a private transfer over a hailed taxi means certainty at every step. The price is agreed before you travel, there is no surge when the port is busy with a cruise call, and no extra is added for luggage or reasonable waiting. Your driver is professional, licensed and speaks English, so a specific hotel address or a special request is understood the first time.",
          "We operate 24 hours a day for early sailings and late arrivals alike, and every vehicle is air-conditioned and matched to your group. Whether you are a solo traveller or moving a full crew, the experience is the same, clear, comfortable and on time, and it extends across all the routes and destinations shown on our <a href='/cities/jeddah'>Jeddah transfers</a> pages.",
        ],
      },
      {
        heading: "Reserve Your Hotel-to-Port Ride",
        paragraphs: [
          "Booking takes only a few minutes. Share your hotel name, your destination terminal or berth at Jeddah Islamic Port, and your embarkation or reporting time, and we will confirm the vehicle and a fixed, all-in price in advance. No deposit is required simply to see a fare.",
          "For the quickest response, message us on WhatsApp for a fixed-price quote, or fill in our <a href='/get-quote'>get a quote</a> form and we will reply with a clear confirmation. From your Jeddah hotel lobby to the quayside, we make the trip to the port simple and stress-free.",
        ],
      },
    ],
    faqs: [
      { question: "How far is my Jeddah hotel from Jeddah Islamic Port?", answer: "It depends on where you are staying. Most city hotels are between 10 and 25 kilometres from the port, a drive of about 20 to 40 minutes. Hotels near the north of the city or the Corniche are closer, while the old town and southern areas are a little further. Tell us your hotel and we will confirm the timing." },
      { question: "When should I leave my hotel to reach the port on time?", answer: "Work back from your boarding or reporting time. We add a sensible buffer for traffic and formalities and suggest a pickup that gets you there comfortably ahead of your window. Central roads and the approaches near the port can slow at peak hours and prayer times, so leaving a little early is always wise." },
      { question: "Will the driver collect me from my hotel lobby?", answer: "Yes. This is a door-to-door service. Your driver meets you at the lobby or entrance at the agreed time and loads your luggage into an air-conditioned vehicle. If you are checking out, we can time the pickup around your checkout so you are not left waiting in reception with your bags." },
      { question: "Can you carry a group of crew or a family with lots of luggage?", answer: "Yes. We size the vehicle to your group and bags before the day, whether that is a family with several suitcases or a crew heading out to a vessel. Larger vehicles keep everyone travelling together in one trip, and there is no separate luggage charge on a standard transfer." },
      { question: "Is the fare fixed for such a short local trip?", answer: "Yes. The price is agreed before you travel with no meter and no surge pricing, even on a busy cruise day. A few extra minutes in traffic never change the fare, so you know the full cost the moment you book, from your hotel entrance to the port." },
      { question: "Do you also transfer from the port back to a hotel?", answer: "We do. If you are arriving by sea rather than leaving, our Jeddah Islamic Port to hotels transfer covers the trip from the quay to your accommodation. Many guests book both directions together so their arrival and departure are settled in advance at fixed prices." },
    ],
    relatedTransferSlugs: ["jeddah-islamic-port-to-hotels", "hotels-to-jeddah-corniche", "jeddah-airport-to-jeddah-islamic-port"],
    relatedRouteSlugs: ["jeddah-to-makkah"],
    keywords: ["jeddah hotels to jeddah islamic port", "hotel to jeddah seaport transfer", "jeddah cruise port transfer from hotel", "jeddah port taxi from hotel", "hotel to jeddah islamic port taxi"],
  },
  {
    slug: "jeddah-islamic-port-to-hotels",
    category: "port",
    from: "Jeddah Islamic Port",
    to: "Jeddah Hotels",
    h1: "Jeddah Islamic Port to Jeddah Hotels Transfer",
    metaTitle: "Jeddah Islamic Port to Jeddah Hotels | Cruise Taxi",
    metaDescription:
      "Just arrived by sea? Book a fixed-price Jeddah Islamic Port to hotel transfer with meet and greet at the terminal and luggage help. Door-to-door, 24/7.",
    intro:
      "Just stepped off a ship in Jeddah? Our private Jeddah Islamic Port to hotel transfer meets you near the terminal and drives you door-to-door to your city hotel, with a fixed price and no surge.",
    distance: "10-25 km",
    duration: "20-40 min",
    highlights: [
      "Driver meets you near the port terminal",
      "Reasonable waiting included for slow disembarkation",
      "Direct door-to-door ride to any Jeddah hotel",
      "Fixed price with luggage help, no surge, 24/7",
    ],
    sections: [
      {
        heading: "From the Quay to Your Jeddah Hotel",
        paragraphs: [
          "Arriving in Jeddah by sea is a memorable way to reach the city, and stepping off the ship into a waiting private car makes the transition into town effortless. Our Jeddah Islamic Port to hotel transfer takes you from the port to your accommodation anywhere in the city, a trip of roughly 10 to 25 kilometres that usually takes 20 to 40 minutes depending on where you are staying and the traffic.",
          "The port handles cargo, cruise and passenger traffic, and disembarkation on a busy day can be gradual as groups are called ashore. We plan the pickup around your expected clearance time and include reasonable waiting, so there is no pressure and no extra charge if formalities take a little longer than expected. Your driver meets you near the terminal and takes charge of the luggage from there.",
        ],
      },
      {
        heading: "Meeting You After Disembarkation",
        paragraphs: [
          "Clearing a ship involves immigration and, for many travellers, collecting checked baggage, so the moment you actually reach the pickup point can vary. Rather than a rigid slot, we track your arrival and stay flexible, and your driver waits at an agreed meeting point near the terminal with your details to hand. If you can share your ship name and expected clearance time when you book, we can position the car precisely.",
          "For families and larger groups, the vehicle is sized so everyone and their luggage travel together in one comfortable trip. Cruise passengers often disembark with the same large cases they boarded with, and we plan for that so nothing is left behind or split across cars. It is the same careful handling that defines our wider <a href='/cities/jeddah'>Jeddah transfers</a> service.",
        ],
      },
      {
        heading: "Settling into the City",
        paragraphs: [
          "Once you are in the car, the drive into Jeddah is a relaxed introduction to the city. Depending on your hotel, the route may pass the waterfront, the modern business districts or head toward the historic old town near the coast. Your driver knows the city well and can point out landmarks along the way, and if your room is not ready yet, we can suggest a short stop rather than sitting idle in reception.",
          "If you would like to see the sights straight away, ask about a detour on the way to your hotel, for example a first look at the old merchant houses through our <a href='/jeddah/jeddah-airport-to-al-balad'>Al-Balad</a> transfers, or a pass along the seafront. Because the price is fixed and agreed in advance, a short stop or a slower route through traffic never changes your fare.",
        ],
      },
      {
        heading: "For Pilgrims Arriving by Sea",
        paragraphs: [
          "Jeddah has historically been a gateway for pilgrims, and some still arrive on the Red Sea by ship before continuing to the holy cities. If you are travelling for Umrah or Hajj, we can take you first to your Jeddah hotel to rest and prepare, and then arrange onward travel when you are ready. We keep this simple and measured, coordinating around your own schedule rather than any fixed itinerary.",
          "For the onward journey, our long-distance services run from the city to the holy cities, including <a href='/routes/jeddah-to-makkah'>Jeddah to Makkah</a> and <a href='/routes/jeddah-to-madinah'>Jeddah to Madinah</a>, all at fixed prices with professional drivers and comfortable, air-conditioned vehicles. Booking both the port pickup and the onward leg together keeps your arrival day calm and well organised.",
        ],
      },
      {
        heading: "Comfort After a Long Voyage",
        paragraphs: [
          "Whether you have spent a week on a cruise or a longer stretch working aboard a vessel, a comfortable, air-conditioned car is a welcome change from the gangway and the gate. Crew members on shore leave use this transfer too, heading into the city to a hotel for a rest before their next rotation. We keep the same fixed price and flexible timing for everyone, from solo travellers to full groups.",
          "There is no need to negotiate with drivers waiting outside the port or worry about the fare climbing on a busy day. Your car is confirmed in advance, the price is set, and reasonable waiting is included. If you plan to return to the port later in your trip, the reverse leg is covered by our <a href='/jeddah/hotels-to-jeddah-islamic-port'>hotels to Jeddah Islamic Port</a> transfer.",
        ],
      },
      {
        heading: "Fixed Fares and Professional Drivers",
        paragraphs: [
          "Every port-to-hotel booking includes a single agreed fare, a professional licensed driver, luggage help and door-to-door delivery to your accommodation. There is no surge pricing when a cruise ship is in, no per-kilometre meter and no separate luggage charge. What we quote is what you pay, from the quay to your hotel entrance.",
          "We operate 24 hours a day, because ships clear at all hours and a late arrival should never mean scrambling for a ride. Drivers speak English, know the city and understand the port approaches, so your hotel address and any special request are handled smoothly on arrival.",
        ],
      },
      {
        heading: "Book Your Port-to-Hotel Transfer",
        paragraphs: [
          "Booking is straightforward. Send us your ship name, your expected disembarkation time and your Jeddah hotel address, and we will confirm a fixed, all-in price and a meeting plan before you arrive. No deposit is needed simply to receive a quote, and there are no surprise costs at the end of the ride.",
          "For the fastest response, message us on WhatsApp for your fixed-price quote, or use our <a href='/get-quote'>get a quote</a> form and we will reply with a clear confirmation. From the moment you step ashore in Jeddah, we make getting to your hotel calm, comfortable and completely predictable.",
        ],
      },
    ],
    faqs: [
      { question: "Where will the driver meet me after I leave the ship?", answer: "Your driver waits at an agreed meeting point near the terminal with your booking details to hand. Because port access is controlled, sharing your ship name and expected clearance time when you book lets us position the car precisely so you are not searching for a ride after disembarkation." },
      { question: "What if disembarkation takes a long time?", answer: "We plan around your expected clearance rather than a fixed slot, and reasonable waiting is included at no extra cost. Immigration and baggage collection can be gradual on a busy day, so we stay flexible and your driver is ready whenever you actually reach the pickup point." },
      { question: "How long is the drive from the port to a Jeddah hotel?", answer: "Most city hotels are 10 to 25 kilometres from the port, a drive of about 20 to 40 minutes depending on your location and the traffic. Hotels near the waterfront and the north are closer, while the old town and southern districts take a little longer. Share your hotel and we will confirm." },
      { question: "Can you take me on to Makkah or Madinah after I check in?", answer: "Yes. Many arrivals rest at a Jeddah hotel first, then continue to the holy cities. We run long-distance routes such as Jeddah to Makkah and Jeddah to Madinah at fixed prices with professional drivers, and you can book the port pickup and the onward leg together for a smooth arrival day." },
      { question: "Do you operate for late-night or early arrivals by sea?", answer: "Yes, we run 24 hours a day. Ships clear at all hours, so your car is confirmed in advance for whatever time you disembark, whether that is before dawn or late at night. You are never left looking for a ride outside the port at an awkward hour." },
      { question: "Is luggage help included when I arrive by sea?", answer: "Yes. Your driver assists with loading and unloading, and the vehicle is sized to your group and bags before the day. Cruise passengers often disembark with several large cases, and there is no separate luggage charge on a standard transfer to your hotel." },
    ],
    relatedTransferSlugs: ["hotels-to-jeddah-islamic-port", "jeddah-islamic-port-to-jeddah-airport", "jeddah-airport-to-al-balad"],
    relatedRouteSlugs: ["jeddah-to-makkah", "jeddah-to-madinah"],
    keywords: ["jeddah islamic port to hotels", "jeddah seaport to hotel transfer", "cruise port to jeddah hotel taxi", "arrive by sea jeddah transfer", "pilgrim sea arrival jeddah transfer"],
  },
  {
    slug: "jeddah-airport-to-jeddah-sulaymaniyah-railway-station",
    category: "railway",
    from: "Jeddah Airport",
    to: "Jeddah Sulaymaniyah Railway Station",
    h1: "Jeddah Airport to Sulaymaniyah Railway Station Transfer",
    metaTitle: "Jeddah Airport to Sulaymaniyah Railway Station Taxi",
    metaDescription:
      "Fixed-price private transfer from Jeddah Airport to Sulaymaniyah Haramain railway station, with meet and greet, flight tracking and door-to-door service, 24/7.",
    intro:
      "Land at Jeddah and connect straight to the Haramain high-speed train. Our private transfer from Jeddah Airport to Sulaymaniyah station gives you a fixed price, meet and greet and comfortable ride to catch your train.",
    distance: "~18 km",
    duration: "20-30 min",
    highlights: [
      "Driver waiting in JED arrivals with a name sign",
      "Flight tracking so a late landing still makes your train",
      "Fixed price agreed before you travel, no meter or surge",
      "Direct door-to-door ride to the Sulaymaniyah station entrance",
    ],
    sections: [
      {
        heading: "From Your Flight to the Haramain Train",
        paragraphs: [
          "Many travellers now use Jeddah as a gateway and continue by rail rather than road. The Haramain High Speed Railway links Jeddah with Makkah, Madinah and King Abdullah Economic City on fast, air-conditioned trains, and the Jeddah Sulaymaniyah station in the As Sulaymaniyah district is the central-city stop most airport arrivals aim for. The catch is timing: trains leave on a fixed schedule, so the ride from the terminal to the platform is the part that has to be reliable.",
          "That first-mile link is exactly what our transfer is built for. From King Abdulaziz International Airport to the Sulaymaniyah station is roughly 18 kilometres, usually 20 to 30 minutes depending on traffic. A driver meets you inside arrivals, carries your bags to an air-conditioned car and drives you straight to the station entrance, so you arrive with time to check in and board rather than sprinting for a departure you might miss.",
        ],
      },
      {
        heading: "Why the First Mile Should Not Be Left to Chance",
        paragraphs: [
          "A high-speed train that has already left is not something you can flag down again. Missing a departure can mean waiting for the next service or paying to rebook, which quickly wipes out any saving from a cheaper ride to the station. Because our price is fixed and the pickup is tied to your flight, you remove the two biggest risks: an unpredictable fare and an unpredictable pickup.",
          "We track your flight number, so if your plane is early or delayed the driver adjusts to meet you when you actually land. There is no scramble to find a taxi at the rank, no negotiating in the arrivals hall, and no meter climbing while you sit in traffic. You can see how our wider <a href='/airport-transfer/jeddah-airport'>Jeddah airport transfer</a> service is organised so you know what to expect the moment you step off the plane.",
        ],
      },
      {
        heading: "Meet and Greet Inside JED Arrivals",
        paragraphs: [
          "After you collect your luggage and walk into the arrivals concourse, your driver is already positioned where waiting crowds gather, holding a clearly printed name board. There is no wandering between exits or trying to describe where you are over a patchy phone connection. If you are travelling as a family, carrying several bags or need a child seat, that is arranged in advance so nothing slows you at the kerb.",
          "This matters most for onward rail passengers, because you may be moving with a tight window before your train. A confirmed driver and a known vehicle mean the transfer is one less thing to think about while you focus on your booking and platform. The same standard applies across our <a href='/airport-transfers'>airport transfers</a> network, whether you are heading to a hotel or straight to a station.",
        ],
      },
      {
        heading: "Timing Your Ride to Catch the Train",
        paragraphs: [
          "We recommend allowing a comfortable buffer at the station rather than cutting it fine. High-speed rail check-in, security screening and finding your platform all take a little time, and it is far more relaxing to sit with a coffee than to arrive breathless. When you book, tell us your intended train time and we will suggest a pickup that leaves sensible margin for the drive and the airport formalities beforehand.",
          "Traffic in Jeddah varies through the day, and prayer times can briefly affect the roads, so the 20 to 30 minute drive is a guide rather than a promise. Our drivers know the sensible routes into the As Sulaymaniyah district and choose the reliable line rather than the one that runs up a fare, because your price does not change with the clock.",
        ],
      },
      {
        heading: "Onward to Makkah, Madinah or KAEC by Rail",
        paragraphs: [
          "Once you are at Sulaymaniyah station, the Haramain line opens up the region quickly. Pilgrims and visitors often ride onward to Makkah or Madinah, while KAEC is a growing business and leisure stop along the route. The train is fast and comfortable, and for these longer legs many travellers prefer rail to a road transfer, especially in peak-season traffic.",
          "That said, the train and a private car each have their place, and the right choice depends on your group, luggage and timing. If you are weighing the options for the holy cities, our guide comparing the <a href='/blog/makkah-madinah-train-vs-taxi'>Makkah to Madinah train versus taxi</a> lays out the trade-offs. If you would rather travel entirely by road, we also run direct routes such as <a href='/routes/jeddah-to-makkah'>Jeddah to Makkah</a> and <a href='/routes/jeddah-to-madinah'>Jeddah to Madinah</a>.",
        ],
      },
      {
        heading: "What Your Transfer Includes",
        paragraphs: [
          "Every booking covers a private, air-conditioned vehicle sized to your group, meet and greet inside the terminal, flight tracking and door-to-door delivery to the Sulaymaniyah station entrance. There are no hidden extras for luggage, no per-kilometre meter and no separate charge for reasonable waiting after you land. What you are quoted is what you pay.",
          "If you plan to return to the airport later in your trip, you can pre-book the reverse leg with our <a href='/jeddah/jeddah-sulaymaniyah-railway-station-to-jeddah-airport'>Sulaymaniyah station to Jeddah Airport</a> service and lock both directions in advance. For a fuller picture of how we cover the city, our <a href='/taxi-service/jeddah'>Jeddah taxi service</a> page lists the districts and journeys we handle.",
        ],
      },
      {
        heading: "Booking and Getting a Fixed Price",
        paragraphs: [
          "Reserving takes only a few minutes. Share your flight number, arrival date and intended train time, and we confirm the vehicle and an all-in fixed price before you travel. Bookings are accepted around the clock, which suits the many flights that touch down in Jeddah late at night or before dawn.",
          "To start, request a fixed-price quote on WhatsApp or use our <a href='/get-quote'>get a quote</a> form, and we will reply with a clear fare and confirmation. No deposit is needed to see a price, and there is no surge pricing at busy hours, just a dependable ride from JED to your Haramain train.",
        ],
      },
    ],
    faqs: [
      { question: "How far is Jeddah Airport from Sulaymaniyah railway station?", answer: "It is roughly 18 kilometres from King Abdulaziz International Airport to the Sulaymaniyah Haramain station in the As Sulaymaniyah district, usually a 20 to 30 minute drive depending on traffic." },
      { question: "Will the driver wait if my flight is delayed?", answer: "Yes. We track your flight number and adjust the pickup to when you actually land, and reasonable waiting time after arrival is included rather than billed as an extra." },
      { question: "How much time should I leave before my train?", answer: "Allow a comfortable buffer for the drive plus rail check-in, security and finding your platform. Tell us your train time when booking and we will suggest a pickup with sensible margin." },
      { question: "Can you take me straight to the train for Makkah or Madinah?", answer: "Yes. We drop you at the Sulaymaniyah station entrance so you can board the Haramain train onward to Makkah, Madinah or KAEC. We also offer direct road transfers if you prefer." },
      { question: "Is the price fixed or metered?", answer: "The price is fixed and agreed before you travel, with no meter and no surge pricing. What you are quoted is the full fare, including luggage and reasonable waiting time." },
      { question: "Do you operate for very early or late flights?", answer: "Yes, we run 24/7. Many flights into Jeddah arrive late at night or before dawn, and transfers to the station are available around the clock at the same fixed price." },
    ],
    relatedTransferSlugs: ["jeddah-sulaymaniyah-railway-station-to-jeddah-airport", "hotels-to-jeddah-sulaymaniyah-railway-station", "jeddah-airport-to-al-balad"],
    relatedRouteSlugs: ["jeddah-to-makkah", "jeddah-to-madinah"],
    keywords: ["jeddah airport to sulaymaniyah station", "jeddah airport to haramain railway", "jed to sulaymaniyah train transfer", "jeddah airport to train station taxi", "haramain station jeddah transfer"],
  },
  {
    slug: "jeddah-sulaymaniyah-railway-station-to-jeddah-airport",
    category: "railway",
    from: "Jeddah Sulaymaniyah Railway Station",
    to: "Jeddah Airport",
    h1: "Sulaymaniyah Railway Station to Jeddah Airport Transfer",
    metaTitle: "Sulaymaniyah Railway Station to Jeddah Airport Taxi",
    metaDescription:
      "Step off the Haramain train and go straight to your flight. Fixed-price private transfer from Sulaymaniyah railway station to Jeddah Airport, door-to-door, 24/7.",
    intro:
      "Arrive in Jeddah by high-speed train and continue to the airport without the last-minute stress. Our private transfer from Sulaymaniyah station to Jeddah Airport is fixed-price, timed to your flight and fully door-to-door.",
    distance: "~18 km",
    duration: "20-30 min",
    highlights: [
      "Driver meets you at the Sulaymaniyah station exit",
      "Pickup timed to your train arrival and flight departure",
      "Fixed price with no meter and no surge pricing",
      "Air-conditioned door-to-door ride to your JED terminal",
    ],
    sections: [
      {
        heading: "From the Haramain Platform to Your Flight",
        paragraphs: [
          "If you have travelled into Jeddah on the Haramain High Speed Railway, perhaps down from Madinah or across from Makkah or KAEC, the Sulaymaniyah station in the As Sulaymaniyah district puts you in the centre of the city. When your next step is a flight, the final leg to King Abdulaziz International Airport needs to be as dependable as the train itself. That is where a pre-booked private transfer earns its place.",
          "The station sits roughly 18 kilometres from JED, normally a 20 to 30 minute drive. Rather than joining a queue at the rank after a long journey, your driver is waiting at the station exit, ready to load your luggage and take you straight to the correct terminal. You give us your flight details in advance, and the pickup is planned around both your train arrival and your check-in window.",
        ],
      },
      {
        heading: "Timed Around Your Departure",
        paragraphs: [
          "Catching a flight is the one journey where arriving late is simply not an option, so we plan the pickup with a sensible margin for check-in, security and, on longer routes, passport control. When you book, share your flight time and we will recommend a departure from the station that leaves comfortable buffer without making you sit at the gate for hours.",
          "Because trains run to a fixed timetable, your arrival time in Jeddah is predictable, which makes the connection easy to plan. If your inbound train is running behind, let us know and we will adjust. The aim is simple: a smooth handover from rail to road to air, with none of the guesswork that comes from finding transport on the spot.",
        ],
      },
      {
        heading: "Meet You at the Station, Not a Vague Kerb",
        paragraphs: [
          "Stepping off a train into an unfamiliar station with bags in tow is not the moment to open a ride app and hope. Your driver meets you at an agreed point by the Sulaymaniyah station exit, helps with your luggage and walks you to the car. There is no haggling, no language barrier and no uncertainty about the fare.",
          "This is the same reliability we bring to every journey in our <a href='/airport-transfers'>airport transfers</a> service. If you have just arrived from the holy cities, you may already know how convenient the rail link is; our role is to make the piece the train does not cover, the door-to-door bit, just as seamless. You can review our full <a href='/taxi-service/jeddah'>Jeddah taxi service</a> to see the areas and journeys we handle.",
        ],
      },
      {
        heading: "The Drive to King Abdulaziz International Airport",
        paragraphs: [
          "From the As Sulaymaniyah district the route runs north through the city toward the airport complex. In free-flowing conditions it is a quick trip, but the morning and late-afternoon peaks, and the period around prayer times, can lengthen it, which is why we build in margin rather than promising a single fixed number. Your driver takes the reliable line to the terminal, because the price does not move with the traffic.",
          "We drop you at the departures level for your terminal so you can walk straight in to check in. If you are unsure which terminal your airline uses, share your flight details when booking and we will confirm the right drop-off point, so there is no confusion when you arrive with a clock ticking.",
        ],
      },
      {
        heading: "A Reliable Last Mile After the Train",
        paragraphs: [
          "The Haramain railway is fast and comfortable for the intercity part of a journey, connecting Makkah, Madinah, Jeddah and KAEC on a fixed schedule. What it cannot do is take you to your terminal door, and that final mile is where delays most often creep in for travellers relying on chance transport. A fixed-price private car closes that gap cleanly.",
          "If your trip started in the holy cities, our comparison of the <a href='/blog/makkah-madinah-train-vs-taxi'>Makkah to Madinah train versus taxi</a> may help you understand when rail or road makes more sense for each leg. And if you would rather skip the station entirely on a future trip, we run direct road routes such as <a href='/routes/jeddah-to-makkah'>Jeddah to Makkah</a> and to <a href='/routes/jeddah-to-kaec'>KAEC</a>.",
        ],
      },
      {
        heading: "What Is Included and What It Costs",
        paragraphs: [
          "Your transfer covers a private, air-conditioned vehicle matched to your group, a driver meeting you at the station, help with luggage and door-to-door delivery to your departure terminal. There is no meter, no luggage surcharge and no surprise cost at the end. The fare is agreed in advance and does not change on the day.",
          "If you also need the inbound leg, from the airport to the station, on a future visit, you can pre-book our <a href='/jeddah/jeddah-airport-to-jeddah-sulaymaniyah-railway-station'>Jeddah Airport to Sulaymaniyah station</a> transfer and arrange both directions together. Planning ahead means both ends of your journey are confirmed at a fixed price.",
        ],
      },
      {
        heading: "How to Book",
        paragraphs: [
          "Booking is quick. Send us your train arrival time, flight number and departure time, and we confirm the vehicle and an all-in fixed price before your travel day. We operate 24/7, so early departures and late-night trains are all covered.",
          "To get a fare, request a fixed-price quote on WhatsApp or complete our <a href='/get-quote'>get a quote</a> form and we will reply with a clear price and confirmation. No deposit is required to see the cost, and there is never a surge charge at busy times, just a dependable ride from the Haramain station to your flight.",
        ],
      },
    ],
    faqs: [
      { question: "How long does the transfer to Jeddah Airport take?", answer: "The drive from Sulaymaniyah station to King Abdulaziz International Airport is about 18 kilometres, usually 20 to 30 minutes, though peak traffic and prayer times can extend it, so we build in margin." },
      { question: "Will you time the pickup to my flight?", answer: "Yes. Share your flight time and train arrival, and we plan a station pickup that leaves comfortable buffer for check-in and security so you reach your terminal in good time." },
      { question: "Where does the driver meet me at the station?", answer: "The driver meets you at an agreed point by the Sulaymaniyah station exit, helps with your luggage and walks you to the car. There is no need to search for a rank." },
      { question: "What if my incoming train is late?", answer: "Trains run to a fixed timetable, so timing is usually predictable, but if your inbound train is delayed just let us know and we will adjust the pickup accordingly." },
      { question: "Which terminal will you drop me at?", answer: "We drop you at the departures level of the terminal your airline uses. Share your flight details when booking and we will confirm the correct drop-off point in advance." },
      { question: "Is the fare fixed regardless of traffic?", answer: "Yes. The price is agreed before you travel and does not change with traffic, time of day or demand. There is no meter and no surge pricing at any hour." },
    ],
    relatedTransferSlugs: ["jeddah-airport-to-jeddah-sulaymaniyah-railway-station", "jeddah-sulaymaniyah-railway-station-to-hotels", "jeddah-airport-to-al-balad"],
    relatedRouteSlugs: ["jeddah-to-makkah", "jeddah-to-kaec"],
    keywords: ["sulaymaniyah station to jeddah airport", "haramain railway to jeddah airport taxi", "jeddah train station to jed transfer", "sulaymaniyah to airport private car", "jeddah railway to airport"],
  },
  {
    slug: "hotels-to-jeddah-sulaymaniyah-railway-station",
    category: "railway",
    from: "Jeddah Hotels",
    to: "Jeddah Sulaymaniyah Railway Station",
    h1: "Jeddah Hotels to Sulaymaniyah Railway Station Transfer",
    metaTitle: "Jeddah Hotels to Sulaymaniyah Railway Station | Taxi",
    metaDescription:
      "Private hotel pickup to Sulaymaniyah Haramain railway station in Jeddah. Fixed price, professional drivers and timing to catch your high-speed train, door-to-door.",
    intro:
      "Travelling onward by high-speed rail? Our private transfer collects you from your Jeddah hotel and delivers you to Sulaymaniyah railway station at a fixed price, timed so you comfortably catch your train.",
    distance: "5-20 km",
    duration: "15-30 min",
    highlights: [
      "Direct pickup from your Jeddah hotel lobby",
      "Fixed price agreed before you travel, no meter",
      "Pickup timed with margin to catch your Haramain train",
      "Air-conditioned door-to-door ride with luggage help",
    ],
    sections: [
      {
        heading: "Your Hotel to the Haramain Train, Made Simple",
        paragraphs: [
          "The Haramain High Speed Railway has changed how visitors move around the western region, linking Jeddah with Makkah, Madinah and King Abdullah Economic City on fast, comfortable trains. For anyone staying in Jeddah and planning a day trip or an onward journey, the Sulaymaniyah station in the As Sulaymaniyah district is the natural departure point, and getting there on time is the only part that needs organising.",
          "Depending on where you are staying, the station is anywhere from about 5 to 20 kilometres away, a drive of roughly 15 to 30 minutes. Our transfer collects you at your hotel entrance, helps with your bags and takes you straight to the station, so your morning starts calmly rather than with a rushed hunt for a taxi in the street.",
        ],
      },
      {
        heading: "Why a Booked Pickup Beats a Street Taxi",
        paragraphs: [
          "When you have a train to catch, the last thing you want is to stand outside the lobby hoping a taxi appears, then negotiate a fare while the clock runs. A pre-booked transfer removes both problems. The car is confirmed for a specific time, the price is fixed in advance, and your driver knows the route into the As Sulaymaniyah district without needing directions.",
          "Trains leave on a fixed timetable, and a missed departure can mean a long wait or a rebooking cost, so certainty is worth far more than shaving a few riyals off the ride. Our <a href='/taxi-service/jeddah'>Jeddah taxi service</a> is built around exactly this kind of dependable, fixed-price city travel, and you can see the areas and hotels we cover across the city on our <a href='/cities/jeddah'>Jeddah transfers</a> page.",
        ],
      },
      {
        heading: "Pickup From Any Jeddah Hotel",
        paragraphs: [
          "Whether you are staying near the Corniche, in the business districts along the main highways, or close to the old town of Al-Balad, we collect you from your hotel entrance at the agreed time. There is no need to walk to a main road or describe your location, the driver comes to the lobby and helps load your luggage into an air-conditioned car.",
          "If you are travelling as a family or with several suitcases, tell us when you book and we will send a suitably sized vehicle, with a child seat if needed. For guests staying near the waterfront who also want a scenic outing, we run separate transfers such as <a href='/jeddah/hotels-to-jeddah-corniche'>hotels to Jeddah Corniche</a>, but for the station our focus is a prompt, direct run to your train.",
        ],
      },
      {
        heading: "Timing Your Ride to Catch the Train",
        paragraphs: [
          "We plan the pickup so you reach the station with time to spare for rail check-in, security screening and finding your platform. When booking, tell us your train time and your hotel, and we will suggest a collection time that accounts for the distance, likely traffic and a sensible buffer at the station itself.",
          "Jeddah traffic changes through the day, and the period around prayer times can briefly slow the roads, so we err on the side of caution rather than cutting it fine. It is far more pleasant to sit with a coffee at the station than to arrive at a run, and a fixed departure time from your hotel makes the whole morning predictable.",
        ],
      },
      {
        heading: "Planning a Day Trip or Onward Journey",
        paragraphs: [
          "Plenty of Jeddah guests use the Haramain line for a day trip, riding to Makkah or Madinah in the morning and returning in the evening, while others are moving on to KAEC or beginning a longer pilgrimage. The train handles the intercity distance quickly and comfortably; our transfer simply gets you to the platform on schedule.",
          "If you are still deciding between rail and road for the holy cities, our guide on the <a href='/blog/makkah-madinah-train-vs-taxi'>Makkah to Madinah train versus taxi</a> weighs the options for luggage, group size and timing. Should you prefer to travel entirely by car on the day, we also offer direct routes such as <a href='/routes/jeddah-to-makkah'>Jeddah to Makkah</a> and <a href='/routes/jeddah-to-madinah'>Jeddah to Madinah</a> from your hotel door.",
        ],
      },
      {
        heading: "What Your Transfer Includes",
        paragraphs: [
          "Each booking covers a private, air-conditioned vehicle sized to your party, pickup from your hotel entrance, help with luggage and a direct ride to the Sulaymaniyah station. There is no meter, no charge for bags and no surge pricing at busy hours. The fare is agreed before you travel and does not change on the day.",
          "If you will be returning to Jeddah by train later, you can pre-book the reverse leg with our <a href='/jeddah/jeddah-sulaymaniyah-railway-station-to-hotels'>Sulaymaniyah station to Jeddah hotels</a> transfer so a driver is waiting when you step off the train with your bags.",
        ],
      },
      {
        heading: "Booking and Fixed Prices",
        paragraphs: [
          "Booking takes only a few minutes. Tell us your hotel, your train time and your group size, and we confirm the vehicle and an all-in fixed price before your travel day. We operate 24/7, so early-morning trains and late services are equally covered.",
          "To get a fare, request a fixed-price quote on WhatsApp or use our <a href='/get-quote'>get a quote</a> form, and we will reply with a clear price and confirmation. No deposit is needed to see the cost, just a reliable, comfortable ride from your hotel to the Haramain train.",
        ],
      },
    ],
    faqs: [
      { question: "How far is the station from Jeddah hotels?", answer: "It depends on where you stay, roughly 5 to 20 kilometres to the Sulaymaniyah station in the As Sulaymaniyah district, which is usually a 15 to 30 minute drive." },
      { question: "Can you pick me up from any hotel in Jeddah?", answer: "Yes. We collect you from your hotel entrance anywhere in Jeddah, from the Corniche and business districts to areas near the old town, and help load your luggage." },
      { question: "How do you make sure I catch my train?", answer: "We time the pickup to leave comfortable margin for the drive plus rail check-in and security. Tell us your train time and hotel when booking and we plan accordingly." },
      { question: "Do you provide vehicles for families with luggage?", answer: "Yes. Tell us your group size and number of bags when booking and we send a suitably sized vehicle, with a child seat available on request at no surprise cost." },
      { question: "Is the price fixed before I travel?", answer: "Yes. The fare is agreed in advance with no meter, no luggage charge and no surge pricing, so the amount quoted is exactly what you pay on the day." },
      { question: "Can I book a return from the station to my hotel too?", answer: "Yes. You can pre-book the return leg so a driver meets you at the station when your train arrives and takes you back to your hotel at a fixed price." },
    ],
    relatedTransferSlugs: ["jeddah-sulaymaniyah-railway-station-to-hotels", "jeddah-airport-to-jeddah-sulaymaniyah-railway-station", "hotels-to-jeddah-corniche"],
    relatedRouteSlugs: ["jeddah-to-makkah", "jeddah-to-madinah"],
    keywords: ["jeddah hotel to sulaymaniyah station", "hotel to haramain railway jeddah", "jeddah hotel to train station taxi", "sulaymaniyah station hotel transfer", "jeddah hotel to high speed train"],
  },
  {
    slug: "jeddah-sulaymaniyah-railway-station-to-hotels",
    category: "railway",
    from: "Jeddah Sulaymaniyah Railway Station",
    to: "Jeddah Hotels",
    h1: "Sulaymaniyah Railway Station to Jeddah Hotels Transfer",
    metaTitle: "Sulaymaniyah Railway Station to Jeddah Hotels | Taxi",
    metaDescription:
      "Arrive in Jeddah by Haramain train and ride straight to your hotel. Fixed-price private transfer from Sulaymaniyah railway station with luggage help, door-to-door.",
    intro:
      "Step off the high-speed train into Jeddah and go straight to your hotel. Our private transfer from Sulaymaniyah station is fixed-price, with a driver meeting you and handling your luggage door-to-door.",
    distance: "5-20 km",
    duration: "15-30 min",
    highlights: [
      "Driver waiting as you exit Sulaymaniyah station",
      "Help with luggage after a long train journey",
      "Fixed price with no meter and no surge pricing",
      "Air-conditioned door-to-door ride to your hotel",
    ],
    sections: [
      {
        heading: "Off the Train and Straight to Your Hotel",
        paragraphs: [
          "Arriving in Jeddah on the Haramain High Speed Railway, whether down from Madinah, across from Makkah or in from KAEC, drops you at the Sulaymaniyah station in the As Sulaymaniyah district, close to the centre of the city. After a journey it is a relief to have the last stretch to your hotel already arranged, rather than joining a queue at the rank with your bags.",
          "Depending on where you are staying, your hotel is roughly 5 to 20 kilometres from the station, usually a 15 to 30 minute drive. Our driver meets you at the station exit, takes your luggage and drives you directly to your hotel entrance, so the final leg of a long day is calm and predictable at a price agreed before you travel.",
        ],
      },
      {
        heading: "A Driver Waiting When You Arrive",
        paragraphs: [
          "Trains run to a fixed timetable, so your arrival time in Jeddah is easy to predict, which means we can have a driver in position as you step off the platform. You are met at an agreed point by the station exit, with no need to open a ride app, negotiate a fare or explain where you are to a passing taxi.",
          "This is particularly welcome late in the evening or after a tiring pilgrimage, when you simply want to reach your room. The same care runs through our whole <a href='/taxi-service/jeddah'>Jeddah taxi service</a>, and you can see the range of hotels and districts we serve on our <a href='/cities/jeddah'>Jeddah transfers</a> page before you arrive.",
        ],
      },
      {
        heading: "Help With Your Luggage",
        paragraphs: [
          "High-speed rail is comfortable, but managing suitcases through a busy station and out to a car is where arrivals often get stressful. Your driver helps load your bags and settles you into an air-conditioned vehicle, so you are not wrestling luggage across a concourse or lifting cases into a stranger's boot.",
          "If you are travelling as a family or with several large bags, let us know when you book and we will send a suitably sized vehicle, with a child seat available on request. Everything is arranged in advance so nothing slows you at the kerb, and the fare already accounts for your luggage with no surprise surcharge.",
        ],
      },
      {
        heading: "The Drive to Any Jeddah Hotel",
        paragraphs: [
          "From the As Sulaymaniyah district our drivers reach hotels across the city, from the Corniche waterfront and the business districts along the main highways to properties near the historic quarter of Al-Balad. You simply give us the hotel name and address when booking, and we handle the routing to your door.",
          "Jeddah traffic varies through the day, and the roads can briefly slow around prayer times, so the 15 to 30 minute guide flexes a little with conditions. Whatever the traffic, the price does not change, and your driver takes the sensible route to your hotel rather than a longer one, because there is no meter running.",
        ],
      },
      {
        heading: "Continuing Your Trip in Jeddah",
        paragraphs: [
          "Once you are settled, Jeddah has plenty to explore, from the coral-stone lanes of the old town to the long seafront Corniche. If you fancy a waterfront outing during your stay, our <a href='/jeddah/hotels-to-jeddah-corniche'>hotels to Jeddah Corniche</a> transfer is an easy add-on, and we can arrange onward travel whenever you need it.",
          "Many rail arrivals are part of a wider itinerary around the holy cities. If you are planning further legs and weighing rail against road, our comparison of the <a href='/blog/makkah-madinah-train-vs-taxi'>Makkah to Madinah train versus taxi</a> is a useful read, and we also offer direct road routes such as <a href='/routes/jeddah-to-makkah'>Jeddah to Makkah</a> when you would rather travel entirely by car.",
        ],
      },
      {
        heading: "What Your Transfer Includes",
        paragraphs: [
          "Every booking covers a private, air-conditioned vehicle matched to your group, a driver meeting you at the station, help with luggage and door-to-door delivery to your hotel. There is no meter, no charge for bags and no surge pricing, even late at night. The fare is fixed before you travel and does not change on arrival.",
          "If you will be heading back to the station later in your stay to continue by train, you can pre-book the reverse leg with our <a href='/jeddah/hotels-to-jeddah-sulaymaniyah-railway-station'>Jeddah hotels to Sulaymaniyah station</a> transfer and keep both directions confirmed at a set price.",
        ],
      },
      {
        heading: "Booking Your Arrival Transfer",
        paragraphs: [
          "Booking is quick. Tell us your train arrival time, your hotel and your group size, and we confirm the vehicle and an all-in fixed price before your travel day. We operate 24/7, so late-evening and early services are all covered by a waiting driver.",
          "To get started, request a fixed-price quote on WhatsApp or use our <a href='/get-quote'>get a quote</a> form and we will reply with a clear fare and confirmation. No deposit is needed to see a price, just a dependable ride from the Haramain station to your Jeddah hotel.",
        ],
      },
    ],
    faqs: [
      { question: "Where will the driver meet me at the station?", answer: "Your driver waits at an agreed point by the Sulaymaniyah station exit, helps with your luggage and walks you to the car, so there is no need to find a taxi rank." },
      { question: "How long is the ride to my hotel?", answer: "Most Jeddah hotels are 5 to 20 kilometres from the station, usually a 15 to 30 minute drive, though it can vary a little with traffic and prayer-time congestion." },
      { question: "Will a driver be there if my train arrives late at night?", answer: "Yes. We operate 24/7 and time the pickup to your train arrival, so a driver is ready even for late-evening or early services at the same fixed price." },
      { question: "Can you take me to any hotel in Jeddah?", answer: "Yes. Give us your hotel name and address when booking and we deliver you to the door, whether it is near the Corniche, the business districts or the old town." },
      { question: "Is help with luggage included?", answer: "Yes. Your driver helps load and unload your bags, and the fixed fare already accounts for luggage, so there is no separate surcharge for suitcases." },
      { question: "Is the price fixed before I travel?", answer: "Yes. The fare is agreed in advance with no meter and no surge pricing, so the amount quoted is exactly what you pay when you reach your hotel." },
    ],
    relatedTransferSlugs: ["hotels-to-jeddah-sulaymaniyah-railway-station", "jeddah-sulaymaniyah-railway-station-to-jeddah-airport", "hotels-to-jeddah-corniche"],
    relatedRouteSlugs: ["jeddah-to-makkah", "jeddah-to-madinah"],
    keywords: ["sulaymaniyah station to jeddah hotel", "haramain railway to jeddah hotel taxi", "jeddah train station to hotel transfer", "sulaymaniyah station arrival transfer", "jeddah railway to hotel private car"],
  },
];

export const jeddahPortRailway: PointTransfer[] = raw.map((t) => ({
  ...t,
  citySlug: "jeddah",
}));
