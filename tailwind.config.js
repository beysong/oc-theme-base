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
};
