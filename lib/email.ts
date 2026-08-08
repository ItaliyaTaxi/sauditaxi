import { Resend } from "resend";
import type { Lead } from "@/lib/leads";
import type { Invoice } from "@/lib/invoices";
import type { Quotation } from "@/lib/quotations";
import { siteConfig, whatsappLink } from "@/lib/site";

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

function detailRows(lead: Lead, { includeSource = true }: { includeSource?: boolean } = {}): string {
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
    // Source page & attribution are internal — admin only, never shown to the client.
    ...(includeSource
      ? ([
          ["Source page", lead.sourcePage],
          ["First Landing Page", lead.firstLandingPage ?? null],
          ["First Referrer", lead.firstReferrer ?? null],
          ["First UTM Source", lead.firstUtmSource ?? null],
          ["First UTM Medium", lead.firstUtmMedium ?? null],
          ["First UTM Campaign", lead.firstUtmCampaign ?? null],
          ["Session Landing Page", lead.landingPage ?? null],
          ["Session Referrer", lead.referrer ?? null],
          ["UTM Source", lead.utmSource ?? null],
          ["UTM Medium", lead.utmMedium ?? null],
          ["UTM Campaign", lead.utmCampaign ?? null],
          ["GCLID", lead.gclid ?? null],
          ["Search Source", lead.searchSource ?? null],
        ] as [string, string | null][])
      : []),
  ];
  return rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td class="detail-label" style="padding:6px 12px;color:#666;vertical-align:top;width:38%">${esc(
          k
        )}</td><td style="padding:6px 12px;color:#111;font-weight:600;word-break:break-word">${esc(v)}</td></tr>`
    )
    .join("");
}

// Full HTML document (not a fragment): mobile mail clients without a
// viewport meta tag render emails at a desktop-width viewport (~980px) and
// scale it down, forcing pinch-zoom. The fluid table + media query below
// keep the layout — and the two-column detail table specifically — usable
// down to narrow phone widths.
function shell(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<style>
  @media only screen and (max-width: 600px) {
    .email-container { width: 100% !important; border-radius: 0 !important; }
    .email-padding { padding: 16px !important; }
    .detail-table td { display: block !important; width: 100% !important; padding: 4px 12px !important; }
    .detail-label { color: #999 !important; font-size: 12px !important; text-transform: uppercase; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#f5f5f4;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f4;padding:24px 0">
    <tr>
      <td align="center">
        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e7e5e4">
          <tr>
            <td style="background:#0a0a0a;padding:16px 24px">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:10px">
                    <img src="${esc(siteConfig.url)}/images/logo.webp" width="36" height="36" alt="${esc(
                      siteConfig.shortName
                    )}" style="display:block;width:36px;height:36px;border-radius:50%" />
                  </td>
                  <td style="vertical-align:middle">
                    <span style="color:#ffffff;font-size:18px;font-weight:800">${esc(
                      siteConfig.shortName
                    )}<span style="color:#f5b820">.</span></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="email-padding" style="padding:24px">
              <h1 style="margin:0 0 12px;font-size:20px;color:#0a0a0a">${esc(title)}</h1>
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:#f5f5f4;color:#777;font-size:12px">
              ${esc(siteConfig.name)} · Taxi &amp; transfer service across Saudi Arabia
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function adminLeadEmail(lead: Lead): { subject: string; html: string } {
  const submitted = new Date(lead.createdAt).toLocaleString("en-GB");
  const html = shell(
    "New Taxi Lead Received",
    `<p style="color:#444;margin:0 0 16px">A new quote request was submitted on ${esc(
      submitted
    )}.</p>
     <table class="detail-table" style="width:100%;border-collapse:collapse;font-size:14px">${detailRows(lead)}</table>`
  );
  return { subject: "New Taxi Lead Received", html };
}

export function clientLeadEmail(lead: Lead): { subject: string; html: string } {
  const html = shell(
    "We Received Your Taxi Quote Request",
    `<p style="color:#444;margin:0 0 16px">Thank you for contacting us. We have received your taxi/transfer request. Our team will review your trip details and contact you shortly with availability and pricing.</p>
     <p style="color:#444;margin:0 0 8px;font-weight:600">Your trip details:</p>
     <table class="detail-table" style="width:100%;border-collapse:collapse;font-size:14px">${detailRows(lead, { includeSource: false })}</table>
     <p style="color:#444;margin:16px 0 0">For the fastest response you can also message us on WhatsApp.</p>`
  );
  return { subject: "We Received Your Taxi Quote Request", html };
}

/** Custom email composed by an admin from the CRM. */
export function customClientEmail(subject: string, message: string): string {
  const body = esc(message).replace(/\n/g, "<br/>");
  return shell(subject, `<div style="color:#333;font-size:14px;line-height:1.6">${body}</div>`);
}

export function invoiceReadyEmail(
  invoice: Invoice,
  viewUrl: string
): { subject: string; html: string } {
  const subject = `Your Invoice ${invoice.invoiceNumber} — ${siteConfig.name}`;
  const html = shell(
    "Your Invoice Is Ready",
    `<p style="color:#444;margin:0 0 16px">
       Please find your invoice <strong>${esc(invoice.invoiceNumber)}</strong> for
       ${esc(invoice.totalAmount.toFixed(2))} ${esc(invoice.currency)} below. Click the
       button to view the full invoice online — no login required.
     </p>
     <div style="text-align:center;margin:24px 0">
       <a href="${esc(viewUrl)}"
          style="display:inline-block;background:#f5b820;color:#0a0a0a;font-weight:700;
                 padding:12px 28px;border-radius:9999px;text-decoration:none">
         View Invoice
       </a>
     </div>
     <p style="color:#777;font-size:12px;margin:16px 0 0">
       Or copy this link: ${esc(viewUrl)}
     </p>`
  );
  return { subject, html };
}

export function quotationReadyEmail(
  quotation: Quotation,
  viewUrl: string
): { subject: string; html: string } {
  const subject = `Your Quotation ${quotation.quoteNumber} — ${siteConfig.name}`;
  const html = shell(
    "Your Quotation Is Ready",
    `<p style="color:#444;margin:0 0 16px">
       Thank you for your interest in ${esc(siteConfig.name)}. Please find your quotation
       <strong>${esc(quotation.quoteNumber)}</strong> for
       ${esc(quotation.totalAmount.toFixed(2))} ${esc(quotation.currency)} below. Click the
       button to view the full quotation online — no login required.
     </p>
     <div style="text-align:center;margin:24px 0">
       <a href="${esc(viewUrl)}"
          style="display:inline-block;background:#f5b820;color:#0a0a0a;font-weight:700;
                 padding:12px 28px;border-radius:9999px;text-decoration:none">
         View Quotation
       </a>
     </div>
     <p style="color:#444;margin:16px 0 0">
       If you would like to confirm this booking, simply reply to this email or contact us —
       we look forward to serving you.
     </p>
     <p style="color:#777;font-size:12px;margin:16px 0 0">
       Or copy this link: ${esc(viewUrl)}
     </p>`
  );
  return { subject, html };
}

/**
 * Sent manually by the admin once a booking is confirmed (e.g. the client
 * already confirmed over WhatsApp) — a written, branded record of exactly
 * what was booked, separate from the WhatsApp conversation itself.
 */
export function bookingConfirmationEmail(
  quotation: Quotation
): { subject: string; html: string } {
  const vehicle = quotation.lineItems.find((li) => li.vehicleType)?.vehicleType ?? null;
  const rows: [string, string | null][] = [
    ["Booking reference", quotation.bookingReference || quotation.quoteNumber],
    ["Passenger", quotation.clientName],
    ["Phone / WhatsApp", quotation.clientPhone],
    ["Vehicle", vehicle],
    ["Pickup", quotation.pickupLocation],
    ["Drop-off", quotation.dropoffLocation],
    ["Date", quotation.date],
    ["Time", quotation.time],
    ["Flight number", quotation.flightNumber],
  ];
  const detailRows = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td class="detail-label" style="padding:6px 12px;color:#666;vertical-align:top;width:38%">${esc(
          k
        )}</td><td style="padding:6px 12px;color:#111;font-weight:600;word-break:break-word">${esc(v)}</td></tr>`
    )
    .join("");

  const whatsappUrl = whatsappLink(
    `Hi, I have a question about my booking ${quotation.bookingReference || quotation.quoteNumber}.`
  );

  const subject = `Booking Confirmed — ${quotation.bookingReference || quotation.quoteNumber} — ${siteConfig.name}`;
  const html = shell(
    "Your Booking Is Confirmed",
    `<p style="color:#444;margin:0 0 16px">
       Thank you — your booking with ${esc(siteConfig.name)} is confirmed. Here are your trip details:
     </p>
     <table class="detail-table" style="width:100%;border-collapse:collapse;font-size:14px">${detailRows}</table>
     <p style="color:#444;margin:20px 0 0">
       If you have any questions, just message us on WhatsApp — we're happy to help.
     </p>
     <div style="text-align:center;margin:20px 0 0">
       <a href="${esc(whatsappUrl)}"
          style="display:inline-block;background:#25d366;color:#ffffff;font-weight:700;
                 padding:12px 28px;border-radius:9999px;text-decoration:none">
         Message Us on WhatsApp
       </a>
     </div>`
  );
  return { subject, html };
}
