"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Star } from "lucide-react";
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
  const pathname = usePathname();
  const dict = getDictionary(localeFromPathname(pathname));

  const handleClick = () => {
    if (typeof window === "undefined") return;
    let firstLandingPage: string | undefined;
    let utmSource: string | undefined;
    try {
      const raw = localStorage.getItem("spt_first_touch");
      if (raw) {
        const parsed = JSON.parse(raw);
        firstLandingPage = parsed.firstLandingPage;
      }
      const params = new URLSearchParams(window.location.search);
      utmSource = params.get("utm_source") || undefined;
    } catch {
      // Storage access disabled
    }

    const payload = JSON.stringify({
      sourcePage: window.location.href,
      firstLandingPage,
      utmSource,
      timestamp: new Date().toISOString(),
    });

    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon("/api/whatsapp-click", blob);
      } else {
        fetch("/api/whatsapp-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed bottom-24 end-4 z-50 flex flex-col items-end gap-3 lg:bottom-6 lg:end-6">
      <a
        href="https://www.trustpilot.com/review/saudiprivatetransfers.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Rate us on Trustpilot"
        className="flex size-11 items-center justify-center rounded-full bg-[#00b67a] text-white shadow-lg shadow-[#00b67a]/40 transition-transform hover:scale-105"
      >
        <Star className="size-5 fill-current" />
      </a>
      <a
        href={whatsappLink(dict.stickyWhatsapp.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.stickyWhatsapp.ariaLabel}
        onClick={handleClick}
        className="group flex items-center gap-2 rounded-full bg-[#25D366] py-3 ps-3 pe-4 text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
        <span className="hidden text-sm font-semibold sm:inline">{dict.stickyWhatsapp.label}</span>
      </a>
    </div>
  );
}
