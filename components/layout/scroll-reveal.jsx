'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { usePathname } from 'next/navigation';

export default function ScrollReveal({ children }) {
  useScrollReveal(usePathname());
  return children;
}
