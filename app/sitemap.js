import { contentPages, siteUrl } from '@/lib/site-data';

export default function sitemap() {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/about.html` },
    { url: `${siteUrl}/services.html` },
    { url: `${siteUrl}/gallery.html` },
    { url: `${siteUrl}/privacy-policy.html` },
    { url: `${siteUrl}/terms-of-use.html` },
    { url: `${siteUrl}/disclaimer.html` },
    ...contentPages.map(({ slug }) => ({
      url: `${siteUrl}/${slug}.html`,
    })),
  ];
}
