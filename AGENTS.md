# Orbe LP

## Produto e stack

- Escopo canônico: `PRODUCT.md`.
- Stack: Next.js 16.4.2, App Router, React 19.3, TypeScript estrito, Tailwind CSS 4, ESLint 10 e Vitest 4.
- Evidências e decisões: `docs/setup.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Comandos canônicos

- Instalar: `npm ci`
- Desenvolver: `npm run dev`
- Lint: `npm run lint`
- Tipos: `npm run typecheck`
- Lint tipado: `npm run lint:typed`
- Regras locais: `npm run lint:rules`
- Testes: `npm test`
- Build: `npm run build`
- Verificação completa: `npm run check`

## Acordos de trabalho

- Leia `PRODUCT.md` e a documentação responsável antes de editar.
- Faça a menor alteração completa que atenda ao pedido; não crie recursos, integrações ou dependências preventivas.
- Preserve alterações locais, Git, acessibilidade, segurança e a identidade da Orbe.
- Não invente depoimentos, clientes, cases, métricas, canais de contato ou informações comerciais.
- A logo oficial deve ser preservada quando fornecida; não infira nem redesenhe seu símbolo.
- Use Server Components por padrão e mantenha componentes cliente pequenos e justificados.
- Atualize o documento responsável quando comportamento, comandos, dependências, estrutura ou decisões mudarem.
- Execute verificações proporcionais ao risco e registre bloqueios reais, sem simular integrações.
- Não faça deploy, push, publique, habilite serviços pagos ou altere configurações globais sem autorização explícita.

## Qualidade e estrutura

- Código da aplicação fica em `src/`; conteúdo compartilhado e verificável fica em `src/config/`.
- Use imports `@/*`, HTML semântico, mobile first, foco visível, contraste adequado e movimento reduzido.
- Arquivos de produção têm limite de 350 linhas. Promises não tratadas e handlers async incompatíveis são erros no lint tipado.
- Não há banco, autenticação, pagamentos, logger de servidor ou variáveis de ambiente nesta etapa. Adote-os somente após uma necessidade aprovada e documentada.
- `PRODUCT.md` governa o escopo; `docs/architecture.md`, a estrutura; `docs/design.md`, a interface; `docs/quality.md`, os checks.

## Skills locais

As skills versionadas em `.agents/skills/` orientam tarefas específicas:

- `vercel-react-best-practices` e `vercel-composition-patterns` para React/Next.js.
- `web-design-guidelines` para revisão de interface e acessibilidade.
- `writing-guidelines` para texto e documentação.
- `vercel-react-view-transitions` apenas quando transições forem solicitadas e compatíveis.
- `next-dev-loop` para feedback de runtime quando `agent-browser` estiver disponível.
- `next-bundle-optimizer` para auditoria de bundle baseada em evidência.
- `find-skills` somente quando houver uma lacuna concreta.
- Skills de Vercel relacionadas a deploy, token e otimização não autorizam publicação nem acesso a conta.

Instalação em disco não comprova descoberta numa nova sessão nem execução bem-sucedida. Consulte `docs/setup.md`.

## Memória e continuidade

Este arquivo é o índice curto carregado pelo Codex; detalhes canônicos ficam nos documentos citados. Decisões duráveis registram fonte, data de verificação e condição de revisão em `docs/setup.md`. Verifique arquivos, Git e checks antes de retomar um handoff; não transforme progresso temporário em regra permanente.
