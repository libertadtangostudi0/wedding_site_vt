// src/hooks/useScrollToHash.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the element whose id matches the current URL hash into view.
 * Needed because in-page anchors (e.g. Navbar "About Us" -> #about-us)
 * are React Router navigations, not native browser navigations, so the
 * browser's own hash-scrolling never kicks in.
 */
export function useScrollToHash(): void {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = hash.replace('#', '');
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);
}
