import { NextResponse } from "next/server";
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { sourcePage, route, firstLandingPage, utmSource, timestamp } = body;

    console.log("[whatsapp-click] Logged click event:", {
      sourcePage,
      route,
      firstLandingPage,
      utmSource,
      timestamp: timestamp || new Date().toISOString(),
    });

    if (isSupabaseConfigured()) {
      try {
        const supabase = getSupabaseAdmin();
        const { error } = await supabase.from("whatsapp_clicks").insert({
          source_page: sourcePage ?? null,
          route: route ?? null,
          first_landing_page: firstLandingPage ?? null,
          utm_source: utmSource ?? null,
          created_at: timestamp || new Date().toISOString(),
        });
        if (error) {
          // Table may not exist yet — log silently without throwing
          console.warn("[whatsapp-click] Supabase insert note:", error.message);
        }
      } catch (dbErr) {
        console.warn("[whatsapp-click] DB error (non-fatal):", dbErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // Always return ok to be non-blocking
  }
}
