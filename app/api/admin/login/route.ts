import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  SESSION_COOKIE,
  createSessionToken,
  sessionCookieOptions,
  validateCredentials,
} from "@/lib/auth";
import { verifyAdmin } from "@/lib/admins";
import { isSupabaseConfigured } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  const password = body.password ?? "";

  // Primary: database-backed admin accounts. Fall back to the env-based admin
  // (bootstrap / master account) if the DB check fails or finds no match.
  let ok = false;
  if (isSupabaseConfigured()) {
    try {
      ok = await verifyAdmin(email, password);
    } catch (err) {
      console.error("[admin login] database verification failed:", err);
    }
  }
  if (!ok) ok = validateCredentials(email, password);

  if (!ok) {
    return NextResponse.json(
      { ok: false, error: "Invalid email or password." },
      { status: 401 }
    );
  }

  const token = await createSessionToken(email);
  const store = await cookies();
  store.set(SESSION_COOKIE, token, sessionCookieOptions);

  return NextResponse.json({ ok: true });
}
