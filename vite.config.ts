import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

function manualChunks(id: string): string | undefined {
  if (!id.includes('node_modules')) {
    return undefined;
  }

  if (id.includes('react-dom') || id.includes('/react/')) {
    return 'vendor-react';
  }

  if (id.includes('motion')) {
    return 'vendor-motion';
  }

  if (id.includes('lucide-react')) {
    return 'vendor-icons';
  }

  return 'vendor';
}

export default defineConfig(({mode}) => {
  const isWordPress = mode === 'wordpress';

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        input: isWordPress
          ? path.resolve(__dirname, 'src/main.tsx')
          : undefined,
        output: {
          manualChunks,
        },
      },
      ...(isWordPress
        ? {
            outDir: 'wordpress/aplus-gastromarketing/dist',
            emptyOutDir: true,
            manifest: true,
          }
        : {
            outDir: 'dist',
            emptyOutDir: true,
          }),
    },
  };
});
