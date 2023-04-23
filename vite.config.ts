import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml';
import vuetify from 'vite-plugin-vuetify';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    ViteYaml(),
  vuetify({autoImport: true})],
base:'/'})

