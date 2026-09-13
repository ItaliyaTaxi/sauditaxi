import { getSession } from "@/lib/session";
import { isSupabaseConfigured } from "@/lib/supabase";
import { isEmailConfigured } from "@/lib/email";

export const dynamic = "force-dynamic";

function StatusRow({ label, ok, hint }: { label: string; ok: boolean; hint: string }) {
  return (
    <div className="flex items-center justify-between border-b border-hairline py-3 last:border-0">
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        <p className="text-xs text-ink-muted">{hint}</p>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          ok ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
        }`}
      >
        {ok ? "Configured" : "Not set"}
      </span>
    </div>
  );
}

export default async function AdminSettingsPage() {
  const session = await getSession();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">Settings</h1>
        <p className="text-sm text-ink-muted">Account and integration status.</p>
      </div>

      <div className="rounded-xl border border-hairline bg-white p-5">
        <h2 className="text-sm font-semibold text-ink">Account</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Signed in as <span className="font-semibold text-ink">{session?.email}</span>
        </p>
        <p className="mt-1 text-xs text-ink-muted">
          Credentials are configured via the <code>ADMIN_LOGIN_EMAIL</code> and{" "}
          <code>ADMIN_PASSWORD</code> environment variables.
        </p>
      </div>

      <div className="rounded-xl border border-hairline bg-white p-5">
        <h2 className="text-sm font-semibold text-ink">Integrations</h2>
        <div className="mt-2">
          <StatusRow
            label="Supabase database"
            ok={isSupabaseConfigured()}
            hint="SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY"
          />
          <StatusRow
            label="Resend email"
            ok={isEmailConfigured()}
            hint="RESEND_API_KEY + FROM_EMAIL"
          />
        </div>
      </div>
    </div>
  );
}
