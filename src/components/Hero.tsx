"use client";
import React, { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";

const stats = [
  { value: "3", label: "Projetos" },
  { value: "2+", label: "Anos estudando" },
  { value: "10+", label: "Tecnologias" },
];

type CodeSegment = { type: string; text: string };
type CodeLineData = { num: number; segments: CodeSegment[] };

const codeLines: CodeLineData[] = [
  { num: 1, segments: [{ type: "comment", text: "// Abraão.java" }] },
  { num: 2, segments: [] },
  {
    num: 3, segments: [
      { type: "keyword", text: "public class " },
      { type: "classname", text: "Abraão " },
      { type: "keyword", text: "extends " },
      { type: "classname", text: "Developer " },
      { type: "plain", text: "{" },
    ],
  },
  { num: 4, segments: [] },
  { num: 5, segments: [{ type: "annotation", text: "  @Specializations" }] },
  {
    num: 6, segments: [
      { type: "type", text: "  String[] " },
      { type: "plain", text: "backend " },
      { type: "op", text: "= { " },
      { type: "string", text: '"Java"' },
      { type: "op", text: ", " },
      { type: "string", text: '"Spring Boot"' },
      { type: "op", text: " };" },
    ],
  },
  {
    num: 7, segments: [
      { type: "type", text: "  String[] " },
      { type: "plain", text: "mobile " },
      { type: "op", text: "= { " },
      { type: "string", text: '"Flutter"' },
      { type: "op", text: ", " },
      { type: "string", text: '"Dart"' },
      { type: "op", text: " };" },
    ],
  },
  {
    num: 8, segments: [
      { type: "type", text: "  String[] " },
      { type: "plain", text: "security " },
      { type: "op", text: "= { " },
      { type: "string", text: '"Ethical Hacking"' },
      { type: "op", text: " };" },
    ],
  },
  { num: 9, segments: [] },
  { num: 10, segments: [{ type: "annotation", text: "  @Override" }] },
  {
    num: 11, segments: [
      { type: "keyword", text: "  public " },
      { type: "type", text: "String " },
      { type: "method", text: "passion" },
      { type: "plain", text: "() {" },
    ],
  },
  {
    num: 12, segments: [
      { type: "keyword", text: "    return " },
      { type: "string", text: '"Código limpo. Sistemas sólidos."' },
      { type: "op", text: ";" },
    ],
  },
  { num: 13, segments: [{ type: "plain", text: "  }" }] },
  { num: 14, segments: [] },
  {
    num: 15, segments: [
      { type: "plain", text: "}" },
      { type: "cursor", text: "█" },
    ],
  },
];

const segmentClass: Record<string, string> = {
  comment: "text-secondary",
  keyword: "text-violet-400",
  classname: "text-emerald-400",
  type: "text-cyan-400",
  annotation: "text-amber-400",
  string: "text-amber-300",
  op: "text-secondary",
  plain: "text-primary",
  method: "text-sky-300",
  cursor: "text-cyan-400 cursor-blink",
};

export default function Hero() {
  const { hero, personal } = siteConfig;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center px-6 md:px-12 lg:px-20 relative pt-24 pb-16 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-400/[0.03] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/5 w-[400px] h-[400px] bg-violet-400/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 relative">

        {/* ── Left: content ── */}
        <div className="flex flex-col">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-1.5 mb-8 font-mono text-xs text-muted"
          >
            <span className="text-cyan-400">~</span>
            <span className="text-secondary">/</span>
            <span>portfolio</span>
            <span className="text-secondary">/</span>
            <span className="text-primary">home</span>
            <span className="text-cyan-400/70 cursor-blink ml-1">█</span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display font-bold text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.88] tracking-tight text-primary"
            >
              {personal.name}
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="font-display font-bold text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.88] tracking-tight text-gradient-cool"
            >
              {personal.surname}.
            </motion.h1>
          </div>

          {/* Role tags */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8 font-mono text-sm"
          >
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Java &amp; Spring Boot
            </span>
            <span className="text-muted">·</span>
            <span className="text-violet-400">Flutter</span>
            <span className="text-muted">·</span>
            <span className="text-orange-400">Security</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-secondary font-mono text-sm leading-[1.85] mb-10 max-w-[480px]"
          >
            {hero.paragraph}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a
              href="#projetos"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-background font-display font-semibold text-sm rounded-lg hover:bg-cyan-300 hover:gap-3 transition-all duration-200"
            >
              Ver Projetos <ArrowRight size={15} />
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 px-6 py-3 border border-white/[0.1] text-secondary font-mono text-sm rounded-lg hover:border-white/[0.2] hover:text-primary transition-all"
            >
              Contato
            </a>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 border border-white/[0.08] text-muted font-mono text-sm rounded-lg hover:border-white/[0.18] hover:text-secondary transition-all"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 border border-white/[0.08] text-muted font-mono text-sm rounded-lg hover:border-white/[0.18] hover:text-secondary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex gap-10 pt-8 border-t border-white/[0.06]"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="font-display font-bold text-2xl text-primary">{stat.value}</span>
                <span className="font-mono text-xs text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Java code card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="hidden lg:block float-animation"
        >
          <div className="rounded-xl border border-white/[0.08] bg-surface overflow-hidden shadow-2xl shadow-black/60">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-background/50">
              <div className="terminal-dot bg-red-500/70" />
              <div className="terminal-dot bg-yellow-500/70" />
              <div className="terminal-dot bg-emerald-400/70" />
              <span className="ml-4 font-mono text-xs text-muted">Abraão.java</span>
              <div className="ml-auto">
                <span className="text-[10px] font-mono text-emerald-400/70 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded">
                  Java
                </span>
              </div>
            </div>

            {/* Code body */}
            <div className="px-4 py-4 font-mono text-[0.72rem] leading-none select-none">
              {codeLines.map((line, i) => (
                <motion.div
                  key={line.num}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0.45 + i * 0.055 }}
                  className="code-line"
                >
                  <span className="line-num">{line.num}</span>
                  <span>
                    {line.segments.length === 0
                      ? " "
                      : line.segments.map((seg, j) => (
                          <span key={j} className={segmentClass[seg.type] ?? "text-primary"}>
                            {seg.text}
                          </span>
                        ))}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 80 ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted pointer-events-none"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
