# Remover o fundo das logos oficiais

Em 23/10/2026, a ferramenta integrada `image_gen` editou as 18 logos com `transparent_background: true`, em uma chamada por arquivo. O mesmo prompt foi usado, alterando apenas o nome do arquivo de entrada.

Os PNGs finais ficam na pasta local `olimbo_logos_png/`, com as dimensões originais e canal alpha. Essa pasta é ignorada pelo Git porque as fontes não são necessárias para build ou runtime. Sharp ajustou tamanhos e derivou os ativos públicos versionados, sem nova dependência.

## Prompt aplicado

Substitua `{numero}` por `01` a `18` para reproduzir o texto enviado para cada entrada:

```text
Use case: background-extraction. Edit target: attached official Olimbo logo olimbo_{numero}.png. Remove ONLY its rectangular background (white, black, or yellow as in the source), border lines, and background texture. Output genuine RGBA transparency including all spaces inside the O ring, letter counters and between the symbol and cursor. Preserve the exact logo design, typography, lowercase text "olimbo" where present, placement, composition, original aspect ratio, colors and geometry. Preserve black foreground elements on white/yellow sources, white foreground elements on black sources, and preserve the cursor's original yellow/white/black color. Do not confuse white foreground with removable background. For rounded-square app icon variants 12 and 13 keep the rounded-square tile and its logo; remove only the surrounding white canvas. For outline variants 14 and 18 make all enclosed background areas transparent while preserving every thin stroke. For variant 17 preserve its existing dimensional highlights and shadows on the logo itself. No redesign, no added lettering, no shadow added, no checkerboard illustration, no new canvas color. Keep whole logo in frame.
```

## Registro de procedência

Uma chamada de edição foi feita para cada PNG fornecido, usando o prompt acima e preservando dimensões e composição. A aplicação usa apenas as derivações necessárias em `public/brand/` e `public/favicon.ico`; arquivos temporários da ferramenta não são necessários nem fazem parte do repositório.
