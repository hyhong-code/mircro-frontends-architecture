const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devServer: {
    port: 8081,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Adds script tags automatically into ./public/index.html
    }),
  ],
};
