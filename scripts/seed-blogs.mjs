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
    author: "Saudi Private Transfers",
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
    author: "Saudi Private Transfers",
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
    author: "Saudi Private Transfers",
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
    author: "Saudi Private Transfers",
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
    author: "Saudi Private Transfers",
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

  {
    title: "How Much Does a Taxi Cost in Saudi Arabia? 2026 Price Guide",
    slug: "taxi-cost-saudi-arabia-price-guide",
    category: "Travel Guides",
    author: "Saudi Private Transfers",
    featuredImage: "/images/hero-road.svg",
    featuredImageAlt: "Private taxi on a Saudi Arabia highway with pricing guide",
    focusKeyword: "taxi cost Saudi Arabia",
    secondaryKeywords: [
      "taxi fare Saudi Arabia",
      "how much is a taxi in Saudi Arabia",
      "private taxi prices Saudi Arabia",
      "Saudi Arabia transfer cost",
    ],
    tags: ["Pricing", "Travel Guide", "Saudi Arabia"],
    metaTitle: "How Much Does a Taxi Cost in Saudi Arabia? 2026",
    metaDescription:
      "A 2026 guide to taxi costs in Saudi Arabia — what affects the price, typical fares by route, vehicle options, fixed vs metered fares, and tips to save.",
    excerpt:
      "What affects taxi prices in Saudi Arabia, typical fares by popular route, vehicle options, and how fixed pricing helps you avoid surprises in 2026.",
    faqs: [
      {
        question: "How much does a taxi cost in Saudi Arabia?",
        answer:
          "It depends on distance, vehicle type, and time of travel. Short city rides are inexpensive, while long intercity trips cost more. With a private transfer you get one fixed price for the whole car, agreed before you travel, so there are no surprises.",
      },
      {
        question: "Is it cheaper to book a fixed-price taxi or use the meter?",
        answer:
          "For airport pickups and intercity trips, a fixed price is usually safer and often cheaper, because you know the total up front and avoid meter increases in traffic or detours.",
      },
      {
        question: "Does the price change during Hajj, Ramadan, or peak hours?",
        answer:
          "Demand rises during Ramadan and Hajj, so booking ahead is wise. Our quotes are fixed when you book, so you are protected from surge pricing during busy periods.",
      },
      {
        question: "Is the fare per person or per vehicle?",
        answer:
          "Our fares are per vehicle, not per person. A family or group pays one price for the car, which usually makes private transfer cheaper than buying several individual seats.",
      },
      {
        question: "Are there extra charges for luggage or airport pickup?",
        answer:
          "Standard luggage and meet-and-greet airport pickup are included in the quoted price. Any optional extras, such as additional stops, are agreed in advance so the total stays transparent.",
      },
    ],
    content: `
<p>One of the first questions visitors ask before booking a ride is simple: how much does a <strong>taxi cost in Saudi Arabia</strong>? The honest answer is "it depends" — on distance, the type of vehicle, the time of travel, and whether you book a fixed price or rely on a meter. This 2026 guide breaks down exactly what drives the price, shares typical fares for popular routes, and shows how fixed, all-in pricing helps you avoid the two biggest worries: overcharging and surprise fees.</p>
<p>Whether you need a short city hop, an airport pickup, or a long intercity journey, understanding how pricing works lets you budget with confidence and choose the right option for your trip.</p>

<h2 id="what-affects-price">What Affects the Price of a Taxi</h2>
<p>Several factors combine to determine your fare:</p>
<ul>
  <li><strong>Distance</strong> — the single biggest factor; longer trips cost more.</li>
  <li><strong>Vehicle type</strong> — a sedan is the most economical, while SUVs, vans, and buses cost more but carry more people and luggage.</li>
  <li><strong>Time and season</strong> — demand rises during Ramadan, Hajj, and holidays.</li>
  <li><strong>Route</strong> — city rides are cheap; intercity and airport transfers are priced by the journey.</li>
  <li><strong>Extras</strong> — additional stops or waiting time, agreed in advance.</li>
</ul>

<h2 id="fixed-vs-meter">Fixed Price vs Metered Fare</h2>
<p>In cities you will find metered taxis and ride-hailing apps. For airport pickups and intercity trips, however, a <strong>fixed price</strong> is usually the smarter choice. You agree the total before you travel, so traffic jams, detours, or busy seasons never inflate the cost. Our quotes are fixed for the whole vehicle and confirmed at booking — no meter, no surge. <a href="/get-quote">Request a fixed quote</a> and you will know the exact price up front.</p>

<h2 id="typical-fares">Typical Fares by Route</h2>
<p>Exact prices depend on your vehicle and travel date, but here is how popular journeys compare in relative terms:</p>
<table>
  <thead>
    <tr><th>Journey</th><th>Type</th><th>Relative cost</th></tr>
  </thead>
  <tbody>
    <tr><td>Within a city (e.g. <a href="/taxi-service/riyadh">Riyadh</a>)</td><td>Short local</td><td>$</td></tr>
    <tr><td><a href="/routes/jeddah-to-makkah">Jeddah → Makkah</a></td><td>Airport / short intercity</td><td>$$</td></tr>
    <tr><td><a href="/intercity-transfers">Jeddah → Taif</a></td><td>Intercity</td><td>$$</td></tr>
    <tr><td><a href="/routes/makkah-to-madinah">Makkah → Madinah</a></td><td>Long intercity</td><td>$$$</td></tr>
    <tr><td>Riyadh → Dammam</td><td>Long intercity</td><td>$$$</td></tr>
  </tbody>
</table>
<p>For an exact figure, request a quote with your pickup, drop-off, date, and passenger count — you will receive a single fixed price for the whole car.</p>

<h2 id="vehicle-pricing">How Vehicle Choice Changes the Cost</h2>
<h3>Sedan</h3>
<p>The most economical option, ideal for one to three passengers with light luggage.</p>
<h3>SUV / GMC</h3>
<p>More space and comfort for families; costs a little more than a sedan.</p>
<h3>Van / Hiace</h3>
<p>Best value for larger groups — splitting one fare across many passengers keeps the per-person cost low.</p>

<h2 id="airport-pricing">Airport Transfer Pricing</h2>
<p>Airport transfers are priced by the journey, with meet-and-greet and flight tracking included. Booking a fixed-price <a href="/airport-transfers">airport transfer</a> in advance avoids the premium and uncertainty of arranging a ride at the curb after you land.</p>

<h2 id="save-money">Tips to Get the Best Value</h2>
<ul>
  <li><strong>Book ahead</strong> to lock in a fixed price, especially in peak seasons.</li>
  <li><strong>Share the car</strong> — one fare for the whole group beats individual seats.</li>
  <li><strong>Pick the right vehicle</strong> — don't pay for a van if a sedan fits.</li>
  <li><strong>Confirm inclusions</strong> — make sure luggage and airport pickup are covered.</li>
  <li><strong>Plan the return</strong> — booking both legs together is convenient and predictable.</li>
</ul>

<h2 id="why-fixed">Why Fixed Pricing Wins for Visitors</h2>
<p>For travellers who don't know local routes, fixed pricing removes all the guesswork. You see the total before you commit, you pay the same regardless of traffic, and there is no awkward negotiation. That transparency is why most airport and intercity travellers prefer a pre-booked private transfer over hailing a ride on arrival.</p>

<h2 id="conclusion">Final Thoughts</h2>
<p>So, how much does a <strong>taxi cost in Saudi Arabia</strong>? Enough factors are involved that the only precise answer is a quote — but with fixed, per-vehicle pricing you can budget with total confidence and avoid surprises. Choose the right vehicle for your group, book ahead during busy periods, and you'll get reliable, comfortable transport at a price you agreed in advance.</p>
${CTA("Saudi Arabia")}
`,
  },

  {
    title: "Jeddah to Taif Taxi: Cost, Travel Time & Scenic Route Guide",
    slug: "jeddah-to-taif-taxi-guide",
    category: "Intercity Transfers",
    author: "Saudi Private Transfers",
    featuredImage: "/images/hero-road.svg",
    featuredImageAlt: "Private taxi on the scenic mountain road from Jeddah to Taif",
    focusKeyword: "Jeddah to Taif taxi",
    secondaryKeywords: [
      "Jeddah to Taif transfer",
      "Jeddah Taif travel time",
      "Taif taxi from Jeddah",
      "Jeddah to Taif distance",
    ],
    tags: ["Jeddah", "Taif", "Intercity", "Travel Guide"],
    metaTitle: "Jeddah to Taif Taxi: Cost, Time & Route Guide",
    metaDescription:
      "Plan your Jeddah to Taif taxi: distance, travel time, fixed fares, the scenic mountain route, best vehicles, and booking tips for a comfortable transfer.",
    excerpt:
      "Distance, travel time, fixed fares, and the scenic mountain route — a complete guide to booking a comfortable Jeddah to Taif private taxi.",
    faqs: [
      {
        question: "How long does the Jeddah to Taif taxi take?",
        answer:
          "The journey is roughly 170 km and takes about 2 to 2.5 hours by private car, depending on the route and stops. The scenic mountain ascent near Taif can add a little time but is well worth it.",
      },
      {
        question: "How much is a taxi from Jeddah to Taif?",
        answer:
          "We charge one fixed price for the whole vehicle, agreed before travel. A sedan is most economical, while an SUV or van suits families and groups carrying luggage.",
      },
      {
        question: "Which route does the taxi take to Taif?",
        answer:
          "Most transfers use the main highway and the mountain road up the escarpment, which offers spectacular views. Drivers choose the best route based on conditions and your preference.",
      },
      {
        question: "Can the driver stop at viewpoints along the way?",
        answer:
          "Yes. Tell your driver in advance and you can pause at scenic viewpoints or for refreshments on the climb to Taif.",
      },
      {
        question: "Can I combine Jeddah airport pickup with a Taif transfer?",
        answer:
          "Absolutely. We can collect you directly from Jeddah airport with meet-and-greet and drive you straight to Taif, with flight tracking included.",
      },
    ],
    content: `
<p>Escaping the Red Sea heat for the cool mountain air of Taif is one of the most popular trips from Jeddah — and a private <strong>Jeddah to Taif taxi</strong> is the most comfortable way to make it. With its rose farms, escarpment viewpoints, and pleasant climate, Taif rewards the scenic drive up the mountains. This guide covers the distance, realistic travel time, fixed pricing, the route, and how to plan a relaxed transfer in 2026.</p>
<p>Whether you are visiting for a day trip, a summer break, or combining Taif with Umrah in nearby Makkah, here's everything you need to know before you book.</p>

<h2 id="distance-time">Distance and Travel Time</h2>
<p>Jeddah and Taif are about <strong>170 kilometres</strong> apart. By private car the journey takes roughly <strong>2 to 2.5 hours</strong>, including the climb up the mountain escarpment near Taif. The exact time depends on the route, traffic leaving Jeddah, and any stops you make for photos or refreshments along the way.</p>

<h2 id="scenic-route">The Scenic Mountain Route</h2>
<p>What makes this trip special is the ascent into the Sarawat Mountains. As you climb toward Taif, the temperature drops and the views open up over the valleys below. A private car lets you enjoy the scenery at your own pace and pause at viewpoints — something shared transport simply can't offer. If you prefer a faster, gentler road, your driver can choose the most comfortable option.</p>

<h2 id="why-private">Why Take a Private Taxi to Taif</h2>
<ul>
  <li><strong>Door-to-door</strong> — hotel to hotel, no stations or transfers.</li>
  <li><strong>Comfort</strong> — air-conditioned car for the mountain climb.</li>
  <li><strong>Flexibility</strong> — stop for viewpoints, rose farms, or food.</li>
  <li><strong>Value for groups</strong> — one fixed fare for the whole vehicle.</li>
</ul>
<p>Start your trip with our <a href="/taxi-service/jeddah">Jeddah taxi service</a> or a smooth <a href="/airport-transfer/jeddah-airport">Jeddah airport pickup</a>, then continue straight to Taif.</p>

<h2 id="fixed-fares">Fixed Fares with No Surprises</h2>
<p>We quote a <strong>single fixed price for the whole car</strong>, agreed before you travel — no meter and no seasonal surge. For families and groups this is excellent value, since the fare is shared rather than charged per seat. <a href="/get-quote">Request your quote</a> with your pickup point and travel date for an exact price.</p>

<h2 id="vehicles">Choosing Your Vehicle</h2>
<h3>Couples and solo travellers</h3>
<p>A sedan is comfortable and economical for the two-hour drive.</p>
<h3>Families</h3>
<p>An SUV or GMC offers extra space and a smoother ride on the mountain road.</p>
<h3>Groups</h3>
<p>A Hiace or van keeps everyone together with room for luggage.</p>

<h2 id="what-to-do">What to Do in Taif</h2>
<p>Once you arrive, Taif rewards visitors with rose farms and distilleries, the cable car down the escarpment, traditional souqs, and cool mountain parks. A private driver can take you between attractions, making a day trip from Jeddah easy and stress-free. Explore our <a href="/taxi-service/taif">Taif taxi service</a> for getting around once you're there.</p>

<h2 id="booking-tips">Booking Tips</h2>
<ul>
  <li><strong>Book ahead</strong> in summer, when Taif is a popular escape.</li>
  <li><strong>Share your hotel</strong> in both cities for precise pickup and drop-off.</li>
  <li><strong>Mention stops</strong> — viewpoints or rose farms — when you book.</li>
  <li><strong>Consider a round trip</strong> for a comfortable same-day return.</li>
</ul>

<h2 id="conclusion">Final Thoughts</h2>
<p>A <strong>Jeddah to Taif taxi</strong> turns a scenic mountain journey into a relaxed, comfortable experience. With a fixed fare, a vehicle sized for your group, and the freedom to stop along the way, you can enjoy the climb into the cool highlands without a worry. Book ahead, share your details, and let a professional driver handle the road while you take in the views.</p>
${CTA("Taif")}
`,
  },

  {
    title: "Riyadh to Dammam Taxi: Distance, Cost & Booking Guide",
    slug: "riyadh-to-dammam-taxi-guide",
    category: "Intercity Transfers",
    author: "Saudi Private Transfers",
    featuredImage: "/images/hero-road.svg",
    featuredImageAlt: "Private taxi on the Riyadh to Dammam highway",
    focusKeyword: "Riyadh to Dammam taxi",
    secondaryKeywords: [
      "Riyadh to Dammam transfer",
      "Riyadh Dammam travel time",
      "Riyadh to Khobar taxi",
      "Riyadh to Dammam distance",
    ],
    tags: ["Riyadh", "Dammam", "Intercity", "Travel Guide"],
    metaTitle: "Riyadh to Dammam Taxi: Distance, Cost & Booking",
    metaDescription:
      "A complete guide to the Riyadh to Dammam taxi — distance, travel time, fixed fares, vehicle options, rest stops, and tips for a comfortable transfer.",
    excerpt:
      "Distance, travel time, fixed fares, and the best vehicle for the long drive east — everything you need to book a Riyadh to Dammam private taxi.",
    faqs: [
      {
        question: "How long is the taxi journey from Riyadh to Dammam?",
        answer:
          "The drive covers roughly 400 km and takes about 4 to 4.5 hours by private car on the modern highway, including a short rest stop.",
      },
      {
        question: "How much does a Riyadh to Dammam taxi cost?",
        answer:
          "We charge one fixed price for the whole vehicle, agreed before you travel. The fare depends on vehicle type, with sedans the most economical and vans best for groups with luggage.",
      },
      {
        question: "Does the taxi also serve Khobar and Dhahran?",
        answer:
          "Yes. Dammam, Khobar, and Dhahran form one metropolitan area, so we cover all three, plus onward trips to the King Fahd Causeway for Bahrain.",
      },
      {
        question: "Is a private taxi better than flying for this route?",
        answer:
          "For families and groups it often is — you travel door-to-door on your own schedule, avoid airport check-in and baggage fees, and pay one fare for the whole car.",
      },
      {
        question: "Can I book a one-way Riyadh to Dammam transfer?",
        answer:
          "Yes. One-way, return, and multi-city itineraries are all available. Booking the return in advance guarantees an on-time pickup for your trip back.",
      },
    ],
    content: `
<p>The route between the capital and the Eastern Province is one of Saudi Arabia's busiest intercity corridors, used by business travellers, families, and visitors heading to the Gulf coast. A private <strong>Riyadh to Dammam taxi</strong> offers a comfortable, door-to-door alternative to flying or the bus — no airport queues, no fixed timetable, and one fare for the whole car. This guide covers the distance, travel time, fixed pricing, vehicle options, and tips for a smooth journey east in 2026.</p>
<p>Whether you're travelling for work, visiting family, or continuing to Khobar, Dhahran, or the King Fahd Causeway, here's how to plan the trip with confidence.</p>

<h2 id="distance-time">Distance and Travel Time</h2>
<p>Riyadh and Dammam are about <strong>400 kilometres</strong> apart, linked by a modern, well-maintained highway across the desert. By private car the journey takes roughly <strong>4 to 4.5 hours</strong>, including a short rest stop. Travel time varies with weather, traffic leaving Riyadh, and how many breaks you take.</p>

<h2 id="why-private">Why Choose a Private Taxi</h2>
<ul>
  <li><strong>Door-to-door</strong> — collected from your home, office, or hotel.</li>
  <li><strong>Your schedule</strong> — leave when it suits you, not a timetable.</li>
  <li><strong>Comfort</strong> — a private, air-conditioned car for the long drive.</li>
  <li><strong>Value for groups</strong> — one fixed fare, shared across passengers.</li>
</ul>
<p>Begin with our <a href="/taxi-service/riyadh">Riyadh taxi service</a> and arrive with our <a href="/taxi-service/dammam">Dammam taxi service</a> ready for local trips.</p>

<h2 id="fixed-fares">Fixed Fares and What They Include</h2>
<p>We quote a <strong>single fixed price for the whole vehicle</strong>, confirmed at booking — no meter, no surge. Standard luggage and door-to-door service are included. For a family or group, dividing one fare across several passengers often makes the private car cheaper than separate flight tickets once baggage and airport transfers are added. <a href="/get-quote">Get a fixed quote</a> for your trip in under a minute.</p>

<h2 id="vehicles">Choosing the Right Vehicle</h2>
<table>
  <thead>
    <tr><th>Vehicle</th><th>Best for</th><th>Passengers</th></tr>
  </thead>
  <tbody>
    <tr><td>Sedan</td><td>Solo & couples</td><td>1–3</td></tr>
    <tr><td>GMC / SUV</td><td>Families, comfort</td><td>1–6</td></tr>
    <tr><td>Hiace / Van</td><td>Groups & luggage</td><td>7–11</td></tr>
  </tbody>
</table>

<h2 id="rest-stops">The Route and Rest Stops</h2>
<p>The highway between Riyadh and Dammam passes well-equipped service areas, so it's easy to pause for prayer, food, or a stretch around the halfway point. With a private car you set the pace — push straight through or take an extra break, whatever suits your group.</p>

<h2 id="eastern-province">Beyond Dammam: Khobar, Dhahran & Bahrain</h2>
<p>Dammam, Khobar, and Dhahran sit together as one metropolitan area on the Gulf coast. We serve all three, plus onward transfers across the <a href="/border-transfers/bahrain-causeway">King Fahd Causeway to Bahrain</a> — handy if your journey continues beyond Saudi Arabia. See all our <a href="/intercity-transfers">intercity transfers</a> for other routes.</p>

<h2 id="booking-tips">Booking Tips</h2>
<ul>
  <li><strong>Book ahead</strong> for business travel and peak periods.</li>
  <li><strong>Share exact addresses</strong> for precise pickup and drop-off.</li>
  <li><strong>Plan a rest stop</strong> on the four-hour drive.</li>
  <li><strong>Confirm the return</strong> if you need a round trip.</li>
</ul>

<h2 id="conclusion">Final Thoughts</h2>
<p>A <strong>Riyadh to Dammam taxi</strong> is the most flexible, comfortable way to cross to the Eastern Province. With fixed pricing, a vehicle sized for your group, and door-to-door service on your own schedule, the long drive becomes genuinely relaxing. Book ahead, share your details, and let a professional handle the highway while you travel in comfort.</p>
${CTA("Dammam")}
`,
  },

  {
    title: "Umrah Transport Guide: Getting Around Makkah & Madinah",
    slug: "umrah-transport-makkah-madinah-guide",
    category: "Umrah Transport",
    author: "Saudi Private Transfers",
    featuredImage: "/images/hero-mosque.svg",
    featuredImageAlt: "Private taxi for Umrah transport between Makkah and Madinah",
    focusKeyword: "Umrah transport",
    secondaryKeywords: [
      "Umrah taxi service",
      "Makkah Madinah Umrah transfer",
      "transport for Umrah pilgrims",
      "Umrah travel guide",
    ],
    tags: ["Umrah", "Makkah", "Madinah", "Pilgrimage"],
    metaTitle: "Umrah Transport Guide: Makkah & Madinah Transfers",
    metaDescription:
      "A complete Umrah transport guide — airport pickup, Makkah and Madinah transfers, ziyarat trips, vehicle options, and booking tips for a smooth pilgrimage.",
    excerpt:
      "From airport pickup to Makkah and Madinah transfers and ziyarat trips — a complete guide to organising comfortable, reliable transport for your Umrah.",
    faqs: [
      {
        question: "What transport do I need for Umrah?",
        answer:
          "Most pilgrims need an airport pickup, a transfer between Makkah and Madinah, local rides to and from the Haram, and ziyarat trips to historic sites. A private transfer service can cover all of these on one booking.",
      },
      {
        question: "Should I book Umrah transport in advance?",
        answer:
          "Yes. Pre-booking guarantees a driver is ready when you arrive — especially valuable when you land in ihram and want to reach the Haram quickly, and during the busy Ramadan period.",
      },
      {
        question: "Can one service cover Jeddah airport, Makkah, and Madinah?",
        answer:
          "Yes. We handle the full journey — Jeddah airport meet-and-greet, the Makkah to Madinah transfer, local Haram transfers, ziyarat tours, and the return to the airport.",
      },
      {
        question: "What vehicle is best for an Umrah family group?",
        answer:
          "A GMC or Hiace gives families room to travel together with luggage and Zamzam water. Couples and solo pilgrims are comfortable in a sedan.",
      },
      {
        question: "Do you provide ziyarat tours in Makkah and Madinah?",
        answer:
          "Yes. We offer dedicated ziyarat trips to historic sites such as Quba Mosque, Mount Uhud, and the holy landmarks around both cities, with a knowledgeable driver.",
      },
    ],
    content: `
<p>Performing Umrah is a deeply meaningful journey, and smooth, reliable <strong>Umrah transport</strong> lets you focus on worship instead of logistics. From the moment you land at Jeddah airport to your transfers between the holy cities, local rides to the Haram, and ziyarat trips to historic sites, having dependable transport arranged in advance makes the whole pilgrimage calmer. This guide explains exactly what transport you'll need and how to organise it for a stress-free Umrah in 2026.</p>
<p>Whether you travel solo, as a couple, or with an extended family, planning each leg ahead of time means a driver is always ready — no negotiating fares or waiting in queues during your sacred journey.</p>

<h2 id="airport-pickup">1. Airport Arrival and Pickup</h2>
<p>Most pilgrims arrive at <a href="/airport-transfer/jeddah-airport">Jeddah's King Abdulaziz airport</a>, often already in ihram. A pre-booked meet-and-greet pickup means your driver is waiting in arrivals with a name sign, ready to take you straight to Makkah. Flight tracking ensures the pickup adjusts if your flight is early or delayed — invaluable after a long journey.</p>

<h2 id="jeddah-makkah">2. Jeddah to Makkah Transfer</h2>
<p>The first leg takes you about 90 km from the airport to your hotel near the Haram. A private car lets you travel directly in ihram without changing vehicles. See our detailed <a href="/routes/jeddah-to-makkah">Jeddah to Makkah</a> route for timing and tips.</p>

<h2 id="makkah-madinah">3. Makkah to Madinah Transfer</h2>
<p>After completing your Umrah rites, most pilgrims travel to Madinah to visit the Prophet's Mosque. The <a href="/routes/makkah-to-madinah">Makkah to Madinah</a> journey is around 450 km and takes 4.5–5.5 hours by private car, with rest stops on request. Travelling door-to-door with your luggage handled is far more comfortable than carrying bags through a station.</p>

<h2 id="local-transfers">4. Local Transfers to the Haram</h2>
<p>Within each city you'll want quick, reliable rides between your hotel and the Haram, especially around prayer times. Local transfers in <a href="/taxi-service/makkah">Makkah</a> and <a href="/taxi-service/madinah">Madinah</a> keep you moving comfortably throughout your stay.</p>

<h2 id="ziyarat">5. Ziyarat Trips to Historic Sites</h2>
<p>Many pilgrims wish to visit the historic sites around the holy cities — Quba Mosque, Mount Uhud, and other landmarks. A dedicated <a href="/ziyarat-taxi-service">ziyarat taxi service</a> with a knowledgeable driver lets you visit these meaningful places at your own pace.</p>

<h2 id="vehicles">Choosing the Right Vehicle</h2>
<ul>
  <li><strong>Sedan</strong> — comfortable and economical for couples and solo pilgrims.</li>
  <li><strong>GMC / SUV</strong> — extra room for families and luggage.</li>
  <li><strong>Hiace / Van</strong> — ideal for larger family groups travelling together.</li>
  <li><strong>Coaster / Bus</strong> — for organised Umrah groups.</li>
</ul>

<h2 id="one-service">The Value of One Trusted Service</h2>
<p>Booking every leg with a single provider means consistent vehicles, fixed pricing, and one point of contact for your whole trip. Our complete <a href="/umrah-taxi-service">Umrah taxi service</a> covers airport pickup, intercity transfers, local Haram rides, ziyarat, and the return journey — so your transport is sorted from arrival to departure.</p>

<h2 id="booking-tips">Booking Tips for Pilgrims</h2>
<ul>
  <li><strong>Book early</strong>, especially during Ramadan when demand peaks.</li>
  <li><strong>Share flight and hotel details</strong> for precise, on-time pickups.</li>
  <li><strong>Plan ziyarat</strong> trips in advance so the route is ready.</li>
  <li><strong>Pre-book the return</strong> to the airport for a guaranteed pickup.</li>
</ul>

<h2 id="conclusion">Final Thoughts</h2>
<p>Reliable <strong>Umrah transport</strong> is one of the most important parts of a peaceful pilgrimage. By arranging your airport pickup, Makkah and Madinah transfers, local Haram rides, and ziyarat trips in advance — ideally with one trusted service — you remove the stress of logistics and arrive calm, on time, and ready to focus on worship. Plan ahead, share your details, and let a professional handle the journey.</p>
${CTA("Makkah")}
`,
  },

  {
    title: "Saudi Arabia to Bahrain by Taxi: King Fahd Causeway Guide",
    slug: "saudi-to-bahrain-taxi-king-fahd-causeway",
    category: "Border Transfers",
    author: "Saudi Private Transfers",
    featuredImage: "/images/hero-road.svg",
    featuredImageAlt: "Private taxi crossing the King Fahd Causeway from Saudi Arabia to Bahrain",
    focusKeyword: "Saudi to Bahrain taxi",
    secondaryKeywords: [
      "King Fahd Causeway taxi",
      "Khobar to Bahrain taxi",
      "Dammam to Bahrain transfer",
      "Saudi Arabia Bahrain border crossing",
    ],
    tags: ["Bahrain", "Border Transfer", "Khobar", "Dammam"],
    metaTitle: "Saudi to Bahrain Taxi: King Fahd Causeway Guide",
    metaDescription:
      "How to cross from Saudi Arabia to Bahrain by taxi via the King Fahd Causeway — travel time, the border process, fixed fares, documents, and booking tips.",
    excerpt:
      "Travel time, the border crossing process, documents, and fixed fares — a complete guide to crossing from Saudi Arabia to Bahrain by taxi via the King Fahd Causeway.",
    faqs: [
      {
        question: "How long does it take to cross from Saudi Arabia to Bahrain by taxi?",
        answer:
          "From Khobar or Dammam, the drive plus the King Fahd Causeway crossing typically takes 1.5 to 2.5 hours, depending on traffic and how busy border control is — longer on weekends and holidays.",
      },
      {
        question: "Do I need a visa to cross to Bahrain?",
        answer:
          "Visa requirements depend on your nationality. Many travellers obtain a Bahrain eVisa or visa on arrival, while GCC residents may have simpler entry. Always check the current rules for your passport before you travel.",
      },
      {
        question: "Does the taxi take me all the way to my destination in Bahrain?",
        answer:
          "Yes. A private cross-border transfer takes you door-to-door — from your pickup in Saudi Arabia across the causeway to your hotel or address in Bahrain.",
      },
      {
        question: "What documents do I need at the border?",
        answer:
          "You'll need a valid passport, the appropriate visa or entry permit for Bahrain, and your vehicle's crossing documents, which the driver handles. Keep your travel papers ready for inspection.",
      },
      {
        question: "Is the causeway crossing busy at certain times?",
        answer:
          "Yes. Weekends, evenings, and public holidays are the busiest, which can lengthen the crossing. Travelling earlier in the day and booking in advance helps avoid delays.",
      },
    ],
    content: `
<p>The King Fahd Causeway is one of the busiest land crossings in the Gulf, linking Saudi Arabia's Eastern Province directly to the island of Bahrain. For travellers heading across for business or a weekend break, a private <strong>Saudi to Bahrain taxi</strong> is the most comfortable option — door-to-door service with the driver handling the vehicle paperwork while you relax. This guide explains the travel time, the border process, documents you'll need, fixed pricing, and tips for a smooth crossing in 2026.</p>
<p>Whether you're starting from Khobar, Dammam, or Dhahran, here's everything you need to know before you cross the causeway.</p>

<h2 id="the-causeway">About the King Fahd Causeway</h2>
<p>The causeway is a 25 km series of bridges and embankments connecting Khobar on the Saudi side to Bahrain, with a border control point on the man-made island in the middle. It's the only land route between the two countries and a vital link for trade and tourism. A private car takes you smoothly from your starting point across the causeway to your final destination.</p>

<h2 id="travel-time">Travel Time and Route</h2>
<p>From <a href="/taxi-service/khobar">Khobar</a> or <a href="/taxi-service/dammam">Dammam</a>, the drive to the causeway is short, and the full crossing to Bahrain typically takes <strong>1.5 to 2.5 hours</strong> depending on traffic and how busy border control is. Weekends, evenings, and holidays are the busiest times. Our dedicated <a href="/border-transfers/bahrain-causeway">Bahrain causeway transfer</a> covers the whole route.</p>

<h2 id="border-process">The Border Crossing Process</h2>
<p>The crossing involves passing through both Saudi exit and Bahraini entry checkpoints on the causeway. With a private transfer, your driver knows the procedure and lanes, which keeps things efficient. You'll present your documents at the control points, and once cleared, continue straight to your destination in Bahrain.</p>
<h3>Documents you'll need</h3>
<ul>
  <li>A valid <strong>passport</strong>.</li>
  <li>The appropriate <strong>visa or entry permit</strong> for Bahrain (check requirements for your nationality).</li>
  <li>Vehicle crossing documents — handled by your driver.</li>
</ul>

<h2 id="visa">Visa and Entry Requirements</h2>
<p>Entry rules depend on your nationality. Many visitors use a Bahrain eVisa or visa on arrival, while GCC residents often have simpler entry. Requirements change, so always confirm the current rules for your passport before travelling. Having the right documents ready is the single best way to keep your crossing quick.</p>

<h2 id="fixed-fares">Fixed Cross-Border Pricing</h2>
<p>We quote a <strong>single fixed price for the whole vehicle</strong> for the cross-border transfer, agreed before you travel. This covers the door-to-door journey across the causeway. <a href="/get-quote">Request a quote</a> with your pickup point and Bahrain destination for an exact fare.</p>

<h2 id="why-private">Why Cross by Private Taxi</h2>
<ul>
  <li><strong>Door-to-door</strong> — from your address in Saudi Arabia to your destination in Bahrain.</li>
  <li><strong>Driver handles the vehicle paperwork</strong> at the border.</li>
  <li><strong>Comfort</strong> — a private, air-conditioned car the whole way.</li>
  <li><strong>Flexibility</strong> — travel on your schedule, ideal for weekend trips.</li>
</ul>
<p>See our full range of <a href="/border-transfers">border transfers</a> for other GCC crossings too.</p>

<h2 id="tips">Tips for a Smooth Crossing</h2>
<ul>
  <li><strong>Travel earlier in the day</strong> to avoid peak congestion.</li>
  <li><strong>Avoid weekend evenings</strong> when the causeway is busiest.</li>
  <li><strong>Have documents ready</strong> for quick inspection.</li>
  <li><strong>Book ahead</strong> and confirm your return crossing too.</li>
</ul>

<h2 id="conclusion">Final Thoughts</h2>
<p>Crossing from <strong>Saudi Arabia to Bahrain by taxi</strong> via the King Fahd Causeway is straightforward when you plan ahead. With a private door-to-door transfer, fixed pricing, and a driver who knows the border process, you can travel comfortably and skip the hassle of arranging your own vehicle paperwork. Prepare your documents, pick a quieter travel time, book in advance, and enjoy an easy journey to the island.</p>
${CTA("Bahrain")}
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
