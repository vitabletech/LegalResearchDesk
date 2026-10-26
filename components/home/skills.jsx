const skills = [
  ['eDiscovery & ESI Review', 'fa-database'],
  ['Legal Document Review', 'fa-file-contract'],
  ['Privilege & Confidentiality Review', 'fa-eye'],
  ['Litigation Support', 'fa-gavel'],
  ['Cyber Incident Response', 'fa-shield-alt'],
  ['Data Breach Analysis', 'fa-user-shield'],
  ['PII & PHI Identification', 'fa-user-secret'],
  ['Legal Research', 'fa-book'],
  ['Case & Legal Management', 'fa-tasks'],
  ['Contract Drafting', 'fa-file-signature'],
  ['Legal Documentation', 'fa-folder-open'],
  ['Quality Control & Redaction', 'fa-clipboard-check'],
  ['GDPR & HIPAA Review', 'fa-lock'],
];

export default function SkillsSection() {
  return <section id="skills" className="section bg-light"><div className="container"><div className="text-center" data-aos="fade-up"><span className="subtitle">My Expertise</span><h2 className="section-title">Core <span className="gold-text">Skills</span></h2><p className="section-description">Skills in legal operations, eDiscovery, document review, and litigation support.</p></div><div className="skills-grid">{skills.map(([skill, icon], index) => <div className="skill-card" data-aos="zoom-in" data-aos-delay={String((index + 1) * 50)} key={skill}><i className={`fas ${icon} skill-icon`} aria-hidden="true" /><h4>{skill}</h4></div>)}</div></div></section>;
}
