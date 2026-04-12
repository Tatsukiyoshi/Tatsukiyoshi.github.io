// @ts-check
import { defineConfig } from 'astro/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://astro.build/config
export default defineConfig({
  site: 'https://tatsukiyoshi.github.io',
  output: 'static',
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          { src: 'images', dest: '.' },
          { src: 'captures', dest: '.' },
        ],
      }),
    ],
  },
});
