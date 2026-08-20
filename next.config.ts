import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve modern formats (AVIF/WebP) and a sensible set of responsive widths
  // so mobile devices download much smaller hero/blog images.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
  },

  // Long-term immutable caching for static assets in /public/images.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Canonicalise to the non-www apex domain with a single 301. (Vercel must
  // also have www.saudiprivatetransfers.com added so it gets a TLS cert.)
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.saudiprivatetransfers.com" }],
        destination: "https://saudiprivatetransfers.com/:path*",
        permanent: true,
      },
      // Blog posts renamed to their current slug. Each of these was 404ing in
      // Search Console; the destination is the live post covering the same
      // topic (confirmed against data/translations/ar.ts, which still had an
      // Arabic page's enPath pointing at the old English slug).
      {
        source: "/blog/king-fahd-causeway-private-taxi-guide",
        destination: "/blog/saudi-to-bahrain-taxi-king-fahd-causeway",
        permanent: true,
      },
      {
        source: "/blog/riyadh-airport-transfer-guide",
        destination: "/blog/riyadh-airport-transfer-business-travelers",
        permanent: true,
      },
      {
        source: "/blog/complete-umrah-transport-guide-2025",
        destination: "/blog/umrah-transport-makkah-madinah-guide",
        permanent: true,
      },
      {
        source: "/blog/private-taxi-vs-uber-careem-saudi-arabia",
        destination: "/blog/uber-vs-careem-vs-private-transfer-saudi-arabia",
        permanent: true,
      },
      // No live post covers the general tourist/expat angle this slug
      // targeted (the current Jeddah-arrival post is Umrah-pilgrim-specific),
      // so this redirects to the closest topical match rather than the
      // homepage.
      {
        source: "/blog/jeddah-airport-arrival-guide-tourist-expat",
        destination: "/blog/what-to-do-after-landing-at-jeddah-airport",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
