import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  summary: z.string().max(200),
  date: z.coerce.date(),
  status: z.enum(['live', 'parked', 'archived']),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  links: z.array(z.object({
    label: z.string(),
    url: z.string().url(),
  })).default([]),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: baseSchema,
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: baseSchema.extend({
    organisation: z.string().optional(),
    role: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: baseSchema.extend({
    venue: z.string().optional(),
    coauthors: z.array(z.string()).default([]),
    citation: z.string().optional(),
  }),
});

export const collections = { projects, work, research };
