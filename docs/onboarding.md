# Preparação local

## Pré-requisitos

- Node.js 20.19 ou superior; o bootstrap foi validado com 24.22.0.
- npm 11 compatível com o `package-lock.json`; o bootstrap usou 11.19.1.
- Git para versionamento.

Não instale ferramentas globais para iniciar o projeto.

## Primeiro uso

```bash
npm ci
npm run dev
```

Acesse `http://localhost:3000`. A aplicação não requer `.env`, credenciais ou serviços externos nesta etapa.

## Banco de dados

Não aplicável. O produto não persiste dados e o escopo exclui banco de dados. Não crie `DATABASE_URL`, schemas ou migrations até existir uma necessidade aprovada.

## Verificar

```bash
npm run check
```

O comando executa lint, geração e checagem de tipos, lint tipado, autocheck das regras locais, testes e build. Use `npm test` durante mudanças na configuração factual e `npm run lint` para feedback rápido.

## Agentes

Leia `AGENTS.md`. `CLAUDE.md` importa as mesmas instruções. Consulte `docs/setup.md` para skills locais, integrações omitidas e evidências.

## Problemas conhecidos

- `agent-browser`, Graphify, RTK e Context7 não estavam disponíveis nesta sessão; isso bloqueia apenas os checks dependentes, não o desenvolvimento local.
- A auditoria completa pode apontar a cadeia de desenvolvimento `eslint-config-next → fast-glob → micromatch → braces`; consulte `docs/setup.md` antes de aplicar qualquer downgrade sugerido pelo npm.
