import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
