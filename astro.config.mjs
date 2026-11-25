import { defineConfig } from 'astro/config';

import { remarkReadingTime } from './src/plugin/remark-reading-time.mjs'

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
    site: "https://www.christianrahl.com",
    // Astro 7 defaults to 'jsx' whitespace handling, which drops the space between
    // text and a link that starts on the next source line ("more about me" -> "moreabout me").
    // Keep the pre-v7 HTML compression.
    compressHTML: true,
    // Content-Security-Policy as a <meta> tag on every page. Astro adds script-src
    // and style-src with a sha256 hash of each inline script/style it renders;
    // everything else is denied unless listed here. (frame-ancestors can't be set in
    // a <meta> CSP; the Cloudflare X-Frame-Options: SAMEORIGIN header covers that.)
    security: {
      csp: {
        directives: [
          "default-src 'none'",
          "img-src 'self'",
          "media-src 'self'",
          "base-uri 'self'",
          "form-action 'self'",
        ],
      },
    },
    integrations: [
      mdx(), 
      sitemap(), 
      icon()],
    markdown: {
        processor: unified({ remarkPlugins: [remarkReadingTime] }),
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
      vite: {
        plugins: [tailwindcss()],
      },
})