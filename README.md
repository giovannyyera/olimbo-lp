# Olimbo: landing page

Landing page da Olimbo para apresentar sites, sistemas, automações e consultoria digital. O conteúdo é pré-renderizado durante o build, com navegação por seções e contato pelo WhatsApp fornecido pelo usuário.

## Executar localmente

Use Node.js 24.14.0, fixado em `.node-version`, e npm 11 (mínimo suportado pelo projeto: Node.js 20.19):

```bash
npm ci
npm run dev
```

Abra [a aplicação local](http://localhost:3000). Se a porta estiver ocupada, confira o endereço informado pelo Next.js.

Execute a verificação completa com:

```bash
npm run check
```

O comando executa lint, tipos, lint tipado, regras locais, testes e build. Nenhuma variável de ambiente ou credencial é necessária. O contato comercial fica em `src/config/site.ts`.

## Identidade e ativos

Olimbo é a única marca do projeto. As logos transparentes e os ícones usados pela página ficam em `public/brand/`; o fallback do navegador fica em `public/favicon.ico`. As 18 variações de origem ficam apenas na pasta local ignorada `olimbo_logos_png/`; o Git versiona somente as derivações usadas pela página. A única fotografia usada pela LP está em `public/images/olimbo-project-offer.webp`.

## Estrutura da página

A rota principal contém hero com três prévias de serviços, benefícios, soluções, problemas, processo, diferenciais da Olimbo, perguntas frequentes e chamada final. Menu móvel, galeria e revelações por scroll são as três interações cliente.

## Documentação

- [Produto e escopo](PRODUCT.md)
- [Preparação local](docs/onboarding.md)
- [Arquitetura](docs/architecture.md)
- [Design e acessibilidade](docs/design.md)
- [Qualidade e testes](docs/quality.md)
- [Origem dos ativos](docs/creatives.md)
- [Instruções para agentes](AGENTS.md)
- [Decisões e evidências](docs/setup.md)
- [Auditoria final](docs/audit-2026-10-23.md)
- [Preparação para Cloudflare Pages](docs/cloudflare-pages.md)

## Publicação estática

O destino preparado é Cloudflare Pages, com domínio canônico `https://olimbo.dev.br`. Execute `npm run build` e publique somente `out/`. O build também inspeciona metadados, referências de assets e conteúdo publicável; para repetir essa etapa, use `npm run check:export`.

Configurações do painel, DNS e limites da validação estão no [guia de Cloudflare Pages](docs/cloudflare-pages.md). `next start` não se aplica à exportação estática. Nenhuma credencial de aplicação é necessária. Deploy, push e alterações de conta/DNS continuam dependendo de autorização explícita.
