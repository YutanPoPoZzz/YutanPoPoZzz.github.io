import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSizeFromFile } from 'image-size/fromFile';

const publicDir = fileURLToPath(new URL('../../public', import.meta.url));
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
  try {
    const { width, height } = await imageSizeFromFile(path.join(publicDir, thumb));
    if (width && height) aspect = width / height;
  } catch {
    /* プレースホルダーSVG等は既定値に落とす */
  }
  cache.set(thumb, aspect);
  return aspect;
}
