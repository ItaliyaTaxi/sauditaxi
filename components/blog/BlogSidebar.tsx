import Link from "next/link";
import { MessageCircle, Send, Plane, ArrowRight, Mail, Route as RouteIcon, BookOpen } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import { listPublishedBlogs } from "@/lib/blogs";
import { routes } from "@/data/routes";
import { formatBlogDate } from "@/lib/format";

const defaultQuickLinks = [
  { label: "Airport Transfers", href: "/airport-transfers", icon: Plane },
  { label: "Umrah Transport", href: "/umrah-taxi-service", icon: BookOpen },
  { label: "Makkah Taxi Service", href: "/taxi-service/makkah", icon: RouteIcon },
  { label: "Madinah Taxi Service", href: "/taxi-service/madinah", icon: RouteIcon },
];

const topicServiceLinks: { match: string[]; links: { label: string; href: string; icon: typeof Plane }[] }[] = [
  {
    match: ["umrah", "miqat", "ihram"],
    links: [
      { label: "Umrah Transport", href: "/umrah-taxi-service", icon: BookOpen },
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport", icon: Plane },
      { label: "Jeddah → Makkah Route", href: "/routes/jeddah-to-makkah", icon: RouteIcon },
      { label: "Madinah Airport Transfer", href: "/airport-transfer/madinah-airport", icon: Plane },
    ],
  },
  {
    match: ["jeddah-airport", "jeddah airport", "king-abdulaziz", "landing-at-jeddah"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport", icon: Plane },
      { label: "Jeddah → Makkah Transfer", href: "/routes/jeddah-to-makkah", icon: RouteIcon },
      { label: "Airport Transfers", href: "/airport-transfers", icon: Plane },
      { label: "Makkah Taxi Service", href: "/taxi-service/makkah", icon: RouteIcon },
    ],
  },
  {
    match: ["dammam", "bahrain", "khobar"],
    links: [
      { label: "Dammam → Bahrain Transfer", href: "/routes/dammam-to-bahrain", icon: RouteIcon },
      { label: "Dammam → Riyadh Transfer", href: "/routes/dammam-to-riyadh", icon: RouteIcon },
      { label: "Khobar → Riyadh Transfer", href: "/routes/khobar-to-riyadh", icon: RouteIcon },
      { label: "Airport Transfers", href: "/airport-transfers", icon: Plane },
    ],
  },
  {
    match: ["hajj", "ziyarat"],
    links: [
      { label: "Ziyarat Taxi Service", href: "/ziyarat-taxi-service", icon: BookOpen },
      { label: "Hajj Transport", href: "/hajj-transport-service", icon: RouteIcon },
      { label: "Umrah Transport", href: "/umrah-taxi-service", icon: BookOpen },
      { label: "Makkah Taxi Service", href: "/taxi-service/makkah", icon: RouteIcon },
    ],
  },
  {
    match: ["madinah", "medina", "madina"],
    links: [
      { label: "Madinah Airport Transfer", href: "/airport-transfer/madinah-airport", icon: Plane },
      { label: "Madinah Taxi Service", href: "/taxi-service/madinah", icon: RouteIcon },
      { label: "Umrah Transport", href: "/umrah-taxi-service", icon: BookOpen },
      { label: "Makkah → Madinah Route", href: "/routes/makkah-to-madinah", icon: RouteIcon },
    ],
  },
];

function getQuickLinks(slug: string) {
  const s = slug.toLowerCase();
  for (const topic of topicServiceLinks) {
    if (topic.match.some((kw) => s.includes(kw))) {
      return topic.links;
    }
  }
  return defaultQuickLinks;
}


/** Sticky sidebar for blog posts: conversion CTAs + discovery links. */
export async function BlogSidebar({ currentSlug }: { currentSlug: string }) {
  const latest = (await listPublishedBlogs({ limit: 6 }))
    .filter((b) => b.slug !== currentSlug)
    .slice(0, 5);
  const popularRoutes = routes.slice(0, 5);
  const waMessage = "Hello! I'd like to book a private transfer in Saudi Arabia.";
  const quickLinks = getQuickLinks(currentSlug);

  return (
    <div className="space-y-6">
      {/* Booking CTA card */}
      <div className="rounded-2xl bg-midnight p-6 text-white">
        <h3 className="text-lg font-bold">Book Your Transfer</h3>
        <p className="mt-1 text-sm text-white/75">
          Fixed prices, professional drivers, fast reply.
        </p>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
        >
          <MessageCircle className="size-4" /> WhatsApp Us
        </a>
        <Link
          href="/get-quote"
          className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brass text-sm font-semibold text-midnight transition-colors hover:bg-brass-soft"
        >
          <Send className="size-4" /> Get a Quote
        </Link>
      </div>

      {/* Quick service links */}
      <div className="rounded-2xl border border-hairline bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Popular Services</h3>
        <ul className="mt-3 space-y-1">
          {quickLinks.map((l) => {
            const Icon = l.icon;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-ink-soft transition-colors hover:bg-sand/50 hover:text-ink"
                >
                  <Icon className="size-4 text-brass" /> {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Popular routes */}
      <div className="rounded-2xl border border-hairline bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Popular Routes</h3>
        <ul className="mt-3 space-y-1">
          {popularRoutes.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/routes/${r.slug}`}
                className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm text-ink-soft transition-colors hover:bg-sand/50 hover:text-ink"
              >
                <span>{r.from}</span>
                <ArrowRight className="size-3.5 text-brass rtl:rotate-180" />
                <span>{r.to}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest blogs */}
      {latest.length > 0 && (
        <div className="rounded-2xl border border-hairline bg-white p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Latest Guides</h3>
          <ul className="mt-3 space-y-3">
            {latest.map((b) => (
              <li key={b.id}>
                <Link href={`/blog/${b.slug}`} className="group block">
                  <span className="block text-sm font-semibold leading-snug text-ink group-hover:text-brass">
                    {b.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-muted">
                    {formatBlogDate(b.publishedAt ?? b.createdAt)} · {b.readingTime} min read
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact card */}
      <div className="rounded-2xl border border-hairline bg-sand/30 p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Need Help?</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Our team replies quickly with a fixed quote for your journey.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-3 flex items-center gap-2 text-sm font-medium text-ink hover:text-brass"
        >
          <Mail className="size-4 text-brass" /> {siteConfig.email}
        </a>
        <Link
          href="/contact"
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-brass"
        >
          Contact us <ArrowRight className="size-4 rtl:rotate-180" />
        </Link>
      </div>
    </div>
  );
}
