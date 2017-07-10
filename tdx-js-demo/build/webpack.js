const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

console.log("---webpack build start---");

let config = {

  context: process.cwd(),
  entry: "./src/index.js",
  output: {

    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },

  module: {

    rules: [

      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
};

const compiler = webpack(config);
compiler.run((err, stats) => {
  if(err) {
    console.log(err);
  }

  console.log("---webpack build end---");
})