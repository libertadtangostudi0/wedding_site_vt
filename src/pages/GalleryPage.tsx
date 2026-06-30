// src/pages/GalleryPage.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GalleryGrid } from '../components/Gallery/GalleryGrid';
import styles from './GalleryPage.module.css';

export const GalleryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>{t('gallery.title')}</h1>
        <p>{t('gallery.subtitle')}</p>
      </header>      

      <GalleryGrid />
    </div>
  );
};