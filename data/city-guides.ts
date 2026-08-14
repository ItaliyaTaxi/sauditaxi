import type { Faq } from "./faqs";

/**
 * Per-city enrichment merged onto the base City record in cities.ts, the same
 * split used for airports (airports.ts + airport-guides.ts). Keeps cities.ts
 * lean while letting each city carry unique FAQs and local context instead of
 * templated, find-replace copy. Invents no prices, wait times, or guarantees.
 */
export interface CityGuide {
  lastUpdated?: string;
  /** Short paragraph covering business districts, events/seasonality, transport options, and local travel advice. */
  localInsight?: string;
  /** Unique FAQs for the general /taxi-service/{city} page (8+). */
  faqs?: Faq[];
  /** Additional unique FAQs for the /cities/{city} airport-hotel hub page (hub cities only). */
  hubFaqs?: Faq[];
}

export const cityGuides: Record<string, CityGuide> = {
  riyadh: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Riyadh's business travel centres on King Fahd Road, Olaya, and the Diplomatic Quarter, with King Abdullah Financial District (KAFD) now a major pickup and drop-off point for corporate riders. Riyadh Season (winter) and major exhibitions at Riyadh Front pull in heavy short-notice demand, so booking a day or two ahead is worthwhile during peak weeks. Getting around the city by private transfer is generally easier than relying on ride-hailing during large events, since a booked car has your route and pickup point confirmed in advance rather than searching for a match. For business trips, request a car with WhatsApp confirmation the night before so your driver is outside your hotel or office at the exact time you asked for.",
    faqs: [
      {
        question: "How far is King Khalid International Airport from central Riyadh?",
        answer: "King Khalid International Airport sits north of the city, roughly a 30-45 minute drive to central districts like Olaya or KAFD depending on traffic. We track your flight so pickup timing adjusts automatically.",
      },
      {
        question: "Can I book a taxi in Riyadh for a full business day?",
        answer: "Yes. Send us your schedule of meetings or venues on WhatsApp and we'll quote a fixed day-rate with the same driver and vehicle waiting between stops.",
      },
      {
        question: "Is there a taxi service near King Abdullah Financial District (KAFD)?",
        answer: "Yes, KAFD is one of our most requested Riyadh pickup points for corporate travel. We recommend booking with your office or hotel address as the exact pickup location.",
      },
      {
        question: "What vehicle should I book for a family visiting Riyadh Season?",
        answer: "For families we recommend a larger sedan or van depending on group size and luggage — mention passenger count and any car seats needed when requesting your quote.",
      },
      {
        question: "How much notice do I need to book a Riyadh taxi during major events?",
        answer: "During Riyadh Season, exhibitions, or large conferences, demand rises quickly, so booking at least a day in advance gives you more vehicle choice, though we do accept same-day requests when available.",
      },
      {
        question: "Do you offer transfers between Riyadh and Diriyah?",
        answer: "Yes, private transfers to Diriyah and At-Turaif are available as a fixed-price ride from anywhere in Riyadh, including waiting time if you'd like a round trip.",
      },
      {
        question: "Can I get a taxi from Riyadh to Dammam or the Eastern Province?",
        answer: "Yes, intercity private transfers from Riyadh to Dammam, Khobar, and other Eastern Province cities are available with a fixed price agreed before you travel.",
      },
      {
        question: "Do you offer private transfers from Riyadh to Jeddah or AlUla?",
        answer: "Yes, we provide fixed-price long-distance transfers across the Kingdom, including our <a href='/routes/riyadh-to-jeddah'>private Riyadh to Jeddah transfer</a> and scenic journeys like our <a href='/routes/riyadh-to-alula'>private Riyadh to AlUla transfer</a>.",
      },
      {
        question: "Are your Riyadh drivers familiar with the Diplomatic Quarter's access rules?",
        answer: "Yes, our drivers regularly serve the Diplomatic Quarter and are used to its entry procedures; just confirm your exact building or gate when booking so the driver can plan accordingly.",
      },
    ],
    hubFaqs: [
      {
        question: "How long does the transfer from King Khalid Airport to my Riyadh hotel take?",
        answer: "Travel time depends on your hotel's district — expect roughly 30-45 minutes to central areas like Olaya or KAFD, longer during peak traffic hours.",
      },
      {
        question: "Do you serve hotels in Riyadh's Diplomatic Quarter and KAFD?",
        answer: "Yes, hotels across the Diplomatic Quarter, KAFD, Olaya, and greater Riyadh are all covered — choose your hotel from the list below or send us the address directly.",
      },
      {
        question: "Can I book a return transfer from my hotel back to King Khalid Airport?",
        answer: "Yes, every hotel route listed has a matching return leg back to the airport — open the route page and follow the reverse-transfer link, or just tell us your departure flight details.",
      },
      {
        question: "Is airport pickup available for early morning or late night Riyadh flights?",
        answer: "Yes, pickups and drop-offs run 24/7 at King Khalid International Airport regardless of your flight's arrival or departure time.",
      },
      {
        question: "What if my hotel isn't listed in the Riyadh transfer list?",
        answer: "Send us your hotel's name and address on WhatsApp or through the quote form and we'll arrange a private transfer to the door, even if it isn't in our standard list yet.",
      },
      {
        question: "Do you provide larger vehicles for groups arriving at Riyadh Airport?",
        answer: "Yes, family vans and larger vehicles are available for groups with extra luggage — mention your group size when requesting a quote so we match the right vehicle.",
      },
    ],
  },

  jeddah: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Jeddah's business activity concentrates along the Corniche and around the King Abdulaziz International Airport business district, while Al Balad and the Red Sea waterfront draw most leisure and pilgrim sightseeing. Umrah season and Hajj bring the heaviest travel demand, especially around the Hajj Terminal, so early booking matters most during those periods. Outside peak pilgrimage dates, transfers to Makkah and along the Corniche run smoothly with normal lead times. For anyone combining Jeddah with an Umrah trip, it's worth booking the Jeddah-to-Makkah leg and hotel transfer together so both are confirmed before you land.",
    faqs: [
      {
        question: "How long is the drive from Jeddah Airport to Makkah?",
        answer: "The drive from King Abdulaziz International Airport to central Makkah typically takes around 1-1.5 hours depending on traffic and your exact hotel location.",
      },
      {
        question: "Do you offer transfers from the Hajj Terminal specifically?",
        answer: "Yes, we handle pickups from the Hajj Terminal as well as the main North Terminal (T1), so tell us which terminal your flight uses when you book.",
      },
      {
        question: "Can I stop at a miqat on the way from Jeddah to Makkah?",
        answer: "Yes, many pilgrims request a stop at a miqat point such as Qarn al-Manazil or Yalamlam en route — just mention this when booking so your driver plans the stop into the journey.",
      },
      {
        question: "Is Jeddah to Madinah a long drive?",
        answer: "Jeddah to Madinah is a longer intercity trip; we provide a fixed-price private transfer for the full route, with rest stops available on request.",
      },
      {
        question: "What areas of Jeddah does your Corniche transfer service cover?",
        answer: "We cover the full Corniche stretch along with Al-Balad, the King Fahd Fountain area, and nearby hotel districts for both sightseeing and point-to-point transfers.",
      },
      {
        question: "Do prices change during Umrah or Hajj season in Jeddah?",
        answer: "We quote a fixed price for your specific trip before you travel; during peak Umrah and Hajj periods we recommend booking earlier since demand for vehicles rises sharply.",
      },
      {
        question: "Can I book a Jeddah taxi for a family with elderly pilgrims?",
        answer: "Yes, we offer comfortable vehicles suited to elderly or less mobile travellers — mention any mobility needs when requesting your quote so we assign an appropriate car.",
      },
      {
        question: "Is there a private transfer option from Jeddah to Taif?",
        answer: "Yes, the Jeddah to Taif mountain route is available as a private transfer, popular with travellers seeking the cooler highland climate above Makkah.",
      },
    ],
    hubFaqs: [
      {
        question: "How far are Jeddah hotels from King Abdulaziz International Airport?",
        answer: "Travel time varies by hotel location — Corniche and central Jeddah hotels are typically 20-40 minutes from the airport depending on traffic and terminal.",
      },
      {
        question: "Do you cover hotels near the Jeddah Corniche and Al-Balad?",
        answer: "Yes, hotels along the Corniche, near Al-Balad, and across central Jeddah are all served — select your hotel below or send us the address.",
      },
      {
        question: "Can I book a Jeddah Airport transfer that continues on to Makkah?",
        answer: "Yes, many guests combine a Jeddah hotel stay with an onward Makkah transfer — mention both legs when booking and we'll quote each as a fixed price.",
      },
      {
        question: "Is a return transfer to Jeddah Airport included for hotel guests?",
        answer: "Every hotel route has a matching return leg back to the airport; open the route page for the reverse-direction transfer or tell us your departure flight when ready.",
      },
      {
        question: "Which terminal will my Jeddah Airport transfer driver meet me at?",
        answer: "Your driver waits at the terminal matching your flight, whether that's the Hajj Terminal or the main North Terminal (T1) — confirm your flight number so we plan accordingly.",
      },
      {
        question: "Do you provide transfers for large pilgrim groups from Jeddah Airport?",
        answer: "Yes, group and family vans are available for larger parties arriving with more luggage — let us know your group size when requesting a quote.",
      },
    ],
  },

  makkah: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Most of Makkah's traveller activity clusters around the Haram and the Abraj Al-Bait (Clock Tower) hotel district, with Ziyarat sites like Jabal al-Noor, Mina, and Arafat drawing half-day and full-day tour bookings. Demand is highly seasonal — Ramadan, Umrah season, and Hajj bring the busiest periods, when booking a day or more ahead is strongly recommended. Outside those peaks, transfers within Makkah and onward to Madinah run on normal lead times. Vehicles serving the Haram area need to respect pedestrian zones and designated pickup points near the mosque, so confirm your exact meeting point with your driver in advance.",
    faqs: [
      {
        question: "Can I book transfers between the Haram and my Makkah hotel?",
        answer: "Yes, short transfers between the Haram area and hotels around the Clock Tower district are available, with a fixed price agreed before pickup.",
      },
      {
        question: "How long does a Ziyarat tour of Mina and Arafat usually take?",
        answer: "A typical Ziyarat tour covering Mina, Arafat, and Jabal al-Noor runs as a half-day private trip; tell us which sites you want to include when requesting a quote.",
      },
      {
        question: "Is Jabal Thawr included in Ziyarat tour packages?",
        answer: "Jabal Thawr can be added to your Ziyarat route on request — mention it when booking so your driver includes it in the itinerary.",
      },
      {
        question: "How far is Makkah from Jeddah Airport?",
        answer: "Makkah is roughly 1-1.5 hours from King Abdulaziz International Airport in Jeddah by private transfer, depending on traffic and your exact hotel.",
      },
      {
        question: "Can I book a private transfer from Makkah to Madinah?",
        answer: "Yes, private Makkah to Madinah transfers are available as a fixed-price intercity ride, with rest stops available on request for the longer journey.",
      },
      {
        question: "Do you provide family vans for pilgrims travelling with luggage in Makkah?",
        answer: "Yes, family and group vans are available for pilgrims carrying extra luggage, sized to fit both passengers and bags comfortably.",
      },
      {
        question: "Is booking a Makkah taxi harder during Ramadan or Hajj?",
        answer: "Demand rises significantly during Ramadan, Umrah season, and Hajj, so we recommend booking your Makkah transfers as early as possible during these periods.",
      },
      {
        question: "Where does my driver pick me up near the Haram?",
        answer: "Since vehicles can't enter the pedestrian zone directly around the Haram, your driver will confirm a nearby designated pickup point with you in advance.",
      },
    ],
    hubFaqs: [
      {
        question: "How long is the transfer from Jeddah Airport to my Makkah hotel?",
        answer: "The drive from King Abdulaziz International Airport to hotels around the Haram and Clock Tower district typically takes around 1-1.5 hours, depending on traffic.",
      },
      {
        question: "Do you cover hotels near the Clock Tower (Abraj Al-Bait)?",
        answer: "Yes, hotels around the Clock Tower district and across Makkah are all covered — choose your hotel from the list below or send us the address.",
      },
      {
        question: "Can I book a return transfer from my Makkah hotel to Jeddah Airport?",
        answer: "Yes, every hotel route listed has a matching return leg back to Jeddah Airport — open the route page and follow the reverse-transfer link.",
      },
      {
        question: "Is airport-to-hotel pickup available 24/7 for Makkah arrivals?",
        answer: "Yes, pickups and drop-offs run 24/7 regardless of your flight's arrival or departure time, including flights landing at the Hajj Terminal.",
      },
      {
        question: "What if my Makkah hotel isn't listed in the transfer list?",
        answer: "Send us your hotel's name and address on WhatsApp or through the quote form and we'll arrange a private transfer to the door, even if it isn't in our standard list yet.",
      },
      {
        question: "Do you provide family vans for pilgrims arriving with luggage in Makkah?",
        answer: "Yes, family and group vans are available for pilgrims with extra luggage — mention your group size when requesting a quote so we match the right vehicle.",
      },
    ],
  },

  madinah: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Madinah's travel patterns follow prayer times and pilgrim schedules more than typical business hours, and most hotel demand sits within walking distance of the Prophet's Mosque. Ziyarat requests to Quba, Uhud, and Masjid al-Qiblatain are common half-day add-ons to an airport or hotel transfer. The city sees seasonal peaks around Ramadan and Hajj travel windows either side of Makkah visits, when booking ahead is advisable. Drivers serving central Madinah are used to working around prayer-time road closures near the Haram, so allow some flexibility in pickup timing close to prayer times.",
    faqs: [
      {
        question: "How far is Madinah Airport from the Prophet's Mosque area?",
        answer: "Prince Mohammad bin Abdulaziz International Airport is roughly 20-30 minutes from central Madinah hotels near the Prophet's Mosque, depending on traffic.",
      },
      {
        question: "Can I visit Quba Mosque and Uhud on the same Ziyarat trip?",
        answer: "Yes, a combined Ziyarat tour covering Quba Mosque, Mount Uhud, and Masjid al-Qiblatain can be arranged as a single half-day private trip.",
      },
      {
        question: "Is transport affected around prayer times in Madinah?",
        answer: "Roads near the Haram can see temporary restrictions around prayer times; your driver will plan pickup and drop-off timing accordingly, so build in some flexibility close to prayer times.",
      },
      {
        question: "Can I book a private transfer from Madinah to AlUla?",
        answer: "Yes, our <a href='/routes/madinah-to-alula'>private Madinah to AlUla transfer</a> is available as a fixed-price intercity ride, popular with travellers combining a pilgrimage visit with AlUla's heritage sites.",
      },
      {
        question: "How long is the drive from Madinah to Makkah?",
        answer: "The Madinah to Makkah drive is a longer intercity journey; we offer it as a fixed-price private transfer with rest stops available on request.",
      },
      {
        question: "Do you provide comfortable vehicles for elderly pilgrims in Madinah?",
        answer: "Yes, we offer vehicles suited to elderly or less mobile travellers for both airport transfers and Ziyarat tours — mention any needs when booking.",
      },
      {
        question: "Can I book a Madinah to Yanbu transfer for the Red Sea coast?",
        answer: "Yes, private transfers from Madinah to Yanbu are available for travellers heading to the Red Sea coast after their Madinah visit.",
      },
      {
        question: "Is airport pickup available for late-night flights into Madinah?",
        answer: "Yes, meet-and-greet pickup at Madinah Airport runs 24/7 regardless of your flight's arrival time.",
      },
    ],
    hubFaqs: [
      {
        question: "How far are Madinah hotels from Prince Mohammad bin Abdulaziz Airport?",
        answer: "Most central Madinah hotels near the Prophet's Mosque are roughly 20-30 minutes from the airport, depending on traffic and exact location.",
      },
      {
        question: "Do you cover hotels close to the Prophet's Mosque?",
        answer: "Yes, hotels within walking distance of the Haram as well as further out in Madinah are all covered — select your hotel below or send us the address.",
      },
      {
        question: "Can I add a Ziyarat stop to my Madinah airport transfer?",
        answer: "Yes, you can request a Ziyarat stop such as Quba Mosque on the way to or from your hotel — mention it when booking so the driver plans the route.",
      },
      {
        question: "Is a return transfer to Madinah Airport included for hotel guests?",
        answer: "Every hotel route has a matching return leg back to the airport; open the route page for the reverse transfer or share your departure flight details.",
      },
      {
        question: "Do you provide family vans for Madinah airport-to-hotel transfers?",
        answer: "Yes, family and group vans are available for larger parties with extra luggage — mention your group size when requesting a quote.",
      },
      {
        question: "What if my hotel near the Haram isn't listed?",
        answer: "Send us your hotel's name and address and we'll arrange a private transfer to the door, even if it isn't in our standard Madinah list yet.",
      },
    ],
  },

  dammam: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Dammam's business travel is concentrated around Dhahran's energy-sector offices and the Khobar Corniche waterfront, with the King Fahd Causeway a constant source of cross-border demand toward Bahrain. Weekend traffic toward the Causeway and Half Moon Bay tends to build up on Thursday and Friday afternoons, so allowing extra time then is sensible. The Dammam-Khobar-Dhahran metro area is well connected by private transfer, making it practical to combine a business meeting in Dhahran with a Corniche hotel stay in the same trip. For Bahrain crossings, confirm your travel documents are in order before booking, since border processing time varies and isn't something we can guarantee in advance.",
    faqs: [
      {
        question: "How long does it take to reach the Bahrain Causeway from Dammam?",
        answer: "The drive from Dammam to the King Fahd Causeway border point typically takes around 30-45 minutes, though border processing time itself varies and isn't something we can guarantee.",
      },
      {
        question: "Can I book a Dammam taxi for business travel across Dhahran and Khobar?",
        answer: "Yes, we handle corporate and business travel across the whole Dammam-Khobar-Dhahran metro area, including multi-stop days on request.",
      },
      {
        question: "How far is King Fahd International Airport from central Dammam?",
        answer: "King Fahd International Airport is a fair distance from central Dammam; we track your flight and quote transfer time based on your exact hotel or destination.",
      },
      {
        question: "Do you offer intercity transfers from Dammam to Riyadh?",
        answer: "Yes, private intercity transfers from Dammam to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is weekend traffic heavier toward the Bahrain Causeway?",
        answer: "Thursday and Friday afternoons tend to see heavier traffic toward the Causeway as weekend travellers head to Bahrain, so allow extra time if travelling then.",
      },
      {
        question: "Can I book a transfer from Dammam to Jubail for work?",
        answer: "Yes, transfers between Dammam and Jubail Industrial City are available, popular with energy and petrochemical-sector business travellers.",
      },
      {
        question: "Do you serve hotels along the Dammam Corniche?",
        answer: "Yes, hotels along the Dammam Corniche and Half Moon Bay area are covered for both airport transfers and point-to-point rides.",
      },
      {
        question: "What documents do I need for a Dammam to Bahrain crossing?",
        answer: "Border document requirements can change, so we recommend checking official Saudi and Bahraini government sources before travelling; we handle the driving, not the paperwork.",
      },
    ],
    hubFaqs: [
      {
        question: "How far are Dammam hotels from King Fahd International Airport?",
        answer: "Travel time depends on your hotel's location across the Dammam-Khobar-Dhahran metro area — we track your flight and quote based on your exact destination.",
      },
      {
        question: "Do you cover hotels in Khobar and Dhahran as well as Dammam?",
        answer: "Yes, since King Fahd International Airport serves the whole metro area, we cover hotels across Dammam, Khobar, and Dhahran from this hub.",
      },
      {
        question: "Can I book a return transfer to King Fahd Airport from my hotel?",
        answer: "Yes, every hotel route has a matching return leg back to the airport — open the route page for the reverse transfer or share your departure flight.",
      },
      {
        question: "Is airport pickup available for early or late flights into Dammam?",
        answer: "Yes, pickups run 24/7 at King Fahd International Airport regardless of arrival time.",
      },
      {
        question: "Do you provide larger vehicles for business groups arriving in Dammam?",
        answer: "Yes, we offer larger vehicles for business groups or families with extra luggage — mention your group size when requesting a quote.",
      },
      {
        question: "What if my Khobar or Dhahran hotel isn't listed?",
        answer: "Send us your hotel's name and address and we'll arrange a private transfer to the door, even if it isn't in our standard list yet.",
      },
    ],
  },

  khobar: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Khobar's waterfront hotels and malls along the Corniche draw both business and leisure travellers, and the city sits close enough to the King Fahd Causeway that a Bahrain day trip is a common add-on to a Khobar stay. Weekend afternoons see heavier Causeway-bound traffic as travellers cross for the weekend, so factor in extra time on Thursdays and Fridays. Khobar, Dammam, and Dhahran form one connected metro area, so combining a Khobar hotel with a Dhahran business meeting or a Dammam Corniche visit in the same private transfer plan is straightforward.",
    faqs: [
      {
        question: "How far is Khobar from the Bahrain Causeway?",
        answer: "Khobar is one of the closest Saudi cities to the King Fahd Causeway, typically a short drive; actual border processing time varies and isn't something we can guarantee.",
      },
      {
        question: "Can I book a Khobar taxi from King Fahd International Airport?",
        answer: "Yes, we provide private transfers from King Fahd International Airport to hotels and destinations across Khobar with flight tracking included.",
      },
      {
        question: "Do you cover hotels along the Khobar Corniche and Al Rashid Mall?",
        answer: "Yes, waterfront hotels along the Corniche and areas near Al Rashid Mall are all covered for both airport and point-to-point transfers.",
      },
      {
        question: "Is weekend traffic worse toward Bahrain from Khobar?",
        answer: "Thursday and Friday afternoons typically see heavier traffic as weekend travellers cross to Bahrain, so allow extra time if travelling during those windows.",
      },
      {
        question: "Can I book a transfer from Khobar to Ithra in Dhahran?",
        answer: "Yes, transfers to Ithra (King Abdulaziz Center for World Culture) in Dhahran are available as a short private ride from Khobar.",
      },
      {
        question: "Do you offer intercity transfers from Khobar to Riyadh?",
        answer: "Yes, private intercity transfers from Khobar to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Half Moon Bay accessible by private transfer from Khobar?",
        answer: "Yes, Half Moon Bay is a popular short trip from Khobar, suitable for a beach day or family outing.",
      },
      {
        question: "Can I book a family van for a Khobar to Dammam transfer?",
        answer: "Yes, family and group vans are available for transfers across the Dammam metro area, including Khobar to Dammam or Dhahran.",
      },
    ],
  },

  jubail: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Jubail's transfer demand is dominated by industrial and petrochemical-sector logistics — project-site pickups inside Jubail Industrial City and shift-schedule airport runs from Dammam are the norm rather than leisure travel. Because many riders work fixed shift patterns, on-time pickup matters more here than in most cities, so confirming your exact gate or site entrance in advance helps avoid delays. Fanateer Beach and the Jubail Corniche offer the main leisure options for workers based in the city on days off.",
    faqs: [
      {
        question: "Do you provide transfers to specific sites inside Jubail Industrial City?",
        answer: "Yes, we handle project-site pickups inside Jubail Industrial City — share your exact gate or site entrance when booking so the driver can plan access.",
      },
      {
        question: "How far is Jubail from Dammam Airport?",
        answer: "Jubail is a fair distance north of King Fahd International Airport in Dammam; we track your flight and quote transfer time to your exact site or hotel.",
      },
      {
        question: "Can you accommodate shift-schedule pickups in Jubail?",
        answer: "Yes, we regularly handle early-morning and late-night pickups for shift workers — book with your exact time and location and we'll confirm the driver in advance.",
      },
      {
        question: "Do you offer corporate accounts for companies based in Jubail?",
        answer: "Yes, we work with corporate and project-site accounts for regular staff transport — contact us on WhatsApp to discuss your company's needs.",
      },
      {
        question: "Can I book a Jubail to Riyadh intercity transfer?",
        answer: "Yes, private intercity transfers from Jubail to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Fanateer Beach a common short trip from Jubail?",
        answer: "Yes, Fanateer Beach and the Jubail Corniche are popular short leisure trips for residents and visiting workers.",
      },
      {
        question: "Do you offer transfers between Jubail and Khobar?",
        answer: "Yes, transfers between Jubail and Khobar are available, commonly used for business trips or weekend visits within the Eastern Province.",
      },
      {
        question: "Can I book a taxi for a group of colleagues arriving in Jubail together?",
        answer: "Yes, larger vehicles are available for groups of colleagues travelling together — mention your group size when requesting a quote.",
      },
    ],
  },

  taif: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Taif's appeal is almost entirely seasonal and altitude-driven — its cooler mountain climate on the Al Hada road draws the heaviest visitor numbers during summer, when Saudi and Gulf travellers escape the coastal heat. The rose harvest season adds another short but distinct visitor spike tied to the local farms. The drive up from Makkah climbs steadily along a scenic mountain road, so travellers prone to motion sickness may want to request a short break partway up.",
    faqs: [
      {
        question: "How long does the drive from Makkah to Taif take?",
        answer: "The Makkah to Taif mountain route typically takes around 1.5-2 hours depending on traffic and conditions on the Al Hada road.",
      },
      {
        question: "Is Taif busiest during a particular season?",
        answer: "Yes, Taif sees its highest visitor numbers in summer when Saudi and Gulf travellers head to its cooler mountain climate, and briefly during the rose harvest season.",
      },
      {
        question: "Can I book a Taif cable car and rose-farm day trip?",
        answer: "Yes, we offer sightseeing rides combining the Taif Cable Car and nearby rose farms as a private day trip.",
      },
      {
        question: "Is the drive up to Taif difficult for those prone to motion sickness?",
        answer: "The mountain road involves a steady climb with curves, so if you're prone to motion sickness, mention it when booking and your driver can plan a short stop along the way.",
      },
      {
        question: "How far is Taif from its own regional airport?",
        answer: "Taif Regional Airport is a short transfer from central Taif; we provide meet-and-greet pickup with flight tracking included.",
      },
      {
        question: "Can I visit Al Shafa on a Taif sightseeing trip?",
        answer: "Yes, Al Shafa is a popular addition to a Taif sightseeing itinerary — mention it when booking your day trip.",
      },
      {
        question: "Do you offer transfers from Taif to Jeddah?",
        answer: "Yes, private intercity transfers from Taif to Jeddah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Taif a good stop between Makkah and Abha?",
        answer: "Yes, some travellers combine Taif with an onward trip toward Abha; ask us about a multi-city itinerary and we'll quote each leg.",
      },
    ],
  },

  abha: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Abha's tourism season peaks in summer, when its cooler, misty highland climate draws domestic visitors escaping the heat elsewhere in the Kingdom, and again briefly around any local cultural festivals in the Asir region. The Al Soudah cable car and Green Mountain area see the heaviest sightseeing traffic, and mountain roads can be foggy in the early morning, so allow a little extra travel time during those hours. Abha also functions as a practical base for day trips to Khamis Mushait and further south toward Najran and Jazan.",
    faqs: [
      {
        question: "When is the best time to visit Abha for cooler weather?",
        answer: "Summer is Abha's peak season, when its highland climate is noticeably cooler than most of Saudi Arabia, drawing domestic visitors to the Asir mountains.",
      },
      {
        question: "How far is Abha Airport from the Al Soudah cable car?",
        answer: "Al Soudah and the Green Mountain cable car area are a scenic drive from Abha International Airport; travel time depends on road conditions in the highlands.",
      },
      {
        question: "Is fog common on the Abha highland roads?",
        answer: "Early mornings in the Asir highlands can see fog, particularly around Al Soudah and Green Mountain, so allow a little extra travel time during those hours.",
      },
      {
        question: "Can I book a day trip to Habala from Abha?",
        answer: "Yes, Habala is a popular day-trip destination from Abha, known for its hanging village and mountain scenery.",
      },
      {
        question: "Do you offer transfers from Abha to Khamis Mushait?",
        answer: "Yes, Abha to Khamis Mushait is a short, frequently requested transfer given the two cities' close proximity.",
      },
      {
        question: "Can I book an intercity transfer from Abha to Najran or Jazan?",
        answer: "Yes, private intercity transfers from Abha to both Najran and Jazan are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Abha Dam Lake accessible by private taxi?",
        answer: "Yes, Abha Dam Lake is a short, popular sightseeing trip from central Abha.",
      },
      {
        question: "Do you provide family-friendly vehicles for highland sightseeing in Abha?",
        answer: "Yes, comfortable family vehicles are available for highland day trips — mention passenger count and any specific stops when requesting a quote.",
      },
    ],
  },

  tabuk: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Tabuk's transfer demand splits between NEOM-related business travel and heritage tourism at the Hejaz Railway station and Tabuk Castle. NEOM project areas can involve longer drives and specific site-access procedures, so confirming your exact destination and any site-entry requirements when booking helps the driver plan the route. Tabuk also functions as a practical staging point for travellers heading onward to the Red Sea coast or AlUla.",
    faqs: [
      {
        question: "Do you provide transfers to NEOM project areas from Tabuk?",
        answer: "Yes, we provide rides to NEOM project areas from Tabuk — share your exact destination and any site-access details when booking so the driver can plan accordingly.",
      },
      {
        question: "How far is the Hejaz Railway Station from Tabuk Airport?",
        answer: "The historic Hejaz Railway Station is a short drive from Tabuk Regional Airport, commonly combined with a Tabuk Castle visit on the same trip.",
      },
      {
        question: "Can I book a Tabuk to AlUla transfer?",
        answer: "Yes, private intercity transfers from Tabuk to AlUla are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Tabuk a good base for heading to the Red Sea coast?",
        answer: "Yes, Tabuk is commonly used as a staging point for onward travel toward the Red Sea coast; ask us about combining legs into one itinerary.",
      },
      {
        question: "Do you offer business travel accounts for NEOM-related trips from Tabuk?",
        answer: "Yes, we work with business travellers making regular NEOM-related trips — contact us on WhatsApp to discuss your travel pattern.",
      },
      {
        question: "Can I visit Tabuk Castle and the Hejaz Railway on the same day?",
        answer: "Yes, both sites are close together and commonly visited on the same private sightseeing trip from Tabuk.",
      },
      {
        question: "How far is Tabuk from Madinah?",
        answer: "Tabuk to Madinah is a longer intercity route; we offer it as a fixed-price private transfer with rest stops available on request.",
      },
      {
        question: "Do you provide airport pickup for late or early Tabuk flights?",
        answer: "Yes, meet-and-greet pickup at Tabuk Regional Airport runs 24/7 regardless of flight time.",
      },
    ],
  },

  alula: {
    lastUpdated: "2026-08-05",
    localInsight:
      "AlUla's visitor season runs heaviest in the cooler months (roughly October through April), when the desert climate is far more comfortable for touring Hegra, Elephant Rock, and the Old Town. Many resorts and heritage sites sit some distance apart across the AlUla valley, so private transfers between accommodation and sites are the practical way to get around rather than walking between them. Travellers often combine an AlUla stay with an onward transfer to Madinah or Tabuk.",
    faqs: [
      {
        question: "When is the best season to visit AlUla?",
        answer: "The cooler months, roughly October through April, are AlUla's peak visitor season, offering more comfortable conditions for touring Hegra and the surrounding desert sites.",
      },
      {
        question: "How far is Hegra from AlUla Airport?",
        answer: "Hegra (Madain Salih) is a drive from AlUla International Airport across the valley; we provide direct transfers with flight tracking for arrivals.",
      },
      {
        question: "Can I visit Elephant Rock and the Old Town on the same trip?",
        answer: "Yes, Elephant Rock and AlUla Old Town are commonly combined into a single private sightseeing trip.",
      },
      {
        question: "Do resorts in AlUla require private transfers to reach the sites?",
        answer: "Yes, many resorts sit some distance from the main heritage sites across the valley, so a private transfer is the practical way to move between accommodation and sites.",
      },
      {
        question: "Can I book a transfer from AlUla to Madinah?",
        answer: "Yes, private intercity transfers from AlUla to Madinah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is there transfer service to the Maraya Concert Hall?",
        answer: "Yes, transfers to Maraya Concert Hall are available for event nights and general sightseeing.",
      },
      {
        question: "Do you offer transfers from AlUla to Tabuk or Yanbu?",
        answer: "Yes, private intercity transfers from AlUla to both Tabuk and Yanbu are available with a fixed price agreed before you travel.",
      },
      {
        question: "Are your AlUla vehicles suitable for desert touring?",
        answer: "Yes, our vehicles are comfortable for AlUla's desert touring routes; mention any specific sites or a full-day itinerary when requesting a quote.",
      },
    ],
  },

  yanbu: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Yanbu's traveller mix splits between the petrochemical workforce commuting around the Royal Commission waterfront and leisure visitors drawn to the Red Sea's diving and beach sites at Sharm Yanbu. The clearer diving conditions typically run through the cooler months, which is when leisure bookings pick up alongside steady year-round corporate transfer demand.",
    faqs: [
      {
        question: "How far is Yanbu Airport from the Red Sea resort area?",
        answer: "The Red Sea resort and dive area at Sharm Yanbu is a drive from Yanbu Airport; we track your flight and quote transfer time to your exact resort.",
      },
      {
        question: "When is the best time for diving trips from Yanbu?",
        answer: "The cooler months generally offer clearer diving conditions at Sharm Yanbu, which is when leisure diving bookings tend to increase.",
      },
      {
        question: "Do you provide corporate transfers for Yanbu's industrial workforce?",
        answer: "Yes, we work with corporate accounts for regular staff transport around the Yanbu Royal Commission Waterfront and Yanbu Industrial City.",
      },
      {
        question: "Can I book a transfer from Yanbu to Madinah?",
        answer: "Yes, private intercity transfers from Yanbu to Madinah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is there a private transfer from Yanbu to Jeddah?",
        answer: "Yes, Yanbu to Jeddah is available as a fixed-price intercity private transfer.",
      },
      {
        question: "Do you cover hotels around the Yanbu waterfront?",
        answer: "Yes, hotels and resorts along the Yanbu Royal Commission Waterfront and nearby beach areas are all covered.",
      },
      {
        question: "Can I book a group transfer for a diving trip to Yanbu?",
        answer: "Yes, larger vehicles are available for dive groups with gear and extra luggage — mention your group size and equipment when requesting a quote.",
      },
      {
        question: "Do you offer transfers between Yanbu and AlUla?",
        answer: "Yes, private intercity transfers from Yanbu to AlUla are available with a fixed price agreed before you travel.",
      },
    ],
  },

  hail: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Hail serves mainly as a heritage and desert-touring base, with the Jubbah rock-art site and the Aja and Salma mountains drawing most sightseeing trips, plus a role as a practical stopover for travellers driving the northern route toward AlUla. Weather is generally more comfortable outside the height of summer, and the desert stretches between sites can involve longer drive times than in more compact cities.",
    faqs: [
      {
        question: "How far is Jubbah rock art from Hail Airport?",
        answer: "The Jubbah rock-art site is a drive from Hail Regional Airport across desert roads; we provide private transfers with flight tracking for arrivals.",
      },
      {
        question: "Can I visit A'arif Fort and the Aja Mountains on the same day?",
        answer: "Yes, A'arif Fort and the Aja Mountains are commonly combined into a single private sightseeing trip from Hail.",
      },
      {
        question: "Is Hail a good stopover between Riyadh and AlUla?",
        answer: "Yes, Hail is often used as a practical stopover point for travellers on the northern route toward AlUla; ask us about combining legs into one itinerary.",
      },
      {
        question: "Do you offer transfers from Hail to Buraidah?",
        answer: "Yes, private intercity transfers from Hail to Buraidah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Can I book a transfer from Hail to Tabuk?",
        answer: "Yes, Hail to Tabuk is available as a fixed-price private intercity transfer.",
      },
      {
        question: "Are Hail's desert sightseeing routes long drives?",
        answer: "Distances between sites in Hail's desert and mountain terrain can be longer than in more compact cities, so allow extra time when planning a multi-site day trip.",
      },
      {
        question: "Do you provide airport pickup for all Hail Regional Airport flights?",
        answer: "Yes, meet-and-greet pickup at Hail Regional Airport is available for arriving flights with flight tracking included.",
      },
      {
        question: "Can I book a transfer from Hail toward Riyadh?",
        answer: "Yes, private intercity transfers from Hail to Riyadh are available with a fixed price agreed before you travel.",
      },
    ],
  },

  najran: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Najran's character comes from its mud-brick heritage architecture and oasis farms near the southern frontier, with the Al-Ukhdood archaeological site and Najran Dam the main sightseeing draws. As a southern city without its own major international airport hub in our network, most visitors arrive via Abha or overland from Jazan, so plan onward or connecting legs when booking.",
    faqs: [
      {
        question: "How do most visitors reach Najran?",
        answer: "Najran is typically reached via a connecting flight through Abha or an overland transfer from Jazan; we can arrange either leg with a fixed price agreed in advance.",
      },
      {
        question: "Can I visit Al-Ukhdood and Najran Dam on the same trip?",
        answer: "Yes, Al-Ukhdood and Najran Dam are close together and commonly combined into a single private sightseeing trip.",
      },
      {
        question: "Do you offer transfers from Najran to Abha?",
        answer: "Yes, private intercity transfers from Najran to Abha are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is there a transfer service from Najran to Jazan?",
        answer: "Yes, Najran to Jazan is available as a fixed-price private intercity transfer.",
      },
      {
        question: "Can I see Najran's mud-brick palaces by private taxi?",
        answer: "Yes, we offer heritage sightseeing trips to Najran's traditional mud-brick palaces, including Aan Palace.",
      },
      {
        question: "Do you provide transfers from Najran toward Riyadh?",
        answer: "Yes, private intercity transfers from Najran to Riyadh are available, though it is a long desert route — a rest stop can be arranged on request.",
      },
      {
        question: "Are your vehicles suited to Najran's long desert routes?",
        answer: "Yes, our vehicles are comfortable for Najran's longer desert legs; mention your route and any rest-stop preferences when requesting a quote.",
      },
      {
        question: "Can I book a family transfer for a Najran heritage tour?",
        answer: "Yes, family-friendly vehicles are available for heritage sightseeing in Najran — mention passenger count when requesting a quote.",
      },
    ],
  },

  jazan: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Jazan's transfer demand centres on the ferry terminal serving the Farasan Islands and the growing economic-city workforce along the Red Sea south coast, with the Fifa Mountains offering a cooler highland day-trip option nearby. Ferry departure times for Farasan should be confirmed directly with the ferry operator, since we handle the road transfer to the terminal rather than the sailing schedule itself.",
    faqs: [
      {
        question: "Do you provide transfers to the Farasan Islands ferry terminal?",
        answer: "Yes, we provide transfers to the Jazan ferry terminal for Farasan Islands departures; please confirm sailing times directly with the ferry operator since we handle the road transfer, not the crossing.",
      },
      {
        question: "How far is Jazan Airport from the ferry terminal?",
        answer: "The ferry terminal is a drive from Jazan Airport; we track your flight and quote transfer time based on your ferry departure.",
      },
      {
        question: "Can I visit the Fifa Mountains from Jazan?",
        answer: "Yes, the Fifa Mountains are a popular highland day trip from Jazan, offering cooler temperatures than the coastal city.",
      },
      {
        question: "Do you offer transfers between Jazan and Abha?",
        answer: "Yes, private intercity transfers from Jazan to Abha are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is there a transfer service from Jazan to Najran?",
        answer: "Yes, Jazan to Najran is available as a fixed-price private intercity transfer.",
      },
      {
        question: "Do you cover hotels along the Jazan Corniche?",
        answer: "Yes, hotels and resorts along the Jazan Corniche are covered for both airport transfers and point-to-point rides.",
      },
      {
        question: "Can I book a business transfer for the Jazan economic city area?",
        answer: "Yes, we handle business travel around the Jazan economic-city workforce area — contact us on WhatsApp to discuss your travel pattern.",
      },
      {
        question: "Do you provide transfers for groups heading to Farasan with luggage or gear?",
        answer: "Yes, larger vehicles are available for groups travelling to the ferry terminal with extra luggage or diving gear.",
      },
    ],
  },

  buraidah: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Buraidah's biggest travel spike ties directly to the annual Qassim Date Festival, when demand for both airport transfers and local rides rises sharply across the city. Outside festival season, most transfer activity is intercity — Buraidah sits on the Riyadh-Hail corridor, making it a frequent stop for longer central-Kingdom road trips rather than a standalone leisure destination.",
    faqs: [
      {
        question: "Does the Qassim Date Festival affect taxi availability in Buraidah?",
        answer: "Yes, demand rises noticeably during the Date Festival season, so booking your Buraidah transfers a little earlier during that period is worthwhile.",
      },
      {
        question: "How far is Qassim Airport from central Buraidah?",
        answer: "Prince Naif bin Abdulaziz Airport (Qassim) is a short transfer from central Buraidah; we track your flight and provide meet-and-greet pickup.",
      },
      {
        question: "Is Buraidah a common stop on the Riyadh to Hail route?",
        answer: "Yes, Buraidah sits on the Riyadh-Hail corridor and is a frequent stop or waypoint for travellers making that longer central-Kingdom journey.",
      },
      {
        question: "Can I book a transfer from Buraidah to Riyadh?",
        answer: "Yes, private intercity transfers from Buraidah to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Do you offer transfers from Buraidah to Madinah or Makkah?",
        answer: "Yes, private intercity transfers from Buraidah to both Madinah and Makkah are available with a fixed price agreed before you travel.",
      },
      {
        question: "Can I visit Al Bukayriyah from Buraidah?",
        answer: "Yes, Al Bukayriyah is a short trip from Buraidah, commonly combined with a city tour.",
      },
      {
        question: "Do you provide comfortable vehicles for long desert legs from Buraidah?",
        answer: "Yes, our vehicles are suited to Buraidah's longer central-Kingdom desert routes; mention your route when requesting a quote.",
      },
      {
        question: "Can I book a transfer from Buraidah to Hail?",
        answer: "Yes, Buraidah to Hail is available as a fixed-price private intercity transfer.",
      },
    ],
  },

  hofuf: {
    lastUpdated: "2026-08-05",
    localInsight:
      "Hofuf is the main gateway to the Al-Ahsa Oasis, a UNESCO World Heritage site, so most transfer requests centre on heritage tours of the Qaisariah Souq and Ibrahim Palace alongside the Jabal Al-Qarah caves. As the principal city of the oasis, Hofuf also handles most onward intercity demand toward the Eastern Province coast rather than being a pure business destination.",
    faqs: [
      {
        question: "How far is Hofuf from Al-Ahsa International Airport?",
        answer: "Al-Ahsa International Airport is a short transfer from central Hofuf; we track your flight and provide meet-and-greet pickup.",
      },
      {
        question: "Can I visit Qaisariah Souq and Ibrahim Palace on the same trip?",
        answer: "Yes, Qaisariah Souq and Ibrahim Palace are close together in Hofuf and commonly combined into one heritage sightseeing trip.",
      },
      {
        question: "Are the Jabal Al-Qarah caves accessible from Hofuf?",
        answer: "Yes, the Jabal Al-Qarah caves are a short private transfer from central Hofuf.",
      },
      {
        question: "Do you offer transfers from Hofuf to Dammam or Riyadh?",
        answer: "Yes, private intercity transfers from Hofuf to both Dammam and Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Hofuf a good base for exploring the Al-Ahsa Oasis?",
        answer: "Yes, as the principal city of the oasis, Hofuf is a practical base for touring the palm groves, springs, and heritage sites of Al-Ahsa.",
      },
      {
        question: "Can I book a transfer from Hofuf to the Bahrain Causeway?",
        answer: "Yes, private transfers from Hofuf toward the Bahrain Causeway crossing are available with a fixed price agreed before you travel.",
      },
      {
        question: "Do you provide family vehicles for oasis sightseeing in Hofuf?",
        answer: "Yes, comfortable family vehicles are available for oasis and heritage sightseeing — mention passenger count when requesting a quote.",
      },
      {
        question: "Can I book a transfer from Hofuf to Khobar?",
        answer: "Yes, Hofuf to Khobar is available as a fixed-price private intercity transfer.",
      },
    ],
  },

  "al-ahsa": {
    lastUpdated: "2026-08-05",
    localInsight:
      "Al-Ahsa is the wider oasis governorate around Hofuf — millions of palm trees, natural springs, and heritage towns spread across the UNESCO-listed area, so transfers here often involve moving between several sites rather than a single fixed destination. Most travellers pair an Al-Ahsa sightseeing day with an intercity leg to Dammam, Riyadh, or onward toward the Bahrain Causeway.",
    faqs: [
      {
        question: "What is the difference between Al-Ahsa and Hofuf for transfers?",
        answer: "Hofuf is the main city within the wider Al-Ahsa oasis governorate; we cover both under the same service, including transfers between outlying towns and heritage sites across the oasis.",
      },
      {
        question: "How far is Al-Ahsa International Airport from the oasis sites?",
        answer: "Al-Ahsa International Airport is a short transfer from most oasis heritage sites and palm groves; we track your flight and quote based on your exact destination.",
      },
      {
        question: "Can I tour multiple Al-Ahsa oasis sites in one day?",
        answer: "Yes, we can arrange a multi-stop day covering palm groves, springs, and heritage sites across Al-Ahsa — mention your preferred stops when requesting a quote.",
      },
      {
        question: "Is Yellow Lake accessible by private taxi from Al-Ahsa?",
        answer: "Yes, Yellow Lake is a popular sightseeing stop reachable by private transfer from central Al-Ahsa.",
      },
      {
        question: "Do you offer transfers from Al-Ahsa to Dammam or Riyadh?",
        answer: "Yes, private intercity transfers from Al-Ahsa to both Dammam and Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Can I book a transfer from Al-Ahsa toward the Bahrain Causeway?",
        answer: "Yes, private transfers from Al-Ahsa toward the Bahrain Causeway crossing are available with a fixed price agreed before you travel.",
      },
      {
        question: "Are Jabal Al-Qarah caves included in Al-Ahsa sightseeing routes?",
        answer: "Yes, the Jabal Al-Qarah caves are commonly included in an Al-Ahsa oasis sightseeing itinerary alongside the palm groves and springs.",
      },
      {
        question: "Do you provide family vehicles for a full-day Al-Ahsa oasis tour?",
        answer: "Yes, comfortable family vehicles are available for full-day oasis touring — mention passenger count and preferred stops when requesting a quote.",
      },
    ],
  },

  "khamis-mushait": {
    lastUpdated: "2026-08-05",
    localInsight:
      "Khamis Mushait functions as the larger commercial twin to nearby Abha, sharing the same airport and highland climate but with more of the region's markets and city-centre business activity. It's a practical base for travellers who want highland sightseeing during the day but a more commercial city base at night, and it sits well-placed for onward trips south toward Najran and Jazan.",
    faqs: [
      {
        question: "How far is Khamis Mushait from Abha Airport?",
        answer: "Khamis Mushait shares Abha International Airport with nearby Abha; the transfer typically takes a similar amount of time to reaching central Abha.",
      },
      {
        question: "What's the difference between staying in Khamis Mushait or Abha?",
        answer: "Khamis Mushait is the larger commercial city with more markets and city-centre business activity, while Abha leans more toward tourism and highland scenery — both share the same airport and climate.",
      },
      {
        question: "Can I do Asir highland sightseeing from Khamis Mushait?",
        answer: "Yes, Asir highland sites including Al Soudah and Green Mountain are reachable as day trips from Khamis Mushait, similar to from Abha.",
      },
      {
        question: "Do you offer transfers from Khamis Mushait to Najran or Jazan?",
        answer: "Yes, private intercity transfers from Khamis Mushait to both Najran and Jazan are available with a fixed price agreed before you travel.",
      },
      {
        question: "Is Al Mahalah Heritage Village accessible from Khamis Mushait?",
        answer: "Yes, Al Mahalah Heritage Village is a short private transfer from central Khamis Mushait.",
      },
      {
        question: "Can I book a market or city-centre transfer in Khamis Mushait?",
        answer: "Yes, we provide city and market transfers around central Khamis Mushait in addition to airport and intercity trips.",
      },
      {
        question: "Do you offer transfers from Khamis Mushait to Riyadh?",
        answer: "Yes, private intercity transfers from Khamis Mushait to Riyadh are available with a fixed price agreed before you travel.",
      },
      {
        question: "Can I book a business account for regular Khamis Mushait travel?",
        answer: "Yes, we work with corporate and business travel accounts for regular Khamis Mushait trips — contact us on WhatsApp to set this up.",
      },
    ],
  },
};

export function getCityGuide(slug: string) {
  return cityGuides[slug];
}
