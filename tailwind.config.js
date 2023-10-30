/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'white-custom': 'hsl(0, 0%, 100%)',
        'attribution-custom': 'hsl(228, 45%, 44%)',
      },
      backgroundImage: {
        'icon-dollar': "url('/src/assets/icon-dollar.svg')",
        'icon-person': "url('/src/assets/icon-person.svg')",
      },
      backgroundPosition: {
        'left-10': '10px',
      }
    },
  },
  plugins: [],
}