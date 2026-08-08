-- ============================================================
-- Saudi Private Transfers — Tier 1 Blog Seeds (English)
-- Run in Supabase SQL editor to insert all 6 Tier-1 blog posts.
-- Status = 'published' so they appear immediately on /blog.
-- ============================================================

INSERT INTO public.blogs (
  title, slug, excerpt, content,
  meta_title, meta_description,
  focus_keyword, secondary_keywords,
  author, category, tags, faqs,
  reading_time, status, published_at
) VALUES

-- ============================================================
-- BLOG 1: Makkah to Madinah Private Taxi Guide
-- ============================================================
(
  'Makkah to Madinah by Private Taxi: Journey Guide, Travel Time & Tips',
  'makkah-to-madinah-private-taxi-guide',
  'Planning the Makkah to Madinah leg of your Umrah or Hajj trip? This guide covers travel time, vehicle options, rest stops, and how to book a private transfer door-to-door.',
  '<h2 id="overview">The Makkah to Madinah Journey: What to Expect</h2>
<p>The road between the two holy cities covers approximately 430–450 km, depending on your exact pickup and drop-off points. By private taxi, the journey typically takes <strong>4.5 to 5 hours</strong> under normal traffic conditions — rising to 6–7 hours during Hajj season peak days when highway checkpoints operate at full capacity.</p>
<p>Unlike shared shuttles or buses, a private transfer runs on <em>your</em> schedule. You leave when you are ready, stop when you want to pray or rest, and arrive directly at your hotel — no station transfers, no luggage handling between vehicles.</p>

<h2 id="options">Private Taxi vs Train vs Bus: A Practical Comparison</h2>
<table>
<thead><tr><th>Option</th><th>Travel Time</th><th>Door-to-Door?</th><th>Best For</th></tr></thead>
<tbody>
<tr><td>Private taxi</td><td>4.5–5 h</td><td>Yes</td><td>Families, groups, elderly, heavy luggage</td></tr>
<tr><td>Haramain train</td><td>~2 h (train only)</td><td>No — station transfers needed</td><td>Solo travelers, light luggage</td></tr>
<tr><td>SAPTCO bus</td><td>5–7 h</td><td>No — bus stations</td><td>Budget travelers</td></tr>
</tbody>
</table>
<p>The Haramain High-Speed Railway is fast, but stations are not at your hotel. You need a taxi from your hotel in Makkah to the Makkah train station, then another taxi from Madinah train station to your hotel. For a family of four with luggage and children, the total journey time and effort can exceed a direct private transfer.</p>

<h2 id="rest-stops">Rest Stops and Prayer Times on the Route</h2>
<p>The Makkah–Madinah highway (Route 40 / King Fahd Road) has several well-maintained rest areas with fuel, prayer facilities, and basic food. Professional private transfer drivers are familiar with the route and will suggest a rest stop if the journey coincides with prayer time. You can request stops in advance when booking — simply mention it in your WhatsApp message.</p>

<h2 id="timing">Best Time to Travel</h2>
<p>Avoid Friday between Jumu''ah time (around 12:30 PM) and 4 PM — traffic near Makkah is at its weekly peak. The smoothest windows are early morning (before 8 AM) or evening after 8 PM. During Ramadan and Hajj, all journey times extend; <strong>book at least 48 hours in advance</strong> during these periods.</p>

<h2 id="vehicles">Which Vehicle for Your Group?</h2>
<ul>
<li><strong>Economy / Comfort Sedan</strong> — 1 to 3 passengers, up to 2 large bags. Good for couples or solo travelers.</li>
<li><strong>SUV</strong> — 1 to 5 passengers with generous luggage space. Most popular for small families.</li>
<li><strong>Van (e.g. Toyota Hiace)</strong> — Up to 9 passengers. Ideal for extended families or groups traveling together.</li>
<li><strong>Minibus</strong> — 10 to 18 passengers. Perfect for Umrah groups or pilgrim committees.</li>
</ul>

<h2 id="booking">How to Book Your Transfer</h2>
<p>To get a fixed price for your Makkah to Madinah private taxi, share the following details via WhatsApp or through our quote form:</p>
<ol>
<li>Pickup address in Makkah (hotel name is fine)</li>
<li>Drop-off address in Madinah</li>
<li>Date and preferred departure time</li>
<li>Number of passengers and bags</li>
<li>Vehicle preference (sedan, SUV, van)</li>
</ol>
<p>You will receive a fixed, all-inclusive price — no meter running, no surprise tolls added at the end.</p>',
  'Makkah to Madinah Private Taxi: Journey Guide & Travel Time',
  'Plan your Makkah to Madinah private taxi journey. Compare travel time (4.5h by car vs 2h by train), rest stops, vehicle types, and how to book a door-to-door transfer.',
  'makkah to madinah private taxi',
  ARRAY['makkah madinah transfer', 'makkah to madinah taxi', 'umrah intercity transport', 'makkah madinah journey'],
  'Saudi Private Transfers',
  'Intercity Transfers',
  ARRAY['makkah', 'madinah', 'intercity', 'umrah', 'private taxi', 'hajj'],
  '[
    {"question":"How long does Makkah to Madinah take by private taxi?","answer":"Under normal conditions, 4.5 to 5 hours. During Hajj season, allow 6 to 7 hours due to highway checkpoints."},
    {"question":"Is private taxi better than the Haramain train for families?","answer":"For families with children and multiple bags, a private taxi is usually more practical. The train requires two additional taxi rides (hotel to Makkah station, and Madinah station to hotel), adding 45–90 minutes and extra luggage handling."},
    {"question":"Can the driver stop for prayers and rest?","answer":"Yes. Professional drivers are familiar with prayer times and rest areas on the route. Request stops in advance when you book."},
    {"question":"Do I pay extra for luggage?","answer":"No. The fixed price includes all passengers and their luggage. Just mention your bag count when requesting a quote so the right vehicle size is assigned."},
    {"question":"How far in advance should I book during Umrah season?","answer":"At least 24–48 hours is recommended. During peak Ramadan and Hajj periods, book several days ahead to ensure vehicle availability."}
  ]'::jsonb,
  6, 'published', now()
),

-- ============================================================
-- BLOG 2: Jeddah Airport Arrival — Non-Muslim / Tourist / Expat
-- ============================================================
(
  'Arriving at Jeddah Airport as a Tourist or Expat: Transfer Guide to Jeddah City',
  'jeddah-airport-arrival-guide-tourist-expat',
  'Not arriving for Umrah? This guide covers how tourists, business travelers, and expats get from King Abdulaziz International Airport (JED) to Jeddah city, hotels, and beyond.',
  '<h2 id="overview">King Abdulaziz International Airport: Quick Orientation</h2>
<p>King Abdulaziz International Airport (IATA: JED) handles over 40 million passengers a year, including a large share of international tourists, business travelers, and expatriates arriving in Jeddah — not just pilgrims heading to Makkah. If you are in this group, the process at the airport is straightforward, but knowing what to expect saves time.</p>
<p>The airport has three main terminals: <strong>Terminal 1</strong> (North — most international and domestic flights), the <strong>Hajj Terminal</strong> (exclusive to Hajj season pilgrims), and the <strong>Domestic Terminal</strong>. Most non-pilgrims will use Terminal 1.</p>

<h2 id="exit">After You Land: Step by Step</h2>
<ol>
<li><strong>Immigration:</strong> Follow signs to passport control. Saudi e-Visa holders present their passport — the visa is linked digitally. Queue times vary; allow 20–40 minutes at peak hours.</li>
<li><strong>Baggage claim:</strong> Screens in the arrivals hall show which carousel your flight uses.</li>
<li><strong>Customs:</strong> Standard red/green channels. Declare anything over the duty-free limit.</li>
<li><strong>Arrivals hall:</strong> After customs, you enter the public arrivals hall where pre-booked drivers hold name signs. This is also where ride-hailing apps and public taxis are accessible.</li>
</ol>

<h2 id="options">Your Transfer Options from JED Airport to Jeddah City</h2>
<h3>Pre-Booked Private Transfer (Recommended)</h3>
<p>A driver meets you in the arrivals hall with your name on a sign, assists with luggage, and takes you directly to your hotel or address in Jeddah. Fixed price agreed before you land. No negotiation at the curb.</p>
<ul>
<li>Typical cost to central Jeddah hotels: <strong>80–150 SAR</strong> depending on distance and vehicle type</li>
<li>Journey time: 15–35 minutes depending on traffic and destination</li>
</ul>
<h3>Ride-Hailing Apps (Uber / Careem)</h3>
<p>Both Uber and Careem operate in Jeddah. Download and set up an account before landing. App-based rides are metered and reliable, but prices can surge during peak arrival times. You will need a working local or international SIM with data.</p>
<h3>Airport White Taxis</h3>
<p>Official white taxis operate from designated bays outside arrivals. Agree on a price before departure or confirm the driver uses the meter. This option is less common now that ride-hailing is widespread.</p>

<h2 id="destinations">Common Destinations from JED Airport</h2>
<ul>
<li><strong>Al-Balad (historic district)</strong> — ~25 km, 20–30 min</li>
<li><strong>Jeddah Corniche hotels</strong> — ~30 km, 25–40 min</li>
<li><strong>Jeddah business district (Al Andalus)</strong> — ~35 km, 30–45 min</li>
<li><strong>Obhur / North Jeddah resorts</strong> — ~50 km, 40–55 min</li>
</ul>

<h2 id="tips">Practical Tips for First-Time Visitors</h2>
<ul>
<li>Get a local SIM card at the airport arrivals hall (STC, Mobily, or Zain kiosks) — essential for WhatsApp, maps, and apps.</li>
<li>Jeddah is hot. Air-conditioned vehicles are standard, but dress appropriately for the climate, especially in summer (June–September).</li>
<li>Most hotels accept credit cards, but carry some Saudi Riyals (SAR) for tipping and small purchases.</li>
<li>If you have a connecting flight to Riyadh or another city, check whether you need to collect and re-check bags at JED.</li>
</ul>',
  'Jeddah Airport Arrival Guide for Tourists & Expats (JED → Jeddah City)',
  'Arriving at Jeddah Airport as a tourist or expat? Learn how to reach Jeddah city from JED — private transfers, Uber, taxis, costs, journey time, and practical tips.',
  'jeddah airport to jeddah city transfer',
  ARRAY['king abdulaziz airport transfer', 'jeddah airport tourist guide', 'jed airport taxi', 'jeddah arrival guide'],
  'Saudi Private Transfers',
  'Airport Transfers',
  ARRAY['jeddah airport', 'jeddah city', 'tourist', 'expat', 'airport transfer', 'JED'],
  '[
    {"question":"Is there a pre-booked transfer from Jeddah Airport to Jeddah hotels?","answer":"Yes. You can book a private transfer that meets you in the arrivals hall with a name sign and takes you directly to your Jeddah hotel at a fixed, pre-agreed price."},
    {"question":"How long does it take from Jeddah Airport to the city center?","answer":"Typically 15–35 minutes depending on your destination and traffic. The Corniche area is around 30 km from the airport."},
    {"question":"Can I use Uber or Careem at Jeddah Airport?","answer":"Yes. Both Uber and Careem operate at JED airport. Set up your account and have data on your phone before landing. Prices may surge during peak hours."},
    {"question":"Do I need to declare anything at Jeddah customs?","answer":"Standard customs rules apply. Alcohol is strictly prohibited. Medications in large quantities or unusual items should be declared. For up-to-date rules, check the Saudi Customs Authority website before travel."},
    {"question":"Is Terminal 1 the same terminal for all international flights?","answer":"Most international and domestic non-Hajj flights use Terminal 1 (North Terminal). Hajj Terminal is used exclusively during the Hajj season for pilgrim flights."}
  ]'::jsonb,
  5, 'published', now()
),

-- ============================================================
-- BLOG 3: King Fahd Causeway — Private Taxi Crossing Guide
-- ============================================================
(
  'Crossing King Fahd Causeway by Private Taxi: What You Need to Know',
  'king-fahd-causeway-private-taxi-guide',
  'Can you cross King Fahd Causeway in a private hire car? Yes — and it is the most convenient option. This guide covers documents, border procedures, crossing time, and tips for a smooth trip.',
  '<h2 id="overview">King Fahd Causeway: The Basics</h2>
<p>King Fahd Causeway connects the Eastern Province of Saudi Arabia (Khobar / Dammam) with the Kingdom of Bahrain across a 25-kilometre bridge over the Arabian Gulf. It is one of the busiest land border crossings in the Gulf, handling millions of vehicle crossings each year.</p>
<p>A private taxi or transfer vehicle can absolutely cross the causeway — and for families, groups, or those with luggage, it is the most practical option available.</p>

<h2 id="documents">Documents You Need in the Car</h2>
<ul>
<li><strong>Your passport</strong> — must be valid for at least 6 months beyond your travel date</li>
<li><strong>Saudi visa or residency permit (Iqama)</strong> — GCC nationals use their national ID</li>
<li><strong>Bahrain entry authorisation</strong> — most nationalities with a Saudi visa get a free Bahrain eVisa on arrival; check the Bahrain eVisa portal before travel</li>
<li><strong>Vehicle registration</strong> — the driver handles this for company vehicles</li>
</ul>
<p>Keep physical copies of everything. Border officers scan documents directly.</p>

<h2 id="process">The Border Crossing Process Step by Step</h2>
<ol>
<li><strong>Saudi exit (Al-Aziziyah checkpoint):</strong> Your vehicle queues at the Saudi side. Passports are scanned and stamped for exit. For a private transfer, the driver handles the toll.</li>
<li><strong>Passport Island:</strong> Located midway on the bridge, this is where the main immigration facilities are. All passengers exit the vehicle and go through immigration booths — Saudi exit first, then Bahrain entry.</li>
<li><strong>Bahrain entry:</strong> Present your passport, pay the Bahrain visitor fee if applicable (check current rate on Bahrain eVisa portal), collect your entry stamp.</li>
<li><strong>Back to the vehicle:</strong> Re-join your driver and continue to Bahrain — Manama is approximately 35 km from the causeway exit.</li>
</ol>

<h2 id="time">How Long Does the Crossing Take?</h2>
<p>Under normal weekday conditions: <strong>45–90 minutes</strong> for the crossing itself. On Thursday evenings and Friday mornings (weekend travel from Saudi to Bahrain), queues can extend to 2–4 hours. Return traffic (Sunday evening, Bahrain to Saudi) can be similarly long. Plan accordingly.</p>

<h2 id="tips">Tips for a Smooth Crossing</h2>
<ul>
<li>Travel Tuesday to Wednesday for the shortest queues</li>
<li>Carry small Saudi Riyal or Bahraini Dinar cash for any incidental fees</li>
<li>Download the Bahrain eVisa app before departure to pre-register your visit</li>
<li>Confirm your driver is licensed for cross-border travel — our vehicles are</li>
<li>Keep snacks and water for children — crossings can be unpredictable in length</li>
</ul>

<h2 id="booking">Booking a Private Transfer Across the Causeway</h2>
<p>Our Dammam to Bahrain private transfer service covers the full journey: pickup from your address in the Eastern Province (Dammam, Khobar, or Dhahran), crossing the causeway together, and drop-off at your Manama hotel or address. The driver accompanies you through the entire process — you do not need to arrange a new taxi on the Bahrain side.</p>',
  'King Fahd Causeway by Private Taxi: Documents, Process & Tips',
  'Everything you need to know about crossing King Fahd Causeway in a private hire car — required documents, border crossing steps, wait times, and booking tips.',
  'king fahd causeway private taxi',
  ARRAY['dammam bahrain private transfer', 'causeway crossing by car', 'bahrain saudi border crossing', 'khobar to bahrain taxi guide'],
  'Saudi Private Transfers',
  'Border Transfers',
  ARRAY['king fahd causeway', 'bahrain', 'dammam', 'khobar', 'border crossing', 'private transfer'],
  '[
    {"question":"Can a private hire taxi cross King Fahd Causeway?","answer":"Yes. Private transfer vehicles can cross the causeway. The driver stays with you throughout — you do not need to get a new taxi on the Bahrain side."},
    {"question":"Do I need a Bahrain visa?","answer":"Most nationalities who hold a valid Saudi visa can obtain a free Bahrain eVisa on arrival. Check the official Bahrain eVisa portal (evisa.npra.bh) before travel to confirm your eligibility."},
    {"question":"How long does the causeway crossing take?","answer":"On a normal weekday, 45–90 minutes. On Thursday evenings and Friday mornings (peak Saudi–Bahrain weekend travel), expect 2–4 hours."},
    {"question":"Do all passengers need to exit the vehicle at immigration?","answer":"Yes. All passengers must exit the vehicle and pass through immigration booths at Passport Island, which is midway across the bridge."},
    {"question":"Is the causeway toll included in the transfer price?","answer":"Yes. Our Dammam to Bahrain transfer price is all-inclusive — toll, driver wait time during the crossing, and drop-off in Bahrain are all covered."}
  ]'::jsonb,
  5, 'published', now()
),

-- ============================================================
-- BLOG 4: Riyadh Airport Terminal Guide
-- ============================================================
(
  'Riyadh Airport (RUH) Transfer Guide: Terminals, Taxis & Getting to the City',
  'riyadh-airport-transfer-guide',
  'King Khalid International Airport has 5 terminals across a huge campus. This guide tells you which terminal your flight uses, where to find your private transfer, and the fastest way into central Riyadh.',
  '<h2 id="overview">King Khalid International Airport: Key Facts</h2>
<p>King Khalid International Airport (IATA: RUH) is Saudi Arabia''s largest airport by area, serving as the main international and domestic gateway to Riyadh. With five terminals spread across a large campus, knowing which one applies to your flight saves significant time and avoids unnecessary shuttles.</p>

<h2 id="terminals">Which Terminal Is Your Flight?</h2>
<table>
<thead><tr><th>Terminal</th><th>Primary Use</th><th>Airlines (examples)</th></tr></thead>
<tbody>
<tr><td>Terminal 1</td><td>International (North)</td><td>Saudia, Gulf carriers</td></tr>
<tr><td>Terminal 2</td><td>International (North)</td><td>International long-haul</td></tr>
<tr><td>Terminal 3</td><td>International (South)</td><td>Budget and regional carriers</td></tr>
<tr><td>Terminal 4</td><td>International (South)</td><td>Low-cost carriers</td></tr>
<tr><td>Terminal 5</td><td>Domestic only</td><td>Flynas, Flyadeal, Saudia domestic</td></tr>
</tbody>
</table>
<p><strong>Always confirm your terminal with your airline</strong> — Riyadh''s sprawling campus means inter-terminal travel can take 15–20 minutes by shuttle.</p>

<h2 id="options">Getting from RUH to Central Riyadh</h2>
<h3>Private Transfer</h3>
<p>The most reliable option. A driver meets you in your arrivals hall, assists with luggage, and takes you directly to your hotel or address in Riyadh. No app needed, no meter running — a fixed price agreed before you land.</p>
<ul>
<li>Journey to Riyadh city centre: <strong>25–40 minutes</strong> (35–45 km depending on destination)</li>
<li>Typical cost: <strong>100–200 SAR</strong> depending on vehicle and drop-off area</li>
</ul>
<h3>Uber / Careem</h3>
<p>Both apps work at RUH. Available immediately from the arrivals area with app-based pricing. Convenient for solo travelers with light luggage.</p>
<h3>Riyadh Metro (planned connections)</h3>
<p>Riyadh Metro Line 1 (Blue) currently connects parts of the city but does not serve the airport terminal directly. Ground-level buses connect some metro stations to the airport — check RCRC for updates as the network expands.</p>

<h2 id="popular-destinations">Key Riyadh Destinations and Journey Times</h2>
<ul>
<li><strong>Al Olaya (business district)</strong> — 30 km, ~30 min</li>
<li><strong>Al Faisaliyah / Kingdom Tower area</strong> — 33 km, ~35 min</li>
<li><strong>Diriyah / Al-Ula district</strong> — 40 km, ~45 min</li>
<li><strong>King Abdullah Financial District (KAFD)</strong> — 28 km, ~28 min</li>
</ul>

<h2 id="tips">Tips for Arrivals at King Khalid Airport</h2>
<ul>
<li>Riyadh traffic is heaviest between 3 PM and 7 PM — schedule arrivals outside this window if possible</li>
<li>The airport is far from the city; allow extra time for connections</li>
<li>Saudi SIM cards (STC, Mobily, Zain) are available inside arrivals</li>
<li>Pre-booking a private transfer means your driver tracks your flight — if it''s delayed, pickup adjusts automatically</li>
</ul>',
  'Riyadh Airport (RUH) Transfer Guide: Terminals, Costs & City Journey Times',
  'Which terminal at Riyadh Airport? How far is it from the city? This guide covers King Khalid Airport terminals, private transfers, Uber, journey times, and costs to central Riyadh.',
  'riyadh airport transfer',
  ARRAY['king khalid airport taxi', 'RUH airport guide', 'riyadh airport to city centre', 'riyadh airport terminal guide'],
  'Saudi Private Transfers',
  'Airport Transfers',
  ARRAY['riyadh airport', 'RUH', 'king khalid airport', 'riyadh transfer', 'terminal guide'],
  '[
    {"question":"How many terminals does Riyadh Airport have?","answer":"King Khalid International Airport has five terminals. Terminals 1–4 serve international flights and Terminal 5 serves domestic flights. Always confirm your terminal with your airline before travel."},
    {"question":"How far is Riyadh Airport from the city centre?","answer":"Approximately 35–45 km depending on your destination in Riyadh. Journey time is typically 25–40 minutes under normal traffic conditions."},
    {"question":"Can I use Uber or Careem at Riyadh Airport?","answer":"Yes, both Uber and Careem operate at King Khalid International Airport. The app-based pickup point is outside arrivals."},
    {"question":"Does a pre-booked private transfer track my flight?","answer":"Yes. When you book a private airport transfer, the driver monitors your flight number in real time. If your flight is delayed or arrives early, pickup time adjusts automatically at no extra charge."},
    {"question":"Is the metro connected to Riyadh Airport?","answer":"As of 2025, Riyadh Metro does not connect directly to all airport terminals. Ground-level shuttle buses link some parts of the network to the airport. Check the RCRC website for the latest updates."}
  ]'::jsonb,
  5, 'published', now()
),

-- ============================================================
-- BLOG 5: Complete Umrah Transport Guide 2025
-- ============================================================
(
  'Complete Umrah Transport Guide: Getting Around Makkah & Madinah (2025)',
  'complete-umrah-transport-guide-2025',
  'Everything a first-time or returning Umrah pilgrim needs to know about private transport — from airport pickup to Ziyarat tours, hotel-to-hotel transfers, and the return journey home.',
  '<h2 id="overview">Planning Umrah Transport: The Big Picture</h2>
<p>Umrah involves at least four distinct transport legs that require planning: airport arrival, city transfers in Makkah, the Makkah–Madinah journey, and the return to the airport. Each leg has different requirements depending on your group size, luggage, and physical needs. This guide covers each one.</p>

<h2 id="jeddah-airport">Step 1 — Jeddah Airport to Makkah</h2>
<p>Most international Umrah pilgrims arrive at King Abdulaziz International Airport (JED) in Jeddah. Makkah is approximately 85 km from the airport, a journey of 1 hour to 1 hour 30 minutes by road depending on traffic.</p>
<p>Non-Muslims cannot enter Makkah, so any transfer to the holy city must be booked with a licensed operator whose drivers are Muslim and cleared for entry. Our <a href="/umrah-taxi-service">Umrah taxi service</a> includes this as standard.</p>
<p>Key options for the <a href="/airport-transfer/jeddah-airport">Jeddah airport to Makkah transfer</a>:</p>
<ul>
<li><strong>Pre-booked private transfer</strong> — meet and greet in arrivals, fixed price, direct to your Makkah hotel</li>
<li><strong>Shared shuttle</strong> — cheaper but slower, with multiple stops at different hotels</li>
<li><strong>Haramain Train</strong> — requires taxi from airport to station, then another taxi in Makkah</li>
</ul>
<p>For families and groups, a private transfer is almost always the most practical choice.</p>

<h2 id="makkah">Step 2 — Getting Around Makkah</h2>
<p>The area immediately around Masjid al-Haram has very restricted vehicle access. Your hotel''s proximity to the Haram determines how much in-city transport you need.</p>
<ul>
<li><strong>Hotels within walking distance of the Haram</strong> — little or no transport needed for Tawaf and Sa''i</li>
<li><strong>Hotels further from the Haram</strong> — the Makkah Metro (Mashaaer Railway) and local taxis cover the main routes</li>
<li><strong>Ziyarat tours</strong> — a full or half-day tour of the holy sites around Makkah (Cave of Hira, Jabal Thawr, Mina, Muzdalifah) is best done by <a href="/ziyarat-taxi-service">private Ziyarat taxi</a></li>
</ul>

<h2 id="madinah-transfer">Step 3 — Makkah to Madinah</h2>
<p>The intercity leg from Makkah to Madinah (around 430–450 km) is typically done either by private taxi (4.5–5 hours, door-to-door) or by the Haramain High-Speed Railway (about 2 hours train time, but with additional taxi legs at both ends). See our detailed <a href="/blog/makkah-to-madinah-private-taxi-guide">Makkah to Madinah journey guide</a> for a full comparison.</p>

<h2 id="madinah">Step 4 — Getting Around Madinah</h2>
<p>Madinah is easier to navigate than Makkah. Many hotels are within walking distance of Masjid al-Nabawi. For Ziyarat sites in Madinah (Masjid Quba, Al-Baqi, Masjid al-Qiblatayn, the date farms of Quba), a half-day private tour covers everything comfortably. Book through our <a href="/ziyarat-taxi-service">Madinah Ziyarat service</a>.</p>

<h2 id="return">Step 5 — Return to the Airport</h2>
<p>Most pilgrims depart from either Jeddah Airport (JED) or <a href="/airport-transfer/madinah-airport">Madinah''s Prince Mohammad bin Abdulaziz International Airport (MED)</a>. If your return flight is from Madinah, no intercity transfer is needed — just a straightforward airport pickup from your hotel. If flying out of Jeddah, you will need the Madinah–Jeddah route or Makkah–Jeddah route covered.</p>

<h2 id="vehicles">Choosing the Right Vehicle</h2>
<table>
<thead><tr><th>Group Size</th><th>Recommended Vehicle</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>1–3 people</td><td>Economy / Comfort sedan</td><td>Up to 2 large bags</td></tr>
<tr><td>4–5 people</td><td>SUV</td><td>Spacious boot for luggage</td></tr>
<tr><td>6–9 people</td><td>Van (Toyota Hiace / Hyundai Staria)</td><td>Group travel</td></tr>
<tr><td>10–18 people</td><td>Minibus</td><td>Umrah group / committee</td></tr>
</tbody>
</table>

<h2 id="booking">How to Book Umrah Transport</h2>
<p>Share your full itinerary — arrival date and flight number, hotel in Makkah, travel dates for each leg, Madinah hotel if applicable, and departure flight — via WhatsApp or our quote form. We provide a fixed price for each leg, confirmed before you travel.</p>',
  'Complete Umrah Transport Guide 2025: Airports, Transfers & Ziyarat',
  'Full Umrah transport guide for 2025. Covers Jeddah airport pickup, city transfers in Makkah, Makkah to Madinah journey, Ziyarat tours, and return airport drop-off.',
  'umrah transport guide',
  ARRAY['umrah taxi service', 'umrah transfer 2025', 'getting around makkah madinah umrah', 'pilgrim transport saudi arabia'],
  'Saudi Private Transfers',
  'Umrah Transport',
  ARRAY['umrah', 'makkah', 'madinah', 'pilgrim transport', 'jeddah airport', 'ziyarat'],
  '[
    {"question":"Can non-Muslims book a transfer to Makkah?","answer":"Non-Muslims cannot enter Makkah city. Our drivers are Muslim and licensed for entry. Non-Muslim passengers cannot be transported into Makkah."},
    {"question":"How do I get from Jeddah Airport to my Makkah hotel?","answer":"A pre-booked private transfer is the most convenient option — your driver meets you in arrivals and takes you directly to your Makkah hotel. The journey is approximately 85 km and takes 1–1.5 hours."},
    {"question":"What is the best way to travel from Makkah to Madinah during Umrah?","answer":"For families and groups, a private taxi (4.5–5 hours, door-to-door) is the most practical. The Haramain train is faster (2 hours) but requires additional taxi legs at both ends."},
    {"question":"Do you offer Ziyarat tours in both Makkah and Madinah?","answer":"Yes. We offer private Ziyarat tours covering the holy sites in both cities. A typical half-day Makkah Ziyarat tour takes 3–4 hours; a Madinah Ziyarat tour takes 3–5 hours."},
    {"question":"Can I book all Umrah transport legs in one booking?","answer":"Yes. Share your full itinerary and we will quote each leg — airport pickup, Makkah–Madinah transfer, Ziyarat tours, and return airport drop-off — as a combined or separate package."}
  ]'::jsonb,
  8, 'published', now()
),

-- ============================================================
-- BLOG 6: Private Taxi vs Uber and Careem in Saudi Arabia
-- ============================================================
(
  'Private Taxi vs Uber and Careem in Saudi Arabia: Which Should You Book?',
  'private-taxi-vs-uber-careem-saudi-arabia',
  'Uber and Careem are available in Saudi Arabia — but is a pre-booked private transfer better for your trip? This honest comparison covers pricing, reliability, family travel, and pilgrim-specific needs.',
  '<h2 id="overview">The Options Available in Saudi Arabia</h2>
<p>Saudi Arabia has a well-developed ride-hailing market. Uber and Careem (which is now majority-owned by Uber) both operate across major Saudi cities including Riyadh, Jeddah, Makkah (limited zones), Madinah, Dammam, and Khobar. Pre-booked private transfer services also operate alongside these apps, offering a different model. Here is how they compare.</p>

<h2 id="comparison">Side-by-Side Comparison</h2>
<table>
<thead>
<tr><th>Feature</th><th>Uber / Careem</th><th>Pre-Booked Private Transfer</th></tr>
</thead>
<tbody>
<tr><td>Pricing</td><td>Dynamic (can surge at peak times)</td><td>Fixed — agreed before travel</td></tr>
<tr><td>Airport meet and greet</td><td>No — curbside pickup only</td><td>Yes — driver waits in arrivals hall</td></tr>
<tr><td>Flight tracking</td><td>No</td><td>Yes — driver adjusts if flight is delayed</td></tr>
<tr><td>Large luggage / groups</td><td>Limited vehicle selection</td><td>Vans and minibuses available</td></tr>
<tr><td>Intercity journeys</td><td>Not available for long routes</td><td>Available for all intercity routes</td></tr>
<tr><td>Cross-border travel</td><td>Not available</td><td>Available (Bahrain, Qatar routes)</td></tr>
<tr><td>Makkah access</td><td>Limited</td><td>Muslim drivers licensed for entry</td></tr>
<tr><td>Booking ahead</td><td>Usually on-demand</td><td>Book days or weeks in advance</td></tr>
<tr><td>Payment</td><td>App-based (card)</td><td>Card or cash — flexible</td></tr>
</tbody>
</table>

<h2 id="uber-when">When Uber or Careem Makes Sense</h2>
<ul>
<li>Short, ad-hoc rides within a city you are already familiar with</li>
<li>Solo travel with light luggage</li>
<li>When you have a working local SIM with data and the app pre-installed</li>
<li>When you do not need a name-sign greeting or luggage help</li>
</ul>

<h2 id="private-when">When a Pre-Booked Private Transfer Makes Sense</h2>
<ul>
<li><strong>Airport arrivals</strong> — a driver in the arrivals hall with your name, tracking your flight</li>
<li><strong>Umrah and Hajj trips</strong> — Makkah access requires a licensed Muslim driver; Uber has restrictions in holy city zones</li>
<li><strong>Family travel</strong> — when you have children, elderly relatives, or multiple large bags</li>
<li><strong>Intercity journeys</strong> — Uber and Careem do not operate long-haul routes like Jeddah to Makkah or Makkah to Madinah</li>
<li><strong>Cross-border trips</strong> — the causeway to Bahrain or Qatar border routes are only available with licensed operators</li>
<li><strong>Budget certainty</strong> — a fixed price means no unpleasant surprise when surge pricing kicks in during peak hours</li>
</ul>

<h2 id="pricing">A Note on Pricing</h2>
<p>Uber and Careem price their rides dynamically. During Ramadan, Hajj season, or any large event in Riyadh or Jeddah, prices can be 2–3x the standard rate. A pre-booked private transfer locks in a price at the time of booking — the price you see is the price you pay, even if traffic is bad or the season is peak.</p>

<h2 id="verdict">The Practical Verdict</h2>
<p>For in-city, spontaneous, light-luggage trips: Uber and Careem are perfectly good choices.</p>
<p>For airport pickups, family travel, Umrah transfers, intercity routes, and cross-border journeys: a pre-booked private transfer gives you fixed pricing, guaranteed vehicle size, a driver who tracks your flight, and none of the app-dependency that can fail at the worst moment.</p>',
  'Private Taxi vs Uber & Careem in Saudi Arabia: Honest Comparison',
  'Is Uber available in Saudi Arabia? Yes — but when is a pre-booked private transfer the better choice? Compare pricing, airport pickups, Umrah access, group travel, and intercity routes.',
  'private taxi vs uber saudi arabia',
  ARRAY['careem saudi arabia', 'uber saudi arabia', 'best taxi option saudi', 'pre-booked transfer vs ride hailing'],
  'Saudi Private Transfers',
  'Travel Guides',
  ARRAY['uber', 'careem', 'private transfer', 'comparison', 'saudi arabia', 'ride-hailing'],
  '[
    {"question":"Is Uber available in Saudi Arabia?","answer":"Yes. Uber operates in Riyadh, Jeddah, Dammam, Khobar, and other major Saudi cities. Careem (majority-owned by Uber) also operates across the country."},
    {"question":"Can Uber take you to Makkah?","answer":"Uber has restrictions within the Makkah holy area. Only vehicles with Muslim drivers licensed for entry can travel into Makkah. Pre-booked private Umrah transfer services are set up specifically for this."},
    {"question":"Does Uber or Careem do airport meet and greet?","answer":"No. App-based ride-hailing services do curbside pickup only — you need to find the car outside arrivals. A pre-booked private transfer driver meets you inside the arrivals hall with a name sign."},
    {"question":"Can I use Uber for Makkah to Madinah?","answer":"No. Uber and Careem do not operate intercity long-haul routes. You need a pre-booked private transfer or other intercity transport option for this journey."},
    {"question":"Are Uber prices fixed in Saudi Arabia?","answer":"No. Uber and Careem use dynamic pricing that rises during peak hours, Ramadan, Hajj season, and busy events. Pre-booked private transfers have a fixed price agreed before travel."}
  ]'::jsonb,
  6, 'published', now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  focus_keyword = EXCLUDED.focus_keyword,
  secondary_keywords = EXCLUDED.secondary_keywords,
  author = EXCLUDED.author,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  faqs = EXCLUDED.faqs,
  reading_time = EXCLUDED.reading_time,
  status = EXCLUDED.status,
  published_at = EXCLUDED.published_at,
  updated_at = now();
