import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/practice/breadcrumbs';
import BlogShare from '@/components/blog/blog-share';
import BlogFollow from '@/components/blog/blog-follow';
import { blogPosts, getBlogPost } from '@/lib/blog-data';
import { sectionPageHref, siteUrl } from '@/lib/site-data';

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  const url = `${siteUrl}/blog/${post.slug}.html`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}.html` },
    openGraph: { title: post.title, description: post.description, type: 'article', url, publishedTime: `${post.publishedAt}T00:00:00+05:30`, images: [{ url: post.image, width: 1400, height: 788, alt: post.imageAlt }] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.image] },
  };
}

export default function BlogArticlePage({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const postUrl = `${siteUrl}/blog/${post.slug}.html`;
  const consultationHref = `https://wa.me/919424392871?text=${encodeURIComponent(`Hello, I read your guide on ${post.title}. I would like to discuss my situation.`)}`;
  const related = (post.relatedSlugs || [])
    .map((slug) => getBlogPost(slug))
    .filter(Boolean);
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title,
    description: post.description, datePublished: post.publishedAt, dateModified: post.publishedAt,
    mainEntityOfPage: postUrl, image: `${siteUrl}${post.image}`, ...(post.sources ? { citation: post.sources.map(({ url }) => url) } : {}), author: { '@type': 'Organization', name: 'Adarsh Singh & Associate' },
    publisher: { '@type': 'Organization', name: 'Adarsh Singh & Associate', url: siteUrl },
  };
  return (
    <main id="main-content" className="blog-page blog-article-page">
      <Breadcrumbs current={post.title} section="Blog" sectionHref={sectionPageHref('blog')} />
      <div className="container blog-layout">
        <article className="blog-main blog-article">
          <header className="blog-article-heading"><span className="blog-eyebrow">{post.category} guide</span><h1>{post.title}</h1><p>{post.description}</p><div className="blog-article-byline"><span>Adarsh Singh &amp; Associate</span><span>{post.readingMinutes} min read</span></div></header>
          <div className="blog-article-cover"><Image src={post.image} alt={post.imageAlt} width={1400} height={788} sizes="(max-width: 768px) 100vw, 760px" priority /></div>
          <div className="blog-article-share-top"><BlogShare title={post.title} url={postUrl} /></div>
          <p className="blog-intro">{post.intro}</p>
          {post.sections.map((section, index) => <section key={section.heading} className="blog-content-section"><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{index === 1 && <div className="blog-inline-cta"><div><strong>Have a question about your situation?</strong><p>Discuss the matter and a suitable consultation scope with our team.</p></div><a href={consultationHref} target="_blank" rel="noopener noreferrer">Ask for a consultation <i className="fas fa-arrow-right" aria-hidden="true" /></a></div>}</section>)}
          {post.sources && <section className="blog-sources" aria-label="Primary sources"><h2>Primary sources</h2><ul>{post.sources.map(({ title, url }) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title} <i className="fas fa-external-link-alt" aria-hidden="true" /></a></li>)}</ul></section>}
          <div className="blog-disclaimer"><i className="fas fa-info-circle" aria-hidden="true" /><p>For general information only. This article is not legal advice, does not address your specific facts, and may not reflect every local requirement. Consult a qualified professional before acting on a legal matter.</p></div>
          <div className="blog-end-cta"><span className="blog-eyebrow">Take the next step</span><h2>{post.cta}</h2><p>Share a short summary of the matter and your location. We will discuss availability, scope and any fee before work begins.</p><div><a href={consultationHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true" /> Request a consultation</a><a href={sectionPageHref(post.relatedService)} className="blog-service-link">Explore related service <i className="fas fa-arrow-right" aria-hidden="true" /></a></div></div>
          <div className="blog-article-share-bottom"><BlogShare title={post.title} url={postUrl} /></div>
        </article>
        <aside className="blog-sidebar" aria-label="Related articles and support"><div className="blog-side-card blog-side-cta"><i className="fas fa-comments" aria-hidden="true" /><h2>Need help with this?</h2><p>A guide cannot replace advice about your own circumstances or deadlines.</p><a href={consultationHref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Consult our team</a></div><div className="blog-side-card"><h2>Related articles</h2><div className="blog-related-list">{related.map((item) => <a className="blog-related-item" key={item.slug} href={sectionPageHref(`blog/${item.slug}`)}><Image src={item.image} alt="" width={96} height={72} sizes="72px" /><span><small>{item.category}</small><strong>{item.title}</strong></span></a>)}</div><a className="blog-all-link" href={sectionPageHref('blog')}>View all articles <i className="fas fa-arrow-right" aria-hidden="true" /></a></div><BlogFollow /></aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
