import { notFound } from 'next/navigation';
import DeedPage from '@/components/practice/deed-page';
import PracticePage from '@/components/practice/practice-page';
import ResourceLinksPage from '@/components/practice/resource-links-page';
import { contentPages } from '@/lib/site-data';

export function generateStaticParams() {
  return contentPages.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = contentPages.find(({ slug }) => slug === params.slug);
  if (!page) return {};
  const description = page.kind === 'practice'
    ? `${page.summary} Discuss a defined requirement with Adv. Adarsh Singh Kushwah in Gwalior or remotely.`
    : page.kind === 'deed'
      ? 'Information about document research and review support from Adarsh Singh Kushwah.'
      : 'Quick access to official Indian court, government, and legal research portals.';

  return {
    title: page.title,
    description,
    alternates: { canonical: `/${page.slug}.html` },
    openGraph: { title: `${page.title} | Adarsh Singh Kushwah`, description, url: `/${page.slug}.html`, type: 'website' },
    twitter: { card: 'summary_large_image', title: page.title, description },
  };
}

export default function ContentPage({ params }) {
  const page = contentPages.find(({ slug }) => slug === params.slug);
  if (!page) notFound();
  if (page.kind === 'deed') return <DeedPage />;
  if (page.kind === 'resources') return <ResourceLinksPage />;
  return <PracticePage page={page} />;
}
