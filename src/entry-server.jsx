import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppShell, { pageRoutes } from './AppShell';
import { getNewsItems } from './data/newsData';
import { getSeoForPath } from './seoConfig';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
}

export function getPrerenderRoutes() {
  const staticRoutes = pageRoutes.flatMap((route) => [route.path, route.path === '/' ? '/en' : `/en${route.path}`]);
  const articleSlugs = getNewsItems('zh').map((item) => item.slug);
  const articleRoutes = articleSlugs.flatMap((slug) => [`/news/${slug}`, `/en/news/${slug}`]);

  return [...new Set([...staticRoutes, ...articleRoutes])];
}

export { getSeoForPath };
