import Link from "next/link";
import { Inbox, Sparkles, CircleCheck, CircleX, CalendarClock } from "lucide-react";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { isSupabaseConfigured } from "@/lib/supabase";
import {
  LEAD_STATUSES,
  getLeadStats,
  listLeads,
  type Lead,
  type LeadStats,
} from "@/lib/leads";

export const dynamic = "force-dynamic";

const emptyStats: LeadStats = {
  total: 0,
  today: 0,
  byStatus: LEAD_STATUSES.reduce(
    (acc, s) => ({ ...acc, [s]: 0 }),
    {} as LeadStats["byStatus"]
  ),
};

export default async function AdminDashboardPage() {
  const configured = isSupabaseConfigured();
  let stats = emptyStats;
  let recent: Lead[] = [];
  let error: string | null = null;

  if (configured) {
    try {
      [stats, recent] = await Promise.all([getLeadStats(), listLeads()]);
      recent = recent.slice(0, 8);
    } catch (e) {
      error = e instanceof Error ? e.message : "Failed to load leads.";
    }
  }

  const cards = [
    { label: "Total leads", value: stats.total, icon: Inbox },
    { label: "New leads", value: stats.byStatus.New, icon: Sparkles },
    { label: "Confirmed", value: stats.byStatus.Confirmed, icon: CircleCheck },
    { label: "Cancelled", value: stats.byStatus.Cancelled, icon: CircleX },
    { label: "Today", value: stats.today, icon: CalendarClock },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-sm text-neutral-500">Overview of your taxi leads.</p>
      </div>

      {!configured && (
        <AdminNotice title="Supabase is not configured">
          Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> in your
          environment and run <code>supabase/schema.sql</code> to start storing leads.
        </AdminNotice>
      )}
      {error && <AdminNotice title="Could not load leads">{error}</AdminNotice>}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="rounded-xl border border-neutral-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">{c.label}</span>
                <Icon className="size-4 text-gold" />
              </div>
              <p className="mt-2 text-3xl font-bold text-neutral-900">{c.value}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white">
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="font-semibold text-neutral-900">Recent leads</h2>
          <Link href="/admin/leads" className="text-sm font-semibold text-neutral-700 hover:text-gold">
            View all →
          </Link>
        </div>
        {recent.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-neutral-500">No leads yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-left text-neutral-500">
                  <th className="px-5 py-3 font-medium">Client</th>
                  <th className="px-5 py-3 font-medium">Trip</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Received</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((lead) => (
                  <tr key={lead.id} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50">
                    <td className="px-5 py-3">
                      <Link href={`/admin/leads/${lead.id}`} className="font-semibold text-neutral-900 hover:text-gold">
                        {lead.fullName || "—"}
                      </Link>
                      <div className="text-xs text-neutral-500">{lead.phone}</div>
                    </td>
                    <td className="px-5 py-3 text-neutral-700">
                      {lead.pickupLocation || "—"} → {lead.dropoffLocation || "—"}
                    </td>
                    <td className="px-5 py-3 text-neutral-700">
                      {lead.date || "—"} {lead.time || ""}
                    </td>
                    <td className="px-5 py-3"><StatusBadge status={lead.status} /></td>
                    <td className="px-5 py-3 text-neutral-500">
                      {new Date(lead.createdAt).toLocaleDateString("en-GB")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
