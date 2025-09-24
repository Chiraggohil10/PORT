import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

   server: {
    host: '0.0.0.0', // use this instead of 5173 to listen on all interfaces (optional)
    port: 5173,
  },
})
