// src/layouts/AppLayout.tsx
import { Outlet, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer/Footer';
import { useLangParam } from '../hooks/useLangParam';
import { buildLocalizedPath } from '../utils/buildLocalizedPath';
import { DEFAULT_LANGUAGE } from '../constants/i18n';

/**
 * Renders the shared chrome (Navbar, Footer) exactly once for every
 * localized page. Pages under this layout must NOT render their own
 * Navbar/Footer — that duplication was the root cause of the language
 * desync bug (Home had its own independent language state).
 */
export const AppLayout = () => {
  const { lang, isValidLangInUrl } = useLangParam();
  const { t } = useTranslation();

  if (!isValidLangInUrl) {
    return <Navigate to={buildLocalizedPath(DEFAULT_LANGUAGE, 'home')} replace />;
  }

  return (
    <div className="app-wrapper">
      <Navbar t={t} currentLang={lang} />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer t={t} />
    </div>
  );
};
