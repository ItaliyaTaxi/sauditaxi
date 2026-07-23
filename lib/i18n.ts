import en from "@/locales/en/common.json";
import ar from "@/locales/ar/common.json";

/**
 * Minimal, dependency-free localization layer.
 *
 * Add a new language by dropping a `locales/{code}/common.json` file with the
 * same shape as `locales/en/common.json`, then extending `Locale` and
 * `dictionaries` below. UI strings never live inline in components — every
 * shared component reads from here via `useLocale()` / `getDictionary()`.
 */
export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const dictionaries = { en, ar } satisfies Record<Locale, typeof en>;

export type Dictionary = (typeof dictionaries)["en"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Locale from a pathname: any path under /ar is Arabic, everything else is English. */
export function localeFromPathname(pathname: string | null | undefined): Locale {
  return pathname?.startsWith("/ar") ? "ar" : "en";
}

/** Simple {token} interpolation, e.g. t("Toggle {label} submenu", { label: "Services" }). */
export function interpolate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}
