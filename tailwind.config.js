/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Aqui você define onde o Tailwind deve aplicar suas classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Definindo a fonte Poppins
      },
    },
  },
  plugins: [],
}
