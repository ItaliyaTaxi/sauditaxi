/**
 * Hero background images, grouped by theme. Used by HeroSection and PageHeader.
 * Images are dark SVG scenes designed to sit behind a dark overlay so hero
 * text stays readable on every page.
 */
export const heroImages = {
  default: "/images/hero-road.svg",
  road: "/images/hero-road.svg",
  city: "/images/hero-city.svg",
  airport: "/images/hero-airport.svg",
  mosque: "/images/hero-mosque.svg",
} as const;

export type HeroImageKey = keyof typeof heroImages;

/** Map a service slug to the most relevant hero image. */
export function serviceHeroImage(slug: string): string {
  switch (slug) {
    case "airport-transfers":
      return heroImages.airport;
    case "city-transfers":
    case "hotel-transfers":
      return heroImages.city;
    case "umrah-taxi-service":
    case "hajj-transport-service":
    case "ziyarat-taxi-service":
      return heroImages.mosque;
    case "intercity-transfers":
    case "border-transfers":
    default:
      return heroImages.road;
  }
}
