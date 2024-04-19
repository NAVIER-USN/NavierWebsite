/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                //Darkmode
                'background-dark': '#222831',
                'foreground-dark': '#31363F',
                'model-background-dark': '#222831',
                'input-background-dark': '#EEEEEE',
                'button-dark': '#76ABAE',
                'text-light': '#e5e7eb',
                'text-hover-light': '#94a3b8',

                //Lightmode
                'background-light': '#FAF8F1',
                'foreground-light': '#FAEAB1',
                'model-background-light': '#FAF8F1',
                'input-background-light': '#F0F0F0',
                'button-light': '#C58940',
                'text-dark': '#2D3748',
                'text-hover-dark': '#cbd5e1'
            },

            gridTemplateRows: {
                layout: 'auto 1fr auto'
            }
        }
    },
    plugins: [],
    darkMode: 'class'
}
