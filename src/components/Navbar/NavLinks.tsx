import React from 'react';
import styles from './Navbar.module.css';

interface NavLinksProps {
  t: (key: string) => string;
}

const LINKS = [
  { href: '#about', label: 'nav.about' },
  { href: '#gallery', label: 'nav.gallery' },
  { href: '#services', label: 'nav.services' },
  { href: '#contact', label: 'nav.contact' }
];

export const NavLinks: React.FC<NavLinksProps> = ({ t }) => {
  return (
    <ul className={styles.navLinks}>
      {LINKS.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{t(link.label)}</a>
        </li>
      ))}
    </ul>
  );
};
