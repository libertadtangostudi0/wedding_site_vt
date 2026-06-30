import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  t: (key: string) => string;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>B<span>·I</span> Wedding</div>
      <div className={styles.footerCopy}>
        © 2025 BI Wedding · Xuyên Mộc, Vietnam
      </div>
    </footer>
  );
};
