"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  ExternalLink,
  GitBranch,
  Layers,
  Sparkles,
  X,
  CheckCircle2,
} from "lucide-react";
import {
  type PortfolioDictionary,
  type ProjectCategory,
  type ProjectItem,
  PROFILE_LINKS,
} from "@/content/portfolio-data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ProjectDiagram } from "@/components/ui/ProjectDiagrams";
import { cn } from "@/lib/utils";

interface ProjectsBentoProps {
  dict: PortfolioDictionary["projectsSection"];
  projects: ProjectItem[];
  highlightedTech: string | null;
  onSelectTech: (tech: string | null) => void;
}

export function ProjectsBento({
  dict,
  projects,
  highlightedTech,
  onSelectTech,
}: ProjectsBentoProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(
    null
  );

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      activeCategory === "all" || project.category === activeCategory;
    return categoryMatch;
  });

  const isProjectHighlightedByTech = (project: ProjectItem) => {
    if (!highlightedTech) return false;
    const query = highlightedTech.toLowerCase();
    return project.stack.some(
      (s) =>
        s.toLowerCase().includes(query) || query.includes(s.toLowerCase())
    );
  };

  const getSpanClass = (span: ProjectItem["featuredSpan"]) => {
    switch (span) {
      case "col-7":
        return "lg:col-span-7";
      case "col-5":
        return "lg:col-span-5";
      case "col-4":
        return "lg:col-span-4";
    }
  };

  const getStatusDotClass = (status: ProjectItem["status"]) => {
    switch (status) {
      case "live":
        return "bg-emerald-400";
      case "research":
        return "bg-blue-400";
      case "production":
        return "bg-[var(--accent)]";
      case "open-source":
        return "bg-amber-400";
    }
  };

  return (
    <section
      id="projetos"
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

          {/* Domain Filter Segmented Control */}
          <div
            role="tablist"
            aria-label="Filtrar projetos por domínio"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#121215] p-1"
          >
            {dict.filters.map((filter) => {
              const active = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(filter.id)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 font-mono text-xs transition-all",
                    active
                      ? "bg-zinc-100 font-semibold text-zinc-950 shadow-sm"
                      : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Technology Cross-Highlight Banner */}
        {highlightedTech && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-muted)] px-4 py-2.5">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-100">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>Stack selecionada:</span>
              <span className="rounded bg-white/[0.12] px-2 py-0.5 font-semibold text-white">
                {highlightedTech}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onSelectTech(null)}
              className="inline-flex items-center gap-1 font-mono text-xs text-zinc-300 hover:text-white"
            >
              <span>Limpar filtro</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Asymmetric 12-Column Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {filteredProjects.map((project) => {
            const techHighlighted = isProjectHighlightedByTech(project);

            return (
              <SpotlightCard
                key={project.id}
                as="article"
                highlighted={techHighlighted}
                className={cn(
                  "flex flex-col justify-between p-6 sm:p-7",
                  activeCategory === "all"
                    ? getSpanClass(project.featuredSpan)
                    : "lg:col-span-6"
                )}
              >
                <div>
                  {/* Top Bar: ID, Status Badge & Highlight Metric */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0D0D10] px-2.5 py-1">
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full",
                          getStatusDotClass(project.status)
                        )}
                      />
                      <span className="font-mono text-[10px] font-medium tracking-wider text-zinc-300 uppercase">
                        {project.statusLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                      <span className="rounded-md border border-white/[0.07] bg-[#0D0D10] px-2 py-0.5 text-zinc-300">
                        {project.highlightMetric}
                      </span>
                      <span className="text-zinc-600">#{project.id}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-50 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Custom Technical Architecture Schematic SVG */}
                  <div className="my-5 overflow-hidden rounded-xl border border-white/[0.07] bg-[#09090B]/90 px-3 py-2">
                    <ProjectDiagram type={project.diagramType} />
                  </div>

                  {/* Structured Case Study: Problema -> Arquitetura -> Resultado */}
                  <div className="space-y-2.5 rounded-xl border border-white/[0.06] bg-[#0D0D10]/80 p-4">
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[100px_1fr] sm:gap-3">
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                        {dict.labels.problem}
                      </span>
                      <p className="text-xs leading-relaxed text-zinc-300">
                        {project.problem}
                      </p>
                    </div>

                    <div className="h-px bg-white/[0.05]" />

                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[100px_1fr] sm:gap-3">
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-[var(--accent)] uppercase">
                        {dict.labels.architecture}
                      </span>
                      <p className="text-xs leading-relaxed text-zinc-200">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="h-px bg-white/[0.05]" />

                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[100px_1fr] sm:gap-3">
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                        {dict.labels.result}
                      </span>
                      <p className="text-xs leading-relaxed text-zinc-300">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Metrics, Stack Tags & Action Links */}
                <div className="mt-5 pt-2">
                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => {
                      const isSelected =
                        highlightedTech?.toLowerCase() === tech.toLowerCase();
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() =>
                            onSelectTech(isSelected ? null : tech)
                          }
                          className={cn(
                            "rounded-md border px-2 py-1 font-mono text-[11px] transition-colors",
                            isSelected
                              ? "border-[var(--accent)] bg-[var(--accent-muted)] text-white"
                              : "border-white/[0.07] bg-[#17171C] text-zinc-300 hover:border-white/[0.16] hover:text-white"
                          )}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>

                  {/* Action Links Row */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] pt-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-1.5 font-mono text-xs font-semibold text-zinc-950 transition-colors hover:bg-white"
                        >
                          <span>{dict.labels.demo}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}

                      {project.links.paper && (
                        <a
                          href="#pesquisa"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1.5 font-mono text-xs font-medium text-zinc-100 transition-colors hover:bg-[var(--accent)]/20"
                        >
                          <BookOpen className="h-3 w-3 text-[var(--accent)]" />
                          <span>{dict.labels.paper}</span>
                        </a>
                      )}

                      {project.links.repo && (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.09] bg-[#16161A] px-3 py-1.5 font-mono text-xs text-zinc-200 transition-colors hover:border-white/[0.18] hover:text-white"
                        >
                          <Code2 className="h-3.5 w-3.5 text-zinc-400" />
                          <span>{dict.labels.repo}</span>
                          <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                        </a>
                      )}

                      {project.links.secondaryRepo && (
                        <a
                          href={project.links.secondaryRepo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-white/[0.07] bg-[#121215] px-2.5 py-1.5 font-mono text-[11px] text-zinc-300 transition-colors hover:border-white/[0.16] hover:text-white"
                        >
                          <span>{project.links.secondaryRepo.label}</span>
                          <ArrowUpRight className="h-3 w-3 text-zinc-500" />
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setInspectedProject(project)}
                      className="inline-flex items-center gap-1 font-mono text-xs text-zinc-400 transition-colors hover:text-[var(--accent)]"
                    >
                      <Layers className="h-3.5 w-3.5" />
                      <span>{dict.labels.inspect}</span>
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}

          {/* 7th Bento Card: +29 GitHub Repositories Archive Card (4 cols on desktop) */}
          {activeCategory === "all" && (
            <SpotlightCard
              as="article"
              className="flex flex-col justify-between p-6 sm:p-7 lg:col-span-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-[var(--accent)] uppercase">
                    {dict.archiveCard.eyebrow}
                  </span>
                  <GitBranch className="h-4 w-4 text-zinc-500" />
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-zinc-50">
                  {dict.archiveCard.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {dict.archiveCard.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4">
                  {dict.archiveCard.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-mono text-[11px] text-zinc-300"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/[0.07] pt-4">
                <a
                  href={`${PROFILE_LINKS.github}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-xl border border-white/[0.1] bg-[#16161A] px-4 py-2.5 font-mono text-xs font-medium text-zinc-100 transition-all hover:border-[var(--accent-border)] hover:bg-[#1B1B20]"
                >
                  <span>{dict.archiveCard.cta}</span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--accent)]" />
                </a>
              </div>
            </SpotlightCard>
          )}
        </div>
      </div>

      {/* Deep-Dive Architecture Specification Modal */}
      {inspectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setInspectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.12] bg-[#121215] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-xs text-[var(--accent)]">
                  {inspectedProject.statusLabel} · #{inspectedProject.id}
                </div>
                <h3
                  id="modal-project-title"
                  className="mt-1 text-2xl font-semibold text-zinc-50"
                >
                  {inspectedProject.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {inspectedProject.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setInspectedProject(null)}
                aria-label={dict.labels.closeModal}
                className="rounded-lg border border-white/[0.1] bg-[#18181B] p-2 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Schematic */}
            <div className="my-5 rounded-xl border border-white/[0.08] bg-[#09090B] p-3">
              <ProjectDiagram type={inspectedProject.diagramType} />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-2.5">
              {inspectedProject.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/[0.07] bg-[#0D0D10] p-3"
                >
                  <div className="font-mono text-[10px] text-zinc-500 uppercase">
                    {m.label}
                  </div>
                  <div className="mt-1 font-mono text-xs font-semibold text-zinc-100">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Execution Pipeline Flow */}
            <div className="mt-5 rounded-xl border border-white/[0.07] bg-[#0D0D10] p-4">
              <div className="font-mono text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                {dict.labels.flow}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {inspectedProject.architectureFlow.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#16161A] px-2.5 py-1 font-mono text-xs text-zinc-200">
                      <CheckCircle2 className="h-3 w-3 text-[var(--accent)]" />
                      {step}
                    </span>
                    {i < inspectedProject.architectureFlow.length - 1 && (
                      <span className="font-mono text-xs text-zinc-600">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Problem / Architecture / Result */}
            <div className="mt-5 space-y-3 text-sm">
              <div>
                <div className="font-mono text-[11px] font-semibold text-zinc-400">
                  {dict.labels.problem}
                </div>
                <p className="mt-1 text-zinc-300">{inspectedProject.problem}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] font-semibold text-[var(--accent)]">
                  {dict.labels.architecture}
                </div>
                <p className="mt-1 text-zinc-200">
                  {inspectedProject.architecture}
                </p>
              </div>
              <div>
                <div className="font-mono text-[11px] font-semibold text-zinc-400">
                  {dict.labels.result}
                </div>
                <p className="mt-1 text-zinc-300">{inspectedProject.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
