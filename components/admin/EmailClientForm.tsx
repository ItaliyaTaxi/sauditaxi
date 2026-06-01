"use client";

import { useState } from "react";
import { Mail, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function EmailClientForm({
  leadId,
  defaultEmail,
}: {
  leadId: string;
  defaultEmail: string | null;
}) {
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setFeedback(null);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`/api/admin/leads/${leadId}/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Failed to send");
      setFeedback({ ok: true, text: "Email sent to the client." });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setFeedback({
        ok: false,
        text: err instanceof Error ? err.message : "Failed to send email.",
      });
    } finally {
      setBusy(false);
    }
  }

  if (!defaultEmail) {
    return (
      <p className="text-sm text-neutral-500">
        No email address on file for this lead — ask the client for their email to send a message.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-sm text-neutral-600">
        Sending to <span className="font-semibold text-neutral-900">{defaultEmail}</span>
      </p>
      <div>
        <Label htmlFor="email-subject">Subject</Label>
        <Input id="email-subject" name="subject" required placeholder="Your taxi quote" />
      </div>
      <div>
        <Label htmlFor="email-message">Message</Label>
        <Textarea
          id="email-message"
          name="message"
          required
          rows={6}
          placeholder="Write your message to the client…"
        />
      </div>
      {feedback && (
        <p className={feedback.ok ? "text-sm text-green-600" : "text-sm text-red-600"}>
          {feedback.text}
        </p>
      )}
      <Button type="submit" variant="navy" size="sm" disabled={busy}>
        {busy ? <LoaderCircle className="size-4 animate-spin" /> : <Mail className="size-4" />}
        {busy ? "Sending…" : "Send email"}
      </Button>
    </form>
  );
}
