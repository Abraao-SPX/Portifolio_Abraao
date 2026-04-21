"use client";
import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-white/5' : 'py-6 px-6 md:px-12 mix-blend-difference'}`}
      >
        <div className={`max-w-7xl mx-auto flex justify-between items-center ${scrolled ? 'px-6 md:px-12' : ''}`}>
          {/* Logo Name */}
          <div className="text-xl font-display font-bold tracking-tight text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {siteConfig.personal.name}
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 text-sm font-medium text-white">
            <li><a href="#sobre" className="hover:text-secondary hover:-translate-y-0.5 inline-block transition-all">Sobre</a></li>
            <li><a href="#projetos" className="hover:text-secondary hover:-translate-y-0.5 inline-block transition-all">Projetos</a></li>
            <li><a href="#experiencia" className="hover:text-secondary hover:-translate-y-0.5 inline-block transition-all">Experiência</a></li>
            <li><a href="#contato" className="hover:text-secondary hover:-translate-y-0.5 inline-block transition-all">Contato</a></li>
          </ul>

          {/* Mobile Hamburguer */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Fundo Escuro com Blur clicável para fechar o menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Painel Lateral do Menu (Apenas parte da tela) */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-[60%] max-w-[280px] h-full bg-surface/95 backdrop-blur-xl border-l border-white/10 text-white flex flex-col pt-24 items-start overflow-hidden shadow-2xl shadow-black"
            >
              {/* Fundo Animado do Menu */}
              <div className="absolute inset-0 pointer-events-none -z-10 bg-surface">
                {/* Textura de Grid Holográfica Animada */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_40%,transparent_100%)]"
                />
                
                {/* Esferas de Luz Flutuantes Altamente Visíveis */}
                <motion.div
                  animate={{
                    y: [0, 50, 0],
                    x: [0, -40, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.15, 0.45, 0.15]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-[-10%] w-[200px] h-[200px] bg-white/20 rounded-full blur-[70px]"
                />
                <motion.div
                  animate={{
                    y: [0, -40, 0],
                    x: [0, 40, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 left-[-20%] w-[250px] h-[250px] bg-white/10 rounded-full blur-[80px]"
                />

                {/* Noise (Granulação) Estético Típico de Arquitetura Premium */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/noise.png')" }}></div>
              </div>

              <button
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
                onClick={() => setMenuOpen(false)}
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-300 text-white/70 hover:text-white" />
              </button>

              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                  }
                }}
                className="flex flex-col gap-2 w-full px-6 text-lg font-medium text-left"
              >
                <motion.li variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
                  <a href="#sobre" className="block w-full py-2.5 px-4 rounded-lg hover:bg-white/10 border border-transparent transition-all duration-300 text-zinc-300 hover:text-white" onClick={() => setMenuOpen(false)}>Sobre</a>
                </motion.li>
                <motion.li variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
                  <a href="#projetos" className="block w-full py-2.5 px-4 rounded-lg hover:bg-white/10 border border-transparent transition-all duration-300 text-zinc-300 hover:text-white" onClick={() => setMenuOpen(false)}>Projetos</a>
                </motion.li>
                <motion.li variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
                  <a href="#experiencia" className="block w-full py-2.5 px-4 rounded-lg hover:bg-white/10 border border-transparent transition-all duration-300 text-zinc-300 hover:text-white" onClick={() => setMenuOpen(false)}>Experiência</a>
                </motion.li>
                <motion.li variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
                  <a href="#contato" className="block w-full py-2.5 px-4 rounded-lg hover:bg-white/10 border border-transparent transition-all duration-300 text-zinc-300 hover:text-white" onClick={() => setMenuOpen(false)}>Contato</a>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
