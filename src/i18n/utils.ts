import { ui, languages, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment && segment in ui) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang, path = ''): string {
  const cleanPath = path.replace(/^\/|\/$/g, '');
  if (lang === defaultLang) return `/${cleanPath}`;
  return `/${lang}/${cleanPath}`;
}

/** Path after locale prefix: `''` = home, otherwise e.g. `game`, `virtual-human`. */
export function getRouteSlugFromPathname(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '') || '/';
  const segments = trimmed === '/' ? [] : trimmed.split('/').filter(Boolean);
  if (segments.length === 0) return '';
  const [first, ...rest] = segments;
  if (first === 'en' || first === 'ja') return rest.join('/');
  return segments.join('/');
}

/** Same logical page in each locale (for language switcher links). */
export function getLocaleUrlsForPathname(pathname: string): Record<Lang, string> {
  const slug = getRouteSlugFromPathname(pathname);
  return (Object.keys(languages) as Lang[]).reduce(
    (acc, code) => {
      acc[code] = getLocalizedPath(code, slug);
      return acc;
    },
    {} as Record<Lang, string>,
  );
}
