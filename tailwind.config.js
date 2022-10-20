/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        wiggleOff: {
          "0%, 5%, 10%": { transform: "rotate(75deg)" },
          "3%, 8%": { transform: "rotate(80deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        wiggleOff: "wiggleOff 5s  infinite",
      },
    },
  },
  plugins: [],
};
