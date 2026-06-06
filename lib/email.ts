import { Resend } from "resend";
import type { Lead } from "@/lib/leads";
import { siteConfig } from "@/lib/site";

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.FROM_EMAIL);
}

interface SendArgs {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Send an email via Resend. Returns { skipped: true } when Resend isn't
 * configured so the rest of the flow (saving the lead) still succeeds in dev.
 */
export async function sendEmail({ to, subject, html, replyTo }: SendArgs) {
  if (!isEmailConfigured()) {
    console.warn("[email] Resend not configured — skipping send to", to);
    return { skipped: true as const };
  }

  console.log("[email] sendEmail called", { to, subject, hasReplyTo: Boolean(replyTo) });
  console.log("[email] env status", {
    resendApiKeyPresent: Boolean(process.env.RESEND_API_KEY),
    fromEmailPresent: Boolean(process.env.FROM_EMAIL),
    adminEmailPresent: Boolean(process.env.ADMIN_EMAIL),
  });

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Resend's SDK does NOT throw on API errors — it returns { data, error }.
  // We must inspect `error` explicitly, otherwise failures pass silently.
  const { data, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to,
    subject,
    html,
    replyTo,
  });

  if (error) {
    console.error("[email] send failed", { to, subject, error });
    throw new Error(error.message ?? "Resend send failed");
  }

  console.log("[email] send success", { to, id: data?.id });
  return { id: data?.id ?? null, skipped: false as const };
}

const ESC: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
function esc(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
}

function detailRows(lead: Lead): string {
  const rows: [string, string | null][] = [
    ["Name", lead.fullName],
    ["Phone / WhatsApp", lead.phone],
    ["Email", lead.email],
    ["Pickup", lead.pickupLocation],
    ["Drop-off", lead.dropoffLocation],
    ["Date", lead.date],
    ["Time", lead.time],
    ["Passengers", lead.passengers],
    ["Luggage", lead.luggage],
    ["Vehicle type", lead.vehicleType],
    ["Flight number", lead.flightNumber],
    ["Message", lead.message],
    ["Service", lead.serviceType],
    ["Source page", lead.sourcePage],
  ];
  return rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#666;white-space:nowrap;vertical-align:top">${esc(
          k
        )}</td><td style="padding:6px 12px;color:#111;font-weight:600">${esc(v)}</td></tr>`
    )
    .join("");
}

function shell(title: string, bodyHtml: string): string {
  return `<div style="font-family:Arial,Helvetica,sans-serif;background:#f5f5f4;padding:24px">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e7e5e4">
      <div style="background:#0a0a0a;padding:20px 24px">
        <span style="color:#ffffff;font-size:18px;font-weight:800">${esc(
          siteConfig.shortName
        )}<span style="color:#f5b820">.</span></span>
      </div>
      <div style="padding:24px">
        <h1 style="margin:0 0 12px;font-size:20px;color:#0a0a0a">${esc(title)}</h1>
        ${bodyHtml}
      </div>
      <div style="padding:16px 24px;background:#f5f5f4;color:#777;font-size:12px">
        ${esc(siteConfig.name)} · Taxi &amp; transfer service across Saudi Arabia
      </div>
    </div>
  </div>`;
}

export function adminLeadEmail(lead: Lead): { subject: string; html: string } {
  const submitted = new Date(lead.createdAt).toLocaleString("en-GB");
  const html = shell(
    "New Taxi Lead Received",
    `<p style="color:#444;margin:0 0 16px">A new quote request was submitted on ${esc(
      submitted
    )}.</p>
     <table style="width:100%;border-collapse:collapse;font-size:14px">${detailRows(lead)}</table>`
  );
  return { subject: "New Taxi Lead Received", html };
}

export function clientLeadEmail(lead: Lead): { subject: string; html: string } {
  const html = shell(
    "We Received Your Taxi Quote Request",
    `<p style="color:#444;margin:0 0 16px">Thank you for contacting us. We have received your taxi/transfer request. Our team will review your trip details and contact you shortly with availability and pricing.</p>
     <p style="color:#444;margin:0 0 8px;font-weight:600">Your trip details:</p>
     <table style="width:100%;border-collapse:collapse;font-size:14px">${detailRows(lead)}</table>
     <p style="color:#444;margin:16px 0 0">For the fastest response you can also message us on WhatsApp.</p>`
  );
  return { subject: "We Received Your Taxi Quote Request", html };
}

/** Custom email composed by an admin from the CRM. */
export function customClientEmail(subject: string, message: string): string {
  const body = esc(message).replace(/\n/g, "<br/>");
  return shell(subject, `<div style="color:#333;font-size:14px;line-height:1.6">${body}</div>`);
}
