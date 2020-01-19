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
    hot: true,
    host: 'localhost',
    port: 3000,
    contentBase: path.join(__dirname, "../dist")
  },
  optimization: {
    usedExports: true,
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
