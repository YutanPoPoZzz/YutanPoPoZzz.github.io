// 受けられる仕事の6項目。WORKSの「しごとについて」に並び、
// 制作実績カードのタグ(frontmatterの category)もこの6つから選ぶ。

export type Service = {
  /** works の frontmatter category と一致させる名前 */
  name: string;
  /** /works/tag/<slug>/ のURLになる */
  slug: string;
  desc: string;
  color: string;
};

export const services: Service[] = [
  {
    name: 'ポートレート撮影',
    slug: 'portrait',
    desc: 'バーチャル宣材写真・記念撮影。世界観に合わせたロケーション選びから',
    color: '#ff9ecb',
  },
  {
    name: '商品・プロモーション撮影',
    slug: 'product',
    desc: 'アバター・衣装・ギミックなどの販売用ビジュアル',
    color: '#7ec8ff',
  },
  {
    name: 'イベント記録・風景撮影',
    slug: 'event',
    desc: 'イベント当日の空気感を残す記録写真',
    color: '#4dd98a',
  },
  {
    name: 'ポスター・告知ビジュアル制作',
    slug: 'poster',
    desc: 'イベント告知やSNS用の文字入れ込みビジュアル',
    color: '#ffb04d',
  },
  {
    name: '展示物制作',
    slug: 'exhibition',
    desc: '展示に向けた作品制作。プリント・レコードなど実物の設計から設営まで',
    color: '#b98cff',
  },
  {
    name: '執筆・イベント出演',
    slug: 'writing',
    desc: 'VR写真についての記事執筆・寄稿、写真教室や講評などの登壇',
    color: '#ffe08a',
  },
];

/** カテゴリ名から差し色を引く(該当なしは既定色) */
export const serviceColor = (name: string, fallback = '#4da6ff') =>
  services.find((s) => s.name === name)?.color ?? fallback;
