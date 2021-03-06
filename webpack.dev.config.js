const merge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});
