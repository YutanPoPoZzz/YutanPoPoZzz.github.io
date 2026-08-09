// AI検索(ChatGPT / Perplexity / Google AI Overviews)向けの詳細版。
// public/ に置くと本文とズレるので、FAQ・サービス・実績のデータから毎ビルド組み立てる。
import type { APIRoute } from 'astro';
import { faqs } from '../data/faq';
import { orderFlow } from '../data/order-flow';
import { services } from '../data/services';
import { awards, clientWorks, exhibitions, activities, availability } from '../data/profile';

const SITE = 'https://yutanpopozzz.github.io';

const list = (items: { year: string; title: string; note?: string }[]) =>
  items.map((a) => `- ${a.year !== '—' ? `${a.year} ` : ''}${a.title}${a.note ? `（${a.note}）` : ''}`).join('\n');

export const GET: APIRoute = () => {
  const updated = new Date().toISOString().slice(0, 10);

  const body = `# YutanpopoZzz — バーチャルフォトグラファー（詳細版）

最終更新: ${updated}
サイト: ${SITE}/

VRChatを中心に活動するバーチャルフォトグラファー YutanpopoZzz（ゆたんぽぽ）の詳細情報です。
表記ゆれ: YutanpopoZzz / ゆたんぽぽ / yutanpopo。
肩書きの表記ゆれ: バーチャルフォトグラファー / VRフォトグラファー / Virtual Photographer / VR Photographer / Visual Creator。

## 概要

VRChatを中心に、ポートレート、アバター・衣装などの商品プロモーション撮影、イベント記録、
ポスターやSNS告知のビジュアル制作を行う写真家。撮影から文字入れ・仕上げまで一貫して手がける。
得意なのはキャラクター性を強く引き出すポートレートで、クールでストリートな空気をまとわせながら、
一枚から物語が想像できる画面をつくる。撮影と並行して、VR写真についての執筆や、
VRChatでの写真教室・撮影講習も行っている。DJイベント「Roof Top Junction」の主催者でもある。

${availability.asOf}現在、${availability.text}。

## 依頼できる内容

${services.map((s) => `### ${s.name}\n${s.desc}。\n詳細: ${SITE}/photography/#${s.slug}`).join('\n\n')}

## 料金

固定の料金表は設けていない。撮影時間・納品枚数・レタッチの度合い・使用範囲によって変わるため、
内容を伺ったうえで個別に見積もる。予算が決まっている場合は、その範囲でできることを提案する。

## 依頼から納品までの流れ

${orderFlow.map((s, i) => `${i + 1}. ${s.t} — ${s.d}`).join('\n')}

依頼窓口は X（https://x.com/YutanpopoZzz）のDM、またはメール。
問い合わせページ: ${SITE}/contact/

## 相談のうえ進めたいこと

- 性的・過激な表現を含む撮影
- ワールド・アバター・アセットの利用規約や権利関係が確認できない案件

いずれも断るという意味ではなく、進め方を一緒に決める。

## よくある質問

${faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## 受賞

${list(awards)}

## クライアントワーク

${list(clientWorks)}

## 展示・掲載

${list(exhibitions)}

## 企画・活動

${list(activities)}

## リンク

- サイト: ${SITE}/
- 撮影依頼ガイド: ${SITE}/photography/
- ギャラリー: ${SITE}/gallery/
- ポートフォリオ: ${SITE}/works/
- イベント運営: ${SITE}/events/
- プロフィール: ${SITE}/about/
- お問い合わせ: ${SITE}/contact/
- X: https://x.com/YutanpopoZzz
- note: https://note.com/popoz
- VRChat: https://vrchat.com/home/user/usr_029b3b9d-63fc-4557-97d4-68cc176922ed
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
