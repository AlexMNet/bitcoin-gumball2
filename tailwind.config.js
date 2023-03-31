/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mona: ['Mona'],
        monaLight: ['MonaLight'],
        monaBold: ['MonaBold'],
      },
      backgroundImage: {
        'grid-pattern': "url('/src/assets/bg.svg')",
      },
    },
  },
  plugins: [],
};
