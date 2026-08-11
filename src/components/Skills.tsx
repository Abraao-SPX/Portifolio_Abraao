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
  "Back-end":          "text-elegant border-elegant/20 bg-elegant/5",
  "Mobile":            "text-accent border-accent/20 bg-accent/5",
  "Segurança":         "text-coral border-coral/20 bg-coral/5",
  "Banco de Dados":    "text-accentLight border-accentLight/20 bg-accentLight/5",
  "Arquitetura & DevOps": "text-secondary border-primary/15 bg-primary/5",
};

const tagAccent: Record<string, string> = {
  "Back-end":          "border-elegant/15 text-elegant hover:border-elegant/40 hover:bg-elegant/5",
  "Mobile":            "border-accent/15 text-accent hover:border-accent/40 hover:bg-accent/5",
  "Segurança":         "border-coral/15 text-coral hover:border-coral/40 hover:bg-coral/5",
  "Banco de Dados":    "border-accentLight/15 text-accentLight hover:border-accentLight/40 hover:bg-accentLight/5",
  "Arquitetura & DevOps": "border-primary/10 text-secondary hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
};

export default function Skills() {
  const { skills } = siteConfig;

  return (
    <section id="habilidades" className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* ── Background decorations ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Geometric shapes */}
        <div className="hidden md:block absolute -top-10 right-1/4 w-32 h-32 border-2 border-elegant/[0.06] rounded-full geo-float-1" />
        <div className="hidden md:block absolute bottom-[10%] left-[8%] w-24 h-24 bg-accent/[0.04] rounded-3xl geo-float-2" style={{ animationDelay: '3s' }} />
        <div className="hidden md:block absolute top-[45%] right-[6%] w-14 h-14 border border-coral/[0.08] rounded-xl rotate-45 geo-float-1" style={{ animationDelay: '7s' }} />

        {/* Gradient orbs */}
        <div className="hidden md:block absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-elegant/[0.02] blur-[100px]" />
        <div className="hidden md:block absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[90px]" />
        
        <div className="md:hidden absolute top-1/4 right-[10%] w-[160px] h-[160px] bg-elegant/[0.03] blur-[50px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20"
        >
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6 font-mono text-xs text-muted">
              <span className="text-accent">~/</span>
              <span>skills</span>
              <span className="text-muted">/</span>
              <span className="text-secondary">stack.config</span>
            </div>
            <div className="sticky top-40">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-[1.05] tracking-tight">
                <span className="text-primary">Ferramentas &</span>
                <br />
                <span className="text-gradient-indigo">Tecnologias</span>
              </h2>
              <p className="text-secondary font-mono text-sm max-w-sm leading-[1.85]">
                Desenvolvimento de ponta a ponta exige o domínio de um ecossistema amplo. Uso o que há de melhor para focar no que importa: a entrega final.
              </p>
            </div>
          </div>

          {/* Skill groups */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((group, idx) => {
              const accent = categoryAccent[group.category] ?? "text-secondary border-border bg-surfaceAlt";
              const tags = tagAccent[group.category] ?? "border-border text-secondary hover:border-borderHover hover:text-primary";
              const isFullWidth = group.category === "Arquitetura & DevOps";
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 * idx }}
                  viewport={{ once: true }}
                  className={`p-5 rounded-xl border border-border bg-surface hover:bg-surfaceAlt hover:border-borderHover hover:shadow-md hover:shadow-primary/[0.03] transition-all group cursor-default ${isFullWidth ? "md:col-span-2" : ""}`}
                >
                  {/* Category label */}
                  <div className={`inline-flex items-center gap-2 text-[10px] font-mono font-semibold mb-4 px-2.5 py-1 rounded-md border transition-all group-hover:brightness-110 ${accent}`}>
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
          className="overflow-hidden border-y border-border py-4 relative"
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
