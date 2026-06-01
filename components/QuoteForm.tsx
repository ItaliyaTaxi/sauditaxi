"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { vehicles } from "@/data/vehicles";
import { siteConfig, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface QuoteFormProps {
  /** Prefill the pickup field (e.g. an airport or city). */
  defaultPickup?: string;
  /** Prefill the drop-off field. */
  defaultDropoff?: string;
  /** Prefill date (YYYY-MM-DD), time (HH:MM), and passenger count. */
  defaultDate?: string;
  defaultTime?: string;
  defaultPassengers?: string;
  /** Lead-tracking context — included in the WhatsApp message + hidden fields. */
  serviceType?: string;
  city?: string;
  route?: string;
  className?: string;
  /** Two-column layout on larger screens. */
  twoColumn?: boolean;
}

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];
const luggageOptions = ["0", "1", "2", "3", "4", "5+"];

export function QuoteForm({
  defaultPickup = "",
  defaultDropoff = "",
  defaultDate = "",
  defaultTime = "",
  defaultPassengers = "2",
  serviceType = "General taxi quote",
  city = "",
  route = "",
  className,
  twoColumn = true,
}: QuoteFormProps) {
  const pathname = usePathname();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string | null)?.trim() ?? "";

    const lines = [
      `*New Taxi Booking Request — ${siteConfig.name}*`,
      "",
      `👤 Name: ${get("name") || "-"}`,
      `📱 WhatsApp: ${get("phone") || "-"}`,
      `📍 Pickup: ${get("pickup") || "-"}`,
      `🏁 Drop-off: ${get("dropoff") || "-"}`,
      `📅 Date: ${get("date") || "-"}`,
      `⏰ Time: ${get("time") || "-"}`,
      `👥 Passengers: ${get("passengers") || "-"}`,
      `🧳 Luggage: ${get("luggage") || "-"}`,
      `🚗 Vehicle: ${get("vehicle") || "-"}`,
    ];
    if (get("flight")) lines.push(`✈️ Flight no: ${get("flight")}`);
    if (get("message")) lines.push(`📝 Message: ${get("message")}`);
    lines.push(
      "",
      `— Service: ${serviceType}`,
      route ? `— Route: ${route}` : city ? `— City: ${city}` : "",
      `— Page: ${siteConfig.url}${pathname}`
    );

    const message = lines.filter(Boolean).join("\n");
    // Open WhatsApp first so it stays inside the user gesture (no popup block).
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);

    // Then save the lead + trigger emails (best-effort, non-blocking).
    const payload = {
      fullName: get("name") || undefined,
      email: get("email") || undefined,
      phone: get("phone"),
      pickupLocation: get("pickup") || undefined,
      dropoffLocation: get("dropoff") || undefined,
      date: get("date") || undefined,
      time: get("time") || undefined,
      passengers: get("passengers") || undefined,
      luggage: get("luggage") || undefined,
      vehicleType: get("vehicle") || undefined,
      flightNumber: get("flight") || undefined,
      message: get("message") || undefined,
      serviceType: route
        ? `${serviceType} (Route: ${route})`
        : city
          ? `${serviceType} (City: ${city})`
          : serviceType,
      sourcePage: `${siteConfig.url}${pathname}`,
    };
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {
      /* lead capture is best-effort; the WhatsApp message already went out */
    });

    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      aria-label="Taxi quote request form"
    >
      {/* Hidden lead-tracking fields */}
      <input type="hidden" name="source_page" value={pathname} />
      <input type="hidden" name="service_type" value={serviceType} />
      <input type="hidden" name="city" value={city} />
      <input type="hidden" name="route" value={route} />

      <div className={cn(twoColumn && "grid gap-4 sm:grid-cols-2")}>
        <div>
          <Label htmlFor="qf-name">Full name</Label>
          <Input id="qf-name" name="name" autoComplete="name" placeholder="Your name" required />
        </div>
        <div>
          <Label htmlFor="qf-phone">WhatsApp number</Label>
          <Input
            id="qf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+966 5X XXX XXXX"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="qf-email">
          Email <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="qf-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com — to receive a confirmation"
        />
      </div>

      <div className={cn(twoColumn && "grid gap-4 sm:grid-cols-2")}>
        <div>
          <Label htmlFor="qf-pickup">Pickup location</Label>
          <Input id="qf-pickup" name="pickup" defaultValue={defaultPickup} placeholder="Airport, hotel, address" required />
        </div>
        <div>
          <Label htmlFor="qf-dropoff">Drop-off location</Label>
          <Input id="qf-dropoff" name="dropoff" defaultValue={defaultDropoff} placeholder="Destination" required />
        </div>
      </div>

      <div className={cn(twoColumn && "grid gap-4 sm:grid-cols-2")}>
        <div>
          <Label htmlFor="qf-date">Date</Label>
          <Input id="qf-date" name="date" type="date" defaultValue={defaultDate} required />
        </div>
        <div>
          <Label htmlFor="qf-time">Time</Label>
          <Input id="qf-time" name="time" type="time" defaultValue={defaultTime} required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="qf-passengers">Passengers</Label>
          <Select id="qf-passengers" name="passengers" defaultValue={defaultPassengers}>
            {passengerOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="qf-luggage">Luggage</Label>
          <Select id="qf-luggage" name="luggage" defaultValue="2">
            {luggageOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </div>
        <div>
          <Label htmlFor="qf-vehicle">Vehicle type</Label>
          <Select id="qf-vehicle" name="vehicle" defaultValue="Comfort">
            {vehicles.map((v) => (
              <option key={v.id} value={v.name}>{v.name}</option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="qf-flight">Flight number <span className="font-normal text-muted-foreground">(optional)</span></Label>
        <Input id="qf-flight" name="flight" placeholder="e.g. SV1234" />
      </div>

      <div>
        <Label htmlFor="qf-message">Message <span className="font-normal text-muted-foreground">(optional)</span></Label>
        <Textarea id="qf-message" name="message" placeholder="Any special requirements (child seat, extra stops, group size)…" />
      </div>

      <Button type="submit" variant="whatsapp" size="lg" className="w-full">
        <MessageCircle className="size-5" />
        Send Booking on WhatsApp
      </Button>

      <p className="text-center text-xs text-muted-foreground" aria-live="polite">
        {submitted
          ? "Opening WhatsApp… if nothing happened, please check your pop-up settings."
          : "Your details open a prefilled WhatsApp chat — no payment needed to get a quote."}
      </p>
    </form>
  );
}
