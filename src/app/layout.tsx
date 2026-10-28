import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { InquiryProvider } from '@/context/InquiryContext';
import InquiryModal from '@/components/InquiryModal';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#FAF9F6',
};

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : null)
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
  || 'https://dawsonwellsdemo.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dawson Wells Gallery | New York & London',
    template: '%s | Dawson Wells Gallery',
  },
  description:
    'Dawson Wells Gallery represents a museum-caliber collection spanning large-format analog photography, monumental paintings, drawings, ceramics, and master prints. Chelsea Flagship in New York, Mayfair Salon in London.',
  keywords: [
    'Dawson Wells Gallery',
    'Dawson Wells',
    'Contemporary Art Gallery New York',
    'Chelsea Art District Gallery',
    'Mayfair London Art Gallery',
    'Fine Art Photography',
    'Analog Platinum Prints',
    'Contemporary Ceramics',
    'Wood-Fired Stoneware',
    'Monochrome Painting',
    'Master Relief Prints',
    'Fine Art Advisory',
    'Museum Loans',
  ],
  authors: [
    { name: 'Mr. Dawson Wells' },
    { name: 'Clepto', url: 'https://www.clepto.in' },
  ],
  creator: 'Clepto (https://www.clepto.in)',
  publisher: 'Dawson Wells Gallery Directorate',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'Dawson Wells Gallery RSS' }],
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/apple-touch-icon.png', color: '#121110' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Dawson Wells Gallery',
    title: 'Dawson Wells Gallery | New York & London',
    description:
      'Digital representation and showcase of the Dawson Wells Collection. Dedicated to material mastery, timeless form, and architectural presence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dawson Wells Gallery — New York & London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawson Wells Gallery | New York & London',
    description:
      'Museum-caliber contemporary art archive spanning analog photography, monumental paintings, drawings, ceramics, and master prints.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

const structuredSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Dawson Wells Gallery',
      description: 'Museum-caliber contemporary art gallery representing the archive of Mr. Dawson Wells.',
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/artworks?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ArtGallery',
      '@id': `${SITE_URL}/#organization`,
      name: 'Dawson Wells Gallery',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        url: `${SITE_URL}/apple-touch-icon.png`,
        caption: 'Dawson Wells Gallery Monogram',
      },
      image: `${SITE_URL}/og-image.jpg`,
      founder: {
        '@type': 'Person',
        name: 'Dawson Wells',
        jobTitle: 'Artist & Founder',
        alumniOf: 'University of Tennessee, Knoxville',
        description: 'Multi-disciplinary contemporary artist working across analog photography, mineral painting, vine charcoal, wood-fired ceramics, and master prints.',
      },
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '524 West 24th Street',
          addressLocality: 'New York',
          addressRegion: 'NY',
          postalCode: '10011',
          addressCountry: 'US',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '14 Old Bond Street',
          addressLocality: 'London',
          postalCode: 'W1S 4PP',
          addressCountry: 'GB',
        },
      ],
      telephone: '+1-000-000-0000',
      email: 'hello@yourgallery.com',
      sameAs: [
        'https://www.clepto.in',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* GEO & Local SEO Meta Tags */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York" />
        <meta name="geo.position" content="40.7495;-74.0048" />
        <meta name="ICBM" content="40.7495, -74.0048" />
        
        {/* Anti-indexing meta tags for demo protection */}
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="googlebot" content="noindex, nofollow, noimageindex" />

        {/* Explicit Social Share Preview Image */}
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

        {/* Browser Integrations */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="search" type="application/opensearchdescription+xml" title="Dawson Wells Gallery" href="/opensearch.xml" />
        
        {/* Inline Structured Schema for AEO/GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
        />
      </head>
      <body>
        {/* Google Analytics GA4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <InquiryProvider>
          <SmoothScrollProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <main style={{ flexGrow: 1 }}>{children}</main>
              <Footer />
            </div>
            <InquiryModal />
          </SmoothScrollProvider>
        </InquiryProvider>
      </body>
    </html>
  );
}
