"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  Copy,
  FileText,
  GraduationCap,
} from "lucide-react";
import {
  type PortfolioDictionary,
  PROFILE_LINKS,
} from "@/content/portfolio-data";

interface ResearchSectionProps {
  dict: PortfolioDictionary["researchSection"];
}

export function ResearchSection({ dict }: ResearchSectionProps) {
  const [copied, setCopied] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const handleCopyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(dict.paper.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShowBibtex(true);
    }
  };

  return (
    <section
      id="pesquisa"
      className="border-y border-[var(--border)] bg-[var(--bg-subtle)]/50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs font-medium text-[var(--cobalt)]">
            {dict.eyebrow}
          </div>
          <h2 className="mt-2.5 text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
            {dict.titleStart}{" "}
            <span className="font-serif-editorial text-[1.12em] font-normal italic text-[var(--cobalt)]">
              {dict.titleItalic}
            </span>
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-[var(--ink-secondary)]">
            {dict.subtitle}
          </p>
        </div>

        {/* 12-Col Grid: 7 Cols Academic Offprint + Journey, 5 Cols M.Sc. Research Lines */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left 7 Cols */}
          <div className="space-y-6 lg:col-span-7">
            {/* Academic Journal Offprint Card */}
            <article className="editorial-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1.5 bg-[var(--cobalt)]"
              />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--cobalt-border)] bg-[var(--cobalt-soft)] px-3 py-1 text-xs font-semibold text-[var(--cobalt)]">
                  <Award className="h-3.5 w-3.5" />
                  {dict.paper.stamp}
                </span>
                <span className="font-mono text-xs text-[var(--ink-muted)]">
                  SBC · Peer-Reviewed
                </span>
              </div>

              <div className="mt-4 text-xs font-medium text-[var(--accent)]">
                {dict.paper.venue}
              </div>

              <h3 className="font-serif-editorial mt-2 text-2xl leading-snug text-[var(--ink)] sm:text-[1.85rem]">
                {dict.paper.title}
              </h3>

              <p className="mt-1.5 text-xs font-medium text-[var(--ink-muted)]">
                {dict.paper.authors} · {dict.paper.publisher}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-secondary)]">
                {dict.paper.story}
              </p>

              {/* Takeaways Box */}
              <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-4 sm:p-5">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
                  {dict.paper.takeawaysTitle}
                </div>
                <ul className="mt-2.5 space-y-2">
                  {dict.paper.takeaways.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[var(--ink)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cobalt)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Citation Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-[var(--border)] pt-5">
                <button
                  type="button"
                  onClick={handleCopyBibtex}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--ink)] px-4 py-2.5 text-xs font-medium text-[var(--bg-canvas)] transition-opacity hover:opacity-90"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>{dict.paper.copiedBibtex}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{dict.paper.copyBibtex}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowBibtex((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-2.5 font-mono text-xs font-medium text-[var(--ink)] hover:bg-[var(--bg-subtle)]"
                >
                  <FileText className="h-3.5 w-3.5 text-[var(--cobalt)]" />
                  <span>BibTeX</span>
                </button>

                <a
                  href={PROFILE_LINKS.sbcPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-3.5 py-2.5 text-xs font-medium text-[var(--ink-secondary)] hover:text-[var(--ink)]"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{dict.paper.openSbc}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <span className="sr-only" aria-live="polite">
                {copied ? dict.paper.copiedBibtex : ""}
              </span>

              {showBibtex && (
                <pre className="mt-4 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-4 font-mono text-[11px] leading-relaxed text-[var(--ink)]">
                  <code>{dict.paper.bibtex}</code>
                </pre>
              )}
            </article>

            {/* Academic Journey Card */}
            <div className="editorial-card rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {dict.journeyTitle}
                </h3>
                <GraduationCap className="h-5 w-5 text-[var(--cobalt)]" />
              </div>

              <div className="mt-5 space-y-5">
                {dict.journey.map((step, i) => (
                  <div
                    key={step.role}
                    className="relative pl-6 before:absolute before:top-2 before:left-1.5 before:h-full before:w-px before:bg-[var(--border-strong)] last:before:hidden"
                  >
                    <span
                      className="absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 border-[var(--surface)]"
                      style={{
                        backgroundColor:
                          i === 0 ? "var(--cobalt)" : "var(--accent)",
                      }}
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[var(--cobalt)]">
                        {step.period}
                      </span>
                      <span className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-2.5 py-0.5 text-[11px] text-[var(--ink-muted)]">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="mt-1 text-base font-semibold text-[var(--ink)]">
                      {step.role}
                    </h4>
                    <div className="text-xs font-medium text-[var(--ink-secondary)]">
                      {step.place}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--ink-muted)]">
                      {step.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Research Interests (UFS M.Sc.) + Lattes */}
          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
              <div className="text-xs font-semibold text-[var(--ink)]">
                {dict.researchFocusTitle}
              </div>
            </div>

            {dict.researchLines.map((line) => (
              <div
                key={line.number}
                className="editorial-card rounded-3xl p-6"
              >
                <div className="font-serif-editorial text-2xl italic text-[var(--cobalt)]">
                  {line.number}.
                </div>
                <h3 className="mt-1 text-lg font-semibold text-[var(--ink)]">
                  {line.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
                  {line.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {line.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink-secondary)]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Lattes Card */}
            <div className="editorial-card flex items-center justify-between gap-4 rounded-3xl p-6">
              <div>
                <div className="font-mono text-[10px] tracking-wider text-[var(--ink-muted)] uppercase">
                  CNPq · Currículo Acadêmico
                </div>
                <div className="mt-1 text-base font-semibold text-[var(--ink)]">
                  Currículo Lattes
                </div>
              </div>
              <a
                href={PROFILE_LINKS.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 py-2 text-xs font-semibold text-[var(--ink)] hover:bg-[var(--bg-subtle)]"
              >
                <span>Acessar Lattes</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[var(--cobalt)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
