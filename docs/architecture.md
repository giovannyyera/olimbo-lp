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
│   ├── mobile-menu.tsx     # menu cliente
│   ├── scroll-motion.tsx   # revelações progressivas sem ocultar o HTML
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

`page.tsx`, todas as seções, as imagens de aplicações e os dados estruturados são Server Components. O HTML principal permanece disponível sem hidratação.

As fronteiras cliente são `MobileMenu`, `HeroProductVisual` e `ScrollMotion`. O menu mantém abertura e fechamento por `Escape`; a galeria controla apenas a imagem selecionada; o observador anima elementos uma vez ao entrarem na tela, sem handlers de scroll ou atualização de estado por frame. Ele desconecta e cancela animações quando a preferência por movimento reduzido muda. `ContactCta` recebe apenas os dados necessários.

## Conteúdo e conversão

`src/config/site.ts` centraliza benefícios, soluções, mensagens de WhatsApp, problemas, exemplos, processo, princípios e perguntas frequentes. Os componentes apenas apresentam esses dados.

`ContactCta` recebe a configuração do WhatsApp e uma mensagem contextual opcional. Sem número válido, renderiza um botão desabilitado. Com número válido, usa `createWhatsAppUrl` e abre o WhatsApp em nova aba, com mensagem pronta. O número temporário de exemplo fica somente em `siteConfig.contact.whatsapp.phone`; as notas no hero e na chamada final identificam a demonstração.

## SEO técnico

- `layout.tsx` define título, descrição, Open Graph, Twitter Card e tema claro
- `robots.ts` permite rastreamento sem adicionar domínio ou sitemap
- `StructuredData` publica um `FAQPage` idêntico às perguntas visíveis
- `serializeStructuredData` escapa marcação antes de inserir JSON no HTML
- Canonical e sitemap aguardam o domínio oficial

## Dependências e desempenho

Não foram adicionadas dependências ao projeto. Logos e criativos usam `next/image`, dimensões reservadas e `sizes` responsivos. A primeira imagem do hero usa carregamento prioritário; as demais usam lazy loading. Microilustrações continuam em HTML e CSS. `src/config/creatives.ts` centraliza os três ativos WebP. Origem e prompts ficam em `docs/creatives.md`.

`src/app/favicon.ico`, `icon.png` e `apple-icon.png` usam as convenções de metadados do Next.js e derivam do símbolo oficial preservado.

O projeto não possui busca remota, banco, autenticação, Route Handlers, Server Actions, formulário ou analytics. O código evita enviar as seções estáticas ao cliente.

Atualize este mapa quando diretórios, dependências, contratos ou fronteiras mudarem.
