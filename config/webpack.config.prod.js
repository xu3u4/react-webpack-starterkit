const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./common.js');

const environment = 'production';

module.exports = {
  ...commonConfig,
  mode: environment,
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
      }
    }
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
