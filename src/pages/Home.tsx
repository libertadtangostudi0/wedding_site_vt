// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { AboutUs, type SocialLink } from '../components/AboutUs';
import { GalleryGrid } from '../components/Gallery/GalleryGrid';
import { useLangParam } from '../hooks/useLangParam';
import { buildLocalizedPath } from '../utils/buildLocalizedPath';

// Placeholder data — swap these URLs for the real profile links whenever
// they're available. Kept as a prop input to AboutUs, not hardcoded inside it.
const SOCIAL_LINKS: SocialLink[] = [
  { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/biwedding.placeholder' },
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/biwedding.placeholder' },
];

// Navbar/Footer are NOT rendered here anymore: AppLayout owns them.
// Language also comes from the URL (via useLangParam), not from a local
// useState — that duplication was what caused Home to silently fall
// back to Vietnamese regardless of what the Navbar showed.
export const Home = () => {
  const { lang } = useLangParam();
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <main>
        <Hero t={t} />
        <About t={t} />

        <section className="home-gallery">
          <h2>{t('gallery.title')}</h2>
          <GalleryGrid limit={4} />
          <Link to={buildLocalizedPath(lang, 'gallery')} className="view-more-btn">
            {t('gallery.viewMore')}
          </Link>
        </section>

        <AboutUs t={t} socialLinks={SOCIAL_LINKS} />
      </main>
    </div>
  );
};
