import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, parse } from "path";

const DIRS = [
  "public/images/revival/church-hall",
  "public/images/revival/convention",
  "public/images/revival/indonesia",
  "public/images/revival/ireland",
  "public/images/revival/new-delhi",
  "public/images/revival/uganda",
  "public/images/revival/uk",
];

const MAX_WIDTH = 1200;
const WEBP_QUALITY = 75;

async function main() {
  let totalOriginal = 0;
  let totalCompressed = 0;
  let processed = 0;

  for (const dir of DIRS) {
    const files = (await readdir(dir)).filter((f) =>
      /\.(jpe?g|png)$/i.test(f)
    );

    for (const file of files) {
      const inputPath = join(dir, file);
      const outputName = parse(file).name + ".webp";
      const outputPath = join(dir, outputName);

      const originalSize = (await stat(inputPath)).size;
      totalOriginal += originalSize;

      await sharp(inputPath)
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath);

      const compressedSize = (await stat(outputPath)).size;
      totalCompressed += compressedSize;
      processed++;

      console.log(`  ${file} → ${outputName} (${(originalSize / 1024).toFixed(0)}KB → ${(compressedSize / 1024).toFixed(0)}KB)`);
    }
  }

  console.log(`\nDone! ${processed} images compressed.`);
  console.log(`Original:   ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Compressed: ${(totalCompressed / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Saved:      ${(((totalOriginal - totalCompressed) / totalOriginal) * 100).toFixed(1)}%`);
}

main().catch(console.error);
