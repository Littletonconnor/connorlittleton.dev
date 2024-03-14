import { defineCollection, z } from "astro:content";

const blogTags = ["Css", "Typescript", "Web", "Monorepo"] as const;

const bookTags = [
  "Economics",
  "Self-help",
  "Programming",
  "Technology",
  "Business",
  "Investing",
  "Science",
] as const;

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(blogTags),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const tips = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(bookTags),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog, books, tips };
export { blogTags, bookTags };
