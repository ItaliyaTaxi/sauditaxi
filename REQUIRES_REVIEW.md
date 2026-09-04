# Requires Human Review Before Phase 2

Two items came up during Phase 1 that I'm not confident classifying as
"safe to delete" on my own judgment, plus one deviation from the literal
task instructions that I made deliberately and want to flag rather than
bury. Nothing below has been acted on.

## 1. Blog content vs. blog URLs — a direct conflict in the instructions

The task says both:
- Preserve **all existing URLs**.
- "Old blog content... is disposable" and not sacred.

But blog URLs (`/blog/{slug}`, 97 of them) are **generated directly from the
blog rows themselves** — `slug` is a column on `public.blogs` in Supabase,
not a separate routing table. There is no independent "blog URL list" that
exists apart from the content. So:

- **If blog rows are deleted** as "old content," their 97 URLs stop
  resolving — a direct contradiction of "preserve all existing URLs," unless
  that's an accepted, deliberate exception you want documented.
- **If blog rows are kept** to preserve the URLs, then by definition "old
  blog content" is *not* being disposed of — it's sitting there under a
  preserved slug until someone rewrites it.

Neither reading is obviously wrong, but they can't both be true as currently
written. Options, for you to choose between:

**A.** Keep all 97 rows as-is (URL preserved, content preserved) — most
conservative, contradicts nothing, but means "old content" survives.

**B.** Keep the 97 `slug` values live but replace `title`/`content`/etc. with
new copy during the redesign — same URL, genuinely new content. This is
probably what "preserve URLs, discard old content" actually means in
practice, but it's a content-authoring task, not a deletion, so I didn't
attempt to define which 97 posts get rewritten to what.

**C.** Deliberately retire some posts — but then their old URLs need an
explicit decision (301 to a topical replacement, like the 5 already handled
in `next.config.ts`, or a 404/410) rather than silently disappearing. This is
exactly the pattern already used for 5 renamed posts in `next.config.ts` —
extending that pattern to more posts is a reasonable path, but *which* posts
and *where* they redirect to needs a human call, not an automated guess.

I did not delete, rewrite, or redirect any blog content — the current 97
rows and their slugs are untouched.

## 2. Database backup — I deviated from the literal instruction, deliberately

The task asked for a database backup/export as a required deliverable. I
did **not** export actual row data (leads, admin password hashes, invoices,
quotations, blog content) into any file in this project.

**Why:** this GitHub repo is **public**
(`https://github.com/ItaliyaTaxi/sauditaxi`), and this session has already
observed an external process auto-committing and pushing work mid-session.
Writing real customer PII (38 leads with names/emails/phones), bcrypt admin
password hashes, or client invoice/quotation data into any file here — even
one meant to be temporary — risks it being auto-committed and pushed to a
public repository before I could intervene. That's not a risk I was willing
to take unilaterally.

**What I did instead:**
- Pulled row *counts only* (no content) via the service-role key, safely:
  38 leads, 12 email_logs, 1 admin, 97 blogs, 1 invoice, 4 quotations. These
  numbers appear in `PRE_REDESIGN_AUDIT.md` and are not sensitive.
- Preserved the full **schema** (`supabase/schema.sql`) — already
  version-controlled, contains no data, safe.
- Documented the exact commands to get a real data export, to run yourself
  and store somewhere private (not this repo):
  ```
  # Via Supabase CLI (recommended — needs the project linked locally):
  supabase db dump --data-only -f pre-redesign-data-backup.sql

  # Or via the Supabase Dashboard:
  # Project → Database → Backups → download a snapshot
  ```
  Store the resulting file outside this repository (or in a private repo/
  encrypted storage) — never commit it here.

If you'd rather I do this differently (e.g. the repo is about to be made
private anyway, or you want the export placed somewhere specific I can
reach), tell me and I'll proceed accordingly.

## 3. Minor, non-blocking observation (not really "review," just FYI)

`@prisma/client` and `nodemailer` are `package.json` dependencies with zero
usage anywhere in the codebase (verified by grep — no `PrismaClient` import,
no `schema.prisma` file, no `nodemailer` import; Supabase and Resend are the
actual DB/email providers in use). Not blocking anything, not touched — just
worth knowing before a dependency cleanup pass, since neither is "required"
by A/B/C in `DO_NOT_DELETE.md`.
