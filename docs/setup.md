# Setup e evidências

## Contexto do bootstrap

- Data de verificação: 20/10/2026, fuso America/Sao_Paulo.
- Toolkit: Vibe Coding Toolkit, Prompt 11, revisão `790a895304e0c08b70a5b215c9d334f1c86b816c`.
- Ambiente observado: Windows, Node.js 24.22.0, npm 11.19.1 e Git 2.52.0.windows.1.
- Repositório existente preservado: branch `main`, remote `origin` e commit inicial `f269e88`.
- Nenhum commit, push, deploy, serviço pago ou configuração global foi realizado.

O scaffold oficial foi criado temporariamente com `create-next-app` 16.4.2 e incorporado à raiz, preservando Git, README e `.gitignore`. O Next.js adicionou ao `AGENTS.md` seu bloco gerenciado de orientação para agentes.

## Fontes e ativos

- Documentação versionada do Next.js em `node_modules/next/dist/docs/`.
- Guia oficial de identidade em `public/docs/Guia_de_Identidade_Visual_Orbe.pdf`.
- Logos oficiais em `public/brand/`; `orbe-logo1.png` foi selecionada para a interface clara sem alteração de proporção, cor ou conteúdo.
- Diretrizes atuais do `web-design-guidelines` consultadas na fonte oficial da skill.

O PDF foi renderizado apenas para inspeção local. Seus artefatos temporários não fazem parte do produto.

## Adaptações para uma landing page institucional

- npm foi preservado; nenhuma troca de gerenciador foi necessária.
- Banco, Drizzle, PostgreSQL, autenticação e migrations foram omitidos porque não há persistência.
- Zod, logger, biblioteca de classes, biblioteca de UI, ícones e animação foram omitidos por não sustentarem um fluxo atual.
- Não existe `.env.example`: o projeto não usa variáveis de ambiente.
- React Compiler e Cache Components permaneceram desativados sem evidência de necessidade.
- O WhatsApp oficial ainda não foi fornecido. O campo fica `null`, e a interface comunica indisponibilidade sem criar número fictício.
- Formulário, e-mail, gestão de relacionamento com clientes, analytics, gestão de conteúdo, chat e metadados dependentes de domínio foram adiados.

## Skills locais

As skills foram instaladas com cópia versionada em `.agents/skills/`, e `skills-lock.json` registra origem e hash. Para esta implementação foram lidas e aplicadas:

- `vercel-react-best-practices`: Server Components por padrão, cliente pequeno e imagens dimensionadas.
- `vercel-composition-patterns`: composição de chamadas para ação, cabeçalho e títulos sem contratos de componente excessivos.
- `web-design-guidelines`: revisão de semântica, foco, controles, imagens, movimento e responsividade.
- `writing-guidelines`: revisão editorial da documentação e remoção de abreviações ambíguas.
- `next-dev-loop`: procedimento de runtime consultado; execução específica bloqueada se `agent-browser` continuar ausente.

Também permanecem disponíveis para demandas específicas `next-bundle-optimizer`, `vercel-react-view-transitions`, `find-skills` e skills relacionadas à Vercel. Instalação não autoriza deploy, acesso a conta ou uso de token; nenhuma delas foi usada para publicar.

## Implementação entregue

- V2 comercial com hero, benefícios, bento grid de soluções, comparação de problemas, exemplos conceituais, processo, princípios, perguntas frequentes e chamada final.
- Ilustrações próprias em HTML e CSS para sites, painéis e fluxos, todas identificadas como conceituais.
- Mensagens contextuais de WhatsApp por serviço, mantidas inativas até a inclusão do número oficial.
- Metadados comerciais, `robots.txt` e JSON-LD `FAQPage` sem canonical, sitemap ou URLs fictícias.
- Server Components em toda a página e menu móvel como única fronteira cliente.
- CSS dividido por responsabilidade, sem dependência visual ou de animação.
- Documentação de produto, arquitetura, design, qualidade e operação atualizada.

## Verificações

| Item | Estado | Evidência |
|---|---|---|
| Lint | Validado durante a implementação | `npm run lint`, exit 0 |
| Tipos | Validado durante a implementação | `npm run typecheck`, exit 0 |
| Testes | **Validado durante a implementação** | Vitest: 3 arquivos e 7 testes aprovados |
| Check completo | **Validado** | `npm run check`, exit 0: lint, tipos, lint tipado, regras, 3 arquivos/7 testes e build estático |
| Runtime local | **Validado** | `GET /` e `/robots.txt` retornaram 200 em `localhost:3000`; conteúdo, âncoras, CTAs e JSON-LD foram conferidos |
| Revisão estática de interface | **Validado** | Um H1, oito H2, destinos internos válidos, movimento reduzido e padrões proibidos revistos |
| Revisão visual | **Não executada** | O navegador integrado retornou `apps: []` e `browsers: []`; 390, 768 e 1440 pixels não foram alegados como testados |
| `next-dev-loop` | Pendente da ferramenta | `agent-browser` não foi encontrado no PATH no preflight inicial |

O servidor da própria Orbe já estava ativo em `localhost:3000` durante a evolução V2 e foi preservado.

## Ocorrências corrigidas na V2

- O primeiro teste de dados estruturados usava o alias `@/*`, que o Vitest local não resolve. O import foi alterado para um caminho relativo, sem nova dependência.
- A primeira inicialização após o build mostrou erros transitórios de resolução de CSS no Turbopack. A recompilação terminou, a página e o CSS responderam 200, e uma nova leitura do log não apresentou erros.

## Riscos e pendências

- Fornecer e aprovar o número oficial de WhatsApp antes de habilitar os CTAs.
- Informar domínio canônico antes de configurar URLs absolutas de otimização para mecanismos de busca e compartilhamento.
- Aprovar qualquer portfólio, case, depoimento, métrica ou canal comercial antes de publicar.
- Reavaliar dependências e auditoria antes de uma entrega pública.
- Executar deploy apenas mediante autorização explícita.

## Condição de revisão

Mudanças de stack, comandos, estrutura, marca, canal de contato ou escopo invalidam a evidência correspondente. Atualize este documento junto com a mudança; não converta uma pendência externa em integração simulada.
