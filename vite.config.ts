import react from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  server: {
    port: 3000,
  }
} satisfies UserConfig