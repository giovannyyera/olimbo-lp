# Design e acessibilidade da LP

A interface da Olimbo combina títulos editoriais, fundos claros, verde profundo e detalhes dourados. Demonstrações em HTML/CSS explicam os serviços; textos e CTAs apresentam os próximos passos sem inventar resultados comerciais.

## Identidade

O usuário forneceu a identidade atual em 23/10/2026. O símbolo é um “O” com cursor. As variantes de origem ficam na pasta local ignorada `olimbo_logos_png/`; [Criativos](creatives.md) registra a origem e as versões públicas usadas pela interface.

Cabeçalho e rodapé usam a horizontal da variante 05. A seção `#sobre` e os ícones usam o símbolo da variante 09. A transparência inclui espaços internos do símbolo e das letras. Preserve o desenho oficial ao substituir os ativos.

| Cor | Valor | Uso |
|---|---|---|
| Preto | `#0B0B0B` | Texto, CTAs e superfícies escuras |
| Dourado | `#FAC202` | CTAs e detalhes |
| Dourado escuro | `#705500` | Texto de destaque e hover em fundo claro |
| Marfim | `#F7F6F2` | Fundo principal |
| Grafite | `#414141` | Texto secundário |
| Cinza | `#686868` | Notas e rótulos com contraste em superfícies claras |

Manrope é a fonte principal. Os tokens ficam em `src/app/globals.css`; os estilos por responsabilidade ficam em `src/styles/`.

## Composição da página

1. Cabeçalho fixo com logo, navegação e contato
2. Hero com um H1, dois caminhos de ação e três prévias de serviços
3. Benefícios com introdução acima de quatro cartões
4. Soluções em quatro cards com descrições, vinte itens e mensagens contextuais de contato
5. Cinco problemas e possíveis caminhos digitais
6. Processo em quatro etapas
7. Diferenciais em `#sobre`, com imagem decorativa e chamada para proposta
8. Sete perguntas frequentes
9. Chamada final e rodapé

O hero mantém entrelinha `1.1`. A seção “Possibilidades” foi removida por solicitação do usuário; suas prévias continuam no hero.

## Responsividade

O layout começa com uma coluna. Benefícios ficam em duas colunas a partir de 640 px e em quatro a partir de 1280 px. Em desktop, a introdução dos benefícios divide título e contexto em uma faixa horizontal.

Sites e consultoria usam cards largos. Sistemas e automações dividem a linha intermediária a partir do tablet. O processo passa de vertical para horizontal em desktop. A seção institucional divide texto e imagem em duas colunas a partir de 1024 px.

Grades usam trilhas com largura mínima zero para permitir quebra de texto ao ampliar a fonte. O menu móvel tem altura máxima baseada em `100svh` e rolagem interna em telas baixas. Os alvos principais de toque têm pelo menos 44 px de altura.

## Movimento

A galeria alterna prévias a cada cinco segundos e permite seleção manual. Por solicitação anterior, a rotação continua após seleção, hover e foco, sem botão de pausa. Aba oculta suspende o timer; `prefers-reduced-motion` desativa a rotação. A legenda usa anúncio por leitor de tela apenas quando não há reprodução automática.

Essa preferência deixa uma pendência em WCAG 2.2.2: atualização automática ao lado de outro conteúdo precisa de mecanismo para pausar, parar ou ocultar. A auditoria registra a exceção; não declare conformidade integral enquanto ela permanecer.

Revelações por scroll usam `IntersectionObserver` e Web Animations. Hover e entradas animam transformação e opacidade; movimento reduzido cancela revelações, elimina transições da galeria e desativa a barra de progresso. Nenhuma biblioteca de animação é usada.

## Acessibilidade

A página oferece link de salto, um H1, títulos em sequência, HTML semântico, alternativas textuais e foco visível. O foco usa preto em fundos claros e dourado em seções escuras. Links externos de contato anunciam a abertura de nova aba.

O menu móvel usa `aria-expanded`, rótulo acessível e fechamento por Escape com retorno do foco. A FAQ usa `details` e `summary`, funciona por teclado e mantém uma resposta aberta por vez. Ilustrações estritamente decorativas ficam fora da árvore de acessibilidade; as legendas reais explicam as prévias do hero.

## Referências e revisão

A direção visual foi definida em 22/10/2026 com referência a [Stripe Products](https://stripe.com/products) e [Framer Publish](https://www.framer.com/publish/). São referências de apresentação, sem evidência de ganho de conversão.

Consulte [Qualidade](quality.md) e a [auditoria final](audit-2026-10-23.md) antes de alterar recortes, títulos, fundos ou interações. Resultados automatizados não substituem revisão humana nem comprovam conformidade integral.
