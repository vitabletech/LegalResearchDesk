import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id={"about"} className={"section bg-light"}>
      <div className={"container row align-center"}>
        <div className={"col-md-6"} data-aos={"fade-right"}>
          <div className={"about-image-wrapper"}>
            <div className={"about-img-placeholder"}><Image src="/assets/adarsh.jpg" alt="Adarsh Singh Kushwah" width={447} height={447} loading="lazy" sizes="(max-width: 768px) 85vw, 40vw" /></div>
            <div className={"about-experience-badge"}><span className={"badge-num"}>India</span><span className={"badge-text"}>Legal Support</span></div>
          </div>
        </div>
        <div className={"col-md-6"} data-aos={"fade-left"}>
          <div className={"section-title-wrapper"}><span className={"subtitle"}>Introduction</span><h2 className={"section-title"}>About <span className={"gold-text"}>Me</span></h2></div>
          <p className={"about-text"}><strong>Adv. Adarsh Singh Kushwah</strong> is a B.A. LL.B. (Hons.) graduate from Amity University Madhya Pradesh and is pursuing an LL.M. in Criminology &amp; Security Law at ITM University, Gwalior. He is enrolled with the Madhya Pradesh State Bar Council (No. 7874/2026).</p>
          <p className={"about-text"}><strong>Advocate · Special Correspondent</strong> — Hindustan Samaj Newspaper, Gwalior, Madhya Pradesh. He was appointed as Special Correspondent in a letter dated 27 October 2026.</p>
          <p className={"about-text"}>He has one year of hands-on experience across legal consultation, eDiscovery, document review, and litigation support with Exo Edge India, EPIQ Systems, QuisLex Legal Services, and JP Law Associates. His work includes legal research and drafting, case management, review of electronically stored information (ESI), privilege and confidentiality review, and identifying PII and PHI in data-breach matters.</p>
          <p className={"about-text"}><strong>Selected publication:</strong> “Digital Evidence and Counter-Terrorism Frameworks: Comparative Legal Challenges in India, the UK, and the US” (2026).</p>
          <div className={"about-actions mt-4"}><a href={"/assets/Resume_Adarsh_Singh.pdf"} className={"btn btn-outline"} download={"Adarsh_Singh_Resume.pdf"}><i className={"fas fa-file-download"} /> Download Resume</a></div>
        </div>
      </div>
    </section>
  );
}
