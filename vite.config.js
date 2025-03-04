import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const isStorybook = process.env.STORYBOOK === 'true';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'reket-ui',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } },
    },
  },
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    ...(!isStorybook ? [dts({ rollupTypes: true })] : []),
  ],
  css: { postcss: { plugins: [tailwindcss, autoprefixer] } },
  base: '/reket-ui/',
});
