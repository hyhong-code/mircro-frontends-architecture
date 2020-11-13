const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",

  devServer: {
    port: 8080,
  },

  plugins: [
    // Host: decide which fils to get from the remotes
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        // products is the name property in products module ModuleFederationPlugin object
        // @url is the url for the remoteEntry file
        products: "products@http://localhost:8081/remoteEntry.js",
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
