import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 写真作品(サイトの主役)。1枚=1ファイル
const photos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photos' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['portrait', 'commercial', 'event', 'photocontest']),
    date: z.coerce.date(),
    thumb: z.string(),
    caption: z.string().optional(),
    client: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// 制作物(minimaシリーズ等)。/works/ 配下に詳細ページを持つ
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    color: z.string().default('#4da6ff'),
    thumb: z.string(),
    /** 詳細ページのヒーローに使う画像(縦長ポスター等)。未設定はthumbを使う */
    full: z.string().optional(),
    client: z.string().optional(),
    role: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
    status: z.string().optional(),
  }),
});

export const collections = { photos, works };
