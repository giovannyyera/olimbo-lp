# Setup e evidências

## Contexto do bootstrap

- Data de verificação: 20/10/2026, fuso America/Sao_Paulo.
- Toolkit: Vibe Coding Toolkit, Prompt 11, revisão `790a895304e0c08b70a5b215c9d334f1c86b816c`.
- Ambiente observado: Windows, Node.js 24.22.0, npm 11.19.1 e Git 2.52.0.windows.1.
- Repositório existente preservado: branch `main`, remote `origin` e commit inicial `f269e88`.
- Nenhum commit, push, deploy, serviço pago ou configuração global foi realizado.

O scaffold oficial foi criado temporariamente com `create-next-app` 16.4.2 e incorporado à raiz, preservando Git, README e `.gitignore`. O Next.js adicionou ao `AGENTS.md` seu bloco gerenciado de orientação para agentes.

## Fontes e ativos

- Documentação versionada do Next.js em `node_modules/next/dist/docs/`.
- Marca atual: Olimbo. Logos transparentes em `public/brand/olimbo-logo-{horizontal,vertical,symbol}.png`; detalhes em `docs/creatives.md`.
- Diretrizes atuais do `web-design-guidelines` consultadas na fonte oficial da skill.

O guia da identidade anterior foi removido em 22/10/2026 por solicitação do usuário.

## Adaptações para uma landing page institucional

- npm foi preservado; nenhuma troca de gerenciador foi necessária.
- Banco, Drizzle, PostgreSQL, autenticação e migrations foram omitidos porque não há persistência.
- Zod, logger, biblioteca de classes, biblioteca de UI, ícones e animação foram omitidos por não sustentarem um fluxo atual.
- Não existe `.env.example`: o projeto não usa variáveis de ambiente.
- React Compiler e Cache Components permaneceram desativados sem evidência de necessidade.
- O WhatsApp oficial ainda não foi fornecido. Em 21/10/2026, por solicitação explícita do usuário, os CTAs foram habilitados com um número brasileiro de exemplo centralizado em `src/config/site.ts`. A interface identifica a demonstração. Revisar e substituir o número antes de publicar.
- Formulário, e-mail, gestão de relacionamento com clientes, analytics, gestão de conteúdo, chat e metadados dependentes de domínio foram adiados.

## Skills locais

As skills foram instaladas com cópia versionada em `.agents/skills/`, e `skills-lock.json` registra origem e hash. Para esta implementação foram lidas e aplicadas:

- `vercel-react-best-practices`: Server Components por padrão, cliente pequeno e imagens dimensionadas.
- `vercel-composition-patterns`: composição de chamadas para ação, cabeçalho e títulos sem contratos de componente excessivos.
- `web-design-guidelines`: revisão de semântica, foco, controles, imagens, movimento e responsividade.
- `writing-guidelines`: revisão editorial da documentação e remoção de abreviações ambíguas.
- `next-dev-loop`: procedimento de runtime consultado; execução específica bloqueada se `agent-browser` continuar ausente.

Também permanecem disponíveis para demandas específicas `next-bundle-optimizer`, `vercel-react-view-transitions`, `find-skills` e skills relacionadas à Vercel. Instalação não autoriza deploy, acesso a conta ou uso de token; nenhuma delas foi usada para publicar.

## Implementação entregue

- V2 comercial com hero, benefícios, bento grid de soluções, comparação de problemas, exemplos conceituais, processo, princípios, perguntas frequentes e chamada final.
- Ilustrações próprias em HTML e CSS para sites, painéis e fluxos, todas identificadas como conceituais.
- Mensagens contextuais de WhatsApp por serviço e mensagem geral, com CTAs habilitados para o número temporário de exemplo.
- Metadados comerciais, `robots.txt` e JSON-LD `FAQPage` sem canonical, sitemap ou URLs fictícias.
- Server Components em toda a página e menu móvel como única fronteira cliente.
- CSS dividido por responsabilidade, sem dependência visual ou de animação.
- Documentação de produto, arquitetura, design, qualidade e operação atualizada.

## Verificações

| Item | Estado | Evidência |
|---|---|---|
| Lint | Validado durante a implementação | `npm run lint`, exit 0 |
| Tipos | Validado durante a implementação | `npm run typecheck`, exit 0 |
| Testes | **Validado durante a implementação** | Vitest: 3 arquivos e 7 testes aprovados |
| Check completo | **Validado** | `npm run check`, exit 0: lint, tipos, lint tipado, regras, 3 arquivos/7 testes e build estático |
| Runtime local | **Validado** | `GET /` e `/robots.txt` retornaram 200 em `localhost:3000`; conteúdo, âncoras, CTAs e JSON-LD foram conferidos |
| Revisão estática de interface | **Validado** | Um H1, oito H2, destinos internos válidos, movimento reduzido e padrões proibidos revistos |
| Revisão visual | **Não executada** | O navegador integrado retornou `apps: []` e `browsers: []`; 390, 768 e 1440 pixels não foram alegados como testados |
| `next-dev-loop` | Pendente da ferramenta | `agent-browser` não foi encontrado no PATH no preflight inicial |

O servidor da própria Olimbo já estava ativo em `localhost:3000` durante a evolução V2 e foi preservado.

## Ocorrências corrigidas na V2

- O primeiro teste de dados estruturados usava o alias `@/*`, que o Vitest local não resolve. O import foi alterado para um caminho relativo, sem nova dependência.
- A primeira inicialização após o build mostrou erros transitórios de resolução de CSS no Turbopack. A recompilação terminou, a página e o CSS responderam 200, e uma nova leitura do log não apresentou erros.

## Riscos e pendências

- Substituir o número de exemplo pelo WhatsApp oficial e revisar as notas demonstrativas antes de publicar.
- Informar domínio canônico antes de configurar URLs absolutas de otimização para mecanismos de busca e compartilhamento.
- Aprovar qualquer portfólio, case, depoimento, métrica ou canal comercial antes de publicar.
- Reavaliar dependências e auditoria antes de uma entrega pública.
- Executar deploy apenas mediante autorização explícita.

## Ajuste dos CTAs em 21/10/2026

- Fonte: solicitação do usuário para direcionar todos os CTAs ao WhatsApp com mensagem e centralizar um número brasileiro de exemplo.
- Configuração: `src/config/site.ts`, campo `contact.whatsapp.phone`; mensagens gerais e por serviço preservadas. A chamada secundária do hero também abre o WhatsApp.
- Verificação: `npm run check` aprovado (lint, tipos, lint tipado, regras locais, 7 testes e build). O HTML gerado contém nove CTAs com destino `wa.me`, mesmo número e mensagem preenchida, sem CTA desabilitado. O menu móvel usa a mesma configuração e componente compartilhado.
- Revisão visual não executada: navegador integrado sem ferramenta disponível nesta sessão e `agent-browser` ausente do PATH.
- Condição de revisão: substituir o número temporário e revisar os textos demonstrativos quando o contato oficial for fornecido.

## Condição de revisão

Mudanças de stack, comandos, estrutura, marca, canal de contato ou escopo invalidam a evidência correspondente. Atualize este documento junto com a mudança; não converta uma pendência externa em integração simulada.

## Criativos e movimento — 21/10/2026

Esta atualização substitui as limitações da revisão visual inicial para as áreas verificadas abaixo.

- Três imagens geradas com `image_gen`, inspecionadas e salvas como WebP em `public/images/`; origem e prompts completos em `docs/creatives.md`. As três juntas somam aproximadamente 180 KB.
- Galeria manual no hero com transição de opacidade e escala, seleção por teclado e legenda anunciada. As imagens também aparecem nos exemplos de aplicações.
- Revelações por `IntersectionObserver` e Web Animations, sem ocultação inicial do conteúdo e sem biblioteca nova. A mudança para movimento reduzido cancela animações em execução. Há zoom no hover e indicador de progresso CSS nos navegadores compatíveis.
- Logo oficial preservada; apenas margens vazias foram removidas no arquivo derivado usado pelo header e rodapé. O favicon, o ícone PNG e o ícone Apple derivam do símbolo oficial sobre preto.
- Guias consultados na versão instalada: `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md` e `01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.md`. O uso alterado de `next/image` evita a propriedade `priority`, depreciada nesta versão.
- Lint, TypeScript, lint tipado, regras locais, sete testes e build estático executados com sucesso. O primeiro build identificou a exigência de PNG RGBA dentro do ICO; o ativo foi corrigido e o build passou.
- Chromium via Playwright temporário, sem dependência adicionada ao projeto: hero e aplicações inspecionados em 390, 768 e 1440 px; troca por mouse e teclado; imagens carregadas; um H1; ausência de overflow horizontal e de erros JavaScript. Capturas locais em `/tmp/olimbo-{largura}.png` e `/tmp/olimbo-applications-{largura}.png` são evidência temporária, não ativos da aplicação.
- Movimento reduzido verificado com emulação: galeria responde imediatamente, animações em execução são canceladas e a barra de progresso fica desativada. Conteúdo e primeiro criativo também conferidos com JavaScript desabilitado.
- `/favicon.ico`, `/icon.png` e `/apple-icon.png` responderam 200 com os tipos de imagem esperados. O endpoint MCP do Next.js retornou `issues: []` para `get_compilation_issues`.
- `next-dev-loop` não foi executado como fluxo completo: `agent-browser` não estava no PATH. O navegador integrado não expôs a ferramenta de execução exigida pela skill. A revisão visual acima foi feita com Playwright independente, sem alegar introspecção React do fluxo da skill.
- Um servidor de outro checkout em `localhost:3000` foi preservado. A prévia deste checkout usa `http://localhost:3001`.
- `npm audit` encontrou cinco alertas altos na cadeia de desenvolvimento `eslint-config-next → fast-glob → micromatch → braces`. A correção automática sugeria downgrade incompatível de Next/ESLint; nenhuma dependência foi alterada nesta tarefa. Reavaliar antes de publicação.

Rever estas evidências se imagens, ícones, layout, movimento, versões ou fronteiras cliente forem alterados. Não houve deploy ou integração comercial nova.

## Troca de marca para Olimbo — 22/10/2026

- Fonte: solicitação do usuário para substituir todas as logos, o nome e o ícone da página por Olimbo; referências fornecidas pelo usuário, agora preservadas fora da pasta pública; ver `docs/creatives.md`.
- Originais preservados. Cabeçalho e rodapé usam um recorte da horizontal; hero, favicon ICO (16/32/48 px), ícone PNG (192 px) e Apple (180 px) derivam do símbolo, sem redesenho ou geração por IA. Detalhes em `docs/creatives.md` e `docs/design.md`.
- Nome atualizado nos textos, rótulos acessíveis, metadados de busca/compartilhamento, perguntas frequentes, dados estruturados derivados e mensagens de WhatsApp. A seção institucional passa a se chamar `WhyOlimboSection`. Os criativos sem logo e os nomes internos de tokens CSS permanecem preservados.
- Guias consultados no Next.js instalado: `01-app/01-getting-started/12-images.md` e `01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.md` em `node_modules/next/dist/docs/`.
- `npm run check` aprovado: lint, tipos, lint tipado, regras locais, três arquivos/sete testes e build estático. `git diff --check` aprovado.
- Chromium via Playwright temporário em `/tmp/olimbo-visual-qa`, sem dependência adicionada ao projeto: revisão visual em 390, 768 e 1440 px; logos carregadas em cabeçalho e rodapé; ausência de overflow horizontal e erros JavaScript; título Olimbo e ausência da marca anterior no texto da página; CTAs com mensagens Olimbo; menu móvel abre e fecha por Escape; ícones vinculados retornam HTTP 200 e tipo de imagem. Capturas em `/tmp/olimbo-{largura}.png` e `/tmp/olimbo-footer-{largura}.png` são evidência temporária.
- O Browser integrado não expôs a ferramenta Node REPL exigida pela skill, e `agent-browser` não estava no PATH. Não foi alegada execução de `next-dev-loop` ou introspecção React; a revisão foi feita em Chromium independente.
- Prévia local do build deste checkout em `http://localhost:3001`. Nenhum deploy, publicação ou alteração de dependências do projeto.
- Condição de revisão: alterar as referências oficiais, o desenho da logo, os ícones ou o layout invalida as evidências correspondentes.

## Cenas fotográficas dos serviços — 22/10/2026

- Fonte: solicitação do usuário para revisar todas as imagens e substituir o aspecto artificial por cenas mais realistas que comuniquem o uso dos serviços.
- Três cenas geradas com a ferramenta integrada `image_gen`, inspecionadas individualmente e convertidas com Sharp para WebP (1536 × 1024, qualidade 84). Ativos em `public/images/olimbo-{websites,software,automation}.webp`, aproximadamente 342 KiB no total. Prompts completos em `docs/image-prompts-2026-10-22.md`.
- As cenas substituem todas as imagens 3D no hero e nas aplicações. Logos e ícones oficiais preservados; as microilustrações de benefícios continuam em HTML/CSS. As cenas são identificadas como ilustrativas geradas por IA, sem alegação de clientes ou resultados reais.
- Guia instalado de imagens Next.js consultado; `next/image`, carregamento prioritário da primeira imagem, lazy loading das demais e dimensões responsivas mantidos, sem novas dependências.
- Lint, tipos, lint tipado, sete testes e `git diff --check` aprovados.
- Chromium via Playwright temporário: três seleções da galeria e carregamento das aplicações verificados em 390, 768 e 1440 px, sem overflow horizontal ou erros JavaScript. Capturas de hero e aplicações inspecionadas; evidência temporária em `/tmp/olimbo-photos-*.png`.
- Node REPL do Browser integrado indisponível nas ferramentas da sessão; `agent-browser` ausente. Não foi executado o fluxo `next-dev-loop`; a verificação usou Chromium independente já instalado em `/tmp/olimbo-visual-qa`, sem adicionar dependência ao projeto.
- Prévia de desenvolvimento deste checkout em `http://localhost:3002`. Nenhum deploy ou publicação.
- Condição de revisão: alterar imagens, recortes, layout ou controles invalida as evidências visuais correspondentes.

## Identidade única e transparência — 22/10/2026

Esta revisão substitui as decisões anteriores de manter fundos marfim e arquivos públicos históricos da identidade anterior.

- Fonte: pedido explícito do usuário para usar exclusivamente Olimbo e remover o fundo de todas as logos, incluindo o ícone da aba.
- `image_gen` integrado removeu o fundo da referência horizontal. A imagem foi inspecionada sobre marfim, com transparência real também nos espaços do símbolo e dentro das letras. As versões horizontal, símbolo e vertical usam a mesma saída e preservam o canal alpha; arquivos e prompt integral em `docs/creatives.md`.
- Logos com novas URLs em `public/brand/olimbo-logo-{horizontal,vertical,symbol}.png`. Todos os ícones foram recriados a partir do símbolo transparente; `layout.tsx` aponta para `/brand/olimbo-favicon.png` e `/apple-icon.png`. A nova URL renova a referência do favicon no navegador.
- Removidos os ativos e o guia da marca anterior da pasta pública. Nomes do pacote, tokens CSS e documentação usam Olimbo. As referências originais com fundo ficam preservadas fora do projeto em `~/.codex/generated_images/olimbo-reference-originals/`.
- Lint, tipos, lint tipado, regras locais, sete testes, build estático e `git diff --check` aprovados.
- Canal alpha conferido nos três PNGs de logo e nos ícones PNG. Chromium independente: logos entregues pelo otimizador também mantêm alpha; novo favicon vinculado e acessível; logos sem retângulo de fundo em cabeçalho, hero e rodapé; 390, 768 e 1440 px sem overflow ou erros JavaScript; URLs antigas verificadas retornam 404. Capturas temporárias em `/tmp/olimbo-transparent-*.png`.
- A ferramenta exigida pelo Browser integrado permanece indisponível; revisão com Playwright temporário existente, sem nova dependência no projeto ou alegação de execução de `next-dev-loop`.
- Prévia de desenvolvimento em `http://localhost:3002`; prévia do build em `http://localhost:3001`, reiniciada após a atualização para carregar os novos arquivos e metadados.
- Condição de revisão: alterar logos, ícones, metadados ou layout exige conferir novamente transparência e apresentação no navegador.

## Revisão integral do nome — 22/10/2026

- Fonte: solicitação do usuário para usar Olimbo em toda a documentação, código, configuração, nomes de arquivos e imagens.
- As alterações locais de identidade foram preservadas. README e critérios de aceitação do produto explicitam o uso exclusivo de Olimbo; o nome do pacote também foi sincronizado no lockfile local das dependências instaladas.
- Busca sem distinção entre maiúsculas e minúsculas, incluindo arquivos ocultos e conteúdo binário: nenhuma ocorrência do nome anterior nos arquivos atuais do projeto. Logos horizontal, vertical e símbolo e as três imagens de serviços foram inspecionadas visualmente.
- O histórico e os metadados do Git, o caminho externo deste workspace, dependências de terceiros e caches gerados não integram essa garantia. O vínculo do worktree foi preservado para não invalidar o checkout.
- Lint, tipos, lint tipado, regras locais, três arquivos/sete testes e `git diff --check` aprovados nesta revisão.
- O build desta revisão foi interrompido após permanecer na etapa de compilação sem emitir resultado; não foi considerado aprovado. As evidências de build das entregas anteriores acima não substituem essa verificação.
- Condição de revisão: ao adicionar ou substituir conteúdo, documentação ou ativos, conferir nome, conteúdo visual e referências de arquivo antes de integrar.

## Referência única de favicon — 22/10/2026

- Fonte: usuário informou que ainda via o favicon da identidade anterior.
- Inspeção encontrou dois links `rel="icon"`. O ICO foi movido de `src/app/favicon.ico` para `public/favicon.ico`, preservando a URL de fallback sem gerar um link automático adicional.
- `layout.tsx` define apenas `/brand/favicon-olimbo-v2.png` (64 × 64), derivado do símbolo transparente da Olimbo. Endereço diferente dos anteriores para renovar a referência no navegador. O ícone Apple permanece vinculado.
- Chromium: exatamente um `rel="icon"`, apontando para o novo PNG; resposta HTTP 200 com bytes idênticos ao arquivo da Olimbo; `/favicon.ico` também retorna o ICO correto. Lint, tipos e `git diff --check` aprovados.
- Build adicional não executado: outro processo `next build` deste checkout já estava em execução e detinha o lock; esse processo foi preservado. A prévia de desenvolvimento foi consolidada em `http://localhost:3001` para servir os arquivos e metadados atuais, substituindo o servidor de produção anterior na mesma porta.
- Condição de revisão: trocar os ícones ou sua configuração exige verificar o HTML renderizado e os bytes servidos; o favicon deve ter uma única referência explícita da Olimbo.

## Favicon sem fundo — 22/10/2026

- Fonte: solicitação do usuário para remover o fundo do favicon.
- O arquivo anterior já continha alpha, mas a inspeção encontrou pixels de alpha residual nas bordas após o redimensionamento. O novo `/brand/favicon-olimbo-transparente.png` usa o símbolo da Olimbo dentro de uma área explicitamente transparente, sem preenchimento de fundo. O fallback `/favicon.ico` foi reexportado com margem transparente nas três resoluções.
- Nova URL vinculada em `layout.tsx` para evitar a referência anterior armazenada. Verificação dos pixels do PNG: quatro canais RGBA, todas as bordas com alpha zero e 71% dos pixels totalmente transparentes.
- Lint e tipos aprovados. Chromium confirmou o novo endereço no HTML e resposta PNG com canal alpha. Esta verificação cobre o servidor local; a aba da captura anterior continua sem URL informada pelo usuário.
- Condição de revisão: verificar o alpha novamente após converter ou redimensionar o favicon.

## Divergência entre a aba e os arquivos servidos — 22/10/2026

- Fonte: nova captura do usuário mostrando o símbolo anterior, apesar das verificações HTTP anteriores em localhost:3001. Essas verificações não confirmam o ícone exibido na aba do usuário.
- A ferramenta necessária para controlar a aba integrada permanece indisponível. A captura parece ser do Safari; foi solicitado ao usuário confirmar o navegador. Leitura do cache local do Safari bloqueada pelo macOS; nenhum dado ou configuração do navegador foi alterado.
- IPv4 e IPv6 de localhost:3001 servem a mesma imagem atual. O ícone Apple ainda usava a URL histórica `/apple-icon.png`; recebeu endereço específico da Olimbo. PNGs de 16/32 px e ICO também têm endereços próprios; todos transparentes. Cabeçalhos `no-store` foram limitados aos ícones para evitar armazenamento das respostas novas.
- Chromium confirmou as quatro referências atuais no HTML, respostas HTTP 200, transparência e `Cache-Control: no-store, max-age=0`. Lint, tipos e `git diff --check` aprovados. Um único servidor local em localhost:3001.
- Pendente: confirmar que a aba do usuário passou a exibir a Olimbo. Não declarar essa confirmação com base em inspeção do arquivo ou teste em outro navegador.
- Condição de revisão: se a divergência persistir, investigar o navegador confirmado e sua seleção/cache de ícones sem repetir gerações de logo ou encerrar outros aplicativos.
