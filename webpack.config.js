const path = require("path"); //note.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { abort } = require("process");

module.exports = {
  //mode
  mode: "development", //production
  //entry
  entry: {
    main: path.resolve(__dirname, "src/js/main.js"),
    about: path.resolve(__dirname, "src/js/about.js"),
  },
  //output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      //title
      title: "Countries | Home",
      //filename
      filename: "index.html",
      //template
      template: "./src/pages/indexTemp.html",
      //chunks
      chunks: ["main"],
    }),

    new HtmlWebpackPlugin({
      //title
      title: "Countries | About",
      //filename
      filename: "about.html",
      //template
      template: "./src/pages/aboutTemp.html",
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
  //devserver
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
