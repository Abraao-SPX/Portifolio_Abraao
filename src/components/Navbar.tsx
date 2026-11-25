"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import {
  type Locale,
  type PortfolioDictionary,
  PROFILE_LINKS,
} from "@/content/portfolio-data";
import { cn } from "@/lib/utils";

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  theme: "light" | "dark";
  onThemeChange: (theme: "light" | "dark") => void;
  dict: PortfolioDictionary["nav"];
}

export function Navbar({
  locale,
  onLocaleChange,
  theme,
  onThemeChange,
  dict,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("sobre");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
      const ids = ["sobre", "projetos", "pesquisa", "stack", "contato"];
      const pos = window.scrollY + 240;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "sobre", label: dict.about, href: "#sobre" },
    { id: "projetos", label: dict.projects, href: "#projetos" },
    { id: "pesquisa", label: dict.research, href: "#pesquisa" },
    { id: "stack", label: dict.craft, href: "#stack" },
    { id: "contato", label: dict.contact, href: "#contato" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-[1180px] items-center justify-between rounded-2xl px-4 transition-all duration-200 sm:px-5",
          scrolled
            ? "border border-[var(--border)] bg-[var(--surface)]/90 shadow-[var(--shadow-card)] backdrop-blur-md"
            : "border border-transparent bg-transparent"
        )}
      >
        {/* Personal Editorial Signature */}
        <a
          href="#top"
          className="group flex items-center gap-3 focus-visible:outline-none"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xs transition-transform duration-200 group-hover:-rotate-3">
            <span className="font-serif-editorial text-xl italic text-[var(--ink)]">
              A
            </span>
            <span className="ml-0.5 h-1.5 w-1.5 translate-y-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-[var(--ink)]">
              Abraão Paixão
            </div>
            <div className="font-mono text-[10px] text-[var(--ink-muted)]">
              abraao-dev.tech
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-xl px-3.5 py-1.5 text-[13.5px] font-medium transition-colors",
                  isActive
                    ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "text-[var(--ink-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--ink)]"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Theme, Locale & GitHub */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Light / Night Reading Mode */}
          <button
            type="button"
            onClick={() => onThemeChange(theme === "light" ? "dark" : "light")}
            title={theme === "light" ? dict.themeDark : dict.themeLight}
            aria-label={theme === "light" ? dict.themeDark : dict.themeLight}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
          >
            {theme === "light" ? (
              <Moon className="h-3.5 w-3.5" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-[var(--accent)]" />
            )}
          </button>

          {/* PT | EN Switch */}
          <div
            role="group"
            aria-label="Idioma"
            className="flex h-8 items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-0.5 font-mono text-[11px]"
          >
            <button
              type="button"
              onClick={() => onLocaleChange("pt")}
              className={cn(
                "rounded-lg px-2 py-1 transition-colors",
                locale === "pt"
                  ? "bg-[var(--bg-subtle)] font-semibold text-[var(--ink)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              )}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => onLocaleChange("en")}
              className={cn(
                "rounded-lg px-2 py-1 transition-colors",
                locale === "en"
                  ? "bg-[var(--bg-subtle)] font-semibold text-[var(--ink)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
              )}
            >
              EN
            </button>
          </div>

          <a
            href={PROFILE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--bg-subtle)]"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[var(--accent)]" />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => onThemeChange(theme === "light" ? "dark" : "light")}
            aria-label="Alternar tema"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)]"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4 text-[var(--accent)]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => onLocaleChange(locale === "pt" ? "en" : "pt")}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-xs font-semibold text-[var(--ink)]"
          >
            {locale.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)]"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-[1180px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-card-hover)] md:hidden">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-[var(--ink)] hover:bg-[var(--bg-subtle)]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[var(--accent)]">→</span>
              </a>
            ))}
          </nav>
          <div className="mt-3 border-t border-[var(--border)] pt-3">
            <a
              href={PROFILE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[var(--ink)] py-2.5 text-xs font-semibold text-[var(--bg-canvas)]"
            >
              <span>GitHub (@Abraao-SPX)</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
