const merge = require('webpack-merge');
const base = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  devtool: 'nosources-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 500000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     filename: 'js/vendors.js'
      //   },
      //   // jquery: {
      //   //   test: require.resolve('jquery'),
      //   //   priority: -9,
      //   //   filename: 'js/jquery.min.js',
      //   //   reuseExistingChunk: true
      //   // },
      //   bootstrap: {
      //     test: require.resolve('bootstrap'),
      //     priority: -9,
      //     filename: 'js/bootstrap.min.js',
      //     reuseExistingChunk: true
      //   },
      //   // axios: {
      //   //   test: require.resolve('axios'),
      //   //   priority: -7,
      //   //   filename: 'js/axios.min.js',
      //   //   reuseExistingChunk: true
      //   // },
      //   resetStyle: {
      //     test: /reset\.css/,
      //     priority: -19,
      //     filename: 'css/reset.min.css',
      //     reuseExistingChunk: true
      //   },
      //   // commonStyle: {
      //   //   test: /common\.css/,
      //   //   priority: -19,
      //   //   filename: 'css/common.min.css',
      //   //   reuseExistingChunk: true
      //   // },
      //   // bootstrapStyle: {
      //   //   test: /bootstrap.(.*)\.css/,
      //   //   priority: -19,
      //   //   filename: 'css/bootstrap.min.css',
      //   //   reuseExistingChunk: true
      //   // },
      //    default: {
      //       minChunks: 2,
      //       priority: -20,
      //       reuseExistingChunk: true
      //   }
      // }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body',
      chunks: ['home', 'bootstrap', 'vendors'],
      minify: {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true
      }
    })
    // new HtmlWebpackPlugin({
    //   template: 'src/about.html',
    //   filename: 'about.html',
    //   inject: 'body',
    //   chunks: ['jquery','about']
    // })
  ]
});
