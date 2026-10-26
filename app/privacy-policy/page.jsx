import LegalPageLayout from '@/components/legal/legal-page-layout';
import { siteUrl } from '@/lib/site-data';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How this static portfolio site and its contact links handle personal information.',
  alternates: { canonical: '/privacy-policy.html' },
  openGraph: { title: 'Privacy Policy | Adarsh Singh Kushwah', url: `${siteUrl}/privacy-policy.html`, type: 'website' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="legal-effective-date">Last reviewed: 26 October 2026</p>
      <h2>Information handled by this site</h2>
      <p>This site is a static portfolio. It does not provide an account, enquiry form, or on-site payment flow. It uses Google Analytics to understand visits and how visitors use the site. Google may collect information such as pages viewed, device and browser details, and approximate location, and may use cookies or similar technologies. The Google Analytics measurement ID for this site is G-KX3S30WD44.</p>
      <p>The website host and delivery services may process technical request information, such as IP address, browser details, and requested pages, to serve and protect the site under their own policies.</p>
      <h2>When you contact Adarsh</h2>
      <p>Email, phone, WhatsApp, and LinkedIn links open the relevant communication service. Information you choose to share is handled by that service and by the recipient of your message under their applicable privacy terms. Please avoid sending sensitive personal or case information through an unsecured channel.</p>
      <h2>External websites</h2>
      <p>This site links to third-party legal resources and communication services. Their privacy practices are controlled by those providers.</p>
      <h2>Questions</h2>
      <p>For a privacy question about this site, contact <a href="mailto:info.itsyogiraj@gmail.com">info.itsyogiraj@gmail.com</a>.</p>
    </LegalPageLayout>
  );
}
