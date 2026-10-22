import { siteConfig } from "@/config/site";

import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <BrandLogo />
          <p>Sites, sistemas e automações pensados para necessidades reais.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <p className="footer-title">Navegação</p>
          {siteConfig.navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <div>
          <p className="footer-title">Soluções</p>
          {siteConfig.solutions.map((solution) => (
            <a href={`#solucao-${solution.id}`} key={solution.id}>
              {solution.title}
            </a>
          ))}
        </div>
      </div>
      <div className="shell footer-bottom">
        <span translate="no">OLIMBO</span>
        <span>Exemplos visuais são demonstrações conceituais.</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
