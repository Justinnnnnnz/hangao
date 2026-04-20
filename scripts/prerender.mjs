import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

function replaceTag(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html;
}

function injectSeo(html, seo) {
  let output = html;
  output = replaceTag(output, /<html lang="[^"]*">/, `<html lang="${seo.lang === 'en' ? 'en' : 'zh-CN'}">`);
  output = replaceTag(output, /<title>.*?<\/title>/s, `<title>${seo.meta.title}</title>`);
  output = replaceTag(
    output,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${seo.meta.description}" />`,
  );
  output = replaceTag(
    output,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${seo.meta.title}" />`,
  );
  output = replaceTag(
    output,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${seo.meta.description}" />`,
  );
  output = replaceTag(
    output,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${seo.canonical}" />`,
  );
  output = replaceTag(
    output,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${seo.canonical}" />`,
  );

  output = output.replace(/<link rel="alternate" hreflang="zh-CN" href="[^"]*"\s*\/?>/g, '');
  output = output.replace(/<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?>/g, '');
  output = output.replace(
    '</head>',
    `    <link rel="alternate" hreflang="zh-CN" href="${seo.zhAlternate}" />\n    <link rel="alternate" hreflang="en" href="${seo.enAlternate}" />\n  </head>`,
  );

  return output;
}

function routeToOutputPath(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

async function main() {
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
  const ssrEntry = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href;
  const { render, getPrerenderRoutes, getSeoForPath } = await import(ssrEntry);
  const routes = getPrerenderRoutes();

  for (const route of routes) {
    const appHtml = render(route);
    const seo = getSeoForPath(route);
    const html = injectSeo(template.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`), seo);
    const outputPath = routeToOutputPath(route);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf8');
  }

  await rm(ssrDir, { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
