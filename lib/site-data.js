export const siteUrl = 'https://legalresearchdesk.vitabletech.in';

export const practiceAreas = [
  { slug: 'corporate-law', icon: 'fa-building', title: 'Corporate Law', summary: 'Research and document support for business agreements and company records.', topics: ['Contract and agreement review', 'Organizing corporate records for a defined project', 'Research notes on a specific business-law question'] },
  { slug: 'cyber-law', icon: 'fa-user-shield', title: 'Cyber Law', summary: 'Research and document review relating to digital incidents and privacy questions.', topics: ['Organizing an incident timeline and source materials', 'Reviewing documents for potentially sensitive information', 'Research on relevant cyber and privacy requirements'] },
  { slug: 'real-estate', icon: 'fa-home', title: 'Real Estate', summary: 'Document review and drafting support for property-related written arrangements.', topics: ['Reviewing the documents supplied for a property matter', 'Preparing research notes on an identified issue', 'Drafting support for agreements and declarations'] },
  { slug: 'intellectual-property', icon: 'fa-lightbulb', title: 'Intellectual Property Rights', summary: 'Research and document support for ownership, licensing and confidentiality questions.', topics: ['Reviewing licensing or assignment language', 'Organizing materials concerning ownership', 'Research notes on an identified intellectual-property issue'] },
  { slug: 'media-entertainment', icon: 'fa-film', title: 'Media & Entertainment', summary: 'Document support for creative collaborations and media projects.', topics: ['Reviewing project agreements and permissions', 'Organizing rights and contributor documents', 'Research notes on a defined media-law question'] },
  { slug: 'banking-finance', icon: 'fa-university', title: 'Banking & Finance', summary: 'Document and research support for finance-related written arrangements.', topics: ['Reviewing loan or payment documents supplied for a matter', 'Organizing supporting records and correspondence', 'Research notes on a defined finance-law issue'] },
  { slug: 'family-law', icon: 'fa-users', title: 'Family Law', summary: 'Research and documentation support for family-related matters.', topics: ['Organizing documents and a chronology', 'Drafting support for declarations or agreed arrangements', 'Research notes on a specific family-law question'] },
  { slug: 'nri-services', icon: 'fa-plane', title: 'NRI Services', summary: 'Remote document and research support for people handling India-related matters from abroad.', topics: ['Reviewing documents shared for an India-related matter', 'Organizing records for a remote discussion', 'Clarifying which steps may require local execution or verification'] },
];

export const contentPages = [
  ...practiceAreas.map((page) => ({ ...page, kind: 'practice' })),
  { slug: 'deed', title: 'Deed Documentation', kind: 'deed' },
  { slug: 'important-links', title: 'Important Links', kind: 'resources' },
];

export const homeNavigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['services', 'Services'],
  ['gallery', 'Gallery'],
  ['why-me', 'Why Me'],
];

export const sectionPageHref = (page, hash = '') => {
  const route = process.env.NODE_ENV === 'development' ? `/${page}` : `/${page}.html`;
  return `${route}${hash ? `#${hash}` : ''}`;
};

