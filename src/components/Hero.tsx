"use client";
import React, { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowDown } from "lucide-react";

const stats = [
  { value: "3", label: "Projetos publicados" },
  { value: "2+", label: "Anos de estudo" },
  { value: "10+", label: "Tecnologias dominadas" },
];

export default function Hero() {
  const { hero } = siteConfig;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-20 relative pt-20 pb-10 overflow-hidden">

      {/* Radial glow */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.04] blur-[140px] pointer-events-none w-[700px] h-[700px] bg-white rounded-full mix-blend-screen" />
      <div className="absolute left-[-5%] bottom-1/4 opacity-[0.025] blur-[100px] pointer-events-none w-[400px] h-[400px] bg-white rounded-full mix-blend-screen" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      <div className="max-w-6xl z-10 relative">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8 w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot block" />
          <span className="text-xs font-medium text-zinc-400 tracking-wide">{hero.badge}</span>
        </motion.div>

        {/* Heading */}
        <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-[8rem] leading-[0.9] tracking-tighter mb-8 text-white">
          <motion.span
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="block"
          >
            {hero.heading1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="block text-zinc-600"
          >
            {hero.heading2}
          </motion.span>
        </h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="h-[1px] w-full max-w-2xl bg-gradient-to-r from-white/20 via-white/5 to-transparent mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-lg md:text-xl text-secondary max-w-xl mb-12 font-light leading-relaxed"
        >
          {hero.paragraph}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <a
            href="#projetos"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-[1.03] hover:bg-zinc-100 transition-all flex items-center gap-2 text-sm"
          >
            Ver Projetos <ArrowDownRight size={16} />
          </a>
          <a
            href="#contato"
            className="border border-white/15 bg-white/[0.03] px-8 py-4 rounded-full font-medium hover:bg-white/[0.07] hover:border-white/30 transition-all text-sm"
          >
            Vamos conversar
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="flex flex-wrap gap-10 border-t border-white/8 pt-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
              className="flex flex-col gap-1"
            >
              <span className="font-display font-bold text-3xl text-white">{stat.value}</span>
              <span className="text-xs text-secondary tracking-wide">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 50 ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}