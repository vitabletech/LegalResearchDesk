'use client';

import { useEffect } from 'react';

export function useStickyHeader() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return undefined;

    const update = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
}
