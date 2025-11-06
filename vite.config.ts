import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/variables" as *;`,
      },
    },
  },
    build: {
    manifest: true,
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html',
    },
  },
})
