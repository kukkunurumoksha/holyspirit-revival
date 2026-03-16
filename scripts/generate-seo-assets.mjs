import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

async function generateOgImage() {
  const src = resolve(root, "public/images/revival/church-hall/packed-family-crowd.webp");
  const out = resolve(root, "public/og-image.jpg");
  await sharp(src)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 80 })
    .toFile(out);
  console.log("Created og-image.jpg");
}

async function generateFavicons() {
  const src = resolve(root, "public/favicon.png");

  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "icon-192.png", size: 192 },
    { name: "icon-512.png", size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(src)
      .resize(size, size, { fit: "cover" })
      .png()
      .toFile(resolve(root, "public", name));
    console.log(`Created ${name} (${size}x${size})`);
  }
}

async function main() {
  await generateOgImage();
  await generateFavicons();
  console.log("Done! All SEO assets generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
