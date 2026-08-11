"use client";
import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "sobre" },
  { href: "#projetos", label: "projetos" },
  { href: "#habilidades", label: "skills" },
  { href: "#experiencia", label: "trajetória" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      const shouldBeScrolled = scrollTop > 50;
      setScrolled((prev) => {
        if (prev !== shouldBeScrolled) {
          return shouldBeScrolled;
        }
        return prev;
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accentLight to-coral z-[100] origin-left transition-transform duration-75"
        style={{ transform: "scaleX(0)" }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-background/85 backdrop-blur-xl border-b border-border"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-mono text-sm font-medium tracking-tight">
              <span className="text-accent">ap</span>
              <span className="text-muted">_</span>
              <span className="text-accent/70 cursor-blink">▋</span>
            </span>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-elegant/20 bg-elegant/5">
              <span className="w-1.5 h-1.5 rounded-full bg-elegant pulse-dot block" />
              <span className="text-[10px] text-elegant font-mono tracking-wide">disponível</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-mono text-secondary">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors relative group py-1 flex items-center gap-0.5"
                >
                  <span className="text-accent/40 group-hover:text-accent/70 transition-colors text-xs">~/</span>
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent/50 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contato"
              className="px-5 py-2 bg-accent text-white text-sm font-mono rounded-lg hover:bg-accentLight transition-all shadow-sm hover:shadow-md hover:shadow-accent/15"
            >
              contato
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-primary p-2 hover:bg-surfaceAlt rounded-lg transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-[68%] max-w-[280px] h-full bg-surface border-l border-border text-primary flex flex-col pt-20 overflow-hidden shadow-2xl"
            >
              <button
                className="absolute top-5 right-5 p-2 bg-surfaceAlt hover:bg-border/50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <X size={17} className="text-secondary" />
              </button>

              <div className="px-6 mb-8 flex items-center gap-2 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-elegant pulse-dot block" />
                <span className="text-xs text-elegant font-mono">disponível para projetos</span>
              </div>

              <nav className="flex flex-col px-4 gap-1 relative z-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    href={link.href}
                    className="flex items-center gap-1.5 py-3 px-4 rounded-xl hover:bg-surfaceAlt text-secondary hover:text-primary transition-all font-mono text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-accent/50 text-xs">~/</span>
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.07 }}
                  href="#contato"
                  className="mt-4 py-3 px-4 bg-accent text-white rounded-xl font-mono text-sm text-center hover:bg-accentLight transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  contato
                </motion.a>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
