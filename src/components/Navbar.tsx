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
            {siteConfig.personal.name}.
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
          <motion.div 
            initial={{ x: '100%', opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-surface text-white flex flex-col justify-center items-center"
          >
            <button className="absolute top-8 right-8" onClick={() => setMenuOpen(false)}>
              <X size={32}/>
            </button>
            <ul className="flex flex-col gap-10 text-3xl font-display font-medium text-center">
              <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
              <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
              <li><a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a></li>
              <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

