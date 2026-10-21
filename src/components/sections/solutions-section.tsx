import { siteConfig } from "@/config/site";

import { ContactCta } from "../contact-cta";
import { SectionHeading } from "../section-heading";

export function SolutionsSection() {
  return (
    <section className="section solutions-section section-anchor reveal" id="solucoes">
      <div className="shell">
        <SectionHeading
          eyebrow="Nossas soluções"
          title="O que você precisa construir hoje?"
          description="Cada projeto começa por um problema concreto. A tecnologia entra para criar um caminho mais claro, organizado e adequado ao seu contexto."
        />
        <div className="solutions-bento">
          {siteConfig.solutions.map((solution) => (
            <article
              className={`solution-bento solution-${solution.layout}`}
              id={`solucao-${solution.id}`}
              key={solution.id}
            >
              <div className="solution-heading">
                <span className="solution-number">{solution.number}</span>
                <span className="solution-orbit" aria-hidden="true"><i /></span>
              </div>
              <div className="solution-copy">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <ContactCta
                contact={siteConfig.contact.whatsapp}
                label={solution.ctaLabel}
                message={solution.whatsappMessage}
                variant="outline"
                className="solution-cta"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
