const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const logo = path.join(__dirname, '../public/images/brand/dw-logo.png');
  const interior = path.join(__dirname, '../public/images/artworks/gallery-interior.jpg');
  
  // 1. Create a luxury square badge with dark slate/obsidian background and gold/white DW monogram
  const bgSize = 512;
  const svgBadge = Buffer.from(`
    <svg width="${bgSize}" height="${bgSize}" viewBox="0 0 ${bgSize} ${bgSize}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#121110" rx="64" />
      <rect x="16" y="16" width="${bgSize - 32}" height="${bgSize - 32}" fill="none" stroke="#8B7355" stroke-width="2" rx="56" />
    </svg>
  `);
  
  const logoResized = await sharp(logo).resize(320, 320, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  
  const masterIconBuffer = await sharp(svgBadge)
    .composite([{ input: logoResized, gravity: 'center' }])
    .png()
    .toBuffer();

  const pub = path.join(__dirname, '../public');

  // Write android-chrome-512x512.png
  await sharp(masterIconBuffer).resize(512, 512).toFile(path.join(pub, 'android-chrome-512x512.png'));
  // Write android-chrome-192x192.png
  await sharp(masterIconBuffer).resize(192, 192).toFile(path.join(pub, 'android-chrome-192x192.png'));
  // Write apple-touch-icon.png
  await sharp(masterIconBuffer).resize(180, 180).toFile(path.join(pub, 'apple-touch-icon.png'));
  // Write mstile-150x150.png
  await sharp(masterIconBuffer).resize(150, 150).toFile(path.join(pub, 'mstile-150x150.png'));
  // Write favicon-32x32.png
  await sharp(masterIconBuffer).resize(32, 32).toFile(path.join(pub, 'favicon-32x32.png'));
  // Write favicon-16x16.png
  await sharp(masterIconBuffer).resize(16, 16).toFile(path.join(pub, 'favicon-16x16.png'));
  // Write favicon.ico
  await sharp(masterIconBuffer).resize(48, 48).toFile(path.join(pub, 'favicon.ico'));
  fs.copyFileSync(path.join(pub, 'favicon.ico'), path.join(__dirname, '../src/app/favicon.ico'));

  // 2. Generate a stunning 1200x630 OG Image (og-image.jpg)
  const ogSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080808" stop-opacity="0.94" />
          <stop offset="60%" stop-color="#111111" stop-opacity="0.88" />
          <stop offset="100%" stop-color="#1c1917" stop-opacity="0.95" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad)" />
      <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#8B7355" stroke-width="1.5" opacity="0.6" />
      <rect x="48" y="48" width="1104" height="534" fill="none" stroke="#C5A059" stroke-width="0.5" opacity="0.3" />
      
      <!-- Label -->
      <text x="100" y="140" font-family="sans-serif" font-size="14" font-weight="600" fill="#C5A059" letter-spacing="8">NEW YORK • LONDON • PRIVATE SALON</text>
      
      <!-- Title -->
      <text x="100" y="240" font-family="serif" font-size="76" font-weight="300" fill="#FAF9F6" letter-spacing="4">DAWSON WELLS</text>
      <text x="100" y="320" font-family="serif" font-size="42" font-style="italic" font-weight="300" fill="#D1CDC4" letter-spacing="6">G A L L E R Y</text>
      
      <!-- Divider -->
      <line x1="100" y1="360" x2="320" y2="360" stroke="#8B7355" stroke-width="1" opacity="0.8" />
      
      <!-- Subtitle and Disciplines -->
      <text x="100" y="410" font-family="sans-serif" font-size="18" font-weight="300" fill="#E5E2DA" letter-spacing="2">MUSEUM-CALIBER CONTEMPORARY ARCHIVE</text>
      <text x="100" y="450" font-family="sans-serif" font-size="14" font-weight="400" fill="#8E8B82" letter-spacing="3">PHOTOGRAPHY • PAINTINGS • DRAWINGS • CERAMICS • MASTER PRINTS</text>
      
      <!-- Footnote -->
      <text x="100" y="530" font-family="sans-serif" font-size="13" font-weight="500" fill="#666666" letter-spacing="2">CHELSEA ARTS DISTRICT 524 W 24TH ST, NY • MAYFAIR OLD BOND ST, LONDON</text>
      <text x="1000" y="530" font-family="sans-serif" font-size="13" font-weight="500" fill="#8B7355" letter-spacing="1">clepto.in</text>
    </svg>
  `);

  const bgInterior = await sharp(interior).resize(1200, 630, { fit: 'cover' }).toBuffer();
  
  await sharp(bgInterior)
    .composite([
      { input: ogSvg, blend: 'over' }
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(pub, 'og-image.jpg'));

  console.log('Successfully generated all icons and og-image.jpg');
}

generateIcons().catch(err => {
  console.error(err);
  process.exit(1);
});
