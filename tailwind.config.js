/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#f56256"
      },

      animation: {
        'flow-up': 'flowUp 20s linear infinite',
      },
      keyframes: {
        flowUp: {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

