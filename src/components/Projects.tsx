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
  Java: "border-orange-400/25 text-orange-300 bg-orange-400/5",
  "Spring Boot": "border-emerald-400/25 text-emerald-300 bg-emerald-400/5",
  "Spring Security": "border-emerald-400/25 text-emerald-300 bg-emerald-400/5",
  "Spring Kafka": "border-emerald-400/25 text-emerald-300 bg-emerald-400/5",
  Redis: "border-red-400/25 text-red-300 bg-red-400/5",
  MongoDB: "border-green-400/25 text-green-300 bg-green-400/5",
  PostgreSQL: "border-sky-400/25 text-sky-300 bg-sky-400/5",
  "JUnit 5": "border-yellow-400/25 text-yellow-300 bg-yellow-400/5",
};

function TerminalPlaceholder({ id, title }: { id: string; title: string }) {
  const lines = terminalLines[id] ?? [];
  return (
    <div className="w-full h-full bg-background flex flex-col font-mono text-xs">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-surface/60 shrink-0">
        <div className="terminal-dot bg-red-500/60" />
        <div className="terminal-dot bg-yellow-500/60" />
        <div className="terminal-dot bg-emerald-400/60" />
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
                isPrompt ? "text-cyan-400" :
                isOutput ? "text-primary/80" :
                isInfo ? "text-sky-400/70" :
                "text-secondary"
              }
            >
              {line}
            </motion.p>
          );
        })}
        <span className="inline-block w-1.5 h-[14px] bg-cyan-400/50 animate-pulse mt-1" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = siteConfig;

  return (
    <section id="projetos" className="py-32 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] relative overflow-hidden">

      <div className="max-w-7xl mx-auto">

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
            <span>projects</span>
            <span className="text-muted">/</span>
            <span className="text-secondary">selected</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.88]">
            <span className="text-primary">Trabalhos</span>
            <br />
            <span className="text-gradient-cool">Selecionados</span>
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
                viewport={{ once: true, margin: "-80px" }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-20 border-b border-white/[0.06] last:border-b-0"
              >
                {/* Terminal visual */}
                <div
                  className={`lg:col-span-7 rounded-xl overflow-hidden border border-white/[0.07] aspect-[4/3] md:aspect-video bg-background transition-all duration-500 group-hover:border-white/[0.12] ${
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
                    <span className="w-px h-3 bg-white/[0.1]" />
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
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 border rounded-md text-xs font-mono transition-all ${
                          techAccent[tech] ?? "border-white/[0.1] text-secondary bg-white/[0.02]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-5 items-center">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-mono text-primary border-b border-white/[0.25] hover:border-white pb-0.5 transition-all hover:gap-2.5 group/link"
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
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/[0.1] rounded-xl text-sm font-mono text-secondary hover:text-primary hover:border-white/[0.25] transition-all"
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
