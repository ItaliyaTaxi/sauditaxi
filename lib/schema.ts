import { absoluteUrl, siteConfig } from "@/lib/site";
import type { Faq } from "@/data/faqs";

/** A single JSON-LD node. Loosely typed on purpose. */
export type JsonLd = Record<string, unknown>;

const serviceTypes = [
  "Airport Transfer",
  "Private Taxi",
  "City Transfer",
  "Intercity Transfer",
  "Border Transfer",
  "Umrah Taxi Service",
  "Hajj Transport",
];

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.svg"),
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    sameAs: [] as string[],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
  };
}

export function taxiServiceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${siteConfig.name}`,
    description:
      "Private taxi, airport transfer, city transfer, border transfer and intercity transport service across Saudi Arabia.",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    serviceType: serviceTypes,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/get-quote"),
    },
  };
}

/** Generic Service node for service / city / route / border pages. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? "Taxi Service",
    url: absoluteUrl(input.path),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": input.areaServed ? "Place" : "Country",
      name: input.areaServed ?? "Saudi Arabia",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
