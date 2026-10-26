'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import { homeNavigation, practiceAreas, sectionPageHref } from '@/lib/site-data';
import { useActiveSection } from '@/hooks/use-active-section';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { useStickyHeader } from '@/hooks/use-sticky-header';

const toPracticeHref = (slug) => sectionPageHref(slug);

function SectionLink({ id, label, active, onClick, mobile = false }) {
  const href = `/${id === 'home' ? '#home' : `#${id}`}`;
  return <Link className={`${mobile ? 'mobile-nav-item' : 'nav-link'}${active ? ' active' : ''}`} href={href} onClick={onClick} aria-current={active ? 'location' : undefined}>{mobile && <i className={`fas ${id === 'home' ? 'fa-home' : id === 'experience' ? 'fa-briefcase' : id === 'services' ? 'fa-balance-scale' : 'fa-envelope'}`} aria-hidden="true" />}{mobile ? <span>{label}</span> : label}</Link>;
}

export default function SiteHeader() {
  useStickyHeader();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const sectionIds = useMemo(() => homeNavigation.map(([id]) => id), []);
  const activeSection = useActiveSection(sectionIds);
  const { menuOpen, practiceOpen, dropdownOpen, setMenuOpen, setPracticeOpen, setDropdownOpen, closeMenus } = useMobileMenu();
  const practiceTriggerRef = useRef(null);
  const practiceDialogRef = useRef(null);
  const sectionHref = (id) => (isHome ? `#${id}` : `/#${id}`);
  const navHref = (id) => id === 'about'
    ? sectionPageHref('about')
    : id === 'services'
      ? sectionPageHref('services')
      : id === 'gallery'
        ? sectionPageHref('gallery')
      : sectionHref(id);

  useEffect(() => {
    if (!practiceOpen) return undefined;
    const frame = window.requestAnimationFrame(() => practiceDialogRef.current?.querySelector('button, a')?.focus());
    const trapFocus = (event) => {
      if (event.key !== 'Tab') return;
      const focusable = practiceDialogRef.current?.querySelectorAll('button:not([disabled]), a[href]');
      if (!focusable?.length) return;
      if (event.shiftKey && document.activeElement === focusable[0]) {
        event.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if (!event.shiftKey && document.activeElement === focusable[focusable.length - 1]) {
        event.preventDefault();
        focusable[0].focus();
      }
    };
    window.addEventListener('keydown', trapFocus);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('keydown', trapFocus);
      if (practiceTriggerRef.current?.isConnected) practiceTriggerRef.current.focus();
    };
  }, [practiceOpen]);

  return (
    <>
      <nav id="navbar" className="navbar" aria-label="Main navigation">
        <div className="nav-container">
          <Link href="/" className="logo site-brand" onClick={closeMenus} aria-label="Adarsh Singh home"><Image src="/assets/brand-logo.png" alt="Adarsh Singh" width={44} height={56} priority /></Link>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" /></button>
          <ul id="primary-navigation" className={`nav-menu${menuOpen ? ' active' : ''}`}>
            {homeNavigation.slice(0, 5).map(([id, label]) => (
              <li key={id}>
                <Link className={`nav-link${(['about', 'services', 'gallery'].includes(id) && [ `/${id}`, `/${id}.html` ].includes(pathname)) || (isHome && activeSection === id) ? ' active' : ''}`} aria-current={(['about', 'services', 'gallery'].includes(id) && [ `/${id}`, `/${id}.html` ].includes(pathname)) ? 'page' : (isHome && activeSection === id) ? 'location' : undefined} href={navHref(id)} onClick={closeMenus}>{label}</Link>
              </li>
            ))}
            <li className={`dropdown${dropdownOpen ? ' active' : ''}`}><button type="button" className="nav-link dropdown-toggle" aria-expanded={dropdownOpen} aria-controls="practice-navigation" aria-haspopup="true" onClick={() => setDropdownOpen((open) => !open)}>Areas of Practice <i className="fas fa-chevron-down ml-1" aria-hidden="true" /></button><ul id="practice-navigation" className="dropdown-menu">{practiceAreas.map((area) => <li key={area.slug}><a href={toPracticeHref(area.slug)} onClick={closeMenus}>{area.title}</a></li>)}<li><a href={sectionPageHref('important-links')} className="gold-text" onClick={closeMenus}>Important Links</a></li></ul></li>
            <li><a href={sectionPageHref('deed')} className="nav-link" onClick={closeMenus}>Deed</a></li>
            <li><Link href={sectionHref('contact')} className="nav-link btn-nav" onClick={closeMenus}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <nav className="mobile-bottom-nav" aria-label="Quick navigation">
        <SectionLink id="home" label="Home" active={isHome && activeSection === 'home'} onClick={closeMenus} mobile />
        <button type="button" className="mobile-nav-item" id="mobile-practice-trigger" aria-expanded={practiceOpen} aria-haspopup="dialog" onClick={(event) => { practiceTriggerRef.current = event.currentTarget; setPracticeOpen(true); }}><i className="fas fa-th-large" aria-hidden="true" /><span>Practice</span></button>
        <a href={sectionPageHref('deed')} className="mobile-nav-item" onClick={closeMenus}><i className="fas fa-file-contract" aria-hidden="true" /><span>Deed</span></a>
        <Link href={sectionPageHref('services')} className="mobile-nav-item" onClick={closeMenus}><i className="fas fa-balance-scale" aria-hidden="true" /><span>Services</span></Link>
        <Link href={sectionHref('contact')} className="mobile-nav-item" onClick={closeMenus}><i className="fas fa-envelope" aria-hidden="true" /><span>Contact</span></Link>
      </nav>
      <div className={`more-menu-overlay${practiceOpen ? ' active' : ''}`} aria-hidden={!practiceOpen} onMouseDown={(event) => { if (event.target === event.currentTarget) setPracticeOpen(false); }}>
        <div ref={practiceDialogRef} className="more-menu-content" role="dialog" aria-modal="true" aria-labelledby="practice-menu-title"><div className="more-menu-header"><h3 id="practice-menu-title">Areas of Practice</h3><button type="button" className="close-more-menu" aria-label="Close practice menu" onClick={() => setPracticeOpen(false)}><i className="fas fa-times" aria-hidden="true" /></button></div><div className="more-menu-grid">{practiceAreas.map((area) => <a key={area.slug} href={toPracticeHref(area.slug)} className="more-menu-item" onClick={closeMenus}><div className="menu-icon"><i className={`fas ${area.icon}`} aria-hidden="true" /></div><span>{area.title}</span></a>)}<a href={sectionPageHref('important-links')} className="more-menu-item" onClick={closeMenus}><div className="menu-icon"><i className="fas fa-external-link-alt" aria-hidden="true" /></div><span>Important Links</span></a><a href={sectionPageHref('deed')} className="more-menu-item" onClick={closeMenus}><div className="menu-icon"><i className="fas fa-file-contract" aria-hidden="true" /></div><span>Deed</span></a>{['experience', 'skills'].map((id) => <Link key={id} href={sectionPageHref('about', id)} className="more-menu-item" onClick={closeMenus}><div className="menu-icon"><i className={`fas ${id === 'skills' ? 'fa-star' : 'fa-briefcase'}`} aria-hidden="true" /></div><span>{id === 'skills' ? 'Skills' : 'Experience'}</span></Link>)}</div></div>
      </div>
    </>
  );
}
