import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-root-images',
      configureServer(server) {
        // Serve image1.png and image2.png from project root
        ['image1.png', 'image2.png'].forEach((imgFile) => {
          server.middlewares.use(`/${imgFile}`, (req, res, next) => {
            const filePath = path.join(__dirname, imgFile);
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'image/png');
              res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
              fs.createReadStream(filePath).pipe(res);
            } else {
              next();
            }
          });
        });

        // Serve frames from image1frame, image2frame, and image2frames directories
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/image1frame/') || req.url.startsWith('/image2frame/') || req.url.startsWith('/image2frames/')) {
            const filePath = path.join(__dirname, req.url);
            if (fs.existsSync(filePath)) {
              // The frames are actually JPGs based on the list_dir output
              res.setHeader('Content-Type', 'image/jpeg');
              res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
              fs.createReadStream(filePath).pipe(res);
            } else {
              next();
            }
          } else {
            next();
          }
        });
      }
    }
  ],
  server: {
    host: true,
    port: 5173
  }
});
