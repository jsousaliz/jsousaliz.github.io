import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

declare const process: { argv: string[] };

const astroCommand =
  process.argv.find((argument) =>
    ['dev', 'build', 'check', 'preview'].includes(argument),
  ) ?? 'dev';

export default defineConfig({
  site: 'https://jsousaliz.github.io',
  output: 'static',
  integrations: [react()],
  vite: {
    cacheDir: `node_modules/.vite-${astroCommand}`,
  },
});
