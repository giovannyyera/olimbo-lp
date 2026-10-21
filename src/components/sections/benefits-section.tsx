import { siteConfig } from "@/config/site";

import { SectionHeading } from "../section-heading";
import { BenefitVisual } from "../visuals/benefit-visual";

export function BenefitsSection() {
  return (
    <section className="section benefits-section reveal" id="beneficios">
      <div className="shell">
        <SectionHeading
          eyebrow="O que a tecnologia pode melhorar"
          title="Tecnologia que resolve problemas e abre novas possibilidades."
          description="Para empreendedores, profissionais e empresas, uma solução digital bem definida pode aproximar oportunidades, organizar rotinas e transformar necessidades específicas em ferramentas úteis."
        />
        <div className="benefits-grid">
          {siteConfig.benefits.map((benefit, index) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="card-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <BenefitVisual variant={benefit.visual} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
