const path = require("path"); //note.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { abort } = require("process");

module.exports = {
  //mode
  mode: "production", //development
  //entry
  entry: {
    app: path.resolve(__dirname, "./src/app.js"),
    about: path.resolve(__dirname, "./src/about.js"),
  },
  //output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      //title
      title: "Webpack 5 ✅",
      //filename
      filename: "index.html",
      //template
      template: "./src/temp.html",
      //chunks
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      //title
      title: "About",
      //filename
      filename: "about.html",
      //template
      template: "./src/tempAbout.html",
      //chunks
      chunks: ["about"],
    }),
  ],
  //loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
