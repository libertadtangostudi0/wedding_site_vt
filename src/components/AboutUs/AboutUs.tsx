// src/components/AboutUs/AboutUs.tsx
import React from 'react';
import styles from './AboutUs.module.css';

export interface SocialLink {
  id: 'facebook' | 'instagram';
  label: string;
  url: string;
}

interface AboutUsProps {
  t: (key: string) => string;
  /** Injected as a prop (not hardcoded) so real links can replace the placeholders later. */
  socialLinks: SocialLink[];
}

const SocialIcon: React.FC<{ id: SocialLink['id'] }> = ({ id }) => {
  if (id === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.35C16.2 4.31 15.19 4.22 14 4.22c-2.4 0-4.05 1.47-4.05 4.16V10.5H7.5v3H10V21z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
};


export const AboutUs: React.FC<AboutUsProps> = ({ t, socialLinks }) => {
  return (
    <section id="about-us" className={styles.aboutUsSection} aria-labelledby="about-us-heading">
      <p className={styles.eyebrow}>{t('aboutUs.eyebrow')}</p>
      <h2 id="about-us-heading" className={styles.title}>
        {t('aboutUs.title')}
      </h2>
      <p className={styles.body}>{t('aboutUs.body')}</p>

      <ul className={styles.socialList}>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={link.label}
            >
              <SocialIcon id={link.id} />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
