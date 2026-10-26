'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const update = () => {
      const marker = window.scrollY + (document.getElementById('navbar')?.offsetHeight || 0) + 120;
      let current = sections[0].id;
      sections.forEach((section) => {
        if (section.offsetTop <= marker) current = section.id;
      });
      setActiveSection(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [sectionIds]);

  return activeSection;
}
