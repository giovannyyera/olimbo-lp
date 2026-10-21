# Orbe: landing page comercial

A landing page apresenta a Orbe, explica como suas soluções digitais ajudam diferentes projetos e conduz o visitante a uma conversa comercial.

## Objetivo comercial

A página deve responder o que a Orbe desenvolve, quais problemas pode ajudar a resolver e como iniciar um projeto. A comunicação prioriza benefícios compreensíveis sem prometer resultados, prazos ou condições comerciais não confirmadas.

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
4. Visualiza exemplos conceituais de aplicação
5. Conhece o processo proposto e os princípios da Orbe
6. Consulta respostas sobre orçamento e tipos de projeto
7. Inicia contato por um canal oficial aprovado

## Escopo implementado na V2

- Hero comercial com galeria interativa de três criativos de site, software e automação
- Benefícios com quatro ilustrações próprias
- Bento grid de serviços com mensagens contextuais de contato
- Comparação entre cinco problemas e possíveis caminhos digitais
- Três demonstrações conceituais com imagens próprias identificadas como ilustrativas
- Processo proposto em quatro etapas
- Princípios da Orbe sem prova social inventada
- Sete perguntas frequentes
- Chamada final e rodapé institucional
- Menu móvel acessível e navegação por âncoras
- Logo oficial preservada sem redesenho

## Contato comercial

O WhatsApp é o destino de todas as chamadas comerciais, com mensagem pronta. Por solicitação do usuário, os CTAs usam temporariamente um número brasileiro de exemplo, definido somente em `src/config/site.ts`, em `contact.whatsapp.phone`. A interface identifica o uso demonstrativo; substitua o número antes de publicar.

Cada serviço possui uma mensagem contextual pronta em `src/config/site.ts`. O helper só produz uma URL do domínio `wa.me` depois de validar um número internacional.

## Otimização para busca e mecanismos com inteligência artificial

- Título e descrição específicos para sites, sistemas e automações
- Um único H1 e hierarquia semântica de títulos
- Conteúdo estático renderizado no servidor
- Links internos para seções e serviços
- `robots.txt` que permite rastreamento sem citar sitemap ou domínio inexistente
- Dados vinculados em JSON (JSON-LD) do tipo `FAQPage`, derivados das perguntas visíveis
- Terminologia consistente sobre serviços, público, problemas e atendimento

Canonical, sitemap e URLs absolutas permanecem pendentes até a definição do domínio oficial. A página não promete posição em resultados de busca ou respostas de assistentes de IA.

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
- Deploy, domínio, serviços pagos ou mudanças globais de ambiente
- Depoimentos, clientes, cases, métricas, preços ou prazos não fornecidos
- Páginas vazias criadas apenas para palavras-chave

## Decisões técnicas

- Next.js 16.4.2, App Router, React 19.3 e TypeScript estrito
- Tailwind CSS 4, CSS próprio, ESLint 10 e Vitest 4
- Server Components por padrão
- JavaScript cliente restrito ao menu móvel, seleção da galeria e revelações por scroll
- Criativos WebP e microilustrações em HTML/CSS, sem biblioteca visual ou de animação
- Favicon e ícones de dispositivo derivados do símbolo oficial
- Conteúdo verificável centralizado em `src/config/site.ts`

## Critérios de aceitação

- A proposta, os benefícios e o próximo passo ficam claros no início da página
- Todas as seções solicitadas permanecem rastreáveis no HTML
- A navegação funciona por teclado e mantém foco visível
- O layout não cria overflow horizontal e respeita movimento reduzido
- Exemplos conceituais não parecem cases reais
- Nenhum resultado ou dado comercial é inventado; o contato temporário de exemplo é identificado como demonstrativo
- Lint, tipos, testes e build passam sem credenciais externas
- A responsividade deve ser revisada visualmente quando houver navegador disponível

## Pendências

- Número oficial de WhatsApp e mensagem final aprovada
- Domínio canônico para canonical, sitemap e URLs absolutas
- Eventuais imagens, portfólio e informações comerciais aprovadas

Atualize este documento quando objetivo, público, escopo ou restrições mudarem. Registre evidências técnicas em `docs/setup.md`.
