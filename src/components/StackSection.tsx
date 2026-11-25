"use client";

import React from "react";
import { Sparkles, X } from "lucide-react";
import type { PortfolioDictionary } from "@/content/portfolio-data";
import { cn } from "@/lib/utils";

interface StackSectionProps {
  dict: PortfolioDictionary["craftSection"];
  selectedTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

export function StackSection({
  dict,
  selectedTech,
  onSelectTech,
}: StackSectionProps) {
  return (
    <section id="stack" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-medium text-[var(--accent)]">
              {dict.eyebrow}
            </div>
            <h2 className="mt-2.5 text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
              {dict.titleStart}{" "}
              <span className="font-serif-editorial text-[1.12em] font-normal italic text-[var(--accent)]">
                {dict.titleItalic}
              </span>
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-[var(--ink-secondary)]">
              {dict.subtitle}
            </p>
          </div>

          {selectedTech ? (
            <button
              type="button"
              onClick={() => onSelectTech(null)}
              className="inline-flex items-center gap-2 self-start rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold text-[var(--accent)] lg:self-auto"
            >
              <span>Filtro ativo: {selectedTech}</span>
              <X className="h-3.5 w-3.5" />
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>{dict.interactiveHint}</span>
            </div>
          )}
        </div>

        {/* 3 Architectural Columns */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {dict.groups.map((group) => (
            <div
              key={group.id}
              className="editorial-card flex flex-col justify-between rounded-3xl p-6 sm:p-7"
            >
              <div>
                <div className="font-mono text-[11px] font-medium text-[var(--accent)]">
                  {group.eyebrow}
                </div>
                <h3 className="mt-1.5 text-xl font-semibold text-[var(--ink)]">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-secondary)]">
                  {group.description}
                </p>

                <div className="mt-5 space-y-3">
                  {group.items.map((item) => {
                    const active = selectedTech === item.name;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() =>
                          onSelectTech(active ? null : item.name)
                        }
                        className={cn(
                          "w-full rounded-2xl border p-4 text-left transition-all",
                          active
                            ? "border-[var(--accent)] bg-[var(--accent-soft)] shadow-2xs"
                            : "border-[var(--border)] bg-[var(--surface-muted)]/75 hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "h-2 w-2 rounded-full",
                                item.core
                                  ? "bg-[var(--accent)]"
                                  : "bg-[var(--border-strong)]"
                              )}
                            />
                            <span className="text-sm font-semibold text-[var(--ink)]">
                              {item.name}
                            </span>
                          </div>
                          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--ink-muted)]">
                            {item.projects.length}{" "}
                            {item.projects.length === 1 ? "proj" : "projs"}
                          </span>
                        </div>

                        <div className="mt-1 text-xs font-medium text-[var(--ink-secondary)]">
                          {item.role}
                        </div>

                        <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-muted)]">
                          {item.story}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Habits / Personal Engineering Principles */}
        <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--bg-subtle)]/70 p-6 sm:p-8">
          <h3 className="font-serif-editorial text-2xl italic text-[var(--ink)]">
            {dict.principlesTitle}
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dict.principles.map((p, idx) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className="font-mono text-xs font-semibold text-[var(--accent)]">
                  0{idx + 1}
                </div>
                <h4 className="mt-1.5 text-sm font-semibold text-[var(--ink)]">
                  {p.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-secondary)]">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
