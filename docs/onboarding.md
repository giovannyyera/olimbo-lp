# Preparar o projeto localmente

Este guia explica como instalar, executar e verificar a LP da Olimbo sem serviços externos.

## Pré-requisitos

Use preferencialmente Node.js 24.14.0, fixado em `.node-version`, npm 11 e Git. O mínimo suportado continua sendo Node.js 20.19. `package-lock.json` fixa as dependências; não é necessário instalar ferramentas globais.

## Instalar e iniciar

Na raiz do repositório, execute:

```bash
npm ci
npm run dev
```

Abra o endereço informado pelo Next.js, normalmente [localhost:3000](http://localhost:3000). Para escolher outra porta, execute `npm run dev -- --port 3001`.

A aplicação não requer `.env`, banco, credenciais ou serviços externos. `next/font` baixa a fonte Manrope durante o build quando ela ainda não está em cache; esse primeiro build requer acesso à rede.

## Verificar alterações

Execute todos os checks com:

```bash
npm run check
```

O comando verifica lint, tipos, lint tipado, regras locais, testes e build. `npm test` cobre dados comerciais, URLs de WhatsApp e JSON-LD. Consulte [Qualidade](quality.md) para a revisão de navegador.

## Alterar conteúdo

Edite `src/config/site.ts` para contato, navegação, benefícios, serviços, problemas, processo e FAQ. Os diferenciais e a mensagem de proposta ficam em `src/config/project-offer.ts`; as legendas da galeria, em `src/config/creatives.ts`.

## Agentes e decisões

Leia [AGENTS.md](../AGENTS.md) e [Setup](setup.md). `CLAUDE.md` importa as mesmas instruções. Skills de navegador dependem das ferramentas disponíveis na sessão; instalação em disco não comprova execução.

## Dependências e publicação

A auditoria de 23/10/2026 encontrou cinco alertas altos na cadeia de desenvolvimento do ESLint e nenhum em produção. Consulte o [relatório da auditoria](audit-2026-10-23.md) antes de alterar versões. Não aplique `npm audit fix --force`: a sugestão observada faz downgrade incompatível da stack.

Na preparação para Cloudflare Pages, a consulta atual `npm audit --include=dev` retornou zero alertas, sem mudar as versões instaladas. As dependências históricas do ESLint não integram a saída publicada. Veja [Cloudflare Pages](cloudflare-pages.md) para o estado atual e as configurações do painel.

`npm run build` gera e verifica `out/`; `npm run check:export` repete a inspeção. `next start` não se aplica ao modo de exportação estática. Para uma prévia local opcional com Python já disponível, use `python3 -m http.server 3003 --bind 127.0.0.1 --directory out`. Esse servidor comum não aplica os cabeçalhos de `_headers` nem substitui a validação do host Cloudflare.
