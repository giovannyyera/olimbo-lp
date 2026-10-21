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
- Guia oficial de identidade em `public/docs/Guia_de_Identidade_Visual_Orbe.pdf`.
- Logos oficiais em `public/brand/`; `orbe-logo1.png` foi selecionada para a interface clara sem alteração de proporção, cor ou conteúdo.
- Diretrizes atuais do `web-design-guidelines` consultadas na fonte oficial da skill.

O PDF foi renderizado apenas para inspeção local. Seus artefatos temporários não fazem parte do produto.

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

O servidor da própria Orbe já estava ativo em `localhost:3000` durante a evolução V2 e foi preservado.

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
- Chromium via Playwright temporário, sem dependência adicionada ao projeto: hero e aplicações inspecionados em 390, 768 e 1440 px; troca por mouse e teclado; imagens carregadas; um H1; ausência de overflow horizontal e de erros JavaScript. Capturas locais em `/tmp/orbe-{largura}.png` e `/tmp/orbe-applications-{largura}.png` são evidência temporária, não ativos da aplicação.
- Movimento reduzido verificado com emulação: galeria responde imediatamente, animações em execução são canceladas e a barra de progresso fica desativada. Conteúdo e primeiro criativo também conferidos com JavaScript desabilitado.
- `/favicon.ico`, `/icon.png` e `/apple-icon.png` responderam 200 com os tipos de imagem esperados. O endpoint MCP do Next.js retornou `issues: []` para `get_compilation_issues`.
- `next-dev-loop` não foi executado como fluxo completo: `agent-browser` não estava no PATH. O navegador integrado não expôs a ferramenta de execução exigida pela skill. A revisão visual acima foi feita com Playwright independente, sem alegar introspecção React do fluxo da skill.
- O servidor existente em `localhost:3000` pertence a `/Users/giovanyyera/Downloads/orbe-lp` e foi preservado. A prévia deste checkout usa `http://localhost:3001`.
- `npm audit` encontrou cinco alertas altos na cadeia de desenvolvimento `eslint-config-next → fast-glob → micromatch → braces`. A correção automática sugeria downgrade incompatível de Next/ESLint; nenhuma dependência foi alterada nesta tarefa. Reavaliar antes de publicação.

Rever estas evidências se imagens, ícones, layout, movimento, versões ou fronteiras cliente forem alterados. Não houve deploy ou integração comercial nova.
