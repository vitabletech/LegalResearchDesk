const fs = require('fs');

const htmlContent = fs.readFileSync('index.html', 'utf8');

const headerMatch = htmlContent.match(/([\s\S]*?)<!-- Hero Section -->/);
const footerMatch = htmlContent.match(/(<!-- Footer -->[\s\S]*)/);

if (!headerMatch || !footerMatch) {
    console.error('Could not extract header or footer. Make sure tags exist.');
    process.exit(1);
}

let header = headerMatch[1];
const footer = footerMatch[1];

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
    
    const customHeader = header.replace(/<title>.*?<\/title>/, `<title>${p.title} | Adarsh Singh Legal Consultant</title>`);
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
const customDeedHeader = header.replace(/<title>.*?<\/title>/, `<title>Deed | Adarsh Singh Legal Consultant</title>`);
fs.writeFileSync('deed.html', customDeedHeader + deedBody + footer);
console.log('Created deed.html');
