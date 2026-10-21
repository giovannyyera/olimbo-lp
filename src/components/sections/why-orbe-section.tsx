import { siteConfig } from "@/config/site";

export function WhyOrbeSection() {
  return (
    <section className="why-section section-anchor reveal" id="sobre">
      <div className="shell why-grid">
        <div className="why-orbit" aria-hidden="true">
          <span className="why-orbit-ring why-orbit-ring-outer" />
          <span className="why-orbit-ring why-orbit-ring-inner" />
          <i className="why-orbit-axis" />
          <b>Contexto</b>
        </div>
        <div className="why-copy">
          <p className="eyebrow">Por que a Orbe?</p>
          <h2>Seu projeto merece mais do que uma solução genérica.</h2>
          <p className="why-intro">
            A Orbe é uma empresa de tecnologia que cria sites, sistemas e
            automações a partir da necessidade de cada projeto. A proposta
            prioriza função clara, experiência compreensível e atenção à execução.
          </p>
          <ol className="principles-list">
            {siteConfig.principles.map((principle, index) => (
              <li key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{principle}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
