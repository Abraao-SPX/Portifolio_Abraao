"use client";
import React from "react";
import { siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  const { about } = siteConfig;

  // Variantes para Stagger Animation (Entrada das palavras)
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="sobre" className="py-32 px-6 md:px-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <div className="lg:col-span-5">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUpVariant}
            className="font-display text-4xl md:text-5xl font-medium leading-[1.1] hover:text-zinc-300 transition-colors"
          >
            {about.title}
          </motion.h2>
          
          {/* Decorative Divider */}
          <motion.div 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] w-1/4 bg-white/20 mt-12 origin-left hidden lg:block" 
          />
        </div>

        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <motion.p 
                key={i}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={fadeUpVariant}
                transition={{ delay: 0.1 * i }}
                className="text-lg md:text-xl text-secondary font-light leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUpVariant}
            className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4"
          >
            {about.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 block"/> {highlight}
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

