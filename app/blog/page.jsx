import Image from 'next/image';
import Breadcrumbs from '@/components/practice/breadcrumbs';
import BlogShare from '@/components/blog/blog-share';
import BlogFollow from '@/components/blog/blog-follow';
import { blogPosts } from '@/lib/blog-data';
import { sectionPageHref, siteUrl } from '@/lib/site-data';

export const metadata = {
  title: 'Legal Guides & Blog',
  description: 'Practical Indian legal guides on bail, property documents, agreement review and preparing for an online legal consultation.',
  alternates: { canonical: '/blog.html' },
  openGraph: {
    title: 'Legal Guides & Blog | Adarsh Singh & Associate',
    description: 'Read practical legal-document and consultation guides, then discuss your own matter with an advocate.',
    url: `${siteUrl}/blog.html`,
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <main id="main-content" className="blog-page">
      <section className="blog-hero"><div className="container"><span className="blog-eyebrow">Insights &amp; resources</span><h1>Legal Guides</h1><p>Clear starting points for common document and consultation questions. Every matter is different; use these guides to prepare, then speak with a professional about your circumstances.</p></div></section>
      <Breadcrumbs current="Blog" />
      <div className="container blog-layout blog-index-layout">
        <section aria-label="Latest articles" className="blog-main">
          <div className="blog-section-heading"><span className="blog-eyebrow">From the blog</span><h2>Latest articles</h2></div>
          <div className="blog-card-list">{blogPosts.map((post) => <article className="blog-card" key={post.slug}><a className="blog-card-thumbnail" href={sectionPageHref(`blog/${post.slug}`)} aria-label={`Read ${post.title}`}><Image src={post.image} alt={post.imageAlt} width={1400} height={788} sizes="(max-width: 768px) 100vw, 240px" /></a><div className="blog-card-content"><div className="blog-meta"><span>{post.category}</span><span>{post.readingMinutes} min read</span></div><h3><a href={sectionPageHref(`blog/${post.slug}`)}>{post.title}</a></h3><p>{post.description}</p><div className="blog-card-bottom"><a className="blog-read-link" href={sectionPageHref(`blog/${post.slug}`)}>Read guide <i className="fas fa-arrow-right" aria-hidden="true" /></a><BlogShare title={post.title} url={`${siteUrl}/blog/${post.slug}.html`} compact /></div></div></article>)}</div>
        </section>
        <aside className="blog-sidebar" aria-label="Blog help"><div className="blog-side-card blog-side-cta"><i className="fas fa-comments" aria-hidden="true" /><h2>Need advice for your situation?</h2><p>Tell us the type of matter and your location. We can discuss the appropriate next step.</p><a href="/#contact" className="btn btn-primary">Request a consultation</a></div><BlogFollow /><div className="blog-side-card"><h2>Explore services</h2><ul><li><a href={sectionPageHref('property-purchase-review')}>Property purchase review</a></li><li><a href={sectionPageHref('document-review')}>Legal document review</a></li><li><a href={sectionPageHref('services')}>All legal services</a></li></ul></div></aside>
      </div>
    </main>
  );
}
