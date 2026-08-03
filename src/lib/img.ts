import variants from '../data/image-variants.json';

type Entry = { width: number; height: number; variants: [number, string][] };
const table = variants as unknown as Record<string, Entry>;

/**
 * public配下の画像に対応するWebPのsrcsetを返す(未生成ならundefined)。
 * 一覧は scripts/gen-webp.mjs が書き出す image-variants.json。
 * 写真を入れ替えたら同スクリプトを回すこと。
 */
export function webpSrcset(src: string, base = ''): string | undefined {
  const entry = table[src];
  if (!entry) return undefined;
  return entry.variants.map(([w, p]) => `${base}${p} ${w}w`).join(', ');
}

/** 原寸(いちばん大きい幅)のWebPパス。ライトボックスなど等倍表示用 */
export function webpFull(src: string, base = ''): string | undefined {
  const entry = table[src];
  if (!entry?.variants.length) return undefined;
  return base + entry.variants[entry.variants.length - 1][1];
}

/** 元画像の実寸(width/height属性に入れてレイアウトのガタつきを防ぐ) */
export function imgSize(src: string): { width: number; height: number } | undefined {
  const entry = table[src];
  return entry ? { width: entry.width, height: entry.height } : undefined;
}
