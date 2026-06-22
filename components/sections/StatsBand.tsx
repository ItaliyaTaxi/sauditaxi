"use client";

import { useEffect, useRef, useState } from "react";

export interface Stat {
  /** Target number to count up to. */
  value: number;
  /** Suffix appended after the number, e.g. "+", "/7". */
  suffix?: string;
  /** Prefix, rarely used. */
  prefix?: string;
  label: string;
}

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return n;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const n = useCountUp(stat.value, run);
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-gold sm:text-4xl">
        {stat.prefix}
        {n.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="mt-1 text-sm text-white/75">{stat.label}</div>
    </div>
  );
}

/**
 * Dark, premium statistics band with count-up animation that triggers when the
 * band scrolls into view. Numbers are passed in (kept dynamic by callers).
 */
export function StatsBand({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRun(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 ring-1 ring-white/10 backdrop-blur lg:grid-cols-4"
        >
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
