import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const defaultMessage =
  "Hello! I'd like to request a taxi quote in Saudi Arabia.";

/**
 * Floating, always-visible WhatsApp button. Rendered once in the root layout so
 * every page has the sticky chat CTA. Opens a WhatsApp chat with the business
 * number — the number itself is never displayed (it only lives in the wa.me link).
 */
export function StickyWhatsApp() {
  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
      <a
        href={whatsappLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
