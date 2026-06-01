import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { heroImages } from "@/lib/hero";
import type { Crumb } from "@/components/Breadcrumbs";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  updated: string;
  crumbs: Crumb[];
  sections: LegalSection[];
}

export function LegalPage({ title, subtitle, updated, crumbs, sections }: LegalPageProps) {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema(crumbs)} />
      <PageHeader
        title={title}
        subtitle={subtitle}
        crumbs={crumbs}
        backgroundImage={heroImages.city}
        showCtas={false}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">Last updated: {updated}</p>

          <div className="mt-8 space-y-10">
            {sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-navy">
                  {i + 1}. {section.heading}
                </h2>
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
            Looking for something else? Visit our{" "}
            <Link href="/contact" className="font-semibold text-navy hover:text-gold">
              Contact page
            </Link>{" "}
            or{" "}
            <Link href="/get-quote" className="font-semibold text-navy hover:text-gold">
              request a quote
            </Link>
            . See also our{" "}
            <Link href="/privacy-policy" className="font-semibold text-navy hover:text-gold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-and-conditions" className="font-semibold text-navy hover:text-gold">
              Terms &amp; Conditions
            </Link>
            .
          </div>
        </div>
      </section>
    </>
  );
}
