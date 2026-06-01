"use client";

import * as React from "react";

/**
 * Minimal accessible modal dialog (no external dependency). Controlled via the
 * `open` prop; closes on overlay click or Escape.
 */
export function Dialog({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-xl border border-neutral-200 bg-white p-6 shadow-2xl">
        {title && <h2 className="text-lg font-bold text-neutral-900">{title}</h2>}
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}
