// Requires ImageMagick with WebP support; no npm dependency or global settings.
// Optional source directory, e.g. an archived original PNG directory.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
const game = fileURLToPath(new URL('../', import.meta.url));
const source = path.resolve(process.argv[2] || path.join(game, 'public/assets'));
const destination = path.join(game, 'public/assets');
const files = [];
async function walk(dir) {
  for (const e of await fs.readdir(dir, {withFileTypes:true})) {
    const file = path.join(dir, e.name);
    if (e.isDirectory()) await walk(file);
    else if (/\.(png|jpe?g)$/i.test(e.name)) files.push(file);
  }
}
function run(args) {
  return new Promise((resolve, reject) => {
    const child = spawn('magick', args);
    let error = '';
    child.stdout.resume();
    child.stderr.on('data', chunk => { error += chunk; });
    child.on('error', reject);
    child.on('close', code => code === 0 ? resolve(error) : reject(Error(error || 'magick exit '+code)));
  });
}
await walk(source);
if (!files.length) {
  console.log('没有待转换的PNG／JPEG，保留现有转换记录。');
  process.exit(0);
}
let index = 0, completed = 0;
const records = [];
async function worker() {
  while (index < files.length) {
    const file = files[index++];
    const relative = path.relative(source, file);
    const output = path.join(destination, relative.replace(/\.(png|jpe?g)$/i, '.webp'));
    await fs.mkdir(path.dirname(output), {recursive:true});
    await run([file, '-quality', '100', '-define', 'webp:lossless=true', '-define', 'webp:exact=true', '-define', 'webp:method=4', output]);
    const difference = await run(['compare', '-metric', 'AE', file, output, 'null:']);
    if (!/^0(?:\s|$)/.test(difference.trim())) throw Error('像素不一致：'+relative+' '+difference);
    records.push({file:relative.replace(/\.(png|jpe?g)$/i,'.webp'), originalBytes:(await fs.stat(file)).size, webpBytes:(await fs.stat(output)).size, pixelDifference:0});
    completed++;
    if (completed % 10 === 0 || completed === files.length) console.log('已无损转换并核对 '+completed+'/'+files.length);
  }
}
await Promise.all(Array.from({length:3}, worker));
records.sort((a,b)=>a.file.localeCompare(b.file));
await fs.writeFile(path.join(game, 'art/webp-conversion.json'), JSON.stringify({encoding:'WebP lossless, quality=100, exact=true, method=4; original resolution and alpha preserved',files:records},null,2)+'\n');
console.log(JSON.stringify({files:records.length,originalBytes:records.reduce((s,r)=>s+r.originalBytes,0),webpBytes:records.reduce((s,r)=>s+r.webpBytes,0)}));
