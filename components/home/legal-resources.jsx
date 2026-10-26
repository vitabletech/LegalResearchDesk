const legalSources = [
  {
    law: 'Hindu Marriage Act, 1955',
    section: 'Section 13B',
    details: 'The section sets out the joint petition requirements, including living separately for at least one year, inability to live together, and mutual agreement. It provides for a second motion between six and eighteen months after filing.',
    href: 'https://www.indiacode.nic.in/bitstream/123456789/1560/1/A1955-25.pdf',
  },
  {
    law: 'Special Marriage Act, 1954',
    section: 'Section 28',
    details: 'The section has its own joint petition requirements and timing. The statutory text refers to at least one year living separately and a second motion between six and eighteen months after filing.',
    href: 'https://www.indiacode.nic.in/bitstream/123456789/20574/1/special_marriage_act.pdf',
  },
  {
    law: 'Divorce Act, 1869',
    section: 'Section 10A',
    details: 'The statutory text sets out a two-year separation period and a second motion between six and eighteen months. Applicable court decisions and jurisdiction should also be checked.',
    href: 'https://www.indiacode.nic.in/bitstream/123456789/2280/1/A1869-04.pdf',
  },
  {
    law: 'Parsi Marriage and Divorce Act, 1936',
    section: 'Section 32B',
    details: 'This section sets out a separate route requiring at least one year living separately, inability to live together, and mutual agreement. Its statutory process differs from the Acts above.',
    href: 'https://www.indiacode.nic.in/bitstream/123456789/2476/1/a1936_____3.pdf',
  },
];

export default function LegalResourcesSection() {
  return (
    <article id="legal-resources" className="section bg-light" aria-labelledby="divorce-heading">
      <div className="container">
        <header className="text-center" data-aos="fade-up">
          <span className="subtitle">Legal Guidance</span>
          <h2 id="divorce-heading" className="section-title">Mutual Consent Divorce <span className="gold-text">in India</span></h2>
          <p className="section-description">A general overview of selected statutory routes. Requirements and procedure depend on the law governing the marriage and the facts of the case.</p>
        </header>

        <section className="divorce-overview" aria-labelledby="overview-heading" data-aos="fade-up">
          <div className="divorce-overview-copy">
            <h3 id="overview-heading">What the process generally involves</h3>
            <p>Mutual consent proceedings generally begin with both spouses agreeing to seek dissolution and resolving matters that require the court’s consideration. The petition, required separation period, waiting period, and court procedure depend on the applicable statute.</p>
            <p>For the court-based statutory routes summarized here, the court considers the petition and applicable legal requirements. A mutual agreement by itself does not grant a court decree.</p>
          </div>
          <aside className="legal-note" aria-label="Important legal note">
            <i className="fas fa-circle-info" aria-hidden="true" />
            <p>There is no single separation or waiting-period rule that applies to every marriage in India. The examples below are selected statutory provisions, not a complete survey of all personal laws or court decisions.</p>
          </aside>
        </section>

        <section className="legal-routes" aria-labelledby="routes-heading">
          <div className="text-center" data-aos="fade-up">
            <h3 id="routes-heading">Selected statutory provisions</h3>
            <p className="section-description">Read the applicable Act and check current court decisions for the relevant jurisdiction.</p>
          </div>
          <div className="legal-routes-grid">
            {legalSources.map(({ law, section, details, href }) => (
              <article className="legal-route-card" key={law} data-aos="fade-up">
                <span className="legal-route-section">{section}</span>
                <h4>{law}</h4>
                <p>{details}</p>
                <a href={href} target="_blank" rel="noopener noreferrer">Read the Act <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="divorce-process" aria-labelledby="process-heading" data-aos="fade-up">
          <div className="text-center">
            <h3 id="process-heading">A general court process</h3>
            <p className="section-description">The steps and timing can differ by statute and court.</p>
          </div>
          <ol className="process-steps">
            <li><span>01</span><div><h4>Understand the applicable law</h4><p>Confirm which statute applies and check its current requirements with a qualified legal practitioner.</p></div></li>
            <li><span>02</span><div><h4>Prepare and file the joint petition</h4><p>Both spouses provide the information and documents required by the applicable court procedure.</p></div></li>
            <li><span>03</span><div><h4>Attend the court proceedings</h4><p>The court considers the petition, the parties’ statements, and the requirements set by law.</p></div></li>
            <li><span>04</span><div><h4>Follow any further motion or hearing</h4><p>Some statutes provide for a later motion and waiting period. Any waiver is for the court to decide under applicable law.</p></div></li>
          </ol>
        </section>

        <section className="waiver-note" aria-labelledby="waiver-heading" data-aos="fade-up">
          <h3 id="waiver-heading">Six-month period under the Hindu Marriage Act</h3>
          <p>In <em>Amardeep Singh v. Harveen Kaur</em> (2017), the Supreme Court held that the six-month period in Section 13B(2) of the Hindu Marriage Act may be waived by the court in appropriate cases. Waiver is not automatic: the court considers the circumstances and applicable legal principles.</p>
          <a href="https://api.sci.gov.in/supremecourt/2017/22782/22782_2017_Judgement_12-Sep-2017.pdf" target="_blank" rel="noopener noreferrer">Read the Supreme Court judgment <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" /></a>
        </section>

        <footer className="legal-content-note">
          <p><strong>Educational information, not legal advice.</strong> This summary is not a substitute for advice on a specific matter. The applicable law can depend on personal law, the place of proceedings, amendments, and binding court decisions. Consult a qualified legal practitioner before acting.</p>
          <p>Sources checked: India Code statutory texts and the Supreme Court judgment linked above. Last reviewed: 26 October 2026.</p>
        </footer>
      </div>
    </article>
  );
}
