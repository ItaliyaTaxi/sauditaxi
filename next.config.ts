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
        source: "/:path*",
        has: [{ type: "host", value: "www.saudiprivatetransfers.com" }],
        destination: "https://saudiprivatetransfers.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
