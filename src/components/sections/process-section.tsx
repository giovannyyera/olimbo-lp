import { siteConfig } from "@/config/site";

import { SectionHeading } from "../section-heading";

export function ProcessSection() {
  return (
    <section className="section process-section section-anchor reveal" id="processo">
      <div className="shell">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Da primeira conversa à solução digital."
          description="Este é o processo proposto para entender o desafio, definir o caminho e preparar uma solução coerente com o projeto."
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
