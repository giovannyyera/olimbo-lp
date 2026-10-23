import { siteConfig } from "@/config/site";

import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  return (
    <section className="section process-section section-anchor reveal" id="processo">
      <div className="shell">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Você traz o desafio. Construímos o caminho."
          description="Uma sequência clara para sair da ideia, definir prioridades e chegar a uma solução pronta para ser usada."
        />
        <ol className="process-timeline">
          {siteConfig.process.map((step) => (
            <li key={step.number}>
              <div className="process-marker">
                <span>{step.number}</span>
                <i aria-hidden="true" />
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
