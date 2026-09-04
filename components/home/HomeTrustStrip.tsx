import { Car, ShieldCheck, Clock, Users } from "lucide-react";

const points = [
  { icon: Car, label: "Private chauffeur service" },
  { icon: ShieldCheck, label: "Professional, vetted drivers" },
  { icon: Clock, label: "24/7 availability" },
  { icon: Users, label: "Door-to-door, every trip" },
];

/** A restrained proof strip directly under the hero — text-led, not an icon grid. */
export function HomeTrustStrip() {
  return (
    <section className="border-b border-hairline bg-offwhite">
      <div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:justify-between">
          {points.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
              <Icon className="size-4 text-brass" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
