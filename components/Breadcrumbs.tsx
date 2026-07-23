import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visual breadcrumb trail. Pair with breadcrumbSchema() from lib/schema for the
 * matching BreadcrumbList JSON-LD. The last crumb is rendered as current.
 */
export function Breadcrumbs({
  items,
  onDark = false,
}: {
  items: Crumb[];
  onDark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {isLast ? (
                <span
                  aria-current="page"
                  className={onDark ? "text-white/70" : "text-muted-foreground"}
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className={
                      onDark
                        ? "text-white/80 hover:text-gold"
                        : "text-navy hover:text-gold"
                    }
                  >
                    {item.name}
                  </Link>
                  <ChevronRight
                    className={cn(
                      "size-3.5 rtl:rotate-180",
                      onDark ? "text-white/40" : "text-muted-foreground"
                    )}
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
