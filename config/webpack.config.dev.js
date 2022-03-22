const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./common.js');

const environment = 'development';

module.exports = {
  ...commonConfig,
  mode: environment,
  devtool: 'inline-source-map',
  devServer: {
    hot: "only",
    host: 'localhost',
    port: 3000,
    static: {
      directory: path.join(__dirname, "../dist"),
    }
  },
  optimization: {
    usedExports: true,
    splitChunks: { chunks: 'all' }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    })
  ]
}
