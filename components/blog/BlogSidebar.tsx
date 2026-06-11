import Link from "next/link";
import { MessageCircle, Send, Plane, ArrowRight, Mail, Route as RouteIcon, BookOpen } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import { listPublishedBlogs } from "@/lib/blogs";
import { routes } from "@/data/routes";
import { formatBlogDate } from "@/lib/format";

const quickLinks = [
  { label: "Airport Transfers", href: "/airport-transfers", icon: Plane },
  { label: "Umrah Transport", href: "/umrah-taxi-service", icon: BookOpen },
  { label: "Makkah Taxi Service", href: "/taxi-service/makkah", icon: RouteIcon },
  { label: "Madinah Taxi Service", href: "/taxi-service/madinah", icon: RouteIcon },
];

/** Sticky sidebar for blog posts: conversion CTAs + discovery links. */
export async function BlogSidebar({ currentSlug }: { currentSlug: string }) {
  const latest = (await listPublishedBlogs({ limit: 6 }))
    .filter((b) => b.slug !== currentSlug)
    .slice(0, 5);
  const popularRoutes = routes.slice(0, 5);
  const waMessage = "Hello! I'd like to book a private transfer in Saudi Arabia.";

  return (
    <div className="space-y-6">
      {/* Booking CTA card */}
      <div className="rounded-2xl bg-navy p-6 text-white shadow-sm">
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
          className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gold text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
        >
          <Send className="size-4" /> Get a Quote
        </Link>
      </div>

      {/* Quick service links */}
      <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wide text-navy">Popular Services</h3>
        <ul className="mt-3 space-y-1">
          {quickLinks.map((l) => {
            const Icon = l.icon;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-navy/80 transition-colors hover:bg-gold/10 hover:text-navy"
                >
                  <Icon className="size-4 text-gold" /> {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Popular routes */}
      <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wide text-navy">Popular Routes</h3>
        <ul className="mt-3 space-y-1">
          {popularRoutes.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/routes/${r.slug}`}
                className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm text-navy/80 transition-colors hover:bg-gold/10 hover:text-navy"
              >
                <span>{r.from}</span>
                <ArrowRight className="size-3.5 text-gold" />
                <span>{r.to}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Latest blogs */}
      {latest.length > 0 && (
        <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wide text-navy">Latest Guides</h3>
          <ul className="mt-3 space-y-3">
            {latest.map((b) => (
              <li key={b.id}>
                <Link href={`/blog/${b.slug}`} className="group block">
                  <span className="block text-sm font-semibold leading-snug text-navy group-hover:text-gold">
                    {b.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {formatBlogDate(b.publishedAt ?? b.createdAt)} · {b.readingTime} min read
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact card */}
      <div className="rounded-2xl border border-border bg-muted/40 p-5 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wide text-navy">Need Help?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team replies quickly with a fixed quote for your journey.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-3 flex items-center gap-2 text-sm font-medium text-navy hover:text-gold"
        >
          <Mail className="size-4 text-gold" /> {siteConfig.email}
        </a>
        <Link
          href="/contact"
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
        >
          Contact us <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
