/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: { sm: "560px", md: "900px", lg: "1000px" },
    extend: {
      colors: { beige: "#F3EFE6", paper: "#FBFAF6", ink: "#0B0B0C", orange: "#F66509", sand: "#E9E3D5", muted: "#6A665D" },
      fontFamily: {
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        brand: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
