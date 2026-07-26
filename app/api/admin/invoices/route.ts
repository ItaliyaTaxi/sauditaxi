import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { createInvoice, type InvoiceInput } from "@/lib/invoices";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!(await getSession())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: InvoiceInput;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (!body.clientName?.trim() && !(body.lineItems?.length)) {
    return NextResponse.json(
      { ok: false, error: "Add a client name or at least one line item." },
      { status: 400 }
    );
  }

  try {
    const invoice = await createInvoice(body);
    return NextResponse.json({ ok: true, invoice });
  } catch (err) {
    console.error("[admin] create invoice failed:", err);
    return NextResponse.json({ ok: false, error: "Failed to create invoice." }, { status: 500 });
  }
}
