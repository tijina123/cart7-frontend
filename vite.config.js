import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.1.50', // Allows access from any device in the network
  //   port: 5173
  // }
})
