import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({

  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 5000
  },

  plugins: [react(),
    tailwindcss(),
    visualizer(),
  ],

  base:'/aberration-guesser/',
  
});
