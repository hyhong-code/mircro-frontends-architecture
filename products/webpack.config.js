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
        "./ProductsIndex": "./src/bootstrap.js", // Alias / renaming for convience
        // boostrap.js contains logics to adjust for different subapp execution context
      },
      shared: ["faker"],
      // Share faker module, so container don't load it if one copy of it already pre-loaded
      // Shared modules can only be loaded asynchronously
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html", // Adds script tags automatically into ./public/index.html
    }),
  ],
};
