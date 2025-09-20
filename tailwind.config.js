/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "neon-blue": "#00f0ff",
        "neon-pink": "#ff00ff",
        "neon-green": "#39ff14",
        "neon-yellow": "#f7ff00",
      },
      dropShadow: {
        neon: "0 0 10px #00f0ff, 0 0 20px #00f0ff",
        "neon-sm": "0 0 5px #ff00ff",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
