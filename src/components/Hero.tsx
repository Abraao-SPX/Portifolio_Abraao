"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-20 relative pt-20 pb-10 overflow-hidden">
      
      {/* Decoração sútil minimalista (Glow) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] blur-[120px] pointer-events-none w-[600px] h-[600px] bg-white rounded-full mix-blend-screen scale-150 -translate-x-1/4"></div>

      <div className="max-w-6xl z-10 hero-content relative">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-secondary tracking-widest uppercase text-xs md:text-sm mb-6 flex items-center gap-4 font-medium"
        >
          <span className="w-8 h-[1px] bg-secondary/50 block"></span>
          {hero.badge}
        </motion.p>
        
        <h1 className="font-display font-medium text-5xl md:text-8xl lg:text-[7.5rem] leading-[0.95] tracking-tighter mb-8 text-white relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="block"
          >
            {hero.heading1}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="block text-zinc-500 italic"
          >
            {hero.heading2}
          </motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-secondary max-w-xl mb-12 font-light leading-relaxed"
        >
          {hero.paragraph}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-wrap gap-6"
        >
          <a 
            href="#projetos" 
            className="bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-[1.03] transition-transform flex items-center gap-2"
          >
            Ver Projetos <ArrowDownRight size={18} />
          </a>
          <a 
            href="#contato" 
            className="border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            Vamos conversar
          </a>
        </motion.div>
      </div>
    </section>
  );
}

