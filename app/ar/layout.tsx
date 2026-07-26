import type { Metadata, Viewport } from "next";
import { Geist, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { StickyMobileQuote } from "@/components/StickyMobileQuote";
import { SiteShell } from "@/components/layout/SiteShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  taxiServiceSchema,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Taxi Service in Saudi Arabia`,
    template: `%s`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "ar_SA",
    url: siteConfig.url,
  },
  twitter: { card: "summary_large_image", site: siteConfig.twitterHandle },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
};

export default function ArabicRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn(geist.variable, notoSansArabic.variable, "h-full")}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteShell
          header={<Header />}
          footer={<Footer />}
          whatsapp={
            <>
              <StickyWhatsApp />
              <StickyMobileQuote />
            </>
          }
          schema={
            // Site-wide JSON-LD: shows on every public page for crawlers.
            <SchemaScript
              schema={[
                organizationSchema(),
                websiteSchema(),
                localBusinessSchema(),
                taxiServiceSchema(),
              ]}
            />
          }
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
