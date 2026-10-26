import GallerySection from '@/components/home/gallery';
import { siteUrl } from '@/lib/site-data';

export const metadata = {
  title: 'Legal Resources Gallery',
  description: 'Browse legal information resources and client materials from Adarsh Singh Kushwah.',
  alternates: { canonical: '/gallery.html' },
  openGraph: {
    title: 'Legal Resources Gallery | Adarsh Singh Kushwah',
    description: 'Legal information resources and client materials.',
    url: `${siteUrl}/gallery.html`,
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-page-hero">
        <div className="container">
          <span className="subtitle">Client Information Library</span>
          <h1>Legal Resources Gallery</h1>
          <p>Valuable information, facts, and client-provided documents to enhance legal awareness.</p>
        </div>
      </section>
      <GallerySection />
    </main>
  );
}
