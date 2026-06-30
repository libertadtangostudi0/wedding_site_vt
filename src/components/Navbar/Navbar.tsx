// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

interface NavbarProps {
  t: (key: string) => string;
  onLangChange: (lang: 'vi' | 'en') => void;
  currentLang: 'vi' | 'en';
}

export const Navbar: React.FC<NavbarProps> = ({ t, onLangChange, currentLang }) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/home" className={styles.navLogo}>
        B<span>·I</span> Wedding
      </Link>
      
      <div className={styles.navLinks}>
        <Link to="/home">{t('nav.home')}</Link>
        <Link to="/gallery">{t('nav.gallery')}</Link>
        <span className={styles.navItemDisabled}>{t('nav.about')}</span>
        <span className={styles.navItemDisabled}>{t('nav.services')}</span>
        <span className={styles.navItemDisabled}>{t('nav.contact')}</span>
      </div>

      <select 
        className={styles.langSwitcher}
        value={currentLang} 
        onChange={(e) => onLangChange(e.target.value as 'vi' | 'en')}
      >
        <option value="vi">VI</option>
        <option value="en">EN</option>
      </select>
    </nav>
  );
};
