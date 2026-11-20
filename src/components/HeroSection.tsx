"use client";

import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Github,
} from "lucide-react";
import {
  type Locale,
  type PortfolioDictionary,
  type TopologyNode,
  PROFILE_LINKS,
} from "@/content/portfolio-data";
import { HeroControlPlane } from "@/components/HeroControlPlane";

interface HeroSectionProps {
  locale: Locale;
  dict: PortfolioDictionary["hero"];
  topologyNodes: TopologyNode[];
}

export function HeroSection({
  locale,
  dict,
  topologyNodes,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Top Eyebrow & Availability Badge */}
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-mono text-xs font-medium text-zinc-100">
              {dict.availability}
            </span>
          </div>

          <span className="hidden font-mono text-[11px] tracking-widest text-zinc-500 sm:inline">
            {dict.eyebrow}
          </span>
        </div>

        {/* Main 12-Column Hero Grid: 7 Cols Copy + 5 Cols Live Control Plane */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="text-balance text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.04em] text-zinc-50 sm:text-[3.35rem] lg:text-[3.75rem]">
              {dict.headlinePrimary}{" "}
              <span className="text-zinc-500">{dict.headlineMuted}</span>
            </h1>

            <p className="mt-6 max-w-[62ch] text-pretty text-base leading-[1.68] text-zinc-400 sm:text-[17px]">
              {dict.bio}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-zinc-100 px-5 text-sm font-semibold text-zinc-950 transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.16)]"
              >
                <span>{dict.ctaProjects}</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href={PROFILE_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/[0.1] bg-[#121215] px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-white/[0.2] hover:bg-[#18181B] hover:text-white"
              >
                <Github className="h-4 w-4 text-zinc-400" />
                <span>{dict.ctaGithub}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
              </a>

              <a
                href="#pesquisa"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/[0.08] bg-[#0D0D10] px-4 font-mono text-xs font-medium text-zinc-300 transition-colors hover:border-[var(--accent-border)] hover:text-white"
              >
                <BookOpen className="h-3.5 w-3.5 text-[var(--accent)]" />
                <span>{dict.ctaResearch}</span>
              </a>
            </div>

            {/* Telemetry Strip (3 Engineering Pillars) */}
            <div className="mt-11 grid grid-cols-1 gap-3 border-t border-white/[0.08] pt-7 sm:grid-cols-3">
              {dict.telemetry.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/[0.06] bg-[#121215]/60 px-4 py-3"
                >
                  <div className="font-mono text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
                    {item.label}
                  </div>
                  <div className="mt-1 font-mono text-sm font-semibold text-zinc-100">
                    {item.value}
                  </div>
                  <div className="mt-0.5 text-xs text-zinc-400">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Live Topology & CLI Control Plane */}
          <div className="lg:col-span-5">
            <HeroControlPlane
              locale={locale}
              nodes={topologyNodes}
              visualTabs={dict.visualTabs}
              topologyHint={dict.topologyHint}
              terminalHint={dict.terminalHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
