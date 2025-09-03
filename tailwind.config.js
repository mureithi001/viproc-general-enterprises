/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E87722',
        secondary: '#2C9A4B',
        dark: '#1D2B36',
        light: '#F5F5F2',
        'steel-gray': '#6B7280', // Kept for text, will review
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