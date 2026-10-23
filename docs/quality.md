# Verificar a qualidade da aplicação

Os checks cobrem código, tipos, regras locais, conteúdo comercial, URLs de contato, dados estruturados e build. A revisão no navegador complementa esses checks com interação, aparência e acessibilidade.

## Comandos

| Comando | Verificação |
|---|---|
| `npm run lint` | Presets do Next.js e limite local de 350 linhas |
| `npm run typecheck` | Tipos de rota e TypeScript estrito |
| `npm run lint:typed` | Promises e handlers assíncronos |
| `npm run lint:rules` | Autocheck das regras locais |
| `npm test` | Conteúdo, WhatsApp e JSON-LD |
| `npm run build` | Exportação estática e inspeção do conteúdo publicável |
| `npm run check:export` | Validação de SEO, assets, fontes e arquivos gerados em `out/` |
| `npm run check` | Todos os checks acima, em sequência |
| `npm audit` | Vulnerabilidades em toda a árvore de dependências |
| `npm audit --omit=dev` | Vulnerabilidades das dependências de produção |

`npm audit` é separado de `npm run check`: alertas de dependência precisam de análise, não de downgrade automático.

## Regras

Use TypeScript estrito, Server Components por padrão e imports `@/*` no código de produção. Os testes usam caminhos relativos, pois o Vitest não configura o alias do Next.js.

Arquivos de produção têm limite de 350 linhas. Não adicione logs diretos, dados comerciais inventados ou dependências sem necessidade. Preserve HTML semântico, contraste, foco, navegação por teclado e movimento reduzido.

## Testes automatizados

Os três arquivos de teste contêm nove testes:

- `site.test.ts`: estrutura comercial, unicidade e URLs de WhatsApp para mensagens gerais, por serviço e de proposta
- `whatsapp.test.ts`: ausência, formato e limites do número internacional, normalização e preservação de acentos e símbolos
- `structured-data.test.ts`: correspondência de todas as perguntas e respostas da FAQ e serialização segura de conteúdo com marcação

O helper do WhatsApp valida o formato; ele não confirma a existência da conta ou a entrega de mensagens.

## Revisão no navegador

Use a prévia do checkout correto e confira:

- Um H1, títulos coerentes, IDs únicos e destinos de âncoras existentes
- Menus por toque e teclado, Escape, retorno do foco e acesso ao CTA em telas baixas
- Todos os CTAs comerciais com número centralizado e mensagem contextual em `wa.me`
- Seleção das três prévias, rotação e alteração de movimento reduzido durante o uso
- FAQ por teclado e mouse, com uma resposta aberta por vez
- Carregamento das imagens, transparência e proporções das logos e ícones
- Metadados, JSON-LD igual à FAQ visível, `robots.txt`, favicon, ícone Apple e rota inexistente
- Conteúdo, contatos e FAQ disponíveis sem JavaScript
- Ausência de overflow, incluindo fonte ampliada para 200%
- Erros JavaScript, requisições com falha e revisão de contraste com axe-core

A referência visual inclui 390, 768 e 1440 px. A auditoria final amplia a matriz para 320 a 1920 px e tela horizontal de celular. Emulação não substitui dispositivos físicos. Registre navegador, dimensões, falhas e limitações; não infira aprovação pelo CSS.

A galeria automática sem pausa é uma exceção conhecida, documentada em [Design](design.md). Axe-core não detecta todos os problemas, e resultados sem violações não comprovam conformidade integral.

## Segurança e publicação

A aplicação não coleta dados, cria cookies próprios ou depende de credenciais. A publicação envia somente `out/`, sem runtime Node.js. O build baixa a fonte com `next/font`; o navegador recebe os arquivos locais. O JSON-LD escapa `<` antes de ser inserido no HTML.

O domínio definitivo é `https://olimbo.dev.br`. Antes de publicar, confirme a associação do domínio/DNS/HTTPS na Cloudflare, mensagens comerciais e autorização para deploy. A [auditoria de 23/10/2026](audit-2026-10-23.md) registra os resultados e as pendências atuais.

## Verificação da exportação estática

O [guia de Cloudflare Pages](cloudflare-pages.md) descreve o build, DNS e publicação. O verificador de `out/` confere canonical, Open Graph, Twitter, JSON-LD, robots, sitemap, arquivos de fonte, referências de assets e cópias públicas. Também rejeita arquivos privados, symlinks, source maps, padrões de credenciais e dependência do otimizador de imagens. Ele roda automaticamente no build.

A preparação repetiu os testes de navegador em Chromium e WebKit sobre arquivos estáticos, incluindo galeria e animações. Cabeçalhos de `out/_headers`, DNS e HTTPS precisam de validação na Cloudflare após um deploy autorizado. A consulta npm atual retornou zero alertas, sem alteração de dependências; o histórico anterior permanece no relatório da auditoria.
