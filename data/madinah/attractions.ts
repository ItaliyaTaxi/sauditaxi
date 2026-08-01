import type { PointTransfer } from "../jeddah/types";

/**
 * Madinah Ziyarat / historical-site transfer pages (category "attraction"),
 * served at /madinah/{slug}. Written respectfully and factually about the
 * sacred sites — no invented hadith, dates, or rulings. Paragraph strings may
 * contain inline single-quoted <a href='/...'> links.
 */
const raw: Omit<PointTransfer, "citySlug">[] = [
  {
    slug: "madinah-to-quba-mosque",
    category: "attraction",
    from: "Madinah",
    to: "Quba Mosque",
    h1: "Quba Mosque: Private Taxi Tour from Madinah",
    metaTitle: "Quba Mosque Transfer | Private Taxi Tour Madinah",
    metaDescription:
      "Private car and waiting driver from your Madinah hotel to Quba Mosque, the first mosque in Islam — distances, best visiting times, prayer info, fixed pricing.",
    intro:
      "Quba Mosque is the first mosque built in Islam, founded by the Prophet Muhammad (peace be upon him) himself on his arrival in Madinah. A private car and waiting driver take you there in minutes with time to pray, and this page covers the real distances, best visiting hours, and everything else worth knowing before you go.",
    distance: "approx. 5 km south of the Haram",
    duration: "1–2 hours with waiting",
    heroImage: "/images/ziyarat/quba-mosque.webp",
    heroAlt: "Quba Mosque in Madinah, the first mosque built in Islam",
    highlights: [
      "The first mosque in Islam — founded by the Prophet in 622 CE",
      "Two rakahs here carry a reward equivalent to Umrah",
      "5-minute drive from central Madinah, waiting driver included",
      "Full itinerary and vehicle guidance for every group size",
    ],
    sections: [
      {
        heading: "Why Quba Mosque matters",
        paragraphs: [
          "Quba Mosque stands in the district of the same name, a short distance south of Masjid an-Nabawi, and holds a unique place in Islamic history: it is the first mosque ever built in Islam, its foundation stones laid by the Prophet Muhammad (peace be upon him) personally upon his arrival in Madinah in 622 CE (1 AH), in the earliest days after the Hijrah. For many pilgrims, that historical weight — being the very first place of congregational prayer in the new Muslim community — is what makes a visit here feel different from any other stop on a Ziyarat itinerary.",
          "The mosque's religious significance goes beyond history. The Prophet is reported to have said that performing two voluntary rakahs at Quba carries a reward equivalent to that of performing an Umrah — a tradition that makes praying here, not just viewing it, the priority for most visitors. The current building has been rebuilt and expanded several times over the centuries, most substantially in the 1980s, but it sits on its original footprint and retains its calm, understated architectural character: white domes, open courtyards, and gardens rather than the scale and grandeur of the Prophet's Mosque itself.",
          "Because Quba combines historical significance, religious reward, and genuine physical accessibility (unlike the mountain sites in Makkah, there's no climb involved), it is consistently the single most-visited Ziyarat site in Madinah, and the one virtually every pilgrim's itinerary includes regardless of how much time they have available.",
        ],
      },
      {
        heading: "Route: how you get there from your Madinah hotel",
        paragraphs: [
          "Almost every visit starts from a hotel in central Madinah, within walking distance of Masjid an-Nabawi. Your driver takes the direct route south out of the central district — a short, straightforward drive along well-maintained roads with none of the seasonal access restrictions that apply to some of the Hajj sites in Makkah.",
          "The mosque has a dedicated visitor drop-off area and parking directly adjacent to the courtyard, so unlike Jabal al-Noor or Jabal Thawr, there's no separate walk from a distant car park — your driver can pull up close to the entrance itself, which matters if you're travelling with elderly relatives or young children.",
          "Pickup can be arranged from your hotel, or combined with an arrival or departure transfer — many pilgrims stop at Quba on the way from Madinah Airport to their hotel, or on the way back to the airport for a departing flight, making efficient use of a day that would otherwise be spent purely in transit.",
        ],
      },
      {
        heading: "Distance at a glance",
        paragraphs: [
          "<strong>From Masjid an-Nabawi / central hotels:</strong> approximately 5 km — a 10–15 minute drive outside peak hours.<br/><strong>From Prince Mohammad bin Abdulaziz International Airport (MED):</strong> approximately 20–25 km, making Quba an easy stop on an arrival or departure transfer.<br/><strong>From Masjid al-Qiblatain:</strong> approximately 8–9 km (Qiblatain sits north-west of the Haram, Quba to the south).<br/><strong>From Mount Uhud:</strong> approximately 10–11 km, on the opposite side of the city.<br/><strong>From the Seven Mosques:</strong> approximately 8 km.<br/><strong>From Makkah (for pilgrims combining both holy cities):</strong> approximately 430 km via the intercity highway — see our <a href='/routes/madinah-to-makkah'>Madinah to Makkah transfer</a>.",
        ],
      },
      {
        heading: "Travel time, prayer times, and the best time to visit",
        paragraphs: [
          "In normal traffic, the drive from central Madinah takes 10 to 15 minutes each way. Ramadan evenings and the weeks around Hajj bring heavier traffic across the whole city, and the same drive can take 20 to 30 minutes during those periods — still short by comparison with the Makkah mountain sites.",
          "<strong>Best time to visit:</strong> because Quba is a fully functioning mosque rather than a site with fixed opening hours, timing your visit around one of the five daily prayers is the natural approach — many pilgrims aim to arrive shortly before a prayer time specifically to pray the two rakahs inside the mosque itself rather than simply viewing it from outside. Mid-morning (after Dhuhr) and the hour before Asr tend to be quieter than the periods immediately around Maghrib and Isha, when the mosque is at its busiest with local worshippers as well as visitors.",
          "<strong>Seasonal considerations:</strong> Madinah's climate is more moderate than Makkah's for much of the year, so unlike the mountain Ziyarat sites there's no strong seasonal pressure to visit only in early morning — Quba is comfortable to visit at almost any hour outside the height of summer afternoons.",
        ],
      },
      {
        heading: "Visiting Quba Mosque: what to expect",
        paragraphs: [
          "The mosque is open to visitors and worshippers throughout the day, with brief closures only for cleaning between certain prayer times. It has clearly separated areas for men and women, both spacious and well maintained, and the courtyard and garden areas are pleasant to walk through even outside prayer times. Most visitors spend 30 minutes to an hour here — enough time to pray, walk the grounds, and appreciate the architecture without feeling rushed.",
          "<strong>Entry restrictions:</strong> none for Muslim visitors; the mosque is freely open during its daily hours. <strong>Photography:</strong> generally acceptable in the courtyards and exterior; inside the prayer halls, keep it discreet and avoid photographing worshippers directly. <strong>Dress code:</strong> standard modest mosque attire — an abaya and headscarf for women, clean, modest clothing for men; comfortable shoes are fine since there's no climbing involved. <strong>Accessibility:</strong> Quba is the most physically accessible of all the Madinah Ziyarat sites — flat, paved, close parking, and suitable for wheelchair users, elderly visitors, and young children alike. <strong>Estimated visit duration:</strong> 30–60 minutes for a typical visit including prayer; longer if you'd like unhurried time in the gardens.",
        ],
      },
      {
        heading: "Nearby attractions to combine with your visit",
        paragraphs: [
          "Quba's central, accessible location makes it the easiest of all the Madinah Ziyarat sites to combine with others. <a href='/madinah/madinah-to-qiblatain-mosque'>Masjid al-Qiblatain</a>, where the direction of prayer changed from Jerusalem to Makkah, sits about 8–9 km away and pairs naturally on the same outing. <a href='/madinah/madinah-to-mount-uhud'>Mount Uhud</a> and its martyrs' cemetery, roughly 10–11 km away, is a common second or third stop for pilgrims building a half-day circuit, and the <a href='/madinah/madinah-to-seven-mosques'>Seven Mosques</a> cluster is a short 8 km detour on the way back toward central Madinah.",
          "For a single comprehensive booking covering all of Madinah's core sites, ask about combining Quba with the rest of the circuit in one trip — see our <a href='/ziyarat-taxi-service'>Ziyarat taxi service</a> for the full Madinah circuit. Pilgrims planning their trip end-to-end may also find our guide on <a href='/blog/first-time-visiting-madinah-guide'>first-time visits to Madinah</a> useful for wider planning, and our <a href='/blog/madinah-ziyarat-historic-sites-guide'>Madinah Ziyarat historic sites guide</a> for more background on each stop.",
        ],
      },
      {
        heading: "Suggested itineraries",
        paragraphs: [
          "<strong>2-hour visit:</strong> drive to Quba, pray and walk the grounds (30–45 minutes), return — the simplest way to fit this into any schedule.<br/><strong>Half-day (3–4 hours):</strong> Quba Mosque, then Masjid al-Qiblatain, then a stop at the Seven Mosques on the way back — three sites, all close together, without feeling rushed at any of them.<br/><strong>Full day (6–7 hours):</strong> Quba, Qiblatain, Mount Uhud and the martyrs' cemetery, and the Seven Mosques, covering the entire Madinah Ziyarat circuit in one booking.<br/><strong>Family itinerary:</strong> Quba's flat, accessible grounds make it the easiest starting point for a family Ziyarat day — children and grandparents can move around comfortably together, unlike the mountain sites in Makkah.<br/><strong>Elderly-friendly itinerary:</strong> Quba alone, or Quba plus Qiblatain, timed around a comfortable prayer window with no time pressure — both sites involve minimal walking from the vehicle.",
        ],
      },
      {
        heading: "Which vehicle to choose",
        paragraphs: [
          "<strong>Solo travellers:</strong> a standard sedan is ideal for this short, straightforward route.<br/><strong>Couples:</strong> the same sedan class is comfortable; an SUV adds a little extra room if you're combining Quba with a longer circuit the same day.<br/><strong>Families (3–5 people):</strong> an SUV gives everyone comfortable space, particularly useful if you're visiting multiple sites in one trip.<br/><strong>Groups (6+):</strong> a van or minibus keeps the whole group together for one fixed price, well suited to a full Madinah Ziyarat circuit.<br/><strong>Elderly travellers:</strong> any vehicle works well here since Quba's flat, close-parking layout removes the accessibility concerns that apply to the Makkah mountain sites — an SUV is still a comfortable default choice for easier entry.<br/><strong>Wheelchair users:</strong> Quba is the most wheelchair-accessible Ziyarat site in either holy city — let us know when booking so we can confirm suitable vehicle access and drop-off arrangements.",
        ],
      },
      {
        heading: "Booking, pricing, and why pilgrims choose us for this transfer",
        paragraphs: [
          "Tell us your hotel, your group size, and how long you'd like at the mosque, and we confirm a fixed, all-inclusive price before you travel — waiting time included, with no meter and no surge pricing. Book directly over WhatsApp via our <a href='/get-quote'>get a quote</a> page, or combine Quba with your arrival transfer from <a href='/madinah/madinah-to-mount-uhud'>Madinah Airport</a> if your flight timing allows.",
          "Every driver is licensed and background-checked, and the vehicle is exclusively yours for the duration of the trip — no shared stops, no other passengers. For pilgrims arriving by air, we monitor flight status on connected airport-transfer bookings, and support is available 24/7 over WhatsApp if your plans change on the day.",
        ],
      },
    ],
    faqs: [
      { question: "How far is Quba Mosque from Madinah hotels?", answer: "About 5 km south of the Haram — a 10–15 minute drive from central Madinah outside peak hours." },
      { question: "Why is Quba Mosque considered the first mosque in Islam?", answer: "The Prophet Muhammad (peace be upon him) laid its foundation stones personally upon his arrival in Madinah in 622 CE (1 AH), making it the first mosque built in Islamic history." },
      { question: "Is it true that praying at Quba equals the reward of Umrah?", answer: "According to Islamic tradition, performing two voluntary rakahs at Quba Mosque carries a reward equivalent to performing an Umrah — a major reason it's prioritised on almost every Madinah Ziyarat itinerary." },
      { question: "How far is Quba Mosque from Madinah Airport?", answer: "Approximately 20–25 km, which makes it a practical stop to combine with an arrival or departure transfer if your flight schedule allows." },
      { question: "Is Quba Mosque wheelchair accessible?", answer: "Yes — it is the most physically accessible of all the Madinah Ziyarat sites, with flat grounds and parking directly adjacent to the entrance, unlike the mountain sites in Makkah." },
      { question: "How long should I plan to spend at Quba Mosque?", answer: "Most visitors spend 30 minutes to an hour, enough time to pray and walk the courtyards and gardens without feeling rushed." },
      { question: "Can women visit and pray at Quba Mosque?", answer: "Yes. The mosque has clearly separated, well-maintained areas for men and women and is open to all Muslim visitors throughout the day." },
      { question: "What is the best time of day to visit Quba Mosque?", answer: "Timing your visit shortly before one of the five daily prayers lets you pray the recommended two rakahs inside. Mid-morning and the hour before Asr tend to be quieter than the periods around Maghrib and Isha." },
      { question: "Is Quba Mosque busy during Ramadan?", answer: "Yes, along with the rest of Madinah — traffic and visitor numbers rise across the city during Ramadan, though Quba's short distance from central hotels means the impact is smaller than at sites further out." },
      { question: "Will the driver wait while I pray and visit?", answer: "Yes. Your driver waits for the full duration of your visit — whether that's a quick 30-minute stop or a longer, unhurried visit — with no separate charge within the agreed booking." },
      { question: "Can I combine Quba Mosque with other Ziyarat sites in one trip?", answer: "Yes, easily — Quba's central, accessible location makes it the natural starting or ending point for a wider circuit covering Masjid al-Qiblatain, Mount Uhud, and the Seven Mosques." },
      { question: "What should I wear to visit Quba Mosque?", answer: "Standard modest mosque attire — an abaya and headscarf for women, clean and modest clothing for men. Comfortable shoes are fine since there is no climbing or rough terrain involved." },
      { question: "Is photography allowed inside Quba Mosque?", answer: "Photography is generally acceptable in the courtyards and exterior areas. Inside the prayer halls, keep it discreet and avoid photographing worshippers directly." },
      { question: "How far is Quba Mosque from Masjid al-Qiblatain?", answer: "Approximately 8–9 km, making the two a natural pairing on the same half-day outing." },
      { question: "Can I visit Quba Mosque on my way to or from Madinah Airport?", answer: "Yes — many pilgrims combine a Quba stop with their arrival or departure transfer, since it sits roughly on the route between the airport and central Madinah." },
      { question: "Is the price for a Quba Mosque transfer fixed?", answer: "Yes. Pricing is agreed before you travel based on vehicle type and expected waiting time, with no meter and no surge charges added afterward." },
      { question: "What vehicle should I choose for a family visit to Quba Mosque?", answer: "An SUV comfortably suits most families; Quba's flat, accessible layout makes it one of the easiest Ziyarat sites to visit with children or elderly relatives together." },
    ],
    relatedTransferSlugs: ["madinah-to-qiblatain-mosque", "madinah-to-mount-uhud", "madinah-to-seven-mosques"],
    relatedRouteSlugs: ["makkah-to-madinah", "jeddah-to-madinah"],
    keywords: [
      "madinah to quba mosque taxi",
      "quba mosque transfer",
      "quba mosque private car",
      "first mosque in islam taxi",
      "madinah quba taxi service",
      "quba mosque distance from haram",
      "quba mosque prayer reward umrah",
      "best time to visit quba mosque",
    ],
  },
  {
    slug: "madinah-to-mount-uhud",
    category: "attraction",
    from: "Madinah",
    to: "Mount Uhud",
    h1: "Mount Uhud & the Martyrs' Cemetery: Private Taxi from Madinah",
    metaTitle: "Mount Uhud Transfer | Private Taxi Tour Madinah",
    metaDescription:
      "Private car and waiting driver from your Madinah hotel to Mount Uhud and the martyrs' cemetery — distances, visiting etiquette, timings, fixed pricing.",
    intro:
      "Mount Uhud, north of Madinah, is the site of the Battle of Uhud and the resting place of its martyrs, including Hamza ibn Abd al-Muttalib, the Prophet's uncle. A private car and waiting driver take you there in minutes, and this page covers the real distances, visiting etiquette, and best times to go.",
    distance: "approx. 6 km north of the Haram",
    duration: "1–2 hours with waiting",
    heroImage: "/images/ziyarat/mount-uhud.webp",
    heroAlt: "Mount Uhud in Madinah, site of the Battle of Uhud",
    highlights: [
      "Site of the Battle of Uhud and its martyrs' cemetery",
      "Resting place of Hamza ibn Abd al-Muttalib, the Prophet's uncle",
      "6 km, flat and fully accessible — no climbing required",
      "Quiet, respectful visiting etiquette explained",
    ],
    sections: [
      {
        heading: "Why Mount Uhud matters",
        paragraphs: [
          "Mount Uhud rises to the north of Madinah, about 6 km from Masjid an-Nabawi, and is remembered as the site of the Battle of Uhud in 625 CE (3 AH) — one of the pivotal early battles of Islamic history, fought between the Muslims of Madinah and the Quraysh of Makkah. At the foot of the mountain lies the cemetery of the martyrs who fell in the battle, most notably Hamza ibn Abd al-Muttalib, the Prophet's uncle and one of the most celebrated figures of early Islam, whose grave is enclosed within the cemetery grounds.",
          "The Prophet is reported to have visited Uhud regularly after the battle, and the site carries a solemnity that visitors consistently describe as different in character from the other Ziyarat stops — less about architecture or scenery, more about quiet remembrance. The mountain itself functions as a striking natural backdrop to the cemetery rather than a destination to climb; almost no visitor itinerary involves ascending it, which sets Uhud apart from the mountain sites in Makkah.",
        ],
      },
      {
        heading: "Route: how you get there from your Madinah hotel",
        paragraphs: [
          "Pickup is typically from a central Madinah hotel near Masjid an-Nabawi. Your driver takes the direct road north — a short, well-maintained drive with no seasonal access restrictions, unlike the Hajj sites in Makkah. The area around the cemetery has been developed with proper visitor facilities and parking in recent years, so the drop-off point is close to the entrance itself.",
          "Many pilgrims combine Uhud with other northern Madinah sites on the same trip, since <a href='/madinah/madinah-to-seven-mosques'>the Seven Mosques</a> and <a href='/madinah/madinah-to-qiblatain-mosque'>Masjid al-Qiblatain</a> both sit in roughly the same direction from central Madinah.",
        ],
      },
      {
        heading: "Distance at a glance",
        paragraphs: [
          "<strong>From Masjid an-Nabawi / central hotels:</strong> approximately 6 km — a 12–15 minute drive.<br/><strong>From Prince Mohammad bin Abdulaziz International Airport (MED):</strong> approximately 20 km.<br/><strong>From Quba Mosque:</strong> approximately 10–11 km, on the opposite side of the city.<br/><strong>From Masjid al-Qiblatain:</strong> approximately 4–5 km.<br/><strong>From the Seven Mosques:</strong> approximately 3–4 km, the closest pairing of any two Madinah Ziyarat sites.",
        ],
      },
      {
        heading: "Travel time and the best time to visit",
        paragraphs: [
          "The drive from central Madinah takes 12 to 15 minutes in normal traffic, rising to 20–25 minutes during Ramadan evenings and the weeks around Hajj as citywide traffic increases. Because Uhud is a memorial and cemetery site rather than a mosque with prayer-time significance, there's no single 'correct' time tied to worship — but mornings and the hour before Maghrib tend to be quieter and more conducive to the reflective mood the site calls for, while midday can bring larger coach-tour groups.",
          "<strong>Seasonal note:</strong> Madinah's more moderate climate compared to Makkah means Uhud is comfortable to visit across most of the day, though summer afternoons are still best avoided given the site's limited shade.",
        ],
      },
      {
        heading: "Visiting the martyrs' cemetery: etiquette and what to expect",
        paragraphs: [
          "The cemetery at the base of Mount Uhud is treated with particular respect, and visitors are asked to behave accordingly — this is a place for quiet reflection and the offering of salutations, not a general sightseeing stop. Loud conversation, photography of graves at close range, and casual behaviour are discouraged; your driver can explain the layout and history of the site without offering religious interpretation, leaving reflection to you.",
          "<strong>Entry restrictions:</strong> none for Muslim visitors; the site is open during daylight hours. <strong>Photography:</strong> permitted at a respectful distance from the graves themselves; close-up photography of the cemetery is discouraged out of respect for the site's solemnity. <strong>Dress code:</strong> standard modest dress as expected throughout Madinah. <strong>Accessibility:</strong> the cemetery and surrounding memorial area are flat and accessible to wheelchair users and elderly visitors — no climbing is involved or expected. <strong>Estimated visit duration:</strong> 30–45 minutes for a typical, unhurried visit.",
        ],
      },
      {
        heading: "Nearby attractions to combine with your visit",
        paragraphs: [
          "Uhud's northern location makes it a natural pairing with <a href='/madinah/madinah-to-seven-mosques'>the Seven Mosques</a>, just 3–4 km away — the closest distance between any two sites in the Madinah cluster — and with <a href='/madinah/madinah-to-qiblatain-mosque'>Masjid al-Qiblatain</a>, roughly 4–5 km away. <a href='/madinah/madinah-to-quba-mosque'>Quba Mosque</a>, on the opposite (southern) side of the city, is better suited to a separate leg of the same day or a different outing entirely given the extra distance involved.",
          "For the full Madinah Ziyarat circuit in one booking, see our <a href='/ziyarat-taxi-service'>Ziyarat taxi service</a>, and for wider trip planning, our <a href='/blog/madinah-ziyarat-historic-sites-guide'>Madinah Ziyarat historic sites guide</a> covers the background of each stop in more depth.",
        ],
      },
      {
        heading: "Suggested itineraries",
        paragraphs: [
          "<strong>2-hour visit:</strong> drive to Uhud, 30–45 minutes at the cemetery and memorial area, return.<br/><strong>Half-day (3–4 hours):</strong> Uhud, then the Seven Mosques, then Masjid al-Qiblatain — all three northern sites in one comfortable loop.<br/><strong>Full day (6–7 hours):</strong> Uhud combined with Quba Mosque, Qiblatain, and the Seven Mosques — the complete Madinah circuit.<br/><strong>Family itinerary:</strong> Uhud's flat, open memorial grounds are comfortable for children, though the site's solemn tone is worth explaining to younger visitors beforehand.<br/><strong>Elderly-friendly itinerary:</strong> Uhud alone, or paired with the nearby Seven Mosques — both involve minimal walking from the vehicle.",
        ],
      },
      {
        heading: "Which vehicle to choose",
        paragraphs: [
          "<strong>Solo travellers:</strong> a sedan is comfortable for this short route.<br/><strong>Couples:</strong> the same sedan class suits well.<br/><strong>Families (3–5 people):</strong> an SUV gives everyone comfortable space, particularly if combining Uhud with nearby sites the same trip.<br/><strong>Groups (6+):</strong> a van or minibus for one shared price.<br/><strong>Elderly travellers:</strong> any vehicle works well given Uhud's flat, accessible layout; an SUV remains a comfortable default for easier entry.<br/><strong>Wheelchair users:</strong> Uhud is fully accessible — flat ground and close parking make it one of the easiest Ziyarat sites to visit for anyone with mobility needs.",
        ],
      },
      {
        heading: "Booking, pricing, and why pilgrims choose us for this transfer",
        paragraphs: [
          "Tell us your hotel, group size, and preferred timing, and we confirm a fixed, all-inclusive price with waiting time included, before you travel — no meter, no surge pricing. Book directly over WhatsApp through our <a href='/get-quote'>get a quote</a> page.",
          "Every driver is licensed and background-checked, and the vehicle is exclusively yours for the trip. Support is available 24/7 over WhatsApp, and for pilgrims arriving by air, we monitor flight status on connected airport-transfer bookings so a delayed arrival doesn't disrupt your Ziyarat plans.",
        ],
      },
    ],
    faqs: [
      { question: "How far is Mount Uhud from Madinah hotels?", answer: "About 6 km north of the Haram, a 12–15 minute drive from central Madinah in normal traffic." },
      { question: "What happened at Mount Uhud?", answer: "It was the site of the Battle of Uhud in 625 CE (3 AH), one of the early battles of Islamic history. The martyrs' cemetery at the base of the mountain, including the grave of Hamza ibn Abd al-Muttalib, is the focus of most visits today." },
      { question: "Who is buried at the Uhud martyrs' cemetery?", answer: "The cemetery holds the graves of the martyrs who fell in the Battle of Uhud, most notably Hamza ibn Abd al-Muttalib, the Prophet's uncle and one of the most celebrated figures in early Islamic history." },
      { question: "Can I climb Mount Uhud?", answer: "The mountain itself is not a typical climbing destination for visitors — almost everyone visits the cemetery and memorial area at its base rather than ascending the peak, unlike the mountain sites in Makkah." },
      { question: "How should I behave at the martyrs' cemetery?", answer: "The site calls for quiet reflection and respectful conduct — offering salutations rather than loud conversation or casual sightseeing. Close-up photography of the graves is discouraged." },
      { question: "Is Mount Uhud wheelchair accessible?", answer: "Yes. The cemetery and memorial grounds are flat and fully accessible, with parking close to the entrance — no climbing is involved or expected." },
      { question: "Will the driver wait while I visit?", answer: "Yes. Tell us how long you'd like at the site and your driver will wait or arrange a return pickup at a time that suits you." },
      { question: "How long should I plan to spend at Mount Uhud?", answer: "Most visitors spend 30 to 45 minutes for an unhurried, respectful visit to the cemetery and memorial area." },
      { question: "Is photography allowed at the martyrs' cemetery?", answer: "Photography is generally acceptable at a respectful distance; close-up photography of the graves themselves is discouraged out of respect for the site." },
      { question: "How far is Mount Uhud from the Seven Mosques?", answer: "Approximately 3–4 km — the shortest distance between any two Ziyarat sites in Madinah, making them an easy same-trip pairing." },
      { question: "How far is Mount Uhud from Quba Mosque?", answer: "Approximately 10–11 km, since the two sites sit on opposite sides of the city — better suited to separate legs of a full-day circuit than a single quick pairing." },
      { question: "What is the best time of day to visit Mount Uhud?", answer: "Mornings and the hour before Maghrib tend to be quieter and better suited to the site's reflective tone; midday can bring larger coach-tour groups." },
      { question: "Is Mount Uhud busy during Ramadan?", answer: "Traffic across Madinah increases during Ramadan, adding roughly 10 minutes to the drive, though the site itself remains manageable to visit comfortably." },
      { question: "What should I wear to visit the martyrs' cemetery?", answer: "Standard modest dress as expected throughout Madinah. No special footwear is needed since the ground is flat and there's no climbing involved." },
      { question: "Can I combine Mount Uhud with other Ziyarat sites in one trip?", answer: "Yes — Uhud pairs naturally with the nearby Seven Mosques and Masjid al-Qiblatain for a half-day northern Madinah circuit, or with Quba Mosque as part of a full-day booking." },
      { question: "Is the price for a Mount Uhud transfer fixed?", answer: "Yes. Pricing is agreed before travel based on vehicle type and expected waiting time, with no meter and no surge charges." },
    ],
    relatedTransferSlugs: ["madinah-to-quba-mosque", "madinah-to-seven-mosques", "madinah-to-qiblatain-mosque"],
    relatedRouteSlugs: ["makkah-to-madinah", "jeddah-to-madinah"],
    keywords: [
      "madinah to mount uhud taxi",
      "uhud transfer madinah",
      "mount uhud private car",
      "uhud martyrs cemetery taxi",
      "madinah uhud taxi service",
      "hamza grave uhud",
      "battle of uhud site visit",
      "mount uhud distance from haram",
    ],
  },
  {
    slug: "madinah-to-qiblatain-mosque",
    category: "attraction",
    from: "Madinah",
    to: "Masjid al-Qiblatain",
    h1: "Masjid al-Qiblatain: Private Taxi Tour from Madinah",
    metaTitle: "Masjid al-Qiblatain Transfer | Private Taxi Madinah",
    metaDescription:
      "Private car and waiting driver from your Madinah hotel to Masjid al-Qiblatain, the Mosque of the Two Qiblas — distances, visiting details, fixed pricing.",
    intro:
      "Masjid al-Qiblatain is the only mosque in Islamic history where the direction of prayer changed during a prayer itself — from Jerusalem to the Kaaba in Makkah. A private car and waiting driver take you there in minutes, with the real distances, timings, and visiting details covered here.",
    distance: "approx. 8–9 km northwest of the Haram",
    duration: "1–2 hours with waiting",
    heroImage: "/images/ziyarat/masjid-al-qiblatain.webp",
    heroAlt: "Masjid al-Qiblatain in Madinah, the Mosque of the Two Qiblas",
    highlights: [
      "The only mosque where the Qibla changed mid-prayer",
      "A quieter, more reflective alternative to the busier sites",
      "Easily paired with Quba Mosque or the Seven Mosques",
      "Fixed pricing and family-friendly vehicles",
    ],
    sections: [
      {
        heading: "Why Masjid al-Qiblatain matters",
        paragraphs: [
          "Masjid al-Qiblatain — literally the Mosque of the Two Qiblas — takes its name from a pivotal event in early Islamic history: during the early Madinan period, Muslims prayed facing Jerusalem (Bayt al-Maqdis). According to tradition, the divine command to change the direction of prayer to the Kaaba in Makkah came while the Prophet Muhammad (peace be upon him) was leading a congregation in prayer at this very mosque, and the worshippers turned mid-prayer to complete it facing the new direction — the only such recorded instance in Islamic history.",
          "The current building has been rebuilt and modernised several times, most recently in the 1980s and again in more recent renovations, but its architecture still commemorates the dual-direction history: the prayer hall's design references both the original and current Qibla orientations. Compared to Quba Mosque, Masjid al-Qiblatain typically receives fewer visitors, giving it a quieter, more contemplative atmosphere well suited to unhurried reflection.",
        ],
      },
      {
        heading: "Route: how you get there from your Madinah hotel",
        paragraphs: [
          "The mosque sits northwest of Masjid an-Nabawi, in an area with several other small historic mosques from the early Islamic period. Your driver takes a direct route from your central Madinah hotel, with no seasonal access restrictions — the drive is straightforward year-round.",
          "Because Masjid al-Qiblatain sits in the same general northern district as <a href='/madinah/madinah-to-mount-uhud'>Mount Uhud</a> and <a href='/madinah/madinah-to-seven-mosques'>the Seven Mosques</a>, many visitors combine all three into a single northern Madinah circuit.",
        ],
      },
      {
        heading: "Distance at a glance",
        paragraphs: [
          "<strong>From Masjid an-Nabawi / central hotels:</strong> approximately 8–9 km — a 12–18 minute drive.<br/><strong>From Prince Mohammad bin Abdulaziz International Airport (MED):</strong> approximately 18–22 km.<br/><strong>From Quba Mosque:</strong> approximately 8–9 km, on the opposite (southern) side of the city.<br/><strong>From Mount Uhud:</strong> approximately 4–5 km.<br/><strong>From the Seven Mosques:</strong> approximately 2–3 km, the closest pairing in the whole Madinah cluster.",
        ],
      },
      {
        heading: "Travel time and the best time to visit",
        paragraphs: [
          "In normal traffic, the drive from central Madinah takes 12 to 18 minutes, rising modestly during Ramadan evenings and Hajj-season peaks. As with Quba, timing a visit around one of the five daily prayers lets you pray inside the mosque itself, and the comparatively quieter visitor numbers here mean even peak prayer times feel less crowded than at Quba Mosque.",
          "<strong>Best time to visit:</strong> mid-morning or the hour before Asr tends to be calmest; the mosque's smaller scale means it rarely feels genuinely crowded even during busier periods, unlike some of the larger Ziyarat sites.",
        ],
      },
      {
        heading: "Visiting Masjid al-Qiblatain: what to expect",
        paragraphs: [
          "The mosque is open to visitors and worshippers throughout the day, with clearly separated, well-maintained areas for men and women. Most visitors spend 20 to 40 minutes here — enough time to pray, view the dual-Qibla architectural detailing, and appreciate the quieter atmosphere compared to the busier Ziyarat stops.",
          "<strong>Entry restrictions:</strong> none for Muslim visitors. <strong>Photography:</strong> generally acceptable in courtyards and exterior areas; keep it discreet inside the prayer halls. <strong>Dress code:</strong> standard modest mosque attire. <strong>Accessibility:</strong> flat, paved grounds with nearby parking make this a fully accessible site for wheelchair users and elderly visitors. <strong>Estimated visit duration:</strong> 20–40 minutes.",
        ],
      },
      {
        heading: "Nearby attractions to combine with your visit",
        paragraphs: [
          "Masjid al-Qiblatain's northern location makes <a href='/madinah/madinah-to-seven-mosques'>the Seven Mosques</a> (2–3 km away, the closest pairing anywhere in the Madinah cluster) and <a href='/madinah/madinah-to-mount-uhud'>Mount Uhud</a> (4–5 km away) natural same-trip companions. <a href='/madinah/madinah-to-quba-mosque'>Quba Mosque</a>, on the opposite side of the city, is better suited to a separate leg of a full-day circuit.",
        ],
      },
      {
        heading: "Suggested itineraries",
        paragraphs: [
          "<strong>2-hour visit:</strong> drive to the mosque, pray and view the architecture (20–40 min), return.<br/><strong>Half-day (3–4 hours):</strong> Masjid al-Qiblatain, then the Seven Mosques, then Mount Uhud — three sites in the same northern district.<br/><strong>Full day (6–7 hours):</strong> add Quba Mosque for the complete Madinah circuit.<br/><strong>Family itinerary:</strong> the mosque's flat, quiet grounds are comfortable for visits with children.<br/><strong>Elderly-friendly itinerary:</strong> Masjid al-Qiblatain alone, or paired with the nearby Seven Mosques — both involve minimal walking.",
        ],
      },
      {
        heading: "Which vehicle to choose",
        paragraphs: [
          "<strong>Solo travellers:</strong> a sedan is ideal for this short route.<br/><strong>Couples:</strong> the same sedan class works well.<br/><strong>Families (3–5 people):</strong> an SUV gives everyone comfortable space, particularly if combining multiple northern Madinah sites.<br/><strong>Groups (6+):</strong> a van or minibus for one shared price.<br/><strong>Elderly travellers:</strong> any vehicle suits well given the site's flat, accessible layout.<br/><strong>Wheelchair users:</strong> Masjid al-Qiblatain is fully accessible, with flat grounds and close parking.",
        ],
      },
      {
        heading: "Booking, pricing, and why pilgrims choose us for this transfer",
        paragraphs: [
          "Tell us your hotel and preferred timing, and we confirm a fixed, all-inclusive price with waiting time included. Book over WhatsApp via our <a href='/get-quote'>get a quote</a> page, or combine this stop with a wider northern Madinah circuit covering Uhud and the Seven Mosques.",
          "Every driver is licensed and background-checked, and the vehicle is exclusively yours for the trip, with support available 24/7 over WhatsApp.",
        ],
      },
    ],
    faqs: [
      { question: "How far is Masjid al-Qiblatain from Madinah hotels?", answer: "About 8–9 km northwest of the Haram, a 12–18 minute drive from central Madinah." },
      { question: "Why is it called the Mosque of the Two Qiblas?", answer: "The name refers to the historic change in the direction of prayer from Jerusalem to the Kaaba in Makkah, which tradition holds took place during a prayer led by the Prophet at this mosque." },
      { question: "Can I pray at Masjid al-Qiblatain?", answer: "Yes. It is an active mosque open to worshippers and visitors throughout the day, with clearly separated areas for men and women." },
      { question: "Is Masjid al-Qiblatain busier or quieter than Quba Mosque?", answer: "Generally quieter — it receives fewer visitors than Quba, giving it a more contemplative, less crowded atmosphere even during peak prayer times." },
      { question: "How far is Masjid al-Qiblatain from the Seven Mosques?", answer: "Approximately 2–3 km — the closest distance between any two sites in the Madinah Ziyarat cluster." },
      { question: "How far is Masjid al-Qiblatain from Mount Uhud?", answer: "Approximately 4–5 km, making them a natural pairing on the same northern Madinah outing." },
      { question: "Will the driver wait while I visit and pray?", answer: "Yes. Tell us how long you'd like at the mosque and we'll wait or arrange a return pickup at a time that suits you." },
      { question: "How long should I plan to spend at Masjid al-Qiblatain?", answer: "20 to 40 minutes is typical, enough time to pray and view the dual-Qibla architectural detailing without feeling rushed." },
      { question: "Is Masjid al-Qiblatain wheelchair accessible?", answer: "Yes, it has flat, paved grounds and nearby parking, making it fully accessible for wheelchair users and elderly visitors." },
      { question: "Is photography allowed inside Masjid al-Qiblatain?", answer: "Photography is generally acceptable in courtyards and exterior areas; keep it discreet inside the prayer halls." },
      { question: "Can I combine Masjid al-Qiblatain with Quba Mosque?", answer: "Yes, though they sit on opposite sides of the city roughly 8–9 km apart — better suited to two legs of a full-day circuit than a single quick pairing." },
      { question: "What should I wear to visit Masjid al-Qiblatain?", answer: "Standard modest mosque attire — an abaya and headscarf for women, clean and modest clothing for men." },
      { question: "Is Masjid al-Qiblatain busy during Ramadan?", answer: "Visitor and traffic numbers rise modestly across Madinah during Ramadan, though this mosque's smaller scale means it stays comparatively calm." },
      { question: "Is the price fixed for a Masjid al-Qiblatain transfer?", answer: "Yes. Pricing is agreed before travel based on vehicle type and expected waiting time, with no meter and no surge charges." },
    ],
    relatedTransferSlugs: ["madinah-to-quba-mosque", "madinah-to-seven-mosques", "madinah-to-mount-uhud"],
    relatedRouteSlugs: ["makkah-to-madinah", "jeddah-to-madinah"],
    keywords: [
      "madinah to qiblatain mosque taxi",
      "masjid al-qiblatain transfer",
      "mosque of two qiblas taxi",
      "qiblatain private car",
      "madinah qiblatain taxi service",
      "qiblatain distance from haram",
      "why qibla changed",
      "masjid al-qiblatain history",
    ],
  },
  {
    slug: "madinah-to-seven-mosques",
    category: "attraction",
    from: "Madinah",
    to: "the Seven Mosques",
    h1: "The Seven Mosques (Sab'a Masajid): Private Taxi from Madinah",
    metaTitle: "Seven Mosques Madinah Transfer | Private Taxi Tour",
    metaDescription:
      "Private car and waiting driver from your Madinah hotel to the Seven Mosques (Sab'a Masajid) near the Battle of the Trench site — distances, fixed pricing.",
    intro:
      "The Seven Mosques (Sab'a Masajid) mark the western Madinah area where the Muslims dug the defensive trench during the Battle of the Trench in 627 CE. A private car and waiting driver take you there in minutes, with the real distances, the individual mosques, and visiting details covered here.",
    distance: "approx. 4 km northwest of the Haram",
    duration: "1–2 hours with waiting",
    highlights: [
      "Small cluster of historic mosques marking the Battle of the Trench site",
      "The closest Ziyarat pairing to Mount Uhud in the whole cluster",
      "Easy to walk between all the mosques in one visit",
      "Fixed pricing and family-friendly vehicles",
    ],
    sections: [
      {
        heading: "Why the Seven Mosques matter",
        paragraphs: [
          "The Seven Mosques, known locally as Sab'a Masajid, are a small cluster of historic mosques on the western side of Madinah, marking the area associated with the Battle of the Trench (Ghazwat al-Khandaq) in 627 CE (5 AH) — one of the notable defensive battles of early Islamic history, in which the Muslims of Madinah dug a trench around the exposed side of the city to repel a much larger confederate army. The site takes its name from the small mosques historically built to commemorate the positions held during the battle.",
          "The mosques are not uniform in size or historical weight, and vary by source, but the cluster is most commonly identified as including Masjid al-Fath (the largest and most prominent, marking where the Prophet is said to have prayed for victory), along with smaller mosques associated with companions who held key positions during the battle, including Salman al-Farisi (who proposed the trench strategy itself), Abu Bakr, Umar ibn al-Khattab, and Ali ibn Abi Talib. Several of the smaller structures have been rebuilt or restored over the centuries, and not all remain in active use today — Masjid al-Fath is the one most visitors spend the majority of their time at.",
        ],
      },
      {
        heading: "Route: how you get there from your Madinah hotel",
        paragraphs: [
          "The site sits a few kilometres northwest of Masjid an-Nabawi, in the same general district as Mount Uhud and Masjid al-Qiblatain. Your driver takes a direct route from your central Madinah hotel, with straightforward year-round access.",
          "Because the Seven Mosques sit closest of any Ziyarat site to <a href='/madinah/madinah-to-mount-uhud'>Mount Uhud</a> — just 3–4 km apart — most visitors combine the two into a single northern Madinah outing.",
        ],
      },
      {
        heading: "Distance at a glance",
        paragraphs: [
          "<strong>From Masjid an-Nabawi / central hotels:</strong> approximately 4 km — a 10–12 minute drive.<br/><strong>From Prince Mohammad bin Abdulaziz International Airport (MED):</strong> approximately 18–20 km.<br/><strong>From Mount Uhud:</strong> approximately 3–4 km, the closest pairing anywhere in the Madinah Ziyarat cluster.<br/><strong>From Masjid al-Qiblatain:</strong> approximately 2–3 km.<br/><strong>From Quba Mosque:</strong> approximately 8 km, on the opposite side of the city.",
        ],
      },
      {
        heading: "Travel time and the best time to visit",
        paragraphs: [
          "The drive from central Madinah takes 10 to 12 minutes in normal traffic. As a small, quiet cluster rather than a major single-mosque destination, the Seven Mosques rarely feel crowded even during Ramadan or peak Umrah season — mid-morning or the late afternoon both work comfortably.",
        ],
      },
      {
        heading: "Visiting the complex",
        paragraphs: [
          "The mosques are set within a small, walkable area, making it easy to see several of them on foot from a single parking point rather than needing to drive between each one. Masjid al-Fath, the most prominent of the group, remains an active place of worship; several of the smaller surrounding mosques are more historical markers than functioning prayer spaces today, and are viewed from outside rather than entered.",
          "<strong>Entry restrictions:</strong> Masjid al-Fath is open to worshippers during prayer times and to visitors during the day; the smaller surrounding mosques are generally viewed from outside. <strong>Photography:</strong> permitted at the exterior of all the mosques and around the site generally. <strong>Dress code:</strong> standard modest dress. <strong>Accessibility:</strong> the site is set on gently sloping, mostly paved ground, reasonably accessible though not as flat as Quba Mosque. <strong>Estimated visit duration:</strong> 30–45 minutes to see the cluster.",
        ],
      },
      {
        heading: "Nearby attractions to combine with your visit",
        paragraphs: [
          "The Seven Mosques' central northern location makes it easy to combine with <a href='/madinah/madinah-to-mount-uhud'>Mount Uhud</a> (3–4 km away) and <a href='/madinah/madinah-to-qiblatain-mosque'>Masjid al-Qiblatain</a> (2–3 km away) — the three together form a natural half-day northern Madinah circuit. <a href='/madinah/madinah-to-quba-mosque'>Quba Mosque</a>, on the opposite side of the city, is better suited to a separate leg of a full-day booking.",
        ],
      },
      {
        heading: "Suggested itineraries",
        paragraphs: [
          "<strong>2-hour visit:</strong> drive to the site, walk the cluster (30–45 min), return.<br/><strong>Half-day (3–4 hours):</strong> Seven Mosques, then Mount Uhud, then Masjid al-Qiblatain — the full northern circuit.<br/><strong>Full day (6–7 hours):</strong> add Quba Mosque for the complete Madinah Ziyarat circuit.<br/><strong>Family itinerary:</strong> the small, walkable cluster is easy for children to explore alongside adults.<br/><strong>Elderly-friendly itinerary:</strong> Seven Mosques paired with the very close Masjid al-Qiblatain, minimising overall travel and walking.",
        ],
      },
      {
        heading: "Which vehicle to choose",
        paragraphs: [
          "<strong>Solo travellers:</strong> a sedan is ideal for this short route.<br/><strong>Couples:</strong> the same sedan class works well.<br/><strong>Families (3–5 people):</strong> an SUV gives comfortable space, useful when combining with nearby northern Madinah sites.<br/><strong>Groups (6+):</strong> a van or minibus for one shared price.<br/><strong>Elderly travellers:</strong> most vehicles suit well; the walkable cluster keeps distances short once you arrive.<br/><strong>Wheelchair users:</strong> the site's gently sloping, mostly paved ground is reasonably accessible, though less flat than Quba Mosque — let us know any specific needs when booking.",
        ],
      },
      {
        heading: "Booking, pricing, and why pilgrims choose us for this transfer",
        paragraphs: [
          "Tell us your hotel and preferred timing, and we confirm a fixed, all-inclusive price with waiting time included. Book over WhatsApp via our <a href='/get-quote'>get a quote</a> page, ideally combined with Mount Uhud given how close the two sites sit to each other.",
          "Every driver is licensed and background-checked, and the vehicle is exclusively yours for the trip, with support available 24/7 over WhatsApp.",
        ],
      },
    ],
    faqs: [
      { question: "How far are the Seven Mosques from Madinah hotels?", answer: "About 4 km northwest of the Haram, a 10–12 minute drive from central Madinah." },
      { question: "What is the historical significance of the Seven Mosques?", answer: "The site marks the area associated with the Battle of the Trench (Ghazwat al-Khandaq) in 627 CE, when the Muslims of Madinah dug a defensive trench to repel a much larger confederate army." },
      { question: "What are the names of the Seven Mosques?", answer: "The cluster is most commonly identified as including Masjid al-Fath (the largest, where the Prophet is said to have prayed for victory) along with smaller mosques associated with companions including Salman al-Farisi, Abu Bakr, Umar ibn al-Khattab, and Ali ibn Abi Talib, though exact naming varies somewhat by source." },
      { question: "Can I enter all the mosques in the cluster?", answer: "Masjid al-Fath, the largest, remains an active place of worship open to visitors and worshippers. Several of the smaller surrounding mosques are historical markers viewed from outside rather than entered." },
      { question: "Can I visit all the mosques on foot?", answer: "Yes. They're set within a small, walkable area, so a visit typically takes in the cluster together on foot from a single parking point." },
      { question: "Will the driver wait while I visit?", answer: "Yes. Tell us how long you'd like at the site and we'll wait or arrange a return pickup at a time that suits you." },
      { question: "How far are the Seven Mosques from Mount Uhud?", answer: "Approximately 3–4 km — the closest pairing of any two sites in the Madinah Ziyarat cluster, making them an easy same-trip combination." },
      { question: "How far are the Seven Mosques from Masjid al-Qiblatain?", answer: "Approximately 2–3 km, another close and natural pairing for the same outing." },
      { question: "How long should I plan for a visit to the Seven Mosques?", answer: "30 to 45 minutes is typical for walking the small cluster and seeing the key mosques." },
      { question: "Is the site accessible for elderly visitors?", answer: "The ground is gently sloping and mostly paved — reasonably accessible, though not as flat as Quba Mosque. Combining it with the very close Masjid al-Qiblatain keeps overall walking to a minimum." },
      { question: "Is photography allowed at the Seven Mosques?", answer: "Yes, photography of the exteriors and the site generally is permitted." },
      { question: "What should I wear to visit the Seven Mosques?", answer: "Standard modest dress as expected throughout Madinah." },
      { question: "Can I combine the Seven Mosques with other historic mosques?", answer: "Yes — the Seven Mosques, Masjid al-Qiblatain, and Mount Uhud form a natural half-day northern Madinah circuit, and Quba Mosque can be added for a full-day booking." },
      { question: "Is the price fixed for a Seven Mosques transfer?", answer: "Yes. The fare is agreed before travel and includes the driver's waiting time, with no meter and no surge pricing." },
    ],
    relatedTransferSlugs: ["madinah-to-quba-mosque", "madinah-to-qiblatain-mosque", "madinah-to-mount-uhud"],
    relatedRouteSlugs: ["makkah-to-madinah", "jeddah-to-madinah"],
    keywords: [
      "madinah to seven mosques taxi",
      "sab'a masajid transfer",
      "seven mosques private car",
      "battle of the trench site taxi",
      "madinah seven mosques taxi service",
      "masjid al-fath madinah",
      "seven mosques names",
      "seven mosques distance from haram",
    ],
  },
];

export const madinahAttractions: PointTransfer[] = raw.map((t) => ({
  ...t,
  citySlug: "madinah",
}));
