/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                //Darkmode
                'background-dark': '#222831',
                'foreground-dark': '#31363F',
                'text-light': '#e5e7eb',
                'text-hover-light': '#94a3b8',
                'input-background-dark': '#EEEEEE',
                'button-dark': '#76ABAE',
                //Lightmode
                'background-light': '#F7FBFC',
                'foreground-light': '#D6E6F2',
                'text-dark': '#2D3748',
                'text-hover-dark': '#cbd5e1',
                'input-background-light': '#B9D7EA',
                'button-light': '#769FCD'
            },

            gridTemplateRows: {
                layout: 'auto 1fr auto'
            }
        }
    },
    plugins: [require('tailwind-scrollbar')],
    darkMode: 'class'
}
