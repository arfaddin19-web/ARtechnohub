/* Prepares a logo for the site: removes a baked-in white background and
   resizes it, so the mark sits cleanly on the warm-white header and the
   tinted page background.

   Usage: node scripts/make-logo.js <source> <output> [width]

   How the background is removed: alpha is derived from each pixel's distance
   from pure white. Distance below T0 (the flat background) becomes fully
   transparent; above T1 (anything carrying actual colour) stays fully opaque;
   between the two is a short ramp so anti-aliased edges feather instead of
   leaving a white fringe. */
const path = require('path');
const sharp = require('sharp');

const [, , src, out, widthArg] = process.argv;

if (!src || !out) {
  console.error('Usage: node scripts/make-logo.js <source> <output> [width]');
  process.exit(1);
}

const WIDTH = Number(widthArg) || 256;
const T0 = 10; // below this distance from white -> fully transparent
const T1 = 45; // above this distance from white -> fully opaque

(async () => {
  const { data, info } = await sharp(src)
    .resize({ width: WIDTH, withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let transparent = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const dist = Math.sqrt((255 - r) ** 2 + (255 - g) ** 2 + (255 - b) ** 2);
    let a;
    if (dist <= T0) a = 0;
    else if (dist >= T1) a = 255;
    else a = Math.round(((dist - T0) / (T1 - T0)) * 255);
    data[i + 3] = a;
    if (a < 250) transparent++;
  }

  const buf = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();

  require('fs').writeFileSync(out, buf);

  const total = info.width * info.height;
  console.log(
    `${path.basename(out)}: ${info.width}x${info.height}  ${(buf.length / 1024).toFixed(0)} KB  ` +
      `transparent=${((transparent / total) * 100).toFixed(1)}%`,
  );
})();
