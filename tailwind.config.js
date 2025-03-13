/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        },
        colors: {
          'mike-blue': '#04b6cb',
          'mike-accent': '#80f0e7',
          'mike-green': '#00ff24',
          'gradient-start': '#209cff',
          'gradient-end': '#68e0cf',
        },
      },
    },
    plugins: [],
  }