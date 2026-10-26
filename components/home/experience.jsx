const experience = [
  {
    company: 'Exo Edge India', date: '2026 — Present', role: 'Legal Consultant',
    tasks: ['Provide legal consultation focused on cyber incident response (CIR) and data-breach analysis.', 'Review documents against GDPR and HIPAA requirements and identify PII and PHI.', 'Support breach-notification assessments through careful analysis and documentation.', 'Maintain confidentiality and quality standards across legal review processes.'],
  },
  {
    company: 'JP Law Associates', date: '2026', role: 'Associate Lawyer',
    tasks: ['Assist senior advocates with legal research, case preparation, and case-management tasks.', 'Prepare notices, applications, and other legal documents.', 'Organize case files and supporting evidence, and track filing steps and deadlines.', 'Review documents for accuracy and contribute legal research to case strategy.'],
  },
  {
    company: 'EPIQ Systems', date: '2026', role: 'Cyber Security Analyst',
    tasks: ['Worked on eDiscovery and legal document-review projects involving electronically stored information (ESI).', 'Reviewed documents for relevance, privilege, confidentiality, and responsiveness.', 'Coded and classified documents while maintaining quality and confidentiality.', 'Worked with review teams to meet accuracy and delivery targets.'],
  },
  {
    company: 'QuisLex Legal Services', date: '2025', role: 'Legal Executive',
    tasks: ['Reviewed and coded large volumes of electronically stored information (ESI).', 'Analyzed documents for relevance, privilege, and confidentiality.', 'Met review accuracy and productivity requirements and flagged issues during quality checks.'],
  },
];

export default function ExperienceSection() {
  return <section id="experience" className="section"><div className="container"><div className="text-center" data-aos="fade-up"><span className="subtitle">Career history</span><h2 className="section-title">Professional <span className="gold-text">Experience</span></h2><p className="section-description">One year of hands-on experience across legal consultation, eDiscovery, document review, and litigation support.</p></div><div className="timeline">{experience.map((item, index) => <div className="timeline-item" data-aos="fade-up" data-aos-delay={String((index + 1) * 100)} key={item.company}><div className="timeline-dot" /><div className="timeline-content card-hover"><div className="timeline-header"><div><h3>{item.company}</h3><span className="timeline-date text-muted" style={{display: 'block', fontSize: '.9rem', marginTop: 5}}>{item.date}</span></div><span className="position-badge">{item.role}</span></div><ul className="task-list">{item.tasks.map((task) => <li key={task}><i className="fas fa-check-circle gold-text" aria-hidden="true" /> {task}</li>)}</ul></div></div>)}</div></div></section>;
}
