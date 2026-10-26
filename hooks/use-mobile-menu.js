'use client';

import { useCallback, useEffect, useState } from 'react';

export function useMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenus = useCallback(() => {
    setMenuOpen(false);
    setPracticeOpen(false);
    setDropdownOpen(false);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', practiceOpen || menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen, practiceOpen]);

  useEffect(() => {
    if (!menuOpen && !practiceOpen && !dropdownOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenus();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, practiceOpen, dropdownOpen, closeMenus]);

  return {
    menuOpen,
    practiceOpen,
    dropdownOpen,
    setMenuOpen,
    setPracticeOpen,
    setDropdownOpen,
    closeMenus,
  };
}
