import { siteConfig } from "@/config/site";

import { ContactCta } from "../contact-cta";
import { SectionHeading } from "../section-heading";
import { ApplicationVisual } from "../visuals/application-visual";

export function ApplicationsSection() {
  return (
    <section className="section applications-section reveal" id="aplicacoes">
      <div className="shell">
        <SectionHeading
          eyebrow="Possibilidades"
          title="Imagine o que podemos construir para você."
          description="As interfaces abaixo são demonstrações conceituais. Elas ilustram possibilidades e não representam clientes, produtos ou resultados reais."
        />
        <div className="applications-grid">
          {siteConfig.applications.map((application) => (
            <article className="application-card" key={application.type}>
              <ApplicationVisual type={application.type} />
              <div className="application-copy">
                <p className="concept-label">{application.label}</p>
                <h3>{application.title}</h3>
                <p>{application.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="applications-cta">
          <p>Tem uma aplicação diferente em mente?</p>
          <ContactCta
            contact={siteConfig.contact.whatsapp}
            label="Conversar sobre uma possibilidade"
            message="Olá, Orbe! Tenho uma ideia de solução digital e quero conversar sobre as possibilidades."
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
