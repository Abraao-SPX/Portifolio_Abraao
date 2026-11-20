"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Terminal,
  Sparkles,
} from "lucide-react";
import {
  type Locale,
  type PortfolioDictionary,
  PROFILE_LINKS,
} from "@/content/portfolio-data";
import { cn } from "@/lib/utils";

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  accent: "emerald" | "cobalt";
  onAccentChange: (accent: "emerald" | "cobalt") => void;
  dict: PortfolioDictionary["nav"];
}

export function Navbar({
  locale,
  onLocaleChange,
  accent,
  onAccentChange,
  dict,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["projetos", "pesquisa", "stack", "contato"];
      const currentPos = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentPos >= top && currentPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("top");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projetos", label: dict.projects, href: "#projetos" },
    { id: "pesquisa", label: dict.research, href: "#pesquisa" },
    { id: "stack", label: dict.stack, href: "#stack" },
    { id: "contato", label: dict.contact, href: "#contato" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-white/[0.08] bg-[#09090B]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        {/* Monospace Brand Identity */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm font-medium tracking-tight text-zinc-100 focus-visible:outline-none"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/[0.1] bg-[#121215] text-[var(--accent)] transition-colors group-hover:border-[var(--accent-border)]">
            <Terminal className="h-3.5 w-3.5" />
          </span>
          <span>
            abraao<span className="text-zinc-500">.dev</span>
          </span>
          <span
            aria-hidden="true"
            className="inline-block h-3.5 w-1.5 animate-pulse bg-[var(--accent)]"
          />
        </a>

        {/* Primary Navigation Links */}
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
                  "relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors",
                  isActive
                    ? "text-zinc-100"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"
                )}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Controls: Accent Switch, PT/EN Switch & GitHub / Lattes CTA */}
        <div className="hidden items-center gap-2.5 md:flex">
          {/* Subtle Accent Toggle (Emerald #10B981 vs Cobalt #3B82F6) */}
          <button
            type="button"
            onClick={() =>
              onAccentChange(accent === "emerald" ? "cobalt" : "emerald")
            }
            title={dict.accentTitle}
            aria-label={dict.accentTitle}
            className="flex h-7 items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#121215] px-2.5 font-mono text-[11px] text-zinc-400 transition-colors hover:border-white/[0.16] hover:text-zinc-200"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: accent === "emerald" ? "#10B981" : "#3B82F6",
              }}
            />
            <span className="uppercase">{accent === "emerald" ? "EMR" : "COB"}</span>
          </button>

          {/* Language Toggle PT | EN */}
          <div
            role="group"
            aria-label="Idioma / Language"
            className="flex h-7 items-center rounded-lg border border-white/[0.08] bg-[#121215] p-0.5 font-mono text-[11px]"
          >
            <button
              type="button"
              onClick={() => onLocaleChange("pt")}
              className={cn(
                "rounded-md px-2 py-0.5 transition-colors",
                locale === "pt"
                  ? "bg-white/[0.1] font-medium text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => onLocaleChange("en")}
              className={cn(
                "rounded-md px-2 py-0.5 transition-colors",
                locale === "en"
                  ? "bg-white/[0.1] font-medium text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              EN
            </button>
          </div>

          {/* GitHub / Lattes Discrete Button */}
          <a
            href={PROFILE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 items-center gap-1 rounded-lg border border-white/[0.1] bg-[#121215] px-2.5 font-mono text-[11px] font-medium text-zinc-200 transition-all hover:border-[var(--accent-border)] hover:bg-[#18181B] hover:text-white"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3 w-3 text-zinc-400" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => onLocaleChange(locale === "pt" ? "en" : "pt")}
            className="rounded-lg border border-white/[0.08] bg-[#121215] px-2 py-1 font-mono text-[11px] font-medium text-zinc-300"
          >
            {locale.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-[#121215] text-zinc-300"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#09090B]/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#121215] px-4 py-3 text-sm font-medium text-zinc-200"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-zinc-500">#{item.id}</span>
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-2 pt-2">
            <button
              type="button"
              onClick={() =>
                onAccentChange(accent === "emerald" ? "cobalt" : "emerald")
              }
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#121215] px-3 py-2 font-mono text-xs text-zinc-300"
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>
                Accent: {accent === "emerald" ? "Emerald" : "Cobalt"}
              </span>
            </button>
            <a
              href={PROFILE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3.5 py-2 font-mono text-xs font-medium text-zinc-950"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
