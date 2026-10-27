import Link from 'next/link';

export default function Breadcrumbs({ current, section, sectionHref }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol>
          <li><Link href="/">Home</Link></li>
          {section && <li>{sectionHref ? <a href={sectionHref}>{section}</a> : section}</li>}
          <li className="active" aria-current="page">{current}</li>
        </ol>
      </div>
    </nav>
  );
}
