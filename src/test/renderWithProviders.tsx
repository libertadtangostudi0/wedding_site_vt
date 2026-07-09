// src/test/renderWithProviders.tsx
import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { createTestI18n } from './i18nTestInstance';
import type { SupportedLanguage } from '../constants/i18n';

interface RenderOptions {
  initialEntries: string[];
  initialLang?: SupportedLanguage;
}

/** Renders a component with a real MemoryRouter and a deterministic i18n instance. */
export function renderWithProviders(ui: ReactElement, { initialEntries, initialLang = 'vi' }: RenderOptions) {
  const testI18n = createTestI18n(initialLang);

  return {
    i18n: testI18n,
    ...render(
      <I18nextProvider i18n={testI18n}>
        <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>
      </I18nextProvider>,
    ),
  };
}
