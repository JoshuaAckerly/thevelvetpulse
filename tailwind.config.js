/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Instrument Sans", 'ui-sans-serif', 'system-ui'],
            },
            container: {
                center: true,
                padding: '1rem',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: 'var(--card)',
                primary: 'var(--primary)'
            }
        },
    },
    plugins: [require("tailwindcss-animate")],

};
