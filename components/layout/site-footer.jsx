import Link from 'next/link';
import Image from 'next/image';
import BrandMark from './brand-mark';
import { sectionPageHref } from '@/lib/site-data';
import { blogPosts } from '@/lib/blog-data';

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
        <div className="footer-discovery">
          <nav aria-label="Explore the website"><h2>Explore</h2><a href="/">Home</a><a href={sectionPageHref('about')}>About us</a><a href={sectionPageHref('services')}>Legal services</a><a href={sectionPageHref('deed')}>Deed resources</a><a href={sectionPageHref('blog')}>Legal guides</a><a href="/#contact">Contact</a></nav>
          <nav aria-label="Popular legal services"><h2>Popular services</h2><a href={sectionPageHref('property-purchase-review')}>Property purchase review</a><a href={sectionPageHref('document-review')}>Document review</a><a href={sectionPageHref('cheque-bounce')}>Cheque bounce</a><a href={sectionPageHref('online-blackmail')}>Cyber incident help</a></nav>
          <nav aria-label="Recent legal guides"><h2>Recent guides</h2>{blogPosts.slice(0, 3).map((post) => <a className="footer-recent-guide" key={post.slug} href={sectionPageHref(`blog/${post.slug}`)}><Image src={post.image} alt="" width={76} height={56} sizes="64px" /><span>{post.title}</span></a>)}</nav>
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
