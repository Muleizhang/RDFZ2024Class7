import {defineConfig} from 'vite';
export default defineConfig({base:'./',build:{rollupOptions:{output:{manualChunks(id){const part=id.match(/chapter-part-(\d+)\.ts$/);if(part)return 'chapter-'+part[1];if(id.includes('/src/data/'))return 'chronicle';if(id.includes('node_modules'))return 'vendor';}}}}});
