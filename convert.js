import process from 'process';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function convert() {
  const dir = path.join(process.cwd(), 'images');
  const pubDir = path.join(process.cwd(), 'public', 'images');
  
  if (!fs.existsSync(pubDir)) {
    fs.mkdirSync(pubDir, { recursive: true });
  }

  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.jpg')) {
      const parsed = path.parse(file);
      const name = parsed.name;
      const srcPath = path.join(dir, file);
      const destPath = path.join(pubDir, `${name}.webp`);
      
      console.log(`Converting ${srcPath} to ${destPath}`);
      await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);
      console.log(`Converted ${name}`);
    }
  }
}

convert().catch(console.error);
