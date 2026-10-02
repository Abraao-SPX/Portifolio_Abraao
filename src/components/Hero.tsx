import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

function ArchitectureDrawing() {
  return (
    <div className="architecture-art" aria-hidden="true">
      <div className="art-coordinate art-coordinate-top">FIG. 01 — CAMADAS DE UMA IDEIA</div>
      <svg viewBox="0 0 480 500" fill="none" className="architecture-svg">
        <defs>
          <pattern id="drawing-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="#a8aa9c" opacity=".5" />
          </pattern>
        </defs>
        <rect x="15" y="25" width="450" height="450" fill="url(#drawing-grid)" />
        <ellipse cx="240" cy="270" rx="210" ry="210" stroke="#d8d7ca" />
        <ellipse cx="240" cy="270" rx="160" ry="210" stroke="#deddd2" strokeDasharray="3 6" />
        <path d="M240 18V486M10 270H470" stroke="#c7c8bc" strokeDasharray="3 6" />
        <path d="M64 367L240 459L416 367L240 275L64 367Z" fill="#e7e7dc" stroke="#979c8b" />
        <path d="M64 367V387L240 479L416 387V367M240 459V479" stroke="#979c8b" />
        <path d="M99 385L275 293M135 404L311 312M170 422L346 330M205 441L381 348M99 348L275 440M135 330L310 421M170 311L346 404M205 293L381 385" stroke="#bac0ad" />
        <g className="art-middle-layer">
          <path d="M64 248L240 340L416 248V272L240 365L64 272V248Z" fill="#252a24" stroke="#252a24" />
          <path d="M64 248L240 340L416 248L240 156L64 248Z" fill="#424b3d" stroke="#252a24" />
          <path d="M99 248L240 322L381 248L240 174L99 248Z" stroke="#839075" />
          <path d="M135 248L240 303L346 248L240 193L135 248Z" stroke="#839075" />
          <path d="M170 248L240 285L311 248L240 211L170 248Z" stroke="#a6b38e" />
          <path d="M240 340V365" stroke="#74816a" />
        </g>
        <path d="M64 144V246M416 144V246M240 236V338M64 276V363M416 276V363M240 367V450" stroke="#929885" strokeDasharray="4 6" />
        <g className="art-top-layer">
          <path d="M64 126V147L240 239L416 147V126" fill="#c74722" stroke="#a63d1f" />
          <path d="M64 126L240 218L416 126L240 34L64 126Z" fill="#e85a2a" stroke="#b54420" />
          <path d="M99 126L240 200L381 126L240 52L99 126Z" stroke="#f79669" />
          <path d="M64 126L240 218L416 126M240 218V239" stroke="#ffae87" />
          <path d="M215 92L177 112L215 132M265 119L303 139L265 159M255 90L225 160" stroke="#fff2d9" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
        </g>
        <path d="M416 126H455M416 248H455M416 367H455" stroke="#858b7b" />
        <circle cx="455" cy="126" r="3" fill="#e85a2a" />
        <circle cx="455" cy="248" r="3" fill="#424b3d" />
        <circle cx="455" cy="367" r="3" fill="#858b7b" />
        <path d="M34 65H46M40 59V71M423 430H435M429 424V436" stroke="#7b8370" />
      </svg>
      <div className="art-caption"><span>BOAS IDEIAS PRECISAM<br />DE UMA BOA ESTRUTURA.</span><span className="art-caption-symbol">↗</span></div>
    </div>
  );
}

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
            <h1 id="hero-heading">Abraão<br />Paixão<span className="hero-period">.</span></h1>
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
          <ArchitectureDrawing />
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
