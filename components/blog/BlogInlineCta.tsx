import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/**
 * Compact in-content CTA shown on mobile (the sticky sidebar replaces it on
 * desktop). Placed after the intro and before the conclusion of each post.
 */
export function BlogInlineCta() {
  const wa = whatsappLink("Hello! I'd like to book a private transfer in Saudi Arabia.");
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
        <Link href="/airport-transfers" className="hover:text-gold">Airport Transfers</Link>
        <Link href="/umrah-taxi-service" className="hover:text-gold">Umrah Transport</Link>
        <Link href="/taxi-service/makkah" className="hover:text-gold">Makkah Taxi</Link>
        <Link href="/taxi-service/madinah" className="hover:text-gold">Madinah Taxi</Link>
      </div>
    </div>
  );
}
