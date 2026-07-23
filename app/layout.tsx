import type { Metadata, Viewport } from "next";
import { Geist, Noto_Sans_Arabic } from "next/font/google";
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
import { cn } from "@/lib/utils";

// Runs before paint (placed in <head>, no client hydration needed) so
// /ar/* pages get dir="rtl"/lang="ar" with zero flash — while keeping this
// layout itself a plain static Server Component. Reading the real pathname
// here (e.g. via next/headers) would opt EVERY page in the app into dynamic
// rendering, which would undo static generation for the ~350 English pages
// just to serve ~15 Arabic ones correctly, so this stays a tiny inline script
// instead. The server-rendered default (lang="en" dir="ltr") is already
// correct for the vast majority of pages.
const SET_LOCALE_ATTRS = `
if (location.pathname.startsWith('/ar')) {
  document.documentElement.lang = 'ar';
  document.documentElement.dir = 'rtl';
}
`;

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Arabic pages use a dedicated Arabic-script webfont — Geist has minimal
// Arabic glyph coverage. Loaded site-wide (small subset) so it's ready the
// moment a route under /ar renders; only applied via the `font-arabic`
// class, which is itself only added when the current route is Arabic.
const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
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
    <html
      lang="en"
      dir="ltr"
      className={cn(geist.variable, notoSansArabic.variable, "h-full")}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts -- must run before paint, see SET_LOCALE_ATTRS comment above */}
        <script dangerouslySetInnerHTML={{ __html: SET_LOCALE_ATTRS }} />
      </head>
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
