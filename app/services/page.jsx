import Link from 'next/link';
import { lifeStageGroups, services } from '@/lib/services-data';
import { sectionPageHref, siteUrl } from '@/lib/site-data';

export const metadata = {
  title: 'Legal Services',
  description: 'Explore online consultations, document drafting, family and student documentation, business support, legal research, and compliance services.',
  alternates: { canonical: '/services.html' },
  openGraph: {
    title: 'Legal Services | Adarsh Singh Kushwah',
    description: 'Online consultations, document drafting, family and student documentation, business support, legal research, and compliance services.',
    url: `${siteUrl}/services.html`,
    type: 'website',
  },
};

const enquiryHref = (title) => `https://wa.me/919424392871?text=${encodeURIComponent(`Hello Adarsh, I would like to discuss ${title}.`)}`;

export default function ServicesPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-page-hero">
        <div className="container">
          <span className="subtitle">Services</span>
          <h1>Legal Services &amp; Expertise</h1>
          <p>Online consultations, document preparation, and guidance for individuals, families, students, and businesses, alongside legal research and review support.</p>
        </div>
      </section>
      <section className="section section-alt" aria-labelledby="service-delivery-heading">
        <div className="container">
          <div className="service-delivery-note" data-aos="fade-up">
            <span className="subtitle">Remote support</span>
            <h2 id="service-delivery-heading">Consult and receive documents online</h2>
            <p>Where suitable, consultations can be arranged by video or audio call. Drafts can be delivered electronically in Word or PDF format. Contact directly to discuss availability and agree on scope; some documents may require separate in-person signing or execution.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map(({ icon, title, description, audience }, index) => (
              <article className="service-box" data-aos="fade-up" data-aos-delay={String((index % 3 + 1) * 100)} key={title}>
                <div className="service-icon-wrap"><i className={`fas ${icon}`} aria-hidden="true" /></div>
                <h2>{title}</h2><p>{description}</p><p className="service-audience">{audience}</p>
                <a className="service-contact-link" href={enquiryHref(title)} target="_blank" rel="noopener noreferrer">Discuss this service <i className="fas fa-arrow-right" aria-hidden="true" /></a>
              </article>
            ))}
          </div>
          <div className="text-center mt-4"><Link className="btn btn-primary" href={sectionPageHref('about')}>About Adarsh</Link></div>
        </div>
      </section>
      <section className="section section-alt" aria-labelledby="life-stage-heading">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="subtitle">Support by life stage</span>
            <h2 id="life-stage-heading" className="section-title">Services for different <span className="gold-text">life stages</span></h2>
            <p className="section-description">These age ranges are broad audience guides, not eligibility limits. The right support depends on each person’s needs.</p>
          </div>
          <div className="services-grid">
            {lifeStageGroups.map(({ age, title, description }, index) => (
              <article className="service-box" data-aos="fade-up" data-aos-delay={String((index % 3 + 1) * 100)} key={title}>
                <span className="subtitle">{age}</span>
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
