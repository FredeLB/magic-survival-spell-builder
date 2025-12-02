import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    base: '/',
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true, // This enables emptying
    },
    server: {
        base: '/magic-survival-spell-builder/',
        port: 8080
    },
    // Optional: Silence Sass deprecation warnings. See note below.
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    'import',
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                    'legacy-js-api',
                ],
            },
        },
    },
}