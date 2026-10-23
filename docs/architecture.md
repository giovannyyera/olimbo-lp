# Arquitetura da landing page

A aplicação exporta uma rota HTML estática para Cloudflare Pages, sem servidor Next.js em produção. Conteúdo, seções e estilos continuam separados.

## Stack

Next.js 16.4.2 com App Router, React 19.3, TypeScript 5.9 estrito, Tailwind CSS 4, ESLint 10 e Vitest 4. O projeto aceita Node.js 20.19 ou superior e npm 11.

## Mapa principal

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── sections/           # seções comerciais server-rendered
│   ├── visuals/            # ilustrações conceituais em HTML
│   ├── brand-logo.tsx
│   ├── contact-cta.tsx
│   ├── mobile-menu.tsx     # menu cliente
│   ├── scroll-motion.tsx   # revelações progressivas sem ocultar o HTML
│   ├── section-heading.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── structured-data.tsx
├── config/
│   ├── creatives.ts
│   ├── project-offer.ts
│   ├── site.ts
│   └── site.test.ts
├── lib/
│   ├── structured-data.ts
│   ├── structured-data.test.ts
│   ├── whatsapp.ts
│   └── whatsapp.test.ts
└── styles/                 # CSS dividido por responsabilidade
```

As versões da logo usadas pela interface ficam em `public/brand/`. Foram derivadas dos PNGs oficiais com fundo removido, mantidos na pasta local ignorada `olimbo_logos_png/`; somente os ativos usados pela interface são versionados. Os arquivos públicos das logos antigas foram removidos.

## Fronteiras de renderização

`page.tsx`, todas as seções e os dados estruturados são Server Components. Eles executam no build; o HTML principal permanece disponível sem hidratação.

As fronteiras cliente são `MobileMenu`, `HeroProductVisual` e `ScrollMotion`. O menu mantém abertura e fechamento por `Escape`; a galeria controla a prévia selecionada e a rotação automática de cinco segundos, com limpeza do timer, suspensão em aba oculta e respeito a movimento reduzido; seleção manual, foco e hover não interrompem a rotação, recebendo interfaces renderizadas no servidor como `ReactNode[]`; o observador anima elementos uma vez ao entrarem na tela, sem handlers de scroll ou atualização de estado por frame. Ele desconecta e cancela animações quando a preferência por movimento reduzido muda. `ContactCta` recebe apenas os dados necessários.

## Conteúdo e conversão

`src/config/site.ts` centraliza benefícios, soluções, mensagens de WhatsApp, problemas, processo e perguntas frequentes. Os componentes apenas apresentam esses dados. `src/config/project-offer.ts` centraliza a oferta e os diferenciais exibidos em “Por que a Olimbo?”, com CTA contextual de proposta.

`ContactCta` recebe a configuração do WhatsApp e uma mensagem contextual opcional. Sem número válido, renderiza um botão desabilitado. Com número válido, usa `createWhatsAppUrl` e abre o WhatsApp em nova aba, com mensagem pronta. O número fornecido pelo usuário fica somente em `siteConfig.contact.whatsapp.phone`; os CTAs do cabeçalho, menu móvel e seções compartilham essa configuração.

## SEO técnico

- `layout.tsx` define título, descrição, Open Graph, Twitter Card e tema claro
- `siteConfig.url` define `https://olimbo.dev.br`
- `robots.ts` permite rastreamento e aponta para `/sitemap.xml`
- `sitemap.ts` exporta somente a URL da página inicial
- `StructuredData` publica um `FAQPage` idêntico às perguntas visíveis
- `serializeStructuredData` escapa marcação antes de inserir JSON no HTML
- `metadataBase`, canonical, URLs de compartilhamento e identidade do JSON-LD usam o domínio definitivo

## Dependências e desempenho

Não foram adicionadas dependências ao projeto. Logos usam `next/image` com dimensões reservadas. `images.unoptimized: true` entrega imagens locais sem depender de `/_next/image`, preservando os assets e o layout. `ServicePreview` é um Server Component usado no hero; compõe site, painel e fluxo em HTML/CSS. `HeroProductVisual` recebe as prévias como conteúdo já renderizado e mantém apenas o estado de seleção no cliente. `BenefitVisual` também permanece no servidor: quatro composições próprias dos benefícios usam `src/styles/benefit-visuals.css`, sem imagens remotas ou controles simulados interativos. `SolutionVisual` compõe as quatro cenas decorativas dos serviços no servidor, com estilos em `src/styles/solution-visuals.css`. `src/config/creatives.ts` centraliza os três rótulos e argumentos comerciais. A imagem decorativa `public/images/olimbo-project-offer.webp` usa `next/image` na seção `#sobre`, com carregamento lazy, dimensões reservadas e `sizes` responsivos. As três fotografias anteriores de serviços e seus prompts foram removidos por não serem mais usados; `docs/creatives.md` descreve os ativos atuais.

Os ícones derivam do símbolo oficial com canal alpha transparente. `layout.tsx` define uma única referência `rel="icon"` para `/brand/olimbo-favicon-cursor.png` (64 px), com versão na query para renovar a referência, e o ícone Apple de 180 px em `/brand/olimbo-apple-touch-icon-transparent.png`, também versionado. Não há arquivos `icon.png` ou `apple-icon.png` em `src/app/` adicionando referências automáticas concorrentes. `public/favicon.ico` atende o fallback padrão. `public/_headers`, copiado para `out/_headers`, configura cabeçalhos de segurança básicos e `Cache-Control: no-store, max-age=0` aos ícones e ao fallback. Isso controla as respostas HTTP; não garante a invalidação do banco interno de favicons de um navegador já aberto.

`next.config.ts` desativa o indicador visual de desenvolvimento com `devIndicators: false`.

O projeto não possui busca remota, banco, autenticação, endpoints dinâmicos, Server Actions, formulário ou analytics. Robots e sitemap são rotas de metadados forçadas a estáticas e exportadas no build. O código evita enviar as seções estáticas ao cliente.

Atualize este mapa quando diretórios, dependências, contratos ou fronteiras mudarem.

## Build e hospedagem

`npm run build` gera `out/` e executa `scripts/verify-static-export.mjs`. Somente essa saída é publicável. `npm run check:export` repete a inspeção sem reconstruir. O script `next start` foi removido por incompatibilidade com exportação estática.

Node.js 24.14.0 está fixado em `.node-version`. O [guia de Cloudflare Pages](cloudflare-pages.md) descreve painel, DNS, headers e verificações. Nenhum Worker, Function, adaptador SSR ou secret é necessário.
