import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import type { PluginOption } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss() as PluginOption],
})
