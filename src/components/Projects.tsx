"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const { projects } = siteConfig;

  return (
    <section id="projetos" className="py-32 px-6 md:px-20 border-t border-white/10 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-end justify-between mb-24">
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">Obras.<br/><span className="text-zinc-600 font-medium">Selecionadas</span></h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => {
            const isReverse = idx % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-150px" }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center project-card relative"
              >
                {/* Image Section */}
                <div className={`lg:col-span-7 bg-surface rounded-2xl aspect-[4/3] md:aspect-video overflow-hidden ${isReverse ? 'lg:order-2' : ''}`}>
                  <div className="w-full h-full bg-zinc-900 transition-transform duration-[1.2s] group-hover:scale-[1.03] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10 bg-noisy mix-blend-overlay z-10"></div>

                    {/* Se tiver imagem, mostra a imagem. Senão, mostra o placeholder. */}
                    {project.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover z-0 relative"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-x-0 h-[1px] bg-white/5 top-1/2"></div>
                        <div className="absolute inset-y-0 w-[1px] bg-white/5 left-1/2"></div>
                        <div className="text-zinc-700 font-display text-2xl z-10 font-bold select-none">{project.title} Preview</div>
                      </>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isReverse ? 'lg:order-1' : ''}`}>
                  <div className="text-xs font-medium text-secondary mb-4 uppercase tracking-widest flex items-center gap-2">
                    <span>• {project.id}</span>
                    <span className="w-[1px] h-3 bg-white/20 mx-2"></span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="font-display text-4xl font-bold mb-6 text-white">{project.title}</h3>
                  <p className="text-secondary text-lg mb-8 font-light leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techs.map(tech => (
                      <span key={tech} className="px-4 py-1.5 border border-white/10 rounded-full text-xs font-medium text-secondary bg-white/[0.02]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-6 items-center">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:opacity-70 group/link w-fit border-b border-white/30 hover:border-white pb-1 text-sm uppercase tracking-wide">
                        Ver Demo <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"/>
                      </a>
                    )}
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-secondary transition-colors hover:text-white w-fit text-sm">
                        Github
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

