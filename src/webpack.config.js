const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/app.ts',
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      {
          test: /\.ts?$/,
          include: /client/,
          exclude: /node_modules/,
          loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
    port: 8080,
    host: '0.0.0.0'
  },
  devtool: '#eval-source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // HMR issue, see: https://github.com/webpack/webpack/issues/1151
    new webpack.HotModuleReplacementPlugin()
  ]
};

