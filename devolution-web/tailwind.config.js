import tailwindShades from 'tailwind-shades-for-custom-colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Tomorrow"'],
    },
    extend: {
      // Inspired by https://lospec.com/palette-list/pear36
      colors: {
        black: '#272736',
        dark: '#322947',
        purple: '#473b78',
        green: '#3ca370',
        blue: '#4da6ff',
        white: '#ffffeb',
        red: '#b0305c',
      },
    },
  },
  plugins: [tailwindShades],
};
