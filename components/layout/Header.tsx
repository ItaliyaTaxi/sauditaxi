"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { airports } from "@/data/airports";
import { cities } from "@/data/cities";

interface NavChild {
  label: string;
  href: string;
}
interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  /** Widen the desktop panel + use two columns for long lists. */
  wide?: boolean;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.name, href: s.href })),
  },
  {
    label: "Airport Transfers",
    href: "/airport-transfers",
    wide: true,
    children: airports.map((a) => ({
      label: `${a.city} Airport (${a.code})`,
      href: `/airport-transfer/${a.slug}`,
    })),
  },
  {
    label: "City Transfers",
    href: "/city-transfers",
    wide: true,
    children: cities.map((c) => ({
      label: `${c.name} Taxi`,
      href: `/taxi-service/${c.slug}`,
    })),
  },
  { label: "Umrah Taxi", href: "/umrah-taxi-service" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid bar once scrolled, or while the mobile menu is open.
  const solid = scrolled || open;

  const closeAll = () => {
    setOpen(false);
    setOpenSub(null);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300",
        solid
          ? "bg-black/95 shadow-lg shadow-black/30 backdrop-blur"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent"
      )}
    >
      {/* Top bar: logo + language + quote + (mobile) menu toggle */}
      <div className={cn(solid ? "border-b border-white/10" : "border-b border-transparent")}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex items-center transition-transform hover:scale-[1.02]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt={`${siteConfig.name} logo`}
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />
            <Button
              asChild
              variant="gold"
              size="sm"
              className="hidden shadow-md shadow-gold/20 sm:inline-flex"
            >
              <Link href="/get-quote">Get Quote</Link>
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop nav row (below the top bar) */}
      <nav className="hidden lg:block" aria-label="Primary">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-center gap-1 px-4 sm:px-6 lg:px-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-white/10 text-gold"
                      : "text-white/80 hover:bg-white/5 hover:text-gold group-hover:text-gold"
                  )}
                >
                  {link.label}
                  <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
                </Link>
                {/* Dropdown panel (hover + keyboard focus) */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div
                    className={cn(
                      "max-h-[70vh] overflow-auto rounded-2xl border border-border bg-white p-2 text-navy shadow-2xl ring-1 ring-black/5",
                      link.wide ? "w-[30rem]" : "w-64"
                    )}
                  >
                    <ul className={cn("grid gap-0.5", link.wide && "grid-cols-2")}>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-navy/80 transition-colors hover:bg-gold/10 hover:text-navy"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white/10 text-gold"
                    : "text-white/80 hover:bg-white/5 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Premium gold accent line (only on the solid bar) */}
      {solid && <div className="h-[3px] w-full bg-gradient-to-r from-gold/0 via-gold to-gold/0" />}

      {/* Mobile nav (collapsible) */}
      <div
        className={cn(
          "lg:hidden overflow-y-auto bg-black transition-[max-height] duration-300",
          open ? "max-h-[85vh]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return link.children ? (
              <div key={link.href}>
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    onClick={closeAll}
                    className={cn(
                      "flex-1 rounded-md px-3 py-2 text-sm font-medium",
                      active ? "bg-white/10 text-gold" : "text-white/85 hover:bg-white/5 hover:text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    aria-label={`Toggle ${link.label} submenu`}
                    aria-expanded={openSub === link.href}
                    onClick={() => setOpenSub((cur) => (cur === link.href ? null : link.href))}
                    className="rounded-md p-2 text-white/70 hover:text-gold"
                  >
                    <ChevronDown
                      className={cn(
                        "size-5 transition-transform",
                        openSub === link.href && "rotate-180"
                      )}
                    />
                  </button>
                </div>
                {openSub === link.href && (
                  <ul className="mb-1 ml-3 border-l border-white/10 pl-2">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeAll}
                          className="block rounded-md px-3 py-1.5 text-sm text-white/70 hover:bg-white/5 hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  active ? "bg-white/10 text-gold" : "text-white/85 hover:bg-white/5 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-2 px-1">
            <Button asChild variant="gold" className="w-full shadow-md shadow-gold/20">
              <Link href="/get-quote" onClick={closeAll}>
                Get Quote
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
