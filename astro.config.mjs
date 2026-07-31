import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 公開先: GitHub Pages ユーザールートリポジトリ(yutanpopozzz.github.io)
// ルート配信なので base は既定の '/'
export default defineConfig({
  site: 'https://yutanpopozzz.github.io',
  integrations: [sitemap()],
});
