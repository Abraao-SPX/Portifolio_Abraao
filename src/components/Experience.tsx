"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

const commitHashes = ["a3f9c12", "b7e2d45"];

export default function Experience() {
  const { experiences, personal } = siteConfig;

  return (
    <section id="experiencia" className="py-32 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] relative overflow-hidden">

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/[0.05] blur-[120px] rounded-full"
          animate={{ x: [0, -30, 15, 0], y: [0, 20, -12, 0], scale: [1, 1.07, 0.93, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[5%] top-[15%] w-[380px] h-[380px] bg-cyan-500/[0.04] blur-[110px] rounded-full"
          animate={{ x: [0, 22, -12, 0], y: [0, -18, 10, 0], scale: [1, 0.93, 1.06, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        {[
          { left: "5%",  top: "12%", delay: 0.4, color: "bg-cyan-400/20" },
          { left: "88%", top: "18%", delay: 1.6, color: "bg-violet-400/20" },
          { left: "92%", top: "60%", delay: 0.8, color: "bg-violet-400/15" },
          { left: "8%",  top: "72%", delay: 2.2, color: "bg-cyan-400/15" },
          { left: "48%", top: "88%", delay: 0.2, color: "bg-violet-400/20" },
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
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/10 to-transparent"
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 8 }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-muted">
            <span className="text-cyan-400">~/</span>
            <span>experience</span>
            <span className="text-muted">/</span>
            <span className="text-secondary">git log</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight leading-[0.9]">
            <span className="text-primary">Minha</span>{" "}
            <span className="text-gradient-cool">Jornada</span>
            <span className="text-muted">.</span>
          </h2>
        </motion.div>

        {/* Git log timeline */}
        <div className="relative">
          {/* Branch line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-cyan-400/30 via-white/[0.08] to-transparent pointer-events-none" />

          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.12 }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative pl-9 pb-14 last:pb-0"
              >
                {/* Commit dot */}
                <div
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center ${
                    idx === 0
                      ? "border-cyan-400 bg-cyan-400/20"
                      : "border-white/20 bg-background"
                  }`}
                >
                  {idx === 0 && (
                    <span className="w-[5px] h-[5px] rounded-full bg-cyan-400 block" />
                  )}
                </div>

                {/* Commit header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-muted tracking-wider">
                    commit{" "}
                    <span className="text-cyan-400/60">{commitHashes[idx]}</span>
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                      idx === 0
                        ? "border-cyan-400/25 bg-cyan-400/5 text-cyan-400"
                        : "border-white/[0.08] bg-white/[0.02] text-secondary"
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
                <div className="p-6 rounded-xl border border-white/[0.07] bg-surface/50 hover:bg-surface hover:border-white/[0.12] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <h4 className="font-display text-lg font-bold text-primary leading-tight">
                      {exp.role}
                    </h4>
                    {exp.company && (
                      <span className="font-mono text-[10px] text-secondary border border-white/[0.08] px-3 py-1.5 rounded-md whitespace-nowrap bg-white/[0.02]">
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
