import { siteConfig } from "@/config/site";

import { ContactCta } from "@/components/contact-cta";

export function FinalCtaSection() {
  return (
    <section className="final-cta section-anchor reveal" id="contato">
      <div className="final-cta-visual" aria-hidden="true">
        <span className="cta-orbit cta-orbit-one" />
        <span className="cta-orbit cta-orbit-two" />
        <span className="cta-node cta-node-one" />
        <span className="cta-node cta-node-two" />
        <i />
      </div>
      <div className="shell final-cta-grid">
        <div>
          <p className="eyebrow eyebrow-dark">O próximo passo</p>
          <h2>Qual ideia você quer colocar em movimento?</h2>
        </div>
        <div className="final-cta-copy">
          <p>
            Conte o que você quer construir ou melhorar. Vamos entender seu
            cenário e conversar sobre uma solução que faça sentido para o seu negócio.
          </p>
          <ContactCta
            contact={siteConfig.contact.whatsapp}
            label="Vamos conversar sobre meu projeto"
            className="final-cta-button"
          />
          <p className="contact-status">
            {siteConfig.contact.whatsapp.note}
          </p>
        </div>
      </div>
    </section>
  );
}
