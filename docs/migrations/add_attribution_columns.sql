-- ============================================================
-- SaudiPrivateTransfers.com — Multi-Touch Lead Attribution
-- Migration: add attribution columns to the `leads` table
-- Run this once in the Supabase SQL editor (or migrations tool)
-- ============================================================

-- Multi-touch attribution: first-touch columns (preserved across sessions)
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS first_landing_page  TEXT,
  ADD COLUMN IF NOT EXISTS first_referrer      TEXT,
  ADD COLUMN IF NOT EXISTS first_utm_source    TEXT,
  ADD COLUMN IF NOT EXISTS first_utm_medium    TEXT,
  ADD COLUMN IF NOT EXISTS first_utm_campaign  TEXT;

-- Multi-touch attribution: current-session columns
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS landing_page   TEXT,
  ADD COLUMN IF NOT EXISTS referrer       TEXT,
  ADD COLUMN IF NOT EXISTS utm_source     TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium     TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign   TEXT,
  ADD COLUMN IF NOT EXISTS gclid          TEXT,
  ADD COLUMN IF NOT EXISTS search_source  TEXT;

-- Optional: WhatsApp click tracking table (for Phase 6)
-- This table records every WhatsApp button click event.
CREATE TABLE IF NOT EXISTS whatsapp_clicks (
  id                UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  source_page       TEXT,
  route             TEXT,
  first_landing_page TEXT,
  utm_source        TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- Index for common admin queries
CREATE INDEX IF NOT EXISTS idx_whatsapp_clicks_created_at
  ON whatsapp_clicks (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_leads_utm_source
  ON leads (utm_source);

CREATE INDEX IF NOT EXISTS idx_leads_first_utm_source
  ON leads (first_utm_source);

-- Enable RLS on whatsapp_clicks (admin read only, public insert denied)
ALTER TABLE whatsapp_clicks ENABLE ROW LEVEL SECURITY;

-- Supabase service role key bypasses RLS — no policy needed for server inserts.
-- If you need admin SELECT access, add:
-- CREATE POLICY "admin_read" ON whatsapp_clicks FOR SELECT USING (auth.role() = 'service_role');
