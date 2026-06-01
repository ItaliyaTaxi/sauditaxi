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
  // International format, digits only, used to build WhatsApp wa.me links.
  whatsappNumber: "966500000000",
  // Human-readable phone with tel: friendly value.
  phoneDisplay: "+966 50 000 0000",
  phoneHref: "+966500000000",
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
