import Link from 'next/link';

export default function LegalPageLayout({ eyebrow = 'Site information', title, children }) {
  return (
    <main id="main-content" className="about-page legal-page">
      <header className="about-page-hero">
        <div className="container">
          <span className="subtitle">{eyebrow}</span>
          <h1>{title}</h1>
          <Link href="/" className="legal-home-link">Back to home</Link>
        </div>
      </header>
      <article className="section">
        <div className="container legal-page-content">{children}</div>
      </article>
    </main>
  );
}
