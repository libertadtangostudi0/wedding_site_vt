// src/test/i18nTestInstance.ts
// Deterministic, synchronous i18next instance used only in tests.
// Avoids network/HTTP-backend flakiness while keeping the same
// translation keys as the real /public/locales/*.json files.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: 'Home', about: 'About Us', gallery: 'Collection', services: 'Services', contact: 'Contact' },
      gallery: { title: 'Full Gallery', subtitle: 'Collection of our best works', viewMore: 'View more' },
      hero: { eyebrow: 'Xuyen Moc . Vietnam', title: 'Exquisite Wedding Gowns', subtitle: 'subtitle-en', cta: 'Book a consultation' },
      about: {
        eyebrow: 'About Us',
        title: 'Capturing love in your own way',
        body: 'body-en',
        stats: { posts: 'posts', followers: 'followers', love: 'love' },
      },
    },
  },
  vi: {
    translation: {
      nav: { home: 'Trang chu', about: 'Ve chung toi', gallery: 'Anh', services: 'Dich vu', contact: 'Lien he' },
      gallery: { title: 'Bo suu tap day du', subtitle: 'subtitle-vi', viewMore: 'Xem them' },
      hero: { eyebrow: 'Xuyen Moc . Vietnam', title: 'Vay cuoi tinh te', subtitle: 'subtitle-vi', cta: 'Dat lich thu vay' },
      about: {
        eyebrow: 'Ve chung toi',
        title: 'Ghi lai tinh yeu',
        body: 'body-vi',
        stats: { posts: 'bai dang', followers: 'nguoi theo doi', love: 'tinh yeu' },
      },
    },
  },
};


export function createTestI18n(initialLang: 'en' | 'vi' = 'vi') {
  const instance = i18n.createInstance();

  instance.use(initReactI18next).init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
    supportedLngs: ['en', 'vi'],
    interpolation: { escapeValue: false },
    initImmediate: false,
  });

  return instance;
}
