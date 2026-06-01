import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ahmed R.",
    trip: "Jeddah Airport → Makkah",
    text: "Driver was waiting as I exited the Hajj Terminal and took us straight to our hotel near the Haram. Smooth start to our Umrah.",
  },
  {
    name: "Sarah M.",
    trip: "Riyadh → AlUla",
    text: "Booked a private SUV for the long drive to AlUla. Comfortable, on time, and the price agreed on WhatsApp was exactly what we paid.",
  },
  {
    name: "Imran K.",
    trip: "Khobar → Bahrain",
    text: "Crossed the causeway to Manama without any hassle. The driver guided us through the border and dropped us right at the hotel.",
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            What Travellers Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trusted by tourists, pilgrims, families, and business travellers across Saudi Arabia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="relative p-6">
              <Quote className="absolute right-5 top-5 size-8 text-muted" />
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy">“{t.text}”</p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.trip}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
