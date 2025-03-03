import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md'; // Correct import for vite-plugin-md
import path from 'path';
import sass from 'sass'

export default defineConfig({
  base: './' ,
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] // Ensure .md files are processed
    }),
    Markdown() // Initialize vite-plugin-md
  ],
  
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        additionalData: `@use "@/assets/styles/variables" as *;`
      }
    }
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
  },
  publicDir: 'public',
  server: {
    port: 3000
  }
});