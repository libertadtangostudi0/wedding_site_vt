// src/components/Gallery/GalleryGrid.tsx
import React from 'react';
import styles from '../../pages/GalleryPage.module.css';
import { galleryImages } from '../../assets/images';

interface GalleryGridProps {
  limit?: number;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ limit }) => {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <div className={styles.galleryGrid}>
      {images.map((img, index) => (
        <div key={index} className={styles.galleryItem}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
};
