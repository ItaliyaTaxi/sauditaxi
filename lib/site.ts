/**
 * Central site configuration. Update the brand, contact numbers, and domain
 * here — every page, schema block, and WhatsApp link reads from this file.
 */
export const siteConfig = {
  name: "Saudi Taxi Transfers",
  shortName: "Saudi Taxi",
  legalName: "Saudi Taxi Transfers",
  description:
    "Book private taxi service in Saudi Arabia for airports, cities, hotels, Umrah, Hajj, borders, and intercity transfers. Fast WhatsApp quotes available.",
  // Update to the live domain before deploying.
  url: "https://www.sauditaxitransfers.com",
  // Business WhatsApp number, international format (digits only). Kept here for
  // backend use and structured data only — it is intentionally NOT displayed
  // anywhere on the public site.
  whatsappNumber: "923148932631",
  // Same number in human/tel form. Used only by JSON-LD structured data
  // (not rendered visibly anywhere on the site).
  phoneDisplay: "+92 314 8932631",
  phoneHref: "+923148932631",
  email: "bookings@sauditaxitransfers.com",
  locale: "en_US",
  ogImage: "/og-image.svg",
  twitterHandle: "@sauditaxi",
  address: {
    streetAddress: "King Fahd Road",
    addressLocality: "Riyadh",
    addressRegion: "Riyadh Province",
    postalCode: "11564",
    addressCountry: "SA",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Absolute URL builder used by metadata, canonicals, and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
}

/**
 * Build a wa.me link with a prefilled message. Used by every WhatsApp CTA and
 * by the quote form on submit.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
