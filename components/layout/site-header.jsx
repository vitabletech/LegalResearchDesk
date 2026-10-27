'use client';

import Link from 'next/link';
import BrandMark from './brand-mark';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import { homeNavigation, megaMenuGroups, practiceAreas, serviceTopics, sectionPageHref } from '@/lib/site-data';
import { useActiveSection } from '@/hooks/use-active-section';
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { useStickyHeader } from '@/hooks/use-sticky-header';

const toPracticeHref = (slug) => sectionPageHref(slug);
const topicBySlug = Object.fromEntries(serviceTopics.map((topic) => [topic.slug, topic]));
const marqueeMessages = [
  { text: 'Buying property? Review the documents before you commit.', href: sectionPageHref('property-purchase-review') },
  { text: 'Need legal guidance? Discuss your matter with an advocate.', href: sectionPageHref('services') },
  { text: 'An agreement to sign? Ask for a document review first.', href: sectionPageHref('document-review') },
  { text: 'Starting a business? Get the foundations in writing.', href: sectionPageHref('business-startup') },
];

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
  const menuTriggerRef = useRef(null);
  const menuCloseRef = useRef(null);
  const menuPanelRef = useRef(null);
  const sectionHref = (id) => (isHome ? `#${id}` : `/#${id}`);
  const navHref = (id) => id === 'about'
    ? sectionPageHref('about')
    : id === 'services'
      ? sectionPageHref('services')
      : id === 'gallery'
        ? sectionPageHref('gallery')
      : sectionHref(id);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const frame = window.requestAnimationFrame(() => menuCloseRef.current?.focus());
    const trapFocus = (event) => {
      if (event.key !== 'Tab') return;
      const focusable = [...(menuPanelRef.current?.querySelectorAll('a[href], button:not([disabled]), summary') || [])].filter((element) => element.getClientRects().length);
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', trapFocus);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('keydown', trapFocus);
      if (menuTriggerRef.current?.isConnected) menuTriggerRef.current.focus();
    };
  }, [menuOpen]);

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
      <nav id="navbar" className={`navbar${menuOpen ? ' drawer-open' : ''}`} aria-label="Main navigation">
        <div className="announcement-bar" aria-label="Legal service highlights">
          <div className="announcement-track">
            {[0, 1].map((copy) => <div className="announcement-set" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>{marqueeMessages.map(({ text, href }) => <a key={text} href={href} tabIndex={copy === 1 ? -1 : undefined}><i className="fas fa-circle" aria-hidden="true" />{text}<span>Explore <i className="fas fa-arrow-right" aria-hidden="true" /></span></a>)}</div>)}
          </div>
        </div>
        <button type="button" className={`mobile-drawer-backdrop${menuOpen ? ' active' : ''}`} aria-label="Close navigation menu" tabIndex={menuOpen ? 0 : -1} onClick={closeMenus} />
        <div className="nav-container">
          <Link href="/" className="logo site-brand brand-lockup" onClick={closeMenus} aria-label="Adarsh Singh and Associate home"><BrandMark /></Link>
          <button ref={menuTriggerRef} type="button" className={`hamburger${menuOpen ? ' active' : ''}`} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" /></button>
          <ul ref={menuPanelRef} id="primary-navigation" className={`nav-menu${menuOpen ? ' active' : ''}`}>
            <li className="mobile-drawer-header"><span className="mobile-drawer-brand"><BrandMark /></span><button ref={menuCloseRef} type="button" className="mobile-drawer-close" aria-label="Close navigation menu" onClick={closeMenus}><i className="fas fa-times" aria-hidden="true" /></button></li>
            {homeNavigation.slice(0, 5).map(([id, label]) => (
              <li key={id}>
                <Link className={`nav-link${(['about', 'services', 'gallery'].includes(id) && [ `/${id}`, `/${id}.html` ].includes(pathname)) || (isHome && activeSection === id) ? ' active' : ''}`} aria-current={(['about', 'services', 'gallery'].includes(id) && [ `/${id}`, `/${id}.html` ].includes(pathname)) ? 'page' : (isHome && activeSection === id) ? 'location' : undefined} href={navHref(id)} onClick={closeMenus}>{label}</Link>
              </li>
            ))}
            <li className={`dropdown mega-nav-item${dropdownOpen ? ' active' : ''}`}><button type="button" className="nav-link dropdown-toggle" aria-expanded={dropdownOpen} aria-controls="practice-navigation" aria-haspopup="true" onClick={() => setDropdownOpen((open) => !open)}>Explore Services <i className="fas fa-chevron-down ml-1" aria-hidden="true" /></button><div id="practice-navigation" className="mega-menu"><div className="mega-menu-intro"><strong>How can we help?</strong><p>Explore legal support for property, personal matters and business documents.</p></div><div className="mega-menu-grid">{megaMenuGroups.map((group) => <div className="mega-menu-group" key={group.title}><h3>{group.title}</h3>{group.slugs.map((slug) => <a href={sectionPageHref(slug)} onClick={closeMenus} key={slug}>{topicBySlug[slug].title}</a>)}</div>)}<div className="mega-menu-group"><h3>More practice areas</h3>{practiceAreas.map((area) => <a href={toPracticeHref(area.slug)} onClick={closeMenus} key={area.slug}>{area.title}</a>)}</div></div><div className="mega-menu-footer"><span>Not sure where to start? Tell us what you need.</span><a href={sectionHref('contact')} onClick={closeMenus}>Contact us <i className="fas fa-arrow-right" aria-hidden="true" /></a></div></div></li>
            <li><a href={sectionPageHref('deed')} className="nav-link" onClick={closeMenus}>Deed</a></li>
            <li><a href={sectionPageHref('blog')} className="nav-link" onClick={closeMenus}>Blog</a></li>
            <li className="nav-connect-item">
              <details className="nav-connect">
                <summary><i className="fas fa-comment-dots" aria-hidden="true" /><span>Connect with us</span><i className="fas fa-chevron-down nav-connect-chevron" aria-hidden="true" /></summary>
                <div className="nav-connect-popover">
                  <span className="nav-connect-heading">Choose how to reach us</span>
                  <a href="https://wa.me/919424392871?text=Hello%2C%20I%20would%20like%20a%20free%20first%20legal%20consultation." target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp chat</a>
                  <a href="https://ig.me/m/adv.adarshsinghofficial" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true" /> Instagram message</a>
                  <a href="tel:+919424392871"><i className="fas fa-phone" aria-hidden="true" /> Call us</a>
                  <a href="mailto:info.itsyogiraj@gmail.com"><i className="fas fa-envelope" aria-hidden="true" /> Email us</a>
                  <Link href={sectionHref('contact')} onClick={closeMenus}><i className="fas fa-address-card" aria-hidden="true" /> Contact details</Link>
                </div>
              </details>
            </li>
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
