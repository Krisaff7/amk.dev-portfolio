import {defineConfig} from 'vite' //outil pour configurer Vite
import react from '@vitejs/plugin-react' // permet a vite de comprendre le React/JSX
import tailwindcss from '@tailwindcss/vite' //connecte Tailwind a Vite

export default defineConfig({
  plugins: [
    react(),  //active React dans le projet
    tailwindcss(), //active Tailwind dans le projet
  ],
})
