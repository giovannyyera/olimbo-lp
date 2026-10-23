import { siteConfig } from "@/config/site";

import { ContactCta } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";
import { SolutionVisual } from "@/components/visuals/solution-visual";

export function SolutionsSection() {
  return (
    <section className="section solutions-section section-anchor reveal" id="solucoes">
      <div className="shell">
        <SectionHeading
          eyebrow="Nossas soluções"
          title="O que você precisa construir hoje?"
          description="Escolha o ponto de partida: apresentar seu negócio, organizar a operação, conectar ferramentas ou dar forma a uma ideia."
        />
        <div className="solutions-bento">
          {siteConfig.solutions.map((solution) => (
            <article
              className={`solution-bento solution-${solution.layout} solution-service-${solution.id}`}
              id={`solucao-${solution.id}`}
              key={solution.id}
            >
              <SolutionVisual service={solution.id} />
              <div className="solution-content">
                <div className="solution-heading">
                  <span className="solution-number">{solution.number} / SOLUÇÃO</span>
                  <span className="solution-heading-arrow" aria-hidden="true">↗</span>
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
                  variant={solution.id === "sites" || solution.id === "automacoes" ? "gold" : "dark"}
                  className="solution-cta"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
