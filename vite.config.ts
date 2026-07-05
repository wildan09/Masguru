import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // Pastikan setiap build menghasilkan nama file baru dengan content hash
    rollupOptions: {
      output: {
        // Hash-based filenames for cache busting
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Generate manifest.json untuk tracking assets
    manifest: true,
    // Minify & optimize (Vite 8 uses Oxc by default, esbuild is no longer bundled)
    minify: 'oxc',
    // Tidak biarkan chunk terlalu besar
    chunkSizeWarningLimit: 600,
  },
})
