import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center text-white">
        <span className="text-6xl font-extrabold text-gold">404</span>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-white/80">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
          back on the road.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gold" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="white" size="lg">
            <Link href="/get-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
