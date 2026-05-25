"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  const { experiences } = siteConfig;

  return (
    <section id="experiencia" className="py-32 px-6 md:px-20 border-t border-white/8 relative overflow-hidden">

      {/* Subtle bg */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.012] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary font-medium mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/20" />
            Trajetória
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95]">
            Minha Jornada<span className="text-zinc-700">.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-0">

          {/* Vertical line */}
          <div className="absolute left-[10px] md:left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent md:hidden" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="group relative md:grid md:grid-cols-12 md:gap-8 md:items-start md:border-b md:border-white/6 md:py-12 last:md:border-b-0"
              >
                {/* Period / Left column */}
                <div className="md:col-span-3 flex items-start gap-4 mb-4 md:mb-0">
                  {/* Dot - mobile only */}
                  <div className="w-2.5 h-2.5 rounded-full border border-white/30 bg-background mt-1 shrink-0 md:hidden group-hover:border-white/60 transition-colors" />
                  <span className="text-xs font-medium text-secondary uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>

                {/* Content / Right column */}
                <div className="md:col-span-9 pl-0 md:pl-0">
                  <div className="p-6 md:p-8 rounded-2xl border border-white/6 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/12 transition-all group-hover:border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <h4 className="text-xl font-display font-bold text-white">{exp.role}</h4>
                      {exp.company && (
                        <span className="text-xs font-medium text-secondary border border-white/8 px-3 py-1.5 rounded-full whitespace-nowrap bg-white/[0.02]">
                          {exp.company}
                        </span>
                      )}
                    </div>
                    <p className="text-secondary font-light leading-relaxed text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}