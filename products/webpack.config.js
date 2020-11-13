const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",

  devServer: {
    port: 8081,
  },

  plugins: [
    // Remote: decide which modules(files) to make available to other projects
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html", // Adds script tags automatically into ./public/index.html
    }),
  ],
};
