import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonsProps {
  /** Retained for backward compatibility — no longer used (no WhatsApp CTA). */
  whatsappMessage?: string;
  /** Label for the primary "get a quote" button. */
  whatsappLabel?: string;
  /** Show a secondary "Contact Us" link. */
  showQuoteLink?: boolean;
  className?: string;
  /** Use light styling for dark backgrounds. */
  onDark?: boolean;
}

export function CtaButtons({
  whatsappLabel = "Get a Quote",
  showQuoteLink = true,
  className,
  onDark = false,
}: CtaButtonsProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button asChild variant="gold" size="lg">
        <Link href="/get-quote">
          <Send className="size-5" />
          {whatsappLabel}
        </Link>
      </Button>
      {showQuoteLink && (
        <Button
          asChild
          variant="outline"
          size="lg"
          className={onDark ? "border-white/40 text-white hover:bg-white hover:text-navy" : ""}
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      )}
    </div>
  );
}
