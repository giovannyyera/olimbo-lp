import { siteConfig } from "@/config/site";

export function ProblemSolutionSection() {
  return (
    <section className="problem-section reveal" id="problemas">
      <div className="shell problem-layout">
        <div className="problem-intro">
          <p className="eyebrow eyebrow-dark">Da rotina à solução</p>
          <h2>
            O que está tomando o tempo do seu negócio?
          </h2>
          <p>
            Se uma destas situações faz parte do seu dia, podemos conversar
            sobre um caminho mais simples para resolvê-la.
          </p>
        </div>
        <div className="problem-list">
          {siteConfig.problemSolutions.map((item, index) => (
            <article className="problem-card" key={item.problem}>
              <div className="problem-card-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="problem-card-copy">
                <p className="problem-label">Situação</p>
                <h3>{item.problem}</h3>
                <div className="problem-connector" aria-hidden="true">
                  <span />
                  <i>↓</i>
                </div>
                <p className="problem-label">O caminho digital</p>
                <p>{item.solution}</p>
              </div>
              <span className="problem-service">{item.service}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
