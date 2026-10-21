# Qualidade da aplicação

Os checks cobrem código, tipos, regras locais, conteúdo configurável, URLs de contato, dados estruturados e build estático.

## Comandos

| Comando | Evidência produzida |
|---|---|
| `npm run lint` | Presets oficiais e limite local de 350 linhas |
| `npm run typecheck` | Tipos de rota e TypeScript sem emissão |
| `npm run lint:typed` | Promises não tratadas e handlers incompatíveis |
| `npm run lint:rules` | Autocheck das regras locais |
| `npm test` | Configuração, WhatsApp e dados estruturados |
| `npm run build` | Build e prerenderização |
| `npm run check` | Sequência completa dos checks |

## Regras

- TypeScript estrito
- Arquivos de produção abaixo de 350 linhas
- Server Components por padrão
- Sem `console` em código de produção
- HTML semântico e navegação por teclado
- Foco visível e movimento reduzido
- Sem prova social ou dados comerciais inventados; número de contato de exemplo somente quando explicitamente solicitado e identificado
- Sem dependências novas sem necessidade comprovada

## Testes automatizados

- `site.test.ts` valida quantidades da V2, unicidade, formato brasileiro do contato e URLs com mensagens gerais e por serviço
- `whatsapp.test.ts` valida números ausentes, inválidos e normalizados
- `structured-data.test.ts` valida o tipo `FAQPage`, a correspondência das perguntas e o escape seguro do JSON

## Revisão de interface

A revisão estática deve verificar semântica, títulos, controles, imagens, animações, hover, foco e movimento reduzido. O smoke test HTTP deve confirmar:

- Um único H1
- Todos os destinos internos existentes
- Todos os CTAs comerciais com destino `wa.me`, número centralizado e mensagem preenchida; o número temporário deve estar identificado como exemplo
- `robots.txt` acessível
- Sete perguntas no JSON-LD
- Conteúdo comercial presente no HTML renderizado

A revisão visual em 390, 768 e 1440 pixels depende de um navegador disponível. Não substitua essa revisão por inferência baseada no CSS.

## Segurança e integrações

Não há coleta de dados, credenciais, cookies de aplicação ou chamadas externas. O JSON-LD deriva apenas do conteúdo local e escapa o caractere `<` antes da inserção no documento.

Execute `npm audit` antes de uma entrega pública e investigue alertas sem aplicar correções forçadas incompatíveis.
