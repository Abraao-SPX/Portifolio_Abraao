"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-20 border-t border-white/8 bg-background relative overflow-hidden">

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">

        {/* Left: name + note */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-6 text-center md:text-left">
          <span className="font-display font-bold text-white text-sm">{siteConfig.personal.name} Silva</span>
          <span className="hidden md:block text-white/10">|</span>
          <span className="text-xs text-secondary">{siteConfig.footer.note}</span>
        </div>

        {/* Center: copyright */}
        <p className="text-xs text-secondary/60 order-last md:order-none">{siteConfig.footer.copy}</p>

        {/* Right: back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-xs text-secondary hover:text-white transition-colors font-medium group"
        >
          Voltar ao topo
          <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
}