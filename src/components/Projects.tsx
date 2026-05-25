"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const terminalLines: Record<string, string[]> = {
  "01": [
    '$ curl -X GET /api/tasks',
    '> 200 OK — 48ms',
    '  [{id: "task-001", status: "done"},',
    '   {id: "task-002", status: "in_progress"}]',
    '$ POST /api/boards — 201 Created',
    '> board_id: "board-xyz-4f2a"',
  ],
  "02": [
    '$ kafka-consumer --group payments',
    '> Listening on: transactions.events',
    '  [INFO] consumed: txn_id=8af2c01',
    '  [INFO] Redis cached: 0.3ms',
    '  [INFO] MongoDB write: 1.1ms',
    '> Throughput: 12,000 msgs/s',
  ],
  "03": [
    '$ POST /oauth2/token',
    '  grant_type: authorization_code',
    '> 200 OK',
    '  access_token: eyJhbGc...',
    '  expires_in: 3600',
    '$ GET /api/me — role: ADMIN ✓',
  ],
};

function TerminalPlaceholder({ projectId, title }: { projectId: string; title: string }) {
  const lines = terminalLines[projectId] ?? [];
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex flex-col font-mono text-sm">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30 shrink-0">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#febc2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        <span className="ml-3 text-[10px] text-zinc-600 tracking-wider">{title.toLowerCase().replace(/ /g, "-")}.sh</span>
      </div>
      {/* Terminal body */}
      <div className="flex-1 p-5 flex flex-col justify-center gap-2 overflow-hidden">
        {lines.map((line, i) => {
          const isPrompt = line.startsWith("$");
          const isOutput = line.startsWith(">");
          const isInfo = line.includes("[INFO]");
          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className={`leading-relaxed ${
                isPrompt
                  ? "text-emerald-400"
                  : isOutput
                  ? "text-zinc-300"
                  : isInfo
                  ? "text-sky-400/80"
                  : "text-zinc-600"
              }`}
            >
              {line}
            </motion.p>
          );
        })}
        <span className="inline-block w-2 h-4 bg-white/50 animate-pulse mt-1" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = siteConfig;

  return (
    <section id="projetos" className="py-32 px-6 md:px-20 border-t border-white/8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">

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
            Trabalhos selecionados
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Obras<span className="text-zinc-700">.</span><br />
            <span className="text-zinc-600 font-medium italic">Selecionadas</span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, idx) => {
            const isReverse = idx % 2 !== 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20 border-b border-white/6 last:border-b-0"
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-7 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video border border-white/6 ${
                    isReverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-[1.01]">
                    {project.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <TerminalPlaceholder projectId={project.id} title={project.title} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isReverse ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display text-xs font-bold text-zinc-700 tracking-wider">
                      {project.id}
                    </span>
                    <span className="w-[1px] h-3 bg-white/10" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-5 text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-base mb-8 font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 border border-white/8 rounded-full text-xs font-medium text-zinc-400 bg-white/[0.02] hover:border-white/20 hover:text-white transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-5 items-center">
                    {project.demoLink && project.demoLink !== "https://seulink.demo" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 hover:border-white pb-0.5 transition-all hover:gap-3 group/link"
                      >
                        Ver Demo
                        <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.repoLink && project.repoLink !== "https://github.com/seuRepo" && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors"
                      >
                        <Github size={15} />
                        Repositório
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <a
            href={siteConfig.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full text-sm font-medium text-secondary hover:text-white hover:border-white/30 transition-all"
          >
            <Github size={16} />
            Ver mais no GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}