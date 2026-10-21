import { siteConfig } from "@/config/site";

import { ContactCta } from "../contact-cta";

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
          <h2>Seu próximo projeto pode começar hoje.</h2>
        </div>
        <div className="final-cta-copy">
          <p>
            Conte o que você precisa. Seja um site, um sistema, uma automação
            ou uma ideia ainda no papel, vamos conversar sobre as possibilidades.
          </p>
          <ContactCta
            contact={siteConfig.contact.whatsapp}
            label="Conversar com a Orbe"
            className="final-cta-button"
          />
          <p className="contact-status">
            {siteConfig.contact.whatsapp.unavailableMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
