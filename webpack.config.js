const path = require('path');
 
const config= {
  entry: './src/index.js', // 入口文件路径
  output: {
    filename: 'index.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    inline: true,
    port: 8021
  },
  module: {
    rules: [{
      test: /\.js$/, // babel 转换为兼容性的 js
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  }
}

module.exports = config;