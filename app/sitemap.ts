import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { routes } from "@/data/routes";
import { borders } from "@/data/borders";
import { services } from "@/data/services";
import { hotelTransfers, hotelCities } from "@/lib/hotel-transfers";
import { pointTransfers } from "@/lib/point-transfers";
import { listPublishedBlogs } from "@/lib/blogs";

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
    { path: "/intercity-transfers", priority: 0.8, changeFrequency: "monthly" },
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

  // Generated airport ↔ hotel transfer route pages.
  const hotelTransferPaths = hotelTransfers.map((t) => ({
    path: t.path,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Attraction / landmark transfer pages (point transfers).
  const pointTransferPaths = pointTransfers.map((t) => ({
    path: `/${t.citySlug}/${t.slug}`,
    priority: 0.7,
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
    ...hotelTransferPaths,
    ...pointTransferPaths,
  ].map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  // Published blog posts (pulled live from the database).
  const blogs = await listPublishedBlogs();
  const blogEntries: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: absoluteUrl(`/blog/${b.slug}`),
    lastModified: new Date(b.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...base, ...blogEntries];
}
