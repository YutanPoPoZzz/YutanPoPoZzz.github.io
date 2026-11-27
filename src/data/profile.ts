// ABOUTページに並べる実績データ。

/**
 * ご依頼の受付状況。CONTACTページとHOMEのCONTACT帯が参照する。
 * サイト更新(号令メンテ)のたびに asOf / open / text を見直すこと。
 */
export const availability = {
  open: true,
  asOf: '2026年11月',
  text: 'ご依頼を受け付けています',
  /** HOMEのCONTACT帯に出す短縮表記 */
  short: '受付中',
};


export type Achievement = {
  year: string;
  title: string;
  note?: string;
  /** 詳細ページへのリンク(サイト内はベースURLからの相対パス、外部は絶対URL) */
  href?: string;
};

export const awards: Achievement[] = [
  { year: '2026.07', title: '第4回 YOYOGIMORIアバターフォトコンテスト 優秀賞', note: '主催: Gallery & fanCafé Kittens' },
  { year: '2025.12', title: 'VR PHOTO COMPETITION 2025 優秀賞', note: '主催: フジフイルム' },
  { year: '2025.07', title: '第2回 YOYOGIMORIアバターフォトコンテスト 優秀賞', note: '主催: Gallery & fanCafé Kittens' },
  { year: '2025.01', title: 'VR Photography Contest 2025 最優秀賞', note: '主催: XR Grapher Association' },
  { year: '2024.12', title: '第1回 YOYOGIMORIアバターフォトコンテスト 優秀賞', note: '主催: Gallery & fanCafé Kittens' },
  { year: '—', title: 'ほか、受賞いくつか' },
];

export const clientWorks: Achievement[] = [
  { year: '2025.12', title: 'HARE — アイテム撮影', note: 'アンドエスティ メタバース' },
  { year: '2026.01', title: 'DDD AllNight — イベント撮影', note: 'ClubDDD' },
  {
    year: '2026',
    title: 'アバター・衣装・靴ブランドの商品撮影',
    note: 'DIANA・大丸松坂屋アバター・Teddybear House・BlackSunsIns など16ブランド',
    href: '/works/#pr',
  },
];

export const sponsors: Achievement[] = [
  { year: '—', title: 'DIANA', note: 'diana-shoes.com' },
];

export const exhibitions: Achievement[] = [
  {
    year: '2026.10',
    title: '写真展『WHITEOUT』主催',
    note: '作家30名超・33作品。会場のワールドも制作',
    href: '/works/whiteout/',
  },
  {
    year: '2026.06',
    title: 'Virtual Photography Showcase 2026 招待作家',
    note: '金沢21世紀美術館',
    href: '/works/vps-2026/',
  },
  { year: '2026.05', title: 'リアル写真の合同展『Real Ⅱ』出展' },
];

export const activities: Achievement[] = [
  { year: '2025.03〜', title: 'DJイベント「Roof Top Junction」主催', note: '企画・会場ワールド制作・ポスター・運営・撮影', href: '/events/roof-top-junction/' },
  { year: '2025.10〜', title: 'VRChat写真教室', note: 'Gallery & fan cafe Kittens の写真教室で講師。講評つきの5日間、2026.02 に第2期' },
  {
    year: '2026.11',
    title: '「#VRCPhoto豆知識」',
    note: '撮影・ポージング・編集で考えていることをXにまとめた投稿',
    href: 'https://x.com/YutanpopoZzz/status/2118251884989612291',
  },
  { year: '—', title: '撮影講習', note: '2回実施' },
];
