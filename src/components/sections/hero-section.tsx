import { siteConfig } from "@/config/site";

import { ContactCta } from "../contact-cta";
import { HeroProductVisual } from "../visuals/hero-product-visual";

export function HeroSection() {
  return (
    <section className="hero section-anchor" id="inicio">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            SITES <span>•</span> SOFTWARES <span>•</span> AUTOMAÇÕES
          </p>
          <h1>Seu negócio pode ir mais longe com a tecnologia certa.</h1>
          <p className="hero-description">
            Criamos sites profissionais, sistemas personalizados e automações
            para ajudar você a conquistar mais oportunidades, reduzir tarefas
            manuais e transformar ideias em soluções reais.
          </p>
          <div className="hero-actions">
            <ContactCta
              contact={siteConfig.contact.whatsapp}
              label="Quero tirar meu projeto do papel"
            />
            <ContactCta
              contact={siteConfig.contact.whatsapp}
              label="Conversar sobre as soluções"
              variant="outline"
            />
          </div>
          <p className="contact-note">
            {siteConfig.contact.whatsapp.note}
          </p>
        </div>
        <HeroProductVisual />
      </div>
      <div className="shell hero-capabilities" aria-label="Áreas de atuação">
        <span>Sites profissionais</span>
        <span>Software sob medida</span>
        <span>Automação de processos</span>
      </div>
    </section>
  );
}
