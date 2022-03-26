const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/components/**/**/*.tsx',
    './src/views/**/**/**/*.tsx',
    './src/sections/**/**/*.tsx',
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      main: '#fffffe',
      highlight: {
        DEFAULT: '#00ebc7',
        soft: '#1b2d45',
      },
      secondary: '#ff5470',
      tertiary: '#fde24f',
      stroke: '#00214d',
      graySoft: '#f2f4f6',
    },
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.3xl') },
        h2: { fontSize: theme('fontSize.2xl') },
        h3: { fontSize: theme('fontSize.xl') },
        h4: { fontSize: theme('fontSize.lg') },
        h5: { fontSize: theme('fontSize.base') },
        h6: { fontSize: theme('fontSize.sm') },
      });
    }),
  ],
};
