import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../assets');

const filesToCompress = [
  { input: 'chirag1.png', output: 'chirag1.webp', maxWidth: 1000 },
  { input: 'chirag2.png', output: 'chirag2.webp', maxWidth: 1000 },
];

async function compressImages() {
  console.log('Starting image compression...');
  for (const item of filesToCompress) {
    const inputPath = path.join(assetsDir, item.input);
    const outputPath = path.join(assetsDir, item.output);

    if (!fs.existsSync(inputPath)) {
      console.warn(`Input file not found: ${inputPath}`);
      continue;
    }

    try {
      console.log(`Compressing ${item.input} -> ${item.output}...`);
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      let pipeline = image;
      if (metadata.width > item.maxWidth) {
        pipeline = pipeline.resize({ width: item.maxWidth, fit: 'inside' });
      }

      await pipeline
        .webp({ quality: 80 })
        .toFile(outputPath);

      const oldSize = fs.statSync(inputPath).size / (1024 * 1024);
      const newSize = fs.statSync(outputPath).size / (1024 * 1024);

      console.log(`Successfully compressed ${item.output}!`);
      console.log(`Size reduced from ${oldSize.toFixed(2)} MB to ${newSize.toFixed(2)} MB (${((1 - newSize/oldSize) * 100).toFixed(1)}% savings)`);
    } catch (error) {
      console.error(`Error processing ${item.input}:`, error);
    }
  }
}

compressImages();
