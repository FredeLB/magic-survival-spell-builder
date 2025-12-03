import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    base: process.env.NODE_ENV === 'production' 
        ? '/magic-survival-spell-builder/' 
        : '/',
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        // Add this for proper asset handling
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                // Versioned asset names
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    } else if (/woff2?/i.test(extType)) {
                        extType = 'fonts';
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            }
        }
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