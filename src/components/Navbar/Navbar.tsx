// src/components/Navbar/Navbar.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { buildLocalizedPath, replaceLangInPath } from '../../utils/buildLocalizedPath';
import type { SupportedLanguage } from '../../constants/i18n';

interface NavbarProps {
  t: (key: string) => string;
  currentLang: SupportedLanguage;
}

export const Navbar: React.FC<NavbarProps> = ({ t, currentLang }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLangChange = (nextLang: SupportedLanguage) => {
    // The URL is the single source of truth for language: switching the
    // dropdown navigates to the same page under the new /:lang prefix
    // instead of mutating some local component state.
    navigate(replaceLangInPath(location.pathname, nextLang));
  };

  return (
    <nav className={styles.navbar}>
      <Link to={buildLocalizedPath(currentLang, 'home')} className={styles.navLogo}>
        B<span>·I</span> Wedding
      </Link>

      <div className={styles.navLinks}>
        <Link to={buildLocalizedPath(currentLang, 'home')}>{t('nav.home')}</Link>
        <Link to={buildLocalizedPath(currentLang, 'gallery')}>{t('nav.gallery')}</Link>
        <Link to={{ pathname: buildLocalizedPath(currentLang, 'home'), hash: 'about-us' }}>
          {t('nav.about')}
        </Link>
        <span className={styles.navItemDisabled}>{t('nav.services')}</span>
        <span className={styles.navItemDisabled}>{t('nav.contact')}</span>
      </div>

      <select
        className={styles.langSwitcher}
        value={currentLang}
        onChange={(e) => handleLangChange(e.target.value as SupportedLanguage)}
      >
        <option value="vi">VI</option>
        <option value="en">EN</option>
      </select>
    </nav>
  );
};
