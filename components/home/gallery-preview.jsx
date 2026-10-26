import Image from 'next/image';
import Link from 'next/link';
import { galleryImages } from '@/lib/gallery-data';
import { sectionPageHref } from '@/lib/site-data';

export default function GalleryPreview() {
  return (
    <section className="section bg-light" aria-labelledby="gallery-preview-title">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="subtitle">Client Information Library</span>
          <h2 id="gallery-preview-title" className="section-title">Legal Resources <span className="gold-text">Gallery</span></h2>
          <p className="section-description">Browse a selection of legal information and client resources.</p>
        </div>
        <div className="gallery-grid mt-4">
          {galleryImages.slice(0, 3).map((image, index) => (
            <Link key={image.src} className="gallery-item" href={sectionPageHref('gallery')} data-aos="fade-up" data-aos-delay={String(index * 100)} aria-label={`View ${image.title} in the full gallery`}>
              <Image src={image.src} alt={image.alt} width={500} height={360} className="img-fluid" loading="lazy" />
            </Link>
          ))}
        </div>
        <div className="text-center mt-4" data-aos="fade-up">
          <Link className="btn btn-outline" href={sectionPageHref('gallery')}>View full gallery <i className="fas fa-arrow-right" /></Link>
        </div>
      </div>
    </section>
  );
}
