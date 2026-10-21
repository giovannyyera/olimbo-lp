export function HeroProductVisual() {
  return (
    <figure className="hero-product-visual" aria-labelledby="hero-visual-caption">
      <div className="hero-visual-orbit" aria-hidden="true" />
      <div className="concept-window concept-website" aria-hidden="true">
        <div className="concept-toolbar">
          <span />
          <span />
          <span />
          <small>website</small>
        </div>
        <div className="concept-site-nav">
          <i />
          <span />
          <span />
          <span />
        </div>
        <div className="concept-site-copy">
          <b />
          <b />
          <span />
          <span />
          <i />
        </div>
      </div>

      <div className="concept-window concept-dashboard" aria-hidden="true">
        <div className="concept-toolbar">
          <span />
          <span />
          <span />
          <small>software</small>
        </div>
        <div className="concept-dashboard-body">
          <div className="concept-sidebar" />
          <div className="concept-dashboard-content">
            <b />
            <div className="concept-metric-row">
              <i />
              <i />
              <i />
            </div>
            <div className="concept-chart">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="concept-flow" aria-hidden="true">
        <span className="flow-node">Entrada</span>
        <i />
        <span className="flow-node flow-node-gold">Automação</span>
        <i />
        <span className="flow-node">Ação</span>
      </div>

      <figcaption id="hero-visual-caption">
        Demonstração conceitual de site, software e automação.
      </figcaption>
    </figure>
  );
}
