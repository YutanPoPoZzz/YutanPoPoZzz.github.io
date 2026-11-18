// サイト全体を「黒い台紙の写真集」として組むための章立て。
// 柱の目次(Base.astro)と HOME の目次・各章見出しが、この1か所の番号を参照する。
// 並びは「知る→頼む→問い合わせる」。お問い合わせは本の最後の頁＝奥付。
export interface Chapter {
  /** 章番号(漢数字)。表紙と奥付は番号の代わりに呼び名 */
  n: string;
  jp: string;
  path: string;
}

export const chapters: Chapter[] = [
  { n: '表紙', jp: 'ホーム', path: '/' },
  { n: '一', jp: 'ギャラリー', path: '/gallery/' },
  { n: '二', jp: 'ポートフォリオ', path: '/works/' },
  { n: '三', jp: 'イベント運営', path: '/events/' },
  { n: '四', jp: 'じぶんのこと', path: '/about/' },
  { n: '五', jp: 'バーチャルフォトとは', path: '/virtual-photographer/' },
  { n: '六', jp: '撮影依頼ガイド', path: '/photography/' },
  { n: '奥付', jp: 'お問い合わせ', path: '/contact/' },
];

export const chapterOf = (path: string) => chapters.find((c) => c.path === path);
