import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({mode}) => {
  const isWordPress = mode === 'wordpress';

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: isWordPress
      ? {
          outDir: 'wordpress/aplus-gastromarketing/dist',
          emptyOutDir: true,
          manifest: true,
          rollupOptions: {
            input: path.resolve(__dirname, 'src/main.tsx'),
          },
        }
      : undefined,
  };
});
