'use client';

import { useEffect, useRef, useState } from 'react';
import { useAvatarPointer } from '@/hooks/use-avatar-pointer';
import { useAvatarGuide } from '@/hooks/use-avatar-guide';

const whatsappHref = `https://wa.me/919424392871?text=${encodeURIComponent('Hello Adarsh, I would like to discuss a legal guidance or document drafting requirement.')}`;

export default function FloatingAvatar() {
  const [open, setOpen] = useState(false);
  const [reaction, setReaction] = useState(null);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const reactionTimer = useRef(null);
  const direction = useAvatarPointer(triggerRef);
  const guide = useAvatarGuide(open);
  const positionStyle = !open && guide.position
    ? { left: guide.position.left, top: guide.position.top, right: 'auto', bottom: 'auto' }
    : undefined;
  const guideOnLeft = !open && guide.position?.left < (typeof window === 'undefined' ? 0 : window.innerWidth / 2);

  useEffect(() => () => window.clearTimeout(reactionTimer.current), []);

  const onAvatarClick = () => {
    setOpen((value) => !value);
    setReaction(open ? 0 : 8);
    window.clearTimeout(reactionTimer.current);
    reactionTimer.current = window.setTimeout(() => setReaction(null), 650);
  };

  const frame = reaction ?? direction;
  const position = `${(frame % 3) * 50}% ${Math.floor(frame / 3) * 50}%`;

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className={`floating-avatar${guide.visible && !open ? ' is-guiding' : ''}${guideOnLeft ? ' is-left' : ''}`} ref={rootRef} style={positionStyle}>
      <section className="avatar-contact-card" id="avatar-contact-card" aria-labelledby="avatar-contact-title" hidden={!open}>
          <button className="avatar-card-close" type="button" aria-label="Close contact card" onClick={() => setOpen(false)}>
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          <p className="avatar-card-eyebrow">Adv. Adarsh Singh Kushwah</p>
          <h2 id="avatar-contact-title">How can I help?</h2>
          <p>Contact me to discuss legal guidance, document drafting, or research support.</p>
          <a href={whatsappHref} className="avatar-contact-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp
          </a>
          <a href="https://ig.me/m/adv.adarshsinghofficial" className="avatar-contact-link avatar-instagram-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" /> Instagram</a>
          <a href="mailto:info.itsyogiraj@gmail.com" className="avatar-email-link">Send an email</a>
      </section>
      <p className="avatar-guide-bubble" aria-hidden="true" hidden={!guide.visible || open}>{guide.message}</p>
      <button
        ref={triggerRef}
        className="floating-avatar-trigger"
        type="button"
        aria-label={open ? 'Close contact with Adv. Adarsh Singh Kushwah' : 'Contact Adv. Adarsh Singh Kushwah'}
        aria-expanded={open}
        aria-controls="avatar-contact-card"
        onClick={onAvatarClick}
      >
        <span
          className="avatar-sprite"
          aria-hidden="true"
          style={{ backgroundPosition: position, backgroundImage: `url(/mascots/adarsh-advocate-${reaction === null ? 'directions' : 'reactions'}.png)` }}
        />
      </button>
    </div>
  );
}
