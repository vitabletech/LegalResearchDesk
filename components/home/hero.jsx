import Image from 'next/image';
const whatsappHref = `https://wa.me/919424392871?text=${encodeURIComponent('Hello, I would like a free first legal consultation.')}`;
const advocateHref = `https://wa.me/919424392871?text=${encodeURIComponent('Hello, please help me find an advocate for my legal matter.')}`;

export default function HomeHero() {
  return (
    <header id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-copy" data-aos="fade-up">
          <p className="hero-subtitle">ADARSH SINGH &amp; ASSOCIATE</p>
          <h1 id="hero-heading" className="hero-title">Lawyers Across India. Legal Support Wherever You Are.</h1>
          <p className="hero-tagline">Find the right advocate. Get trusted legal support for civil, criminal, family, property, and corporate matters.</p>
          <p className="hero-promise">Instant legal help, anytime, anywhere. One call. The right legal support.</p>
          <div className="hero-buttons">
            <a href={whatsappHref} target="_blank" className="btn btn-primary" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" aria-hidden="true" /> Get Free Consultation
            </a>
            <a href={advocateHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="fas fa-user-tie" aria-hidden="true" /> Find Your Advocate
            </a>
          </div>
        </div>
        <div className="hero-portrait" data-aos="fade-left" data-aos-delay="150">
          <Image src="/assets/gallery/9.jpeg" alt="Adarsh Singh Kushwah in his office, with legal bookshelves behind him" width={961} height={1280} priority sizes="(max-width: 768px) 70vw, 360px" />
          <span>Advocate &amp; Legal Consultant</span>
        </div>
      </div>
    </header>
  );
}
