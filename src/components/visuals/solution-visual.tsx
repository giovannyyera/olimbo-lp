type SolutionVisualProps = {
  service: "sites" | "sistemas" | "automacoes" | "consultoria";
};

export function SolutionVisual({ service }: SolutionVisualProps) {
  return (
    <div className={`solution-art solution-art-${service}`} aria-hidden="true">
      <div className="solution-art-scene">
        {service === "sites" ? (
          <>
            <div className="solution-site-frame">
              <div className="solution-site-top"><b>Sua marca.</b><span>Sobre &nbsp; Projetos &nbsp; Contato ↗</span></div>
              <small>UMA EXPERIÊNCIA FEITA PARA VOCÊ</small>
              <strong>Seu trabalho.<br /><em>Em destaque.</em></strong>
              <div className="solution-site-arch"><i /><i /><i /></div>
              <span className="solution-site-bottom">Explore as possibilidades <i>↗</i></span>
            </div>
            <div className="solution-site-tag"><span>↗</span>Do primeiro olhar ao próximo passo.</div>
            <span className="solution-art-caption">DESIGN + CONTEÚDO + EXPERIÊNCIA</span>
          </>
        ) : service === "sistemas" ? (
          <>
            <div className="solution-system-label"><small>SUA OPERAÇÃO, SEU JEITO.</small><strong>As peças se encaixam.</strong></div>
            <div className="solution-system-map">
              <div className="solution-system-core"><small>SISTEMA SOB MEDIDA</small><b>Seu processo<br />no centro.</b><span>Uma visão compartilhada ↗</span></div>
              <div className="solution-system-module" data-module="team"><i>◎</i><b>Equipe</b><span>Quem faz acontecer</span></div>
              <div className="solution-system-module" data-module="tasks"><i>▤</i><b>Demandas</b><span>O que vem a seguir</span></div>
              <div className="solution-system-module" data-module="data"><i>⌘</i><b>Informações</b><span>Tudo conectado</span></div>
            </div>
            <span className="solution-art-caption">MENOS INFORMAÇÃO ESPALHADA. MAIS CLAREZA.</span>
          </>
        ) : service === "automacoes" ? (
          <>
            <div className="solution-auto-heading"><small>FERRAMENTAS QUE CONVERSAM</small><strong>Uma ação.<br /><em>O caminho continua.</em></strong></div>
            <div className="solution-auto-route"><i /><i /></div>
            <div className="solution-auto-step" data-step="start"><span>01</span><div><small>QUANDO</small><b>Uma solicitação chega</b></div><i>↙</i></div>
            <div className="solution-auto-step" data-step="action"><span>02</span><div><small>ENTÃO</small><b>A informação segue</b></div><i>↗</i></div>
            <div className="solution-auto-result"><span>✓</span><div><small>SEM COPIAR E COLAR</small><b>O trabalho avança.</b></div></div>
          </>
        ) : (
          <>
            <span className="solution-plan-background">E AGORA?</span>
            <div className="solution-plan-question"><small>VAMOS COMEÇAR POR AQUI</small><strong>O que vale<br />construir<br /><em>primeiro?</em></strong><span>Uma conversa abre caminhos. ↗</span></div>
            <div className="solution-plan-roadmap"><div><small>OLIMBO / PLANO DE AÇÃO</small><span>↗</span></div><b>Da dúvida<br />à direção.</b><p><i>01</i> Entender o cenário</p><p><i>02</i> Escolher prioridades</p><p><i>03</i> Definir o próximo passo</p><span className="solution-plan-stamp">CLAREZA ANTES DE CONSTRUIR.</span></div>
          </>
        )}
      </div>
    </div>
  );
}
