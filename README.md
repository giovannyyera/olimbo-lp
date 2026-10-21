# Orbe: landing page

Landing page comercial da Orbe para apresentar sites, sistemas, automações e consultoria digital. A V2 combina conteúdo orientado a benefícios, demonstrações conceituais e otimização para mecanismos de busca sem inventar prova social ou canais de contato.

## Executar localmente

Requisitos: Node.js 20.19 ou superior e npm 11.

```bash
npm ci
npm run dev
```

Acesse `http://localhost:3000`.

Para executar lint, tipos, regras locais, testes e build:

```bash
npm run check
```

Nenhuma variável de ambiente é necessária. O WhatsApp permanece desabilitado até a Orbe fornecer um número oficial; o projeto não usa um contato fictício.

## Documentação

- [Produto e escopo](PRODUCT.md)
- [Preparação local](docs/onboarding.md)
- [Arquitetura](docs/architecture.md)
- [Design e acessibilidade](docs/design.md)
- [Qualidade](docs/quality.md)
- [Instruções para agentes](AGENTS.md)
- [Setup e evidências](docs/setup.md)

## Escopo atual

A rota principal inclui hero comercial, benefícios, serviços, problemas e possíveis caminhos, exemplos ilustrativos, processo, princípios da Orbe, perguntas frequentes e chamada final. O conteúdo é renderizado no servidor e apenas o menu móvel exige JavaScript no cliente.

## Pendências de publicação

Antes de publicar, fornecer e aprovar o número oficial de WhatsApp, o domínio canônico e eventuais textos comerciais finais. Deploy, analytics e integrações externas não fazem parte desta entrega.
