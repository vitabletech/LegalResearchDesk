import AboutSection from '@/components/home/about';
import ExperienceSection from '@/components/home/experience';
import SkillsSection from '@/components/home/skills';
import AboutCredentials from '@/components/about/about-credentials';
import AssociatesSection from '@/components/about/associates-section';
import { siteUrl } from '@/lib/site-data';

export const metadata = {
  title: 'About Adv. Adarsh Singh Kushwah',
  description: 'Learn about Adv. Adarsh Singh Kushwah, his Madhya Pradesh Bar Council enrollment, legal education, experience in eDiscovery and litigation support, and selected publication.',
  alternates: { canonical: '/about.html' },
  openGraph: {
    title: 'About Adv. Adarsh Singh Kushwah',
    description: 'Professional background, legal education, Bar Council enrollment, eDiscovery experience, and selected publication.',
    url: `${siteUrl}/about.html`,
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-page-hero">
        <div className="container">
          <span className="subtitle">Profile &amp; Team</span>
          <h1>Adv. Adarsh Singh Kushwah</h1>
          <p>Advocate · Legal Consultant · Special Correspondent, Hindustan Samaj Newspaper</p>
          <p lang="hi">आदर्श सिंह कुशवाह — अधिवक्ता । विशेष संवाददाता, हिंदुस्तान समाज समाचार पत्र, ग्वालियर, मध्य प्रदेश</p>
        </div>
      </section>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutCredentials />
      <AssociatesSection />
    </main>
  );
}
