import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//ExploreBuddhadebKoner
export default defineConfig({
  // base: "/ExploreBuddhadebKoner",
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }

})
// React-LearningReact-Learning
