import LegalPageLayout from '@/components/legal/legal-page-layout';
import { siteUrl } from '@/lib/site-data';

export const metadata = {
  title: 'Disclaimer',
  description: 'Important information about the legal research and educational content on this website.',
  alternates: { canonical: '/disclaimer.html' },
  openGraph: { title: 'Disclaimer | Adarsh Singh Kushwah', url: `${siteUrl}/disclaimer.html`, type: 'website' },
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer">
      <p className="legal-effective-date">Last reviewed: 26 October 2026</p>
      <h2>Educational information only</h2>
      <p>Legal summaries and links on this website are provided for general educational information. They are not legal advice, an opinion on a specific matter, or a substitute for consulting a qualified legal practitioner about your circumstances.</p>
      <h2>No outcome or timing guarantees</h2>
      <p>Legal requirements and court procedure can depend on the applicable statute, jurisdiction, current amendments, and facts. Any process description or timeline is a general summary; a court determines matters placed before it.</p>
      <h2>Professional information</h2>
      <p>Descriptions of experience and services reflect the information presented on this site. Service scope should be discussed and agreed for each engagement. Nothing here guarantees a particular result.</p>
      <h2>Sources</h2>
      <p>Where legal materials are summarized, links to primary legal sources are provided when available. Readers should verify the current law and source text before relying on it.</p>
      <p>Questions can be sent to <a href="mailto:info.itsyogiraj@gmail.com">info.itsyogiraj@gmail.com</a>.</p>
    </LegalPageLayout>
  );
}
