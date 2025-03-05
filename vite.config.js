import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', 
      devOptions: {
        enabled: true, 
      },
      manifest: {
        name: 'Gaisano University',
        short_name: 'GU',
        description: 'A React app with PWA features',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/SmallTile.scale-400.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/SmallTile.scale-400.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
