import Link from "next/link";
import { MessageCircle, Send, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/**
 * Topic-to-commercial-page mapping.
 * When a blog slug contains any of the trigger keywords, the matching
 * contextual links are shown in addition to the default service links.
 */
const topicLinks: { match: string[]; links: { label: string; href: string }[] }[] = [
  {
    match: ["umrah", "miqat", "ihram"],
    links: [
      { label: "Umrah Transport Service", href: "/umrah-taxi-service" },
      { label: "Jeddah Airport → Makkah", href: "/routes/jeddah-to-makkah" },
      { label: "Madinah Airport Transfer", href: "/airport-transfer/madinah-airport" },
    ],
  },
  {
    match: ["jeddah-airport", "jeddah airport", "king-abdulaziz", "landing-at-jeddah"],
    links: [
      { label: "Jeddah Airport Transfer", href: "/airport-transfer/jeddah-airport" },
      { label: "Jeddah → Makkah Transfer", href: "/routes/jeddah-to-makkah" },
    ],
  },
  {
    match: ["dammam", "bahrain", "khobar", "riyadh"],
    links: [
      { label: "Dammam → Bahrain Transfer", href: "/routes/dammam-to-bahrain" },
      { label: "Dammam → Riyadh Transfer", href: "/routes/dammam-to-riyadh" },
    ],
  },
  {
    match: ["hajj", "ziyarat"],
    links: [
      { label: "Ziyarat Taxi Service", href: "/ziyarat-taxi-service" },
      { label: "Hajj Transport", href: "/hajj-transport-service" },
    ],
  },
  {
    match: ["madinah", "medina", "madina"],
    links: [
      { label: "Madinah Airport Transfer", href: "/airport-transfer/madinah-airport" },
      { label: "Madinah Taxi Service", href: "/taxi-service/madinah" },
    ],
  },
];

const defaultLinks = [
  { label: "Airport Transfers", href: "/airport-transfers" },
  { label: "Umrah Transport", href: "/umrah-taxi-service" },
  { label: "Makkah Taxi", href: "/taxi-service/makkah" },
  { label: "Madinah Taxi", href: "/taxi-service/madinah" },
];

function getContextualLinks(slug: string) {
  const s = slug.toLowerCase();
  for (const topic of topicLinks) {
    if (topic.match.some((kw) => s.includes(kw))) {
      return topic.links;
    }
  }
  return defaultLinks;
}

interface BlogInlineCtaProps {
  slug?: string;
}

/**
 * Compact in-content CTA shown on mobile (the sticky sidebar replaces it on
 * desktop). Placed after the intro and before the conclusion of each post.
 * When a slug is provided, contextual service links are shown based on topic.
 */
export function BlogInlineCta({ slug = "" }: BlogInlineCtaProps) {
  const wa = whatsappLink("Hello! I'd like to book a private transfer in Saudi Arabia.");
  const links = getContextualLinks(slug);

  return (
    <div className="my-8 rounded-2xl bg-navy p-5 text-white lg:hidden">
      <p className="font-bold">Need a private transfer in Saudi Arabia?</p>
      <p className="mt-1 text-sm text-white/75">Fixed prices, professional drivers, fast reply.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </a>
        <Link
          href="/get-quote"
          className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy"
        >
          <Send className="size-4" /> Get a Quote
        </Link>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/80">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 hover:text-gold">
            <ArrowRight className="size-3" /> {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
