import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  // ...
  site: "https://example.com",
  integrations: [tailwind(), icon(), mdx(), sitemap()],
  content: {
    collections: {
      blog: {
        // Definieren Sie hier Ihre Sammlungskonfiguration, falls erforderlich
      },
    },
  },
});