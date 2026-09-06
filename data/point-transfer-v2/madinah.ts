import type { PointTransferV2Page } from "./types";

/**
 * Madinah V2 point-transfer pages — Ziyarat/historical-site pages and the
 * Haramain railway station transfer, redesigned onto PointTransferV2View.
 * Replaces data/madinah/attractions.ts and railway.ts (see
 * lib/point-transfers-v2.ts). Written respectfully and factually about the
 * sacred sites — no invented hadith, dates or rulings.
 */
export const madinahPointTransfersV2: PointTransferV2Page[] = [
  {
    slug: "madinah-to-quba-mosque",
    citySlug: "madinah",
    from: "Madinah",
    to: "Quba Mosque",
    h1: "Quba Mosque: Private Taxi Tour from Madinah",
    metaTitle: "Quba Mosque Transfer | Private Taxi Tour Madinah",
    metaDescription:
      "Private car and waiting driver from your Madinah hotel to Quba Mosque, the first mosque in Islam — distances, best visiting times, prayer info, fixed pricing.",
    distance: "~5 km south of the Haram",
    duration: "1-2 hrs with waiting",
    heroAlt: "Quba Mosque in Madinah, the first mosque built in Islam",
    content: {
      category: "attraction",
      eyebrow: "The first mosque in Islam",
      dek: "Founded by the Prophet Muhammad (peace be upon him) himself on arrival in Madinah — and, unlike the mountain sites in Makkah, fully flat and accessible.",
      stats: [
        { label: "From the Haram", value: "~5 km" },
        { label: "Visit duration", value: "30-60 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          image: { src: "/images/ziyarat/quba-mosque.webp", alt: "Quba Mosque in Madinah, the first mosque built in Islam" },
          paragraphs: [
            "Quba Mosque's foundation stones were laid by the Prophet Muhammad (peace be upon him) personally upon his arrival in Madinah in 622 CE (1 AH), in the earliest days after the Hijrah — the first mosque ever built in Islam. Tradition holds that performing two voluntary rakahs here carries a reward equivalent to an Umrah, which is why praying inside, not just viewing it, is the priority for most visitors. It's consistently the most-visited Ziyarat site in Madinah, and virtually every pilgrim's itinerary includes it.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and timing",
          stats: [
            { label: "From central hotels", value: "~5 km, 10-15 min" },
            { label: "From Madinah Airport", value: "~20-25 km" },
            { label: "From Makkah", value: "~430 km" },
          ],
          paragraphs: [
            "Because Quba is a functioning mosque rather than a site with fixed opening hours, timing your visit around one of the five daily prayers is the natural approach. Mid-morning and the hour before Asr tend to be quieter than around Maghrib and Isha.",
          ],
        },
        {
          type: "checklist",
          heading: "Visiting Quba",
          items: [
            "The most physically accessible Ziyarat site in either holy city — flat, paved, close parking, no climbing",
            "No entry fee or gate — freely open during daily hours",
            "Many pilgrims combine a stop here with an arrival or departure transfer from Madinah Airport",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "Masjid al-Qiblatain (8-9 km away)", href: "/madinah/madinah-to-qiblatain-mosque" },
            { label: "Mount Uhud", href: "/madinah/madinah-to-mount-uhud" },
            { label: "The Seven Mosques", href: "/madinah/madinah-to-seven-mosques" },
          ],
        },
      ],
      faqs: [
        { question: "Why is Quba Mosque considered the first mosque in Islam?", answer: "The Prophet Muhammad (peace be upon him) laid its foundation stones personally upon arriving in Madinah in 622 CE, making it the first mosque built in Islamic history." },
        { question: "Is it true that praying at Quba equals the reward of Umrah?", answer: "According to Islamic tradition, two voluntary rakahs at Quba Mosque carry a reward equivalent to an Umrah — a major reason it's prioritised on almost every itinerary." },
        { question: "Is Quba Mosque wheelchair accessible?", answer: "Yes — the most physically accessible of all the Madinah Ziyarat sites, with flat grounds and parking directly adjacent to the entrance." },
        { question: "What is the best time of day to visit?", answer: "Shortly before one of the five daily prayers, so you can pray the recommended two rakahs inside — mid-morning and the hour before Asr tend to be quieter." },
      ],
    },
  },
  {
    slug: "madinah-to-mount-uhud",
    citySlug: "madinah",
    from: "Madinah",
    to: "Mount Uhud",
    h1: "Mount Uhud & the Martyrs' Cemetery: Private Taxi from Madinah",
    metaTitle: "Mount Uhud Transfer | Private Taxi Tour Madinah",
    metaDescription:
      "Private car and waiting driver from your Madinah hotel to Mount Uhud and the martyrs' cemetery — distances, visiting etiquette, timings, fixed pricing.",
    distance: "~6 km north of the Haram",
    duration: "1-2 hrs with waiting",
    heroAlt: "Mount Uhud in Madinah, site of the Battle of Uhud",
    content: {
      category: "attraction",
      eyebrow: "Site of quiet remembrance",
      dek: "The resting place of the martyrs of the Battle of Uhud, including Hamza ibn Abd al-Muttalib — a place for reflection, not a mountain to climb.",
      stats: [
        { label: "From the Haram", value: "~6 km" },
        { label: "Visit duration", value: "30-45 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          image: { src: "/images/ziyarat/mount-uhud.webp", alt: "Mount Uhud in Madinah, site of the Battle of Uhud" },
          paragraphs: [
            "Mount Uhud is remembered as the site of the Battle of Uhud in 625 CE (3 AH), one of the pivotal early battles of Islamic history. At its foot lies the cemetery of the martyrs who fell, most notably Hamza ibn Abd al-Muttalib, the Prophet's uncle. The mountain itself functions as a backdrop rather than a destination to climb — almost no visitor itinerary involves ascending it, unlike the mountain sites in Makkah.",
          ],
        },
        {
          type: "checklist",
          heading: "Visiting etiquette",
          items: [
            "A place for quiet reflection and salutations, not general sightseeing — loud conversation and casual behaviour are discouraged",
            "Photography permitted at a respectful distance; close-up photos of graves are discouraged",
            "Flat and fully accessible to wheelchair users and elderly visitors — no climbing involved",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and timing",
          stats: [
            { label: "From central hotels", value: "~6 km, 12-15 min" },
            { label: "From the Seven Mosques", value: "~3-4 km — the closest pairing" },
          ],
          paragraphs: [
            "As a memorial site rather than a mosque, there's no prayer-time tie — mornings and the hour before Maghrib tend to be quieter and better suited to the reflective mood.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "The Seven Mosques", href: "/madinah/madinah-to-seven-mosques" },
            { label: "Masjid al-Qiblatain", href: "/madinah/madinah-to-qiblatain-mosque" },
          ],
        },
      ],
      faqs: [
        { question: "What happened at Mount Uhud?", answer: "It was the site of the Battle of Uhud in 625 CE, one of the early battles of Islamic history — the martyrs' cemetery at its base, including the grave of Hamza ibn Abd al-Muttalib, is the focus of most visits today." },
        { question: "Can I climb Mount Uhud?", answer: "The mountain isn't a typical climbing destination — almost everyone visits the cemetery and memorial area at its base rather than ascending, unlike the mountain sites in Makkah." },
        { question: "How should I behave at the martyrs' cemetery?", answer: "The site calls for quiet reflection and respectful conduct — offering salutations rather than loud conversation or casual sightseeing." },
        { question: "Is it wheelchair accessible?", answer: "Yes — the cemetery and memorial grounds are flat and fully accessible, with parking close to the entrance." },
      ],
    },
  },
  {
    slug: "madinah-to-qiblatain-mosque",
    citySlug: "madinah",
    from: "Madinah",
    to: "Masjid al-Qiblatain",
    h1: "Masjid al-Qiblatain: Private Taxi Tour from Madinah",
    metaTitle: "Masjid al-Qiblatain Transfer | Private Taxi Madinah",
    metaDescription:
      "Private car and waiting driver from your Madinah hotel to Masjid al-Qiblatain, the Mosque of the Two Qiblas — distances, visiting details, fixed pricing.",
    distance: "~8-9 km northwest of the Haram",
    duration: "1-2 hrs with waiting",
    heroAlt: "Masjid al-Qiblatain in Madinah, the Mosque of the Two Qiblas",
    content: {
      category: "attraction",
      eyebrow: "Where the Qibla changed mid-prayer",
      dek: "The only mosque in Islamic history where the direction of prayer changed during the prayer itself — quieter and more contemplative than Quba.",
      stats: [
        { label: "From the Haram", value: "~8-9 km" },
        { label: "Visit duration", value: "20-40 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          image: { src: "/images/ziyarat/masjid-al-qiblatain.webp", alt: "Masjid al-Qiblatain in Madinah, the Mosque of the Two Qiblas" },
          paragraphs: [
            "Muslims in early Madinah prayed facing Jerusalem. Tradition holds that the command to change the direction of prayer to the Kaaba in Makkah came while the Prophet Muhammad (peace be upon him) was leading a congregation at this mosque, and worshippers turned mid-prayer to complete it facing the new direction — the only recorded instance of its kind. The building has been rebuilt several times but still receives fewer visitors than Quba, giving it a quieter, more contemplative atmosphere.",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and timing",
          stats: [
            { label: "From central hotels", value: "~8-9 km, 12-18 min" },
            { label: "From the Seven Mosques", value: "~2-3 km — closest pairing in the cluster" },
            { label: "From Mount Uhud", value: "~4-5 km" },
          ],
          paragraphs: [
            "As with Quba, timing a visit around a daily prayer lets you pray inside — the mosque's smaller scale means it rarely feels genuinely crowded even at busier times.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "The Seven Mosques", href: "/madinah/madinah-to-seven-mosques" },
            { label: "Mount Uhud", href: "/madinah/madinah-to-mount-uhud" },
            { label: "Quba Mosque", href: "/madinah/madinah-to-quba-mosque" },
          ],
        },
      ],
      faqs: [
        { question: "Why is it called the Mosque of the Two Qiblas?", answer: "The name refers to the historic change in prayer direction from Jerusalem to the Kaaba, which tradition holds took place during a prayer led by the Prophet at this mosque." },
        { question: "Is it busier or quieter than Quba Mosque?", answer: "Generally quieter — it receives fewer visitors, giving it a more contemplative atmosphere even during peak prayer times." },
        { question: "Can I pray here?", answer: "Yes, it's an active mosque open to worshippers and visitors throughout the day, with separated areas for men and women." },
        { question: "Is it wheelchair accessible?", answer: "Yes, flat and paved with nearby parking." },
      ],
    },
  },
  {
    slug: "madinah-to-seven-mosques",
    citySlug: "madinah",
    from: "Madinah",
    to: "the Seven Mosques",
    h1: "The Seven Mosques (Sab'a Masajid): Private Taxi from Madinah",
    metaTitle: "Seven Mosques Madinah Transfer | Private Taxi Tour",
    metaDescription:
      "Private car and waiting driver from your Madinah hotel to the Seven Mosques (Sab'a Masajid) near the Battle of the Trench site — distances, fixed pricing.",
    distance: "~4 km northwest of the Haram",
    duration: "1-2 hrs with waiting",
    content: {
      category: "attraction",
      eyebrow: "Marking the Battle of the Trench",
      dek: "A small, walkable cluster of historic mosques on the site where the Muslims of Madinah dug a defensive trench in 627 CE.",
      stats: [
        { label: "From the Haram", value: "~4 km" },
        { label: "Visit duration", value: "30-45 min", emphasis: true },
      ],
      blocks: [
        {
          type: "locationContext",
          heading: "Why this site matters",
          paragraphs: [
            "The Seven Mosques (Sab'a Masajid) mark the area associated with the Battle of the Trench (Ghazwat al-Khandaq) in 627 CE, when the Muslims dug a trench around the exposed side of the city to repel a much larger confederate army. The cluster is most commonly identified as including Masjid al-Fath — the largest, where the Prophet is said to have prayed for victory — alongside smaller mosques associated with companions including Salman al-Farisi, Abu Bakr, Umar ibn al-Khattab and Ali ibn Abi Talib, though naming varies somewhat by source.",
          ],
        },
        {
          type: "checklist",
          heading: "Visiting the cluster",
          items: [
            "Set within a small, walkable area — see several mosques on foot from a single parking point",
            "Masjid al-Fath remains active for worship; several smaller mosques are historical markers viewed from outside",
            "Gently sloping, mostly paved ground — reasonably accessible, though less flat than Quba",
          ],
        },
        {
          type: "timingPanel",
          heading: "Distance and timing",
          stats: [
            { label: "From central hotels", value: "~4 km, 10-12 min" },
            { label: "From Mount Uhud", value: "~3-4 km — closest pairing in the cluster" },
          ],
          paragraphs: [
            "A small, quiet cluster rather than a major single destination — rarely feels crowded even during Ramadan or peak Umrah season.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related visits",
          links: [
            { label: "Mount Uhud", href: "/madinah/madinah-to-mount-uhud" },
            { label: "Masjid al-Qiblatain", href: "/madinah/madinah-to-qiblatain-mosque" },
          ],
        },
      ],
      faqs: [
        { question: "What is the historical significance of the Seven Mosques?", answer: "The site marks the area associated with the Battle of the Trench in 627 CE, when the Muslims dug a defensive trench to repel a much larger confederate army." },
        { question: "What are the names of the Seven Mosques?", answer: "Most commonly identified as including Masjid al-Fath along with smaller mosques associated with Salman al-Farisi, Abu Bakr, Umar ibn al-Khattab and Ali ibn Abi Talib, though naming varies by source." },
        { question: "Can I visit all the mosques on foot?", answer: "Yes — they sit within a small, walkable area, so a visit typically covers the cluster together from a single parking point." },
        { question: "How far from Mount Uhud?", answer: "Approximately 3-4 km — the closest pairing of any two sites in the Madinah Ziyarat cluster." },
      ],
    },
  },
  {
    slug: "madinah-train-station-to-prophets-mosque",
    citySlug: "madinah",
    from: "Madinah Haramain High-Speed Railway Station (Knowledge City)",
    to: "Prophet's Mosque (Al-Masjid an-Nabawi) & Central Hotels",
    h1: "Madinah Train Station to Prophet's Mosque Private Transfer",
    metaTitle: "Madinah Train Station to Prophet's Mosque Taxi | Transfer",
    metaDescription:
      "Private transfer from Madinah Haramain Train Station to Prophet's Mosque (Al-Masjid an-Nabawi) & Markaziyah hotels. Fixed rates, luggage help, 24/7.",
    distance: "~8-11 km depending on hotel location",
    duration: "15-20 min",
    content: {
      category: "railway",
      eyebrow: "Bullet train to the Haram district",
      dek: "The Haramain line runs a comfortable 2 hours from Makkah, ~1.5 hours from Jeddah — the last mile into the pedestrian-managed Markaziyah district needs a driver who knows the access ramps.",
      stats: [
        { label: "Distance", value: "~8-11 km" },
        { label: "Drive time", value: "15-20 min", emphasis: true },
      ],
      blocks: [
        {
          type: "prepPanel",
          heading: "Before your train arrives",
          items: [
            "Share your train time so the driver is positioned at the passenger arrival exit",
            "Tell us which Markaziyah district (Northern, Southern or Western) your hotel sits in, if you know it",
            "Onward pilgrims: ask about pairing this with a Quba Mosque stop on the way to your hotel",
          ],
        },
        {
          type: "locationContext",
          heading: "Where the station sits",
          paragraphs: [
            "The station is in Knowledge Economic City along King Abdulaziz Road, roughly 9 km east of the Prophet's Mosque. The pedestrian zone around the Haram is divided into Northern, Southern and Western Markaziyah districts, with vehicular access tightly managed to preserve pedestrian safety — drivers on this route know the ring-road network and the vehicular access points for the major hotel clusters.",
          ],
        },
        {
          type: "vehiclePlanning",
          heading: "Vehicles for pilgrim groups",
          paragraphs: [
            "Pilgrim groups travelling with elderly relatives, young children or substantial luggage benefit from door-to-door transit — spacious family vans and full-size SUVs keep the group together with generous legroom and boot space.",
          ],
        },
        {
          type: "relatedLinks",
          heading: "Related",
          links: [
            { label: "Quba Mosque", href: "/madinah/madinah-to-quba-mosque" },
            { label: "Makkah to Madinah transfer", href: "/routes/makkah-to-madinah" },
          ],
        },
      ],
      faqs: [
        { question: "How far is the station from the Prophet's Mosque?", answer: "Approximately 8-11 km; the drive typically takes 15-20 minutes under normal traffic." },
        { question: "Where does the driver meet passengers?", answer: "At the designated passenger arrival pickup point outside the main station concourse, with help for your bags." },
        { question: "Can the driver drop us right at our hotel entrance?", answer: "Yes — drivers navigate the ring-road network and hotel arrival ramps to get as close as pedestrian security permits." },
        { question: "I'm continuing to Makkah or Jeddah by train — can you book my return to the station too?", answer: "Yes — timed around your onward departure, so you're not cutting it close on a fixed train schedule." },
      ],
    },
  },
];
