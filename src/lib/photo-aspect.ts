import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSizeFromFile } from 'image-size/fromFile';

// 開発サーバーでは src/lib から見た ../../public、ビルド中はこのファイルが dist 側へ
// まとめられて相対位置がずれるため、作業フォルダ直下の public も探す
const publicDirs = [
  fileURLToPath(new URL('../../public', import.meta.url)),
  path.resolve(process.cwd(), 'public'),
];
// ビルド中に同じ画像を何度も読まないためのキャッシュ
const cache = new Map<string, number>();

/**
 * public/ 配下の画像の縦横比(width/height)をビルド時に読む。読めなければ3:4縦。
 * 注意: sharpはビルドの並列ページ生成でネイティブクラッシュ(0xC0000409)することが
 * あったため、寸法読みは純JSのimage-sizeを使う(2026-07-30に置き換え)
 */
export async function photoAspect(thumb: string): Promise<number> {
  const hit = cache.get(thumb);
  if (hit !== undefined) return hit;
  let aspect = 3 / 4;
  let lastError: unknown;
  let found = false;
  for (const dir of publicDirs) {
    try {
      const { width, height } = await imageSizeFromFile(path.join(dir, thumb));
      if (width && height) aspect = width / height;
      found = true;
      break;
    } catch (e) {
      lastError = e;
    }
  }
  if (!found) {
    // 握り潰すと全部3:4で表示される事故になるので必ず知らせる
    console.warn(`[photo-aspect] ${thumb} の寸法を読めず3:4で表示します:`, lastError);
  }
  cache.set(thumb, aspect);
  return aspect;
}
