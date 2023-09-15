/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                nightblack: '#0D0A0B',
                ghostwhite: '#FBF9FF',
            },
            keyframes: {
                fadeinfromright: {
                    '0%': { opacity: 0, transform: 'translateX(100%)' },
                    '100%': { opacity: 1 },
                },
                fadeinfromleft: {
                    '0%': { opacity: 0, transform: 'translateX(-100%)' },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                fadeinfromright: 'fadeinfromright 1s ease-in-out',
                fadeinfromleft: 'fadeinfromleft 1s ease-in-out',
            },
        },
    },
    plugins: [],
}
