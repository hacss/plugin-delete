const path = require("path");

module.exports = [
  ["hacss-plugin-delete.umd.js", "development"],
  ["hacss-plugin-delete.umd.min.js", "production"],
].map(([filename, mode]) => ({
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename,
    library: ["hacssPlugins", "delete"],
    libraryTarget: "umd",
    globalObject: "this",
    libraryExport: "default",
  },
  resolve: {
    alias: {
      "core-js": "core-js-pure",
    },
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }],
  },
  mode,
  devtool: "source-map",
}));
