const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  entry: "./test/index.test.js",
  
  output: {
    filename: "bundle.test.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assert/"
  },

  module: {

    rules: [

      {
        test: /\.js$/,
        loader: "babel-loader"
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader"]
        })
      }
    ]
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: `style.css`
    }),
  ],

  devServer: {

    contentBase: path.resolve(__dirname),
    compress: true,
    port: 8912
  }
}