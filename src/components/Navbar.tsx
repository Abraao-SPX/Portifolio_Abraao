"use client";
import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Skills" },
  { href: "#experiencia", label: "Experiência" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 50);
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-[100] transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/85 backdrop-blur-md border-b border-white/[0.06]"
            : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">

          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="text-lg font-display font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
              {siteConfig.personal.name}
            </div>
            {/* Availability dot */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot block" />
              <span className="text-[10px] text-emerald-400 font-medium tracking-wide">Disponível</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-secondary">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contato"
              className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
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
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-[65%] max-w-[300px] h-full bg-[#0d0d0d] border-l border-white/8 text-white flex flex-col pt-20 overflow-hidden"
            >
              {/* Grid bg */}
              <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

              {/* Close button */}
              <button
                className="absolute top-5 right-5 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <X size={18} className="text-white/70" />
              </button>

              {/* Availability */}
              <div className="px-6 mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot block" />
                <span className="text-xs text-emerald-400 font-medium">Disponível para projetos</span>
              </div>

              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
                }}
                className="flex flex-col px-4 relative z-10"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                  >
                    <a
                      href={link.href}
                      className="block w-full py-3 px-4 rounded-xl hover:bg-white/6 text-zinc-300 hover:text-white transition-all text-base font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  variants={{ hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                  className="mt-6 px-4"
                >
                  <a
                    href="#contato"
                    className="block w-full py-3 px-6 bg-white text-black rounded-full font-semibold text-sm text-center hover:bg-zinc-100 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contato
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}