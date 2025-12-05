import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vite.dev/config/
export default defineConfig({
    base: "/magic-survival-spell-builder",
    plugins: [
        react(),
        tsconfigPaths(),
    ],
})
