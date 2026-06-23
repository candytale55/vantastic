/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-pink': '#FF69B4',
        'retro-yellow': '#FFDB58',
        'retro-teal': '#008080',
        'retro-cream': '#F5F2ED',
        'retro-ink': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
