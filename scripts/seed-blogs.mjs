// Seed the database with the initial SEO blog posts.
//
//   node scripts/seed-blogs.mjs
//
// Reads SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY from .env and upserts each post
// by slug (safe to re-run). Requires the `blogs` table from supabase/schema.sql.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnv() {
  try {
    const text = readFileSync(join(root, ".env"), "utf8");
    for (const line of text.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    }
  } catch {}
}

const readingTime = (html) => {
  const words = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(" ").length;
  return Math.max(1, Math.round(words / 200));
};

const CTA = () =>
  `<p>Ready to ride? <a href="/get-quote">Request a fixed-price quote</a> in under a minute, or explore our <a href="/services">full range of transfer services</a> across Saudi Arabia.</p>`;

// ── Posts ────────────────────────────────────────────────────────────────────

const posts = [
  {
    title: "Jeddah Airport to Makkah Taxi Service: Complete 2026 Guide",
    slug: "jeddah-airport-to-makkah-taxi-service-guide",
    category: "Airport Transfers",
    author: "Saudi Taxi Transfers",
    featuredImage: "/images/hero-airport.svg",
    featuredImageAlt: "Private taxi waiting at Jeddah airport for a Makkah transfer",
    focusKeyword: "Jeddah airport to Makkah taxi",
    secondaryKeywords: [
      "Jeddah to Makkah transfer",
      "King Abdulaziz airport taxi",
      "Makkah airport taxi price",
      "Umrah taxi from Jeddah",
    ],
    tags: ["Jeddah", "Makkah", "Airport Transfer", "Umrah"],
    metaTitle: "Jeddah Airport to Makkah Taxi Service: 2026 Guide",
    metaDescription:
      "Everything about booking a Jeddah airport to Makkah taxi in 2026 — travel time, fixed prices, vehicle options, meet-and-greet pickup, and Umrah tips.",
    excerpt:
      "How to book a reliable Jeddah airport to Makkah taxi in 2026 — travel time, fixed prices, vehicle choices, meet-and-greet pickup, and practical Umrah tips.",
    faqs: [
      {
        question: "How far is Jeddah airport from Makkah?",
        answer:
          "King Abdulaziz International Airport (JED) is about 90 km from Makkah. With a private taxi the journey usually takes 60–90 minutes depending on traffic, the time of day, and how busy the season is.",
      },
      {
        question: "How much does a taxi from Jeddah airport to Makkah cost?",
        answer:
          "Fares depend on vehicle type — a sedan is the most economical, while a GMC or Hiace suits families and groups with luggage. We quote a single fixed price up front with no meter and no surge, so the amount you are quoted is the amount you pay.",
      },
      {
        question: "Can I book a Jeddah to Makkah taxi in advance for Umrah?",
        answer:
          "Yes, and we strongly recommend it. Pre-booking guarantees a driver is waiting at arrivals with meet-and-greet, which matters most after a long flight or when you arrive in ihram and want to reach the Haram quickly.",
      },
      {
        question: "Will the driver wait if my flight is delayed?",
        answer:
          "Yes. We track your flight number, so if your arrival is early or late the driver adjusts automatically and will be waiting when you clear immigration and baggage.",
      },
      {
        question: "Which terminal does the driver meet me at?",
        answer:
          "We cover all terminals at Jeddah airport including Terminal 1 and the Hajj Terminal. Your driver meets you in the arrivals hall with a name sign after you collect your bags.",
      },
    ],
    content: `
<p>Arriving at King Abdulaziz International Airport for Umrah or a visit to the holy city? Booking a reliable <strong>Jeddah airport to Makkah taxi</strong> is the single most important part of a smooth arrival. After a long flight — often in a state of ihram — the last thing you want is to negotiate fares at the curb or wait in a long queue. This complete 2026 guide explains exactly how the transfer works: how long it takes, what it costs, which vehicle to choose, and how meet-and-greet pickup gets you to the Haram with the least possible stress.</p>
<p>Whether you are travelling solo, as a couple, or with an extended family and plenty of luggage, the right private transfer turns a potentially confusing arrival into a calm, door-to-door ride. Here is everything you need to know before you land.</p>

<h2 id="distance-and-time">Distance and Travel Time</h2>
<p>Makkah sits roughly <strong>90 kilometres</strong> east of Jeddah airport along a modern, well-maintained highway. In a private taxi the journey typically takes <strong>60 to 90 minutes</strong>. Travel time varies with a few predictable factors:</p>
<ul>
  <li><strong>Time of day</strong> — early mornings and late evenings are usually fastest.</li>
  <li><strong>Season</strong> — during Ramadan and the Hajj period, traffic near Makkah increases.</li>
  <li><strong>Prayer times</strong> — roads around the Haram get busier just before and after each prayer.</li>
</ul>
<p>A direct private car is almost always faster than shared transport because there are no extra stops to drop off other passengers.</p>

<h2 id="how-to-book">How to Book Your Transfer</h2>
<p>Booking ahead is the difference between a relaxed arrival and a stressful one. With a pre-arranged <a href="/routes/jeddah-to-makkah">Jeddah to Makkah transfer</a>, your driver is already assigned before you land. You simply share your flight details and pickup time, and we handle the rest. You can <a href="/get-quote">request a fixed-price quote</a> in under a minute.</p>
<h3>What you need to provide</h3>
<ul>
  <li>Flight number and arrival date</li>
  <li>Number of passengers and bags</li>
  <li>Your hotel or building name in Makkah</li>
  <li>Any special needs — child seat, wheelchair access, or extra stops</li>
</ul>

<h2 id="meet-and-greet">Meet-and-Greet Airport Pickup</h2>
<p>Meet-and-greet is what separates a private transfer from a regular taxi. Your driver tracks your flight, parks, and waits inside the <strong>arrivals hall with a name sign</strong>. There is no hunting for a car and no haggling. If your flight lands early or is delayed, the pickup time adjusts automatically — you are never charged extra for a delay outside your control. We cover all terminals, including the dedicated <a href="/airport-transfer/jeddah-airport">Jeddah airport</a> Hajj Terminal during peak season.</p>

<h2 id="vehicle-options">Choosing the Right Vehicle</h2>
<p>The best vehicle depends on your group size and luggage. Here is a quick comparison:</p>
<table>
  <thead>
    <tr><th>Vehicle</th><th>Best for</th><th>Passengers</th><th>Luggage</th></tr>
  </thead>
  <tbody>
    <tr><td>Sedan (Camry / Sonata)</td><td>Couples & solo travellers</td><td>1–3</td><td>2–3 bags</td></tr>
    <tr><td>GMC Yukon / SUV</td><td>Families wanting comfort</td><td>1–6</td><td>4–6 bags</td></tr>
    <tr><td>Hiace / Van</td><td>Large families & groups</td><td>7–11</td><td>10+ bags</td></tr>
    <tr><td>Coaster / Bus</td><td>Tour groups</td><td>12–30</td><td>Group luggage</td></tr>
  </tbody>
</table>
<p>If you are travelling for Umrah with family, a GMC or Hiace gives everyone room to stretch out after the flight, plus space for Zamzam water on the way back.</p>

<h2 id="fixed-pricing">Fixed Pricing with No Surprises</h2>
<p>One of the biggest worries for first-time visitors is being overcharged. We solve this with <strong>fixed, all-in pricing</strong>. You receive one quoted price before the trip — no meter, no surge pricing during busy seasons, and no surprise additions when you arrive. The fare covers the whole car, not per person, so splitting it across a family makes private transfer very economical compared with arranging multiple seats on shared transport.</p>

<h2 id="umrah-tips">Practical Tips for Umrah Travellers</h2>
<h3>Arriving in ihram</h3>
<p>Many pilgrims enter ihram before landing. A private car lets you go straight from the terminal to your hotel near the Haram without changing vehicles, which is far more comfortable in ihram garments.</p>
<h3>Zamzam and shopping stops</h3>
<p>Let your driver know in advance if you would like a brief stop for water or supplies. With a private transfer this is easy to arrange; with shared transport it is not.</p>
<h3>Returning to the airport</h3>
<p>Book your return in advance too. After completing your rites you will want a guaranteed, on-time pickup for the trip back to Jeddah — and we also serve onward <a href="/routes/makkah-to-madinah">Makkah to Madinah</a> journeys for pilgrims continuing their ziyarat.</p>

<h2 id="why-private">Why Choose a Private Transfer Over Alternatives</h2>
<ul>
  <li><strong>Reliability</strong> — a confirmed driver, not a gamble at the curb.</li>
  <li><strong>Comfort</strong> — clean, air-conditioned vehicles after a long flight.</li>
  <li><strong>Safety</strong> — professional, licensed drivers who know the route.</li>
  <li><strong>Value</strong> — a fixed price for the whole car, ideal for families.</li>
</ul>
<p>For pilgrims, that reliability is priceless: you arrive calm, on time, and ready to begin your Umrah. Explore our dedicated <a href="/umrah-taxi-service">Umrah taxi service</a> for end-to-end support across the holy cities.</p>

<h2 id="conclusion">Final Thoughts</h2>
<p>A <strong>Jeddah airport to Makkah taxi</strong> should be the easy part of your journey, and with a little planning it is. Book ahead, share your flight details, choose a vehicle that fits your group, and rely on meet-and-greet so a driver is waiting the moment you arrive. With fixed pricing and flight tracking, you remove the two biggest stresses of any arrival: cost and uncertainty. Start your trip the right way and let a professional handle the road while you focus on your pilgrimage.</p>
${CTA("Makkah")}
`,
  },

  {
    title: "Makkah to Madinah Private Taxi: Cost, Travel Time & Booking Guide",
    slug: "makkah-to-madinah-private-taxi-guide",
    category: "Intercity Transfers",
    author: "Saudi Taxi Transfers",
    featuredImage: "/images/hero-mosque.svg",
    featuredImageAlt: "Private taxi on the highway between Makkah and Madinah",
    focusKeyword: "Makkah to Madinah taxi",
    secondaryKeywords: [
      "Makkah to Madinah private car",
      "Makkah Madinah taxi fare",
      "Makkah to Madinah travel time",
      "Umrah intercity transfer",
    ],
    tags: ["Makkah", "Madinah", "Intercity", "Umrah"],
    metaTitle: "Makkah to Madinah Private Taxi: Cost & Booking Guide",
    metaDescription:
      "Plan your Makkah to Madinah taxi: travel time, fixed fares, vehicle options, route stops, and booking tips for a comfortable intercity transfer in 2026.",
    excerpt:
      "A complete guide to the Makkah to Madinah taxi: distance, travel time, fixed fares, the best vehicle for your group, and what to expect on the road.",
    faqs: [
      {
        question: "How long is the taxi journey from Makkah to Madinah?",
        answer:
          "The drive covers roughly 450 km and takes about 4.5 to 5.5 hours in a private car, including a short rest stop. Travel time depends on the route, weather, and how many breaks you take.",
      },
      {
        question: "How much does a Makkah to Madinah taxi cost?",
        answer:
          "We charge a single fixed price for the whole vehicle, so the cost is shared across your group rather than charged per seat. A sedan is most economical; a GMC or Hiace is better value for families travelling with luggage.",
      },
      {
        question: "Is it better to take a taxi or the Haramain train?",
        answer:
          "The Haramain high-speed train is fast, but a private taxi offers true door-to-door service — hotel to hotel, on your schedule, with luggage handled and stops on request. For families and pilgrims with bags, a private car is often more convenient.",
      },
      {
        question: "Can we stop along the way?",
        answer:
          "Yes. Tell your driver in advance and you can stop for prayer, food, or rest. Many travellers pause at a service area roughly halfway for a short break.",
      },
      {
        question: "Do you provide one-way and round-trip transfers?",
        answer:
          "Both. You can book a one-way Makkah to Madinah transfer, the return leg, or a full round trip. Booking the return in advance guarantees an on-time pickup for your journey back.",
      },
    ],
    content: `
<p>The journey between the two holy cities is one of the most travelled routes in Saudi Arabia, and for good reason. After completing Umrah in Makkah, most pilgrims continue to Madinah to visit the Prophet's Mosque. Choosing a comfortable <strong>Makkah to Madinah taxi</strong> makes this long intercity drive restful rather than tiring. This guide covers the distance, realistic travel time, fixed pricing, vehicle choices, and everything else you need to plan the trip with confidence in 2026.</p>
<p>A private car gives you something shared transport and even the train cannot: a true door-to-door ride on your own schedule, with your luggage handled and rest stops whenever you need them.</p>

<h2 id="distance-time">Distance and Travel Time</h2>
<p>Makkah and Madinah are about <strong>450 kilometres</strong> apart. In a private taxi the journey usually takes <strong>4.5 to 5.5 hours</strong>, including a short break. The modern highway is well maintained and direct, so the drive is smooth and predictable. Factors that affect timing include weather, the number of stops, and traffic near each city during peak prayer and pilgrimage periods.</p>

<h2 id="taxi-vs-train">Private Taxi vs the Haramain Train</h2>
<p>The Haramain high-speed railway is impressively fast, but it is not always the most convenient option for pilgrims:</p>
<table>
  <thead>
    <tr><th>Factor</th><th>Private Taxi</th><th>Haramain Train</th></tr>
  </thead>
  <tbody>
    <tr><td>Pickup</td><td>Your hotel door</td><td>Station only</td></tr>
    <tr><td>Schedule</td><td>Whenever you choose</td><td>Fixed departures</td></tr>
    <tr><td>Luggage</td><td>Loaded for you</td><td>Carry it yourself</td></tr>
    <tr><td>Stops</td><td>On request</td><td>None</td></tr>
    <tr><td>Best for</td><td>Families, groups, luggage</td><td>Solo, light travellers</td></tr>
  </tbody>
</table>
<p>If you are travelling as a family or carrying Zamzam and shopping, the door-to-door convenience of a <a href="/routes/makkah-to-madinah">Makkah to Madinah private car</a> is hard to beat.</p>

<h2 id="vehicles">Choosing Your Vehicle</h2>
<p>For a long intercity drive, comfort matters even more than on a short airport hop. Match the vehicle to your group:</p>
<ul>
  <li><strong>Sedan</strong> — ideal for couples and solo travellers who want an economical ride.</li>
  <li><strong>GMC / SUV</strong> — extra legroom and luggage space for families.</li>
  <li><strong>Hiace / Van</strong> — the comfortable choice for large families and groups.</li>
  <li><strong>Coaster / Bus</strong> — for organised tour groups travelling together.</li>
</ul>
<p>Every vehicle is air-conditioned and maintained for long-distance travel, so everyone arrives in Madinah rested.</p>

<h2 id="fixed-fares">Fixed Fares and What They Include</h2>
<p>We quote a <strong>single fixed price for the whole car</strong>, not per passenger. That means a family of five pays the same as a couple in the same vehicle — making private transfer excellent value. The fare is agreed before you travel, with no meter and no seasonal surge. <a href="/get-quote">Request your quote here</a> and you will know the exact cost up front.</p>

<h2 id="the-route">The Route and Rest Stops</h2>
<p>The highway between the cities passes through open desert landscapes with well-equipped service areas. Most drivers pause at a rest stop roughly halfway for prayer, refreshments, and a chance to stretch. If you prefer to push through or want an extra break, simply tell your driver — the schedule is yours.</p>
<h3>Travelling with children or elderly family</h3>
<p>Plan for an extra stop or two and bring water and snacks. A private car lets you set the pace, which is a real advantage on a five-hour journey with young or elderly passengers.</p>

<h2 id="booking-tips">Booking Tips for a Smooth Transfer</h2>
<ul>
  <li><strong>Book in advance</strong> — especially during Ramadan and Hajj when demand is high.</li>
  <li><strong>Share hotel names</strong> — exact pickup and drop-off addresses prevent delays.</li>
  <li><strong>Confirm the return</strong> — pre-book your <a href="/routes/madinah-to-makkah">Madinah to Makkah</a> leg if you plan to come back.</li>
  <li><strong>Ask about stops</strong> — mention any planned ziyarat or rest stops when booking.</li>
</ul>

<h2 id="continuing-journey">Continuing Your Ziyarat in Madinah</h2>
<p>Once in Madinah, many pilgrims want to visit historic sites such as Quba Mosque and Mount Uhud. We also offer dedicated <a href="/ziyarat-taxi-service">ziyarat taxi service</a> and city transfers within <a href="/taxi-service/madinah">Madinah</a>, so your transport is sorted from the moment you arrive until you depart.</p>

<h2 id="conclusion">Final Thoughts</h2>
<p>The <strong>Makkah to Madinah taxi</strong> is a long but rewarding drive, and the right private transfer makes it genuinely comfortable. With a fixed fare, a vehicle sized for your group, flexible rest stops, and door-to-door service, you can rest or reflect on the road while a professional driver handles the journey. Book ahead, share your hotel details, and arrive in the city of the Prophet relaxed and ready for your visit.</p>
${CTA("Madinah")}
`,
  },

  {
    title: "Riyadh Airport Transfer Guide for Business Travelers",
    slug: "riyadh-airport-transfer-business-travelers",
    category: "Airport Transfers",
    author: "Saudi Taxi Transfers",
    featuredImage: "/images/hero-airport.svg",
    featuredImageAlt: "Executive car for a Riyadh airport business transfer",
    focusKeyword: "Riyadh airport transfer",
    secondaryKeywords: [
      "Riyadh airport taxi",
      "King Khalid airport transfer",
      "business taxi Riyadh",
      "Riyadh corporate car service",
    ],
    tags: ["Riyadh", "Airport Transfer", "Business", "Corporate"],
    metaTitle: "Riyadh Airport Transfer Guide for Business Travelers",
    metaDescription:
      "A business traveler's guide to Riyadh airport transfers — King Khalid airport pickup, executive vehicles, fixed corporate pricing, and time-saving tips.",
    excerpt:
      "How business travelers can master Riyadh airport transfers: meet-and-greet at King Khalid, executive vehicles, fixed corporate pricing, and time-saving tips.",
    faqs: [
      {
        question: "How far is King Khalid International Airport from central Riyadh?",
        answer:
          "King Khalid International Airport (RUH) is about 35 km north of central Riyadh. A private transfer to the business district typically takes 35–50 minutes depending on traffic and the time of day.",
      },
      {
        question: "Can I arrange a corporate account for repeat transfers?",
        answer:
          "Yes. For frequent business travel we can set up recurring bookings and consolidated billing so your team always has a vehicle ready without arranging each trip individually.",
      },
      {
        question: "Do you offer executive vehicles for client meetings?",
        answer:
          "We provide premium sedans and GMC SUVs that are well suited to airport pickups, client meetings, and roadshows. Let us know your preference when you book.",
      },
      {
        question: "Will the driver track my flight if I am delayed?",
        answer:
          "Yes. We monitor your flight number and adjust the pickup time automatically, so a delayed or early arrival is never a problem and you are not charged for the wait.",
      },
      {
        question: "Can the driver take me between multiple meetings in a day?",
        answer:
          "Absolutely. Beyond the airport transfer, you can book hourly or full-day chauffeur service so the same driver and vehicle stay with you across meetings around the city.",
      },
    ],
    content: `
<p>For business travelers, time is the most valuable currency — and nothing protects it like a dependable <strong>Riyadh airport transfer</strong>. When you land at King Khalid International Airport with a packed schedule, you need a professional driver waiting, a clean executive vehicle, and a fixed price that fits your expense policy. This guide shows you how to make airport transfers in Riyadh seamless, so you can step off the plane and straight into your working day.</p>
<p>From meet-and-greet pickup to corporate billing and multi-stop chauffeur service, here is how seasoned professionals keep their Riyadh travel efficient and stress-free.</p>

<h2 id="airport-overview">King Khalid International Airport at a Glance</h2>
<p>King Khalid International Airport (RUH) lies roughly <strong>35 kilometres</strong> north of the city centre. Transfers into the main business districts — including the King Abdullah Financial District and Olaya — generally take <strong>35 to 50 minutes</strong>. The airport is large and modern, so a pre-arranged driver who knows exactly where to meet you saves valuable time. Learn more about our dedicated <a href="/airport-transfer/riyadh-airport">Riyadh airport transfer</a> service.</p>

<h2 id="why-pre-book">Why Business Travelers Pre-Book</h2>
<p>Hailing a taxi on arrival is a gamble no busy professional should take. Pre-booking delivers certainty:</p>
<ul>
  <li><strong>A driver waiting</strong> at arrivals with a name sign — no queues.</li>
  <li><strong>Flight tracking</strong> so delays never cost you your ride.</li>
  <li><strong>A fixed fare</strong> you can submit on expenses without surprises.</li>
  <li><strong>A professional, discreet driver</strong> who understands business etiquette.</li>
</ul>
<p>You can <a href="/get-quote">request a fixed quote</a> in seconds and have your transfer confirmed before you fly.</p>

<h2 id="vehicle-classes">Executive Vehicle Options</h2>
<p>The right vehicle reflects your itinerary and, when clients are involved, your company's image:</p>
<table>
  <thead>
    <tr><th>Vehicle</th><th>Ideal use</th><th>Capacity</th></tr>
  </thead>
  <tbody>
    <tr><td>Premium Sedan</td><td>Solo executive, airport runs</td><td>1–3 passengers</td></tr>
    <tr><td>GMC Yukon / SUV</td><td>Client pickups, comfort & presence</td><td>1–6 passengers</td></tr>
    <tr><td>Hiace / Van</td><td>Visiting teams & delegations</td><td>7–11 passengers</td></tr>
  </tbody>
</table>

<h2 id="corporate-accounts">Corporate Accounts and Billing</h2>
<p>If your company sends staff to Riyadh regularly, a corporate arrangement removes friction. We can set up recurring bookings, preferred vehicles, and consolidated invoicing so finance teams receive a single clear statement. This is ideal for roadshows, recurring client visits, and visiting delegations who need consistent, reliable transport every time.</p>

<h2 id="time-saving">Time-Saving Tips for Riyadh</h2>
<h3>Plan around peak traffic</h3>
<p>Riyadh's roads are busiest in the morning and late afternoon. Where possible, schedule airport runs and cross-city moves outside these windows, and let your driver suggest the fastest route.</p>
<h3>Book a full-day chauffeur for packed schedules</h3>
<p>When you have several meetings, an hourly or full-day booking keeps the same driver and vehicle with you all day — no waiting for a new car between stops. Our <a href="/taxi-service/riyadh">Riyadh taxi service</a> covers the whole city.</p>
<h3>Keep your details handy</h3>
<p>Share your hotel, meeting addresses, and flight number when booking so everything is loaded in advance and your driver can plan the day around you.</p>

<h2 id="beyond-airport">Beyond the Airport: City and Intercity Travel</h2>
<p>Business trips rarely stop at the airport. We also handle cross-city transfers, hotel pickups, and <a href="/intercity-transfers">intercity transfers</a> to destinations such as Dammam, Jeddah, and beyond — useful when your schedule spans more than one city. One trusted provider for every leg means one less thing to manage.</p>

<h2 id="professional-standards">Professional Standards You Can Rely On</h2>
<ul>
  <li><strong>Punctuality</strong> — drivers arrive early and track your flight.</li>
  <li><strong>Presentation</strong> — clean, well-maintained executive vehicles.</li>
  <li><strong>Discretion</strong> — quiet, professional drivers who respect your time and privacy.</li>
  <li><strong>Consistency</strong> — the same high standard on every booking.</li>
</ul>

<h2 id="conclusion">Final Thoughts</h2>
<p>A well-planned <strong>Riyadh airport transfer</strong> is a small decision with an outsized impact on your trip. By pre-booking, choosing an executive vehicle, and using corporate billing for repeat travel, you turn airport logistics into a non-event and protect your most valuable resource — time. Whether it is a single client pickup or a week of meetings across the city, a professional private transfer keeps your Riyadh business travel running exactly on schedule.</p>
${CTA("Riyadh")}
`,
  },

  {
    title: "Saudi Arabia Intercity Taxi Services: Everything You Need to Know",
    slug: "saudi-arabia-intercity-taxi-services-guide",
    category: "Intercity Transfers",
    author: "Saudi Taxi Transfers",
    featuredImage: "/images/hero-road.svg",
    featuredImageAlt: "Private car on a Saudi Arabia intercity highway at sunset",
    focusKeyword: "Saudi Arabia intercity taxi",
    secondaryKeywords: [
      "intercity transfers Saudi Arabia",
      "city to city taxi Saudi",
      "long distance taxi Saudi Arabia",
      "private intercity car Saudi",
    ],
    tags: ["Intercity", "Travel Guide", "Saudi Arabia"],
    metaTitle: "Saudi Arabia Intercity Taxi Services: Full 2026 Guide",
    metaDescription:
      "Your complete guide to intercity taxi services in Saudi Arabia — popular routes, travel times, fixed pricing, vehicle choices, and booking tips for long trips.",
    excerpt:
      "Popular routes, realistic travel times, fixed pricing, and the best vehicles for long-distance travel — a complete guide to intercity taxis in Saudi Arabia.",
    faqs: [
      {
        question: "What are the most popular intercity taxi routes in Saudi Arabia?",
        answer:
          "The busiest routes include Jeddah to Makkah, Makkah to Madinah, Riyadh to Dammam, and Jeddah to Taif. We cover these and virtually any other city-to-city route across the Kingdom.",
      },
      {
        question: "Is an intercity taxi cheaper than flying for a group?",
        answer:
          "For families and small groups it often is, because you pay one fixed price for the whole car instead of a ticket per person — and you avoid airport check-in, baggage fees, and transfers at both ends.",
      },
      {
        question: "How long can an intercity transfer take?",
        answer:
          "It depends on the route. Short hops like Jeddah to Makkah take about an hour, while longer journeys such as Riyadh to Jeddah can take 8–9 hours. We plan rest stops into longer trips.",
      },
      {
        question: "Can I book a one-way intercity trip?",
        answer:
          "Yes. You can book one-way, return, or multi-city itineraries. Many travelers book one-way for relocation or onward travel and a round trip for short visits.",
      },
      {
        question: "Are the vehicles suitable for long-distance comfort?",
        answer:
          "Yes. Our fleet is air-conditioned and maintained for long journeys, with options from economical sedans to spacious vans for groups carrying luggage.",
      },
    ],
    content: `
<p>Saudi Arabia is vast, and getting between its cities comfortably is essential for pilgrims, tourists, and residents alike. A private <strong>Saudi Arabia intercity taxi</strong> offers something neither buses nor domestic flights can match: door-to-door travel on your own schedule, with luggage handled and the freedom to stop whenever you wish. This guide explains how intercity transfers work, the most popular routes, realistic travel times, pricing, and how to choose the right vehicle for a long journey.</p>
<p>Whether you are travelling between the holy cities, heading to the coast, or relocating across the Kingdom, here is everything you need to plan a smooth long-distance trip.</p>

<h2 id="what-is-intercity">What Is an Intercity Taxi Service?</h2>
<p>An intercity taxi is a private car booked for a long-distance, city-to-city journey rather than a short local hop. Instead of sharing a bus or navigating airport logistics, you get a dedicated driver and vehicle that collect you from your door and take you directly to your destination. It is the most flexible way to travel between Saudi cities, and with fixed pricing it is also one of the most predictable. Browse our <a href="/intercity-transfers">intercity transfers</a> to see how it works.</p>

<h2 id="popular-routes">Popular Intercity Routes</h2>
<p>Some routes are travelled far more than others. Here are the most requested, with typical private-car travel times:</p>
<table>
  <thead>
    <tr><th>Route</th><th>Approx. distance</th><th>Typical time</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/routes/jeddah-to-makkah">Jeddah → Makkah</a></td><td>90 km</td><td>1–1.5 hours</td></tr>
    <tr><td><a href="/routes/makkah-to-madinah">Makkah → Madinah</a></td><td>450 km</td><td>4.5–5.5 hours</td></tr>
    <tr><td>Riyadh → Dammam</td><td>400 km</td><td>4–4.5 hours</td></tr>
    <tr><td>Jeddah → Taif</td><td>170 km</td><td>2–2.5 hours</td></tr>
    <tr><td>Riyadh → Jeddah</td><td>950 km</td><td>8–9 hours</td></tr>
  </tbody>
</table>
<p>We are not limited to these — virtually any city-to-city route across Saudi Arabia can be arranged.</p>

<h2 id="why-private">Why Choose a Private Intercity Taxi</h2>
<ul>
  <li><strong>Door-to-door</strong> — no stations, no transfers, no carrying bags.</li>
  <li><strong>Your schedule</strong> — leave when you want, not when a timetable dictates.</li>
  <li><strong>Comfort</strong> — a private, air-conditioned car for the whole journey.</li>
  <li><strong>Value for groups</strong> — one fixed fare for the car, not per person.</li>
  <li><strong>Flexibility</strong> — stop for prayer, food, or sightseeing on request.</li>
</ul>

<h2 id="pricing">How Intercity Pricing Works</h2>
<p>We quote a <strong>single fixed price for the whole vehicle</strong> based on the route and vehicle type. There is no meter and no seasonal surge — the price you are quoted is the price you pay. For a family or group, dividing one fare across several passengers often makes a private car cheaper than separate flight tickets once you factor in baggage fees and airport transfers at both ends. <a href="/get-quote">Get a fixed quote</a> for your route in under a minute.</p>

<h2 id="choosing-vehicle">Choosing the Right Vehicle for Long Trips</h2>
<h3>Couples and solo travellers</h3>
<p>A sedan is comfortable and economical for one to three passengers with light luggage.</p>
<h3>Families</h3>
<p>A GMC or SUV provides extra legroom and boot space — ideal for longer drives with children.</p>
<h3>Groups and tours</h3>
<p>A Hiace, van, or coaster keeps everyone together with plenty of room for group luggage.</p>

<h2 id="planning-tips">Tips for a Comfortable Long-Distance Trip</h2>
<ul>
  <li><strong>Book ahead</strong> for peak seasons like Ramadan and Hajj.</li>
  <li><strong>Plan rest stops</strong> on journeys over three hours.</li>
  <li><strong>Bring essentials</strong> — water, snacks, and chargers for the road.</li>
  <li><strong>Share exact addresses</strong> for precise pickup and drop-off.</li>
  <li><strong>Travel by day</strong> if you want to enjoy the scenery and arrive fresh.</li>
</ul>

<h2 id="connecting-services">Connecting With Airports and Cities</h2>
<p>Intercity travel often connects with an arrival or onward trip. We also provide <a href="/airport-transfers">airport transfers</a> and local <a href="/city-transfers">city transfers</a>, so you can chain an airport pickup, an intercity drive, and local rides into one seamless plan with a single trusted provider.</p>

<h2 id="conclusion">Final Thoughts</h2>
<p>A <strong>Saudi Arabia intercity taxi</strong> is the most comfortable, flexible way to travel between the Kingdom's cities. With fixed pricing, door-to-door service, and a vehicle sized for your group, long journeys become genuinely relaxing rather than something to endure. Plan your route, book ahead during busy seasons, and let a professional driver take care of the road while you enjoy the trip.</p>
${CTA("Saudi Arabia")}
`,
  },

  {
    title: "Top Tourist Destinations You Can Visit by Private Taxi in Saudi Arabia",
    slug: "top-tourist-destinations-private-taxi-saudi-arabia",
    category: "Saudi Arabia Tourism",
    author: "Saudi Taxi Transfers",
    featuredImage: "/images/hero-city.svg",
    featuredImageAlt: "Private taxi touring a scenic tourist destination in Saudi Arabia",
    focusKeyword: "tourist destinations Saudi Arabia by taxi",
    secondaryKeywords: [
      "Saudi Arabia tourism taxi",
      "private taxi tour Saudi Arabia",
      "places to visit Saudi Arabia",
      "AlUla taxi tour",
    ],
    tags: ["Tourism", "Travel Guide", "AlUla", "Taif", "Saudi Arabia"],
    metaTitle: "Top Saudi Arabia Tourist Destinations to Visit by Taxi",
    metaDescription:
      "Discover the top tourist destinations in Saudi Arabia you can explore by private taxi — AlUla, Taif, Edge of the World, the Red Sea coast, and more.",
    excerpt:
      "From AlUla to Taif and the Edge of the World — the best tourist destinations in Saudi Arabia you can comfortably explore with a private taxi and driver.",
    faqs: [
      {
        question: "Can I hire a private taxi for a full-day sightseeing tour?",
        answer:
          "Yes. You can book a car and driver by the hour or for a full day, which is ideal for sightseeing because the same driver stays with you between attractions and waits while you explore.",
      },
      {
        question: "Is a private taxi a good way to visit AlUla?",
        answer:
          "A private vehicle is one of the most flexible ways to explore AlUla and its surroundings, letting you move between sites at your own pace rather than following a fixed group schedule.",
      },
      {
        question: "Are private taxi tours suitable for families?",
        answer:
          "Very much so. A private car lets families set their own pace, take breaks when needed, and keep luggage and supplies on board — far more comfortable than group tours for children or elderly travelers.",
      },
      {
        question: "Can the driver take me between multiple cities on a tour?",
        answer:
          "Yes. We arrange multi-city itineraries so you can combine destinations — for example pairing a coastal city with a mountain escape — all with the same trusted driver.",
      },
      {
        question: "Do I need to plan the route in advance?",
        answer:
          "It helps to share your must-see places when booking so we can suggest the best vehicle and a sensible order for the day, but your driver can also adapt the plan as you go.",
      },
    ],
    content: `
<p>Saudi Arabia has opened up to visitors like never before, and its landscapes range from ancient desert cities to misty mountains and pristine coastline. The most rewarding way to experience them is at your own pace — which is exactly what a private taxi offers. Exploring the top <strong>tourist destinations in Saudi Arabia by taxi</strong> means no rigid group schedules, no crowded buses, and the freedom to linger wherever you like. This guide highlights the country's must-see places and how a private car and driver make visiting them effortless.</p>
<p>Whether you have a single free day or a week to explore, here are the destinations worth putting on your itinerary — and why a private transfer is the ideal way to reach them.</p>

<h2 id="alula">AlUla — Ancient Wonders in the Desert</h2>
<p>AlUla is Saudi Arabia's crown jewel of heritage tourism, home to the UNESCO-listed Hegra (Madain Salih) with its monumental rock-cut tombs. The wider area includes dramatic sandstone formations, the old town, and sweeping desert vistas. Because attractions are spread out, a private car and driver let you move comfortably between sites and pause for photos whenever the landscape demands it.</p>
<h3>Why visit by private taxi</h3>
<p>Distances within AlUla are significant and the scenery is best enjoyed without a fixed timetable. A private vehicle gives you the flexibility group tours simply cannot.</p>

<h2 id="taif">Taif — The City of Roses</h2>
<p>Perched in the mountains above Makkah, Taif offers cool air, terraced rose farms, and scenic escarpment views. It is a favourite summer retreat and an easy, beautiful drive from Jeddah or Makkah. A private taxi makes the winding mountain road relaxing, and you can stop at viewpoints and farms along the way. Pair it with your pilgrimage using our <a href="/routes/jeddah-to-makkah">Jeddah and Makkah</a> connections.</p>

<h2 id="edge-of-the-world">The Edge of the World — Riyadh's Natural Drama</h2>
<p>Just outside Riyadh, the Edge of the World (Jebel Fihrayn) is a breathtaking cliff escarpment offering panoramic views over the desert plain. The final approach is rough terrain, so a capable vehicle and a driver who knows the route are a real advantage. It makes a perfect half-day trip from the capital — book it alongside our <a href="/taxi-service/riyadh">Riyadh taxi service</a>.</p>

<h2 id="jeddah">Jeddah — Coast, Culture and the Corniche</h2>
<p>Jeddah blends history and seaside leisure. Wander the coral-stone lanes of Al-Balad (a UNESCO World Heritage site), stroll the Corniche, and enjoy the Red Sea coast. A private car is ideal for hopping between the old town, the waterfront, and the city's restaurants without worrying about parking. Start with our <a href="/taxi-service/jeddah">Jeddah taxi service</a> or a smooth <a href="/airport-transfer/jeddah-airport">airport pickup</a>.</p>

<h2 id="riyadh">Riyadh — Capital Landmarks</h2>
<p>The capital pairs modern icons with heritage. Take in the Kingdom Centre sky bridge, the historic Diriyah district (another UNESCO site), and the National Museum. With a private driver you can cover landmarks spread across the city efficiently in a single day.</p>

<h2 id="red-sea">The Red Sea Coast and Beyond</h2>
<p>Saudi Arabia's Red Sea coastline is emerging as a world-class destination for diving, beaches, and resorts. A private transfer is the most comfortable way to reach coastal spots and combine them with nearby cities into a relaxed multi-day itinerary.</p>

<h2 id="why-private-tours">Why Private Taxi Tours Beat Group Tours</h2>
<ul>
  <li><strong>Your pace</strong> — stay longer where you love it, skip what you don't.</li>
  <li><strong>Comfort</strong> — a private, air-conditioned car and space for the family.</li>
  <li><strong>Local knowledge</strong> — drivers who know the best routes and timings.</li>
  <li><strong>Flexibility</strong> — adjust the plan on the day as you go.</li>
  <li><strong>Multi-city ease</strong> — combine destinations with one trusted driver.</li>
</ul>

<h2 id="planning">Planning Your Sightseeing Trip</h2>
<p>For the best experience, share your must-see places when booking so we can recommend the right vehicle and a sensible order for the day. Full-day and hourly bookings work brilliantly for sightseeing because your driver waits between stops. Explore our full <a href="/services">range of services</a> or <a href="/get-quote">request a custom quote</a> for your itinerary.</p>

<h2 id="conclusion">Final Thoughts</h2>
<p>From the ancient tombs of AlUla to the rose farms of Taif and the cliffs at the Edge of the World, the best <strong>tourist destinations in Saudi Arabia</strong> are made for unhurried, private exploration. A car and driver give you the freedom to experience each place on your own terms — comfortably, flexibly, and at your own pace. Plan your route, choose the right vehicle, and let a professional handle the driving while you enjoy the Kingdom's remarkable sights.</p>
${CTA("Saudi Arabia")}
`,
  },
];

// ── Seed ─────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
    process.exit(1);
  }
  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const now = Date.now();
  let ok = 0;
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const row = {
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      content: p.content.trim(),
      meta_title: p.metaTitle,
      meta_description: p.metaDescription,
      focus_keyword: p.focusKeyword,
      secondary_keywords: p.secondaryKeywords,
      featured_image: p.featuredImage,
      featured_image_alt: p.featuredImageAlt,
      author: p.author,
      category: p.category,
      tags: p.tags,
      faqs: p.faqs,
      reading_time: readingTime(p.content),
      status: "published",
      // Stagger publish times so newest sorts first predictably.
      published_at: new Date(now - i * 60_000).toISOString(),
    };
    const { error } = await supabase.from("blogs").upsert(row, { onConflict: "slug" });
    if (error) {
      console.error(`✗ ${p.slug}:`, error.message);
    } else {
      ok++;
      console.log(`✓ ${p.slug} (${row.reading_time} min)`);
    }
  }
  console.log(`\nSeeded ${ok}/${posts.length} blog posts.`);
  if (ok < posts.length) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
