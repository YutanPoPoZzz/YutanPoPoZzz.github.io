import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 公開先: GitHub Pages ユーザールートリポジトリ(yutanpopozzz.github.io)
// ルート配信なので base は既定の '/'
//
// ★ 公開URLの正はこの site だけ。canonical / OGP / JSON-LD / sitemap /
//   robots.txt / llms.txt / llms-full.txt がすべてここを見る。
//   独自ドメインへ移すときは、この1行を書き換えて public/CNAME を置く。
export default defineConfig({
  site: 'https://yutanpopozzz.github.io',
  integrations: [
    // .txt はページではなく機械向けの生成物なのでサイトマップから外す
    sitemap({ filter: (page) => !page.endsWith('.txt') }),
  ],
});
