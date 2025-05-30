// vite.config.js (ou .ts)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Certifique-se que o plugin do React está aqui
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Adicione o plugin do Tailwind aqui
  ],
   base: '/app/', // Importante: define o caminho base
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
