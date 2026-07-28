import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const beritaCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/berita" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Admin'),
    image: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  'berita': beritaCollection,
};
