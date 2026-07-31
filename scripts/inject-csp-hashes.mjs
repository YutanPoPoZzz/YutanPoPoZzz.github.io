// Astroはコンポーネントの<script>をインラインで出力するため、
// meta CSPのscript-src 'self'だけだとブロックされる。
// ビルド後にdist内の各HTMLからインラインスクリプトを拾い、
// sha256ハッシュをそのページのCSPに注入する。
import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const distDir = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

const INLINE_SCRIPT = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;
const CSP_META = /(<meta http-equiv="Content-Security-Policy" content="[^"]*script-src 'self')/;

let patched = 0;
for await (const file of htmlFiles(distDir)) {
  const html = await readFile(file, 'utf8');
  const hashes = [...html.matchAll(INLINE_SCRIPT)]
    .map((m) => m[1])
    .filter((body) => body.trim().length > 0)
    .map((body) => `'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
  if (hashes.length === 0) continue;
  if (!CSP_META.test(html)) {
    console.warn(`[csp] meta CSPが見つからない: ${path.relative(distDir, file)}`);
    continue;
  }
  const next = html.replace(CSP_META, `$1 ${[...new Set(hashes)].join(' ')}`);
  await writeFile(file, next, 'utf8');
  patched++;
}
console.log(`[csp] ${patched} ページにインラインスクリプトのハッシュを注入した`);
