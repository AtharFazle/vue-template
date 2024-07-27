import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import VueRouter from 'unplugin-vue-router/vite'
import path from 'path'
// import AutoImport from 'unplugin-auto-import/vite'
// import { VueRouterAutoImports } from 'unplugin-vue-router'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'layout': path.resolve(__dirname, 'src/Layout'),
      },
  },
  plugins: [
    VueRouter(),
    vue()],
})
