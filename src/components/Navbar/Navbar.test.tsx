// src/components/Navbar/Navbar.test.tsx
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { renderWithProviders } from '../../test/renderWithProviders';

const t = (key: string) => key;

describe('Navbar', () => {
  it('builds the Home link with the current language prefix', () => {
    renderWithProviders(<Navbar t={t} currentLang="en" />, { initialEntries: ['/en/gallery'] });

    expect(screen.getByRole('link', { name: 'nav.home' })).toHaveAttribute('href', '/en/home');
  });

  it('builds the Gallery link with the current language prefix', () => {
    renderWithProviders(<Navbar t={t} currentLang="vi" />, { initialEntries: ['/vi/home'] });

    expect(screen.getByRole('link', { name: 'nav.gallery' })).toHaveAttribute('href', '/vi/gallery');
  });

  it('switching language navigates to the same page under the new :lang segment', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Routes>
        <Route path="/:lang/gallery" element={<Navbar t={t} currentLang="vi" />} />
        <Route path="/en/gallery" element={<p>marker-en-gallery</p>} />
      </Routes>,
      { initialEntries: ['/vi/gallery'] },
    );

    await user.selectOptions(screen.getByRole('combobox'), 'en');

    expect(await screen.findByText('marker-en-gallery')).toBeInTheDocument();
  });
});
