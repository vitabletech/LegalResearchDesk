import ContactSection from '@/components/home/contact';
import GalleryPreview from '@/components/home/gallery-preview';
import HomeHero from '@/components/home/hero';
import LegalResourcesSection from '@/components/home/legal-resources';
import ServicesSection from '@/components/home/services';
import WhyMeSection from '@/components/home/why-me';

export const metadata = {
  title: { absolute: 'Adarsh Singh & Associate | Legal Help Across India' },
  description: 'Find an advocate and request legal consultation across India. First consultation free. Civil, criminal, family, property and corporate legal support.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Adarsh Singh & Associate | Legal Help Across India',
    description: 'Lawyers across India. Legal support wherever you are.',
    url: '/',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Adarsh Singh & Associate | Legal Help Across India' },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <main id="main-content">
        <LegalResourcesSection />
        <GalleryPreview />
        <ServicesSection />
        <WhyMeSection />
        <ContactSection />
      </main>
    </>
  );
}
