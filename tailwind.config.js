/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1d4ed8',
        secondary: '#64748b',
        dark: '#1e293b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

