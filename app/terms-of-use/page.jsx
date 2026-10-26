import LegalPageLayout from '@/components/legal/legal-page-layout';
import { siteUrl } from '@/lib/site-data';

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the Adarsh Singh Kushwah portfolio and its linked resources.',
  alternates: { canonical: '/terms-of-use.html' },
  openGraph: { title: 'Terms of Use | Adarsh Singh Kushwah', url: `${siteUrl}/terms-of-use.html`, type: 'website' },
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use">
      <p className="legal-effective-date">Last reviewed: 26 October 2026</p>
      <h2>Using this website</h2>
      <p>This portfolio and its materials are provided for general information about professional experience, research support, and resources. You may browse and link to public pages. Do not misuse the site, interfere with its operation, or treat its content as a substitute for advice on a specific matter.</p>
      <h2>External resources</h2>
      <p>Links to statutes, court websites, and other third-party services are provided for convenience. Their availability, content, and terms are controlled by their respective providers.</p>
      <h2>Accuracy and availability</h2>
      <p>Content may change as information is reviewed. No guarantee is made that every page is complete, current, or suitable for a particular purpose. The site may be updated or unavailable from time to time.</p>
      <h2>Contact</h2>
      <p>Questions about these terms can be sent to <a href="mailto:info.itsyogiraj@gmail.com">info.itsyogiraj@gmail.com</a>.</p>
    </LegalPageLayout>
  );
}
