# Design e acessibilidade da landing page

A V2 combina minimalismo premium, hierarquia editorial e demonstrações visuais próprias para tornar a proposta comercial mais concreta.

## Direção visual

A referência oficial é `public/docs/Guia_de_Identidade_Visual_Orbe.pdf`. A interface usa `public/brand/orbe-logo1.png` em fundos claros, sem alterar proporção, cor ou conteúdo.

Os grafismos usam órbitas finas, eixos, conexões e interfaces abstratas. Eles representam ideias de tecnologia sem copiar o símbolo oficial nem simular produtos existentes.

## Tokens visuais

| Token | Valor | Uso principal |
|---|---:|---|
| Preto Orbe | `#0B0B0B` | Texto e seções de alto contraste |
| Dourado Orbe | `#FAC202` | Chamadas para ação e detalhes |
| Marfim | `#F7F6F2` | Fundo principal |
| Grafite | `#414141` | Texto secundário |
| Manrope | Fonte variável | Títulos e texto |

Os tokens globais ficam em `src/app/globals.css`. Os estilos são divididos em `src/styles/` por responsabilidade e permanecem abaixo de 350 linhas por arquivo.

## Estrutura visual

1. Header fixo com logo, navegação e contato
2. Hero com composição de website, painel e fluxo
3. Benefícios com quatro microilustrações
4. Serviços em bento grid
5. Problemas e possíveis caminhos em cartões comparativos
6. Exemplos conceituais de site, painel e automação
7. Timeline do processo proposto
8. Princípios da Orbe em seção dourada
9. Perguntas frequentes
10. Chamada final escura e rodapé

## Movimento e interação

- Entrada curta do hero com `transform` e `opacity`
- Revelação progressiva por scroll quando o navegador suporta `animation-timeline`
- Elevação discreta de cartões em dispositivos com hover
- Mudança de borda e contraste em controles interativos
- Ausência de loops automáticos, parallax e scroll hijacking
- Desativação efetiva de animações com `prefers-reduced-motion`

Não foi adicionada biblioteca de animação. A interface permanece completa quando animações não são suportadas.

## Responsividade

- Mobile first com uma coluna e alvos de toque amplos
- Duas colunas em telas intermediárias quando o conteúdo permite
- Grid de 12 colunas para serviços em desktop
- Timeline vertical no mobile e horizontal no desktop
- Menu móvel como única interação dependente de JavaScript
- `overflow-x: clip` e layouts por CSS Grid para evitar medições em JavaScript

## Acessibilidade

- Link de salto para o conteúdo principal
- Um H1 e sequência de H2 e H3 por seção
- Foco visível em links, botões e elementos `summary`
- Menu móvel com `aria-expanded`, `aria-controls` e fechamento por `Escape`
- Perguntas frequentes com `details` e `summary` nativos
- Ilustrações significativas descritas por `figcaption`
- Elementos estritamente decorativos escondidos de tecnologias assistivas
- Chamadas indisponíveis com nome acessível e explicação visível
- Imagem da logo com dimensões intrínsecas

## Pendência de revisão visual

O código prepara os breakpoints de 390, 768 e 1440 pixels. A sessão atual não oferece navegador integrado nem `agent-browser`, portanto nenhuma revisão visual nessas larguras foi alegada.

Atualize este documento quando uma regra visual ou de interação mudar.
