const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        //by using the following loaders, we tell webpack how to treat .css files
        test: /\.css$/,

        //css-loader turns CSS into common js
        //MiniCssExtractPlugin extracts css into files
        //they run in reverse order in the following array (css-loader first then MiniCssExtractPlugin.loader)
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: false,
  optimization: {
    //minimize css files with CssMinifier
    //The ...  is for Terser. It is the default js minimizer and without it js files won't be minimized
    minimizer: [`...`, new CssMinimizerPlugin(),],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].css" }),],
});
