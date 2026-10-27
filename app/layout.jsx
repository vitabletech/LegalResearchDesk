import './globals.css';
import Script from 'next/script';
import SiteShell from '@/components/layout/site-shell';
import { siteUrl } from '@/lib/site-data';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Adarsh Singh & Associate | Legal Help Across India',
    template: '%s | Adarsh Singh & Associate',
  },
  description: 'Adarsh Singh & Associate helps people connect with legal professionals across India for consultation and document support.',
  keywords: ['Adarsh Singh & Associate', 'Adarsh Singh Kushwah', 'Legal Consultation', 'Advocates Across India', 'Document Review'],
  authors: [{ name: 'Adarsh Singh Kushwah' }],
  creator: 'Adarsh Singh Kushwah',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Adarsh Singh & Associate',
    title: 'Adarsh Singh & Associate | Legal Help Across India',
    description: 'Lawyers across India. Legal support wherever you are.',
    images: [{ url: '/assets/adarsh.jpg', width: 447, height: 447, alt: 'Adarsh Singh Kushwah' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adarsh Singh & Associate | Legal Help Across India',
    description: 'Legal consultation and advocate support across India.',
    images: ['/assets/adarsh.jpg'],
  },
  icons: { icon: '/assets/brand-mark.svg' },
  robots: { index: true, follow: true },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Adarsh Singh Kushwah',
      jobTitle: ['Advocate and Legal Consultant', 'Special Correspondent, Hindustan Samaj Newspaper'],
      image: `${siteUrl}/assets/adarsh.jpg`,
      url: siteUrl,
      telephone: '+91-9424392871',
      email: 'info.itsyogiraj@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'JP Law Associates, Behind Metro Tower Gate No. 3, District Court, New Shiv Vihar City Centre',
        addressLocality: 'Gwalior',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
      sameAs: ['https://www.linkedin.com/in/adarsh-singh-kushwah/', 'https://www.instagram.com/adv.adarshsinghofficial/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Adarsh Singh & Associate',
      url: siteUrl,
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body suppressHydrationWarning>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KX3S30WD44" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KX3S30WD44');`}
        </Script>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SiteShell>{children}</SiteShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
