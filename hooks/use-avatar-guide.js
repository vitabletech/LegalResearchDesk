'use client';

import { useEffect, useState } from 'react';

const DOCK = { right: 24, bottom: 22 };
const MARGIN = 18;
const AVATAR_SIZE = 96;

function guidanceFor(element) {
  const target = element?.closest?.('a, button, input, textarea, select, [role="button"], img, article, section, header');
  if (!target || target.closest('.floating-avatar, .modal, .more-menu-overlay')) return null;

  const section = target.closest('section, header');
  const area = `${section?.id || ''} ${section?.className || ''}`.toLowerCase();
  const name = (target.getAttribute('aria-label') || target.getAttribute('alt') || target.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);

  if (target.matches('input, textarea, select')) return { target, message: 'Take your time. Please avoid entering sensitive case details here.' };
  if (target.matches('img')) return { target, message: area.includes('gallery') ? 'Browse this image, then explore the full gallery.' : 'Here is a closer look. Click if you see a link.' };
  if (area.includes('contact') || /whatsapp|email|contact|enquir|discuss/i.test(name)) return { target, message: 'Have a question? Choose a contact option and tell me what support you need.' };
  if (area.includes('service') || /service/i.test(name)) return { target, message: 'Explore the services to find the right kind of research or document support.' };
  if (area.includes('gallery')) return { target, message: 'These resources offer a quick view of the work and information here.' };
  if (area.includes('about')) return { target, message: 'Learn about my background and the way I work.' };
  if (area.includes('home') || area.includes('hero')) return { target, message: 'Welcome! Explore the site, or tap me whenever you need help.' };
  if (target.matches('a, button, [role="button"]')) return { target, message: name ? `You can open ${name.slice(0, 42)} here.` : 'Select this to explore more.' };
  if (target.matches('article')) return { target, message: 'Take a look at this section for more details.' };
  return null;
}

export function useAvatarGuide(open) {
  const [guide, setGuide] = useState({ message: '', position: null, visible: false });

  useEffect(() => {
    if (open) setGuide({ message: '', position: null, visible: false });
  }, [open]);

  useEffect(() => {
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!pointer.matches || reducedMotion.matches) return undefined;

    let hoverTimer;
    let dismissTimer;
    let activeTarget = null;

    const dock = () => {
      activeTarget = null;
      setGuide({ message: '', position: null, visible: false });
    };

    const show = (item) => {
      const rect = item.target.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const putOnRight = rect.left + rect.width / 2 < window.innerWidth / 2;
      const left = putOnRight ? rect.right + MARGIN : rect.left - AVATAR_SIZE - MARGIN;
      const top = Math.max(105, Math.min(window.innerHeight - AVATAR_SIZE - MARGIN, rect.top + Math.min(rect.height / 2, 80) - AVATAR_SIZE / 2));
      setGuide({
        message: item.message,
        position: { left: Math.max(MARGIN, Math.min(window.innerWidth - AVATAR_SIZE - MARGIN, left)), top },
        visible: true,
      });
      window.clearTimeout(dismissTimer);
      dismissTimer = window.setTimeout(dock, 4500);
    };

    const onHover = (event) => {
      if (open) return;
      const item = guidanceFor(event.target);
      if (!item || item.target === activeTarget) return;
      activeTarget = item.target;
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => show(item), 180);
    };

    const onScroll = () => {
      window.clearTimeout(hoverTimer);
      if (activeTarget) dock();
    };

    document.addEventListener('pointerover', onHover, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', dock);
    return () => {
      window.clearTimeout(hoverTimer);
      window.clearTimeout(dismissTimer);
      document.removeEventListener('pointerover', onHover);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', dock);
    };
  }, [open]);

  return { ...guide, dock: DOCK };
}
