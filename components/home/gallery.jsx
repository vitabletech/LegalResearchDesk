'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useGalleryDialog } from '@/hooks/use-gallery-dialog';
import { galleryImages } from '@/lib/gallery-data';

const filters = ['All resources', ...new Set(galleryImages.map(({ category }) => category))];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const visibleImages = useMemo(
    () => activeFilter === filters[0] ? galleryImages : galleryImages.filter(({ category }) => category === activeFilter),
    [activeFilter],
  );
  const gallery = useGalleryDialog(visibleImages);
  const activeImage = gallery.activeIndex === null ? null : visibleImages[gallery.activeIndex];

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="container">
        <header className="text-center" data-aos="fade-up">
          <span className="subtitle">Client Information Library</span>
          <h2 id="gallery-title" className="section-title">Legal Resources <span className="gold-text">Gallery</span></h2>
          <p className="section-description">Legal explainers, professional photographs, and service information.</p>
        </header>

        <div className="gallery-filters" role="group" aria-label="Filter gallery resources">
          {filters.map((filter) => (
            <button key={filter} type="button" className={`gallery-filter${activeFilter === filter ? ' active' : ''}`} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>
          ))}
        </div>

        <div className="gallery-grid gallery-resource-grid">
          {visibleImages.map((image, index) => (
            <button key={image.src} type="button" className="gallery-item gallery-card" data-aos="fade-up" data-aos-delay={String((index % 4) * 70)} onClick={(event) => gallery.open(index, event)} aria-label={`View ${image.title}: ${image.description}`}>
              <Image src={image.src} alt={image.alt} width={500} height={360} className="img-fluid" loading="lazy" sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 360px" />
              <span className="gallery-card-content">
                <span className="gallery-category">{image.category}</span>
                <span className="gallery-card-title">{image.title}</span>
                <span className="gallery-card-description">{image.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div ref={gallery.dialogRef} className="modal is-open" role="dialog" aria-modal="true" aria-label={`${activeImage.title} image viewer`} onMouseDown={(event) => { if (event.target === event.currentTarget) gallery.close(); }}>
          <button ref={gallery.closeButtonRef} type="button" className="close-modal" aria-label="Close image viewer" onClick={gallery.close}>
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          <button type="button" className="prev-modal" aria-label="Previous image" onClick={() => gallery.move(-1)}>&#10094;</button>
          <figure className="gallery-modal-figure">
            <Image src={activeImage.src} alt={activeImage.alt} width={1500} height={1000} className="modal-content" priority />
            <figcaption><strong>{activeImage.title}</strong><span>{activeImage.description}</span></figcaption>
          </figure>
          <button type="button" className="next-modal" aria-label="Next image" onClick={() => gallery.move(1)}>&#10095;</button>
        </div>
      )}
    </section>
  );
}
