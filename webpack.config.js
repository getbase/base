const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [`./${process.env.LANGUAGE}/index.${process.env.LANGUAGE}`],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.css'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            'less-loader'
          ]
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
    new CleanWebpackPlugin(['./index.css', './index.css.map']),
    new webpack.optimize.ModuleConcatenationPlugin(),
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