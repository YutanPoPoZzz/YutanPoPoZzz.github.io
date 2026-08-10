// public/ に静的で置くとドメイン移行のときSitemap行が取り残されるので、
// astro.config.mjs の site から生成する。
import type { APIRoute } from 'astro';

/** 回答時に引用するために来るAI検索のクローラ */
const SEARCH_BOTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
];

/** 学習用クローラ。AIのベース知識に載って推薦されやすくする方針で許可している */
const TRAINING_BOTS = ['GPTBot', 'ClaudeBot', 'Google-Extended'];

export const GET: APIRoute = ({ site }) => {
  const SITE = site!.href.replace(/\/$/, '');
  const block = (name: string) => `User-agent: ${name}\nAllow: /\n`;

  const body = `# 通常の検索クローラ
User-agent: *
Allow: /

# AI検索ボット(回答時の引用クロール)を明示許可
${SEARCH_BOTS.map(block).join('\n')}
# 学習用ボットも許可(AIのベース知識に載って推薦されやすくする方針)
${TRAINING_BOTS.map(block).join('\n')}
Sitemap: ${SITE}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
