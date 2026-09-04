# Form / Quote-Request System Preservation Manifest — Saudi Private Transfers

Everything required for the public quote/lead-request form to keep working.
Visual design of the form is **not** protected — only its fields, validation,
submission endpoint, and downstream behavior (DB write + email notifications).

## Entry points (where the form appears)

The form component itself is reused across the site, not confined to one page:
- `app/(main)/get-quote/page.tsx` — the dedicated "Get a Quote" page (also
  listed in the main URL inventory as a static page).
- `components/QuoteForm.tsx` — the actual form. Rendered inline as a sidebar
  widget on most commercial pages (city, airport, route, service pages —
  wherever a booking sidebar appears), each time with different
  `serviceType` / `route` / `defaultPickup` / `defaultDropoff` props so the
  submission carries context about which page it came from.
- Arabic pages render the same `QuoteForm` component directly (no separate
  Arabic form component) — see `app/ar/[...slug]/page.tsx`.

**Preservation implication:** the redesign can rebuild `QuoteForm`'s markup
freely, but must keep it a single shared component accepting these same
context props, submitting to the same endpoint, with the same field set —
not fork it per page type.

## Client-side form (`components/QuoteForm.tsx`)

Fields, current `name` attributes, and required/optional status:

| Field | `name` | Type | Required |
|---|---|---|---|
| Full name | `name` | text | yes |
| Phone/WhatsApp | `phone` | tel | yes |
| Email | `email` | email | no |
| Pickup location | `pickup` | text | yes |
| Drop-off location | `dropoff` | text | yes |
| Date | `date` | date | yes |
| Time | `time` | time | yes |
| Passengers | `passengers` | select | no (defaulted) |
| Luggage | `luggage` | select | no (defaulted) |
| Vehicle type | `vehicle` | select | no (defaulted) |
| Flight number | `flight` | text | no |
| Message | `message` | textarea | no |

Submits via `fetch("/api/leads", { method: "POST" })` with a JSON body. No
CAPTCHA or other bot-challenge exists on the client. Handles `idle` /
`submitting` / `success` / `error` states locally (`useState`).

## Server-side validation (`lib/leadSchema.ts`)

`zod` schema, `leadSchema`. **Only `phone` is required** at the schema level
(min 5 chars) — every other field is optional, trimmed, and length-capped
(e.g. `message` max 2000 chars, `fullName` max 120). This is intentionally
looser than the client-side `required` attributes, so a request missing a
"required" HTML field but supplying `phone` is still accepted — worth knowing
if the redesign changes which fields are client-required.

Also present in the schema (attribution fields, populated by the client from
`document.referrer` / URL params, not user-typed): `sourcePage`, `serviceType`,
`firstLandingPage`, `firstReferrer`, `firstUtmSource/Medium/Campaign`,
`landingPage`, `referrer`, `utmSource/Medium/Campaign`, `gclid`, `searchSource`.
These feed lead-attribution reporting in the admin CRM — preserve them even
though they're invisible in the form's UI.

## Submission endpoint (`app/api/leads/route.ts`)

`POST /api/leads`, `runtime = "nodejs"`, `dynamic = "force-dynamic"`.

1. **Rate limiting** — in-memory (per server instance, not distributed), 5
   requests/minute/IP, keyed off `x-forwarded-for` → `x-real-ip` → `"unknown"`.
   Returns `429` when exceeded. Not a CAPTCHA, but the only anti-abuse
   mechanism on this endpoint — worth replacing with something more robust
   before a full rebuild if abuse has ever been a problem, but out of scope
   to change during this preservation task.
2. Parses JSON body, `400` on malformed JSON.
3. Validates against `leadSchema`, `400` with `issues: fieldErrors` on failure.
4. **Persists the lead** via `createLead()` (`lib/leads.ts` → Supabase
   `public.leads` table). Degrades gracefully (`id: "unsaved"`, not persisted,
   warning logged) if `isSupabaseConfigured()` is false — the endpoint never
   hard-fails just because the DB isn't configured, by design.
5. **Sends two notification emails**, both non-fatal (wrapped in try/catch —
   a lead is never lost just because email fails):
   - To `process.env.ADMIN_EMAIL`, via `adminLeadEmail(lead)` — internal
     notification.
   - To the submitter's own email (if provided), via `clientLeadEmail(lead)`
     — auto-reply/confirmation, `replyTo` set to the admin inbox so client
     replies land with the team.
6. Returns `{ ok: true, id: lead.id }` on success.

## Database (`public.leads` table, `supabase/schema.sql`)

```
id, full_name, email, phone, pickup_location, dropoff_location, date, time,
passengers, luggage, vehicle_type, flight_number, message, source_page,
service_type, status (default 'New'), created_at, updated_at
```
Plus the attribution columns matching the schema fields above (see the full
DDL in `supabase/schema.sql` for exact column names — snake_case, mapped to
camelCase in `lib/leads.ts`'s `rowToLead`/`inputToRow`). **38 rows** as of
this audit. `status` is constrained in application code (not a DB enum) to
`New | Contacted | Quoted | Confirmed | Cancelled | Completed`
(`LEAD_STATUSES` in `lib/leads.ts`) — this list is also what drives the admin
leads-list filter UI.

A `public.email_logs` table (FK → `leads.id`, cascade-delete) records every
email actually sent, written by `logEmail()` in `lib/leads.ts` — used by the
admin UI to show a lead's communication history. **12 rows.**

## Downstream: what the admin does with a submitted lead

Not strictly "the form," but required for the form to be *useful* rather
than a dead end — see `ADMIN_PRESERVATION_MANIFEST.md` for full detail:
- Leads list/detail (`/admin/leads`, `/admin/leads/[id]`) — view, change
  `status`, send a manual follow-up email.
- A lead can be converted into a `quotation` or `invoice` from the admin UI
  (both tables carry an optional `lead_id` FK, `on delete set null` — so
  deleting a lead never breaks an already-issued quote/invoice).

## Required environment variables (names only)

```
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ADMIN_EMAIL
RESEND_API_KEY
FROM_EMAIL
```

## What is NOT protected

- `QuoteForm`'s markup, styling, layout, field ordering, which UI library
  renders the `<select>`s, etc. — freely redesignable.
- The specific wording of the client-side placeholder text (`t.*Placeholder`
  strings, from `lib/i18n.ts`'s dictionary) — content, not structure.
- The in-memory rate limiter's exact thresholds — functionally must keep
  *some* abuse protection, but the specific numbers aren't sacred.
