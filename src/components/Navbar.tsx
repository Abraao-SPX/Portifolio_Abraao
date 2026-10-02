"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Stack" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      });
    }, { rootMargin: "-15% 0px -60% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const query = window.matchMedia("(min-width: 761px)");
    const onResize = () => { if (query.matches) setIsOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    query.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      query.removeEventListener("change", onResize);
    };
  }, [isOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container navbar">
        <a href="#inicio" className="brand" aria-label="Abraão Paixão — início" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">a<span>p</span><i /></span>
          <span className="brand-caption">ABRAÃO<br />PAIXÃO</span>
        </a>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-controls="main-navigation" aria-expanded={isOpen} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={23} /> : <Menu size={23} />}</button>
        <nav id="main-navigation" className={`main-navigation${isOpen ? " is-open" : ""}`} aria-label="Navegação principal" onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== toggleRef.current) setIsOpen(false);
        }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`nav-link${active === link.href ? " is-active" : ""}`} aria-current={active === link.href ? "location" : undefined} onClick={() => setIsOpen(false)}>{link.label}</a>
          ))}
          <a href="#contato" className="nav-contact" onClick={() => setIsOpen(false)}>Vamos conversar <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
