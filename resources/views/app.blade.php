<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">


        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <div class="min-h-screen flex flex-col bg-background text-foreground">
            <header class="border-b border-border bg-card text-card-foreground">
                <div class="container mx-auto px-4 py-4 flex items-center justify-between">
                    <a href="/" class="text-lg font-semibold">{{ config('app.name', 'Laravel') }}</a>
                    <nav aria-label="Main navigation">
                        <ul class="flex gap-4 items-center text-sm">
                            <li><a href="/" class="hover:underline">Home</a></li>
                            <li><a href="/settings" class="hover:underline">Settings</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main class="flex-1 container mx-auto px-4 py-8">
                @inertia
            </main>

            <footer class="border-t border-border bg-card text-card-foreground">
                <div class="container mx-auto px-4 py-6 text-sm text-muted-foreground">
                    <div class="flex items-center justify-between">
                        <div>© {{ date('Y') }} {{ config('app.name') }}. All rights reserved.</div>
                        <div><a href="/privacy" class="hover:underline">Privacy</a></div>
                    </div>
                </div>
            </footer>
        </div>
    </body>
</html>
