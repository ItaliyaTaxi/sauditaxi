"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, XCircle, Loader2, MessageSquare } from "lucide-react";
import type { Quotation } from "@/lib/quotations";
import { whatsappLink } from "@/lib/site";

export function QuotationClientActions({ quotation }: { quotation: Quotation }) {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(quotation.status);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  const waMessage = `Hi, I am reaching out regarding Quotation ${quotation.quoteNumber} (${quotation.totalAmount.toFixed(2)} ${quotation.currency}).`;
  const waUrl = whatsappLink(waMessage);

  async function handleAction(action: "accept" | "decline") {
    if (action === "decline") {
      const confirmed = window.confirm("Are you sure you want to decline this quotation?");
      if (!confirmed) return;
    }

    setLoading(true);
    setFeedback(null);
    try {
      const res = await fetch(`/api/quote/${quotation.publicToken}/action`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit response.");
      }

      setStatus(action === "accept" ? "Accepted" : "Declined");
      if (action === "accept") {
        setFeedback({
          ok: true,
          text: "Thank you! You have accepted this quotation. We've sent a confirmation email to you and our team will contact you shortly regarding the next steps.",
        });
      } else {
        setFeedback({
          ok: true,
          text: "Quotation has been declined. If you change your mind or have questions, feel free to chat with us on WhatsApp.",
        });
      }
    } catch (err) {
      setFeedback({
        ok: false,
        text: err instanceof Error ? err.message : "An error occurred while processing your request.",
      });
    } finally {
      setLoading(false);
    }
  }

  // Handle URL search param action trigger from email link (e.g. ?action=accept)
  useEffect(() => {
    const actionParam = searchParams.get("action");
    if ((actionParam === "accept" || actionParam === "decline") && status !== "Accepted" && status !== "Declined") {
      handleAction(actionParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="my-6 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm print:hidden">
      {status === "Accepted" ? (
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 sm:flex-row">
            <CheckCircle2 className="size-7 shrink-0 text-green-600" />
            <div>
              <h3 className="font-bold text-green-900">Quotation Accepted</h3>
              <p className="text-sm text-green-800">
                {feedback?.text || "Thank you for accepting this quotation! We have received your acceptance and will contact you shortly regarding the next steps for your booking."}
              </p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-[#20ba5a] transition"
            >
              <MessageSquare className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : status === "Declined" ? (
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex flex-col items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:flex-row">
            <XCircle className="size-7 shrink-0 text-red-500" />
            <div>
              <h3 className="font-bold text-neutral-900">Quotation Declined</h3>
              <p className="text-sm text-neutral-600">
                {feedback?.text || "This quotation has been declined. If you have questions or want to request a revised quote, please chat with us on WhatsApp."}
              </p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-[#20ba5a] transition"
            >
              <MessageSquare className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-base font-bold text-neutral-900">Review &amp; Respond to Quotation</h3>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600">
              Please review your quotation details, inclusions, and pricing below. You can accept or decline your booking with a single click, or chat with us on WhatsApp if you have questions or need adjustments.
            </p>
          </div>

          {feedback && !feedback.ok && (
            <div className="rounded-md bg-red-50 p-3 text-xs text-red-600 font-medium">
              {feedback.text}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:justify-start">
            <button
              type="button"
              onClick={() => handleAction("accept")}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow hover:bg-emerald-700 disabled:opacity-50 transition cursor-pointer"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : <CheckCircle2 className="size-4" />}
              Accept Quotation
            </button>

            <button
              type="button"
              onClick={() => handleAction("decline")}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-bold text-neutral-700 shadow-sm hover:bg-neutral-50 hover:text-red-600 disabled:opacity-50 transition cursor-pointer"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : <XCircle className="size-4" />}
              Decline Quotation
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow hover:bg-[#20ba5a] transition"
            >
              <MessageSquare className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
