const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // Fonts are being loaded on `src/pages/_document.tsx`, so if you want to
            // change the font, you need to change the url there and name here.
            fontFamily: {
                sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
                mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono]
            },
            colors: {
                'telegram-bg': 'var(--telegram-bg-color)',
                'telegram-text': 'var(--telegram-text-color)',
                'telegram-hint': 'var(--telegram-hint-color)',
                'telegram-link': 'var(--telegram-link-color)',
                'telegram-button': 'var(--telegram-button-color)',
                'telegram-button-text': 'var(--telegram-button-text-color)',
                'telegram-secondary-bg': 'var(--telegram-secondary-bg-color)'
            }
        }
    },
    plugins: []
};
