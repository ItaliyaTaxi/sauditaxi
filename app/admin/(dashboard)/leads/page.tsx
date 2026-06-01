import Link from "next/link";
import { Eye } from "lucide-react";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { LeadStatusSelect } from "@/components/admin/LeadStatusSelect";
import { DeleteLeadButton } from "@/components/admin/DeleteLeadButton";
import { AdminNotice } from "@/components/admin/AdminNotice";
import { isSupabaseConfigured } from "@/lib/supabase";
import { LEAD_STATUSES, listLeads, type Lead, type LeadStatus } from "@/lib/leads";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const activeStatus =
    status && (LEAD_STATUSES as readonly string[]).includes(status)
      ? (status as LeadStatus)
      : undefined;

  const configured = isSupabaseConfigured();
  let leads: Lead[] = [];
  let error: string | null = null;

  if (configured) {
    try {
      leads = await listLeads(activeStatus);
    } catch (e) {
      error = e instanceof Error ? e.message : "Failed to load leads.";
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            {activeStatus ? `${activeStatus} Leads` : "All Leads"}
          </h1>
          <p className="text-sm text-neutral-500">{leads.length} lead(s)</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/leads"
            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
              !activeStatus ? "bg-gold text-black ring-gold" : "text-neutral-600 ring-neutral-300 hover:bg-neutral-100"
            }`}
          >
            All
          </Link>
          {LEAD_STATUSES.map((s) => (
            <Link
              key={s}
              href={`/admin/leads?status=${s}`}
              className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
                activeStatus === s ? "bg-gold text-black ring-gold" : "text-neutral-600 ring-neutral-300 hover:bg-neutral-100"
              }`}
            >
              {s}
            </Link>
          ))}
        </div>
      </div>

      {!configured && (
        <AdminNotice title="Supabase is not configured">
          Set <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> to load leads.
        </AdminNotice>
      )}
      {error && <AdminNotice title="Could not load leads">{error}</AdminNotice>}

      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
        <table className="w-full min-w-[960px] text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-neutral-500">
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Pickup</th>
              <th className="px-4 py-3 font-medium">Drop-off</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Time</th>
              <th className="px-4 py-3 font-medium">Vehicle</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Created</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan={11} className="px-4 py-10 text-center text-neutral-500">
                  No leads found.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="border-b border-neutral-100 last:border-0 align-top hover:bg-neutral-50">
                  <td className="px-4 py-3">
                    <Link href={`/admin/leads/${lead.id}`} className="font-semibold text-neutral-900 hover:text-gold">
                      {lead.fullName || "—"}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-neutral-700">{lead.phone || "—"}</td>
                  <td className="px-4 py-3 text-neutral-700">{lead.pickupLocation || "—"}</td>
                  <td className="px-4 py-3 text-neutral-700">{lead.dropoffLocation || "—"}</td>
                  <td className="px-4 py-3 text-neutral-700">{lead.date || "—"}</td>
                  <td className="px-4 py-3 text-neutral-700">{lead.time || "—"}</td>
                  <td className="px-4 py-3 text-neutral-700">{lead.vehicleType || "—"}</td>
                  <td className="px-4 py-3"><StatusBadge status={lead.status} /></td>
                  <td className="px-4 py-3 max-w-[160px] truncate text-neutral-500" title={lead.sourcePage ?? ""}>
                    {lead.sourcePage || "—"}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-neutral-500">
                    {new Date(lead.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-2">
                      <LeadStatusSelect leadId={lead.id} status={lead.status} />
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
                        >
                          <Eye className="size-3.5" /> View
                        </Link>
                        <DeleteLeadButton leadId={lead.id} variant="ghost" label="Delete" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
