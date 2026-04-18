export function getLanguageFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
}

export function stripLanguagePrefix(pathname) {
  if (!pathname) {
    return '/';
  }

  if (pathname === '/en') {
    return '/';
  }

  if (pathname.startsWith('/en/')) {
    return pathname.slice(3);
  }

  return pathname;
}

export function localizePath(pathname, lang) {
  const basePath = stripLanguagePrefix(pathname || '/');

  if (lang === 'en') {
    return basePath === '/' ? '/en' : `/en${basePath}`;
  }

  return basePath;
}

