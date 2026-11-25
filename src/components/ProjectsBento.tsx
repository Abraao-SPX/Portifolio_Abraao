"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  FolderGit2,
  Sparkles,
  X,
} from "lucide-react";
import {
  type PortfolioDictionary,
  type ProjectCategory,
  type ProjectItem,
  PROFILE_LINKS,
} from "@/content/portfolio-data";
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
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const visibleProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const matchesTech = (project: ProjectItem) => {
    if (!highlightedTech) return false;
    const q = highlightedTech.toLowerCase();
    return project.stack.some(
      (s) => s.toLowerCase().includes(q) || q.includes(s.toLowerCase())
    );
  };

  const getSpanClass = (span: ProjectItem["featuredSpan"]) => {
    if (activeCategory !== "all") return "lg:col-span-6";
    switch (span) {
      case "col-7":
        return "lg:col-span-7";
      case "col-5":
        return "lg:col-span-5";
      case "col-6":
        return "lg:col-span-6";
    }
  };

  const getToneBadgeStyle = (tone: ProjectItem["tone"]) => {
    switch (tone) {
      case "terracotta":
        return "border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent)]";
      case "cobalt":
        return "border-[var(--cobalt-border)] bg-[var(--cobalt-soft)] text-[var(--cobalt)]";
      case "sage":
        return "border-[var(--sage-border)] bg-[var(--sage-soft)] text-[var(--sage)]";
      case "amber":
        return "border-[var(--amber-border)] bg-[var(--amber-soft)] text-[var(--amber)]";
    }
  };

  const getTopBarColor = (tone: ProjectItem["tone"]) => {
    switch (tone) {
      case "terracotta":
        return "bg-[var(--accent)]";
      case "cobalt":
        return "bg-[var(--cobalt)]";
      case "sage":
        return "bg-[var(--sage)]";
      case "amber":
        return "bg-[var(--amber)]";
    }
  };

  return (
    <section id="projetos" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Header & Warm Category Pills */}
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

          <div
            role="tablist"
            aria-label="Filtrar projetos"
            className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-2xs"
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
                    "rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all",
                    active
                      ? "bg-[var(--ink)] text-[var(--bg-canvas)] shadow-2xs"
                      : "text-[var(--ink-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--ink)]"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stack Filter Banner */}
        {highlightedTech && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-3">
            <div className="flex items-center gap-2 text-xs font-medium text-[var(--ink)] sm:text-sm">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              <span>{dict.labels.filteringBy}</span>
              <span className="rounded-lg border border-[var(--accent-border)] bg-[var(--surface)] px-2.5 py-0.5 font-mono text-xs font-semibold text-[var(--accent)]">
                {highlightedTech}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onSelectTech(null)}
              className="inline-flex items-center gap-1 rounded-lg bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--ink)] shadow-2xs hover:text-[var(--accent)]"
            >
              <span>{dict.labels.clearTechFilter}</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {visibleProjects.map((project) => {
            const isHighlighted = matchesTech(project);

            return (
              <article
                key={project.id}
                className={cn(
                  "editorial-card relative flex flex-col justify-between overflow-hidden rounded-3xl transition-all",
                  getSpanClass(project.featuredSpan),
                  isHighlighted &&
                    "ring-2 ring-[var(--accent)] border-[var(--accent)]"
                )}
              >
                {/* Subtle Color Accent Ribbon */}
                <div
                  className={cn("h-1 w-full", getTopBarColor(project.tone))}
                />

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    {/* Top Meta Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                          getToneBadgeStyle(project.tone)
                        )}
                      >
                        {project.badge}
                      </span>

                      <span className="font-serif-editorial text-xl italic text-[var(--ink-muted)]">
                        Nº {project.id} · {project.year}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--ink-secondary)]">
                      {project.tagline}
                    </p>

                    {/* Warm Notebook Architectural Sketch */}
                    <div className="blueprint-surface my-5 overflow-hidden rounded-2xl border border-[var(--border)] px-3 py-2">
                      <ProjectDiagram type={project.diagramType} />
                    </div>

                    {/* Human Story -> Engineering -> Outcome */}
                    <div className="space-y-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/75 p-4 sm:p-5">
                      <div>
                        <div className="font-mono text-[10px] font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
                          {dict.labels.whyItMatters}
                        </div>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--ink-secondary)]">
                          {project.humanStory}
                        </p>
                      </div>

                      <div className="h-px bg-[var(--border)]" />

                      <div>
                        <div className="font-mono text-[10px] font-semibold tracking-wider text-[var(--accent)] uppercase">
                          {dict.labels.howItsBuilt}
                        </div>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--ink)]">
                          {project.engineeringSolution}
                        </p>
                      </div>

                      <div className="h-px bg-[var(--border)]" />

                      <div>
                        <div className="font-mono text-[10px] font-semibold tracking-wider text-[var(--sage)] uppercase">
                          {dict.labels.outcome}
                        </div>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--ink-secondary)]">
                          {project.impactResult}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Stack Pills & Links */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => {
                        const selected =
                          highlightedTech?.toLowerCase() === tech.toLowerCase();
                        return (
                          <button
                            key={tech}
                            type="button"
                            onClick={() =>
                              onSelectTech(selected ? null : tech)
                            }
                            className={cn(
                              "rounded-lg border px-2.5 py-1 font-mono text-[11px] transition-colors",
                              selected
                                ? "border-[var(--accent)] bg-[var(--accent-soft)] font-semibold text-[var(--accent)]"
                                : "border-[var(--border)] bg-[var(--surface-muted)] text-[var(--ink-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
                            )}
                          >
                            {tech}
                          </button>
                        );
                      })}
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--ink)] px-3.5 py-2 text-xs font-medium text-[var(--bg-canvas)] transition-opacity hover:opacity-90"
                          >
                            <span>{dict.labels.openLive}</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}

                        {project.links.paper && (
                          <a
                            href="#pesquisa"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--cobalt-border)] bg-[var(--cobalt-soft)] px-3.5 py-2 text-xs font-medium text-[var(--cobalt)]"
                          >
                            <BookOpen className="h-3.5 w-3.5" />
                            <span>{dict.labels.readPaper}</span>
                          </a>
                        )}

                        {project.links.repo && (
                          <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-2 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--bg-subtle)]"
                          >
                            <Code2 className="h-3.5 w-3.5 text-[var(--ink-muted)]" />
                            <span>{dict.labels.viewCode}</span>
                          </a>
                        )}

                        {project.links.secondaryRepo && (
                          <a
                            href={project.links.secondaryRepo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-xs text-[var(--ink-secondary)] hover:text-[var(--ink)]"
                          >
                            <span>{project.links.secondaryRepo.label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-medium text-[var(--accent)] underline-offset-4 hover:underline"
                      >
                        {dict.labels.readCaseStudy} →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Open Notebook GitHub Shelf (+29 Repositories) */}
        <div className="editorial-card mt-8 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-[var(--border)] pb-6 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[var(--accent)]">
                <FolderGit2 className="h-4 w-4" />
                <span>{dict.githubShelf.eyebrow}</span>
              </div>
              <h3 className="mt-1.5 text-xl font-semibold text-[var(--ink)]">
                {dict.githubShelf.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-[var(--ink-secondary)]">
                {dict.githubShelf.description}
              </p>
            </div>

            <a
              href={`${PROFILE_LINKS.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 py-2.5 text-xs font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--bg-subtle)] lg:self-auto"
            >
              <span>{dict.githubShelf.cta}</span>
              <ArrowUpRight className="h-4 w-4 text-[var(--accent)]" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {dict.githubShelf.items.map((repo) => (
              <div
                key={repo.name}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]/65 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-[var(--ink)]">
                    {repo.name}
                  </span>
                </div>
                <div className="mt-1 font-mono text-[11px] text-[var(--accent)]">
                  {repo.tech}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-secondary)]">
                  {repo.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Architecture Case Study Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className={cn(
                    "inline-flex rounded-full border px-3 py-0.5 text-xs font-medium",
                    getToneBadgeStyle(selectedProject.tone)
                  )}
                >
                  {selectedProject.badge}
                </span>
                <h3
                  id="case-study-title"
                  className="mt-2 text-2xl font-semibold text-[var(--ink)]"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--ink-secondary)]">
                  {selectedProject.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={dict.labels.closeDrawer}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-2 text-[var(--ink-secondary)] hover:text-[var(--ink)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="blueprint-surface my-5 rounded-2xl border border-[var(--border)] p-3">
              <ProjectDiagram type={selectedProject.diagramType} />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {selectedProject.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-3.5"
                >
                  <div className="font-mono text-[10px] text-[var(--ink-muted)] uppercase">
                    {h.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[var(--ink)]">
                    {h.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-4">
              <div className="font-mono text-[10px] font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
                {dict.labels.pipeline}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {selectedProject.architectureSteps.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--ink)]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--sage)]" />
                      {step}
                    </span>
                    {idx < selectedProject.architectureSteps.length - 1 && (
                      <span className="text-xs text-[var(--ink-muted)]">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-relaxed">
              <div>
                <div className="font-mono text-xs font-semibold text-[var(--ink-muted)]">
                  {dict.labels.whyItMatters}
                </div>
                <p className="mt-1 text-[var(--ink-secondary)]">
                  {selectedProject.humanStory}
                </p>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-[var(--accent)]">
                  {dict.labels.howItsBuilt}
                </div>
                <p className="mt-1 text-[var(--ink)]">
                  {selectedProject.engineeringSolution}
                </p>
              </div>
              <div>
                <div className="font-mono text-xs font-semibold text-[var(--sage)]">
                  {dict.labels.outcome}
                </div>
                <p className="mt-1 text-[var(--ink-secondary)]">
                  {selectedProject.impactResult}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
