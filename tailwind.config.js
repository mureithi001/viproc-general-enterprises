/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        'steel-gray': '#6B7280',
        copper: '#B45309',
        cream: '#FEF3C7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-up-delay': 'fadeInUp 1s ease-out 0.2s both',
        'fade-in-up-delay-2': 'fadeInUp 1s ease-out 0.4s both',
      },
    },
  },
  plugins: [],
};