"use client";

import React from "react";
import {
  Cpu,
  Database,
  Layout,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import type { PortfolioDictionary } from "@/content/portfolio-data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";

interface StackSectionProps {
  dict: PortfolioDictionary["stackSection"];
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

export function StackSection({
  dict,
  selectedTech,
  onSelectTech,
}: StackSectionProps) {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "backend":
        return <Cpu className="h-4 w-4 text-[var(--accent)]" />;
      case "data-cloud":
        return <Database className="h-4 w-4 text-[var(--accent)]" />;
      default:
        return <Layout className="h-4 w-4 text-[var(--accent)]" />;
    }
  };

  return (
    <section
      id="stack"
      className="relative border-t border-white/[0.07] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-[var(--accent)] uppercase">
              {dict.eyebrow}
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-zinc-50 sm:text-4xl">
              {dict.title}{" "}
              <span className="text-zinc-500">{dict.titleMuted}</span>
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-zinc-400">
              {dict.subtitle}
            </p>
          </div>

          {selectedTech ? (
            <div className="flex items-center gap-3 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] px-4 py-2">
              <span className="font-mono text-xs text-zinc-200">
                {dict.activeFilterLabel}{" "}
                <strong className="text-white">{selectedTech}</strong>
              </span>
              <button
                type="button"
                onClick={() => onSelectTech(null)}
                className="inline-flex items-center gap-1 rounded-md bg-white/[0.1] px-2 py-0.5 font-mono text-[11px] text-zinc-200 hover:text-white"
              >
                <span>{dict.clearFilter}</span>
                <X className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>{dict.filterHint}</span>
            </div>
          )}
        </div>

        {/* 3 Architectural Layer Columns */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {dict.categories.map((category) => (
            <SpotlightCard
              key={category.id}
              className="flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-[var(--accent)] uppercase">
                    {category.code}
                  </span>
                  {getCategoryIcon(category.id)}
                </div>

                <h3 className="mt-2.5 text-xl font-semibold text-zinc-50">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  {category.subtitle}
                </p>

                {/* Tech Items List */}
                <div className="mt-5 space-y-2.5">
                  {category.items.map((item) => {
                    const isSelected = selectedTech === item.name;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() =>
                          onSelectTech(isSelected ? null : item.name)
                        }
                        className={cn(
                          "w-full rounded-xl border p-3.5 text-left transition-all",
                          isSelected
                            ? "border-[var(--accent)] bg-[var(--accent-muted)]"
                            : "border-white/[0.06] bg-[#0D0D10]/90 hover:border-white/[0.15] hover:bg-[#15151A]"
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "h-1.5 w-1.5 rounded-full",
                                item.highlight
                                  ? "bg-[var(--accent)]"
                                  : "bg-zinc-600"
                              )}
                            />
                            <span className="font-mono text-xs font-semibold text-zinc-100">
                              {item.name}
                            </span>
                          </div>
                          <span className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">
                            {item.projects.length}{" "}
                            {item.projects.length === 1 ? "proj" : "projs"}
                          </span>
                        </div>

                        <div className="mt-1 font-mono text-[11px] text-zinc-400">
                          {item.role}
                        </div>

                        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                          {item.usage}
                        </p>

                        {/* Connected Projects Pills */}
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {item.projects.map((p) => (
                            <span
                              key={p}
                              className="rounded border border-white/[0.06] bg-[#141418] px-1.5 py-0.5 font-mono text-[10px] text-zinc-300"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Architectural Decision Records (ADRs & Standards Strip) */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#121215]/90 p-6 sm:p-7">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-zinc-300 uppercase">
            <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
            <span>{dict.architecturePrinciples.title}</span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dict.architecturePrinciples.items.map((adr) => (
              <div
                key={adr.code}
                className="rounded-xl border border-white/[0.06] bg-[#0D0D10] p-4"
              >
                <div className="font-mono text-[10px] font-semibold text-[var(--accent)]">
                  {adr.code}
                </div>
                <div className="mt-1 text-sm font-semibold text-zinc-100">
                  {adr.name}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                  {adr.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
