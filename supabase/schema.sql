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

-- Lock everything down to the service role only -----------------------------
alter table public.leads      enable row level security;
alter table public.email_logs enable row level security;
alter table public.admins     enable row level security;
