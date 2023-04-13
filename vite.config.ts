import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Exclude pwa-elements/loader from pre-bundling to prevent errors when loading and using the camera
  optimizeDeps: {
    exclude: [`@ionic/pwa-elements/loader`],
  },
})
