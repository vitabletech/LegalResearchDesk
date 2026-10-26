export const metadata = { robots: { index: false, follow: false } };

import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="section">
      <div className="container text-center">
        <span className="subtitle">404</span>
        <h1 className="section-title">Page not found</h1>
        <p className="section-description">The page you requested could not be found.</p>
        <Link href="/" className="btn btn-primary">Return Home</Link>
      </div>
    </main>
  );
}
