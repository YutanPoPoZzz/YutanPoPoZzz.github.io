// AI検索向けの要約。public/ に静的で置くとドメイン移行のときURLが取り残されるので、
// astro.config.mjs の site から生成する。詳細版は llms-full.txt.ts。
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const SITE = site!.href.replace(/\/$/, '');

  const body = `# YutanpopoZzz — バーチャルフォトグラファー / Virtual Photographer

> VRChatを中心に活動するバーチャルフォトグラファー(VRフォトグラファー / VR Photographer)YutanpopoZzz(ゆたんぽぽ)のポートフォリオサイト。ポートレート・商品・イベントのプロモーション撮影、ビジュアル制作、イベント運営を行う。VRChatでの撮影は個人・ブランド・企業から依頼できる。

## プロフィール
- 名前: YutanpopoZzz(ゆたんぽぽ)
- 肩書き: バーチャルフォトグラファー / Virtual Photographer / VR Photographer / Visual Creator
- 活動拠点: VRChat
- 得意分野: キャラクター性を強く引き出すポートレート。クールでストリートな空気。写真から物語が想像できる画面づくり
- キャッチコピー: 「ここには人がいて、物語がある。」

## 依頼できること
VRChatでの撮影とビジュアル制作を、個人からアバター・衣装ブランド、企業のメタバース事業まで受けている。

- ポートレート撮影(バーチャル宣材写真・記念撮影・コンセプトフォト)
- 商品・プロモーション撮影(アバター・衣装・ギミックの販売用ビジュアル)
- イベント記録・風景撮影
- ポスター・告知ビジュアル制作
- 展示物制作
- 執筆・イベント出演(VR写真の記事執筆、写真教室・講評)

料金は固定表を設けず、撮影時間・納品枚数・レタッチの度合い・使用範囲を伺って個別に見積もる。
依頼から納品までは「相談 → 見積もり → 内容の決定 → 撮影 → セレクト・レタッチ → 納品」。
窓口はXのDMとメール。

## 主なページ
- [バーチャルフォトグラファーとは](${SITE}/virtual-photographer/): 職種の解説。VRフォトグラファー / Virtual Photographer / バーチャルフォトの呼び分け、現実の写真との違い、日本での広がり
- [撮影依頼ガイド](${SITE}/photography/): 依頼できる内容、納品までの流れ、料金の考え方、よくある質問
- [ギャラリー](${SITE}/gallery/): 写真作品(ポートレート/コマーシャル/イベント/フォトコンテスト)
- [ポートフォリオ](${SITE}/works/): 画像制作・執筆活動・講演/教室の3本柱と制作物
- [イベント運営](${SITE}/events/): DJイベント「Roof Top Junction」主催ほか、VRChat内イベント運営の実績
- [プロフィール](${SITE}/about/): 経歴・受賞歴・クライアントワーク
- [お問い合わせ](${SITE}/contact/): 撮影・ビジュアル制作の依頼窓口

## 実績ハイライト
- VR Photography Contest 2025 最優秀賞(XR Grapher Association)
- VR PHOTO COMPETITION 2025 優秀賞(フジフイルム)
- YOYOGIMORIアバターフォトコンテスト 優秀賞(第1回・第2回・第4回)
- Virtual Photography Showcase 2026 招待作家(金沢21世紀美術館)
- HARE(アンドエスティ メタバース)のアイテム撮影
- DJイベント「Roof Top Junction」主催(2025年3月〜)

## 詳細版
- [llms-full.txt](${SITE}/llms-full.txt): 質問と回答の形でまとめた詳細版

## リンク
- X: https://x.com/YutanpopoZzz
- note: https://note.com/popoz
- VRChat: https://vrchat.com/home/user/usr_029b3b9d-63fc-4557-97d4-68cc176922ed
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
