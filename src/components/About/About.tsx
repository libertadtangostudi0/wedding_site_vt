import React from 'react';
import styles from './About.module.css';
import { SafeHtml } from '../ui/SafeHtml';
import aboutPhoto from '../../assets/about-wedding.jpg';

interface AboutProps {
  t: (key: string) => string;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutVisual}>
          <img src={aboutPhoto} alt="About Us" />
        </div>
        
        <div className={styles.aboutText}>
          <p className={styles.sectionEyebrow}>{t('about.eyebrow')}</p>
          
          <SafeHtml 
            html={t('about.title')} 
            tagName="h2" 
            className={styles.sectionTitle} 
          />
          
          <p className={styles.sectionBody}>{t('about.body')}</p>
          
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>520+</div>
              <div className={styles.statLabel}>{t('about.stats.posts')}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>5,6K</div>
              <div className={styles.statLabel}>{t('about.stats.followers')}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>{t('about.stats.love')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
