# Decisões e evidências do projeto

Este documento mantém as decisões atuais da LP da Olimbo, suas fontes e as condições de revisão. Os resultados detalhados ficam na [auditoria de 23/10/2026](audit-2026-10-23.md).

## Fontes canônicas

- [Produto](../PRODUCT.md): escopo e restrições comerciais
- [Arquitetura](architecture.md): estrutura, conteúdo e fronteiras cliente
- [Design](design.md): identidade, responsividade, movimento e acessibilidade
- [Qualidade](quality.md): comandos e critérios de verificação
- [Criativos](creatives.md): origem e uso dos ativos
- Guias do Next.js instalado em `node_modules/next/dist/docs/`

## Stack e bootstrap

O bootstrap de 20/10/2026 incorporou o scaffold oficial de `create-next-app` 16.4.2 ao repositório existente. Git, README, npm e `.gitignore` foram preservados. O Next.js mantém seu bloco gerenciado em `AGENTS.md`.

A stack atual é Next.js 16.4.2, React 19.3.0, TypeScript estrito, Tailwind CSS 4, ESLint 10 e Vitest 4. `package-lock.json` fixa a instalação; `package.json` declara Node.js 20.19 ou superior e npm 11. A auditoria atual usou Node.js 24.14.0 e npm 11.9.0 no macOS.

Não há banco, autenticação, pagamentos, variáveis de ambiente, logger, analytics ou envio de formulário. Essas integrações dependem de necessidade aprovada. O build pode precisar de rede para baixar a fonte Manrope com `next/font`; os arquivos são servidos localmente ao navegador.

Condição de revisão: mudanças de dependências, comandos ou escopo exigem atualizar os documentos responsáveis e executar os checks.

## Marca e ativos

Em 22/10/2026, o usuário definiu Olimbo como única marca. Em 23/10/2026, forneceu 18 PNGs com a identidade “O” e cursor. Os arquivos de origem foram trazidos para o worktree local.

Por solicitação posterior, a ferramenta integrada `image_gen` removeu o fundo de cada variante. As 18 versões transparentes ficam em `olimbo_logos_png/`, pasta local excluída do Git; a página usa somente derivações em `public/brand/` e `public/favicon.ico`. Metadados apontam para um favicon PNG de nome novo e um ícone Apple versionado. Não há ícones automáticos em `src/app/` concorrendo com essas referências.

A única fotografia atual é a composição decorativa de `#sobre`, criada em 22/10/2026. Fontes, dimensões e prompts ficam em [Criativos](creatives.md). A auditoria removeu as fotografias antigas de serviços, os prompts sem ativo correspondente e os estilos de elementos removidos. As 18 logos permanecem como fontes oficiais.

Condição de revisão: novas logos ou imagens exigem inspeção visual, transparência, recorte, proporções, metadados e nomes de arquivos. Os ativos públicos necessários devem permanecer em `public/`; as fontes locais podem ser ignoradas pelo Git. Verificar o recurso servido não comprova o favicon exibido em uma aba pessoal já aberta.

## Contato comercial

Em 23/10/2026, o usuário forneceu +55 (18) 99671-6753 como destino de todos os CTAs comerciais. O número fica centralizado em `src/config/site.ts`; as mensagens gerais e por serviço usam a mesma configuração. A mensagem de proposta fica em `src/config/project-offer.ts`.

Os avisos de contato demonstrativo foram removidos. A validação confirma formato, número e mensagem na URL; não envia mensagens nem comprova a existência ou disponibilidade da conta externa.

Condição de revisão: mudar o número, o canal ou as mensagens exige conferir todos os CTAs, inclusive no menu móvel.

## Conteúdo e interações

A V2 atual apresenta hero, benefícios, serviços, problemas, processo, diferenciais, FAQ e chamada final. A seção “Possibilidades” foi removida em 22/10/2026 por solicitação do usuário. As três prévias em HTML/CSS permanecem no hero; não representam clientes ou produtos entregues.

`MobileMenu`, `HeroProductVisual` e `ScrollMotion` são as três fronteiras cliente. As demais seções permanecem no servidor. O menu fecha por Escape com retorno do foco e permite rolagem interna em telas baixas. FAQ usa elementos nativos e funciona sem JavaScript.

O usuário pediu rotação contínua de cinco segundos sem botão de pausa, inclusive após seleção, hover e foco. Movimento reduzido e aba oculta interrompem o timer. A ausência de pausa permanece uma exceção de acessibilidade em WCAG 2.2.2; a auditoria pediu nova preferência, sem substituir a decisão anterior por silêncio. Detalhes em [Design](design.md).

Condição de revisão: mudanças na galeria, no menu ou nos efeitos exigem testar teclado, foco, movimento reduzido, rotação e limpeza dos timers.

## Skills e ferramentas

As skills versionadas ficam em `.agents/skills/`; `skills-lock.json` registra origem e hash. Orientações React, de interface e de escrita foram aplicadas. A existência dos arquivos não comprova descoberta ou execução numa nova sessão.

`next-dev-loop` depende de `agent-browser` e do MCP do Next.js. `agent-browser` e a ferramenta do navegador integrado não estavam disponíveis nesta auditoria; o fluxo da skill não foi alegado como executado. A revisão usa Playwright e axe-core em pastas temporárias, sem adicionar dependências ao projeto.

As skills de Vercel não autorizam deploy, conta ou token. Nenhum push, publicação, serviço pago ou configuração global foi realizado nesta auditoria.

## Verificação atual

`npm run check` executa lint, tipos, lint tipado, regras locais, nove testes e build estático. O build dentro do sandbox ficou sem avançar na compilação e foi interrompido; a execução autorizada fora dele concluiu os checks. Os diretórios de desenvolvimento e produção do Next.js instalado são separados; a prévia ativa foi preservada.

A prévia de desenvolvimento deste checkout fica em `http://localhost:3001`. O build de produção foi servido temporariamente na porta 3003 para a auditoria, e esse processo foi encerrado após os testes. Processos de outras cópias do repositório não foram alterados.

Os relatórios de navegador, dimensões, resultados de acessibilidade e limitações estão na [auditoria final](audit-2026-10-23.md). Capturas e ferramentas temporárias não são ativos da aplicação.

## Dependências e publicação

Em 23/10/2026, `npm audit --omit=dev` retornou zero vulnerabilidades. `npm audit` retornou cinco alertas altos na cadeia `eslint-config-next → fast-glob → micromatch → braces`. O [aviso publicado](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) informa que não há versão corrigida de `braces`; a correção automática observada sugere downgrade incompatível do preset Next.js. Nenhum downgrade foi aplicado.

Em 23/10/2026, o usuário definiu `https://olimbo.dev.br` como domínio definitivo. Canonical, sitemap e URLs absolutas foram configurados para essa origem. A associação na Cloudflare e o DNS ainda dependem de ação autorizada na conta. Revise mensagens comerciais, dependências e a exceção de acessibilidade antes da publicação. Deploy e push exigem autorização explícita.

## Preparação para Cloudflare Pages: 23/10/2026

- Fonte: solicitação explícita do usuário para preparar exportação estática e domínio `https://olimbo.dev.br`, preservando visuais, animações e galeria contínua sem pausa, sem executar publicação ou operações Git
- Compatibilidade confirmada pelo código e por build com `output: "export"`: sem dados por requisição, API, Server Actions ou runtime Node.js na saída
- Configuração: `images.unoptimized: true`, `robots.ts` e `sitemap.ts` estáticos, domínio em `siteConfig.url`, metadataBase/canonical, Open Graph, Twitter Card e identidade da FAQ no JSON-LD
- Ícones preservam os bytes; cabeçalhos `no-store` foram migrados para `public/_headers`. Fontes WOFF2 são locais. Nenhum arquivo ou componente visual foi modificado nesta preparação
- `.node-version` fixa Node.js 24.14.0. `npm run build` gera `out/` e executa `check:export`; `next start` foi removido por não se aplicar ao modo estático. Nenhuma dependência foi adicionada
- `npm run check` final aprovado: lint, tipos, lint tipado, regras locais, nove testes, build estático e verificador de exportação. `git diff --check` e links locais da documentação aprovados
- `scripts/verify-static-export.mjs` confirmou 37 arquivos e cerca de 1,4 MB, com referências de assets válidas, metadados e sitemap corretos, sem arquivos privados, credenciais reconhecidas ou ferramentas de lint na saída
- `npm audit --json` e `npm audit --include=dev --json` retornaram zero alertas na consulta atual. `npm ls` confirmou que a cadeia ESLint e `braces@3.0.3` não mudaram. Não foi inferida correção de biblioteca; os cinco alertas anteriores não se reproduziram, e a cadeia não integra a aplicação publicada
- A exportação servida como arquivos estáticos em 127.0.0.1:3003 passou em Chromium e WebKit nas dez dimensões da auditoria anterior, sem erros JavaScript ou requisições com falha. Galeria, menu, FAQ, contatos, fontes, imagens, SEO, movimento reduzido, fonte a 200% e uso sem JavaScript conferidos. Seis execuções axe-core não encontraram violações automáticas; permanece a exceção conhecida de rotação sem pausa
- Ferramentas e relatórios temporários: `/tmp/olimbo-visual-qa/static-export-audit.cjs` e `/tmp/olimbo-static-export-audit/{chromium,webkit}/report.json`. O servidor temporário serviu somente `out/` e foi encerrado após os testes. Ele não aplica `_headers`; os cabeçalhos foram validados pelo arquivo exportado
- Painel, DNS, certificado e domínio na conta não foram consultados ou alterados. Não houve commit, push, merge ou deploy. O [guia de Cloudflare Pages](cloudflare-pages.md) contém os campos e os dados que precisam vir da conta real
- Condição de revisão: mudanças em domínio, rotas, dados dinâmicos, assets ou dependências exigem repetir a exportação, inspeção de saída e testes de navegador
