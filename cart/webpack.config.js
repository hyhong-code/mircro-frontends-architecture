const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",

  devServer: {
    port: 8082,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js", // Manifest file
      exposes: {
        "./CartIndex": "./src/index.js", // Aliasing
      },
      shared: ["faker"], // Share faker module, so container only choose one to load
      // Shared modules can only be loaded asynchronously
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
