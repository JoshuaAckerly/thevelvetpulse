import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    let server;
    if (env.VITE_SERVER_ENV === 'production') {
        server = {
            port: 443,
            host: '0.0.0.0',
            origin: 'https://thevelvetpulse.graveyardjokes.com',
            allowedHosts: ['thevelvetpulse.graveyardjokes.com'],
        };
    } else if (env.VITE_SERVER_ENV === 'test' || env.VITE_SERVER_ENV === 'testing') {
        server = {
            port: 8086,
            host: '127.0.0.1',
            origin: 'http://thevelvetpulse.graveyardjokes.testing:8086',
            allowedHosts: ['thevelvetpulse.graveyardjokes.testing'],
        };
    } else {
        // default: local/development
        server = {
            port: 8086,
            host: '0.0.0.0',
            origin: 'http://thevelvetpulse.graveyardjokes.local:8086',
            cors: {
                origin: 'http://thevelvetpulse.graveyardjokes.local',
                credentials: true
            },
            allowedHosts: ['thevelvetpulse.graveyardjokes.local'],
        };
    }

    return {
        server,
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.tsx'],
                ssr: 'resources/js/ssr.tsx',
                refresh: true,
            }),
            react(),
            tailwindcss(),
        ],
        esbuild: {
            jsx: 'automatic',
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'resources/js'),
                'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
                '@gj/env': resolve(__dirname, '../packages/env/src/index.ts'),
                '@gj/utils': resolve(__dirname, '../packages/utils/src/index.ts'),
                '@gj/hooks': resolve(__dirname, '../packages/hooks/src/index.ts'),
            },
            dedupe: ['react', 'react-dom'],
        },
        ssr: {
            noExternal: ['react', 'react-dom', '@inertiajs/react', '@inertiajs/core'],
        },
    };
});
