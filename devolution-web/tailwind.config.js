import tailwindShades from 'tailwind-shades-for-custom-colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Inspired by https://lospec.com/palette-list/pear36
      colors: {
        dark: '#322947',
        green: '#3ca370',
        blue: '#4da6ff',
        white: '#ffffeb',
      },
    },
  },
  plugins: [tailwindShades],
};
