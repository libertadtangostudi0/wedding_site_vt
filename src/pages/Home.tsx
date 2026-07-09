// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { GalleryGrid } from '../components/Gallery/GalleryGrid';
import { useLangParam } from '../hooks/useLangParam';
import { buildLocalizedPath } from '../utils/buildLocalizedPath';

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
      </main>
    </div>
  );
};
