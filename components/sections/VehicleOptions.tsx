import { Users, Luggage } from "lucide-react";
import { Card } from "@/components/ui/card";
import { vehicles } from "@/data/vehicles";

export function VehicleOptions({
  heading = "Choose Your Vehicle",
  subheading = "From economy sedans to group minibuses — pick what fits your party and luggage.",
  background = "white",
}: {
  heading?: string;
  subheading?: string;
  background?: "white" | "muted";
}) {
  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-muted-foreground">{subheading}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <Card key={v.id} className="p-6">
              <h3 className="text-lg font-semibold text-navy">{v.name}</h3>
              <p className="mt-1 text-xs font-medium text-gold">{v.examples}</p>
              <p className="mt-3 text-sm text-muted-foreground">{v.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-navy">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="size-4 text-gold" /> {v.passengers}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Luggage className="size-4 text-gold" /> {v.luggage}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
