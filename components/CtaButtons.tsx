import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

interface CtaButtonsProps {
  /** Prefilled WhatsApp message for the primary CTA. */
  whatsappMessage?: string;
  /** Label for the primary WhatsApp button. */
  whatsappLabel?: string;
  /** Show a secondary "Get Quote" link to the form page. */
  showQuoteLink?: boolean;
  className?: string;
  /** Use light styling for dark backgrounds. */
  onDark?: boolean;
}

export function CtaButtons({
  whatsappMessage = "Hello! I'd like to request a taxi quote in Saudi Arabia.",
  whatsappLabel = "Get Quote on WhatsApp",
  showQuoteLink = true,
  className,
  onDark = false,
}: CtaButtonsProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button asChild variant="whatsapp" size="lg">
        <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="size-5" />
          {whatsappLabel}
        </a>
      </Button>
      {showQuoteLink && (
        <Button asChild variant={onDark ? "outline" : "outline"} size="lg" className={onDark ? "border-white/40 text-white hover:bg-white hover:text-navy" : ""}>
          <Link href="/get-quote">Request Price</Link>
        </Button>
      )}
    </div>
  );
}
