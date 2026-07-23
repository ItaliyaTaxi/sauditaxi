"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDictionary, localeFromPathname } from "@/lib/i18n";
import { getArPathForEnPath, getEnPathForArPath } from "@/data/translations/ar";

/**
 * English / Arabic language switcher. Navigates to the real, server-rendered
 * counterpart page (a distinct URL with its own Arabic content), not a
 * client-side translation overlay — that's the whole point of the native
 * Arabic rollout. If the current page doesn't have a translation yet, it
 * falls back to the Arabic (or English) homepage rather than a 404.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);

  const enHref = locale === "ar" ? getEnPathForArPath(pathname) : pathname;
  const arHref = locale === "en" ? (getArPathForEnPath(pathname) ?? "/ar") : pathname;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Languages className="size-4 text-white/60" aria-hidden="true" />
      <div className="flex overflow-hidden rounded-full border border-white/20 text-xs font-semibold">
        <Link
          href={enHref}
          aria-current={locale === "en" ? "page" : undefined}
          className={cn(
            "px-2.5 py-1 transition-colors",
            locale === "en" ? "bg-gold text-navy" : "text-white/80 hover:text-gold"
          )}
        >
          {dict.languageSwitcher.en}
        </Link>
        <Link
          href={arHref}
          lang="ar"
          aria-current={locale === "ar" ? "page" : undefined}
          className={cn(
            "px-2.5 py-1 transition-colors",
            locale === "ar" ? "bg-gold text-navy" : "text-white/80 hover:text-gold"
          )}
        >
          {dict.languageSwitcher.ar}
        </Link>
      </div>
    </div>
  );
}
