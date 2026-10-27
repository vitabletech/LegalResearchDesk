import Link from 'next/link';
import { sectionPageHref } from '@/lib/site-data';

const whatsappHref = `https://wa.me/919424392871?text=${encodeURIComponent('Hello, I would like a free first legal consultation.')}`;
const instagramMessageHref = 'https://ig.me/m/adv.adarshsinghofficial';

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="subtitle">One Call. Expert Advice.</span>
          <h2 className="section-title">Get Legal Support</h2>
          <p className="section-description">Contact us by WhatsApp, phone, or email to find the right advocate and discuss your first consultation.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-cards-container">
            <div className="contact-card-modern" data-aos="fade-right" data-aos-delay="100"><div className="contact-icon"><i className="fas fa-map-marker-alt" aria-hidden="true" /></div><div className="contact-details-modern"><h5>Location</h5><p>JP LAW ASSOCIATES<br />Behind Metro Tower gate no. 3<br />District Court, New Shiv Vihar City Centre<br />Gwalior, M.P</p></div></div>
            <div className="contact-card-modern" data-aos="fade-right" data-aos-delay="200"><div className="contact-icon"><i className="fas fa-envelope" aria-hidden="true" /></div><div className="contact-details-modern"><h5>Email</h5><a href="mailto:info.itsyogiraj@gmail.com">info.itsyogiraj@gmail.com</a></div></div>
            <div className="contact-card-modern" data-aos="fade-right" data-aos-delay="300"><div className="contact-icon"><i className="fas fa-phone-alt" aria-hidden="true" /></div><div className="contact-details-modern"><h5>Phone</h5><a href="tel:+919424392871">+91 9424392871</a></div></div>
          </div>
          <div className="contact-main-card" data-aos="fade-left" data-aos-delay="200">
            <h3>Get a free first consultation</h3>
            <p className="text-muted">Tell us what kind of legal help you need. Additional services are discussed and priced before proceeding.</p>
            <div className="whatsapp-cta mt-4"><a href={whatsappHref} target="_blank" className="btn btn-whatsapp w-100 text-center" rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true" /> Chat on WhatsApp</a></div>
            <p className="contact-privacy-note">Please avoid sending sensitive case or personal information over an unsecured channel. See the <Link href={sectionPageHref('privacy-policy')}>privacy policy</Link> for details about external contact services.</p>
            <div className="alt-connect"><span>Or connect with us</span><div className="social-links mt-3 justify-center">
              <a href={instagramMessageHref} target="_blank" rel="noopener noreferrer" aria-label="Message on Instagram" className="social-icon"><i className="fab fa-instagram" aria-hidden="true" /></a>
              <a href="https://www.instagram.com/adv.adarshsinghofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile" className="social-icon"><i className="fas fa-user-circle" aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/adarsh-singh-kushwah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
              <a href="mailto:info.itsyogiraj@gmail.com" aria-label="Email" className="social-icon"><i className="fas fa-envelope" aria-hidden="true" /></a>
            </div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
