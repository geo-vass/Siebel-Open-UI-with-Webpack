const path = require("path");

module.exports = {
  //entry points for our code and 3rd party code (respectively)
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  //[name] refers to the various entry points, for each a new file will be created in dist
  //path makes sure that the dist folder is found based on the root folder of the project
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
