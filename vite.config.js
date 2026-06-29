// Configura Vite para levantar y compilar la SPA de React durante el desarrollo y el build.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
