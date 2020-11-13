const HtmlWebpackPlugin = require("html-webpack-plugin");

// Remote mode - take some code out of currently project and make available for other projects
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
      filename: "remoteEntry.js", // Manifest - Contains a list of files that are available from this project
      exposes: {
        // Controls which module/files inside project to expose the others
        "./ProductsIndex": "./src/index", // Alias / renaming for convience
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html", // Adds script tags automatically into ./public/index.html
    }),
  ],
};
