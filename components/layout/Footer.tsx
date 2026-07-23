"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { getDictionary, localeFromPathname } from "@/lib/i18n";
import { arPages, arPath } from "@/data/translations/ar";

const popularCities = cities.slice(0, 8);
const footerServices = services.filter((s) => s.featured);
const arServices = arPages.filter((p) => p.type === "service");

/**
 * A client component so the footer can detect /ar/* client-side without
 * forcing the whole app into dynamic rendering (the root layout that
 * renders this must stay a static Server Component — see app/layout.tsx).
 */
export function Footer() {
  const locale = localeFromPathname(usePathname());
  const dict = getDictionary(locale);
  const isAr = locale === "ar";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={isAr ? "/ar" : "/"} className="flex items-center gap-2 text-white">
              <span className="flex size-9 items-center justify-center rounded-lg bg-gold text-navy">
                <Car className="size-5" />
              </span>
              <span className="text-lg font-bold">
                {siteConfig.shortName}
                <span className="text-gold">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{dict.footer.description}</p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-gold"
              >
                <Mail className="size-4 text-gold" /> {siteConfig.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-gold" /> {dict.footer.servingAllOfSaudi}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.services}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {isAr
                ? arServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={arPath(s)} className="hover:text-gold">
                        {s.h1}
                      </Link>
                    </li>
                  ))
                : footerServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={s.href} className="hover:text-gold">
                        {s.name}
                      </Link>
                    </li>
                  ))}
              {!isAr && (
                <li>
                  <Link href="/intercity-transfers" className="hover:text-gold">
                    {dict.footer.intercityTransfers}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.popularCities}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {isAr
                ? arPages
                    .filter((p) => p.type === "city")
                    .map((c) => (
                      <li key={c.slug}>
                        <Link href={arPath(c)} className="hover:text-gold">
                          {c.h1}
                        </Link>
                      </li>
                    ))
                : popularCities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/taxi-service/${c.slug}`} className="hover:text-gold">
                        {c.name} {dict.footer.cityTaxiSuffix}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.company}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href={isAr ? "/ar/من-نحن" : "/about"} className="hover:text-gold">{dict.footer.aboutUs}</Link></li>
              <li><Link href={isAr ? "/ar/اتصل-بنا" : "/contact"} className="hover:text-gold">{dict.footer.contact}</Link></li>
              <li><Link href="/get-quote" className="hover:text-gold">{dict.footer.getAQuote}</Link></li>
              {!isAr && <li><Link href="/services" className="hover:text-gold">{dict.footer.allServices}</Link></li>}
              <li><Link href="/terms-and-conditions" className="hover:text-gold">{dict.footer.termsAndConditions}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gold">{dict.footer.privacyPolicy}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. {dict.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 text-white/60">
            <Link href="/terms-and-conditions" className="hover:text-gold">{dict.footer.terms}</Link>
            <span aria-hidden="true">·</span>
            <Link href="/privacy-policy" className="hover:text-gold">{dict.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
