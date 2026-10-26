export const galleryImages = [
  { number: 13, title: 'Legal services overview', category: 'Services', description: 'Information poster outlining document review, legal compliance, agreements, and property-related support.', alt: 'Adarsh Singh legal services poster listing document review, compliance, agreements, and property matters.' },
  { number: 1, title: 'Mutual divorce requirements', category: 'Legal guides', description: 'An illustrated overview of selected mutual divorce requirements and timelines in India.', alt: 'Infographic titled Mutual Divorce Requirements in India with a summary table of selected laws.' },
  { number: 2, title: 'Mutual divorce process', category: 'Legal guides', description: 'An infographic describing the general stages and considerations in a mutual divorce process.', alt: 'Mutual divorce in India infographic outlining requirements, process stages, and legal considerations.' },
  { number: 3, title: 'Legal drafting principles', category: 'Legal guides', description: 'An educational poster about clear, precise, and well-organized legal drafting.', alt: 'Legal drafting infographic with the heading Drafting is not clerical work; drafting is advocacy in writing.' },
  { number: 4, title: 'At a law library', category: 'Professional moments', description: 'A group photograph at a law library.', alt: 'Adarsh Singh with a group of colleagues at a law library.' },
  { number: 5, title: 'At a law library', category: 'Professional moments', description: 'A group photograph at a law library.', alt: 'Adarsh Singh with colleagues and visitors at a law library.' },
  { number: 6, title: 'Law library visit', category: 'Professional moments', description: 'A photograph from a visit to a law library.', alt: 'Adarsh Singh with a colleague at a law library.' },
  { number: 7, title: 'Professional gathering', category: 'Professional moments', description: 'A photograph from a gathering at a law library.', alt: 'Adarsh Singh with a colleague at a law library gathering.' },
  { number: 8, title: 'Team at a law library', category: 'Professional moments', description: 'A group photograph in a law library.', alt: 'Adarsh Singh and colleagues gathered inside a law library.' },
  { number: 9, title: 'Professional portrait', category: 'Profile', description: 'A portrait of Adarsh Singh Kushwah.', alt: 'Portrait of Adarsh Singh Kushwah in a suit.' },
  { number: 10, title: 'Supreme Court of India emblem', category: 'Legal institutions', description: 'The emblem of the Supreme Court of India.', alt: 'Emblem of the Supreme Court of India.' },
  { number: 11, title: 'Professional portrait', category: 'Profile', description: 'A portrait of Adarsh Singh Kushwah.', alt: 'Portrait of Adarsh Singh Kushwah in formal attire.' },
  { number: 12, title: 'Legal services information', category: 'Services', description: 'Information poster with contact details and a summary of legal support areas.', alt: 'Adarsh Singh legal consultant poster showing document review, compliance, agreements, and contact information.' },
  { number: 14, title: 'Adarsh Singh legal consultant identity', category: 'Profile', description: 'A legal consultant visiting card and brand mark.', alt: 'Adarsh Singh legal consultant visiting card with the AS brand mark.' },
].map(({ number, ...image }) => ({
  ...image,
  src: `/assets/gallery/${number}.jpeg`,
}));
