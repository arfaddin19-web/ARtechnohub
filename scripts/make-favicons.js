/* Builds the site icons from the prepared logo (public/logo-ar.png), centred on
   a square transparent canvas — the AR mark is 1.12:1, so writing it straight
   into a 32x32 box would squash it.

   Usage: node scripts/make-favicons.js [sourceLogo] */
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const PUBLIC = path.join(__dirname, '..', 'public');
const SRC = process.argv[2] || path.join(PUBLIC, 'logo-ar.png');
const TARGETS = [
  ['favicon-32.png', 32, 'transparent'],
  ['icon-64.png', 64, 'transparent'],
  ['apple-touch-icon.png', 180, 'transparent'],
  // Square, opaque: Schema.org asks for a >=112px square logo, and Google
  // centre-crops non-square images — which would clip the 1.12:1 AR mark.
  ['logo-ar-square.png', 512, '#ffffff'],
];
const FILL = 0.8; // share of the icon box the mark should span (width)

const bg = (mode) =>
  mode === 'transparent'
    ? { r: 0, g: 0, b: 0, alpha: 0 }
    : { r: parseInt(mode.slice(1, 3), 16), g: parseInt(mode.slice(3, 5), 16), b: parseInt(mode.slice(5, 7), 16), alpha: 1 };

(async () => {
  if (!fs.existsSync(SRC)) {
    console.error('missing source:', SRC);
    process.exit(1);
  }

  const meta = await sharp(SRC).metadata();

  for (const [name, size, mode] of TARGETS) {
    const w = Math.round(size * FILL);
    const h = Math.max(1, Math.round((w * meta.height) / meta.width));
    const mark = await sharp(SRC).resize({ width: w, height: h }).png().toBuffer();

    const out = await sharp({
      create: { width: size, height: size, channels: 4, background: bg(mode) },
    })
      .composite([{ input: mark, gravity: 'center' }])
      .png({ compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(path.join(PUBLIC, name), out);
    console.log(`${name}: ${size}x${size}  mark ${w}x${h}  ${mode}  ${(out.length / 1024).toFixed(1)} KB`);
  }
})();
