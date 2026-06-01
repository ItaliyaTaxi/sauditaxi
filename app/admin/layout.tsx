import type { Metadata } from "next";

// Applies to every /admin route, including login: keep the CRM out of search.
export const metadata: Metadata = {
  title: { absolute: "Admin — Saudi Taxi Transfers" },
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-neutral-100 text-neutral-900">{children}</div>;
}
