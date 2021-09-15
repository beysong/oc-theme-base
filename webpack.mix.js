const mix = require("laravel-mix");

let postCssPlugins = [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("autoprefixer"),
];

mix.setPublicPath("./assets/dist/")
    .js("assets/src/main.js", "./")
    .postCss("assets/src/style.css", "./", postCssPlugins)
    .browserSync({
        proxy: "http://winter2.test/", //replace with your url
        files: [
            "layouts/**/*.htm",
            "pages/**/*.htm",
            "partials/**/*.htm",
            "assets/dist/main.js",
            "assets/dist/style.css",
        ],
    })
    .options({
        processCssUrls: false,
        terser: {
            extractComments: false,
        },
    });
