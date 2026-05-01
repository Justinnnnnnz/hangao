function stripTrailingSlash(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/+$/, '');
}

export function addTrailingSlash(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function getLanguageFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
}

export function stripLanguagePrefix(pathname) {
  const cleanPath = stripTrailingSlash((pathname || '/').split(/[?#]/)[0]);

  if (!cleanPath) {
    return '/';
  }

  if (cleanPath === '/en') {
    return '/';
  }

  if (cleanPath.startsWith('/en/')) {
    return cleanPath.slice(3) || '/';
  }

  return cleanPath;
}

export function localizePath(pathname, lang) {
  const basePath = stripLanguagePrefix(pathname || '/');

  const localizedPath =
    lang === 'en' ? (basePath === '/' ? '/en' : `/en${basePath}`) : basePath;

  return addTrailingSlash(localizedPath);
}

export function routePath(pathname, lang) {
  const basePath = stripLanguagePrefix(pathname || '/');

  if (lang === 'en') {
    return basePath === '/' ? '/en' : `/en${basePath}`;
  }

  return basePath;
}
