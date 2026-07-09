// src/App.langSync.test.tsx
//
// Regression test for the reported bug: after switching the Navbar to
// English and clicking "Home", the Home page used to render in
// Vietnamese, because Home kept its own independent language state.
//
// Now the URL's `:lang` segment is the single source of truth, so this
// test drives the app the same way a user would: through the Navbar.
import { describe, it, expect } from 'vitest';
import { waitFor } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './test/renderWithProviders';
import { NavbarPage, HomePagePO } from './test/pageObjects/NavbarPage';

describe('Navigating Home preserves the currently selected language', () => {
  it('keeps showing English after switching language and clicking Home', async () => {
    renderWithProviders(<App />, { initialEntries: ['/vi/gallery'], initialLang: 'vi' });

    const navbar = new NavbarPage();
    const homePage = new HomePagePO();

    await navbar.switchLanguageTo('en');
    await navbar.clickHome();

    await waitFor(() => {
      expect(homePage.getHeroHeading()).toHaveTextContent('Exquisite Wedding Gowns');
    });
  });

  it('stays in Vietnamese when Vietnamese was never changed', async () => {
    renderWithProviders(<App />, { initialEntries: ['/vi/gallery'], initialLang: 'vi' });

    const navbar = new NavbarPage();
    const homePage = new HomePagePO();

    await navbar.clickHome();

    await waitFor(() => {
      expect(homePage.getHeroHeading()).toHaveTextContent('Vay cuoi tinh te');
    });
  });
});
