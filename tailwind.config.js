/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // VSS - Harvard Crimson Red
        vss: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#f87171',
          400: '#ef4444',
          500: '#C90016', // Harvard Crimson
          600: '#991B1B',
          700: '#7f1d1d',
          800: '#6B1B1B',
          900: '#5a1414',
        },
        // PMC-5 - Pakistan Green
        pmc: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#01411C', // Pakistan Green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // RMC - Navy Blue
        rmc: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#000080', // Navy Blue
          600: '#000070',
          700: '#000060',
          800: '#000050',
          900: '#000040',
        },
        // ILM - Maroon
        ilm: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#800000', // Maroon
          600: '#991B1C',
          700: '#7F1D1D',
          800: '#6B1B1B',
          900: '#5a1414',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
        'kid-friendly': ['Comic Neue', 'Quicksand', 'sans-serif'],
        'sundar': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
