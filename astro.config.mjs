import { defineConfig } from 'astro/config';

import { remarkReadingTime } from '/src/plugin/remark-reading-time.mjs'

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: "https://www.christianrahl.com",
    integrations: [
      mdx(), 
      sitemap(), 
      tailwind({
        nesting: false
      }), 
      icon()],
    markdown: {
        remarkPlugins: [remarkReadingTime],
        shikiConfig: {
          // Choose from Shiki's built-in themes (or add your own)
          // https://shiki.style/themes
          // See note below for using dual light/dark themes
          themes: {
            light: 'poimandres',
            dark: 'catppuccin-latte',
          },
        },
      },
      image: {
      },
})