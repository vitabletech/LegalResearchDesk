import Image from 'next/image';
import { sectionPageHref } from '@/lib/site-data';

const whatsappHref = `https://wa.me/919424392871?text=${encodeURIComponent('Hello Adarsh, I would like to discuss a legal research or document review requirement.')}`;

export default function HomeHero() {
  return (
    <header id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-copy" data-aos="fade-up">
          <p className="hero-subtitle">Adarsh Singh Kushwah · Legal Research &amp; Document Review</p>
          <h1 id="hero-heading" className="hero-title">Legal research and compliance support for a global audience</h1>
          <p className="hero-tagline">Research, document review, and cyber incident review support for legal teams and organizations.</p>
          <div className="hero-buttons">
            <a href={whatsappHref} target="_blank" className="btn btn-primary" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" aria-hidden="true" /> Discuss your requirements
            </a>
            <a href={sectionPageHref('services')} className="btn btn-secondary">
              <i className="fas fa-arrow-right" aria-hidden="true" /> Explore services
            </a>
          </div>
        </div>
        <div className="hero-portrait" data-aos="fade-left" data-aos-delay="150">
          <Image src="/assets/gallery/9.jpeg" alt="Adarsh Singh Kushwah in his office, with legal bookshelves behind him" width={961} height={1280} priority sizes="(max-width: 768px) 70vw, 360px" />
          <span>Legal research · Document support</span>
        </div>
      </div>
    </header>
  );
}
