import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 公開先: 独自ドメイン yutanpopozzz.com(2026-08-11移行)。
// 配信は引き続きGitHub Pagesのユーザールートリポジトリ。
// ルート配信なので base は既定の '/'
//
// ★ 公開URLの正はこの site だけ。canonical / OGP / JSON-LD / sitemap /
//   robots.txt / llms.txt / llms-full.txt がすべてここを見る。
//   ドメインを変えるときは、この1行と public/CNAME の2箇所。
export default defineConfig({
  site: 'https://yutanpopozzz.com',
  integrations: [
    // .txt はページではなく機械向けの生成物なのでサイトマップから外す
    sitemap({ filter: (page) => !page.endsWith('.txt') }),
  ],
});
