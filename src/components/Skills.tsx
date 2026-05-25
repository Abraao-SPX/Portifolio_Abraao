"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

const allTechs = [
  "Java", "Spring Boot", "Node.js", "TypeScript", "Python", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "AWS", "Kafka", "Git", "REST APIs",
  "GraphQL", "Microsserviços", "CI/CD", "JUnit", "Spring Security",
  "MySQL", "CQRS", "JWT", "OAuth2",
];

export default function Skills() {
  const { skills } = siteConfig;

  return (
    <section id="habilidades" className="py-32 px-6 md:px-20 border-t border-white/8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-xs uppercase tracking-[0.3em] text-secondary font-medium mb-6 flex items-center gap-4"
            >
              <span className="w-8 h-[1px] bg-white/20" />
              Stack técnica
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="sticky top-40"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-[1.05] tracking-tighter">
                Ferramentas &<br />Tecnologias
              </h2>
              <p className="text-secondary text-base max-w-sm font-light leading-relaxed">
                Desenvolvimento de ponta a ponta exige o domínio de um ecossistema amplo. Uso o que há de melhor para focar no que importa: a experiência final.
              </p>
            </motion.div>
          </div>

          {/* Skill groups */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * idx }}
                viewport={{ once: true, margin: "-80px" }}
                className="group p-6 rounded-2xl border border-white/6 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/12 transition-all"
              >
                <h4 className="text-sm font-display font-semibold mb-5 flex items-center gap-3 text-zinc-300 uppercase tracking-wider">
                  <span className="w-5 h-[1px] bg-white/30" />
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, itemIdx) => (
                    <motion.span
                      key={itemIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * itemIdx + 0.1 * idx }}
                      className="px-3.5 py-1.5 border border-white/8 rounded-full text-xs text-secondary bg-surface/50 hover:text-white hover:border-white/30 hover:bg-surface transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="overflow-hidden border-y border-white/6 py-5 relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="marquee-track">
            {[...allTechs, ...allTechs].map((tech, i) => (
              <span
                key={i}
                className="mx-6 text-xs uppercase tracking-[0.2em] text-zinc-600 font-medium whitespace-nowrap hover:text-zinc-300 transition-colors cursor-default"
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