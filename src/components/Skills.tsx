"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  const { skills } = siteConfig;

  return (
    <section id="habilidades" className="py-32 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="sticky top-40"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 leading-[1.1] hover:text-zinc-300 transition-colors tracking-tighter">
              Ferramentas & Tecnologias
            </h2>
            <p className="text-secondary text-lg max-w-sm font-light leading-relaxed">
              Desenvolvimento de ponta a ponta exige o domínio de um ecosistema amplo. Uso o que há de melhor para focar no que importa: a experiência final.
            </p>
          </motion.div>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * idx }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <h4 className="text-xl font-display font-medium mb-6 flex items-center gap-4 text-white">
                {skillGroup.category}
                <span className="h-[1px] flex-1 bg-white/10 group-hover:bg-white/30 transition-colors"></span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx} 
                    className="px-3.5 py-1.5 border border-white/10 rounded-full text-sm text-secondary bg-surface/50 hover:text-white hover:border-white/40 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

