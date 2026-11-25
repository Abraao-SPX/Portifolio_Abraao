"use client";

import React, { useEffect, useState } from "react";
import { type Locale, portfolioContent } from "@/content/portfolio-data";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsBento } from "@/components/ProjectsBento";
import { ResearchSection } from "@/components/ResearchSection";
import { StackSection } from "@/components/StackSection";
import { ContactFooter } from "@/components/ContactFooter";

export function PortfolioApp() {
  const [locale, setLocale] = useState<Locale>("pt");
  // Default to warm light theme ("light") for a bright, human, editorial feel
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem("abraao_locale") as Locale | null;
      if (savedLocale === "pt" || savedLocale === "en") {
        setLocale(savedLocale);
      }
      const savedTheme = localStorage.getItem("abraao_theme_v4") as
        | "light"
        | "dark"
        | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    } catch {
      // Ignore storage access errors
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

  const handleThemeChange = (nextTheme: "light" | "dark") => {
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("abraao_theme_v4", nextTheme);
    } catch {
      // ignore
    }
  };

  const dict = portfolioContent[locale];

  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--ink)]">
      {/* Subtle Notebook Paper Dots & Warm Sunlight Wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="bg-notebook-dots absolute inset-0 opacity-55" />
        <div
          className="absolute -top-44 right-[-10%] h-[420px] w-[620px] rounded-full opacity-35 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-32 left-[-10%] h-[380px] w-[520px] rounded-full opacity-35 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--cobalt-soft) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Skip Link */}
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[var(--bg-canvas)]"
      >
        {locale === "pt" ? "Pular para os projetos" : "Skip to projects"}
      </a>

      <div className="relative z-10">
        <Navbar
          locale={locale}
          onLocaleChange={handleLocaleChange}
          theme={theme}
          onThemeChange={handleThemeChange}
          dict={dict.nav}
        />

        <main>
          <HeroSection dict={dict.hero} />

          <AboutSection dict={dict.aboutStrip} />

          <ProjectsBento
            dict={dict.projectsSection}
            projects={dict.projects}
            highlightedTech={selectedTech}
            onSelectTech={setSelectedTech}
          />

          <ResearchSection dict={dict.researchSection} />

          <StackSection
            dict={dict.craftSection}
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
