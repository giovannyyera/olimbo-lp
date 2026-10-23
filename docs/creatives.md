# Ativos visuais da Olimbo

Este documento registra as fontes da marca, a imagem decorativa e as composições usadas na LP. As imagens não representam clientes, equipe ou projetos entregues.

## Marca oficial

O usuário forneceu 18 PNGs em 23/10/2026. A identidade usa um “O” com cursor e o nome `olimbo`.

Por solicitação posterior, `image_gen` integrado removeu o fundo das 18 variantes, em uma edição por arquivo. As versões transparentes substituem os PNGs desta branch, nas dimensões originais. Os originais opacos permanecem na cópia externa de origem. As variantes 12 e 13 mantêm o bloco arredondado que integra o ícone; o fundo externo é transparente.

As fontes de origem ficam na pasta local ignorada `olimbo_logos_png/` e não são necessárias para build ou runtime. Somente as derivações públicas usadas pela interface são versionadas. Os [prompts e a procedência das edições](logo-background-removal-2026-10-23.md) registram a transformação. As derivações de tamanho usam Sharp já disponível no projeto, sem dependência adicionada.

| Arquivo público | Dimensões | Fonte e uso |
|---|---|---|
| `brand/olimbo-horizontal-transparent.png` | 335 × 113 | Variante 05, cabeçalho e rodapé |
| `brand/olimbo-symbol-transparent.png` | 190 × 190 | Variante 09, cartão da seção `#sobre` |
| `brand/olimbo-favicon-cursor.png` | 64 × 64 | Variante 09, ícone do navegador |
| `brand/olimbo-apple-touch-icon-transparent.png` | 180 × 180 | Variante 09, ícone Apple |
| `favicon.ico` | 16/32/48 | Variante 09, fallback do navegador |

Todos os caminhos da tabela são relativos a `public/`. Os metadados usam URLs versionadas para os ícones PNG. Não há arquivos automáticos de ícone em `src/app/` concorrendo com essas referências.

## Imagem da seção institucional

`public/images/olimbo-project-offer.webp` é a única fotografia da página: uma composição editorial de laptop, caderno, vidro dourado e mesa verde profunda. A ferramenta integrada `image_gen` criou a imagem em 22/10/2026; Sharp converteu a saída para WebP, em 1536 × 1024 e 115.496 bytes.

A imagem é decorativa, com `alt=""`, carregamento lazy e dimensões reservadas. Não contém logo gerada nem dados comerciais. O [prompt da composição](image-prompt-project-offer-2026-10-22.md) registra sua origem.

## Composições em código

- `ServicePreview` apresenta site, painel e fluxo no hero, com legendas em `src/config/creatives.ts`
- `BenefitVisual` apresenta quatro cenas decorativas antes dos títulos dos benefícios
- `SolutionVisual` apresenta quatro cenas decorativas nos cards dos serviços

Essas composições usam HTML/CSS e não são controles funcionais nem provas de trabalhos entregues. Os títulos, descrições e CTAs reais ficam fora dos elementos decorativos. A galeria do hero permite seleção manual e rotação automática com respeito a movimento reduzido.

## Limpeza e revisão

A auditoria de 23/10/2026 removeu as três fotografias antigas de serviços e seus prompts, pois não eram mais usadas. Os estilos das seções e ornamentos removidos também foram excluídos. As 18 logos permanecem como fontes oficiais locais, fora da pasta pública e do versionamento.

Repita a inspeção de transparência, recorte, contraste, proporções e atribuição ao substituir imagens ou logos.
