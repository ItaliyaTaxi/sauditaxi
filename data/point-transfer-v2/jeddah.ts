import type { PointTransferV2Page } from "./types";

/**
 * Jeddah V2 point-transfer pages — attractions, port, railway and service
 * pages redesigned onto PointTransferV2View. Replaces the corresponding
 * entries in data/jeddah/attractions.ts, port-railway.ts and services.ts one
 * city at a time (see lib/point-transfers-v2.ts) — those files stay live for
 * every other city until each is migrated in turn.
 */
export const jeddahPointTransfersV2: PointTransferV2Page[] = [
  // ── Al-Balad (attraction) ──────────────────────────────────────────────
  {
    slug: "jeddah-airport-to-al-balad",
    citySlug: "jeddah",
    from: "Jeddah Airport",
    to: "Al-Balad",
    h1: "Jeddah Airport to Al-Balad Taxi",
    metaTitle: "Jeddah Airport to Al-Balad Taxi | Private Transfer",
    metaDescription:
      "Book a fixed-price Jeddah Airport to Al-Balad taxi with meet and greet, flight tracking and English-speaking drivers. Door-to-door private transfer, 24/7.",
    distance: "~35 km",
    duration: "40-55 min",
    content: {
      category: "attraction",
      eyebrow: "Airport arrival to the old city",
      dek: "Land at King Abdulaziz International Airport and go straight to Jeddah's UNESCO-listed old town, with a driver waiting and a fixed price agreed before you fly.",
      stats: [
        { label: "Distance", value: "~35 km" },
        { label: "Drive time", value: "40-55 min", emphasis: true },
        { label: "Best arrival", value: "Late afternoon / evening" },
      ],
      blocks: [
        {
          type: "prepPanel",
          heading: "Before you fly",
          items: [
            "Share your flight number so the driver adjusts to your actual landing time",
            "Mention your exact guesthouse or hotel — some Al-Balad lanes are pedestrianised, so the driver plans the closest reachable drop-off",
            "An evening arrival lines up naturally with when the old town is at its best",
          ],
        },
        {
          type: "journeyOverview",
          heading: "From JED arrivals to the old town",
          paragraphs: [
            "Your driver waits inside the arrivals hall with a name board, tracks your flight, and helps with luggage before the roughly 35 km, 40–55 minute drive south into the historic quarter near the Red Sea shoreline. Traffic builds in the late afternoon and around prayer times, but the fixed fare doesn't move with it.",
          ],
        },
        {
          type: "locationContext",
          heading: "Why travellers head to Al-Balad first",
          paragraphs: [
            "Al-Balad is Jeddah's UNESCO World Heritage old town, its coral-stone merchant houses topped with carved wooden <em>roshan</em> balconies leaning over narrow lanes. Naseef House anchors an easy orientation walk, and the souqs near Bab Makkah come alive in the evening with spice sellers, tailors and tea stalls — arriving after dark, when the lanes glow with lamplight, is arguably the better introduction than a midday arrival into the heat.",
          ],
        },
        {
          type: "checklist",
          heading: "Practical checklist",
          items: [
            "Book the reverse leg (Al-Balad to Jeddah Airport) in advance if you're on a fixed departure",
            "Ask about a stop at the Corniche en route if arriving in daylight",
            "Vehicle sized to your group and luggage — mention child seats when booking",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Al-Balad to Jeddah Airport", href: "/jeddah/al-balad-to-jeddah-airport" },
            { label: "Jeddah Airport to Jeddah Corniche", href: "/jeddah/jeddah-airport-to-jeddah-corniche" },
            { label: "Jeddah to Makkah private transfer", href: "/routes/jeddah-to-makkah" },
          ],
        },
      ],
      faqs: [
        { question: "Where will I meet my driver at Jeddah Airport?", answer: "Inside the arrivals hall, holding a printed name sign, once you've collected luggage and cleared the terminal." },
        { question: "What happens if my flight is delayed?", answer: "We track your flight number, so the pickup shifts to your actual landing time with reasonable waiting included at no extra cost." },
        { question: "Can you drive into Al-Balad if my hotel is on a narrow lane?", answer: "The driver takes you as close as the historic streets allow and helps with bags for any short pedestrianised stretch — share your exact address when booking." },
        { question: "Is the price fixed or metered?", answer: "Fixed, agreed before you travel — no meter, no surge, and no separate luggage or waiting charge for a standard arrival." },
      ],
    },
  },
  {
    slug: "al-balad-to-jeddah-airport",
    citySlug: "jeddah",
    from: "Al-Balad",
    to: "Jeddah Airport",
    h1: "Al-Balad to Jeddah Airport Taxi",
    metaTitle: "Al-Balad to Jeddah Airport Taxi | Private Transfer",
    metaDescription:
      "Reliable Al-Balad to Jeddah Airport transfer with on-time pickup, luggage help from narrow old-town lanes and fixed prices. English-speaking drivers, 24/7.",
    distance: "~35 km",
    duration: "40-55 min",
    content: {
      category: "attraction",
      eyebrow: "Old-town departure planning",
      dek: "Leaving the historic quarter for a flight is mostly about timing the pickup right — here's how we plan it.",
      stats: [
        { label: "Distance", value: "~35 km" },
        { label: "Drive time", value: "40-55 min", emphasis: true },
        { label: "Suggested lead time", value: "~4 hrs before international" },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "How early to leave Al-Balad",
          stats: [
            { label: "International flights", value: "~4 hrs before departure" },
            { label: "Domestic flights", value: "~3 hrs before departure" },
          ],
          paragraphs: [
            "That guide already folds in the 40–55 minute drive plus a traffic buffer. Morning and late-afternoon peaks, weekends and pilgrimage seasons can stretch the drive toward the upper end, so we lean early rather than cutting it fine — at no extra cost, since the fare is fixed regardless of time on the road.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Luggage from Al-Balad's narrow lanes",
          paragraphs: [
            "Al-Balad's charm is partly its tight historic streets, which can make solo luggage-hauling awkward. Your driver meets you at the nearest vehicle-accessible point and helps carry bags the rest of the way — mention if your guesthouse sits deep in a pedestrianised lane so the pickup point is planned in advance.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "The route north to JED",
          paragraphs: [
            "The drive retraces the corridor between the old town and the airport on Jeddah's main highways. Your driver picks the most reliable line on the day — there's no meter to pad, so a longer route to dodge congestion never changes what you pay — and drops you at the correct terminal for your airline.",
          ],
        },
        {
          type: "checklist",
          heading: "Before you leave",
          items: [
            "Confirm your exact pickup point if your guesthouse is on a pedestrianised lane",
            "Share your airline and flight time so we can recommend the ideal pickup",
            "Evening departures after a final stroll through the souqs are no problem — we run 24/7",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to Al-Balad", href: "/jeddah/jeddah-airport-to-al-balad" },
            { label: "Jeddah Hotels to Al-Balad", href: "/jeddah/hotels-to-al-balad" },
          ],
        },
      ],
      faqs: [
        { question: "How early should I be picked up from Al-Balad for my flight?", answer: "Around four hours before an international departure and three for domestic, factoring in the drive plus a traffic buffer — we help set the exact time based on your airline." },
        { question: "Will the driver help with my luggage?", answer: "Yes — met at the nearest accessible point to your accommodation, with no separate luggage charge." },
        { question: "What if I want an evening departure after sightseeing?", answer: "That's common — we collect at your agreed time for a night flight, or hold a flexible slot if your plans are still loose." },
        { question: "Does peak-hour traffic change the price?", answer: "No — the fare is fixed regardless of traffic; we simply build in a sensible buffer at busy times." },
      ],
    },
  },
  {
    slug: "hotels-to-al-balad",
    citySlug: "jeddah",
    from: "Jeddah Hotels",
    to: "Al-Balad",
    h1: "Jeddah Hotels to Al-Balad Taxi",
    metaTitle: "Jeddah Hotels to Al-Balad Taxi | Old Town Transfer",
    metaDescription:
      "Explore historic Al-Balad with a private hotel transfer in Jeddah. Fixed prices, evening trips, optional waiting driver and door-to-door pickup, 24/7.",
    distance: "5-15 km",
    duration: "15-30 min",
    content: {
      category: "hotel",
      eyebrow: "Half-day old-town outing",
      dek: "A short hop from your lobby into Jeddah's coral-stone old town — with the option to keep the driver waiting for the whole visit.",
      stats: [
        { label: "Distance", value: "5-15 km" },
        { label: "Drive time", value: "15-30 min", emphasis: true },
        { label: "Best time", value: "Late afternoon / evening" },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Lobby pickup, any Jeddah hotel",
          paragraphs: [
            "Whether you're on the Corniche, downtown, or near the airport and northern districts, we collect from the hotel entrance at your chosen time — no parking search, no ride-hailing surge, no standing on a hot pavement.",
          ],
          points: [
            "One fixed round-trip price, whether one-way, return pickup, or a waiting driver",
            "Child seats on request for family outings",
          ],
        },
        {
          type: "timingPanel",
          heading: "Timing your visit",
          paragraphs: [
            "Midday in Al-Balad can be hot and quiet with many shops shuttered; the district comes alive in late afternoon and evening as the temperature drops and the souqs near Bab Makkah reopen. Booking a golden-hour pickup catches the coral facades in good light before the night market gets going, and the cooler months (roughly November–March) suit walking on foot best.",
          ],
        },
        {
          type: "locationContext",
          heading: "A typical half-day visit",
          paragraphs: [
            "A relaxed three-to-four-hour outing usually takes in Naseef House and the surrounding merchant homes, then a wander through the souqs for spices, textiles and a stop for tea. An optional waiting driver — staying nearby while you explore on foot — suits this pace better than a fixed return time.",
          ],
        },
        {
          type: "checklist",
          heading: "Booking checklist",
          items: [
            "Choose one-way, return pickup, or a waiting driver for the whole visit",
            "Share your hotel name so the driver can plan pickup precisely",
            "Weekend evenings are popular — worth booking ahead in high season",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to Al-Balad", href: "/jeddah/jeddah-airport-to-al-balad" },
            { label: "Hotels to Jeddah Corniche", href: "/jeddah/hotels-to-jeddah-corniche" },
            { label: "Hotels to King Fahd Fountain", href: "/jeddah/hotels-to-king-fahd-fountain" },
          ],
        },
      ],
      faqs: [
        { question: "Can the driver wait while I explore Al-Balad?", answer: "Yes — an optional waiting driver stays nearby and returns you to your hotel whenever you're ready, at one fixed round-trip price." },
        { question: "What is the best time of day to visit?", answer: "Late afternoon and evening, when the heat eases and the souqs reopen — midday is hot and many shops are closed." },
        { question: "My hotel is on the Corniche or in north Jeddah — can you still collect me?", answer: "Yes, from any hotel citywide; the drive from the north is a little longer but usually still under 30 minutes." },
        { question: "Is this one-way or round-trip?", answer: "Your choice — one-way drop-off, a return pickup at an agreed time, or a waiting driver for the whole visit, each quoted as a fixed price upfront." },
      ],
    },
  },

  // ── Corniche (attraction) ──────────────────────────────────────────────
  {
    slug: "jeddah-airport-to-jeddah-corniche",
    citySlug: "jeddah",
    from: "Jeddah Airport",
    to: "Jeddah Corniche",
    h1: "Jeddah Airport to Jeddah Corniche Private Transfer",
    metaTitle: "Jeddah Airport to Corniche Transfer | Fixed Price",
    metaDescription:
      "Private transfer from Jeddah Airport (JED) to the Jeddah Corniche. Meet and greet, fixed prices and door-to-door service, available 24/7.",
    distance: "~25 km",
    duration: "30-40 min",
    content: {
      category: "attraction",
      eyebrow: "Airport arrival to the waterfront",
      dek: "A calm first stop on the Red Sea after a long flight — sea breeze, open sky, and no meter running.",
      stats: [
        { label: "Distance", value: "~25 km" },
        { label: "Drive time", value: "30-40 min", emphasis: true },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "From JED arrivals to the shoreline",
          paragraphs: [
            "Meet and greet inside the terminal, flight tracking so a late landing simply shifts your pickup, then a 25 km run south through the city toward the coast. Because the Corniche runs nearly 30 km along the Red Sea, telling your driver the specific stretch or landmark you want saves a long walk with luggage at the other end.",
          ],
        },
        {
          type: "locationContext",
          heading: "What's along the Corniche",
          paragraphs: [
            "The King Fahd Fountain — a jet of seawater rising from the coast, visible from much of the waterfront and floodlit after dark — is the centrepiece most first-time visitors want to see. If arriving in the late afternoon, timing the drive to land near sunset gives you the daylight view before the fountain lights come on.",
          ],
        },
        {
          type: "checklist",
          heading: "Practical checklist",
          items: [
            "Tell the driver the specific cafe, beach or landmark you want along the ~30 km promenade",
            "Bring water and comfortable shoes — the walkways are exposed and spread out",
            "Ask about a stop at Al-Balad on the way if you'd like the old town too",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to King Fahd Fountain", href: "/jeddah/jeddah-airport-to-king-fahd-fountain" },
            { label: "Hotels to Jeddah Corniche", href: "/jeddah/hotels-to-jeddah-corniche" },
            { label: "Jeddah Airport to Al-Balad", href: "/jeddah/jeddah-airport-to-al-balad" },
          ],
        },
      ],
      faqs: [
        { question: "Where will the driver meet me at Jeddah Airport?", answer: "Inside the arrivals hall at King Abdulaziz International Airport, holding a name board." },
        { question: "Can you drop me at a specific part of the Corniche?", answer: "Yes — the promenade runs almost 30 km, so tell us the cafe, beach or landmark and we'll take you door to door there." },
        { question: "What happens if my flight is delayed?", answer: "We track your flight and adjust the pickup automatically, at no extra charge." },
        { question: "Are child seats available for a family arriving late?", answer: "Yes, on request — tell us the ages when you book." },
      ],
    },
  },
  {
    slug: "hotels-to-jeddah-corniche",
    citySlug: "jeddah",
    from: "Jeddah Hotels",
    to: "Jeddah Corniche",
    h1: "Jeddah Hotels to Jeddah Corniche Private Transfer",
    metaTitle: "Hotel to Jeddah Corniche Transfer | Fixed Price Car",
    metaDescription:
      "Private transfer from your Jeddah hotel to the Jeddah Corniche. Ideal for sunset outings and family evenings, with fixed prices and 24/7 service.",
    distance: "5-12 km",
    duration: "15-25 min",
    content: {
      category: "hotel",
      eyebrow: "Sunset & family evening outing",
      dek: "A spontaneous evening by the sea shouldn't be a chore — a short ride from your lobby to the promenade.",
      stats: [
        { label: "Distance", value: "5-12 km" },
        { label: "Drive time", value: "15-25 min", emphasis: true },
        { label: "Best time", value: "An hour before sunset" },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "Timing your evening",
          paragraphs: [
            "Midday sun and little shade make the open walkways tough going; most visitors save the Corniche for late afternoon and evening. Arriving roughly an hour before sunset gives you the changing sky over the water, then the illuminated King Fahd Fountain as the light fades.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Family-friendly, door to door",
          paragraphs: [
            "Wide paths, grassy areas and play spaces make the Corniche one of the more family-friendly spots in the city — getting there with young children is far easier from a hotel lobby than juggling ride-hailing apps at a busy hour.",
          ],
          points: [
            "Child seats fitted on request",
            "Larger vehicles available for bigger families or groups",
          ],
        },
        {
          type: "checklist",
          heading: "Booking checklist",
          items: [
            "Decide roughly which stretch of the ~30 km promenade suits your evening — quiet walk, family spot, or dining area",
            "Ask the driver to wait, or pre-book a return leg at a set time",
            "No surge for evening or weekend trips — the fare is fixed",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Hotels to King Fahd Fountain", href: "/jeddah/hotels-to-king-fahd-fountain" },
            { label: "Hotels to Al-Balad", href: "/jeddah/hotels-to-al-balad" },
            { label: "Jeddah Airport to Jeddah Corniche", href: "/jeddah/jeddah-airport-to-jeddah-corniche" },
          ],
        },
      ],
      faqs: [
        { question: "When is the best time to visit the Corniche?", answer: "Late afternoon and evening — arriving around sunset avoids the midday heat and catches the fountain lit after dark." },
        { question: "Can the driver wait and bring us back?", answer: "Yes, or we can pre-book a separate return leg at a set time — both quoted as a fixed price upfront." },
        { question: "How far is the Corniche from most hotels?", answer: "Most central and northern hotels are 5-12 km away, about 15-25 minutes." },
        { question: "Do you provide child seats?", answer: "Yes, on request — tell us the ages of your children when booking." },
      ],
    },
  },

  // ── King Fahd Fountain (attraction) ─────────────────────────────────────
  {
    slug: "jeddah-airport-to-king-fahd-fountain",
    citySlug: "jeddah",
    from: "Jeddah Airport",
    to: "King Fahd Fountain",
    h1: "Jeddah Airport to King Fahd Fountain Private Transfer",
    metaTitle: "Jeddah Airport to King Fahd Fountain Transfer",
    metaDescription:
      "Book a fixed-price private transfer from Jeddah Airport (JED) to King Fahd Fountain. Meet and greet, professional drivers, door-to-door service, 24/7.",
    distance: "~28 km",
    duration: "35-45 min",
    content: {
      category: "attraction",
      eyebrow: "Landing timed for the illuminated fountain",
      dek: "The world's tallest fountain, drawn straight from the Red Sea — best seen after dark, so timing the drive from JED matters.",
      stats: [
        { label: "Distance", value: "~28 km" },
        { label: "Drive time", value: "35-45 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this specific landmark",
          paragraphs: [
            "The King Fahd Fountain jets seawater — not freshwater — hundreds of metres above the Jeddah coastline, and has become the city's unofficial emblem. It runs by day, but the real spectacle is after dark, when floodlights turn the column brilliant white against the night sky.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Timing an evening arrival",
          paragraphs: [
            "If your flight lands in the late afternoon, the 35-45 minute drive lines up naturally with dusk. Landing earlier in the day? Check in at your hotel first and make the shorter hop out later — see our hotels-to-fountain transfer for that leg — or go straight to the seafront and let the driver time the arrival.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "From JED to the Corniche",
          paragraphs: [
            "Meet and greet inside arrivals, flight tracking, then the drive south and west toward the coast joining the Corniche road. Traffic builds in late afternoon and around evening prayer times, but the fixed fare doesn't move with it.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to Jeddah Corniche", href: "/jeddah/jeddah-airport-to-jeddah-corniche" },
            { label: "Hotels to King Fahd Fountain", href: "/jeddah/hotels-to-king-fahd-fountain" },
          ],
        },
      ],
      faqs: [
        { question: "Can I arrive in time to see the fountain lit up at night?", answer: "Yes — if your flight lands in the late afternoon, the drive lines up naturally with dusk; tell us your arrival time and we'll schedule accordingly." },
        { question: "How long is the transfer from JED?", answer: "Roughly 28 km, usually 35-45 minutes depending on traffic." },
        { question: "What if my flight is delayed?", answer: "We track your flight, so the pickup shifts and the fixed fare never changes." },
        { question: "Can you carry a family with luggage?", answer: "Yes — the vehicle is matched to your party and bags, with child seats available on request." },
      ],
    },
  },
  {
    slug: "hotels-to-king-fahd-fountain",
    citySlug: "jeddah",
    from: "Jeddah Hotels",
    to: "King Fahd Fountain",
    h1: "Jeddah Hotels to King Fahd Fountain Private Transfer",
    metaTitle: "Jeddah Hotels to King Fahd Fountain Transfer",
    metaDescription:
      "Private evening transfer from your Jeddah hotel to the King Fahd Fountain on the Corniche. Fixed price, door-to-door pickup, 24/7.",
    distance: "6-12 km",
    duration: "15-25 min",
    content: {
      category: "hotel",
      eyebrow: "Short evening hop to the fountain",
      dek: "A quick lobby-to-seafront ride timed so you arrive just as the fountain's floodlights come on.",
      stats: [
        { label: "Distance", value: "6-12 km" },
        { label: "Drive time", value: "15-25 min", emphasis: true },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "Best time to go",
          paragraphs: [
            "The fountain is at its most dramatic once the sun goes down, and evenings are simply more comfortable on this coast — the daytime heat eases and a Red Sea breeze picks up. If you're unsure when to set out, mention it when booking and the driver will suggest a pickup that lands you at the seafront as the lights come on.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Waiting time and the return leg",
          paragraphs: [
            "Rather than being stranded on the Corniche hoping to flag a ride home, arrange your return in advance: the driver can wait while you take in the fountain and walk the promenade, or we schedule a set return time.",
          ],
        },
        {
          type: "locationContext",
          heading: "Combining with a Corniche walk",
          paragraphs: [
            "The fountain is the highlight, but the waterfront around it — landscaped gardens, seating, cafes, public art — rewards an unhurried stroll. Many guests are dropped at one point, walk a stretch with the fountain in view, and are collected further along.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Hotels to Jeddah Corniche", href: "/jeddah/hotels-to-jeddah-corniche" },
            { label: "Jeddah Airport to King Fahd Fountain", href: "/jeddah/jeddah-airport-to-king-fahd-fountain" },
          ],
        },
      ],
      faqs: [
        { question: "How far is the fountain from Jeddah hotels?", answer: "Most hotels are 6-12 km away, about 15-25 minutes; seafront hotels are closer." },
        { question: "Can the driver wait and bring us back?", answer: "Yes — waiting or a set return time are both agreed upfront." },
        { question: "Can we combine the fountain with a Corniche walk?", answer: "Yes — tell us your plan and we'll arrange a pickup and drop-off that fits your route rather than one fixed spot." },
        { question: "Do you pick up late at night?", answer: "Yes, 24/7, with no night surcharge." },
      ],
    },
  },

  // ── Red Sea Mall (attraction) ────────────────────────────────────────────
  {
    slug: "jeddah-airport-to-red-sea-mall",
    citySlug: "jeddah",
    from: "Jeddah Airport",
    to: "Red Sea Mall",
    h1: "Jeddah Airport to Red Sea Mall Private Transfer",
    metaTitle: "Jeddah Airport to Red Sea Mall Transfer | Fixed Price",
    metaDescription:
      "Book a private transfer from Jeddah Airport (JED) to Red Sea Mall with fixed prices, meet and greet and a quick 15-20 minute ride.",
    distance: "~12 km",
    duration: "15-20 min",
    content: {
      category: "attraction",
      eyebrow: "Layover or first-stop shopping",
      dek: "One of the shortest airport runs in Jeddah — genuinely reachable on a layover, with a hold-the-car option for the return.",
      stats: [
        { label: "Distance", value: "~12 km" },
        { label: "Drive time", value: "15-20 min", emphasis: true },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "A quick first stop after landing",
          paragraphs: [
            "Meet and greet inside arrivals, flight tracking, then a short run through northern Jeddah's expressways. Because the trip is so brief, it fits almost any schedule — a first errand before checking into a hotel, or a layover break between connections.",
          ],
        },
        {
          type: "prepPanel",
          heading: "For layover visits",
          items: [
            "Free waiting time is built into the first part of any airport pickup",
            "Extended waiting (hold-the-car) can be agreed in advance at a fixed rate",
            "Tell us your connection time so we plan the timing around your onward flight",
          ],
        },
        {
          type: "locationContext",
          heading: "What's inside",
          paragraphs: [
            "Red Sea Mall is one of Jeddah's larger retail and entertainment destinations, spread across several floors with international fashion brands, a wide food court, supermarkets and pharmacies — a genuinely useful stop for anyone needing essentials or a proper meal after a long flight.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to Mall of Arabia", href: "/jeddah/jeddah-airport-to-mall-of-arabia" },
            { label: "Hotels to Red Sea Mall", href: "/jeddah/hotels-to-red-sea-mall" },
          ],
        },
      ],
      faqs: [
        { question: "How long does the drive take?", answer: "About 15-20 minutes over roughly 12 km — one of the shortest airport transfers in the city." },
        { question: "Can the driver wait while I shop during a layover?", answer: "Yes, a hold-the-car option is available, arranged in advance at a fixed rate." },
        { question: "Will the price change for a late-night landing?", answer: "No — fixed pricing with no night premium and no surge." },
        { question: "Do you have larger vehicles for families?", answer: "Yes — SUVs and vans with space for luggage and shopping, on request." },
      ],
    },
  },
  {
    slug: "hotels-to-red-sea-mall",
    citySlug: "jeddah",
    from: "Jeddah Hotels",
    to: "Red Sea Mall",
    h1: "Jeddah Hotels to Red Sea Mall Private Transfer",
    metaTitle: "Hotels to Red Sea Mall Jeddah | Private Car Transfer",
    metaDescription:
      "Private car from your Jeddah hotel to Red Sea Mall for a family shopping day. Fixed prices, door-to-door pickup and optional waiting time while you shop.",
    distance: "8-18 km",
    duration: "15-30 min",
    content: {
      category: "hotel",
      eyebrow: "Family shopping day",
      dek: "The getting-there part handled completely, so the only decision left is what to buy first.",
      stats: [
        { label: "Distance", value: "8-18 km" },
        { label: "Drive time", value: "15-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Door to door, driver waits while you shop",
          paragraphs: [
            "Collected from your hotel entrance and dropped at the mall's right entrance rather than a generic car-park edge. Keep the same driver waiting for the whole visit — agreed as a fixed package upfront, so there's no meter running and no pressure to rush — or arrange a set return time instead.",
          ],
          points: [
            "SUVs and vans for families, with child seats on request",
            "Return leg always included — never left stranded outside a busy mall with bags",
          ],
        },
        {
          type: "timingPanel",
          heading: "Evening trips",
          paragraphs: [
            "The mall is at its liveliest after sunset when the temperature drops — a private car suits these later outings well, since public transport thins out and street taxis get harder to find as crowds leave.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Hotels to Mall of Arabia", href: "/jeddah/hotels-to-mall-of-arabia" },
            { label: "Hotels to Jeddah Park", href: "/jeddah/hotels-to-jeddah-park" },
            { label: "Jeddah Airport to Red Sea Mall", href: "/jeddah/jeddah-airport-to-red-sea-mall" },
          ],
        },
      ],
      faqs: [
        { question: "Can the driver wait for me while I shop?", answer: "Yes — keep the same driver for the whole outing at a fixed, agreed price, or ask to be collected at a set time." },
        { question: "How long from my hotel to Red Sea Mall?", answer: "Most journeys take 15-30 minutes over 8-18 km, depending on your hotel's location." },
        { question: "Do you offer larger vehicles for families?", answer: "Yes — SUVs and vans with child seats on request." },
        { question: "Are evening or weekend trips more expensive?", answer: "No — fixed pricing with no surge, whatever the time or day." },
      ],
    },
  },

  // ── Mall of Arabia (attraction) ──────────────────────────────────────────
  {
    slug: "jeddah-airport-to-mall-of-arabia",
    citySlug: "jeddah",
    from: "Jeddah Airport",
    to: "Mall of Arabia",
    h1: "Jeddah Airport to Mall of Arabia Private Transfer",
    metaTitle: "Jeddah Airport to Mall of Arabia Transfer | Fixed Fare",
    metaDescription:
      "Book a fixed-price private transfer from Jeddah Airport to Mall of Arabia. Meet and greet, just a 10-15 minute drive, ideal for layover shopping. 24/7.",
    distance: "~8 km",
    duration: "10-15 min",
    content: {
      category: "attraction",
      eyebrow: "The closest mall to JED",
      dek: "At only ~8 km from the terminal, this is the shortest attraction transfer we run in Jeddah — genuinely doable on a modest layover.",
      stats: [
        { label: "Distance", value: "~8 km" },
        { label: "Drive time", value: "10-15 min", emphasis: true },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "Practically on the airport's doorstep",
          paragraphs: [
            "No long highway stretch, no complicated navigation — meet and greet inside arrivals, then a short hop with your luggage secured in the vehicle if you're only nipping in during a layover.",
          ],
        },
        {
          type: "prepPanel",
          heading: "For layover visits",
          items: [
            "Free waiting time plus a hold-the-car option for longer breaks",
            "Leave larger luggage with the driver rather than carrying it around the shops",
            "Share your connection time so timing protects your onward flight",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to Red Sea Mall", href: "/jeddah/jeddah-airport-to-red-sea-mall" },
            { label: "Hotels to Mall of Arabia", href: "/jeddah/hotels-to-mall-of-arabia" },
          ],
        },
      ],
      faqs: [
        { question: "How long does the transfer take?", answer: "About 10-15 minutes over roughly 8 km — the closest major mall to the airport." },
        { question: "Is it worth visiting during a layover?", answer: "Yes — being this close, even a short layover leaves time to shop or dine, with free waiting and a hold-the-car option." },
        { question: "Can I leave luggage in the car?", answer: "Yes, your driver can keep bags secure in the vehicle during a layover stop." },
        { question: "Is the price fixed?", answer: "Yes, agreed before you travel with no meter and no surge." },
      ],
    },
  },
  {
    slug: "hotels-to-mall-of-arabia",
    citySlug: "jeddah",
    from: "Jeddah Hotels",
    to: "Mall of Arabia",
    h1: "Jeddah Hotels to Mall of Arabia Transfer Service",
    metaTitle: "Jeddah Hotels to Mall of Arabia | Private Transfer",
    metaDescription:
      "Private hotel-to-mall transfers in Jeddah to Mall of Arabia. Fixed fares, door-to-door pickup, and a driver who waits for your family shopping day.",
    distance: "10-20 km",
    duration: "20-30 min",
    content: {
      category: "hotel",
      eyebrow: "Family day out",
      dek: "Nobody has to drive or find parking — everyone arrives together, and the same car takes the shopping home.",
      stats: [
        { label: "Distance", value: "10-20 km" },
        { label: "Drive time", value: "20-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Family-friendly, door to door",
          paragraphs: [
            "Collected from hotels citywide, from the Corniche to the business towers to the northern districts closest to the mall. Car seats for infants and toddlers arranged in advance on request.",
          ],
        },
        {
          type: "vehiclePlanning",
          heading: "Sized for shoppers",
          paragraphs: [
            "Boot space matters on the way home — tell us in advance if you expect a big shopping haul and we'll send an SUV or van to match, rather than a sedan that leaves purchases riding on laps.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Hotels to Red Sea Mall", href: "/jeddah/hotels-to-red-sea-mall" },
            { label: "Hotels to Jeddah Park", href: "/jeddah/hotels-to-jeddah-park" },
          ],
        },
      ],
      faqs: [
        { question: "How long from my hotel to Mall of Arabia?", answer: "Most trips cover 10-20 km and take 20-30 minutes." },
        { question: "Can the driver wait while we shop?", answer: "Yes — a return booking holds the car for your visit." },
        { question: "Do you provide child seats?", answer: "Yes, on request when booking." },
        { question: "Can you pick us up in the evening?", answer: "Yes, 24/7, with no surge for evening trips." },
      ],
    },
  },

  // ── Jeddah Park (attraction) ─────────────────────────────────────────────
  {
    slug: "jeddah-airport-to-jeddah-park",
    citySlug: "jeddah",
    from: "Jeddah Airport",
    to: "Jeddah Park",
    h1: "Jeddah Airport to Jeddah Park Private Transfer",
    metaTitle: "Jeddah Airport to Jeddah Park Transfer | Fixed Price",
    metaDescription:
      "Private transfer from Jeddah Airport (JED) to Jeddah Park with meet and greet, fixed prices and a 15-20 minute door-to-door drive. Book 24/7.",
    distance: "~12 km",
    duration: "15-20 min",
    content: {
      category: "attraction",
      eyebrow: "An easy soft landing",
      dek: "Both the airport and Jeddah Park sit in the north of the city, making this one of the gentler first stops after a long flight.",
      stats: [
        { label: "Distance", value: "~12 km" },
        { label: "Drive time", value: "15-20 min", emphasis: true },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "A short first stop",
          paragraphs: [
            "Meet and greet at arrivals, luggage help, then a straightforward run on the airport road connecting to the expressways past the newer commercial districts — no long crossing of the city.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Arriving with family",
          paragraphs: [
            "Families make up a large share of arrivals here. Tell us passenger and bag counts and we'll match an SUV or people carrier rather than squeezing everyone into a sedan; child seats and pram assistance are arranged on request.",
          ],
        },
        {
          type: "locationContext",
          heading: "What's at Jeddah Park",
          paragraphs: [
            "A modern shopping and entertainment destination combining retail, dining and family leisure areas — a gentle way to stretch your legs, eat something familiar and adjust to the local pace before a fuller itinerary.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Hotels to Jeddah Park", href: "/jeddah/hotels-to-jeddah-park" },
            { label: "Jeddah Airport to Red Sea Mall", href: "/jeddah/jeddah-airport-to-red-sea-mall" },
          ],
        },
      ],
      faqs: [
        { question: "How long does the transfer take?", answer: "Usually 15-20 minutes over about 12 km, a little longer during late-afternoon rush." },
        { question: "Can you carry a family with lots of luggage?", answer: "Yes — tell us your group size and bag count and we'll assign an SUV or people carrier as needed." },
        { question: "Is the price fixed even if my flight is delayed?", answer: "Yes — one fixed price agreed before travel, with the driver monitoring your flight." },
        { question: "Can I stop at my hotel first?", answer: "Yes, mention it when booking so the extra stop is reflected in your fixed price." },
      ],
    },
  },
  {
    slug: "hotels-to-jeddah-park",
    citySlug: "jeddah",
    from: "Jeddah Hotels",
    to: "Jeddah Park",
    h1: "Jeddah Hotels to Jeddah Park Private Transfer",
    metaTitle: "Jeddah Hotels to Jeddah Park Transfer | Fixed Fare Car",
    metaDescription:
      "Private hotel transfer to Jeddah Park with door-to-door pickup, fixed prices and a 20-30 minute drive. Ideal for a family day or evening out. Book 24/7.",
    distance: "10-18 km",
    duration: "20-30 min",
    content: {
      category: "hotel",
      eyebrow: "Day or evening family outing",
      dek: "Shopping, dining and family entertainment together in one modern space — reached without juggling ride-hailing apps.",
      stats: [
        { label: "Distance", value: "10-18 km" },
        { label: "Drive time", value: "20-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "Timing your visit",
          paragraphs: [
            "Mornings and early afternoons are generally quieter and easier with young children; evenings bring a livelier atmosphere as dining and entertainment areas fill up. Weekends are busiest — a weekday visit suits those wanting a calmer trip.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Waiting and the return leg",
          paragraphs: [
            "Book a wait-and-return, a set later pickup, or a separate one-way return — each quoted clearly upfront. This matters most for evening visits, when finding a ride outside a busy venue is hardest.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to Jeddah Park", href: "/jeddah/jeddah-airport-to-jeddah-park" },
            { label: "Hotels to Mall of Arabia", href: "/jeddah/hotels-to-mall-of-arabia" },
          ],
        },
      ],
      faqs: [
        { question: "How long is the drive from my hotel?", answer: "Most hotel pickups are 10-18 km away, about 20-30 minutes." },
        { question: "Can the driver wait and bring us back?", answer: "Yes — wait-and-return, a set later pickup, or a separate return, each agreed upfront." },
        { question: "Is this suitable for families?", answer: "Yes — vehicle matched to group size, with child seats on request." },
        { question: "When is the best time to visit?", answer: "Mornings/early afternoons are quieter; evenings are livelier. Weekends are busiest." },
      ],
    },
  },

  // ── Jeddah Islamic Port ──────────────────────────────────────────────────
  {
    slug: "jeddah-airport-to-jeddah-islamic-port",
    citySlug: "jeddah",
    from: "Jeddah Airport",
    to: "Jeddah Islamic Port",
    h1: "Jeddah Airport to Jeddah Islamic Port Transfer",
    metaTitle: "Jeddah Airport to Jeddah Islamic Port | Private Taxi",
    metaDescription:
      "Fixed-price Jeddah Airport to Jeddah Islamic Port transfer with meet and greet, flight tracking and luggage help. Door-to-door for cruise guests, 24/7.",
    distance: "~40 km",
    duration: "40-55 min",
    content: {
      category: "port",
      eyebrow: "Flying in to board",
      dek: "Timed to your embarkation or ship-join window, with real buffer built in for terminal formalities.",
      stats: [
        { label: "Distance", value: "~40 km" },
        { label: "Drive time", value: "40-55 min", emphasis: true },
      ],
      blocks: [
        {
          type: "prepPanel",
          heading: "Before you fly",
          items: [
            "Share your flight arrival time and embarkation/reporting time so we plan a buffer for port formalities",
            "For crew changes, share a berth number or terminal reference if your agent has provided one",
            "Group vehicles available for whole crews travelling together",
          ],
        },
        {
          type: "locationContext",
          heading: "Getting through the port itself",
          paragraphs: [
            "Jeddah Islamic Port is one of the busiest on the Red Sea, handling cargo, container and passenger traffic, so access roads and gates can be busy at peak hours. Your driver knows the terminal approaches and takes you as close to embarkation as port security permits.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Journey timing",
          paragraphs: [
            "The drive follows the main expressways south toward the coast — 40 km, usually 40-55 minutes, longer at peak hours or around prayer times.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Islamic Port to Jeddah Airport", href: "/jeddah/jeddah-islamic-port-to-jeddah-airport" },
            { label: "Hotels to Jeddah Islamic Port", href: "/jeddah/hotels-to-jeddah-islamic-port" },
          ],
        },
      ],
      faqs: [
        { question: "Can you get me there in time for embarkation?", answer: "Yes — tell us your flight arrival and boarding window and we plan a pickup with sensible buffer for traffic and port formalities." },
        { question: "Do you help with luggage and kit bags?", answer: "Yes — the vehicle is sized to your group and bags in advance, whether cruise cases or seafarer kit." },
        { question: "Can you transfer a whole ship's crew together?", answer: "Yes — a vehicle large enough for several people and their kit in one trip, usually simpler than separate cars." },
        { question: "Is the price fixed even if my flight is delayed?", answer: "Yes — we track your flight and reasonable waiting is included at no extra cost." },
      ],
    },
  },
  {
    slug: "jeddah-islamic-port-to-jeddah-airport",
    citySlug: "jeddah",
    from: "Jeddah Islamic Port",
    to: "Jeddah Airport",
    h1: "Jeddah Islamic Port to Jeddah Airport Transfer",
    metaTitle: "Jeddah Islamic Port to Jeddah Airport | Private Taxi",
    metaDescription:
      "Book a fixed-price Jeddah Islamic Port to Jeddah Airport transfer with on-time pickup from your terminal and luggage help. Cruise departures, 24/7.",
    distance: "~40 km",
    duration: "40-55 min",
    content: {
      category: "port",
      eyebrow: "Disembarking to catch a flight",
      dek: "The whole art of this leg is timing the pickup around a disembarkation that doesn't run on a fixed clock.",
      stats: [
        { label: "Distance", value: "~40 km" },
        { label: "Drive time", value: "40-55 min", emphasis: true },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "Timing the pickup around disembarkation",
          paragraphs: [
            "Cruise lines publish disembarkation groups and a clearance time; ships assign crew sign-off times, and immigration/customs can add unpredictability. Tell us your flight departure and expected clearance time and we work backward — as a guide, aim to reach the airport around three hours before an international departure, two for domestic.",
          ],
          note: "Reasonable waiting is included, so a slow disembarkation doesn't cost extra.",
        },
        {
          type: "pickupPlanning",
          heading: "Meeting you at the terminal",
          paragraphs: [
            "Your driver waits at an agreed point near your terminal. Because port access is controlled, sharing your ship name, terminal or berth reference in advance lets us position the car precisely rather than searching for you at the gate.",
          ],
        },
        {
          type: "scenarios",
          heading: "Who this is for",
          items: [
            { title: "Cruise passengers flying home", description: "The final step of the holiday — we handle the suitcases and get you to JED without hunting for a taxi on a busy turnaround morning." },
            { title: "Crew signing off", description: "Sign-off timing can slip; we stay flexible and the price stays fixed regardless of when you actually clear the gate." },
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to Jeddah Islamic Port", href: "/jeddah/jeddah-airport-to-jeddah-islamic-port" },
            { label: "Jeddah Islamic Port to Hotels", href: "/jeddah/jeddah-islamic-port-to-hotels" },
          ],
        },
      ],
      faqs: [
        { question: "What time will you pick me up from the port?", answer: "We work back from your flight — roughly three hours before an international departure, two for domestic, plus drive time and a buffer." },
        { question: "What if disembarkation is delayed?", answer: "We plan around your expected clearance rather than a rigid slot, and reasonable waiting is included." },
        { question: "Can you take a group of crew together?", answer: "Yes, vehicles large enough for several crew and their kit in one trip." },
        { question: "Can you offer an intercity trip instead of an airport drop?", answer: "Yes — routes like Jeddah to Madinah or Jeddah to Makkah at fixed prices, just tell us when booking." },
      ],
    },
  },
  {
    slug: "hotels-to-jeddah-islamic-port",
    citySlug: "jeddah",
    from: "Jeddah Hotels",
    to: "Jeddah Islamic Port",
    h1: "Jeddah Hotels to Jeddah Islamic Port Transfer",
    metaTitle: "Jeddah Hotels to Jeddah Islamic Port | Cruise Taxi",
    metaDescription:
      "Fixed-price transfer from your Jeddah hotel to Jeddah Islamic Port with a friendly driver, luggage help and no surge pricing. Ideal for cruise guests, 24/7.",
    distance: "10-25 km",
    duration: "20-40 min",
    content: {
      category: "hotel",
      eyebrow: "Local hop to embarkation",
      dek: "For guests who spent a night or two in the city before their cruise — a short, well-timed hotel-to-quay run.",
      stats: [
        { label: "Distance", value: "10-25 km" },
        { label: "Drive time", value: "20-40 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Lobby pickup, timed to checkout",
          paragraphs: [
            "Collected at your hotel entrance, timed around your checkout if needed so there's no awkward wait in reception with bags. Hotels near the north or Corniche are closer; the old town and southern areas take a little longer.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Planning your departure",
          paragraphs: [
            "Work back from your boarding or reporting time; central roads and the approaches near the port can slow at peak hours and prayer times, so we build in a sensible buffer rather than cutting it fine.",
          ],
        },
        {
          type: "scenarios",
          heading: "Who books this transfer",
          items: [
            { title: "Cruise guests who explored the city first", description: "A relaxed final morning after seeing Al-Balad and the waterfront, before the last easy step to the quay." },
            { title: "Seafarers, agents and business visitors", description: "Regular port workers value a punctual pickup and a driver familiar with gate procedures." },
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Islamic Port to Hotels", href: "/jeddah/jeddah-islamic-port-to-hotels" },
            { label: "Hotels to Jeddah Corniche", href: "/jeddah/hotels-to-jeddah-corniche" },
          ],
        },
      ],
      faqs: [
        { question: "How far is my hotel from the port?", answer: "Most city hotels are 10-25 km away, about 20-40 minutes; northern/Corniche hotels are closer." },
        { question: "When should I leave to reach the port on time?", answer: "We work back from your boarding time with a sensible traffic buffer — tell us your window and we'll suggest a pickup." },
        { question: "Will the driver collect me from the lobby?", answer: "Yes, and we can time it around checkout so you're not waiting with bags in reception." },
        { question: "Do you also transfer from the port back to a hotel?", answer: "Yes — see our Jeddah Islamic Port to Hotels transfer for the reverse leg." },
      ],
    },
  },
  {
    slug: "jeddah-islamic-port-to-hotels",
    citySlug: "jeddah",
    from: "Jeddah Islamic Port",
    to: "Jeddah Hotels",
    h1: "Jeddah Islamic Port to Jeddah Hotels Transfer",
    metaTitle: "Jeddah Islamic Port to Jeddah Hotels | Cruise Taxi",
    metaDescription:
      "Just arrived by sea? Book a fixed-price Jeddah Islamic Port to hotel transfer with meet and greet at the terminal and luggage help. Door-to-door, 24/7.",
    distance: "10-25 km",
    duration: "20-40 min",
    content: {
      category: "port",
      eyebrow: "Arriving by sea",
      dek: "Stepping off a ship into a waiting private car, with reasonable waiting built in for however long disembarkation takes.",
      stats: [
        { label: "Distance", value: "10-25 km" },
        { label: "Drive time", value: "20-40 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Meeting you after disembarkation",
          paragraphs: [
            "Clearing a ship involves immigration and, for many, collecting checked baggage, so the moment you reach the pickup point varies. Rather than a rigid slot, we track your arrival and stay flexible — share your ship name and expected clearance time so we can position the car precisely.",
          ],
        },
        {
          type: "scenarios",
          heading: "Who this serves",
          items: [
            { title: "Pilgrims arriving by sea", description: "Some travellers still arrive on the Red Sea before continuing to the holy cities — we take you first to rest, then arrange onward travel when you're ready." },
            { title: "Crew on shore leave", description: "A comfortable, air-conditioned change from the gangway and the gate before the next rotation." },
          ],
        },
        {
          type: "journeyOverview",
          heading: "Settling into the city",
          paragraphs: [
            "The drive into Jeddah may pass the waterfront, business districts, or head toward the historic old town depending on your hotel. If your room isn't ready yet, ask about a short detour rather than waiting idle in reception.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Hotels to Jeddah Islamic Port", href: "/jeddah/hotels-to-jeddah-islamic-port" },
            { label: "Jeddah Islamic Port to Jeddah Airport", href: "/jeddah/jeddah-islamic-port-to-jeddah-airport" },
          ],
        },
      ],
      faqs: [
        { question: "Where will the driver meet me after I leave the ship?", answer: "At an agreed point near the terminal — share your ship name and expected clearance time so we can position the car precisely." },
        { question: "What if disembarkation takes a long time?", answer: "We plan around your expected clearance and include reasonable waiting at no extra cost." },
        { question: "Can you take me on to Makkah or Madinah after I check in?", answer: "Yes — many arrivals rest at a hotel first, then continue via our Jeddah to Makkah or Jeddah to Madinah routes." },
        { question: "Do you operate for late-night arrivals by sea?", answer: "Yes, 24/7 — ships clear at all hours and your car is confirmed in advance." },
      ],
    },
  },

  // ── Sulaymaniyah Railway Station ────────────────────────────────────────
  {
    slug: "jeddah-airport-to-jeddah-sulaymaniyah-railway-station",
    citySlug: "jeddah",
    from: "Jeddah Airport",
    to: "Jeddah Sulaymaniyah Railway Station",
    h1: "Jeddah Airport to Sulaymaniyah Railway Station Transfer",
    metaTitle: "Jeddah Airport to Sulaymaniyah Railway Station Taxi",
    metaDescription:
      "Fixed-price private transfer from Jeddah Airport to Sulaymaniyah Haramain railway station, with meet and greet and flight tracking, 24/7.",
    distance: "~18 km",
    duration: "20-30 min",
    content: {
      category: "railway",
      eyebrow: "Connecting flight to Haramain train",
      dek: "A high-speed train that's already left can't be flagged down again — this first mile is built to be reliable.",
      stats: [
        { label: "Distance", value: "~18 km" },
        { label: "Drive time", value: "20-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this connection matters",
          paragraphs: [
            "The Haramain High Speed Railway links Jeddah with Makkah, Madinah and King Abdullah Economic City, and Sulaymaniyah station in the As Sulaymaniyah district is the central-city stop most airport arrivals aim for. Missing a fixed departure means waiting for the next service or rebooking — costs that quickly outweigh any saving from a cheaper ride to the station.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Timing your ride to catch the train",
          paragraphs: [
            "Allow a comfortable buffer for check-in, security screening and finding your platform. Tell us your intended train time and we'll suggest a pickup with sensible margin for both the drive and airport formalities beforehand.",
          ],
        },
        {
          type: "transportComparison",
          heading: "Onward from Sulaymaniyah: train vs. road",
          options: [
            { mode: "Haramain train", bestFor: "Fast intercity leg to Makkah/Madinah/KAEC", advantage: "Quick, comfortable, fixed schedule", limitation: "Fixed departures — a missed train means waiting or rebooking" },
            { mode: "Private car (direct route)", bestFor: "Door-to-door with flexible timing", advantage: "No connection risk, luggage stays with you throughout", limitation: "Longer than the train for the intercity leg itself" },
          ],
          note: "Both have their place — the right choice depends on your group, luggage and timing.",
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Sulaymaniyah Station to Jeddah Airport", href: "/jeddah/jeddah-sulaymaniyah-railway-station-to-jeddah-airport" },
            { label: "Jeddah to Makkah private transfer", href: "/routes/jeddah-to-makkah" },
          ],
        },
      ],
      faqs: [
        { question: "How far is Jeddah Airport from Sulaymaniyah station?", answer: "Roughly 18 km, usually a 20-30 minute drive depending on traffic." },
        { question: "Will the driver wait if my flight is delayed?", answer: "Yes — we track your flight number and adjust the pickup to your actual landing." },
        { question: "How much time should I leave before my train?", answer: "Allow a comfortable buffer for the drive plus rail check-in and security — tell us your train time and we'll suggest a pickup." },
        { question: "Can you take me straight to the platform for Makkah or Madinah?", answer: "We drop you at the station entrance so you can board the Haramain train onward." },
      ],
    },
  },
  {
    slug: "jeddah-sulaymaniyah-railway-station-to-jeddah-airport",
    citySlug: "jeddah",
    from: "Jeddah Sulaymaniyah Railway Station",
    to: "Jeddah Airport",
    h1: "Sulaymaniyah Railway Station to Jeddah Airport Transfer",
    metaTitle: "Sulaymaniyah Railway Station to Jeddah Airport Taxi",
    metaDescription:
      "Step off the Haramain train and go straight to your flight. Fixed-price private transfer to Jeddah Airport, door-to-door, 24/7.",
    distance: "~18 km",
    duration: "20-30 min",
    content: {
      category: "railway",
      eyebrow: "Train to flight connection",
      dek: "The train runs to a fixed timetable, so your Jeddah arrival time is predictable — the final mile to the airport should be too.",
      stats: [
        { label: "Distance", value: "~18 km" },
        { label: "Drive time", value: "20-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Meeting you at the station, not a vague kerb",
          paragraphs: [
            "Your driver meets you at an agreed point by the Sulaymaniyah station exit, helps with luggage and walks you to the car — no opening a ride app and hoping, after stepping off a train into an unfamiliar station.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Timed around your departure",
          paragraphs: [
            "We plan the pickup with a sensible margin for check-in, security and, on longer routes, passport control. Share your flight time and we'll recommend a departure from the station that leaves a comfortable buffer without a long wait at the gate.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "The drive to JED",
          paragraphs: [
            "The route runs north through the city toward the airport complex; morning and late-afternoon peaks and prayer times can lengthen it, so we build in margin rather than promising one fixed number. We drop you at the correct terminal for your airline.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Jeddah Airport to Sulaymaniyah Station", href: "/jeddah/jeddah-airport-to-jeddah-sulaymaniyah-railway-station" },
          ],
        },
      ],
      faqs: [
        { question: "How far is the station from Jeddah Airport?", answer: "Roughly 18 km, usually a 20-30 minute drive." },
        { question: "How is the pickup timed?", answer: "Around both your train arrival and your flight's check-in window, with a margin for security and passport control if needed." },
        { question: "Where does the driver meet me?", answer: "At an agreed point by the Sulaymaniyah station exit." },
        { question: "What's included?", answer: "A private air-conditioned vehicle, luggage help and door-to-door delivery to your departure terminal, at one fixed fare." },
      ],
    },
  },
  {
    slug: "hotels-to-jeddah-sulaymaniyah-railway-station",
    citySlug: "jeddah",
    from: "Jeddah Hotels",
    to: "Jeddah Sulaymaniyah Railway Station",
    h1: "Jeddah Hotels to Sulaymaniyah Railway Station Transfer",
    metaTitle: "Jeddah Hotels to Sulaymaniyah Station | Private Taxi",
    metaDescription:
      "Private transfer from your Jeddah hotel to Sulaymaniyah Haramain railway station. Fixed price, timed to your train, door-to-door, 24/7.",
    distance: "5-20 km",
    duration: "15-30 min",
    content: {
      category: "railway",
      eyebrow: "Hotel to Haramain train",
      dek: "A short, well-timed ride from your lobby to the platform for the Makkah, Madinah or KAEC train.",
      stats: [
        { label: "Distance", value: "5-20 km" },
        { label: "Drive time", value: "15-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "timingPanel",
          heading: "Timing your departure",
          paragraphs: [
            "Trains run to a fixed timetable, so unlike a flight there's no flexible check-in window — arriving with margin for station security and finding your platform matters more here than almost anywhere else on our network.",
          ],
        },
        {
          type: "pickupPlanning",
          heading: "Lobby pickup",
          paragraphs: [
            "Collected from your hotel entrance and dropped at the Sulaymaniyah station entrance, sized to your group and luggage — share your hotel and train time and we'll confirm a pickup with sensible buffer.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Sulaymaniyah Station to Hotels", href: "/jeddah/jeddah-sulaymaniyah-railway-station-to-hotels" },
            { label: "Jeddah Airport to Sulaymaniyah Station", href: "/jeddah/jeddah-airport-to-jeddah-sulaymaniyah-railway-station" },
          ],
        },
      ],
      faqs: [
        { question: "How far is my hotel from Sulaymaniyah station?", answer: "Typically 5-20 km depending on your hotel's location, about 15-30 minutes." },
        { question: "How early should I leave for my train?", answer: "Allow margin for station security and finding your platform — tell us your train time and we'll suggest a pickup." },
        { question: "Is the price fixed?", answer: "Yes, agreed before you travel with no meter." },
        { question: "Do you operate very early or late?", answer: "Yes, 24/7, matching the Haramain line's operating hours." },
      ],
    },
  },
  {
    slug: "jeddah-sulaymaniyah-railway-station-to-hotels",
    citySlug: "jeddah",
    from: "Jeddah Sulaymaniyah Railway Station",
    to: "Jeddah Hotels",
    h1: "Sulaymaniyah Railway Station to Jeddah Hotels Transfer",
    metaTitle: "Sulaymaniyah Station to Jeddah Hotels | Private Taxi",
    metaDescription:
      "Arriving in Jeddah by Haramain train? Private transfer from Sulaymaniyah station to your hotel, fixed price, door-to-door, 24/7.",
    distance: "5-20 km",
    duration: "15-30 min",
    content: {
      category: "railway",
      eyebrow: "Arriving by train",
      dek: "Step off the Haramain train and go straight to your hotel, without working out a taxi rank in an unfamiliar station.",
      stats: [
        { label: "Distance", value: "5-20 km" },
        { label: "Drive time", value: "15-30 min", emphasis: true },
      ],
      blocks: [
        {
          type: "pickupPlanning",
          heading: "Meeting you at the station exit",
          paragraphs: [
            "Your driver waits at an agreed point by the Sulaymaniyah exit with luggage help ready — useful if you've just come from Makkah, Madinah or KAEC and are unfamiliar with this end of the line.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "The drive to your hotel",
          paragraphs: [
            "Distance depends entirely on your hotel's location across the city — share the name when booking and we'll confirm the timing and a fixed price.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related transfers",
          links: [
            { label: "Hotels to Sulaymaniyah Station", href: "/jeddah/hotels-to-jeddah-sulaymaniyah-railway-station" },
          ],
        },
      ],
      faqs: [
        { question: "Where does the driver meet me?", answer: "At an agreed point by the Sulaymaniyah station exit." },
        { question: "How far to my hotel?", answer: "Depends on location — typically 5-20 km, 15-30 minutes." },
        { question: "Is luggage help included?", answer: "Yes, at no extra charge." },
        { question: "Is the price fixed?", answer: "Yes, agreed before you travel." },
      ],
    },
  },

  // ── Jeddah-based services (named offerings, not point-to-point) ─────────
  {
    slug: "private-chauffeur-service-jeddah",
    citySlug: "jeddah",
    from: "Jeddah",
    to: "Private Chauffeur Service",
    isPointToPoint: false,
    h1: "Private Chauffeur Service in Jeddah",
    metaTitle: "Private Chauffeur Service in Jeddah | Fixed Prices",
    metaDescription:
      "Book a private chauffeur in Jeddah with fixed prices, professional English-speaking drivers and 24/7 door-to-door service. No surge, ever.",
    content: {
      category: "service",
      eyebrow: "A dedicated driver for your stay",
      dek: "One chauffeur stays with you from your first pickup to your final drop-off, rather than a new car for every leg of the day.",
      stats: [
        { label: "Structure", value: "Full-day / multi-day" },
        { label: "Pricing", value: "Fixed, agreed in advance" },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "What a private chauffeur means here",
          paragraphs: [
            "In a spread-out coastal city where the airport, Al-Balad, the Corniche, business districts and malls sit far apart, having one driver who learns your plans and adapts removes an enormous amount of friction — you're never negotiating a fare or explaining a destination twice.",
          ],
        },
        {
          type: "scenarios",
          heading: "Who books this",
          items: [
            { title: "Families on Umrah or holiday", description: "The same trusted driver handles every leg, with child-friendly space and knowledge of where to stop — often paired with an onward Jeddah-to-Makkah transfer." },
            { title: "Independent travellers", description: "Set your own pace, change plans on a whim, and see the city with someone who knows where locals actually eat." },
          ],
        },
        {
          type: "bookingSteps",
          heading: "How it works",
          steps: [
            "Tell us your dates, group size and roughly what you want to cover",
            "We confirm a vehicle and one fixed all-in price",
            "Your chauffeur meets you at the agreed time and stays with you for the day or trip",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related services",
          links: [
            { label: "Hourly Chauffeur Hire", href: "/jeddah/hourly-chauffeur-jeddah" },
            { label: "Jeddah City Tour", href: "/jeddah/jeddah-city-tour" },
          ],
        },
      ],
      faqs: [
        { question: "What's the difference between this and a single transfer?", answer: "A private chauffeur stays with you across multiple legs of a day or trip, rather than one one-way ride." },
        { question: "Can we change plans during the day?", answer: "Yes — the vehicle and driver are yours for the booked period, so stops can shift on the day." },
        { question: "Is the price fixed for a full day?", answer: "Yes, agreed before travel with no surge regardless of traffic or hours used." },
        { question: "Do drivers speak English?", answer: "Yes, all our chauffeurs are professional and English-speaking." },
      ],
    },
  },
  {
    slug: "hourly-chauffeur-jeddah",
    citySlug: "jeddah",
    from: "Jeddah",
    to: "Hourly Chauffeur",
    isPointToPoint: false,
    h1: "Hourly Chauffeur Hire in Jeddah",
    metaTitle: "Hourly Chauffeur Hire Jeddah | From 3 Hours",
    metaDescription:
      "Hire a private chauffeur in Jeddah by the hour, from a 3-hour minimum. Ideal for multiple stops, meetings or errands. Fixed hourly rate, 24/7.",
    duration: "From 3 hours",
    content: {
      category: "service",
      eyebrow: "Pay by the hour, not the trip",
      dek: "For a morning of errands, several meetings, or a flexible half-day where the exact stops aren't fixed in advance.",
      stats: [
        { label: "Minimum booking", value: "3 hours", emphasis: true },
        { label: "Pricing", value: "Fixed hourly rate" },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "How hourly hire differs from a single transfer",
          paragraphs: [
            "Rather than booking a new one-way ride for each stop, the car and driver are yours for a block of time — useful when your schedule involves several destinations that aren't fully planned in advance, or waiting time between stops that would otherwise mean paying for separate trips.",
          ],
        },
        {
          type: "scenarios",
          heading: "Typical uses",
          items: [
            { title: "Multiple errands or appointments", description: "Keep the same driver across several stops in one morning or afternoon." },
            { title: "Flexible sightseeing", description: "Decide where to go as you go, without committing to a fixed itinerary in advance." },
          ],
        },
        {
          type: "checklist",
          heading: "Booking checklist",
          items: [
            "3-hour minimum booking",
            "Extra hours billed at the same fixed hourly rate — no surge",
            "Share your rough plan so we can match the right vehicle",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related services",
          links: [
            { label: "Private Chauffeur Service", href: "/jeddah/private-chauffeur-service-jeddah" },
            { label: "Jeddah City Tour", href: "/jeddah/jeddah-city-tour" },
          ],
        },
      ],
      faqs: [
        { question: "What's the minimum booking?", answer: "Three hours, billed at a fixed hourly rate." },
        { question: "Can I add stops as I go?", answer: "Yes — the car and driver are yours for the booked hours, so the plan can shift." },
        { question: "Does the rate change for extra hours?", answer: "No — extra hours are billed at the same fixed rate, with no surge." },
        { question: "Is this different from a point-to-point transfer?", answer: "Yes — a standard transfer is one route; hourly hire keeps the car with you across multiple stops." },
      ],
    },
  },
  {
    slug: "executive-car-service-jeddah",
    citySlug: "jeddah",
    from: "Jeddah",
    to: "Executive Car Service",
    isPointToPoint: false,
    h1: "Executive Car Service in Jeddah",
    metaTitle: "Executive Car Service in Jeddah | Premium Vehicles",
    metaDescription:
      "Premium executive car service in Jeddah for business travellers — discreet, professional drivers, fixed pricing, 24/7 availability.",
    content: {
      category: "service",
      eyebrow: "Premium vehicle class for business travel",
      dek: "A step up in vehicle and discretion for executives, delegations and travellers who value a quiet, professional ride.",
      stats: [
        { label: "Vehicle class", value: "Executive sedan / SUV" },
        { label: "Pricing", value: "Fixed, agreed in advance" },
      ],
      blocks: [
        {
          type: "vehiclePlanning",
          heading: "What sets this apart",
          paragraphs: [
            "The distinction from a standard transfer is the vehicle class and the driver's briefing — premium sedans and SUVs, quiet and discreet, suited to a delegation or a traveller moving between meetings who doesn't want a ride that reads as a tourist taxi.",
          ],
        },
        {
          type: "checklist",
          heading: "What's included",
          items: [
            "Premium vehicle class (executive sedan or SUV)",
            "Professional, English-speaking driver",
            "Fixed price agreed before travel — no surge",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related services",
          links: [
            { label: "Business Transfers in Jeddah", href: "/jeddah/business-transfers-jeddah" },
            { label: "Private Chauffeur Service", href: "/jeddah/private-chauffeur-service-jeddah" },
          ],
        },
      ],
      faqs: [
        { question: "How is this different from a standard transfer?", answer: "A premium vehicle class and a driver briefed for discreet, professional service, rather than a standard sedan." },
        { question: "Can I book this for a single airport pickup?", answer: "Yes — a one-off meet and greet in an executive vehicle, or the same standard across a full day, is both available." },
        { question: "Is pricing fixed?", answer: "Yes, agreed before travel." },
        { question: "Can this be booked for a delegation?", answer: "Yes — larger executive vehicles are available for groups travelling together." },
      ],
    },
  },
  {
    slug: "business-transfers-jeddah",
    citySlug: "jeddah",
    from: "Jeddah",
    to: "Business Transfers",
    isPointToPoint: false,
    h1: "Business Transfers in Jeddah",
    metaTitle: "Business Transfers Jeddah | Meeting-to-Meeting Car",
    metaDescription:
      "Point-to-point business transfers in Jeddah between meetings, hotels and the airport. Fixed pricing, punctual pickup, 24/7.",
    content: {
      category: "service",
      eyebrow: "Meeting-to-meeting, not a full-day hire",
      dek: "A single, punctual point-to-point ride between a hotel, office or meeting venue — booked as needed rather than for the whole day.",
      stats: [
        { label: "Structure", value: "Single point-to-point trip" },
        { label: "Pricing", value: "Fixed per trip" },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "How this differs from hourly or chauffeur hire",
          paragraphs: [
            "Business transfers are booked one trip at a time — a hotel to a specific office, one meeting venue to another — rather than keeping a car and driver on standby for a full day. That makes it the right fit when your schedule is fixed and you simply need a punctual, professional ride between two known points.",
          ],
        },
        {
          type: "checklist",
          heading: "What's included",
          items: [
            "Punctual pickup timed to your meeting schedule",
            "Professional vehicle, fixed price per trip",
            "Return legs can be booked in advance for a full day of meetings",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related services",
          links: [
            { label: "Executive Car Service", href: "/jeddah/executive-car-service-jeddah" },
            { label: "Hourly Chauffeur Hire", href: "/jeddah/hourly-chauffeur-jeddah" },
          ],
        },
      ],
      faqs: [
        { question: "How is this different from hourly hire?", answer: "This is one point-to-point trip per booking, not a car kept on standby for a block of hours." },
        { question: "Can I book several meeting-to-meeting trips in a day?", answer: "Yes — each is booked and confirmed individually, or ask about hourly hire if your schedule is still taking shape." },
        { question: "Is pricing fixed per trip?", answer: "Yes, agreed before travel." },
        { question: "Can you collect from the airport for a meeting?", answer: "Yes — treated as a standard point-to-point transfer with flight tracking." },
      ],
    },
  },
  {
    slug: "jeddah-city-tour",
    citySlug: "jeddah",
    from: "Jeddah",
    to: "Jeddah City Tour",
    isPointToPoint: false,
    h1: "Jeddah City Tour by Private Car",
    metaTitle: "Jeddah City Tour by Private Car | Fixed-Price Tours",
    metaDescription:
      "Explore Jeddah on a private car tour with an English-speaking driver. Al-Balad, the Corniche, King Fahd Fountain and more, at your own pace, fixed price.",
    duration: "Flexible",
    content: {
      category: "service",
      eyebrow: "A customisable sightseeing loop",
      dek: "Your car, your driver, your pace — built around the sights you actually want to see, with no fixed group schedule.",
      stats: [
        { label: "Duration", value: "Flexible", emphasis: true },
        { label: "Pricing", value: "Fixed for the time booked" },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "What you can include",
          paragraphs: [
            "Al-Balad's UNESCO-listed coral-stone old town is the natural centrepiece, with Naseef House and the surrounding souqs. The Jeddah Corniche frames the King Fahd Fountain — the tallest fountain in the world — and you can add the Al-Rahma floating mosque, the Al-Tayebat museum, or a stop at Red Sea Mall or Mall of Arabia. It's your itinerary to shape.",
          ],
        },
        {
          type: "journeyOverview",
          heading: "How the day is shaped",
          paragraphs: [
            "Cruise passengers and layover visitors often want an efficient loop that fits a tight window; longer-stay guests may prefer an unhurried afternoon with time for a meal. Tell the driver roughly what you hope to see and how long you have, and the route is mapped to avoid doubling back and dodge the worst traffic — changeable on the day if the light or heat suggests a different order.",
          ],
        },
        {
          type: "bookingSteps",
          heading: "How to book",
          steps: [
            "Share your dates, pickup point (hotel, port or airport) and must-see places",
            "We confirm a vehicle and one clear all-in price for the time booked",
            "Your driver arrives at the agreed time and stays with you throughout",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related tours",
          links: [
            { label: "Half-Day Jeddah Tour", href: "/jeddah/half-day-jeddah-tour" },
            { label: "Full-Day Jeddah Tour", href: "/jeddah/full-day-jeddah-tour" },
          ],
        },
      ],
      faqs: [
        { question: "Can I customise the route?", answer: "Yes — tell us the sights you want, such as Al-Balad, the Corniche or King Fahd Fountain, and the driver builds a sensible order, changeable on the day." },
        { question: "How long does a tour last?", answer: "Flexible — from a compact few-hour loop to a relaxed full day, matched to your time available." },
        { question: "Where does the tour start and finish?", answer: "Door-to-door pickup from your hotel, the cruise port or the airport, returning to the same or another address." },
        { question: "Is the price fixed?", answer: "Yes, agreed before the tour begins for the time booked — no meter, no surge." },
      ],
    },
  },
  {
    slug: "half-day-jeddah-tour",
    citySlug: "jeddah",
    from: "Jeddah",
    to: "Half-Day Jeddah Tour",
    isPointToPoint: false,
    h1: "Half-Day Jeddah Tour",
    metaTitle: "Half-Day Jeddah Tour | Fixed-Price Private Car",
    metaDescription:
      "A structured half-day private tour of Jeddah — Al-Balad old town and the Corniche waterfront in about 4 hours. Fixed price, English-speaking driver.",
    duration: "About 4 hours",
    content: {
      category: "service",
      eyebrow: "A structured ~4-hour loop",
      dek: "For guests with a limited window — a layover, or one free afternoon — covering the old town and waterfront without doubling back.",
      stats: [
        { label: "Duration", value: "About 4 hours", emphasis: true },
        { label: "Typical stops", value: "Al-Balad + Corniche" },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "A fixed-length version of the full city tour",
          paragraphs: [
            "Where the flexible Jeddah City Tour has no set duration, this is a pre-shaped roughly four-hour loop for guests who know their window in advance — typically Al-Balad's old town followed by a stretch of the Corniche waterfront, timed so neither stop feels rushed.",
          ],
        },
        {
          type: "checklist",
          heading: "What's included",
          items: [
            "Door-to-door pickup from hotel, port or airport",
            "Private, air-conditioned vehicle with English-speaking driver",
            "Fixed price for the ~4-hour booking",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related tours",
          links: [
            { label: "Full-Day Jeddah Tour", href: "/jeddah/full-day-jeddah-tour" },
            { label: "Jeddah City Tour", href: "/jeddah/jeddah-city-tour" },
          ],
        },
      ],
      faqs: [
        { question: "What does a half-day tour typically cover?", answer: "Usually Al-Balad's old town and a stretch of the Corniche, timed so neither stop is rushed." },
        { question: "How is this different from the flexible city tour?", answer: "This is a pre-shaped ~4-hour loop, useful when you know your window in advance rather than deciding as you go." },
        { question: "Can I request different stops?", answer: "Yes, within the ~4-hour window — tell us your priorities when booking." },
        { question: "Is the price fixed?", answer: "Yes, for the booked duration." },
      ],
    },
  },
  {
    slug: "full-day-jeddah-tour",
    citySlug: "jeddah",
    from: "Jeddah",
    to: "Full-Day Jeddah Tour",
    isPointToPoint: false,
    h1: "Full-Day Jeddah Tour",
    metaTitle: "Full-Day Jeddah Tour | Fixed-Price Private Car",
    metaDescription:
      "A comprehensive full-day private tour of Jeddah — old town, waterfront, shopping and more, in about 8 hours. Fixed price, English-speaking driver.",
    duration: "About 8 hours",
    content: {
      category: "service",
      eyebrow: "A comprehensive ~8-hour loop",
      dek: "For guests with a full day to spend — old town, waterfront, shopping and a proper meal, without the heat wearing you down between stops.",
      stats: [
        { label: "Duration", value: "About 8 hours", emphasis: true },
        { label: "Typical stops", value: "Old town, Corniche, shopping" },
      ],
      blocks: [
        {
          type: "journeyOverview",
          heading: "A fuller version of the city tour",
          paragraphs: [
            "Where the half-day tour covers the essentials, a full day allows time for Al-Balad, an extended Corniche visit around the King Fahd Fountain, a stop at one of the malls, and a proper lunch — with breaks in an air-conditioned cabin between each stop rather than pushing through the heat on foot.",
          ],
        },
        {
          type: "vehiclePlanning",
          heading: "Best suited for",
          paragraphs: [
            "Families, older travellers, or anyone visiting in the peak summer months who'd rather see more, more comfortably, than ration sightseeing to survive the heat.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related tours",
          links: [
            { label: "Half-Day Jeddah Tour", href: "/jeddah/half-day-jeddah-tour" },
            { label: "Jeddah City Tour", href: "/jeddah/jeddah-city-tour" },
          ],
        },
      ],
      faqs: [
        { question: "What does a full-day tour typically include?", answer: "Al-Balad, the Corniche and King Fahd Fountain, a shopping stop, and time for a proper meal, spread comfortably across the day." },
        { question: "Is this better for families than the half-day tour?", answer: "It can be — more time means fewer rushed stops and breaks in an air-conditioned car between landmarks." },
        { question: "Can the order change on the day?", answer: "Yes — if the light or heat suggests a different order, the driver adapts." },
        { question: "Is the price fixed?", answer: "Yes, for the ~8-hour booking, agreed in advance." },
      ],
    },
  },
];
