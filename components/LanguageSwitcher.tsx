"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * English / Arabic language switcher. Drives an (intentionally hidden) Google
 * Website Translate engine via the `googtrans` cookie, so selecting Arabic
 * converts the whole site (including blog content) to Arabic with RTL layout.
 * Selecting English reverts to the original text.
 */

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          opts: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          el: string
        ) => void;
      };
    };
  }
}

const COOKIE = "googtrans";

function currentLang(): "en" | "ar" {
  if (typeof document === "undefined") return "en";
  const m = document.cookie.match(/googtrans=\/en\/(\w+)/);
  return m?.[1] === "ar" ? "ar" : "en";
}

function applyLang(lang: "en" | "ar") {
  const value = `/en/${lang}`;
  // Set for the current host and (when applicable) the parent domain.
  document.cookie = `${COOKIE}=${value};path=/`;
  const host = window.location.hostname;
  if (host.includes(".")) {
    document.cookie = `${COOKIE}=${value};path=/;domain=.${host}`;
  }
  window.location.reload();
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    // Cookie is only readable on the client, so we sync state after mount.
    const cur = currentLang();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLang(cur);
    document.documentElement.lang = cur;
    document.documentElement.dir = cur === "ar" ? "rtl" : "ltr";

    // Load the Google translate engine once.
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (!window.google) return;
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "en,ar", autoDisplay: false },
          "google_translate_element"
        );
      };
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Languages className="size-4 text-white/60" aria-hidden="true" />
      <div className="flex overflow-hidden rounded-full border border-white/20 text-xs font-semibold">
        <button
          type="button"
          onClick={() => lang !== "en" && applyLang("en")}
          aria-pressed={lang === "en"}
          className={cn(
            "px-2.5 py-1 transition-colors",
            lang === "en" ? "bg-gold text-navy" : "text-white/80 hover:text-gold"
          )}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => lang !== "ar" && applyLang("ar")}
          aria-pressed={lang === "ar"}
          lang="ar"
          className={cn(
            "px-2.5 py-1 transition-colors",
            lang === "ar" ? "bg-gold text-navy" : "text-white/80 hover:text-gold"
          )}
        >
          عربي
        </button>
      </div>
      {/* Hidden engine mount point. */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
