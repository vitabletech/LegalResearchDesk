import Link from 'next/link';
import Breadcrumbs from './breadcrumbs';
import PageHero from './page-hero';

export default function DeedPage() {
  return (
    <>
      <PageHero title="Deed Documentation" />
      <Breadcrumbs current="Deed" />
      <main id="main-content">
        <section className="section pt-0 deed-content">
          <div className="container text-center" data-aos="fade-up">
            <i className="fas fa-file-signature text-primary mb-3 deed-icon" aria-hidden="true" />
            <h2 className="mb-4 text-primary">Document Support</h2>
            <p className="text-muted deed-lead">This site does not currently provide downloadable deed templates. For information about document research or review support, contact Adarsh to discuss the scope of your requirements.</p>
            <div className="mt-5">
              <a href={`https://wa.me/919424392871?text=${encodeURIComponent('Hello Adarsh, I would like to discuss document support.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Discuss document support</a>
              <Link href="/" className="btn btn-outline text-primary deed-home-link">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
