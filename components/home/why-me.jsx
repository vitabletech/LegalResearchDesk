export default function WhyMeSection() {
  return (
    <section id={"why-me"} className={"section bg-primary text-white"}>
      <div className={"container"}>
        <div className={"text-center"} data-aos={"fade-up"}><span className={"subtitle gold-text"}>Your Trusted Partner</span><h2 className={"section-title text-white"}>Why Work With <span className={"gold-text"}>Me</span></h2></div>
        <div className={"features-grid"}>
          {[
            ['fa-globe-americas', 'Cross-border team support', 'Experience supporting legal service providers and teams working on international matters.'],
            ['fa-search-plus', 'Document review', 'Experience reviewing large document sets, including privilege review and identifying PII and PHI.'],
            ['fa-user-shield', 'Privacy and compliance research', 'Research and review support for data breach matters and privacy compliance projects.'],
            ['fa-lock', 'Careful handling', 'Work involving sensitive legal information is approached with care and discretion.'],
            ['fa-chart-line', 'Structured analysis', 'Organized research notes and review summaries to help legal teams assess source material.'],
          ].map(([icon, title, description]) => <article className="feature-item" key={title} data-aos="fade-up"><div className="feature-icon"><i className={`fas ${icon}`} aria-hidden="true" /></div><div className="feature-text"><h3>{title}</h3><p>{description}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
