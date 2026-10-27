import { associates } from '@/lib/about-data';

export default function AssociatesSection() {
  return (
    <section className="section associates-section" aria-labelledby="associates-heading">
      <div className="container">
        <div className="text-center">
          <span className="subtitle">People supporting our work</span>
          <h2 className="section-title" id="associates-heading">Associates &amp; <span className="gold-text">Team</span></h2>
          <p className="section-description">Meet the team members who support our documentation and consultancy work.</p>
        </div>
        <div className="associates-grid">
          {associates.map((associate) => (
            <article className="associate-card" key={associate.name}>
              <div className="associate-avatar" aria-hidden="true">{associate.name.split(' ').map((part) => part[0]).join('')}</div>
              <div>
                <p className="associate-role">{associate.title}</p>
                <h3>{associate.name}</h3>
                {associate.enrollment && <p><i className="fas fa-id-card" aria-hidden="true" /> Enrollment No. {associate.enrollment}</p>}
                {associate.location && <p><i className="fas fa-location-dot" aria-hidden="true" /> {associate.location}</p>}
                {associate.education && <p><i className="fas fa-graduation-cap" aria-hidden="true" /> {associate.education}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
