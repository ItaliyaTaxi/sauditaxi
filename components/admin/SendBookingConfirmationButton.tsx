"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SendBookingConfirmationButton({
  quotationId,
  clientEmail,
}: {
  quotationId: string;
  clientEmail: string | null;
}) {
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  async function send() {
    setBusy(true);
    setFeedback(null);
    try {
      const res = await fetch(`/api/admin/quotations/${quotationId}/send-confirmation`, {
        method: "POST",
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Failed to send");
      setFeedback({ ok: true, text: "Booking confirmation emailed to the client." });
    } catch (err) {
      setFeedback({
        ok: false,
        text: err instanceof Error ? err.message : "Failed to send booking confirmation.",
      });
    } finally {
      setBusy(false);
    }
  }

  if (!clientEmail) {
    return <p className="text-sm text-neutral-500">No client email on file — add one to send a confirmation.</p>;
  }

  return (
    <div className="space-y-2">
      <Button type="button" variant="outline" size="sm" onClick={send} disabled={busy}>
        {busy ? <LoaderCircle className="size-4 animate-spin" /> : <CheckCircle2 className="size-4" />}
        {busy ? "Sending…" : `Email booking confirmation to ${clientEmail}`}
      </Button>
      {feedback && (
        <p className={feedback.ok ? "text-sm text-green-600" : "text-sm text-red-600"}>
          {feedback.text}
        </p>
      )}
    </div>
  );
}
