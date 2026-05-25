"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

const metrics = [
  { value: "3", label: "Projetos\nPublicados", suffix: "" },
  { value: "2", label: "Anos de\nEstudo Dedicado", suffix: "+" },
  { value: "10", label: "Tecnologias\nDominadas", suffix: "+" },
  { value: "100", label: "Commits\nno GitHub", suffix: "+" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="sobre" className="py-32 px-6 md:px-20 border-t border-white/8 relative overflow-hidden">

      {/* Subtle radial bg */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.015] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Top label */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.3em] text-secondary font-medium mb-16 flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-white/20" />
          Sobre mim
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Left: heading */}
          <div className="lg:col-span-5">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tighter"
            >
              {about.title}
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-[1px] w-1/3 bg-gradient-to-r from-white/30 to-transparent mt-12 origin-left hidden lg:block"
            />
          </div>

          {/* Right: paragraphs + highlights */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  transition={{ delay: 0.1 * i }}
                  className="text-lg md:text-xl text-secondary font-light leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-3 mt-2"
            >
              {about.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-zinc-300 font-medium py-2.5 px-4 rounded-lg border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400/70 block shrink-0" />
                  {highlight}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Metrics grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-background hover:bg-surface/60 transition-colors p-8 flex flex-col gap-2 group"
            >
              <span className="font-display font-bold text-4xl md:text-5xl text-white group-hover:text-gradient transition-all">
                {metric.value}<span className="text-zinc-600">{metric.suffix}</span>
              </span>
              <span className="text-xs text-secondary font-medium leading-relaxed whitespace-pre-line">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}