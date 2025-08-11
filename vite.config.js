import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/abhyaung/To-Do-List.git', // <-- change to your repo name
})
