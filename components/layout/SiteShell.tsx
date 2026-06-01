"use client";

import { usePathname } from "next/navigation";

/**
 * Renders the public site chrome (header, footer, sticky WhatsApp, global
 * JSON-LD) around the page — except on /admin routes, which use their own
 * dashboard layout. The chrome nodes are passed in as props so they stay
 * server-rendered.
 */
export function SiteShell({
  header,
  footer,
  whatsapp,
  schema,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  whatsapp: React.ReactNode;
  schema: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  if (isAdmin) return <>{children}</>;

  return (
    <>
      {schema}
      {header}
      <main className="flex-1">{children}</main>
      {footer}
      {whatsapp}
    </>
  );
}
