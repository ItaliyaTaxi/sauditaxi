-- Saudi Taxi Transfers — Supabase schema
-- Run this in the Supabase SQL editor (or via the CLI) to provision the tables.
-- All access happens server-side with the service-role key, which bypasses RLS.
-- RLS is enabled with no public policies, so anon/public clients have no access.

create extension if not exists "pgcrypto";

-- Leads ---------------------------------------------------------------------
create table if not exists public.leads (
  id               uuid primary key default gen_random_uuid(),
  full_name        text,
  email            text,
  phone            text,
  pickup_location  text,
  dropoff_location text,
  date             text,
  time             text,
  passengers       text,
  luggage          text,
  vehicle_type     text,
  flight_number    text,
  message          text,
  source_page      text,
  service_type     text,
  status           text not null default 'New',
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- Keep updated_at fresh on every update
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- Email logs ----------------------------------------------------------------
create table if not exists public.email_logs (
  id         uuid primary key default gen_random_uuid(),
  lead_id    uuid references public.leads(id) on delete cascade,
  subject    text not null,
  message    text not null,
  sent_to    text not null,
  sent_at    timestamptz not null default now()
);

create index if not exists email_logs_lead_id_idx on public.email_logs (lead_id);

-- Admins --------------------------------------------------------------------
-- Admin CRM accounts. Passwords are stored as bcrypt hashes (via pgcrypto);
-- the plaintext password is never stored or returned.
create table if not exists public.admins (
  id            uuid primary key default gen_random_uuid(),
  email         text not null unique,
  password_hash text not null,
  name          text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

drop trigger if exists admins_set_updated_at on public.admins;
create trigger admins_set_updated_at
  before update on public.admins
  for each row execute function public.set_updated_at();

-- Create or update an admin. Password is hashed with bcrypt (gen_salt('bf')).
create or replace function public.upsert_admin(
  p_email text, p_password text, p_name text default null
)
returns uuid
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_id uuid;
begin
  insert into public.admins (email, password_hash, name)
  values (lower(trim(p_email)), crypt(p_password, gen_salt('bf', 12)), p_name)
  on conflict (email) do update
    set password_hash = excluded.password_hash,
        name          = coalesce(excluded.name, public.admins.name),
        updated_at    = now()
  returning id into v_id;
  return v_id;
end;
$$;

-- Verify credentials. Returns the admin email when valid, otherwise null.
create or replace function public.verify_admin(p_email text, p_password text)
returns text
language sql
security definer
set search_path = public, extensions
as $$
  select email from public.admins
  where email = lower(trim(p_email))
    and password_hash = crypt(p_password, password_hash)
  limit 1;
$$;

-- These functions must only ever run server-side with the service role —
-- never expose them to the anon/authenticated (public API) roles.
revoke all on function public.upsert_admin(text, text, text) from public, anon, authenticated;
revoke all on function public.verify_admin(text, text)        from public, anon, authenticated;
grant execute on function public.upsert_admin(text, text, text) to service_role;
grant execute on function public.verify_admin(text, text)        to service_role;

-- Blogs ---------------------------------------------------------------------
-- SEO blog/CMS content. Authored in the admin CRM, rendered on /blog.
create table if not exists public.blogs (
  id                  uuid primary key default gen_random_uuid(),
  title               text not null,
  slug                text not null unique,
  excerpt             text,
  content             text not null default '',
  meta_title          text,
  meta_description    text,
  focus_keyword       text,
  secondary_keywords  text[] not null default '{}',
  featured_image      text,
  featured_image_alt  text,
  author              text not null default 'Saudi Taxi Transfers',
  category            text not null default 'Travel Guides',
  tags                text[] not null default '{}',
  faqs                jsonb not null default '[]'::jsonb,
  schema_json         jsonb,
  reading_time        integer not null default 1,
  status              text not null default 'draft',
  published_at        timestamptz,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create index if not exists blogs_slug_idx         on public.blogs (slug);
create index if not exists blogs_status_idx       on public.blogs (status);
create index if not exists blogs_published_at_idx on public.blogs (published_at desc);
create index if not exists blogs_category_idx     on public.blogs (category);

drop trigger if exists blogs_set_updated_at on public.blogs;
create trigger blogs_set_updated_at
  before update on public.blogs
  for each row execute function public.set_updated_at();

-- Invoices ------------------------------------------------------------------
-- Client-facing invoices. May originate from a lead (auto-filled) or be
-- created standalone for phone/walk-in bookings. Delivered via a public,
-- unguessable link (public_token) — never via the sequential `id`. Client and
-- trip fields are snapshotted at creation time (not a live join to `leads`)
-- so an invoice stays intact and accurate even if its source lead is later
-- edited or deleted.
create table if not exists public.invoices (
  id                uuid primary key default gen_random_uuid(),
  invoice_number    text not null unique,
  public_token      text not null unique default encode(gen_random_bytes(16), 'hex'),

  lead_id           uuid references public.leads(id) on delete set null,

  client_name       text,
  client_phone      text,
  client_email      text,

  service_type      text,
  pickup_location   text,
  dropoff_location  text,
  date              text,
  time              text,

  -- [{ description, vehicleType, passengers, luggage, amount }]
  line_items        jsonb not null default '[]'::jsonb,

  currency          text not null default 'SAR',
  -- Kept in sync with sum(line_items[].amount) by the app layer on every
  -- create/update unless the admin explicitly overrides it (e.g. a discount
  -- not modeled as its own line item) — not a generated column, on purpose.
  total_amount      numeric(12,2) not null default 0,

  payment_status    text not null default 'Unpaid',
  notes             text,
  invoice_date      date not null default current_date,

  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists invoices_created_at_idx     on public.invoices (created_at desc);
create index if not exists invoices_lead_id_idx        on public.invoices (lead_id);
create index if not exists invoices_public_token_idx   on public.invoices (public_token);
create index if not exists invoices_payment_status_idx on public.invoices (payment_status);

drop trigger if exists invoices_set_updated_at on public.invoices;
create trigger invoices_set_updated_at
  before update on public.invoices
  for each row execute function public.set_updated_at();

-- Quotations ------------------------------------------------------------------
-- Client-facing pre-booking estimates. Distinct from invoices: a quotation
-- has no payment status (nothing has been booked/billed yet), carries its own
-- validity window, and includes trip details (flight number, special
-- requests) invoices don't need. Delivered the same way as invoices — an
-- unguessable public_token link, never the sequential id.
create table if not exists public.quotations (
  id                   uuid primary key default gen_random_uuid(),
  quote_number         text not null unique,
  public_token         text not null unique default encode(gen_random_bytes(16), 'hex'),

  lead_id              uuid references public.leads(id) on delete set null,

  client_name          text,
  client_phone         text,
  client_email         text,

  service_type         text,
  pickup_location      text,
  dropoff_location     text,
  date                 text,
  time                 text,
  flight_number        text,
  special_requests     text,
  booking_reference    text,

  -- [{ description, vehicleType, passengers, luggage, amount }] — same shape as invoices.line_items
  line_items           jsonb not null default '[]'::jsonb,

  currency             text not null default 'SAR',
  total_amount         numeric(12,2) not null default 0,

  payment_terms        text,
  cancellation_policy  text,
  notes                text,

  status               text not null default 'Draft',
  quote_date           date not null default current_date,
  valid_until          date,

  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

create index if not exists quotations_created_at_idx   on public.quotations (created_at desc);
create index if not exists quotations_lead_id_idx      on public.quotations (lead_id);
create index if not exists quotations_public_token_idx on public.quotations (public_token);
create index if not exists quotations_status_idx       on public.quotations (status);

drop trigger if exists quotations_set_updated_at on public.quotations;
create trigger quotations_set_updated_at
  before update on public.quotations
  for each row execute function public.set_updated_at();

-- Lock everything down to the service role only -----------------------------
alter table public.leads      enable row level security;
alter table public.email_logs enable row level security;
alter table public.admins     enable row level security;
alter table public.blogs      enable row level security;
alter table public.invoices   enable row level security;
alter table public.quotations enable row level security;
