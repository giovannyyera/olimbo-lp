import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const origin = "https://olimbo.dev.br";
const canonical = `${origin}/`;
const files = [];

function collect(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    assert(!entry.isSymbolicLink(), `Symlink inesperado: ${entry.name}`);
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(file);
    else files.push(file);
  }
}

assert(existsSync(root), "Execute npm run build para gerar out/.");
collect(root);
const read = (file) => readFileSync(path.join(root, file), "utf8");
const relative = (file) => path.relative(root, file).split(path.sep).join("/");
const html = read("index.html");

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]),
  );
}

const links = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag));
const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
const metaValue = (name) => meta.find((item) => item.name === name || item.property === name)?.content;
const canonicals = links.filter((item) => item.rel === "canonical");
assert.equal(canonicals.length, 1);
assert.equal(new URL(canonicals[0].href).href, canonical);
assert.equal(new URL(metaValue("og:url")).href, canonical);
assert.equal(metaValue("og:site_name"), "Olimbo");
assert.equal(metaValue("twitter:card"), "summary_large_image");
for (const name of ["og:image", "twitter:image"]) {
  assert.equal(metaValue(name), `${origin}/images/olimbo-project-offer.webp`);
}
assert.equal(links.filter((item) => item.rel === "icon").length, 1);
assert.equal(links.filter((item) => item.rel === "apple-touch-icon").length, 1);
assert(!html.includes("/_next/image?"), "A exportação depende do otimizador de imagens.");
assert(!html.includes("fonts.googleapis.com"), "Fonte remota no HTML publicado.");

const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
assert.equal(jsonLd.length, 1);
const faq = JSON.parse(jsonLd[0][1]);
assert.equal(faq["@type"], "FAQPage");
assert.equal(faq["@id"], `${canonical}#faq`);
assert.equal(faq.url, canonical);
assert.equal(faq.mainEntity.length, 7);
assert(read("robots.txt").includes(`Sitemap: ${origin}/sitemap.xml`));
assert.deepEqual([...read("sitemap.xml").matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]), [canonical]);
assert(existsSync(path.join(root, "404.html")), "Página 404 não exportada.");
assert(files.some((file) => file.endsWith(".woff2")), "Fontes locais não exportadas.");

function checkAsset(reference, source) {
  if (/^(?:data:|blob:|#)/.test(reference)) return;
  const url = new URL(reference.replaceAll("&amp;", "&"), source);
  if (url.origin !== origin) return;
  if (url.pathname === "/") return;
  const file = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
  assert(file.startsWith(`${root}${path.sep}`), "Referência fora de out/.");
  assert(existsSync(file), `Asset ausente: ${url.pathname}`);
}

for (const file of files.filter((item) => item.endsWith(".html"))) {
  for (const [, value] of readFileSync(file, "utf8").matchAll(/(?:src|href)="([^"]+)"/g)) {
    checkAsset(value, new URL(relative(file), canonical));
  }
}
for (const file of files.filter((item) => item.endsWith(".css"))) {
  for (const [, value] of readFileSync(file, "utf8").matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    checkAsset(value, new URL(relative(file), canonical));
  }
}

const forbiddenPath = /(?:^|\/)(?:\.[^/]+|node_modules|src|docs|scripts|olimbo_logos_png|functions|_worker\.js|package(?:-lock)?\.json|wrangler[^/]*)(?:\/|$)|\.(?:map|pem|key|p12|pfx|log)$/i;
const credentialPattern = /-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----|\bAKIA[0-9A-Z]{16}\b|\bgh[pousr]_[A-Za-z0-9]{20,}\b|\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{24,}\b/;
const devPackagePattern = /(?:@next\/eslint-plugin-next|eslint-config-next|fast-glob|micromatch\/|node_modules\/braces)/;
for (const file of files) {
  const name = relative(file);
  assert(!forbiddenPath.test(name), `Arquivo privado ou de servidor: ${name}`);
  if (/\.(?:html|js|css|json|txt|xml)$/.test(name)) {
    const content = readFileSync(file, "utf8");
    assert(!credentialPattern.test(content), `Possível credencial em ${name}`);
    assert(!/\/Users\/[^/\s]+\//.test(content), `Caminho privado em ${name}`);
    assert(!devPackagePattern.test(content), `Ferramenta de desenvolvimento em ${name}`);
  }
}

function comparePublic(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    assert(!entry.isSymbolicLink(), "Symlink em public/.");
    const source = path.join(directory, entry.name);
    if (entry.isDirectory()) comparePublic(source);
    else {
      const name = path.relative("public", source);
      assert(readFileSync(source).equals(readFileSync(path.join(root, name))), `Asset alterado: ${name}`);
    }
  }
}
comparePublic("public");
const headers = read("_headers");
for (const icon of ["/brand/olimbo-favicon-cursor.png", "/brand/olimbo-apple-touch-icon-transparent.png", "/favicon.ico"]) {
  assert(headers.includes(`${icon}\n  Cache-Control: no-store, max-age=0`));
}
console.log(`static export: ok (${files.length} arquivos; SEO, assets, fontes, ícones e inspeção de conteúdo publicável)`);
