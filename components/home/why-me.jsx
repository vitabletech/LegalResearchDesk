export default function WhyMeSection() {
  return (
    <section id={"why-me"} className={"section bg-primary text-white"}>
      <div className={"container"}>
        <div className={"text-center"} data-aos={"fade-up"}><span className={"subtitle gold-text"}>Your Legal Problems, Our Priority</span><h2 className={"section-title text-white"}>Legal Help <span className={"gold-text"}>Anywhere in India</span></h2><p className="section-description">Expert lawyers at your service — 24/7. Get instant access to professional legal consultation whenever you need it.</p></div>
        <div className={"features-grid"}>
          {[
            ['fa-map-marked-alt', 'Pan-India Advocate Network', 'Find an advocate for your legal matter, wherever you are in India.'],
            ['fa-clock', '24/7 Legal Assistance', 'Reach out when you need support; consultation is arranged with an available professional.'],
            ['fa-comments', 'First Consultation FREE', 'Start with a free first consultation to discuss your requirements.'],
            ['fa-balance-scale', 'Experienced Legal Professionals', 'Support across civil, criminal, family, property, and corporate matters.'],
            ['fa-receipt', 'Transparent & Affordable Pricing', 'Pay only for additional services after discussing their scope and cost.'],
          ].map(([icon, title, description]) => <article className="feature-item" key={title} data-aos="fade-up"><div className="feature-icon"><i className={`fas ${icon}`} aria-hidden="true" /></div><div className="feature-text"><h3>{title}</h3><p>{description}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
