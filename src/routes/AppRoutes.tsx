// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { Home } from '../pages/Home';
import { AdminPanel } from '../pages/AdminPanel';
import { GalleryPage } from '../pages/GalleryPage';
import { NotFound } from '../pages/NotFound';
import { DEFAULT_LANGUAGE } from '../constants/i18n';
import { buildLocalizedPath } from '../utils/buildLocalizedPath';

export const AppRoutes = () => (
  <Routes>
    {/* Admin is intentionally not localized. */}
    <Route path="/admin" element={<AdminPanel />} />

    <Route path="/:lang" element={<AppLayout />}>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={<Home />} />
      <Route path="gallery" element={<GalleryPage />} />
    </Route>

    {/* No language in the URL at all: send the visitor to the default one. */}
    <Route path="/" element={<Navigate to={buildLocalizedPath(DEFAULT_LANGUAGE, 'home')} replace />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);
