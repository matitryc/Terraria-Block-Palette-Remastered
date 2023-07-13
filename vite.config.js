import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: 
        '@use "@/assets/style/colors.scss" as *; @use "@/assets/style/scrollbar.scss" as *;'
      }
    }
  },
  plugins: [
    vue(),
    eslint()
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
