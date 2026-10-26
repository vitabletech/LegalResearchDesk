import Breadcrumbs from './breadcrumbs';
import PageHero from './page-hero';
import PracticeSidebar from './practice-sidebar';

export default function PracticePage({ page }) {
  const enquiryHref = `https://wa.me/919424392871?text=${encodeURIComponent(`Hello Adarsh, I would like to discuss ${page.title} document or research support.`)}`;
  return (
    <>
      <PageHero title={page.title} />
      <Breadcrumbs current={page.title} section="Areas of Practice" />
      <main id="main-content">
        <section className="section pt-0">
          <div className="container">
            <div className="practice-layout">
              <div className="practice-main-content">
                <h2 className="mb-4 text-primary">{page.title} document support</h2>
                <p className="text-muted practice-lead">{page.summary} The scope depends on the documents, the question to be researched, and the support required.</p>
                <h3>Matters you can discuss</h3>
                <ul>{page.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                <h3>How to get started</h3>
                <p>Send a brief description of the type of support you need and the relevant location or jurisdiction. Adarsh can then discuss availability, the documents to review, and the proposed scope. Please avoid sending confidential case details in an initial unsecured message.</p>
                <p>This page is general information; it does not give advice on the facts of a particular matter or promise a specific outcome.</p>
                <a href={enquiryHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Discuss {page.title.toLowerCase()} support</a>
              </div>
              <PracticeSidebar currentSlug={page.slug} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
