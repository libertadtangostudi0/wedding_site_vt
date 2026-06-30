import React from 'react';
import styles from './Hero.module.css';
import { SafeHtml } from '../ui/SafeHtml';

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className={styles.hero}>
      <img className={styles.heroImg} src="..." alt="Wedding" />
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroLines}></div>
      
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Xuyên Mộc · Vietnam</p>
        <SafeHtml 
          as="h1" 
          className={styles.heroTitle} 
          html={t('hero.title')} 
        />
        <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>
        <a href="#contact" className={styles.heroCta}>
          <span>{t('hero.cta')}</span>
        </a>
      </div>
    </section>
  );
};
