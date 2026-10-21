type ApplicationVisualProps = {
  type: "website" | "dashboard" | "workflow";
};

export function ApplicationVisual({ type }: ApplicationVisualProps) {
  if (type === "website") {
    return (
      <div className="application-visual application-website" aria-hidden="true">
        <div className="application-bar"><span /><span /><span /></div>
        <div className="application-nav"><i /><span /><span /></div>
        <div className="application-hero"><b /><b /><span /><i /></div>
        <div className="application-cards"><span /><span /><span /></div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="application-visual application-dashboard" aria-hidden="true">
        <aside><i /><i /><i /><i /></aside>
        <div className="application-dashboard-main">
          <b />
          <div className="application-kpis"><span /><span /><span /></div>
          <div className="application-table"><i /><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="application-visual application-workflow" aria-hidden="true">
      <span>Origem</span><i />
      <span className="workflow-center">Fluxo</span><i />
      <span>Destino</span>
      <b className="workflow-branch" />
    </div>
  );
}
