import { siteConfig } from "@/config/site";
import { creatives } from "@/config/creatives";

import { ContactCta } from "@/components/contact-cta";
import { HeroProductVisual } from "@/components/visuals/hero-product-visual";
import { ServicePreview } from "@/components/visuals/service-preview";

export function HeroSection() {
  return (
    <section className="hero section-anchor" id="inicio">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            SITES <span>•</span> SOFTWARES <span>•</span> AUTOMAÇÕES
          </p>
          <h1>Seu próximo passo merece uma <span>solução à altura.</span></h1>
          <p className="hero-description">
            Um site que valoriza seu trabalho. Um sistema que organiza a operação.
            Uma automação que libera seu tempo. A Olimbo desenvolve a tecnologia
            que faz sentido para o seu negócio.
          </p>
          <div className="hero-actions">
            <ContactCta
              contact={siteConfig.contact.whatsapp}
              label="Vamos conversar sobre sua ideia"
            />
            <a className="button button-outline" href="#solucoes">Explorar soluções <span aria-hidden="true">↗</span></a>
          </div>
          <p className="contact-note">
            {siteConfig.contact.whatsapp.note}
          </p>
        </div>
        <HeroProductVisual previews={creatives.map((creative) => <ServicePreview type={creative.id} key={creative.id} />)} />
      </div>
      <ul className="shell hero-capabilities" aria-label="Áreas de atuação">
        <li>Presença que valoriza</li>
        <li>Operação que faz sentido</li>
        <li>Tempo para o que importa</li>
      </ul>
    </section>
  );
}
