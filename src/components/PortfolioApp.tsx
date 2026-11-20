"use client";

import React, { useEffect, useState } from "react";
import {
  type Locale,
  portfolioContent,
} from "@/content/portfolio-data";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsBento } from "@/components/ProjectsBento";
import { ResearchSection } from "@/components/ResearchSection";
import { StackSection } from "@/components/StackSection";
import { ContactFooter } from "@/components/ContactFooter";

export function PortfolioApp() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [accent, setAccent] = useState<"emerald" | "cobalt">("emerald");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem("abraao_locale") as Locale | null;
      if (savedLocale === "pt" || savedLocale === "en") {
        setLocale(savedLocale);
      }
      const savedAccent = localStorage.getItem("abraao_accent") as
        | "emerald"
        | "cobalt"
        | null;
      if (savedAccent === "emerald" || savedAccent === "cobalt") {
        setAccent(savedAccent);
      }
    } catch {
      // Ignore storage access errors in strict privacy browsers
    }
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    try {
      localStorage.setItem("abraao_locale", nextLocale);
      document.documentElement.lang = nextLocale === "pt" ? "pt-BR" : "en";
    } catch {
      // ignore
    }
  };

  const handleAccentChange = (nextAccent: "emerald" | "cobalt") => {
    setAccent(nextAccent);
    try {
      localStorage.setItem("abraao_accent", nextAccent);
    } catch {
      // ignore
    }
  };

  const dict = portfolioContent[locale];

  return (
    <div
      data-accent={accent}
      className="relative min-h-screen bg-[#09090B] text-zinc-100 selection:bg-[var(--accent-muted)] selection:text-white"
    >
      {/* Subtle Top Light & Architectural 64px Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="bg-architectural-grid absolute inset-0" />
        <div
          className="absolute -top-48 left-1/2 h-[440px] w-[880px] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Skip to content link for accessibility */}
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-zinc-100 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-semibold focus:text-zinc-950"
      >
        {locale === "pt" ? "Pular para os projetos" : "Skip to projects"}
      </a>

      <div className="relative z-10">
        <Navbar
          locale={locale}
          onLocaleChange={handleLocaleChange}
          accent={accent}
          onAccentChange={handleAccentChange}
          dict={dict.nav}
        />

        <main>
          <HeroSection
            locale={locale}
            dict={dict.hero}
            topologyNodes={dict.topologyNodes}
          />

          <ProjectsBento
            dict={dict.projectsSection}
            projects={dict.projects}
            highlightedTech={selectedTech}
            onSelectTech={setSelectedTech}
          />

          <ResearchSection dict={dict.researchSection} />

          <StackSection
            dict={dict.stackSection}
            selectedTech={selectedTech}
            onSelectTech={setSelectedTech}
          />

          <ContactFooter
            contactDict={dict.contactSection}
            footerDict={dict.footer}
          />
        </main>
      </div>
    </div>
  );
}
