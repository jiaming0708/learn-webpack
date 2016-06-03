var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: {
    entry:'./entry.js',
    test:'./test.js',
    scss:'./scss/main.scss'
  },
  devtool: "source-map",
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by zhaoda'),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new ExtractTextPlugin("[name].css")
  ]
}