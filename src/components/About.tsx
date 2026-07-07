"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

const metrics = [
  { value: "3", suffix: "", label: "Projetos\nPublicados" },
  { value: "2", suffix: "+", label: "Anos de\nEstudo Dedicado" },
  { value: "10", suffix: "+", label: "Tecnologias\nDominadas" },
  { value: "100", suffix: "+", label: "Commits\nno GitHub" },
];

const highlightAccent: Record<number, string> = {
  0: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
  1: "text-violet-400 border-violet-400/20 bg-violet-400/5",
  2: "text-orange-400 border-orange-400/20 bg-orange-400/5",
  3: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="sobre" className="py-32 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] relative overflow-hidden">

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        {/* High performance blurred background orbs (hidden on mobile, will-change-transform for GPU acceleration) */}
        <motion.div
          className="hidden md:block absolute -left-20 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/[0.05] blur-[130px] rounded-full will-change-transform"
          animate={{ x: [0, 30, -15, 0], y: [0, -20, 12, 0], scale: [1, 1.07, 0.93, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden md:block absolute right-[5%] bottom-[10%] w-[400px] h-[400px] bg-emerald-500/[0.04] blur-[110px] rounded-full will-change-transform"
          animate={{ x: [0, -25, 12, 0], y: [0, 20, -10, 0], scale: [1, 0.93, 1.06, 1] }}
          transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Mobile static ambient glow */}
        <div className="md:hidden absolute top-1/3 left-0 w-[200px] h-[200px] bg-cyan-500/[0.03] blur-[60px] rounded-full pointer-events-none" />
        {[
          { left: "5%",  top: "15%", delay: 0.3, color: "bg-cyan-400/20" },
          { left: "80%", top: "20%", delay: 1.5, color: "bg-emerald-400/20" },
          { left: "90%", top: "55%", delay: 0.7, color: "bg-cyan-400/15" },
          { left: "15%", top: "80%", delay: 2.1, color: "bg-emerald-400/15" },
          { left: "50%", top: "90%", delay: 0.9, color: "bg-cyan-400/20" },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${dot.color}`}
            style={{ left: dot.left, top: dot.top }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.8, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          />
        ))}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 6 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-16 font-mono text-xs text-muted"
        >
          <span className="text-cyan-400">~/</span>
          <span>about</span>
          <span className="text-muted">/</span>
          <span className="text-secondary">README.md</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Left: title */}
          <div className="lg:col-span-5">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-primary"
            >
              {about.title}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-[1px] w-1/3 bg-gradient-to-r from-cyan-400/30 to-transparent mt-10 origin-left hidden lg:block"
            />
          </div>

          {/* Right: bio + highlights */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: 0.08 * i }}
                  className="text-base md:text-lg text-secondary font-mono leading-[1.9]"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-3"
            >
              {about.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 text-xs font-mono py-2.5 px-4 rounded-lg border ${highlightAccent[idx]} transition-all`}
                >
                  <span className="w-1 h-1 rounded-full bg-current block shrink-0" />
                  {highlight}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Metrics grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-background hover:bg-surface transition-colors p-8 flex flex-col gap-2 group"
            >
              <span className="font-display font-bold text-4xl md:text-5xl text-primary">
                {metric.value}
                <span className="text-cyan-400/60 text-2xl">{metric.suffix}</span>
              </span>
              <span className="text-xs text-secondary font-mono leading-relaxed whitespace-pre-line">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

