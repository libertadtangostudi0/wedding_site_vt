// src/i18n.ts
// Single i18next instance for the whole app. The active language is never
// set here directly — it is derived from the `:lang` route param by
// `useLangParam` and applied via `i18n.changeLanguage(lang)`. This keeps
// the URL as the single source of truth for the current language.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants/i18n';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
    debug: import.meta.env.DEV,
  });

export default i18n;
