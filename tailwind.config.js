/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'], // Correct placement
  theme: {
    extend: {
      colors: {
        mdcTheme: '#130C0C',
      },
      backgroundImage: {
        'mdc-radial':
          'radial-gradient(88.11% 669.44% at 11.89% 29.98%, #312E24 0%, #130C0C 46.27%)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        wixMadefor: ['var(--font-wix-madefor)'],
      },
    },
  },

  plugins: [],
}
