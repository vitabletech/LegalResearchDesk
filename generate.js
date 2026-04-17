const fs = require('fs');

const htmlContent = fs.readFileSync('index.html', 'utf8');

const headerMatch = htmlContent.match(/([\s\S]*?)<!-- Hero Section -->/);
const footerMatch = htmlContent.match(/(<!-- Mobile Bottom Navigation -->[\s\S]*)/);

if (!headerMatch || !footerMatch) {
    console.error('Could not extract header or footer. Make sure tags exist.');
    process.exit(1);
}

let header = headerMatch[1];
const footer = footerMatch[1].replace(/href="#/g, 'href="index.html#');

header = header.replace(/href="#/g, 'href="index.html#');

const practices = [
    { file: 'corporate-law.html', title: 'Corporate Law', id: 'corporate' },
    { file: 'cyber-law.html', title: 'Cyber Law', id: 'cyber' },
    { file: 'real-estate.html', title: 'Real Estate', id: 'real-estate' },
    { file: 'intellectual-property.html', title: 'Intellectual Property Right', id: 'ipr' },
    { file: 'media-entertainment.html', title: 'Media Entertainment', id: 'media' },
    { file: 'banking-finance.html', title: 'Banking & Finance', id: 'banking' },
    { file: 'family-law.html', title: 'Family Law', id: 'family' },
    { file: 'nri-services.html', title: 'NRI Services', id: 'nri' },
];

function generateSidebar(currentId) {
    let sidebarLinks = '';
    for (const p of practices) {
        if (p.id !== currentId) {
            sidebarLinks += `<li><a href="${p.file}"><i class="fas fa-angle-right"></i> ${p.title}</a></li>\n`;
        }
    }
    
    return `
        <div class="sidebar-widget">
            <h4 class="sidebar-title">Practice Areas</h4>
            <ul class="sidebar-menu">
                ${sidebarLinks}
            </ul>
        </div>
        <div class="sidebar-widget ad-cta-widget">
            <h4>Get a Quote</h4>
            <p>Ready to Get Free Consultation For Cases?</p>
            <a href="index.html#contact" class="btn btn-primary d-block font-weight-bold">Contact Us</a>
        </div>
    `;
}

function setSEO(html, title, file, description) {
    let customHtml = html.replace(/<title>.*?<\/title>/, `<title>${title} | Adarsh Singh Kushwah</title>`);
    
    // Update Meta Description
    customHtml = customHtml.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${description}">`);
    
    // Update Canonical
    customHtml = customHtml.replace(/<link rel="canonical" href=".*?">/, `<link rel="canonical" href="https://legalresearchdesk.vitabletech.in/${file}">`);
    
    // Update Open Graph and Twitter metadata
    customHtml = customHtml.replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${title} | Adarsh Singh Kushwah">`);
    customHtml = customHtml.replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${description}">`);
    customHtml = customHtml.replace(/<meta property="og:url" content=".*?">/, `<meta property="og:url" content="https://legalresearchdesk.vitabletech.in/${file}">`);
    customHtml = customHtml.replace(/<meta name="twitter:title" content=".*?">/, `<meta name="twitter:title" content="${title} | Adarsh Singh Kushwah">`);
    customHtml = customHtml.replace(/<meta name="twitter:description" content=".*?">/, `<meta name="twitter:description" content="${description}">`);

    return customHtml;
}

for (const p of practices) {
    const mainBody = `
    <header class="practice-page-hero">
        <div class="practice-hero-content">
            <h1 class="practice-page-title">${p.title}</h1>
        </div>
    </header>
    
    <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
            <ol>
                <li><a href="index.html">Home</a></li>
                <li>Areas of Practice</li>
                <li class="active">${p.title}</li>
            </ol>
        </div>
    </nav>
    
    <section class="section pt-0" style="padding-top: 0;">
        <div class="container">
            <div class="practice-layout">
                <main class="practice-main-content">
                    <h2 class="mb-4 text-primary">${p.title} Services</h2>
                    <p class="text-muted" style="font-size: 1.1rem;">Expert legal consultation and highly specialized representation in ${p.title}. Our dedicated team ensures regulatory compliance, strategic advisory, and robust legal documentation tailored strictly to your operational goals.</p>
                    <p class="text-muted" style="font-size: 1.1rem;">We provide unparalleled advocacy whether it's navigating complex state and local laws, handling disputes, drafting bulletproof agreements, or resolving multifaceted compliance issues smoothly.</p>
                </main>
                <aside class="practice-sidebar">
                    ${generateSidebar(p.id)}
                </aside>
            </div>
        </div>
    </section>
    `;
    
    const description = `Expert legal consultation in ${p.title}. Adarsh Singh Kushwah provides specialized support for global legal teams in ${p.title} matters.`;
    let customHeader = setSEO(header, p.title, p.file, description);

    const finalHtml = customHeader + mainBody + footer;
    fs.writeFileSync(p.file, finalHtml);
    console.log('Created ' + p.file);
}

// Generate Deed.html
const deedBody = `
    <header class="practice-page-hero">
        <div class="practice-hero-content">
            <h1 class="practice-page-title">Deed Documentation</h1>
        </div>
    </header>
    
    <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
            <ol>
                <li><a href="index.html">Home</a></li>
                <li class="active">Deed</li>
            </ol>
        </div>
    </nav>
    
    <section class="section pt-0" style="padding-top: 50px; padding-bottom: 80px;">
        <div class="container text-center">
            <div data-aos="fade-up">
                <i class="fas fa-file-signature text-primary mb-3" style="font-size: 4rem;"></i>
                <h2 class="mb-4 text-primary">Deed Downloads Coming Soon!</h2>
                <p class="text-muted" style="font-size: 1.2rem; max-width: 600px; margin: 0 auto;">We are currently finalizing our premium collection of legal drafting documents. Very soon, you will be able to download perfectly tailored deeds directly from this portal!</p>
                <div class="mt-5">
                    <a href="index.html#contact" class="btn btn-primary btn-large">Get Notified</a>
                    <a href="index.html" class="btn btn-outline text-primary ml-2" style="border: 1px solid var(--primary-color);">Back to Home</a>
                </div>
            </div>
        </div>
    </section>
`;
const deedDescription = "Premium collection of legal drafting documents and deeds. Download perfectly tailored deeds directly from this portal.";
let customDeedHeader = setSEO(header, 'Deed', 'deed.html', deedDescription);
fs.writeFileSync('deed.html', customDeedHeader + deedBody + footer);
console.log('Created deed.html');

// Generate Important-links.html
const linksBody = `
    <header class="practice-page-hero">
        <div class="practice-hero-content">
            <h1 class="practice-page-title">Important Links</h1>
        </div>
    </header>
    
    <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <div class="container">
            <ol>
                <li><a href="index.html">Home</a></li>
                <li class="active">Important Links</li>
            </ol>
        </div>
    </nav>
    
    <section class="section pt-0" style="padding-top: 50px; padding-bottom: 100px;">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="section-title">Legal Resources <span class="gold-text">& Portals</span></h2>
                <p class="section-description">Quick access to essential government portals and legal research databases.</p>
            </div>
            
            <div class="links-modern-grid">
                <a href="https://main.sci.gov.in/" target="_blank" class="link-resource-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="link-icon-wrap"><i class="fas fa-gavel"></i></div>
                    <h3>Supreme Court of India</h3>
                    <p>Official portal for the Supreme Court of India, providing access to cause lists, judgments, and case status.</p>
                    <span class="link-action">Visit Portal <i class="fas fa-external-link-alt"></i></span>
                </a>
                
                <a href="https://ecourts.gov.in/ecourts_home/" target="_blank" class="link-resource-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="link-icon-wrap"><i class="fas fa-balance-scale"></i></div>
                    <h3>eCourts Services</h3>
                    <p>National portal for searching case status, cause lists, and orders from District and High Courts across India.</p>
                    <span class="link-action">Visit Portal <i class="fas fa-external-link-alt"></i></span>
                </a>
                
                <a href="http://lawmin.gov.in/" target="_blank" class="link-resource-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="link-icon-wrap"><i class="fas fa-landmark"></i></div>
                    <h3>Ministry of Law & Justice</h3>
                    <p>Official website of the Ministry of Law and Justice, Government of India.</p>
                    <span class="link-action">Visit Portal <i class="fas fa-external-link-alt"></i></span>
                </a>
                
                <a href="https://court.mah.nic.in/courtweb/index.php" target="_blank" class="link-resource-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="link-icon-wrap"><i class="fas fa-university"></i></div>
                    <h3>Maharashtra State Courts</h3>
                    <p>Case status and cause list portal for the High Court of Bombay and subordinate courts in Maharashtra.</p>
                    <span class="link-action">Visit Portal <i class="fas fa-external-link-alt"></i></span>
                </a>

                <a href="https://gras.mahakosh.gov.in/echallan/" target="_blank" class="link-resource-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="link-icon-wrap"><i class="fas fa-receipt"></i></div>
                    <h3>GRAS e-Challan</h3>
                    <p>Government Receipt Accounting System for online payment of diverse government taxes and fees in Maharashtra.</p>
                    <span class="link-action">Visit Portal <i class="fas fa-external-link-alt"></i></span>
                </a>

                <a href="http://www.legalserviceindia.com/" target="_blank" class="link-resource-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="link-icon-wrap"><i class="fas fa-book"></i></div>
                    <h3>Legal Service India</h3>
                    <p>Comprehensive legal research portal providing articles, statutes, and legal advice for various Indian laws.</p>
                    <span class="link-action">Visit Portal <i class="fas fa-external-link-alt"></i></span>
                </a>
            </div>
        </div>
    </section>

    <style>
        .links-modern-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .link-resource-card {
            background: #fff;
            padding: 40px 30px;
            border-radius: 15px;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }
        
        .link-resource-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--gold);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .link-resource-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-hover);
            border-color: var(--gold);
        }
        
        .link-resource-card:hover::before {
            opacity: 1;
        }
        
        .link-icon-wrap {
            width: 60px;
            height: 60px;
            background: rgba(212, 175, 55, 0.1);
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 25px;
            color: var(--gold);
            font-size: 1.8rem;
        }
        
        .link-resource-card h3 {
            font-size: 1.4rem;
            color: var(--primary-color);
            margin-bottom: 15px;
            font-family: 'Playfair Display', serif;
        }
        
        .link-resource-card p {
            color: var(--text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }
        
        .link-action {
            font-weight: 600;
            color: var(--gold);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        @media (max-width: 768px) {
            .links-modern-grid {
                grid-template-columns: 1fr;
            }
            .link-resource-card {
                padding: 30px 20px;
            }
        }
    </style>
`;
const linksDescription = "Quick access to essential government portals and legal research databases like Supreme Court of India, eCourts, and Ministry of Law.";
let customLinksHeader = setSEO(header, 'Important Links', 'important-links.html', linksDescription);
fs.writeFileSync('important-links.html', customLinksHeader + linksBody + footer);
console.log('Created important-links.html');
