import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { routes } from "@/data/routes";
import { borders } from "@/data/borders";
import { services } from "@/data/services";
import { hotelCities } from "@/lib/hotel-transfers";
import { pointTransfers } from "@/lib/point-transfers";
import { listPublishedBlogs } from "@/lib/blogs";
import { arPages, arPath, getArPathForEnPath } from "@/data/translations/ar";
import { distancePages } from "@/data/distance-pages";

// Regenerate hourly so newly published blogs/pages enter the sitemap without a
// full redeploy (the sitemap pulls published posts live from the database).
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPaths: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/get-quote", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    // /intercity-transfers is intentionally NOT listed here — it's already
    // emitted once via servicePaths below (data/services.ts has a matching
    // entry with href: "/intercity-transfers"); listing it here too produced
    // a duplicate <url> entry in sitemap.xml.
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  ];

  const servicePaths = services.map((s) => ({
    path: s.href,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const cityPaths = cities.map((c) => ({
    path: `/taxi-service/${c.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const airportPaths = airports.map((a) => ({
    path: `/airport-transfer/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const routePaths = routes.map((r) => ({
    path: `/routes/${r.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const borderPaths = borders.map((b) => ({
    path: `/border-transfers/${b.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  // City airport-transfer hubs (parent pages for the hotel-transfer system).
  const cityHubPaths = hotelCities().map((c) => ({
    path: `/cities/${c.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  // The 174 individual hotel-transfer pages (airport ↔ hotel) 301-redirect to
  // their city hub's hotel table (proxy.ts) and are deliberately NOT listed
  // here — see HOTEL_TRANSFER_SIMILARITY.md for why. cityHubPaths above
  // carries the same content now. Point transfers (attractions, ports,
  // railways, services) are unaffected and still listed below.

  // Attraction / landmark transfer pages (point transfers).
  const pointTransferPaths = pointTransfers.map((t) => ({
    path: `/${t.citySlug}/${t.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Informational distance/travel-time pages — separate intent from the
  // commercial route pages above, see data/distance-pages.ts.
  const distancePagePaths = distancePages.map((p) => ({
    path: `/distance/${p.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const base = [
    ...staticPaths,
    ...servicePaths,
    ...cityPaths,
    ...airportPaths,
    ...routePaths,
    ...borderPaths,
    ...cityHubPaths,
    ...distancePagePaths,
    ...pointTransferPaths,
  ].map((entry) => {
    // Cross-link to the Arabic version, when one exists, for hreflang in the sitemap.
    const ar = getArPathForEnPath(entry.path);
    return {
      url: absoluteUrl(entry.path),
      lastModified: now,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      ...(ar
        ? { alternates: { languages: { en: absoluteUrl(entry.path), ar: absoluteUrl(ar) } } }
        : {}),
    };
  });

  // Published blog posts (pulled live from the database).
  const blogs = await listPublishedBlogs();
  const blogEntries: MetadataRoute.Sitemap = blogs.map((b) => {
    const path = `/blog/${b.slug}`;
    const ar = getArPathForEnPath(path);
    return {
      url: absoluteUrl(path),
      lastModified: new Date(b.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
      ...(ar ? { alternates: { languages: { en: absoluteUrl(path), ar: absoluteUrl(ar) } } } : {}),
    };
  });

  // Native Arabic pages (/ar/{slug}) — each cross-links back to its English
  // original. type: "hotel-transfer" (41 entries) 301-redirects to its Arabic
  // city-hub anchor (proxy.ts) and is excluded here, mirroring hotelTransfers
  // above; type: "city-hub" (5 entries, the Arabic /cities/{city} counterpart)
  // is included normally like every other type.
  const arEntries: MetadataRoute.Sitemap = arPages
    .filter((p) => p.type !== "hotel-transfer")
    .map((p) => ({
    url: absoluteUrl(arPath(p)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.type === "about" || p.type === "contact" ? 0.5 : 0.7,
    alternates: { languages: { en: absoluteUrl(p.enPath), ar: absoluteUrl(arPath(p)) } },
  }));
  // The Arabic homepage itself.
  arEntries.push({
    url: absoluteUrl("/ar"),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages: { en: absoluteUrl("/"), ar: absoluteUrl("/ar") } },
  });

  return [...base, ...blogEntries, ...arEntries];
}
