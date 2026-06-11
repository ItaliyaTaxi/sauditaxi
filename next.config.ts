import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
