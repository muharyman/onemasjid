module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "btn-blue-2": "#000055",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
