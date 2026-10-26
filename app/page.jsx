import ContactSection from '@/components/home/contact';
import GalleryPreview from '@/components/home/gallery-preview';
import HomeHero from '@/components/home/hero';
import LegalResourcesSection from '@/components/home/legal-resources';
import ServicesSection from '@/components/home/services';
import WhyMeSection from '@/components/home/why-me';

export const metadata = {
  title: { absolute: 'Adv. Adarsh Singh Kushwah | Legal Research & Document Review in Gwalior' },
  description: 'Legal research, document review, drafting and documentation support from Adv. Adarsh Singh Kushwah in Gwalior, with remote support where suitable.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Adv. Adarsh Singh Kushwah | Legal Research & Document Review in Gwalior',
    description: 'Legal research, document review, drafting and documentation support in Gwalior and remotely.',
    url: '/',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Adarsh Singh Kushwah | Legal Research' },
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
