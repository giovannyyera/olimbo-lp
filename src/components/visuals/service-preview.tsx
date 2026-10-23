export type PreviewType = "website" | "dashboard" | "workflow";

function WebsitePreview() {
  return (
    <div className="preview-website">
      <div className="preview-brand"><b>Seu negócio.</b><span>Sobre &nbsp; Serviços &nbsp; Contato ↗</span></div>
      <div className="preview-website-content">
        <div className="preview-website-copy">
          <span className="preview-kicker">PRESENÇA QUE CONECTA</span>
          <strong>Uma boa ideia merece ser vista.</strong>
          <p>Seu trabalho, sua essência. Uma experiência feita para conectar você às próximas oportunidades.</p>
          <span className="preview-site-cta">Conheça as possibilidades <span>↗</span></span>
        </div>
        <div className="preview-website-art" aria-hidden="true"><i /><i /><i /><span>Ideias ganham<br />novos caminhos.</span></div>
      </div>
      <div className="preview-website-footer"><span>Design com intenção.</span><span>Experiência em cada detalhe. ↗</span></div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="preview-dashboard">
      <div className="preview-sidebar"><b>Painel.</b><span data-selected="true">Visão geral</span><span>Projetos</span><span>Clientes</span><span>Atividades</span><small>SEU ESPAÇO DE TRABALHO</small></div>
      <div className="preview-main">
        <div className="preview-panel-head"><div><span className="preview-kicker">TUDO NO SEU LUGAR</span><strong>Seu dia, com clareza.</strong></div><span className="preview-status">Visão da operação</span></div>
        <div className="preview-summary"><div><span>Organize</span><b>Projetos</b><small>Do início à entrega</small></div><div><span>Conecte</span><b>Equipe</b><small>Todos na mesma direção</small></div></div>
        <div className="preview-columns">
          <div><span>EM ANDAMENTO <i /></span><div className="preview-task"><small>PROJETO</small><b>Nova presença digital</b><span>Planejamento e conteúdo</span><em>Em produção</em></div></div>
          <div><span>PRÓXIMOS PASSOS <i /></span><div className="preview-task"><small>REVISÃO</small><b>Alinhar os detalhes</b><span>Uma visão compartilhada</span><em data-tone="gold">A revisar</em></div></div>
        </div>
      </div>
    </div>
  );
}

function WorkflowPreview() {
  return (
    <div className="preview-workflow">
      <div className="preview-flow-intro"><span className="preview-kicker">MENOS REPETIÇÃO. MAIS FOCO.</span><strong>A rotina segue.<br />Você vai além.</strong><p>Conecte etapas que hoje dependem de trabalho manual.</p></div>
      <div className="preview-flow-track">
        <div className="preview-flow-node"><span aria-hidden="true">↙</span><div><small>01 · ENTRADA</small><b>Nova solicitação</b><span>Os dados chegam</span></div><i aria-hidden="true">✓</i></div>
        <div className="preview-flow-connector" aria-hidden="true"><i /><span>Conectar</span></div>
        <div className="preview-flow-node" data-tone="gold"><span aria-hidden="true">⌘</span><div><small>02 · ORGANIZAÇÃO</small><b>Cada informação no lugar</b><span>Sem copiar e colar</span></div><i aria-hidden="true">✓</i></div>
        <div className="preview-flow-connector" aria-hidden="true"><i /><span>Continuar</span></div>
        <div className="preview-flow-node"><span aria-hidden="true">↗</span><div><small>03 · PRÓXIMA AÇÃO</small><b>Equipe avisada</b><span>O trabalho continua</span></div><i aria-hidden="true">✓</i></div>
      </div>
      <div className="preview-flow-detail"><i aria-hidden="true" />Informação conectada. Rotina simplificada.</div>
    </div>
  );
}

export function ServicePreview({ type }: { type: PreviewType }) {
  return (
    <div className={`preview-window preview-${type}-window`}>
      <div className="preview-chrome" aria-hidden="true"><span /><span /><span /><small>{type === "website" ? "Sua presença digital" : type === "dashboard" ? "Sua operação conectada" : "Seu próximo fluxo"}</small><i>↗</i></div>
      <div className="preview-body">{type === "website" ? <WebsitePreview /> : type === "dashboard" ? <DashboardPreview /> : <WorkflowPreview />}</div>
    </div>
  );
}
