import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
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

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Taxi Service in Saudi Arabia`,
    // Page titles are already complete and keyword-rich, so we don't append the
    // brand here — doing so pushed every title past the ~60-char SEO limit.
    template: `%s`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "taxi service in Saudi Arabia",
    "Saudi Arabia airport transfer",
    "private taxi Saudi Arabia",
    "Umrah taxi service",
    "Makkah to Madinah taxi",
    "intercity taxi Saudi Arabia",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
  },
  twitter: { card: "summary_large_image", site: siteConfig.twitterHandle },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`${geist.variable} h-full`} suppressHydrationWarning>
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
