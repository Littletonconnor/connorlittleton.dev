import { defineCollection, z } from "astro:content";

const tags = ["Css", "Typescript", "Web", "Monorepo", "Scripting"] as const;

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(tags),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const recipe = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog, recipe };
export { tags as tag };
