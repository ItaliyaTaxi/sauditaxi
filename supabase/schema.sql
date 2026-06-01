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

-- Lock everything down to the service role only -----------------------------
alter table public.leads      enable row level security;
alter table public.email_logs enable row level security;
