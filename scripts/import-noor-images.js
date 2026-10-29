/* One-off: turn the Noor app screenshots into sized WebP files for
   public/product/. Run with: node scripts/import-noor-images.js
   Prints each output's pixel dimensions so they can be pasted into the
   width/height props in app/products/noor/page.tsx. */
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const OUT = path.join(__dirname, '..', 'public', 'product');
const SRC = 'C:\\Users\\Arfad\'s\\Downloads\\WhatsApp Unknown 2026-10-29 at 20.22.38';

/* src -> output file */
const JOBS = [
  ['WhatsApp Image 2026-10-29 at 20.21.17.jpeg', 'noor-home.webp'],
  ['WhatsApp Image 2026-10-29 at 20.21.18 (1).jpeg', 'noor-prayer-times.webp'],
  ['WhatsApp Image 2026-10-29 at 20.21.18.jpeg', 'noor-masjids.webp'],
  ['WhatsApp Image 2026-10-29 at 20.21.17 (1).jpeg', 'noor-qibla.webp'],
];

const WIDTH = 720;

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, out] of JOBS) {
    const src = path.join(SRC, name);
    if (!fs.existsSync(src)) {
      console.error('MISSING', src);
      continue;
    }
    const buf = await sharp(src)
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toBuffer();
    fs.writeFileSync(path.join(OUT, out), buf);
    const m = await sharp(buf).metadata();
    console.log(`${out}: ${m.width}x${m.height}  ${(buf.length / 1024).toFixed(0)} KB`);
  }

  // The previous set's "progress" shot is no longer part of the app design.
  const stale = path.join(OUT, 'noor-progress.webp');
  if (fs.existsSync(stale)) {
    fs.unlinkSync(stale);
    console.log('removed noor-progress.webp');
  }
})();
