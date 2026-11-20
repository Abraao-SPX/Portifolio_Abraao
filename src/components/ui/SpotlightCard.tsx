"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  highlighted?: boolean;
}

export function SpotlightCard({
  children,
  className,
  as: Component = "div",
  highlighted = false,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spotlight-x", `${x}px`);
    el.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <Component
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={cn(
        "spotlight-card group relative overflow-hidden rounded-2xl border bg-[#121215]/90 transition-all duration-200",
        highlighted
          ? "border-[var(--accent-border)] ring-1 ring-[var(--accent-border)] bg-[#15171c]"
          : "border-white/[0.08] hover:border-white/[0.15] hover:bg-[#151519]",
        className
      )}
      {...props}
    >
      {/* Top 1px specular hairline highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
      />
      {/* Radial mouse spotlight overlay */}
      <div
        aria-hidden="true"
        className="spotlight-overlay pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {/* Border spotlight mask */}
      <div
        aria-hidden="true"
        className="spotlight-border pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
