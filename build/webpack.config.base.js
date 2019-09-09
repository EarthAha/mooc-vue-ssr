const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    // 自动解析确定的扩展，使用户在引入模块时不带扩展
    extensions: ['*', '.js', '.json', '.vue', '.styl', '.jsx'],
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    alias: {
      '@': path.join(__dirname, '..', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'img/[name]-[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
