module.exports = {
  mode: "jit",
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
    themes: [
      {
        mytheme: {
          // custom theme

          primary: "#e78200" /* Primary color */,
          "primary-focus": "#e58200" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#f6d860" /* Secondary color */,
          "secondary-focus": "#f3cc30" /* Secondary color - focused */,
          "secondary-content":
            "#ffffff" /* Foreground content color to use on secondary color */,

          accent: "#37cdbe" /* Accent color */,
          "accent-focus": "#2aa79b" /* Accent color - focused */,
          "accent-content":
            "#ffffff" /* Foreground content color to use on accent color */,

          neutral: "#3d4451" /* Neutral color */,
          "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#ffffff" /* Base color of page, used for blank backgrounds */,
          "base-200": "#f9fafb" /* Base color, a little darker */,
          "base-300": "#d1d5db" /* Base color, even more darker */,
          "base-content":
            "#1f2937" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#009485" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,

          "--rounded-box":
            "0.5rem" /* border-radius for cards and other big elements */,
          "--rounded-btn":
            "0.25rem" /* border-radius for buttons and similar elements */,
          "--rounded-badge":
            "1.9rem" /* border-radius for badge and other small elements */,

          "--animation-btn": "0.25s" /* bounce animation time for button */,
          "--animation-input":
            "0.2s" /* bounce animation time for checkbox, toggle, etc */,

          "--padding-card": "2rem" /* default card-body padding */,

          "--btn-text-case": "uppercase" /* default text case for buttons */,
          "--navbar-padding": "0.5rem" /* default padding for navbar */,
          "--border-btn": "1px" /* default border size for button */,
        },
      },
      "emerald",
      "dark",
      "light",
      "forest",
      "synthwave",
    ],
  },
};
