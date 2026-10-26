import Link from 'next/link';
import { services } from '@/lib/services-data';
import { sectionPageHref } from '@/lib/site-data';

const enquiryHref = (title) => `https://wa.me/919424392871?text=${encodeURIComponent(`Hello Adarsh, I would like to discuss ${title}.` )}`;

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="subtitle">What I Do</span>
          <h2 className="section-title">Legal Services &amp; <span className="gold-text">Expertise</span></h2>
          <p className="section-description">Documentation assistance, research, and review support for individuals, businesses, and legal teams.</p>
        </div>
        <div className="services-grid">
          {services.slice(0, 3).map(({ icon, title, description, audience }, index) => (
            <article className="service-box" data-aos="fade-up" data-aos-delay={String((index + 1) * 100)} key={title}>
              <div className="service-icon-wrap"><i className={`fas ${icon}`} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{description}</p><p className="service-audience">{audience}</p>
              <a className="service-contact-link" href={enquiryHref(title)} target="_blank" rel="noopener noreferrer">Discuss this service <i className="fas fa-arrow-right" aria-hidden="true" /></a>
            </article>
          ))}
        </div>
        <div className="text-center mt-4" data-aos="fade-up">
          <Link className="btn btn-outline" href={sectionPageHref('services')}>See all services <i className="fas fa-arrow-right" /></Link>
        </div>
      </div>
    </section>
  );
}
