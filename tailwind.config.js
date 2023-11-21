module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ORANGE: "#FEAC5E",
        PURPLE: "#C779D0",
        BLUE: "#4BC0C8",
        BORDER: "#BCA37F"
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      keyframes: {
        gradiname: {
          "0%, 100%": {'background-position': 'left center'},
          "50%": {'background-position': 'right center'}
        }, 
        diagonal: {
          '0%': { transform: 'rotate(0.0deg)', "top": "-10%", "left": "0%" },
          '20%': { transform: 'rotate(0.0deg)', "top": "-10%", "left": "0%" },
          '30%': { transform: 'rotate(14deg)' },
          '35%': { transform: 'rotate(-4deg)' },
          '45%': { transform: 'rotate(10.0deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '55%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '65%': { transform: 'rotate(-4deg)' },
          '70%': { transform: 'rotate(10.0deg)' },
          '75%': { transform: 'rotate(10.0deg)' },
          '80%': { transform: 'rotate(-4deg)' },
          '90%': { transform: 'rotate(10.0deg)' },
          '100%': { transform: 'rotate(0.0deg)', "top":"110%", "left": "20%" },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        "gradmove": "gradiname 10s ease infinite",
        "ladybug": "diagonal 15s linear forwards",
        'waving-hand': 'wave 5s linear infinite',
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
