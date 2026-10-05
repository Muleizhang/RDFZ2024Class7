import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const game = fileURLToPath(new URL('../', import.meta.url));
// Optional original art directory; otherwise verify the committed runtime images.
const source = process.argv[2] ? path.resolve(process.argv[2]) : null;
const manifestPath = path.join(game, 'art/portrait-manifest.json');
const manifest = JSON.parse(fs.readFileSync(source ? path.join(source, 'manifest.json') : manifestPath, 'utf8'));
const destination = path.join(game, 'public/assets/portraits');
const data = {};
fs.mkdirSync(destination, {recursive: true});
for (const person of manifest) {
  const pair = {};
  for (const version of person.versions) {
    const filename = version.id + '.png';
    const original = source ? path.join(source, version.file) : path.join(destination, filename);
    if (!version.ready || !fs.existsSync(original)) throw Error('立绘未完成：' + version.file);
    if (source) fs.copyFileSync(original, path.join(destination, filename));
    pair[version.season] = 'portraits/' + filename;
  }
  if (!pair.summer || !pair.winter) throw Error('长短袖不完整：' + person.name);
  data[person.name] = pair;
}
fs.writeFileSync(path.join(game, 'src/data/portraitAssets.ts'),
  '// Personal portrait resource map; names stay independent of story character IDs.\n' +
  '// Source: art/portrait-manifest.json\n' +
  'const portraits = ' + JSON.stringify(data, null, 2) + ';\nexport default portraits;\n');
if (source) fs.writeFileSync(manifestPath, JSON.stringify(manifest.map(({photos, ...person}) => person), null, 2) + '\n');
console.log('已' + (source ? '同步' : '核对') + ' ' + manifest.length + ' 人的长短袖立绘。');
