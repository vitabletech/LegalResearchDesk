'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useGalleryDialog(images) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const close = useCallback(() => setActiveIndex(null), []);
  const open = useCallback((index, event) => {
    triggerRef.current = event?.currentTarget || document.activeElement;
    setActiveIndex(index);
  }, []);
  const move = useCallback((step) => setActiveIndex((index) => (index === null ? null : (index + step + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll('button:not([disabled])');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', onKeyDown);
      if (triggerRef.current?.isConnected) triggerRef.current.focus();
    };
  }, [isOpen, close, move]);

  return { activeIndex, isOpen, open, close, move, dialogRef, closeButtonRef };
}
