const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

const pages = [
  "index",
  "about-us",
  "arenda",
  "contacts",
  "lizing",
  "news",
  "qa",
  "single-news",
];
const htmlWebpackPlugins = pages.map((name) => {
  return new HtmlWebpackPlugin({
    template: `src/${name}.hbs`,
    filename: `${name}.html`,
    chunks: [name],
    templateParameters: {
      isIndex: (name === "index") | (name === "lizing"), // Pass a variable indicating if it's index.html
    },
  });
});

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/js/bundle.js"),
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /src\/sass\/main\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: "asset/resource",
      },
    ],
  },

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           plugins: [["gifsicle"], ["jpegtran"], ["optipng"], ["svgo"]],
  //         },
  //       },
  //     }),

  //     new ImageminWebpWebpackPlugin(),
  //   ],
  // },

  plugins: [
    ...htmlWebpackPlugins,
    new MiniCssExtractPlugin({ filename: "css/main.css" }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/img", // Source folder
          to: "img", // Destination folder in 'dist'
        },
      ],
    }),
  ],

  watch: true,
};
