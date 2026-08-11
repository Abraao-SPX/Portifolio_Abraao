"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const terminalLines: Record<string, string[]> = {
  "01": [
    "$ curl -X GET /api/tasks",
    "> 200 OK — 48ms",
    '  [{ id: "task-001", status: "done" },',
    '   { id: "task-002", status: "in_progress" }]',
    "$ POST /api/boards — 201 Created",
    '> board_id: "board-xyz-4f2a"',
  ],
  "02": [
    "$ kafka-consumer --group payments",
    "> Listening: transactions.events",
    "  [INFO] consumed: txn_id=8af2c01",
    "  [INFO] Redis cached: 0.3ms",
    "  [INFO] MongoDB write: 1.1ms",
    "> Throughput: 12,000 msgs/s",
  ],
  "03": [
    "$ POST /oauth2/token",
    "  grant_type: authorization_code",
    "> 200 OK",
    "  access_token: eyJhbGc...",
    "  expires_in: 3600",
    "$ GET /api/me — role: ADMIN ✓",
  ],
};

const techAccent: Record<string, string> = {
  Java: "border-coral/25 text-coral bg-coral/5",
  "Spring Boot": "border-elegant/25 text-elegant bg-elegant/5",
  "Spring Security": "border-elegant/25 text-elegant bg-elegant/5",
  "Spring Kafka": "border-elegant/25 text-elegant bg-elegant/5",
  Redis: "border-red-500/25 text-red-600 bg-red-500/5",
  MongoDB: "border-elegant/25 text-elegant bg-elegant/5",
  PostgreSQL: "border-accent/25 text-accent bg-accent/5",
  "JUnit 5": "border-yellow-600/25 text-yellow-700 bg-yellow-500/5",
};

function TerminalPlaceholder({ id, title }: { id: string; title: string }) {
  const lines = terminalLines[id] ?? [];
  return (
    <div className="w-full h-full bg-surfaceAlt flex flex-col font-mono text-xs">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface shrink-0">
        <div className="terminal-dot bg-coral/50" />
        <div className="terminal-dot bg-yellow-500/50" />
        <div className="terminal-dot bg-elegant/50" />
        <span className="ml-3 text-muted tracking-wider text-[10px]">
          {title.toLowerCase().replace(/ /g, "-")}.sh
        </span>
      </div>
      <div className="flex-1 p-5 flex flex-col justify-center gap-2 overflow-hidden">
        {lines.map((line, i) => {
          const isPrompt = line.startsWith("$");
          const isOutput = line.startsWith(">");
          const isInfo = line.includes("[INFO]");
          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 * i }}
              className={
                isPrompt ? "text-accent" :
                isOutput ? "text-primary/80" :
                isInfo ? "text-accentLight" :
                "text-secondary"
              }
            >
              {line}
            </motion.p>
          );
        })}
        <span className="inline-block w-1.5 h-[14px] bg-accent/40 animate-pulse mt-1" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = siteConfig;

  return (
    <section id="projetos" className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        
        {/* Geometric shapes */}
        <div className="hidden md:block absolute top-[8%] right-[10%] w-36 h-36 border-2 border-accent/[0.06] rounded-full geo-float-1" />
        <div className="hidden md:block absolute bottom-[12%] left-[5%] w-24 h-24 bg-elegant/[0.04] rounded-3xl geo-float-2" style={{ animationDelay: '4s' }} />
        <div className="hidden md:block absolute top-1/2 right-[30%] w-16 h-16 border border-coral/[0.08] rounded-xl rotate-45 geo-float-1" style={{ animationDelay: '8s' }} />
        
        {/* Gradient orbs */}
        <div className="hidden md:block absolute top-[5%] right-[8%] w-[480px] h-[480px] bg-accent/[0.02] blur-[100px] rounded-full" />
        <div className="hidden md:block absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-coral/[0.02] blur-[90px] rounded-full" />
        
        <div className="md:hidden absolute top-1/3 right-[5%] w-[180px] h-[180px] bg-accent/[0.03] blur-[60px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

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
            <span>projects</span>
            <span className="text-muted">/</span>
            <span className="text-secondary">selected</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.88]">
            <span className="text-primary">Trabalhos</span>
            <br />
            <span className="text-gradient-warm">Selecionados</span>
            <span className="text-muted">.</span>
          </h2>
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col">
          {projects.map((project, idx) => {
            const isReverse = idx % 2 !== 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-20 border-b border-border last:border-b-0"
              >
                {/* Terminal visual */}
                <div
                  className={`lg:col-span-7 rounded-xl overflow-hidden border border-border aspect-[4/3] md:aspect-video bg-surfaceAlt transition-all duration-500 group-hover:border-borderHover group-hover:shadow-lg group-hover:shadow-primary/[0.04] ${
                    isReverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-[1.005]">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <TerminalPlaceholder id={project.id} title={project.title} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isReverse ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs font-bold text-muted tracking-widest">
                      {project.id}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-5 text-primary leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm font-mono leading-[1.9] mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techs.map((tech, ti) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -2, scale: 1.06, transition: { duration: 0.15 } }}
                        whileTap={{ scale: 0.94 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 0.04 * ti }}
                        className={`px-3 py-1.5 border rounded-md text-xs font-mono transition-colors cursor-default ${
                          techAccent[tech] ?? "border-border text-secondary bg-surfaceAlt"
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-5 items-center">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-mono text-primary border-b border-border hover:border-primary pb-0.5 transition-all hover:gap-2.5 group/link"
                      >
                        Ver Demo
                        <ArrowUpRight size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-secondary hover:text-primary transition-colors"
                      >
                        <Github size={14} />
                        Repositório
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <a
            href={siteConfig.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-border rounded-xl text-sm font-mono text-secondary hover:text-primary hover:border-borderHover hover:bg-surfaceAlt hover:shadow-sm transition-all"
          >
            <Github size={15} />
            Ver mais no GitHub
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
