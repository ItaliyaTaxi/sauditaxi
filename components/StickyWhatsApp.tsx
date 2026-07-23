"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { getDictionary, localeFromPathname } from "@/lib/i18n";

/**
 * Floating, always-visible WhatsApp button. Rendered once in the root layout so
 * every page has the sticky chat CTA. Opens a WhatsApp chat with the business
 * number — the number itself is never displayed (it only lives in the wa.me link).
 *
 * A client component so it can detect /ar/* client-side without forcing the
 * whole app into dynamic rendering (see app/layout.tsx).
 */
export function StickyWhatsApp() {
  const dict = getDictionary(localeFromPathname(usePathname()));
  return (
    <div className="fixed bottom-24 end-4 z-50 flex flex-col items-end gap-3 lg:bottom-6 lg:end-6">
      <a
        href={whatsappLink(dict.stickyWhatsapp.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.stickyWhatsapp.ariaLabel}
        className="group flex items-center gap-2 rounded-full bg-[#25D366] py-3 ps-3 pe-4 text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
        <span className="hidden text-sm font-semibold sm:inline">{dict.stickyWhatsapp.label}</span>
      </a>
    </div>
  );
}
