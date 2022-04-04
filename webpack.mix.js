const mix = require("laravel-mix");
const webpackConfig = require("./webpack.config");

let postCssPlugins = [
  require("postcss-import"),
  require("tailwindcss/nesting"),
  require("tailwindcss"),
  require("autoprefixer"),
  require("postcss-preset-env")({
    features: { "nesting-rules": false },
  }),
];

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your theme assets. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  // .webpackConfig(webpackConfig)
  // .options({ processCssUrls: false })
  .copy("node_modules/jquery/dist/jquery.min.js", "assets/dist/jquery.min.js")
  .copy("node_modules/swiper/swiper-bundle.min.js", "assets/dist/swiper.min.js")
  .copy("node_modules/swiper/swiper.min.css", "assets/dist/swiper.min.css")
  .js("assets/src/main.js", "assets/dist/main.js")
  .postCss("assets/src/style.css", "assets/dist", postCssPlugins);
