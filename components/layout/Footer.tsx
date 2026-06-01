import Link from "next/link";
import { Car, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const popularCities = cities.slice(0, 8);
const footerServices = services.filter((s) => s.featured);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white">
              <span className="flex size-9 items-center justify-center rounded-lg bg-gold text-navy">
                <Car className="size-5" />
              </span>
              <span className="text-lg font-bold">
                {siteConfig.shortName}
                <span className="text-gold">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Private taxi and transfer service across Saudi Arabia — airports,
              cities, intercity routes, borders, Umrah, and Hajj. Fast WhatsApp
              quotes, fixed prices, professional drivers.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 hover:text-gold"
              >
                <Phone className="size-4 text-gold" /> {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-gold"
              >
                <Mail className="size-4 text-gold" /> {siteConfig.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-gold" /> Serving all of Saudi Arabia
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="hover:text-gold">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/intercity-transfers" className="hover:text-gold">
                  Intercity Transfers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Popular Cities
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {popularCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/taxi-service/${c.slug}`} className="hover:text-gold">
                    {c.name} Taxi
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
              <li><Link href="/get-quote" className="hover:text-gold">Get a Quote</Link></li>
              <li><Link href="/services" className="hover:text-gold">All Services</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-gold">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/60">
            <Link href="/terms-and-conditions" className="hover:text-gold">Terms</Link>
            <span aria-hidden="true">·</span>
            <Link href="/privacy-policy" className="hover:text-gold">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
