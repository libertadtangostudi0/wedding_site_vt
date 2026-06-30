// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AdminPanel } from '../pages/AdminPanel';
import { GalleryPage } from '../pages/GalleryPage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AdminPanel />} />  
    <Route path="/home" element={<Home />} />
    <Route path="/gallery" element={<GalleryPage />} />
  </Routes>
);