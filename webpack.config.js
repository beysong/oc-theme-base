const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: ["./assets/src/main.js"],
    style: ["./assets/src/style.css"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./assets/dist"),
  },

  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // 其他选项
                    },
                  ],
                  require("postcss-import"),
                  require("tailwindcss"),
                  require("postcss-nested"),
                  require("autoprefixer"),
                ],
              },
            },
          },
        ],
      },
      // For webpack v5
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new BrowserSyncPlugin({
      proxy: "http://winter2.test/",
      files: [
        "layouts/**/*.htm",
        "pages/**/*.htm",
        "partials/**/*.htm",
        "assets/dist/main.js",
        "assets/dist/style.css",
      ],
    }),
  ],
};
