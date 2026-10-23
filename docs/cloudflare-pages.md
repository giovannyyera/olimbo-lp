# Publicar a Olimbo na Cloudflare Pages

O projeto está preparado para Cloudflare Pages como exportação estática do Next.js. O domínio definitivo é `https://olimbo.dev.br`. Esta preparação não criou projeto na conta, não alterou DNS e não executou commit, push, merge ou deploy.

## Compatibilidade

As seções usam somente conteúdo local. Server Components executam no build; menu, galeria e animações continuam no navegador. Não há APIs, Server Actions, autenticação, dados por requisição, cookies de aplicação ou revalidação que exijam servidor.

`next.config.ts` usa `output: "export"` e `images.unoptimized: true`. O build entrega imagens locais diretamente, com o mesmo conteúdo, dimensões, carregamento e CSS. Isso evita depender de `/_next/image` no host estático. Nenhum componente visual ou comportamento da galeria foi alterado.

A galeria permanece automática, a cada cinco segundos, sem controle de pausa. Mantém seleção manual, interrupção em aba oculta e preferência por movimento reduzido. A exceção de acessibilidade registrada na [auditoria anterior](audit-2026-10-23.md) foi preservada por solicitação explícita.

## Configuração do projeto

| Item | Valor |
|---|---|
| Node recomendado | `24.14.0`, fixado em `.node-version` |
| Gerenciador | npm 11; dependências fixadas em `package-lock.json` |
| Instalação local | `npm ci` |
| Build | `npm run build` |
| Saída publicável | `out/` |
| Verificação completa | `npm run check` |
| Verificação da saída existente | `npm run check:export` |
| Servidor de aplicação em produção | Nenhum |
| Variáveis ou secrets da aplicação | Nenhum |

`npm run build` executa `next build` e a inspeção dos arquivos gerados. O script `start` com `next start` foi removido, pois não se aplica a `output: "export"`. Para desenvolvimento, continue usando `npm run dev`.

A [imagem de build do Pages](https://developers.cloudflare.com/pages/configuration/build-image/) aceita `.node-version`. Se houver `NODE_VERSION` definido no painel, alinhe-o a `24.14.0` ou remova a divergência. Essa variável é opcional e não é credencial. O npm acompanha a versão do Node; não foi adicionada instalação global ao build.

## Painel da Cloudflare

Quando houver autorização para publicar:

1. Em Workers & Pages, crie um projeto **Pages** e escolha a origem dos arquivos
2. Na integração Git, selecione o repositório e a branch de produção desejada; não assuma a branch a partir deste worktree
3. Use o preset **Next.js (Static HTML Export)**
4. Configure a raiz como a raiz deste projeto, o comando `npm run build` e o diretório `out`
5. Use a imagem de build atual, com suporte à versão de Node fixada, e mantenha a instalação das dependências de desenvolvimento necessária ao Tailwind e ao build
6. Não configure Functions, Worker, adaptador SSR, comando `next start` ou secrets para a aplicação
7. Após um deploy autorizado, associe `olimbo.dev.br` em **Custom domains** e aguarde o status ativo com HTTPS

O [guia oficial de exportação estática](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) usa o mesmo preset e diretório. Se optar por upload direto de um build local, envie somente `out/`, nunca a raiz do repositório ou `.next/`.

Não é necessário Wrangler para essa preparação. Nenhum arquivo de configuração foi criado com IDs de conta, nomes de projeto ou tokens inventados.

## Domínio e DNS

`olimbo.dev.br` é o domínio raiz da zona a ser associada. Para um domínio raiz, o [Pages exige a zona na mesma conta Cloudflare e delegação dos nameservers](https://developers.cloudflare.com/pages/configuration/custom-domains/).

| Configuração | Nome | Valor |
|---|---|---|
| Delegação no registrador | `olimbo.dev.br` | Nameservers atribuídos à zona pela conta Cloudflare |
| CNAME na zona Cloudflare | `@` (`olimbo.dev.br`) | Destino `pages.dev` real fornecido pelo projeto Pages |

Associe o domínio pelo painel de Pages antes de criar registros manualmente. Com a zona delegada, o fluxo de Custom domains cria o CNAME; no domínio raiz, a Cloudflare aplica o tratamento de apex. Não foi inventado IP, destino `pages.dev` ou nameserver. Não há A/AAAA de um servidor Next.js para configurar.

Registros de e-mail e verificações existentes devem ser preservados. Eles não foram consultados nem alterados. Se houver registros conflitantes ou uma restrição CAA, a ativação do domínio/certificado precisa ser resolvida na conta antes de usar a URL publicamente.

`www.olimbo.dev.br` não foi configurado porque não foi solicitado. O endereço `pages.dev` da produção pode receber um redirecionamento ao domínio definitivo, usando o host real do projeto nas ferramentas da conta. Não há regra genérica que redirecione previews ou dependa de um nome de projeto desconhecido.

## SEO e compartilhamento

A origem pública fica em `siteConfig.url`, com `https://olimbo.dev.br`. A configuração gera:

- `metadataBase`, canonical da página inicial e Open Graph com a origem definitiva
- Twitter Card `summary_large_image`, com a imagem editorial existente de `#sobre`
- Imagens de compartilhamento com URL absoluta, descrição e dimensões Open Graph
- `FAQPage` em JSON-LD com URL da página, identificador `#faq`, idioma e as sete perguntas e respostas visíveis
- `robots.txt` que permite rastreamento e aponta para `https://olimbo.dev.br/sitemap.xml`
- `sitemap.xml` com somente a página inicial, sem âncoras, páginas fictícias ou data de modificação inventada

A representação textual da URL raiz pode aparecer com ou sem barra final nos metadados; ambas normalizam para a mesma URL. A inspeção valida essa equivalência.

## Assets, fontes e cabeçalhos

Os PNGs transparentes, ICO e WebP são copiados de `public/` para `out/` sem mudar seus bytes. As 18 fontes da identidade permanecem na pasta local ignorada `olimbo_logos_png/`; não são necessárias ao build, não são versionadas nem publicadas. Manrope é baixada por `next/font` durante o build e entregue como WOFF2 local, sem requisição do visitante ao Google Fonts.

`public/_headers` aplica `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` e uma `Permissions-Policy` que desativa câmera, microfone e geolocalização. Esses cabeçalhos não bloqueiam scripts, estilos, fontes ou animações usados pela LP. A política CSP não foi adicionada: o HTML estático do Next contém scripts inline e exigiria hashes/nonces revisados. HTTPS e HSTS devem ser confirmados na configuração do domínio Cloudflare; não foram simulados localmente.

O build precisa de rede para instalar pacotes e baixar a fonte quando ainda não estiver em cache. Isso não exige credencial nem variável de ambiente da aplicação.

Os cabeçalhos de favicon e ícone Apple migraram de `next.config.ts` para `public/_headers`, copiado para `out/_headers`. O [Pages interpreta esse arquivo](https://developers.cloudflare.com/pages/configuration/headers/) para servir os três ícones com `Cache-Control: no-store, max-age=0`. Não há Functions para aplicar esses cabeçalhos.

Um servidor de arquivos local comum não interpreta `_headers`; a validação local confere seu conteúdo. O comportamento HTTP da Cloudflare e o certificado só podem ser confirmados após um deploy autorizado.

## Conteúdo publicável e dependências

`scripts/verify-static-export.mjs` inspeciona a saída a cada build. Confere metadados, rotas SEO, referências a assets, arquivos de fonte, cópias públicas e ausência de dependência do otimizador de imagens. Rejeita symlinks, diretórios privados, fonte da aplicação, documentação, arquivos de ambiente/chaves, source maps de navegador, padrões de credenciais e caminhos privados conhecidos.

A inspeção dos 37 arquivos gerados encontrou cerca de 1,4 MB de conteúdo estático. Não foram encontrados arquivos privados ou credenciais na saída. O número comercial do WhatsApp e os textos da página são dados públicos intencionais. Uma inspeção de padrões não substitui a revisão de novos conteúdos futuros; o build falha nos casos que o verificador cobre.

Os cinco alertas altos da auditoria anterior pertenciam a `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`. `npm ls` confirmou que `braces@3.0.3` continua nessa cadeia, sem alteração de dependências nesta tarefa.

A consulta atual `npm audit --include=dev --json` retornou **zero alertas**; a consulta padrão também retornou zero. Isso não foi tratado como prova de atualização ou correção da biblioteca: as versões não mudaram, e o resultado do registro pode diferir da auditoria anterior.

O risco descrito no [aviso anterior de `braces`](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) era negação de serviço ao processar padrões aninhados em Node.js. Essa cadeia é ferramenta de lint, não é importada pela aplicação e não integra a saída estática. Não há processo Node.js publicado recebendo padrões de visitantes. Assim, não foi identificado caminho concreto de exploração desse problema nos arquivos servidos pelo Pages; o risco da ferramenta de build deve continuar sendo acompanhado. Nenhum downgrade ou correção forçada foi aplicado.

## Validação e limites

A exportação foi gerada com os checks de lint, tipos, lint tipado, regras locais e nove testes. A verificação de saída é executada novamente ao fim de cada build. A revisão no navegador usa um servidor de arquivos que entrega somente `out/`, sem Next.js.

Os resultados específicos da preparação estão em [Setup](setup.md). A revisão anterior de interface e as limitações de acessibilidade continuam em [Auditoria](audit-2026-10-23.md).

Não há bloqueio técnico identificado no código para Pages. A publicação em `olimbo.dev.br` depende de um projeto Pages real, associação da zona/domínio, DNS e emissão de HTTPS na conta. Esses passos não foram executados nem verificados nesta tarefa.
