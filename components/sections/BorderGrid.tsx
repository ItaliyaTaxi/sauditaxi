import Link from "next/link";
import { Milestone } from "lucide-react";
import { borders, type Border } from "@/data/borders";

interface BorderGridProps {
  heading?: string;
  subheading?: string;
  exclude?: string;
  background?: "white" | "muted";
}

export function BorderGrid({
  heading = "Saudi Border Crossings We Cover",
  subheading = "Private cross-border transfers from Saudi Arabia to its Gulf and regional neighbours.",
  exclude,
  background = "white",
}: BorderGridProps) {
  let list: Border[] = borders;
  if (exclude) list = list.filter((b) => b.slug !== exclude);

  if (list.length === 0) return null;

  return (
    <section className={background === "muted" ? "bg-muted py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {heading}
            </h2>
            {subheading && <p className="mt-3 text-muted-foreground">{subheading}</p>}
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((border) => (
            <Link
              key={border.slug}
              href={`/border-transfers/${border.slug}`}
              className="group rounded-xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-base font-semibold text-navy group-hover:text-gold">
                <Milestone className="size-5 text-gold" />
                {border.country}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{border.intro}</p>
              <p className="mt-3 text-xs font-medium text-navy">
                via {border.crossing}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
