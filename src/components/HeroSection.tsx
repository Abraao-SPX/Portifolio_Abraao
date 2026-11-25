"use client";

import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  Coffee,
  Compass,
  GraduationCap,
  MapPin,
  User,
} from "lucide-react";
import {
  type PortfolioDictionary,
  PROFILE_LINKS,
} from "@/content/portfolio-data";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  dict: PortfolioDictionary["hero"];
}

export function HeroSection({ dict }: HeroSectionProps) {
  const [cardTab, setCardTab] = useState<"bio" | "blueprint">("bio");

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Warm Status & Location Pills */}
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--sage-border)] bg-[var(--sage-soft)] px-3.5 py-1 text-xs font-medium text-[var(--sage)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--sage)] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--sage)]" />
            </span>
            {dict.availabilityBadge}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--ink-secondary)]">
            <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
            {dict.locationBadge}
          </span>
        </div>

        {/* 12-Col Layout: 7 Cols Personal Editorial Intro + 5 Cols Field Notebook Card */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[var(--accent)] sm:text-base">
              {dict.greeting}
            </p>

            <h1 className="mt-3 text-balance text-[2.45rem] leading-[1.07] font-semibold tracking-[-0.035em] text-[var(--ink)] sm:text-[3.35rem] lg:text-[3.7rem]">
              {dict.headlineStart}{" "}
              <span className="font-serif-editorial text-[1.12em] font-normal italic text-[var(--accent)]">
                {dict.headlineItalic}
              </span>{" "}
              {dict.headlineEnd}
            </h1>

            <p className="mt-6 max-w-[60ch] text-pretty text-base leading-[1.72] text-[var(--ink-secondary)] sm:text-[17px]">
              {dict.lead}
            </p>

            {/* Tactile Human CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-[var(--ink)] px-5 text-sm font-medium text-[var(--bg-canvas)] shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span>{dict.ctaPrimary}</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href={PROFILE_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-4 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--bg-subtle)]"
              >
                <span>{dict.ctaSecondary}</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--accent)]" />
              </a>

              <a
                href="#pesquisa"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-[var(--cobalt-border)] bg-[var(--cobalt-soft)] px-4 text-xs font-medium text-[var(--cobalt)] transition-opacity hover:opacity-90"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>{dict.ctaPaper}</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Personal Field Card ("Caderno Pessoal & Como Projeto") */}
          <div className="lg:col-span-5">
            <div className="editorial-card relative overflow-hidden rounded-3xl">
              {/* Warm Terracotta Top Ribbon */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[var(--accent)] via-[#E07A5F] to-[var(--cobalt)]" />

              {/* Card Header with Personal Seal & Interactive Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface-muted)] px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] font-serif-editorial text-lg italic text-[var(--accent)]">
                    AP
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--ink)]">
                      Abraão Silva Paixão
                    </div>
                    <div className="font-mono text-[10px] text-[var(--ink-muted)]">
                      10°54&apos;S · 37°04&apos;W · Aracaju
                    </div>
                  </div>
                </div>

                {/* Flip Tabs */}
                <div className="flex rounded-xl border border-[var(--border)] bg-[var(--surface)] p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setCardTab("bio")}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-medium transition-colors",
                      cardTab === "bio"
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                    )}
                  >
                    <User className="h-3 w-3" />
                    <span>{dict.profileCard.tabBio}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCardTab("blueprint")}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-medium transition-colors",
                      cardTab === "blueprint"
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                    )}
                  >
                    <Compass className="h-3 w-3" />
                    <span>{dict.profileCard.tabBlueprint}</span>
                  </button>
                </div>
              </div>

              {cardTab === "bio" ? (
                <div className="p-5 sm:p-6">
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/70 p-3.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <div>
                        <div className="font-mono text-[10px] tracking-wider text-[var(--ink-muted)] uppercase">
                          {dict.profileCard.basedInLabel}
                        </div>
                        <div className="mt-0.5 text-xs font-medium text-[var(--ink)] sm:text-sm">
                          {dict.profileCard.basedInValue}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/70 p-3.5">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cobalt)]" />
                      <div>
                        <div className="font-mono text-[10px] tracking-wider text-[var(--ink-muted)] uppercase">
                          {dict.profileCard.educationLabel}
                        </div>
                        <div className="mt-0.5 text-xs font-medium text-[var(--ink)] sm:text-sm">
                          {dict.profileCard.educationValue}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/70 p-3.5">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sage)]" />
                      <div>
                        <div className="font-mono text-[10px] tracking-wider text-[var(--ink-muted)] uppercase">
                          {dict.profileCard.researchLabel}
                        </div>
                        <div className="mt-0.5 text-xs font-medium text-[var(--ink)] sm:text-sm">
                          {dict.profileCard.researchValue}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Author Note */}
                  <div className="mt-4 rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-canvas)] p-4">
                    <div className="flex items-start gap-2.5">
                      <Coffee className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <p className="text-xs leading-relaxed text-[var(--ink-secondary)] italic">
                        &ldquo;{dict.profileCard.currentlyNote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <div className="font-serif-editorial text-xl italic text-[var(--ink)]">
                    {dict.profileCard.blueprintTitle}
                  </div>
                  <p className="mt-0.5 text-xs text-[var(--ink-muted)]">
                    {dict.profileCard.blueprintCaption}
                  </p>

                  <div className="mt-4 space-y-3">
                    {dict.profileCard.blueprintStages.map((stage) => (
                      <div
                        key={stage.step}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-3.5"
                      >
                        <div className="font-mono text-[10px] font-semibold text-[var(--accent)] uppercase">
                          {stage.step}
                        </div>
                        <div className="mt-0.5 text-xs font-semibold text-[var(--ink)] sm:text-sm">
                          {stage.title}
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--ink-secondary)]">
                          {stage.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
