"use client";

import React, { useState } from "react";
import {
  Award,
  BookOpen,
  Check,
  Copy,
  FileCode2,
  GraduationCap,
  ArrowUpRight,
  Microscope,
} from "lucide-react";
import {
  type PortfolioDictionary,
  PROFILE_LINKS,
} from "@/content/portfolio-data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface ResearchSectionProps {
  dict: PortfolioDictionary["researchSection"];
}

export function ResearchSection({ dict }: ResearchSectionProps) {
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const handleCopyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(dict.featuredPaper.bibtex);
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 2400);
    } catch {
      setShowBibtex(true);
    }
  };

  return (
    <section
      id="pesquisa"
      className="relative border-t border-white/[0.07] bg-[#0C0C0F]/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Section Header */}
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

        {/* Main 12-Column Grid: 7 Cols Featured Paper + 5 Cols Research Lines & Timeline */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left 7 Cols: Featured Publication Card (CLIHC 2026 / SBC) + Academic Timeline */}
          <div className="space-y-6 lg:col-span-7">
            <SpotlightCard as="article" className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1">
                  <Award className="h-3.5 w-3.5 text-blue-400" />
                  <span className="font-mono text-[11px] font-semibold text-blue-300">
                    {dict.featuredPaper.badge}
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400">
                  SBC · CLIHC 2026
                </span>
              </div>

              <div className="mt-4 font-mono text-xs text-[var(--accent)]">
                {dict.featuredPaper.conference}
              </div>

              <h3 className="mt-2 text-balance text-xl font-semibold leading-snug text-zinc-50 sm:text-2xl">
                {dict.featuredPaper.title}
              </h3>

              <p className="mt-1.5 font-mono text-xs text-zinc-400">
                {dict.featuredPaper.authors} · {dict.featuredPaper.publisher}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {dict.featuredPaper.abstract}
              </p>

              {/* Key Contributions */}
              <div className="mt-5 rounded-xl border border-white/[0.07] bg-[#0D0D10] p-4">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                  {dict.featuredPaper.contributionsTitle}
                </div>
                <ul className="mt-2.5 space-y-2">
                  {dict.featuredPaper.contributions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions: Copy BibTeX, Toggle BibTeX Preview, SBC Link */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-white/[0.07] pt-5">
                <button
                  type="button"
                  onClick={handleCopyBibtex}
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 font-mono text-xs font-semibold text-zinc-950 transition-all hover:bg-white"
                >
                  {copiedBibtex ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span>{dict.featuredPaper.copiedBibtex}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{dict.featuredPaper.copyBibtex}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowBibtex((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-[#16161A] px-3.5 py-2 font-mono text-xs text-zinc-200 transition-colors hover:border-white/[0.2] hover:text-white"
                >
                  <FileCode2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span>BibTeX</span>
                </button>

                <a
                  href={PROFILE_LINKS.sbcPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#121215] px-3.5 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-white/[0.18] hover:text-white"
                >
                  <BookOpen className="h-3.5 w-3.5 text-zinc-400" />
                  <span>{dict.featuredPaper.viewPaper}</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                </a>
              </div>

              <span className="sr-only" aria-live="polite">
                {copiedBibtex ? dict.featuredPaper.copiedBibtex : ""}
              </span>

              {showBibtex && (
                <pre className="mt-4 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#08080A] p-4 font-mono text-[11px] leading-relaxed text-zinc-300">
                  <code>{dict.featuredPaper.bibtex}</code>
                </pre>
              )}
            </SpotlightCard>

            {/* Academic Trajectory Timeline */}
            <SpotlightCard className="p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                  {dict.timelineTitle}
                </span>
                <GraduationCap className="h-4 w-4 text-[var(--accent)]" />
              </div>

              <div className="mt-5 space-y-5">
                {dict.timeline.map((item, idx) => (
                  <div
                    key={item.title}
                    className="relative pl-6 before:absolute before:top-2 before:left-1.5 before:h-full before:w-px before:bg-white/[0.08] last:before:hidden"
                  >
                    <span
                      className="absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 border-[#121215]"
                      style={{
                        backgroundColor:
                          idx === 0 ? "var(--accent)" : "#3F3F46",
                      }}
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[var(--accent)]">
                        {item.period}
                      </span>
                      <span className="rounded-md border border-white/[0.07] bg-[#0D0D10] px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="mt-1 text-base font-semibold text-zinc-100">
                      {item.title}
                    </h4>
                    <div className="font-mono text-xs text-zinc-400">
                      {item.institution}
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Right 5 Cols: Research Lines (Mestrado CC — UFS) */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#121215] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <Microscope className="h-4 w-4 text-[var(--accent)]" />
                <span className="font-mono text-xs font-semibold tracking-wider text-zinc-200 uppercase">
                  {dict.researchLinesTitle}
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-500">
                UFS · PROCC
              </span>
            </div>

            {dict.researchLines.map((line) => (
              <SpotlightCard key={line.code} className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--accent)]">
                    {line.code}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    Research Track
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-zinc-100">
                  {line.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {line.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {line.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.07] bg-[#0D0D10] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}

            {/* Lattes & Academic Profile Card */}
            <SpotlightCard className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
                    CNPQ · PRODUÇÃO CIENTÍFICA
                  </div>
                  <div className="mt-1 text-base font-semibold text-zinc-100">
                    Currículo Lattes & Repositório Acadêmico
                  </div>
                </div>
                <a
                  href={PROFILE_LINKS.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-[#18181B] px-3.5 py-2 font-mono text-xs font-medium text-zinc-100 transition-colors hover:border-[var(--accent-border)] hover:text-white"
                >
                  <span>Lattes</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[var(--accent)]" />
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
