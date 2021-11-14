module.exports = {
  purge: {
    content: ["layouts/**/*.htm", "pages/**/*.htm", "partials/**/*.htm"],
    options: {
      whitelistPatterns: [
        /active$/,
        /error$/,
        /sal-animate$/,
        /disable-scroll$/,
        /^glider/,
      ],
      whitelistPatternsChildren: [/active$/],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    // styled: false,
    themes: ["light", "emerald", "dark", "forest", "synthwave"],
  },
};
