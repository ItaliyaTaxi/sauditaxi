"use client";

import { useRouter, usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { getDictionary, localeFromPathname } from "@/lib/i18n";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];

/**
 * Compact quote form for the homepage hero. Collects only the essentials, then
 * hands off to /get-quote with the values as query params so the full form can
 * pre-fill and the user completes the remaining fields there.
 */
export function HeroQuickForm() {
  const router = useRouter();
  const locale = localeFromPathname(usePathname());
  const dict = getDictionary(locale);
  const t = dict.heroQuickForm;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const key of ["pickup", "dropoff", "date", "time", "passengers"]) {
      const value = (data.get(key) as string | null)?.trim();
      if (value) params.set(key, value);
    }
    const quotePath = locale === "ar" ? "/ar/اطلب-عرض-سعر" : "/get-quote";
    router.push(`${quotePath}?${params.toString()}`);
  }

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5 text-start shadow-2xl sm:p-6">
      <h2 className="text-xl font-bold text-navy">{t.heading}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{t.subheading}</p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3.5" aria-label="Quick quote form">
        <div>
          <Label htmlFor="hq-pickup">{t.pickup}</Label>
          <Input id="hq-pickup" name="pickup" placeholder={t.pickupPlaceholder} required />
        </div>
        <div>
          <Label htmlFor="hq-dropoff">{t.dropoff}</Label>
          <Input id="hq-dropoff" name="dropoff" placeholder={t.dropoffPlaceholder} required />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="hq-date">{t.date}</Label>
            <Input id="hq-date" name="date" type="date" required />
          </div>
          <div>
            <Label htmlFor="hq-time">{t.time}</Label>
            <Input id="hq-time" name="time" type="time" required />
          </div>
        </div>
        <div>
          <Label htmlFor="hq-passengers">{t.passengers}</Label>
          <Select id="hq-passengers" name="passengers" defaultValue="2">
            {passengerOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </div>

        <Button type="submit" variant="gold" size="lg" className="w-full">
          {t.continue}
          <ArrowRight className="size-5 rtl:rotate-180" />
        </Button>
      </form>
    </div>
  );
}
