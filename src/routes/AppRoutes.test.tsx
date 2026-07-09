// src/routes/AppRoutes.test.tsx
import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import { renderWithProviders } from '../test/renderWithProviders';

describe('AppRoutes localization fallbacks', () => {
  it('redirects "/" to the default language home page', async () => {
    renderWithProviders(<App />, { initialEntries: ['/'] });

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
  });

  it('falls back to the default language when :lang is not supported', async () => {
    renderWithProviders(<App />, { initialEntries: ['/fr/home'] });

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vay cuoi tinh te');
    });
  });
});
