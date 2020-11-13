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
        "./CartIndex": "./src/bootstrap.js", // Aliasing
      },
      // shared: {
      //   faker: {
      //     singleton: true, // Means we only want to load at most 1 copy, regardless of version
      //   },
      // },
      shared: ["faker"],
      // Share faker module, so container only choose one to load
      // Shared modules can only be loaded asynchronously
      // When different version (marjor number) of same module is used between remotes
      // Host will load multiple scripts
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
