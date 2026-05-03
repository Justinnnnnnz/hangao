import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoForPath } from '../seoConfig';

function upsertMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertHttpEquiv(httpEquiv, content) {
  let element = document.head.querySelector(`meta[http-equiv="${httpEquiv}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('http-equiv', httpEquiv);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertProperty(property, content) {
  let element = document.head.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertStructuredData(data) {
  let element = document.head.querySelector('#structured-data');

  if (!element) {
    element = document.createElement('script');
    element.setAttribute('id', 'structured-data');
    element.setAttribute('type', 'application/ld+json');
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data, null, 2);
}

function upsertLink(rel, href, hreflang) {
  let selector = `link[rel="${rel}"]`;

  if (hreflang) {
    selector += `[hreflang="${hreflang}"]`;
  }

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    if (hreflang) {
      element.setAttribute('hreflang', hreflang);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const { lang, meta, canonical, zhAlternate, enAlternate, xDefault, siteName, structuredData } =
      getSeoForPath(location.pathname);

    document.title = meta.title;
    const htmlLang = lang === 'en' ? 'en' : 'zh-CN';
    document.documentElement.lang = htmlLang;

    upsertMeta('description', meta.description);
    upsertHttpEquiv('content-language', htmlLang);
    upsertMeta('application-name', siteName);
    upsertProperty('og:site_name', siteName);
    upsertProperty('og:title', meta.title);
    upsertProperty('og:description', meta.description);
    upsertProperty('og:url', canonical);
    upsertStructuredData(structuredData);

    upsertLink('canonical', canonical);
    upsertLink('alternate', zhAlternate, 'zh-CN');
    upsertLink('alternate', enAlternate, 'en');
    upsertLink('alternate', xDefault, 'x-default');
  }, [location.pathname]);

  return null;
}
