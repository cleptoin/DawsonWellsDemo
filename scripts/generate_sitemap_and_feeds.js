const fs = require('fs');
const path = require('path');

// Read artworks data from compiled or ts file
const artworksFile = fs.readFileSync(path.join(__dirname, '../src/data/artworks.ts'), 'utf-8');
const match = artworksFile.match(/export const ARTWORKS_DATA:\s*Artwork\[\]\s*=\s*(\[[\s\S]*?\n\];)/);

let artworks = [];
if (match) {
  try {
    artworks = eval(match[1].replace(/;$/, ''));
  } catch (e) {
    console.error('Failed to parse artworks directly, extracting slugs via regex');
    const slugMatches = [...artworksFile.matchAll(/"slug":\s*"([^"]+)"/g)];
    artworks = slugMatches.map(m => ({ slug: m[1] }));
  }
}

const baseUrl = 'https://dawson-wells-demo-delta.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

// 1. Build sitemap.xml
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/artworks', priority: '0.95', changefreq: 'daily' },
  { url: '/artworks/photography', priority: '0.90', changefreq: 'weekly' },
  { url: '/artworks/paintings', priority: '0.90', changefreq: 'weekly' },
  { url: '/artworks/drawings', priority: '0.90', changefreq: 'weekly' },
  { url: '/artworks/ceramics', priority: '0.90', changefreq: 'weekly' },
  { url: '/artworks/prints', priority: '0.90', changefreq: 'weekly' },
  { url: '/viewing-rooms', priority: '0.85', changefreq: 'weekly' },
  { url: '/about', priority: '0.80', changefreq: 'monthly' },
  { url: '/about/overview', priority: '0.80', changefreq: 'monthly' },
  { url: '/about/mission-vision', priority: '0.80', changefreq: 'monthly' },
  { url: '/news', priority: '0.80', changefreq: 'weekly' },
  { url: '/contact', priority: '0.75', changefreq: 'monthly' },
  { url: '/inquire', priority: '0.75', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.40', changefreq: 'yearly' },
  { url: '/terms', priority: '0.40', changefreq: 'yearly' }
];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

for (const p of staticPages) {
  sitemapXml += `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>\n`;
}

for (const art of artworks) {
  const imgUrl = art.primaryImage ? `${baseUrl}${art.primaryImage}` : `${baseUrl}/images/artworks/photo-01.jpg`;
  const imgTitle = (art.title || art.slug).replace(/&/g, '&amp;');
  sitemapXml += `  <url>
    <loc>${baseUrl}/artworks/${art.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>${imgTitle}</image:title>
      <image:caption>Dawson Wells Gallery Archival Collection</image:caption>
    </image:image>
  </url>\n`;
}

sitemapXml += `</urlset>`;
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXml, 'utf-8');
console.log('Created public/sitemap.xml with', staticPages.length + artworks.length, 'URLs');

// 2. Build RSS / Feed XML
const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dawson Wells Gallery — Curatorial Announcements &amp; Exhibition Archive</title>
    <link>${baseUrl}</link>
    <description>Museum-caliber digital representation of Mr. Dawson Wells's artistic archive. Photography, paintings, drawings, ceramics, and prints.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>Dawson Wells: The Architecture of Silence (Online Viewing Room Open)</title>
      <link>${baseUrl}/viewing-rooms</link>
      <guid>${baseUrl}/viewing-rooms</guid>
      <pubDate>Mon, 28 Oct 2024 10:00:00 GMT</pubDate>
      <description>A curated digital salon pairing large-format platinum coastal exposures with monumental mineral canvases and wood-fired stoneware vessels.</description>
    </item>
    <item>
      <title>Chelsea Flagship Exhibition: The Material of Light</title>
      <link>${baseUrl}/news</link>
      <guid>${baseUrl}/news#chelsea-flagship</guid>
      <pubDate>Wed, 16 Oct 2024 10:00:00 GMT</pubDate>
      <description>Major survey presentation of Dawson Wells across five disciplines at 524 West 24th Street, New York.</description>
    </item>
    <item>
      <title>Master Prints Catalog Raisonné Released</title>
      <link>${baseUrl}/artworks/prints</link>
      <guid>${baseUrl}/artworks/prints#catalog</guid>
      <pubDate>Tue, 01 Oct 2024 10:00:00 GMT</pubDate>
      <description>Announcing the release of numbered woodblock relief counterforms on handmade 300gsm Japanese Kozo paper.</description>
    </item>
  </channel>
</rss>`;

fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rssXml, 'utf-8');
fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), rssXml, 'utf-8');
console.log('Created public/feed.xml and public/rss.xml');

// 3. Build comprehensive schema.json for SEO/AEO/GEO
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": `${baseUrl}/`,
      "name": "Dawson Wells Gallery",
      "description": "Museum-caliber contemporary art gallery representing the archive of Mr. Dawson Wells across Photography, Paintings, Drawings, Ceramics, and Prints.",
      "publisher": { "@id": `${baseUrl}/#organization` },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/artworks?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ArtGallery",
      "@id": `${baseUrl}/#organization`,
      "name": "Dawson Wells Gallery",
      "url": `${baseUrl}/`,
      "logo": {
        "@type": "ImageObject",
        "@id": `${baseUrl}/#logo`,
        "url": `${baseUrl}/apple-touch-icon.png`,
        "caption": "Dawson Wells Gallery Monogram"
      },
      "image": `${baseUrl}/og-image.jpg`,
      "founder": {
        "@type": "Person",
        "name": "Dawson Wells",
        "jobTitle": "Artist & Founder",
        "alumniOf": "University of Tennessee, Knoxville",
        "description": "Multi-disciplinary contemporary artist working across analog photography, mineral painting, vine charcoal, wood-fired ceramics, and master prints."
      },
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "524 West 24th Street",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "postalCode": "10011",
          "addressCountry": "US"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "14 Old Bond Street",
          "addressLocality": "London",
          "postalCode": "W1S 4PP",
          "addressCountry": "GB"
        }
      ],
      "telephone": "+1-000-000-0000",
      "email": "hello@yourgallery.com",
      "sameAs": [
        "https://www.clepto.in"
      ]
    }
  ]
};

fs.writeFileSync(path.join(__dirname, '../public/schema.json'), JSON.stringify(schemaGraph, null, 2), 'utf-8');
console.log('Created public/schema.json');
