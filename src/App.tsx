// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer/Footer';
import { useTranslation } from './hooks/useTranslation';
import { useState } from 'react';
import './index.css';

function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const { t } = useTranslation(lang);
  if (t('nav.about') === '...') return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar t={t} onLangChange={setLang} currentLang={lang} />
        <div className="content-wrapper">
          <AppRoutes />
        </div>
        <Footer t={t} />
      </div>
    </BrowserRouter>
  );
}

export default App;