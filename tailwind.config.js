module.exports = {
  content: ["layouts/**/*.htm", "pages/**/*.htm", "partials/**/*.htm"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
    require("daisyui"),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  daisyui: {
    themes:['light']
  },
};
