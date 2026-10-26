import Breadcrumbs from './breadcrumbs';
import PageHero from './page-hero';

const resources = [
  { title: 'Supreme Court of India', description: 'Official portal for the Supreme Court of India, providing access to cause lists, judgments, and case status.', href: 'https://main.sci.gov.in/', icon: 'fa-gavel' },
  { title: 'eCourts Services', description: 'National portal for searching case status, cause lists, and orders from District and High Courts across India.', href: 'https://ecourts.gov.in/ecourts_home/', icon: 'fa-balance-scale' },
  { title: 'Ministry of Law & Justice', description: 'Official website of the Ministry of Law and Justice, Government of India.', href: 'https://lawmin.gov.in/', icon: 'fa-landmark' },
  { title: 'Maharashtra State Courts', description: 'Case status and cause list portal for the High Court of Bombay and subordinate courts in Maharashtra.', href: 'https://court.mah.nic.in/courtweb/index.php', icon: 'fa-university' },
  { title: 'GRAS e-Challan', description: 'Government Receipt Accounting System for online payment of government taxes and fees in Maharashtra.', href: 'https://gras.mahakosh.gov.in/echallan/', icon: 'fa-receipt' },
  { title: 'Legal Service India', description: 'Legal research portal providing articles, statutes, and legal information about Indian law.', href: 'https://www.legalserviceindia.com/', icon: 'fa-book' },
];

export default function ResourceLinksPage() {
  return (
    <>
      <PageHero title="Important Links" />
      <Breadcrumbs current="Important Links" />
      <main id="main-content">
        <section className="section pt-0 resource-links-section">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Legal Resources <span className="gold-text">&amp; Portals</span></h2>
              <p className="section-description">Quick access to essential government portals and legal research databases.</p>
            </div>
            <div className="links-modern-grid">
              {resources.map((resource, index) => (
                <a key={resource.title} href={resource.href} target="_blank" rel="noopener noreferrer" className="link-resource-card" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <div className="link-icon-wrap"><i className={`fas ${resource.icon}`} aria-hidden="true" /></div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span className="link-action">Visit Portal <i className="fas fa-external-link-alt" aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
