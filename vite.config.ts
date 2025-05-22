import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import svgr from 'vite-plugin-svgr';
import path from 'path'; // Added path import

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', {
            ssr: false, // Set to true if using SSR, false otherwise
            displayName: true, // Adds component name to generated class names for easier debugging
            pure: true, // Optimizes code by removing dead code
          }],
        ],
      },
    }),
    mdx(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
