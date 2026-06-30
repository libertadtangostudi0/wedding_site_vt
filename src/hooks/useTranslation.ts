import { useState, useEffect } from 'react';

type Lang = 'vi' | 'en';

export const useTranslation = (lang: Lang) => {
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    setTranslations(null); 
    
    fetch(`/locales/${lang}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`);
        return res.json();
      })
      .then((data) => setTranslations(data))
      .catch((err) => console.error("i18n error:", err));
  }, [lang]);

  const t = (key: string) => {
    if (!translations) return ''; 
    const keys = key.split('.');
    const value = keys.reduce((o, i) => (o ? o[i] : null), translations);
    return value || key;
  };

  return { t };
};
