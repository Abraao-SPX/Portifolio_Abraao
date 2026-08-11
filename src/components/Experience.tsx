"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

const commitHashes = ["a3f9c12", "b7e2d45"];

export default function Experience() {
  const { experiences, personal } = siteConfig;

  return (
    <section id="experiencia" className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Geometric shapes */}
        <div className="hidden md:block absolute right-[10%] top-[20%] w-28 h-28 border-2 border-accent/[0.06] rounded-full geo-float-2" />
        <div className="hidden md:block absolute left-[8%] bottom-[20%] w-20 h-20 bg-coral/[0.04] rounded-2xl geo-float-1" style={{ animationDelay: '5s' }} />
        
        {/* Gradient orbs */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/[0.02] blur-[100px] rounded-full" />
        <div className="hidden md:block absolute left-[5%] top-[15%] w-[350px] h-[350px] bg-coral/[0.02] blur-[90px] rounded-full" />
        
        <div className="md:hidden absolute top-1/4 right-0 w-[180px] h-[180px] bg-accent/[0.03] blur-[60px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-muted">
            <span className="text-accent">~/</span>
            <span>experience</span>
            <span className="text-muted">/</span>
            <span className="text-secondary">git log</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight leading-[0.9]">
            <span className="text-primary">Minha</span>{" "}
            <span className="text-gradient-warm">Jornada</span>
            <span className="text-muted">.</span>
          </h2>
        </motion.div>

        {/* Git log timeline */}
        <div className="relative">
          {/* Branch line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent/40 via-border to-transparent pointer-events-none rounded-full" />

          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="relative pl-9 pb-14 last:pb-0"
              >
                {/* Commit dot */}
                <div
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center ${
                    idx === 0
                      ? "border-accent bg-accent/15"
                      : "border-border bg-surface"
                  }`}
                >
                  {idx === 0 && (
                    <span className="w-[5px] h-[5px] rounded-full bg-accent block" />
                  )}
                </div>

                {/* Commit header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-muted tracking-wider">
                    commit{" "}
                    <span className="text-accent/60">{commitHashes[idx]}</span>
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                      idx === 0
                        ? "border-accent/25 bg-accent/5 text-accent"
                        : "border-border bg-surfaceAlt text-secondary"
                    }`}
                  >
                    {idx === 0 ? "main" : "feature/learning"}
                  </span>
                </div>

                {/* Commit meta */}
                <div className="font-mono text-xs text-muted mb-5 space-y-1">
                  <p>
                    <span className="text-secondary/50">Author: </span>
                    <span className="text-secondary">{personal.name} {personal.surname}</span>
                  </p>
                  <p>
                    <span className="text-secondary/50">Date:   </span>
                    <span className="text-secondary">{exp.period}</span>
                  </p>
                </div>

                {/* Commit card */}
                <div className="p-6 rounded-xl border border-border bg-surface hover:bg-surfaceAlt hover:border-borderHover hover:shadow-md hover:shadow-primary/[0.03] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <h4 className="font-display text-lg font-bold text-primary leading-tight">
                      {exp.role}
                    </h4>
                    {exp.company && (
                      <span className="font-mono text-[10px] text-secondary border border-border px-3 py-1.5 rounded-md whitespace-nowrap bg-surfaceAlt">
                        {exp.company}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-sm text-secondary leading-[1.85]">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
