import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: "autoUpdate",
    includeAssets: [
      "favicon.ico",
      "apple-touch-icon.png",
      "pwa-192x192.png",
      "pwa-512x512.png"
    ],
    manifest: {
      name: "Ronak Portfolio",
      short_name: "Ronak",
      description: "Ronak Prajapati — Full Stack Web Developer",
      theme_color: "#4F46E5",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/MyPortFolio/",
       scope: "/MyPortFolio/",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
          purpose: "any"
        }
      ]
    }
  })
  ],
  base: "https://ronakprajapati08.github.io/MyPortFolio/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
