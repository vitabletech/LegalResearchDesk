import Link from 'next/link';
import BrandMark from './brand-mark';
import { sectionPageHref } from '@/lib/site-data';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <Link href="/" className="footer-logo site-footer-brand brand-lockup mb-3" aria-label="Adarsh Singh and Associate home"><BrandMark /></Link>
        <div className="footer-socials mb-4">
          <a href="https://www.linkedin.com/in/adarsh-singh-kushwah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
          <a href="mailto:info.itsyogiraj@gmail.com" aria-label="Email"><i className="fas fa-envelope" aria-hidden="true" /></a>
          <a href="https://wa.me/919424392871" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true" /></a>
          <a href="https://ig.me/m/adv.adarshsinghofficial" target="_blank" rel="noopener noreferrer" aria-label="Message on Instagram"><i className="fab fa-instagram" aria-hidden="true" /></a>
        </div>
        <nav className="footer-legal-links" aria-label="Legal information">
          <Link href={sectionPageHref('privacy-policy')}>Privacy Policy</Link>
          <Link href={sectionPageHref('terms-of-use')}>Terms of Use</Link>
          <Link href={sectionPageHref('disclaimer')}>Disclaimer</Link>
          <Link href={sectionPageHref('about')}>About</Link>
          <a href={sectionPageHref('blog')}>Blog</a>
          <a href="/sitemap.xml">Sitemap</a>
          <a href="mailto:info.itsyogiraj@gmail.com">Contact</a>
        </nav>
        <p className="footer-copyright">© {new Date().getFullYear()} Adarsh Singh &amp; Associate. All Rights Reserved.</p>
        <p className="footer-developer-credit">Developed by <a href="https://vitabletech.in/" target="_blank" rel="noopener noreferrer">VitableTech Team</a></p>
      </div>
    </footer>
  );
}
