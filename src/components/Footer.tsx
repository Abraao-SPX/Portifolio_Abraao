"use client";

import React from "react";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-secondary bg-background">
      <p>{siteConfig.footer.copy}</p>
      
      <div className="flex gap-6">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
          Voltar ao topo &uarr;
        </button>
      </div>

      <p>{siteConfig.footer.note}</p>
    </footer>
  );
}

