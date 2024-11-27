import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import alpine from '@astrojs/alpinejs';


import react from '@astrojs/react';


import alpinejs from '@astrojs/alpinejs';


// https://astro.build/config
export default defineConfig({
  // renderer: "@astrojs/react", // Hinzufügen des React-Renderers
  site: "https://example.com",
  integrations: [tailwind(), icon(), mdx(), sitemap(), react(), alpine()],
  content: {
    collections: {
      blog: {
        // Definieren Sie hier Ihre Sammlungskonfiguration, falls erforderlich
      },
    },
  },
});