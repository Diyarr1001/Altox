// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#071A2D',
        secondary: '#102C4A',
        accent: '#00B8D9',
        background: '#F7FAFC',
        surface: '#081624',
        muted: '#64748B',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        scientific: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
