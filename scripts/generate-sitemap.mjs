import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { contentPages, siteUrl } from '../lib/site-data.js';
import { blogPosts } from '../lib/blog-data.js';

const escapeXml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
})[character]);

const pages = [
  { path: '/' },
  ...['about', 'services', 'blog', 'gallery', 'privacy-policy', 'terms-of-use', 'disclaimer']
    .map((slug) => ({ path: `/${slug}.html` })),
  ...contentPages.map(({ slug }) => ({ path: `/${slug}.html` })),
  ...blogPosts.map(({ slug, publishedAt }) => ({
    path: `/blog/${slug}.html`,
    lastModified: publishedAt,
  })),
];

const entries = pages.map(({ path, lastModified }) => [
  '  <url>',
  `    <loc>${escapeXml(`${siteUrl}${path === '/' ? '' : path}`)}</loc>`,
  ...(lastModified ? [`    <lastmod>${escapeXml(lastModified)}</lastmod>`] : []),
  '  </url>',
].join('\n'));

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
writeFileSync(fileURLToPath(new URL('../public/sitemap.xml', import.meta.url)), xml);
console.log(`Generated sitemap.xml with ${pages.length} URLs`);
