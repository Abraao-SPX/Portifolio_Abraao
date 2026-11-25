"use client";

import React from "react";
import type { PortfolioDictionary } from "@/content/portfolio-data";

interface AboutSectionProps {
  dict: PortfolioDictionary["aboutStrip"];
}

export function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="border-y border-[var(--border)] bg-[var(--bg-subtle)]/55 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="font-mono text-xs font-medium text-[var(--accent)]">
          {dict.eyebrow}
        </div>

        {/* Editorial Pull Quote */}
        <blockquote className="mt-4 max-w-4xl text-balance text-2xl leading-[1.28] font-medium tracking-[-0.02em] text-[var(--ink)] sm:text-3xl lg:text-[2.15rem]">
          &ldquo;{dict.quoteStart}{" "}
          <span className="font-serif-editorial text-[1.14em] font-normal italic text-[var(--accent)]">
            {dict.quoteHighlight}
          </span>{" "}
          {dict.quoteEnd}&rdquo;
        </blockquote>

        {/* First-person Human Narrative */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {dict.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-pretty text-[15.5px] leading-[1.75] text-[var(--ink-secondary)]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* 3 Craft Pillars */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {dict.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="editorial-card rounded-2xl p-5 sm:p-6"
            >
              <span className="font-serif-editorial text-2xl italic text-[var(--accent)]">
                {pillar.number}.
              </span>
              <h3 className="mt-2 text-base font-semibold text-[var(--ink)]">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-secondary)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
