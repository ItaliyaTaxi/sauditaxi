// Generates the brand favicon set from inline SVGs using sharp.
// Run with: node scripts/generate-icons.mjs
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const NAVY = "#0b1220";
const GOLD = "#f5b820";

// The taxi glyph used by the brand logo, centered for an icon.
const taxi = `
  <g transform="translate(0 -4)">
    <path d="M16 44l3-12a4 4 0 0 1 4-3h18a4 4 0 0 1 4 3l3 12M14 44h36M20 44v5M44 44v5"
      stroke="${NAVY}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="22" cy="38" r="2.6" fill="${NAVY}"/>
    <circle cx="42" cy="38" r="2.6" fill="${NAVY}"/>
  </g>`;

// Favicon: transparent corners, gold rounded square + taxi (matches the logo).
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="${GOLD}"/>
  ${taxi}
</svg>`;

// App icon (Apple/PWA): full-bleed navy background with a centered gold tile.
const appIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" fill="${NAVY}"/>
  <g transform="translate(30 30) scale(1.875)">
    <rect width="64" height="64" rx="14" fill="${GOLD}"/>
    ${taxi}
  </g>
</svg>`;

const png = (svg, size) =>
  sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();

// Minimal ICO encoder (packs PNG images — supported by all modern browsers).
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const dir = Buffer.alloc(16 * images.length);
  let offset = 6 + dir.length;
  const bodies = [];
  images.forEach((img, i) => {
    const b = i * 16;
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, b + 0); // width
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, b + 1); // height
    dir.writeUInt8(0, b + 2); // palette
    dir.writeUInt8(0, b + 3); // reserved
    dir.writeUInt16LE(1, b + 4); // color planes
    dir.writeUInt16LE(32, b + 6); // bits per pixel
    dir.writeUInt32LE(img.data.length, b + 8); // size of image data
    dir.writeUInt32LE(offset, b + 12); // offset
    offset += img.data.length;
    bodies.push(img.data);
  });
  return Buffer.concat([header, dir, ...bodies]);
}

async function main() {
  // SVG favicon (scalable)
  await writeFile(join(root, "app/icon.svg"), faviconSvg, "utf8");

  // Apple touch icon
  await writeFile(join(root, "app/apple-icon.png"), await png(appIconSvg, 180));

  // PWA / Android icons
  await writeFile(join(root, "public/icon-192.png"), await png(appIconSvg, 192));
  await writeFile(join(root, "public/icon-512.png"), await png(appIconSvg, 512));

  // favicon.ico (16/32/48)
  const ico = buildIco([
    { size: 16, data: await png(faviconSvg, 16) },
    { size: 32, data: await png(faviconSvg, 32) },
    { size: 48, data: await png(faviconSvg, 48) },
  ]);
  await writeFile(join(root, "app/favicon.ico"), ico);

  console.log("Generated: app/icon.svg, app/apple-icon.png, app/favicon.ico, public/icon-192.png, public/icon-512.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
