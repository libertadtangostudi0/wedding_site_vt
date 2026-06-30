// src/pages/Home.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { GalleryGrid } from '../components/Gallery/GalleryGrid';
import { useTranslation } from '../hooks/useTranslation';



export const Home = () => {

  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const { t } = useTranslation(lang);
  if (t('nav.about') === '...') return <div>Loading...</div>;

  return (
    <div className="home-page">
      <Navbar t={t} onLangChange={setLang} currentLang={lang} />
      
      <main>
        <Hero t={t} />
        <About t={t} />
        
        <section className="home-gallery">
          <h2>{t('gallery.title')}</h2>
          <GalleryGrid limit={4} />
          <Link to="/gallery" className="view-more-btn">
            {t('gallery.viewMore')}
          </Link>
        </section>

      </main>
      
      <footer>

      </footer>
    </div>
  );
};
