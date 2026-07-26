"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  Sparkles,
  PhoneCall,
  FileText,
  CircleCheck,
  CircleX,
  Flag,
  Settings,
  LogOut,
  Menu,
  X,
  Car,
  Receipt,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Leads", href: "/admin/leads", icon: Inbox },
  { label: "Invoices", href: "/admin/invoices", icon: Receipt },
];

const statusLinks = [
  { label: "New Leads", href: "/admin/leads?status=New", icon: Sparkles },
  { label: "Contacted", href: "/admin/leads?status=Contacted", icon: PhoneCall },
  { label: "Quoted", href: "/admin/leads?status=Quoted", icon: FileText },
  { label: "Confirmed", href: "/admin/leads?status=Confirmed", icon: CircleCheck },
  { label: "Cancelled", href: "/admin/leads?status=Cancelled", icon: CircleX },
  { label: "Completed", href: "/admin/leads?status=Completed", icon: Flag },
];

function NavLink({
  href,
  label,
  icon: Icon,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: typeof Inbox;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        active ? "bg-gold text-black" : "text-white/75 hover:bg-white/5 hover:text-gold"
      )}
    >
      <Icon className="size-4 shrink-0" />
      {label}
    </Link>
  );
}

export function AdminShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const close = () => setOpen(false);

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 px-4 py-5">
        <span className="flex size-9 items-center justify-center rounded-lg bg-gold text-black">
          <Car className="size-5" />
        </span>
        <span className="text-base font-bold text-white">
          Saudi Private Transfers <span className="text-gold">CRM</span>
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-4">
        {mainLinks.map((l) => (
          <NavLink key={l.href} {...l} active={pathname === l.href} onNavigate={close} />
        ))}
        <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wider text-white/40">
          By status
        </p>
        {statusLinks.map((l) => (
          <NavLink key={l.href} {...l} active={false} onNavigate={close} />
        ))}
        <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wider text-white/40">
          Account
        </p>
        <NavLink
          href="/admin/settings"
          label="Settings"
          icon={Settings}
          active={pathname === "/admin/settings"}
          onNavigate={close}
        />
        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-gold"
        >
          <LogOut className="size-4 shrink-0" />
          Logout
        </button>
      </nav>

      <div className="border-t border-white/10 px-4 py-3 text-xs text-white/50">
        Signed in as
        <br />
        <span className="text-white/80">{email}</span>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="print:hidden hidden w-64 shrink-0 bg-neutral-950 lg:block">
        <div className="sticky top-0 h-screen">{sidebar}</div>
      </aside>

      {/* Mobile slide-over */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64 bg-neutral-950 shadow-xl">{sidebar}</div>
        </div>
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="print:hidden flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3 lg:hidden">
          <span className="font-bold text-neutral-900">
            Saudi Private Transfers <span className="text-gold">CRM</span>
          </span>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-neutral-700"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
