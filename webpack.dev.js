const merge = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host:'localhost',
    port:'3000',
    inline:true,
    watchContentBase: true,
    compress:true,
    historyApiFallback:true,
    hot:true,//启动热更新，必须搭配new webpack.HotModuleReplacementPlugin()插件
    open:true,
  },
  watch: true, // 开启监听文件更改，自动刷新
  watchOptions: {
    ignored: /node_modules/, //忽略不用监听变更的目录
    aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
    poll:1000 //每秒询问的文件变更的次数
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['home'],
      inject: 'body',
      minify: {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/about.html',
      filename: 'about.html',
      inject: 'body',
      chunks: ['about'],
      minify: {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true
      }
    })
  ]
});
