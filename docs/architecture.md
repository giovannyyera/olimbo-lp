# Arquitetura da landing page

A aplicação mantém uma rota estática e separa conteúdo, composição de seções, ilustrações e estilos sem adicionar serviços externos.

## Stack

Next.js 16.4.2 com App Router, React 19.3, TypeScript 5.9 estrito, Tailwind CSS 4, ESLint 10 e Vitest 4. O projeto aceita Node.js 20.19 ou superior e npm 11.

## Mapa principal

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── robots.ts
├── components/
│   ├── sections/           # seções comerciais server-rendered
│   ├── visuals/            # ilustrações conceituais em HTML
│   ├── contact-cta.tsx
│   ├── mobile-menu.tsx     # única fronteira cliente
│   ├── section-heading.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   └── structured-data.tsx
├── config/
│   ├── site.ts
│   └── site.test.ts
├── lib/
│   ├── structured-data.ts
│   ├── structured-data.test.ts
│   ├── whatsapp.ts
│   └── whatsapp.test.ts
└── styles/                 # CSS dividido por responsabilidade
```

Os ativos oficiais permanecem em `public/brand/` e `public/docs/`.

## Fronteiras de renderização

`page.tsx`, todas as seções, ilustrações e dados estruturados são Server Components. O HTML principal permanece disponível sem hidratação.

`MobileMenu` é o único Client Component. Ele mantém o estado de abertura, trata `Escape` e recebe somente navegação e configuração de contato serializáveis. `ContactCta` não importa mais todo o conteúdo do site para o bundle cliente.

## Conteúdo e conversão

`src/config/site.ts` centraliza benefícios, soluções, mensagens de WhatsApp, problemas, exemplos, processo, princípios e perguntas frequentes. Os componentes apenas apresentam esses dados.

`ContactCta` recebe a configuração do WhatsApp e uma mensagem contextual opcional. Sem número válido, renderiza um botão desabilitado. Com número válido, usa `createWhatsAppUrl` e abre o canal oficial em nova aba.

## SEO técnico

- `layout.tsx` define título, descrição, Open Graph, Twitter Card e tema claro
- `robots.ts` permite rastreamento sem adicionar domínio ou sitemap
- `StructuredData` publica um `FAQPage` idêntico às perguntas visíveis
- `serializeStructuredData` escapa marcação antes de inserir JSON no HTML
- Canonical e sitemap aguardam o domínio oficial

## Dependências e desempenho

Não foram adicionadas dependências. As ilustrações usam HTML e CSS, e apenas a logo usa `next/image`.

O projeto não possui busca remota, banco, autenticação, Route Handlers, Server Actions, formulário ou analytics. O código evita enviar as seções estáticas ao cliente.

Atualize este mapa quando diretórios, dependências, contratos ou fronteiras mudarem.
