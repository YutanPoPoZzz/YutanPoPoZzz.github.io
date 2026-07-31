// WORKS一覧とHOMEダイジェストに出す「minimaシリーズ」の集約カード。
// WorkCardが読むCollectionEntry互換の形(実体はシリーズページ /works/minima-series/ へのリンク)
export const minimaSeriesCard = {
  id: 'minima-series',
  data: {
    title: 'minima series',
    category: '音楽アプリ・シリーズ',
    date: new Date('2026-07-10'),
    color: '#cfd8ff',
    thumb: '/thumbs/minima-rack.svg',
    status: '全10機',
  },
} as const;
