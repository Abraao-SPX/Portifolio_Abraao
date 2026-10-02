import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import HeroSculpture from "@/components/HeroSculpture";


export default function Hero() {
  const { personal } = siteConfig;
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-topline">
          <span className="eyebrow"><span className="small-asterisk">✳</span> DESENVOLVEDOR DE SOFTWARE</span>
          <span className="availability"><span /> Disponível para oportunidades</span>
        </div>
        <div className="hero-grid">
          <div className="hero-main">
            <h1 id="hero-heading" aria-label={`${personal.name} ${personal.surname}`}><span className="hero-title-line" aria-hidden="true"><span>{personal.name}</span></span><span className="hero-title-line" aria-hidden="true"><span>{personal.surname}<span className="hero-period">.</span></span></span></h1>
            <div className="hero-intro">
              <ArrowDownRight className="hero-intro-arrow" size={30} strokeWidth={1.25} aria-hidden="true" />
              <p>Entre a ideia e o código,<br />eu gosto de <em>construir.</em></p>
            </div>
            <p className="hero-description">Desenvolvo aplicações com Java e Flutter.<br className="desktop-break" /> Estudante, curioso por natureza e atento à segurança em cada detalhe.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projetos">Explore meus projetos <ArrowDown size={17} aria-hidden="true" /></a>
              <a className="text-link" href={personal.socials.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <HeroSculpture />
        </div>
        <div className="hero-bottomline">
          <span className="eyebrow">BACK-END · MOBILE · SEGURANÇA</span>
          <a href="#projetos" className="scroll-prompt">UM POUCO DO QUE EU FAÇO <ArrowDown size={13} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="specialties-strip" aria-label="Principais tecnologias">
        <div className="container specialties-inner">
          <span>Java <span className="strip-plus">+</span> Spring Boot</span><span className="strip-mark" aria-hidden="true">✳</span>
          <span>Flutter <span className="strip-plus">&</span> Dart</span><span className="strip-mark" aria-hidden="true">✳</span>
          <span>APIs & arquitetura</span><span className="strip-mark" aria-hidden="true">✳</span>
          <span>Segurança por princípio</span>
        </div>
      </div>
    </section>
  );
}
