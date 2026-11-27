// DJページ(/dj/)に並べる、DJとしての主催・出演の記録。
// 日付は開催日(日本時間)。深夜にまたぐ回も開始した日で書く。新しい順に並べる。

export type DjGig = {
  /** YYYY-MM-DD */
  date: string;
  name: string;
  /** イベントのハッシュタグ(# なし)。無い回は省く */
  tag?: string;
  /** 回を重ねるシリーズ名。同じ名前の回は一覧で1行にまとめ、各回は畳んで見せる */
  series?: string;
};

/** 自分が主催したイベント */
export const hosted: DjGig[] = [
  { date: '2026-11-13', name: 'Roof Top Junction lounge', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2026-10-31', name: 'Roof Top Junction vol.9', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2026-10-22', name: 'WHITEOUT', tag: 'WHITEOUT_VRC' },
  { date: '2026-08-13', name: 'Roof Top Junction vol.8', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2026-07-25', name: 'Roof Top Junction vol.7 1/2junctionコラボ回', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2026-06-06', name: 'Roof Top Junction vol.6', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2026-03-07', name: 'Roof Top Junction vol.5', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2025-12-20', name: 'Roof Top Junction vol.4', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2025-08-09', name: 'Roof Top Junction vol.3', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2025-05-17', name: 'Roof Top Junction vol.2', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
  { date: '2025-03-08', name: 'Roof Top Junction vol.1', tag: 'RoofTopJunction', series: 'Roof Top Junction' },
];

/** ほかの方のイベントへの出演 */
export const guest: DjGig[] = [
  { date: '2026-11-03', name: 'CLOSER://NOXR LUXE', tag: 'Club_CLOSER' },
  { date: '2026-10-20', name: 'CATCLUB SoraMuro', tag: 'VrCatClub' },
  { date: '2026-10-09', name: '飲酒タンス 1周年' },
  { date: '2026-10-08', name: 'HR 424_PØRAL//S vol.2', tag: 'POLARIIS' },
  { date: '2026-10-04', name: 'Limited Space vol.3', tag: 'LimitedSpace_VRC' },
  { date: '2026-09-22', name: 'UnderfLow Vol.3', tag: 'UnderfLow' },
  { date: '2026-09-19', name: 'HighVolume.Exhibition#2', tag: 'HIGHVL' },
  { date: '2026-07-17', name: 'CLOSER://NULL', tag: 'Club_CLOSER' },
  { date: '2026-06-27', name: 'VR PHOTO PRINT CLUB リアルミートアップイベント 懇親会' },
  { date: '2026-06-12', name: 'KujiAvatarMidnightClub', tag: 'KujiAvatarMidnightClub' },
  { date: '2026-05-15', name: 'LEAK PerformanceTest' },
  { date: '2026-04-01', name: 'KAMC Specialイベント #5', tag: 'KujiAvatarMidnightClub' },
  { date: '2026-03-13', name: 'CLOSER://SYNC', tag: 'Club_CLOSER' },
  { date: '2025-11-23', name: 'MARYCIA PLAYS MUSIC', tag: 'MaryciaPM' },
  { date: '2025-10-27', name: 'MondayOwls', tag: 'MondayOwls' },
  { date: '2025-10-04', name: '飲酒タンス' },
  { date: '2025-08-16', name: 'PATCH', tag: 'VRC_PATCH' },
  { date: '2025-07-04', name: '青色クラブ', tag: '青色クラブ' },
];

/** 録音を置いている場所 */
export const listen = [
  { label: 'SoundCloud', url: 'https://soundcloud.com/yutannpopo' },
  { label: 'Mixcloud', url: 'https://www.mixcloud.com/yutanpopoZzz/' },
];
