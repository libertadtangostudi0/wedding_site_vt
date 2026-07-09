// src/hooks/useScrollToHash.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useScrollToHash } from './useScrollToHash';

const TestPage = () => {
  useScrollToHash();
  return <div id="about-us">About Us content</div>;
};

describe('useScrollToHash', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('scrolls the element matching the current hash into view', () => {
    render(
      <MemoryRouter initialEntries={['/en/home#about-us']}>
        <TestPage />
      </MemoryRouter>,
    );

    const target = document.getElementById('about-us');
    expect(target?.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('does nothing when there is no hash in the URL', () => {
    render(
      <MemoryRouter initialEntries={['/en/home']}>
        <TestPage />
      </MemoryRouter>,
    );

    const target = document.getElementById('about-us');
    expect(target?.scrollIntoView).not.toHaveBeenCalled();
  });
});
