import { siteConfig } from "@/config/site";

import { BenefitVisual } from "@/components/visuals/benefit-visual";

export function BenefitsSection() {
  return (
    <section className="section benefits-section reveal" id="beneficios">
      <div className="shell benefits-layout">
        <div className="section-heading benefits-intro">
          <p className="eyebrow">Na prática, o que muda?</p>
          <h2>Seu negócio em evidência. <span>Sua rotina mais leve.</span></h2>
          <div className="benefits-context">
            <p className="section-description">
              Mais clareza para quem chega até você. Menos etapas manuais para quem
              faz tudo acontecer. Veja por onde a tecnologia pode começar a ajudar.
            </p>
            <a className="benefits-start" href="#solucoes">
              Encontre seu ponto de partida <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="benefits-grid">
          {siteConfig.benefits.map((benefit, index) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="benefit-card-heading">
                <span className="eyebrow">{benefit.label}</span>
                <span className="card-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <BenefitVisual variant={benefit.visual} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <a className="benefit-link" href={benefit.href}>
                {benefit.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
