'use client';

import { useEffect, useState } from 'react';

const directions = [5, 8, 7, 6, 3, 0, 1, 2];

export function useAvatarPointer(ref) {
  const [direction, setDirection] = useState(4);
  useEffect(() => {
    const canFollowPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canFollowPointer || prefersReducedMotion) return undefined;

    const aim = (event) => {
      const box = ref.current?.getBoundingClientRect();
      if (!box) return;
      const x = event.clientX - box.left - box.width / 2;
      const y = event.clientY - box.top - box.height / 2;
      if (Math.hypot(x, y) < 55) {
        setDirection(4);
        return;
      }
      const sector = (Math.round(Math.atan2(y, x) / (Math.PI / 4)) + 8) % 8;
      setDirection(directions[sector]);
    };

    window.addEventListener('pointermove', aim, { passive: true });
    return () => window.removeEventListener('pointermove', aim);
  }, [ref]);

  return direction;
}
