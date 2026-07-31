// ABOUTページに並べる実績データ。

export type Achievement = {
  year: string;
  title: string;
  note?: string;
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
  { year: '2026', title: 'アバター・衣装ブランド複数社の商品撮影' },
];

export const sponsors: Achievement[] = [
  { year: '—', title: 'DIANA', note: 'diana-shoes.com' },
];

export const exhibitions: Achievement[] = [
  {
    year: '2026.06',
    title: 'Virtual Photography Showcase 2026 招待作家',
    note: '金沢21世紀美術館',
  },
];

export const activities: Achievement[] = [
  { year: '2025.03〜', title: 'DJイベント「RoofTopJunction」主催', note: '企画・会場ワールド制作・ポスター・運営・撮影' },
  { year: '2025.10〜', title: 'VRChat写真教室' },
  { year: '—', title: '撮影講習', note: '2回実施' },
];
