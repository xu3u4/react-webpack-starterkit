const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [ 'src', 'node_modules' ]
  },
}