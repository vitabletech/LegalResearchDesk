import { educationAndRegistration } from '@/lib/about-data';

export default function AboutCredentials() {
  return (
    <section className="section bg-light about-credentials" aria-labelledby="credentials-heading">
      <div className="container">
        <div className="text-center">
          <span className="subtitle">Education &amp; registration</span>
          <h2 className="section-title" id="credentials-heading">Professional <span className="gold-text">Details</span></h2>
        </div>
        <div className="credentials-grid">
          {educationAndRegistration.map(({ label, value }) => (
            <article className="credential-card" key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </article>
          ))}
        </div>
        <div className="certificate-panel">
          <div>
            <h3>State Bar Council of Madhya Pradesh</h3>
            <p>Provisional enrollment certificate</p>
          </div>
          <a href="/assets/Adarsh_Singh_Provisional_Enrollment_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <i className="fas fa-file-pdf" aria-hidden="true" /> View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}
