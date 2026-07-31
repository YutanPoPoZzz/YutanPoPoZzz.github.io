// WORKSの3本柱カテゴリ。content/works/*.md の frontmatter `category` が
// jp と一致したものがその枠に入る(どれにも一致しない+minimaは「その他」)
export type WorkCategory = {
  slug: string;
  jp: string;
  en: string;
  desc: string;
  /** public/works/ 配下の代表画像。未設定は空フレーム表示 */
  thumb?: string;
};

export const workCategories: WorkCategory[] = [
  {
    slug: 'visual',
    jp: '画像制作',
    en: 'VISUAL WORKS',
    desc: 'イベントポスターやSNS告知、アバター・衣装のプロモーションビジュアルなど、写真とグラフィックを組み合わせた画像制作。撮影から文字入れ・仕上げまで一貫して行います。',
    thumb: '/works/visual.jpg',
  },
  {
    slug: 'writing',
    jp: '執筆活動',
    en: 'WRITING',
    desc: 'VR写真文化についての記事や、撮影ノウハウの解説など、写真にまつわる文章の執筆。まだ外からは見えにくいVRの風景を、言葉でも外の世界へ運びます。',
    thumb: '/works/note-retouch-card.jpg',
  },
  {
    slug: 'lecture',
    jp: '講演・教室',
    en: 'LECTURES & WORKSHOPS',
    desc: 'VRChatでの写真教室・撮影講習・写真講評など、撮る楽しさと技術を伝える活動。初心者からステップアップまで、依頼に合わせて内容を組みます。',
  },
];
