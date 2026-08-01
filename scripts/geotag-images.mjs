import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = "d:/Mine Projects/sauditaxi/public/images";
const OUT_DIR = "d:/Mine Projects/sauditaxi/public/images/ziyarat";
fs.mkdirSync(OUT_DIR, { recursive: true });

// Decimal degrees -> EXIF GPS rational-degree components [deg, min, sec-as-fraction]
function toDMS(dd) {
  const abs = Math.abs(dd);
  const deg = Math.floor(abs);
  const minFloat = (abs - deg) * 60;
  const min = Math.floor(minFloat);
  const sec = (minFloat - min) * 60;
  return `${deg}/1 ${min}/1 ${Math.round(sec * 100)}/100`;
}

const SITES = [
  {
    src: "cave of hira.jpg",
    out: "cave-of-hira-jabal-al-noor.webp",
    lat: 21.4577,
    lon: 39.8592,
    title: "Cave of Hira on Jabal al-Noor, Makkah",
    desc: "Jabal al-Noor (the Mountain of Light) near Makkah, home to the Cave of Hira where the first Qur'anic revelation was received.",
  },
  {
    src: "jabal-thawr.webp",
    out: "jabal-thawr.webp",
    lat: 21.3833,
    lon: 39.8172,
    title: "Jabal Thawr, Makkah",
    desc: "Jabal Thawr, the mountain south of Makkah where the Prophet Muhammad and Abu Bakr sheltered during the Hijrah.",
  },
  {
    src: "mina mountain.jpg",
    out: "mina.webp",
    lat: 21.4133,
    lon: 39.8933,
    title: "Mina, Makkah",
    desc: "Mina, the valley east of Makkah known for its tent city during Hajj and the site of the Jamarat.",
  },
  {
    src: "Muzdalifah.webp",
    out: "muzdalifah.webp",
    lat: 21.3833,
    lon: 39.9367,
    title: "Muzdalifah, Makkah",
    desc: "Muzdalifah, the open plain between Mina and Arafat where Hajj pilgrims gather overnight.",
  },
  {
    src: "arafat  mountatin.avif",
    out: "arafat-jabal-al-rahmah.webp",
    lat: 21.3547,
    lon: 39.9837,
    title: "Arafat and Jabal al-Rahmah, Makkah",
    desc: "The plain of Arafat and Jabal al-Rahmah (the Mount of Mercy), site of the Prophet's Farewell Sermon.",
  },
  {
    src: "makkah ziarat.jpg",
    out: "makkah-ziyarat-tour.webp",
    lat: 21.4225,
    lon: 39.8262,
    title: "Makkah Ziyarat Tour",
    desc: "Historic Islamic sites around Makkah visited on a private Ziyarat tour.",
  },
  {
    src: "Masjid-Quba.webp",
    out: "quba-mosque.webp",
    lat: 24.4392,
    lon: 39.6172,
    title: "Quba Mosque, Madinah",
    desc: "Quba Mosque in Madinah, the first mosque built in Islam, founded by the Prophet Muhammad.",
  },
  {
    src: "Masjid_al-Qiblatain.jpg",
    out: "masjid-al-qiblatain.webp",
    lat: 24.4699,
    lon: 39.5644,
    title: "Masjid al-Qiblatain, Madinah",
    desc: "Masjid al-Qiblatain (the Mosque of the Two Qiblas) in Madinah, where the direction of prayer changed during a prayer.",
  },
  {
    src: "mount uhad.jpg",
    out: "mount-uhud.webp",
    lat: 24.5044,
    lon: 39.6122,
    title: "Mount Uhud, Madinah",
    desc: "Mount Uhud in Madinah, site of the Battle of Uhud and its martyrs' cemetery.",
  },
];

const run = async () => {
  for (const site of SITES) {
    const srcPath = path.join(SRC_DIR, site.src);
    const outPath = path.join(OUT_DIR, site.out);
    if (!fs.existsSync(srcPath)) {
      console.error(`MISSING SOURCE: ${srcPath}`);
      continue;
    }

    await sharp(srcPath)
      .rotate() // apply any source orientation before stripping/rewriting EXIF
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 82 })
      .withExif({
        IFD0: {
          ImageDescription: site.desc,
          Artist: "Saudi Private Transfers",
          Copyright: "Saudi Private Transfers",
        },
        // libvips/sharp names the GPS IFD positionally as "IFD3", not "GPS".
        IFD3: {
          GPSLatitudeRef: site.lat >= 0 ? "N" : "S",
          GPSLatitude: toDMS(site.lat),
          GPSLongitudeRef: site.lon >= 0 ? "E" : "W",
          GPSLongitude: toDMS(site.lon),
        },
      })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`${site.out} <- ${site.src}  (${(stat.size / 1024).toFixed(0)} KB)`);
  }
};

run();
