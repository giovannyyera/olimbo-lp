type BenefitVisualProps = {
  variant: "opportunities" | "automation" | "organization" | "custom";
};

export function BenefitVisual({ variant }: BenefitVisualProps) {
  if (variant === "opportunities") {
    return (
      <div className="benefit-visual benefit-opportunities" aria-hidden="true">
        <div className="benefit-art-surface">
          <div className="benefit-site-sheet">
            <div className="benefit-site-nav"><b>Seu negócio.</b><span>Vamos conversar ↗</span></div>
            <div className="benefit-site-editorial">
              <small>FEITO PARA SER LEMBRADO</small>
              <strong>Sua marca.<br />Em destaque.</strong>
              <span className="benefit-site-action">Conheça nosso trabalho ↗</span>
            </div>
            <div className="benefit-site-sculpture"><i /><i /><i /></div>
            <span className="benefit-site-foot">Sua essência em cada detalhe.</span>
          </div>
          <div className="benefit-site-mobile"><span /><b>Seu<br />negócio.</b><i /><small>Vamos conversar ↗</small></div>
          <span className="benefit-art-note">Design que tem a sua cara.</span>
        </div>
      </div>
    );
  }

  if (variant === "automation") {
    return (
      <div className="benefit-visual benefit-automation" aria-hidden="true">
        <div className="benefit-art-surface">
          <div className="benefit-flow-caption"><span>UM PEDIDO CHEGA.</span><b>O fluxo cuida do caminho.</b></div>
          <div className="benefit-flow-line" />
          <div className="benefit-flow-ticket benefit-flow-entry"><i>↙</i><div><small>ENTRADA</small><b>Nova solicitação</b><span>Dados recebidos</span></div><em>✓</em></div>
          <div className="benefit-flow-ticket benefit-flow-process"><i>⌘</i><div><small>AUTOMAÇÃO</small><b>Informações organizadas</b><span>Cada dado no seu lugar</span></div><em>✓</em></div>
          <div className="benefit-flow-ticket benefit-flow-done"><i>↗</i><div><small>PRÓXIMO PASSO</small><b>Equipe avisada</b><span>Pronto para continuar</span></div><em>✓</em></div>
          <span className="benefit-flow-foot"><i />Sem repetir o trabalho.</span>
        </div>
      </div>
    );
  }

  if (variant === "organization") {
    return (
      <div className="benefit-visual benefit-organization" aria-hidden="true">
        <div className="benefit-art-surface">
          <div className="benefit-board">
            <div className="benefit-board-sidebar"><b>O.</b><i /><i /><i /></div>
            <div className="benefit-board-main">
              <div className="benefit-board-head"><div><small>ESPAÇO DE TRABALHO</small><b>Do plano à entrega.</b></div><span>+ Nova demanda</span></div>
              <div className="benefit-board-columns">
                <div><small><i /> A FAZER</small><div className="benefit-board-task"><em>PLANEJAMENTO</em><b>Organizar o projeto</b><span>Escopo e prioridades</span><i /></div><div className="benefit-board-placeholder" /></div>
                <div><small><i /> EM ANDAMENTO</small><div className="benefit-board-task" data-active="true"><em>CRIAÇÃO</em><b>Dar forma à ideia</b><span>Detalhes em construção</span><i /></div><div className="benefit-board-placeholder" /></div>
              </div>
            </div>
          </div>
          <div className="benefit-board-notice"><span>✓</span><div><small>INFORMAÇÃO NO LUGAR CERTO</small><b>Todo mundo na mesma página.</b></div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="benefit-visual benefit-custom" aria-hidden="true">
      <div className="benefit-art-surface">
        <div className="benefit-idea-note"><small>O PONTO DE PARTIDA</small><b>“Tenho uma<br />ideia. Por onde<br />começar?”</b><span>Vamos dar forma a ela. ↗</span></div>
        <div className="benefit-plan-sheet"><div><span>OLIMBO / DIREÇÃO DIGITAL</span><i>↗</i></div><strong>Ideia boa.<br /><span>Próximo passo claro.</span></strong><p><i>✓</i> Entender o desafio</p><p><i>✓</i> Definir prioridades</p><p><i>↗</i> Planejar a solução</p><small>SEU PROJETO COMEÇA AQUI.</small></div>
        <span className="benefit-idea-arrow">⤴</span>
      </div>
    </div>
  );
}
