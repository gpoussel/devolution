import {
  fileURLToPath,
  URL,
} from 'node:url';

import gitDescribe from 'git-describe';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    svgLoader({
      defaultImport: 'component',
    }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __APP_COMMIT__: JSON.stringify(gitDescribe.gitDescribeSync().hash),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
