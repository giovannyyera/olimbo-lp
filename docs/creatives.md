# Criativos da landing page

## Origem e uso

Substituídos em 22/10/2026 com a ferramenta integrada `image_gen`, por solicitação de imagens mais realistas e orientadas ao uso dos serviços. As novas cenas têm linguagem fotográfica, luz natural, pessoas e equipamentos em ambientes de pequenos negócios. São cenas fictícias geradas por IA; não representam clientes, produtos entregues nem resultados reais. Conversão WebP em 1536 × 1024, qualidade 84.

- `public/images/olimbo-websites.webp`: profissional consulta um site de interiores em seu estúdio; hero e aplicação de sites.
- `public/images/olimbo-software.webp`: gestor usa um sistema para organizar a operação; hero e aplicação de sistemas.
- `public/images/olimbo-automation.webp`: empreendedora prepara pedidos junto ao notebook e impressora de etiquetas; hero e aplicação de automação.

Prompts completos atuais: [image-prompts-2026-10-22.md](image-prompts-2026-10-22.md). Os criativos anteriores foram removidos da pasta pública. As microilustrações de benefícios continuam em HTML/CSS.

Os textos alternativos e a ordem da galeria ficam em `src/config/creatives.ts`. A galeria muda apenas por ação do visitante, com transição de opacidade e escala. Os botões funcionam por teclado e anunciam a seleção; não há rotação automática.

## Marca oficial

Olimbo é a única marca da aplicação. `image_gen` integrado removeu o fundo da referência horizontal fornecida pelo usuário em 22/10/2026. A saída transparente foi revisada sobre marfim; o canal alpha foi preservado nas derivações feitas com Sharp:

- `public/brand/olimbo-logo-horizontal.png` (716 × 240): cabeçalho e rodapé.
- `public/brand/olimbo-logo-symbol.png` (384 × 384): hero e fonte dos ícones.
- `public/brand/olimbo-logo-vertical.png` (480 × 560): versão vertical transparente, derivada da mesma horizontal.
- `public/brand/favicon-olimbo-transparente.png` (64 × 64): única URL de favicon nos metadados para evitar reutilização da URL anterior.
- `public/favicon.ico` (16/32/48), `src/app/icon.png` (192) e `src/app/apple-icon.png` (180): símbolo com transparência real.

As referências originais com fundo foram preservadas fora da pasta pública em `~/.codex/generated_images/olimbo-reference-originals/`. Ativos e guia da identidade anterior foram removidos do projeto.

Prompt final da ferramenta integrada:

```text
Use case: background-extraction. Edit target: supplied horizontal Olimbo logo. Remove ALL ivory/off-white paper background and texture, including inside every enclosed letter counter and ALL spaces between the network nodes and connecting lines. Output an actual transparent PNG with alpha, not a checkerboard illustration. Preserve the exact official logo: the black and golden yellow connected circular nodes symbol on the LEFT and the exact word 'Olimbo' on the RIGHT. Keep geometry, relative placement, typography, spelling, proportions, circle counts and connections exactly as input. Crisp clean flat edges, no shadow, no glow, no background or panel. Wide horizontal logo, fully within canvas with small transparent margins. This is precise background removal, no redesign. Black letters remain black, golden nodes remain golden yellow.
```

## Prompts anteriores — histórico de 21/10/2026

### Interfaces

```text
Use case: stylized-concept. Asset type: premium digital agency landing page hero, landscape 3:2. Primary request: sculptural editorial 3D still life representing websites, bespoke software and automation. Scene: ivory seamless studio with a low pale plinth, three overlapping frameless glass browser panels with abstract black interface blocks and golden yellow accent controls, a thin chrome connecting path and small yellow sphere. Refined tactile glass, matte black metal and warm white materials. Bold art direction, physical depth, cinematic soft shadows, warm daylight, lots of breathing space around objects. Palette strictly #FAC202 golden yellow, #0B0B0B black, #F7F6F2 ivory and silver. Compose the objects centrally, fully within frame, viewed at a slight three quarter perspective. No letters, no text, no numerals, no logos, no watermark, no charts suggesting real results. This is a conceptual illustration, not a photograph of a client product.
```

### Sistemas

```text
Use case: stylized-concept. Asset type: conceptual software image for a premium digital agency landing page. Landscape 3:2. A sculptural black tablet-like glass dashboard floating just above an ivory rectangular plinth, modular frosted glass tiles organized into a precise grid, one golden yellow cube and subtle thin chrome connections. Abstract interface blocks, no legible content. Editorial 3D product photography style, tactile matte black, translucent glass, soft studio sunlight, long gentle shadows, ivory seamless background, black #0B0B0B and yellow #FAC202 accents, polished architectural composition. All objects fit comfortably in frame. No text, no letters, no logos, no numbers, no watermark, no performance graphs. Concept only, not a real product.
```

### Automações

```text
Use case: stylized-concept. Asset type: conceptual automation creative for a premium digital agency landing page. Landscape 3:2. A beautiful physical circuit sculpture: three matte black and frosted glass rounded square modules resting at different heights on an ivory studio floor, joined by thin sculptural chrome tracks with a single golden yellow sphere at the central junction and tiny golden yellow connectors. Isometric three quarter perspective, elegant physical workflow metaphor, premium editorial 3D still life, realistic soft daylight and shadows, ivory #F7F6F2 background, black #0B0B0B and golden yellow #FAC202. No text, no letters, no logos, no numerals, no watermark, no extraneous props. All modules fully within the composition.
```

## Condição de revisão

Rever este registro se imagens, origem, marca ou controles da galeria forem alterados.


## Compatibilidade dos ícones — 22/10/2026

`olimbo-favicon-16.png`, `olimbo-favicon-32.png` e `olimbo-favicon.ico` são derivações do mesmo símbolo transparente. `olimbo-apple-touch-icon.png` copia a versão Apple de 180 px para um endereço próprio da marca atual. Todos ficam em `public/brand/` e são vinculados pelos metadados; as imagens de referência e a identidade permanecem as mesmas.
