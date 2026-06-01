import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Path beginning with "/". Used for canonical + OG url. */
  path: string;
  /** Override the OG image (absolute or root-relative). */
  image?: string;
  /** Set false for utility pages you don't want indexed. */
  index?: boolean;
}

/**
 * Build a complete Metadata object with canonical, Open Graph, and Twitter
 * tags. Every page funnels its SEO through this helper for consistency.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  index = true,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: siteConfig.twitterHandle,
    },
  };
}
