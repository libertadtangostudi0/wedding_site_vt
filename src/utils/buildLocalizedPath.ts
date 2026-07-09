// src/utils/buildLocalizedPath.ts
import type { SupportedLanguage } from '../constants/i18n';

/** Builds a `/:lang/segment` path, e.g. buildLocalizedPath('en', 'home') -> '/en/home'. */
export function buildLocalizedPath(lang: SupportedLanguage, segment: string = ''): string {
  const cleanSegment = segment.replace(/^\/+/, '');
  return cleanSegment ? `/${lang}/${cleanSegment}` : `/${lang}`;
}


/**
 * Replaces the leading `/:lang` segment of a pathname with `newLang`,
 * preserving the rest of the path. Used by the language switcher so that
 * switching language keeps the user on the same page.
 */
export function replaceLangInPath(pathname: string, newLang: SupportedLanguage): string {
  const segments = pathname.split('/').filter(Boolean);
  segments[0] = newLang;
  return `/${segments.join('/')}`;
}
