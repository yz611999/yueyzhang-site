/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Caveat', 'cursive'],
        body: ['Patrick Hand', 'cursive'],
      },
      colors: {
        green: {
          doodle: '#6BCB77',
        },
        orange: {
          doodle: '#FF6B35',
        },
        blue: {
          grid: '#B8D4E8',
        },
      },
    },
  },
  plugins: [],
};
