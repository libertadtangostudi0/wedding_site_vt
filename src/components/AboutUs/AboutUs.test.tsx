// src/components/AboutUs/AboutUs.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutUs } from './AboutUs';

const t = (key: string) => key;

describe('AboutUs', () => {
  it('renders a link for each provided social network', () => {
    render(
      <AboutUs
        t={t}
        socialLinks={[
          { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/example' },
          { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/example' },
        ]}
      />,
    );

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', 'https://facebook.com/example');
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', 'https://instagram.com/example');
  });

  it('opens social links in a new tab safely', () => {
    render(<AboutUs t={t} socialLinks={[{ id: 'facebook', label: 'Facebook', url: 'https://facebook.com/example' }]} />);

    const link = screen.getByRole('link', { name: 'Facebook' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});
