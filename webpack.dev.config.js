const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackReloadPlugin = require('html-webpack-reload-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [`./${process.env.LANGUAGE}/index.${process.env.LANGUAGE}`],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      inject: true,
    }),
    new CleanWebpackPlugin(['index.css', 'index.css.map']),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LiveReloadPlugin(),
    new HtmlWebpackReloadPlugin(),
    new webpack.EnvironmentPlugin({LANGUAGE: 'scss'})
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