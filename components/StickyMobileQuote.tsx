"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";

/**
 * Mobile-only sticky "Get a Quote" bar pinned to the bottom of the viewport.
 * Hidden on desktop (lg+) and on the /get-quote page itself, where the form is
 * already on screen. Rendered inside the public chrome, so it never shows on
 * /admin routes.
 */
export function StickyMobileQuote() {
  const pathname = usePathname();
  if (pathname === "/get-quote") return null;

  return (
    <>
      {/* Spacer so the fixed bar never covers the end of the footer on mobile. */}
      <div aria-hidden className="h-[4.5rem] lg:hidden" />
      <div
        className="fixed inset-x-0 bottom-0 z-40 px-4 pt-3 lg:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <Link
          href="/get-quote"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-base font-semibold text-navy shadow-sm transition-colors hover:bg-gold-soft"
        >
          <Send className="size-5" />
          Get a Quote
        </Link>
      </div>
    </>
  );
}
