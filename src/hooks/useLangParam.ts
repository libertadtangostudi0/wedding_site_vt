// src/hooks/useLangParam.ts
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LANGUAGE, isSupportedLanguage, type SupportedLanguage } from '../constants/i18n';

interface UseLangParamResult {
  /** The current language, guaranteed to be one of SUPPORTED_LANGUAGES. */
  lang: SupportedLanguage;
  /** Whether the raw :lang segment in the URL was valid. */
  isValidLangInUrl: boolean;
}

/**
 * Reads the `:lang` route param and keeps i18next in sync with it.
 * This is the single place that decides "what language are we in" —
 * components must not keep their own local language state.
 */
export function useLangParam(): UseLangParamResult {
  const { lang: rawLang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  const isValidLangInUrl = isSupportedLanguage(rawLang);
  const lang: SupportedLanguage = isValidLangInUrl ? (rawLang as SupportedLanguage) : DEFAULT_LANGUAGE;

  useEffect(() => {
    if (i18n.language !== lang) {
      void i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return { lang, isValidLangInUrl };
}
