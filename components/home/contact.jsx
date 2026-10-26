import Link from 'next/link';
import { sectionPageHref } from '@/lib/site-data';

export default function ContactSection() {
  return (
    <section id={"contact"} className={"section bg-light"}>
      <div className={"container"}>
        <div className={"text-center"} data-aos={"fade-up"}><span className={"subtitle"}>Get In Touch</span><h2 className={"section-title"}>Contact</h2><p className={"section-description"}>Contact Adarsh by email, phone, or WhatsApp to discuss research, document review, or project requirements.</p></div>
        <div className={"contact-layout"}>
          <div className={"contact-cards-container"}>
            <div className={"contact-card-modern"} data-aos={"fade-right"} data-aos-delay={"100"}><div className={"contact-icon"}><i className={"fas fa-map-marker-alt"} aria-hidden="true" /></div><div className={"contact-details-modern"}><h5>Location</h5><p>JP LAW ASSOCIATES<br />Behind Metro Tower gate no. 3<br />District Court, New Shiv Vihar City Centre<br />Gwalior, M.P</p></div></div>
            <div className={"contact-card-modern"} data-aos={"fade-right"} data-aos-delay={"200"}><div className={"contact-icon"}><i className={"fas fa-envelope"} aria-hidden="true" /></div><div className={"contact-details-modern"}><h5>Email</h5><a href={"mailto:info.itsyogiraj@gmail.com"}>info.itsyogiraj@gmail.com</a></div></div>
            <div className={"contact-card-modern"} data-aos={"fade-right"} data-aos-delay={"300"}><div className={"contact-icon"}><i className={"fas fa-phone-alt"} aria-hidden="true" /></div><div className={"contact-details-modern"}><h5>Phone</h5><a href={"tel:+919424392871"}>+91 9424392871</a></div></div>
          </div>
          <div className={"contact-main-card"} data-aos={"fade-left"} data-aos-delay={"200"}><h3>Discuss a requirement</h3><p className={"text-muted"}>Choose a contact method to ask about availability and agree on the scope of support.</p><div className={"whatsapp-cta mt-4"}><a href={`https://wa.me/919424392871?text=${encodeURIComponent('Hello Adarsh, I would like to discuss a legal research or document review requirement.')}`} target={"_blank"} className={"btn btn-whatsapp w-100 text-center"} rel={"noopener noreferrer"}><i className={"fab fa-whatsapp"} aria-hidden="true" /> Send WhatsApp enquiry</a></div><p className="contact-privacy-note">Please avoid sending sensitive case or personal information over an unsecured channel. See the <Link href={sectionPageHref('privacy-policy')}>privacy policy</Link> for details about external contact services.</p><div className={"alt-connect"}><span>Or connect with me on</span><div className={"social-links mt-3 justify-center"}><a href={"https://www.linkedin.com/in/adarsh-singh-kushwah/"} target={"_blank"} aria-label={"LinkedIn"} className={"social-icon"} rel="noopener noreferrer"><i className={"fab fa-linkedin-in"} aria-hidden="true" /></a><a href={"mailto:info.itsyogiraj@gmail.com"} aria-label={"Email"} className={"social-icon"}><i className={"fas fa-envelope"} aria-hidden="true" /></a></div></div></div>
        </div>
      </div>
    </section>
  );
}
