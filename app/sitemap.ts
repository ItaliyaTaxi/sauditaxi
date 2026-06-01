import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { routes } from "@/data/routes";
import { borders } from "@/data/borders";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
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

  return [
    ...staticPaths,
    ...servicePaths,
    ...cityPaths,
    ...airportPaths,
    ...routePaths,
    ...borderPaths,
  ].map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
