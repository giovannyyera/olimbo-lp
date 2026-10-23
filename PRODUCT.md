# Olimbo: landing page comercial

A landing page apresenta a Olimbo, explica como suas soluções digitais ajudam diferentes projetos e conduz o visitante a uma conversa comercial.

## Objetivo comercial

A página deve responder o que a Olimbo desenvolve, quais problemas pode ajudar a resolver e como iniciar um projeto. A comunicação prioriza benefícios compreensíveis sem prometer resultados, prazos ou condições comerciais não confirmadas.

## Público

- Empreendedores e pessoas com projetos digitais
- Profissionais autônomos
- Pequenos e médios negócios
- Empresas que precisam criar ou evoluir produtos e processos digitais

Não há contas, papéis de usuário ou áreas autenticadas.

## Jornada principal

1. O visitante entende a proposta comercial no hero
2. Reconhece benefícios e situações próximas da sua rotina
3. Avalia sites, sistemas, automações e consultoria
4. Conhece o processo proposto e os princípios da Olimbo
5. Consulta respostas sobre orçamento e tipos de projeto
6. Inicia contato por um canal oficial aprovado

## Escopo implementado na V2

- Hero comercial com galeria de interfaces de site, sistema e automação, rotação automática a cada cinco segundos e controles manuais
- Benefícios com quatro ilustrações próprias
- Bento grid de serviços com mensagens contextuais de contato
- Comparação entre cinco problemas e possíveis caminhos digitais
- Processo proposto em quatro etapas
- Seção “Por que a Olimbo?” com diferenciais de planejamento, design e desenvolvimento, imagem decorativa própria e chamada para proposta sob medida, sem prova social inventada
- Sete perguntas frequentes
- Chamada final e rodapé institucional
- Menu móvel acessível e navegação por âncoras
- Logo oficial preservada sem redesenho

## Contato comercial

O WhatsApp é o destino de todas as chamadas comerciais, com mensagem pronta. Por solicitação do usuário em 23/10/2026, todos os CTAs comerciais usam o número +55 (18) 99671-6753, definido somente em `src/config/site.ts`, em `contact.whatsapp.phone`.

Cada serviço possui uma mensagem contextual pronta em `src/config/site.ts`. O helper só produz uma URL do domínio `wa.me` depois de validar um número internacional.

## Otimização para busca e mecanismos com inteligência artificial

- Título e descrição específicos para sites, sistemas e automações
- Um único H1 e hierarquia semântica de títulos
- Conteúdo pré-renderizado no build e exportado como HTML estático
- Links internos para seções e serviços
- `robots.txt` que permite rastreamento e referencia o sitemap do domínio definitivo
- Dados vinculados em JSON (JSON-LD) do tipo `FAQPage`, derivados das perguntas visíveis
- Terminologia consistente sobre serviços, público, problemas e atendimento

O domínio definitivo é `https://olimbo.dev.br`, fornecido pelo usuário em 23/10/2026. Canonical, sitemap e metadados absolutos usam essa origem. A página não promete posição em resultados de busca ou respostas de assistentes de IA.

## Identidade visual

- Preto `#0B0B0B`
- Dourado `#FAC202`
- Marfim `#F7F6F2`
- Grafite `#414141`
- Manrope como tipografia principal

A interface usa composição editorial, fundos claros, contraste alto e detalhes geométricos. Os grafismos são abstratos e não substituem o símbolo oficial.

## Fora do escopo

- Banco de dados, autenticação, pagamentos e área do cliente
- Formulário, envio de e-mail, gestão de relacionamento com clientes ou chat
- Analytics, rastreamento de conversões ou integração externa
- Execução de deploy, push, alterações DNS, serviços pagos ou mudanças globais de ambiente sem autorização específica
- Depoimentos, clientes, cases, métricas, preços ou prazos não fornecidos
- Páginas vazias criadas apenas para palavras-chave

## Decisões técnicas

- Next.js 16.4.2, App Router, React 19.3 e TypeScript estrito
- Tailwind CSS 4, CSS próprio, ESLint 10 e Vitest 4
- Server Components por padrão
- JavaScript cliente restrito ao menu móvel, seleção da galeria e revelações por scroll; interfaces demonstrativas renderizadas no servidor
- Prévias de interfaces e microilustrações em HTML/CSS, sem biblioteca visual ou de animação
- Favicon e ícones de dispositivo derivados do símbolo oficial
- Exportação estática para Cloudflare Pages com `output: "export"`, saída `out/` e imagens locais sem otimizador de servidor
- Conteúdo verificável em `src/config/site.ts`; diferenciais e proposta em `src/config/project-offer.ts`; legendas do hero em `src/config/creatives.ts`

## Critérios de aceitação

- Olimbo é a única marca em textos, metadados, mensagens de contato, documentação e ativos; arquivos da identidade anterior não integram o projeto atual
- A proposta, os benefícios e o próximo passo ficam claros no início da página
- Todas as seções solicitadas permanecem rastreáveis no HTML
- A navegação funciona por teclado e mantém foco visível
- A galeria contínua mantém a exceção de acessibilidade documentada em `docs/design.md` até nova decisão sobre pausa
- O layout não cria overflow horizontal e respeita movimento reduzido
- Exemplos conceituais não parecem cases reais
- Nenhum resultado ou dado comercial é inventado
- Lint, tipos, testes e build passam sem credenciais externas
- A responsividade deve ser revisada visualmente quando houver navegador disponível

## Pendências

- Revisão final das mensagens de WhatsApp
- Associação do domínio `olimbo.dev.br`, DNS e HTTPS no projeto Cloudflare Pages após autorização
- Eventuais imagens, portfólio e informações comerciais aprovadas

Atualize este documento quando objetivo, público, escopo ou restrições mudarem. Registre evidências técnicas em `docs/setup.md`.
