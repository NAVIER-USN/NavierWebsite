/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        //Darkmode
        'background-dark': '#1e293b',
        'foreground-dark': '#0f172a',
        'text-light': '#e5e7eb',
        //Lightmode
        'background-light': '#f9fafb',
        'foreground-light': '#ffffff',
        'text-dark': '#2D3748'
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
