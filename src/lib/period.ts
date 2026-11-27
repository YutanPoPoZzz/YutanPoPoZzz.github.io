// 投稿の日付の並びから「2025.02〜2026.07」のような期間の表記を作る。
// WORKS のブランド一覧と、ブランドのページの見出しで同じ書き方にするための共通関数
export const fmtMonth = (x: Date) => `${x.getFullYear()}.${String(x.getMonth() + 1).padStart(2, '0')}`;

export function periodOf(dates: Date[]): { first: Date; last: Date; label: string } {
  const times = dates.map((d) => d.getTime());
  const first = new Date(Math.min(...times));
  const last = new Date(Math.max(...times));
  const label = fmtMonth(first) === fmtMonth(last) ? fmtMonth(first) : `${fmtMonth(first)}〜${fmtMonth(last)}`;
  return { first, last, label };
}
