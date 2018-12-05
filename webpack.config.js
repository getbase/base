/*** webpack.config.js ***/
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackReloadPlugin = require('html-webpack-reload-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './scss/index.scss',
  output: {
    path: path.resolve(__dirname, 'css'),
    filename: 'index.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }, 'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LiveReloadPlugin(),
    new HtmlWebpackReloadPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, './'),
    watchContentBase: true,
    hot: true,
    open: true,
    port: 3000,
    watchOptions: {
      poll: true
    }
  }
}