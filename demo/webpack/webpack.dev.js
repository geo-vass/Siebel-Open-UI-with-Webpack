const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  //specify development mode
  mode: "development",
  //leave this option if you want to see an unminified code while in development
  // devtool: "none",
  module: {
    rules: [
      {
        //by using the following loaders, we tell webpack how to treat .css files
        test: /\.css$/,
        //css-loader turns the css of an imported file into common js
        //style-loader injects the js with the included css into the DOM with a <style> tag
        //they run in reverse order in the following array (css-loader first then style-loader)
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    devMiddleware: {
      //required because we want webpack to refresh the relative files and not hot load the code in memory
      writeToDisk: true,
    },
    hot: false,

  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
