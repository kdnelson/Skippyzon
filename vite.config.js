import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // TODO: Suppressing 200 some warnings.  Revisit this later, will a newer version resolve it?
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
      },
    },
  },
})
