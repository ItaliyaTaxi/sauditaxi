/**
 * Hero background images. Themed dark SVG scenes live in /public/images/heroes
 * and sit behind PageHeader's dark overlay so hero text stays readable.
 *
 * To use real photography later, drop a .webp into /public/images/heroes with
 * the SAME base name (e.g. makkah.webp) and update the path here — no other
 * code changes are needed. Per-item overrides are also supported via the
 * optional `heroImage` / `heroAlt` fields on each data item.
 */
const HEROES = "/images/heroes";

export const pageHeroes = {
  home: `${HEROES}/home.webp`,
  airport: `${HEROES}/airport.webp`,
  city: `${HEROES}/city.webp`,
  intercity: `${HEROES}/intercity.webp`,
  border: `${HEROES}/border.webp`,
  makkah: `${HEROES}/makkah.webp`,
  madinah: `${HEROES}/madina.webp`,
  taif: `${HEROES}/taif.webp`,
  eastern: `${HEROES}/eastern.webp`,
  // No photo supplied yet — keeps the themed SVG placeholder.
  desert: `${HEROES}/desert.svg`,
} as const;

export type HeroTheme = keyof typeof pageHeroes;

/** Backward-compatible aliases used by existing static pages. */
export const heroImages = {
  default: pageHeroes.home,
  road: pageHeroes.intercity,
  city: pageHeroes.city,
  airport: pageHeroes.airport,
  mosque: pageHeroes.makkah,
} as const;
export type HeroImageKey = keyof typeof heroImages;

export interface Hero {
  src: string;
  alt: string;
}

// ── Per-page hero mapping ────────────────────────────────────────────────────

const CITY_THEME: Record<string, HeroTheme> = {
  makkah: "makkah",
  madinah: "madinah",
  dammam: "eastern",
  khobar: "eastern",
  jubail: "eastern",
  hofuf: "eastern",
  "al-ahsa": "eastern",
  jazan: "eastern",
  yanbu: "eastern",
  taif: "taif",
  alula: "desert",
  tabuk: "desert",
  hail: "desert",
  najran: "desert",
};

/** Hero for a city page. Holy cities, the eastern coast, and desert/heritage
 * towns get themed scenes; everything else falls back to a city skyline. */
export function cityHero(slug: string, name: string): Hero {
  return {
    src: pageHeroes[CITY_THEME[slug] ?? "city"],
    alt: `Private taxi and transfer service in ${name}, Saudi Arabia`,
  };
}

export function airportHero(city: string): Hero {
  return {
    src: pageHeroes.airport,
    alt: `${city} airport transfer with a private chauffeur in Saudi Arabia`,
  };
}

export function routeHero(from: string, to: string): Hero {
  const theme: HeroTheme = /madinah|medina/i.test(to)
    ? "madinah"
    : /makkah|mecca/i.test(to)
      ? "makkah"
      : "intercity";
  return {
    src: pageHeroes[theme],
    alt: `Private taxi transfer from ${from} to ${to}, Saudi Arabia`,
  };
}

export function borderHero(country: string): Hero {
  return {
    src: pageHeroes.border,
    alt: `Private border transfer from Saudi Arabia to ${country}`,
  };
}

const SERVICE_THEME: Record<string, HeroTheme> = {
  "airport-transfers": "airport",
  "city-transfers": "city",
  "intercity-transfers": "intercity",
  "border-transfers": "border",
  "umrah-taxi-service": "makkah",
  "hajj-transport-service": "makkah",
  "ziyarat-taxi-service": "madinah",
  "hotel-transfers": "city",
};

export function serviceHero(slug: string, name: string): Hero {
  return {
    src: pageHeroes[SERVICE_THEME[slug] ?? "home"],
    alt: `${name} in Saudi Arabia`,
  };
}

/** Backward-compatible single-string helper (used by the ServicePage template). */
export function serviceHeroImage(slug: string): string {
  return pageHeroes[SERVICE_THEME[slug] ?? "home"];
}
