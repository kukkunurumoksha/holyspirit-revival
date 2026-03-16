import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, parse } from "path";

const INPUT_DIR = "public/images/revival/gallery";
const OUTPUT_DIR = "public/images/revival/gallery-optimized";
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 75;

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await readdir(INPUT_DIR)).filter((f) =>
    /\.(jpe?g|png|webp)$/i.test(f)
  );

  console.log(`Found ${files.length} images to compress...`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  let processed = 0;

  // Process in batches of 10 for speed without overwhelming memory
  for (let i = 0; i < files.length; i += 10) {
    const batch = files.slice(i, i + 10);
    await Promise.all(
      batch.map(async (file) => {
        const inputPath = join(INPUT_DIR, file);
        const outputName = parse(file).name + ".webp";
        const outputPath = join(OUTPUT_DIR, outputName);

        const originalSize = (await stat(inputPath)).size;
        totalOriginal += originalSize;

        await sharp(inputPath)
          .rotate() // auto-rotate based on EXIF orientation
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(outputPath);

        const compressedSize = (await stat(outputPath)).size;
        totalCompressed += compressedSize;
        processed++;

        if (processed % 20 === 0) {
          console.log(`  ${processed}/${files.length} done...`);
        }
      })
    );
  }

  console.log(`\nDone! ${processed} images compressed.`);
  console.log(
    `Original:   ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`
  );
  console.log(
    `Compressed: ${(totalCompressed / 1024 / 1024).toFixed(1)} MB`
  );
  console.log(
    `Saved:      ${(((totalOriginal - totalCompressed) / totalOriginal) * 100).toFixed(1)}%`
  );
}

main().catch(console.error);
