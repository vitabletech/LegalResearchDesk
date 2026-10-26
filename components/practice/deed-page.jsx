import Link from 'next/link';
import Breadcrumbs from './breadcrumbs';
import PageHero from './page-hero';
import DeedTemplateGallery from './deed-template-gallery';

export default function DeedPage() {
  return (
    <>
      <PageHero title="Deed Documentation" />
      <Breadcrumbs current="Deed" />
      <main id="main-content">
        <section className="section pt-0 deed-content">
          <div className="container text-center" data-aos="fade-up">
            <i className="fas fa-file-signature text-primary mb-3 deed-icon" aria-hidden="true" />
            <h2 className="mb-4 text-primary">Deed Templates</h2>
            <p className="text-muted deed-lead">Browse and download sample deed templates. These are starting points only; the right wording, stamp duty, registration and execution requirements depend on your circumstances and location.</p>
            <DeedTemplateGallery />
            <p className="deed-template-note">Please have any document reviewed for your specific transaction before signing or relying on it.</p>
            <div className="mt-5">
              <a href={`https://wa.me/919424392871?text=${encodeURIComponent('Hello Adarsh, I would like to discuss document support.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Request document review</a>
              <Link href="/" className="btn btn-outline text-primary deed-home-link">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
