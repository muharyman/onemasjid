module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "btn-blue-2": "#000055",
        "blue-3": "#094AB2",
      },
      zIndex: {
        "min-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
