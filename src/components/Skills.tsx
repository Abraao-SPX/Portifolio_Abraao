"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

const allTechs = [
  "Java", "Spring Boot", "Spring Security", "Spring Kafka",
  "Flutter", "Dart", "Node.js", "TypeScript",
  "Ethical Hacking", "OWASP", "JWT", "OAuth2",
  "PostgreSQL", "MongoDB", "Redis", "MySQL",
  "Docker", "AWS", "Git", "CI/CD",
  "APIs REST", "Microsserviços", "CQRS", "Pentest",
];

const categoryAccent: Record<string, string> = {
  "Back-end":          "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
  "Mobile":            "text-violet-400 border-violet-400/20 bg-violet-400/5",
  "Segurança":         "text-orange-400 border-orange-400/20 bg-orange-400/5",
  "Banco de Dados":    "text-sky-400 border-sky-400/20 bg-sky-400/5",
  "Arquitetura & DevOps": "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
};

const tagAccent: Record<string, string> = {
  "Back-end":          "border-emerald-400/15 text-emerald-300/80 hover:border-emerald-400/40 hover:text-emerald-300",
  "Mobile":            "border-violet-400/15 text-violet-300/80 hover:border-violet-400/40 hover:text-violet-300",
  "Segurança":         "border-orange-400/15 text-orange-300/80 hover:border-orange-400/40 hover:text-orange-300",
  "Banco de Dados":    "border-sky-400/15 text-sky-300/80 hover:border-sky-400/40 hover:text-sky-300",
  "Arquitetura & DevOps": "border-cyan-400/15 text-cyan-300/80 hover:border-cyan-400/40 hover:text-cyan-300",
};

const floatingDots = [
  { left: "12%",  top: "18%",  delay: 0,   color: "bg-emerald-400/20" },
  { left: "78%",  top: "12%",  delay: 1.4, color: "bg-violet-400/20" },
  { left: "88%",  top: "52%",  delay: 0.6, color: "bg-cyan-400/20" },
  { left: "22%",  top: "72%",  delay: 2.0, color: "bg-orange-400/20" },
  { left: "55%",  top: "88%",  delay: 0.3, color: "bg-sky-400/20" },
  { left: "42%",  top: "38%",  delay: 1.7, color: "bg-emerald-400/15" },
  { left: "65%",  top: "25%",  delay: 0.9, color: "bg-violet-400/15" },
  { left: "8%",   top: "55%",  delay: 2.5, color: "bg-cyan-400/15" },
];

export default function Skills() {
  const { skills } = siteConfig;

  return (
    <section id="habilidades" className="py-32 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] relative overflow-hidden">

      {/* ── Background decorations ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Orb emerald — top right */}
        <motion.div
          className="absolute -top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.045] blur-[110px]"
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.93, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb cyan — bottom left */}
        <motion.div
          className="absolute bottom-0 left-[5%] w-[500px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-[100px]"
          animate={{ x: [0, -30, 15, 0], y: [0, 25, -14, 0], scale: [1, 0.92, 1.06, 1] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating dots */}
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${dot.color}`}
            style={{ left: dot.left, top: dot.top }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.8, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20"
        >
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6 font-mono text-xs text-muted">
              <span className="text-cyan-400">~/</span>
              <span>skills</span>
              <span className="text-muted">/</span>
              <span className="text-secondary">stack.config</span>
            </div>
            <div className="sticky top-40">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-[1.05] tracking-tight">
                <span className="text-primary">Ferramentas &</span>
                <br />
                <span className="text-gradient-cool">Tecnologias</span>
              </h2>
              <p className="text-secondary font-mono text-sm max-w-sm leading-[1.85]">
                Desenvolvimento de ponta a ponta exige o domínio de um ecossistema amplo. Uso o que há de melhor para focar no que importa: a entrega final.
              </p>
            </div>
          </div>

          {/* Skill groups */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((group, idx) => {
              const accent = categoryAccent[group.category] ?? "text-secondary border-white/15 bg-white/5";
              const tags = tagAccent[group.category] ?? "border-white/10 text-secondary hover:border-white/30 hover:text-primary";
              const isFullWidth = group.category === "Arquitetura & DevOps";
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 * idx }}
                  viewport={{ once: true, margin: "-60px" }}
                  className={`p-5 rounded-xl border border-white/[0.06] bg-surface/50 hover:bg-surface hover:border-white/[0.12] transition-colors group cursor-default${isFullWidth ? " md:col-span-2" : ""}`}
                >
                  {/* Category label */}
                  <div className={`inline-flex items-center gap-2 text-[10px] font-mono font-semibold mb-4 px-2.5 py-1 rounded-md border transition-all group-hover:brightness-125 ${accent}`}>
                    <span className="font-mono opacity-60">//</span>
                    {group.category}
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -2, scale: 1.06, transition: { duration: 0.15 } }}
                        whileTap={{ scale: 0.94 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 0.04 * j + 0.08 * idx }}
                        className={`px-3 py-1.5 border rounded-md text-xs font-mono transition-colors cursor-default ${tags}`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="overflow-hidden border-y border-white/[0.05] py-4 relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="marquee-track">
            {[...allTechs, ...allTechs].map((tech, i) => (
              <span
                key={i}
                className="mx-6 text-[10px] uppercase tracking-[0.25em] text-muted font-mono whitespace-nowrap hover:text-secondary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
