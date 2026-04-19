"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  const { experiences } = siteConfig;

  return (
    <section id="experiencia" className="py-32 px-6 md:px-20 border-t border-white/10 bg-surface/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-20 text-center"
        >
          <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter">Trajetória Real.</h2>
        </motion.div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline marker / Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-surface text-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_rgba(17,17,17,1)] z-10 transition-colors group-hover:border-white/50 group-hover:text-white">
                 <div className="w-2.5 h-2.5 bg-current rounded-full" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-white/5 bg-surface/40 hover:bg-surface/80 transition-colors">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2 gap-2">
                  <h4 className="text-xl font-display font-bold text-white">{exp.role}</h4>
                  <span className="text-xs font-medium text-secondary uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full whitespace-nowrap">{exp.period}</span>
                </div>
                {exp.company && <div className="text-sm font-medium text-zinc-400 mb-4">{exp.company}</div>}
                <p className="text-secondary font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

