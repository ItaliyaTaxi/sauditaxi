# Admin Preservation Manifest — Saudi Private Transfers

What is genuinely required for the admin/backend CRM to keep functioning
through a frontend redesign. Frontend styling of the admin UI itself is
explicitly **not** protected — only the functionality, routes, data
structures, and auth mechanism are.

## A. Must be preserved exactly (functionality + routing)

### Routes (pages)
```
app/(main)/admin/layout.tsx                          — shared admin shell (not the dashboard chrome)
app/(main)/admin/login/page.tsx                       — public login form
app/(main)/admin/(dashboard)/layout.tsx                — dashboard chrome (nav, sign-out)
app/(main)/admin/(dashboard)/page.tsx                  — dashboard home (stats)
app/(main)/admin/(dashboard)/leads/page.tsx            — leads list
app/(main)/admin/(dashboard)/leads/[id]/page.tsx       — lead detail
app/(main)/admin/(dashboard)/quotations/page.tsx       — quotations list
app/(main)/admin/(dashboard)/quotations/new/page.tsx   — create quotation
app/(main)/admin/(dashboard)/quotations/[id]/page.tsx  — quotation detail/edit
app/(main)/admin/(dashboard)/invoices/page.tsx         — invoices list
app/(main)/admin/(dashboard)/invoices/new/page.tsx     — create invoice
app/(main)/admin/(dashboard)/invoices/[id]/page.tsx    — invoice detail/edit
app/(main)/admin/(dashboard)/settings/page.tsx         — settings (admin account mgmt)
```
URL count: 8 static admin pages + 3 dynamic (`[id]`) patterns whose instance
count tracks the DB (38 leads / 4 quotations / 1 invoice as of this audit —
see `PRE_REDESIGN_AUDIT.md`). None of these are indexable (`robots.txt`
disallows `/admin/`) and none are in `sitemap.xml` — they don't need URL-equity
preservation the way public pages do, but the routes themselves must keep
resolving for the CRM to work at all.

### API routes (endpoints, not pages)
```
app/api/admin/login/route.ts
app/api/admin/logout/route.ts
app/api/admin/leads/[id]/route.ts                      — GET/PATCH/DELETE
app/api/admin/leads/[id]/email/route.ts                — POST, manual email to a lead
app/api/admin/quotations/route.ts                      — GET (list) / POST (create)
app/api/admin/quotations/[id]/route.ts                 — GET/PATCH/DELETE
app/api/admin/quotations/[id]/send-email/route.ts       — POST
app/api/admin/quotations/[id]/send-confirmation/route.ts — POST
app/api/admin/invoices/route.ts                        — GET (list) / POST (create)
app/api/admin/invoices/[id]/route.ts                    — GET/PATCH/DELETE
app/api/admin/invoices/[id]/send-email/route.ts         — POST
```

### Authentication mechanism
- `lib/auth.ts` — JWT session tokens (via `jose`), `SESSION_COOKIE = "admin_session"`,
  7-day expiry, `HS256` signed with `AUTH_SECRET`. `validateCredentials()` is a
  **bootstrap/master fallback** checked against `ADMIN_LOGIN_EMAIL`/`ADMIN_EMAIL`
  + `ADMIN_PASSWORD` env vars — kept so there's always one working login path
  independent of the database.
- `lib/admins.ts` — the **primary** admin-account path: database-backed via two
  Postgres `SECURITY DEFINER` functions, `verify_admin` and `upsert_admin`
  (defined in `supabase/schema.sql`). Passwords are bcrypt-hashed inside
  Postgres via `pgcrypto`; **plaintext passwords and hashes never leave the
  database** — the app only ever gets back a boolean or an email.
- `lib/session.ts` — thin wrapper reading the cookie via `next/headers` for use
  in Server Components/route handlers.
- `proxy.ts` (the middleware) — the actual enforcement point. Every request to
  `/admin/*` or `/api/admin/*` (except `/admin/login` and `/api/admin/login`)
  is checked: valid session → pass through; missing/invalid → redirect to
  `/admin/login?next=...` (pages) or `401 { ok: false }` JSON (API routes).
  **This gating logic must migrate as-is** — it's the only thing standing
  between the public internet and the CRM.
- `app/api/admin/login/route.ts` — checks `lib/admins.ts` (DB) first, falls
  back to `lib/auth.ts`'s env-based `validateCredentials()`, then issues the
  session cookie via `createSessionToken()`.

### Database tables (schema in `supabase/schema.sql`, already version-controlled)
- `public.admins` — `id, email (unique), password_hash, name, created_at, updated_at`. **1 row** as of this audit.
- `public.leads` — the CRM's core record type (also see `FORM_PRESERVATION_MANIFEST.md`, since every lead originates from the public form). **38 rows**.
- `public.email_logs` — audit trail of emails sent from the CRM, FK → `leads.id` (`on delete cascade`). **12 rows**.
- `public.invoices` — **1 row**. Snapshotted client/trip fields (not a live join to `leads`) so an invoice stays correct even if the source lead is later edited/deleted. Delivered via unguessable `public_token`, never the sequential `id`.
- `public.quotations` — **4 rows**. Same pattern as invoices, plus `status`, `valid_until`, `payment_terms`, `cancellation_policy`.
- Both `invoices` and `quotations` carry a `line_items jsonb` array in the shape `[{ description, vehicleType, passengers, luggage, amount }]` — this shape is depended on by both the admin UI and the PDF/email generation, so any redesign of the invoice/quotation editor must keep writing this exact structure.
- All 6 tables have `row level security` enabled with **no public policies** — every access path goes through the server-side service-role client (`lib/supabase.ts`), never a browser-side Supabase client. Preserve this posture; don't introduce a client-side Supabase key.

### Supporting `lib/` modules
```
lib/supabase.ts    — service-role client factory (getSupabaseAdmin(), isSupabaseConfigured())
lib/admins.ts       — admin CRUD/verify (§ above)
lib/auth.ts         — JWT session issue/verify
lib/session.ts       — cookie → session helper
lib/leads.ts         — lead CRUD + stats (also required by the form, see below)
lib/invoices.ts      — invoice CRUD + numbering
lib/quotations.ts    — quotation CRUD + numbering
lib/email.ts         — all transactional email templates + send (admin-triggered ones: adminLeadEmail, customClientEmail, invoiceReadyEmail, quotationReadyEmail, quotationAcceptedClientEmail, quotationAcceptedAdminEmail, quotationDeclinedAdminEmail, bookingConfirmationEmail)
```

### Required environment variables (names only — values are not reproduced here)
```
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
AUTH_SECRET
ADMIN_EMAIL          (or ADMIN_LOGIN_EMAIL)
ADMIN_PASSWORD
RESEND_API_KEY
FROM_EMAIL
```
Only `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are present in the local
`.env` (2 lines) — the rest are presumably set in the hosting platform
(Vercel) environment, not checked into this repo. **Values were not printed
or logged anywhere in this audit.**

## B. Explicitly NOT protected (safe to redesign freely)

- All visual styling/markup inside the admin pages themselves — tables,
  forms, cards, the dashboard's stat layout, `components/admin/*` presentational
  pieces, if any exist beyond the pages above.
- The specific choice of UI library/components used to build the CRM screens.
- Any copy/labels shown inside the admin UI.

## C. Dependency note (unrelated to correctness, worth knowing before rebuilding)

`@prisma/client` (`^7.8.0`) is listed in `package.json` but **no
`PrismaClient` import exists anywhere in the codebase**, and no
`schema.prisma` file exists. It appears to be an unused/stale dependency —
Supabase (`@supabase/supabase-js`) is the actual and only database client in
use. Similarly, `nodemailer` is a dependency but unused — `Resend` (via
`lib/email.ts`) is the actual email provider. Neither is "required" by
anything; flagged here so a future cleanup pass doesn't assume they're load-bearing.
