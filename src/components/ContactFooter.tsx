"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  type PortfolioDictionary,
  PROFILE_LINKS,
} from "@/content/portfolio-data";

interface ContactFooterProps {
  contactDict: PortfolioDictionary["contactSection"];
  footerDict: PortfolioDictionary["footer"];
}

export function ContactFooter({
  contactDict,
  footerDict,
}: ContactFooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${PROFILE_LINKS.email}`;
    }
  };

  const links = [
    {
      label: "GitHub",
      handle: "github.com/Abraao-SPX",
      href: PROFILE_LINKS.github,
      icon: Github,
    },
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/abraaospx",
      href: PROFILE_LINKS.linkedin,
      icon: Linkedin,
    },
    {
      label: "Currículo Lattes",
      handle: "Produção Científica CNPq",
      href: PROFILE_LINKS.lattes,
      icon: GraduationCap,
    },
    {
      label: "PrintWeb (No ar)",
      handle: "printweb.me",
      href: PROFILE_LINKS.printweb,
      icon: Globe,
    },
  ];

  return (
    <>
      <section
        id="contato"
        className="border-t border-[var(--border)] bg-[var(--bg-subtle)]/65 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left 7 Cols */}
            <div className="lg:col-span-7">
              <div className="font-mono text-xs font-medium text-[var(--accent)]">
                {contactDict.eyebrow}
              </div>
              <h2 className="mt-2.5 text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl">
                {contactDict.titleStart}{" "}
                <span className="font-serif-editorial text-[1.12em] font-normal italic text-[var(--accent)]">
                  {contactDict.titleItalic}
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-base leading-relaxed text-[var(--ink-secondary)]">
                {contactDict.subtitle}
              </p>

              {/* Warm Tactile Email Card */}
              <div className="editorial-card mt-8 rounded-3xl p-6 sm:p-7">
                <div className="font-mono text-[11px] text-[var(--ink-muted)]">
                  {contactDict.emailCardLabel}
                </div>

                <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-sm font-semibold text-[var(--ink)] sm:text-base">
                      {PROFILE_LINKS.email}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--ink)] px-4 text-xs font-semibold text-[var(--bg-canvas)] transition-transform hover:-translate-y-0.5"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>{contactDict.copiedButton}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>{contactDict.copyButton}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PROFILE_LINKS.email}?subject=Ol%C3%A1%20Abra%C3%A3o!`}
                      className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 text-xs font-medium text-[var(--ink)] hover:bg-[var(--bg-subtle)]"
                    >
                      <span>{contactDict.writeEmailButton}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[var(--accent)]" />
                    </a>
                  </div>
                </div>

                <span className="sr-only" aria-live="polite">
                  {copied ? contactDict.copiedButton : ""}
                </span>
              </div>

              {/* Open To List */}
              <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="text-xs font-semibold text-[var(--ink)]">
                  {contactDict.openToTitle}
                </div>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {contactDict.openToList.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-[var(--ink-secondary)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sage)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Profiles */}
            <div className="lg:col-span-5">
              <div className="mb-3 text-xs font-semibold text-[var(--ink-muted)]">
                {contactDict.elsewhereTitle}
              </div>
              <div className="space-y-3">
                {links.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-card group flex items-center justify-between rounded-2xl p-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--ink-secondary)] transition-colors group-hover:border-[var(--accent-border)] group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-[var(--ink)]">
                            {item.label}
                          </div>
                          <div className="font-mono text-xs text-[var(--ink-muted)]">
                            {item.handle}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-[var(--ink-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warm Editorial Colophon Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg-canvas)] py-10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-2xl italic text-[var(--accent)]">
              Abraão Paixão
            </span>
            <span className="text-xs text-[var(--ink-muted)]">
              · {footerDict.location}
            </span>
          </div>

          <div className="text-xs text-[var(--ink-muted)]">
            © {new Date().getFullYear()} {footerDict.signature}
          </div>
        </div>
      </footer>
    </>
  );
}
