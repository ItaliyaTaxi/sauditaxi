"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fade-and-rise on scroll into view. Lightweight: a single IntersectionObserver
 * per element, fires once. Falls back to visible if JS/observer is unavailable,
 * and motion is disabled via CSS under prefers-reduced-motion.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Dynamic tag: typed as any so the shared ref isn't constrained to one
  // element type. Runtime behaviour is identical for div/li/section.
  const Tag = Component as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
