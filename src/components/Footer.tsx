"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 bg-surfaceAlt relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 relative z-10">

        {/* Left */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-5 text-center md:text-left">
          <span className="font-mono text-sm text-primary">
            {siteConfig.personal.name}{" "}
            <span className="text-accent">{siteConfig.personal.surname}</span>
          </span>
          <span className="hidden md:block text-border">|</span>
          <span className="font-mono text-xs text-muted">
            <span className="text-secondary/40">// </span>
            {siteConfig.footer.note}
          </span>
        </div>

        {/* Center */}
        <p className="font-mono text-xs text-muted order-last md:order-none">
          {siteConfig.footer.copy}
        </p>

        {/* Right */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors group"
        >
          voltar ao topo
          <div className="w-7 h-7 rounded-lg border border-border flex items-center justify-center group-hover:border-borderHover group-hover:bg-surface transition-all">
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
}
