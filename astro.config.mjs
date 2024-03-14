import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), mdx(), db()],
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAccessibleEmojis]
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});