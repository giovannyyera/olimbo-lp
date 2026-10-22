import { siteConfig } from "@/config/site";

export function ProblemSolutionSection() {
  return (
    <section className="problem-section reveal" id="problemas">
      <div className="shell problem-layout">
        <div className="problem-intro">
          <p className="eyebrow eyebrow-dark">Problema e possibilidade</p>
          <h2>
            Se a tecnologia ainda não está facilitando sua vida, existe espaço
            para melhorar.
          </h2>
          <p>
            Identifique uma situação próxima da sua rotina e veja um caminho
            digital que pode ser avaliado com a Olimbo.
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
                <p className="problem-label">Possível caminho</p>
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
