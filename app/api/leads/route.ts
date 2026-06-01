import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leadSchema";
import { createLead, type Lead } from "@/lib/leads";
import { isSupabaseConfigured } from "@/lib/supabase";
import { adminLeadEmail, clientLeadEmail, sendEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Very small in-memory rate limiter (per server instance): 5 requests / minute / IP.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const input = parsed.data;

  // 1) Save the lead (degrade gracefully if Supabase isn't configured yet).
  let lead: Lead;
  if (isSupabaseConfigured()) {
    try {
      lead = await createLead(input);
    } catch (err) {
      console.error("[leads] failed to save lead:", err);
      return NextResponse.json(
        { ok: false, error: "Could not save your request. Please try again." },
        { status: 500 }
      );
    }
  } else {
    console.warn("[leads] Supabase not configured — lead not persisted.");
    const now = new Date().toISOString();
    lead = {
      id: "unsaved",
      status: "New",
      createdAt: now,
      updatedAt: now,
      fullName: input.fullName ?? null,
      email: input.email ?? null,
      phone: input.phone ?? null,
      pickupLocation: input.pickupLocation ?? null,
      dropoffLocation: input.dropoffLocation ?? null,
      date: input.date ?? null,
      time: input.time ?? null,
      passengers: input.passengers ?? null,
      luggage: input.luggage ?? null,
      vehicleType: input.vehicleType ?? null,
      flightNumber: input.flightNumber ?? null,
      message: input.message ?? null,
      sourcePage: input.sourcePage ?? null,
      serviceType: input.serviceType ?? null,
    };
  }

  // 2) Notify admin + client (non-fatal — never block a saved lead on email).
  try {
    const adminTo = process.env.ADMIN_EMAIL;
    if (adminTo) {
      const { subject, html } = adminLeadEmail(lead);
      await sendEmail({ to: adminTo, subject, html, replyTo: lead.email ?? undefined });
    }
    if (lead.email) {
      const { subject, html } = clientLeadEmail(lead);
      await sendEmail({ to: lead.email, subject, html });
    }
  } catch (err) {
    console.error("[leads] email send failed:", err);
  }

  return NextResponse.json({ ok: true, id: lead.id });
}
