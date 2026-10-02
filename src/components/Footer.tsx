import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a className="footer-brand" href="#inicio" aria-label={`${siteConfig.personal.name} ${siteConfig.personal.surname}, início`}>
          <span className="footer-monogram" aria-hidden="true">ap<span>.</span></span>
          <span>{siteConfig.personal.name} {siteConfig.personal.surname}</span>
        </a>
        <p className="footer-copyright">© {new Date().getFullYear()} · Feito com intenção.</p>
        <a className="footer-top" href="#inicio">Voltar ao topo <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
