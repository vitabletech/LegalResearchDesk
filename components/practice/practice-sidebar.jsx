import Link from 'next/link';
import { practiceAreas, sectionPageHref } from '@/lib/site-data';

export default function PracticeSidebar({ currentSlug }) {
  return (
    <aside className="practice-sidebar">
      <div className="sidebar-widget">
        <h4 className="sidebar-title">Practice Areas</h4>
        <ul className="sidebar-menu">
          {practiceAreas.filter(({ slug }) => slug !== currentSlug).map((area) => (
            <li key={area.slug}><a href={sectionPageHref(area.slug)}><i className="fas fa-angle-right" /> {area.title}</a></li>
          ))}
        </ul>
      </div>
      <div className="sidebar-widget ad-cta-widget">
        <h4>Get a Quote</h4>
        <p>Ready to Get Free Consultation For Cases?</p>
        <Link href="/#contact" className="btn btn-primary d-block font-weight-bold">Contact Us</Link>
      </div>
    </aside>
  );
}
