一，建文件，mkdir react-demo && cd react-demo
二，package.json初始化，npm init， 一路回车 或 npm init -yes
三，安装常用的依赖
  #--save-dev和--save的区别
   --save-dev是开发时的依赖,且放入devDependencies下
   --save是运行时的依赖，且放入dependencies下

 /**react相关：**/
  cnpm install react react-dom --save

  react /**react本身**/
  react-dom /**react-dom本身**/
  
 /**babel相关：**/
  cnpm install babel-core babel-loader --save-dev
  cnpm install babel-preset-env babel-preset-latest babel-preset-react --save-dev

  babel-core /**后台编译的babel工具，核心包**/
  babel-loader /**babel加载器**/
  babel-preset-env /**解析es的包,智能识别当前运行环境并进行转换**/
  babel-preset-latest /**latest是一个特殊的presets，包括了es2015，es2016，es2017的插件（目前为止，以后有es2018也会包括进去）。**/
  babel-preset-react /**解析jsx的包**/

  <!-- babel-preset-es2015 /**babel对es2015的预设**/
  babel-preset-stage-0 /**es7不同阶段语法转码规则(0-4选装1个即可)**/
  babel-plugin-import /**组件库按需加载**/
  babel-plugin-transform-runtime /**使es6中的api类似generator,promise对象等生效**/ -->

  /**webpack相关**/
  cnpm install webpack webpack-cli webpack-dev-server --save-dev

  <!-- /**scss相关**/
  cnpm install css-loader node-sass sass-loader --save-dev -->


  #修改package.json文件的scripts
 "scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  }
分别执行两个操作，你会发现main.js不同的变化。production模式下，默认对打包的文件压缩，打包更小。production模式下，对打包的文件不压缩，同时打包的速度更快，webpack更新的优点就在这里。如果没有指定任何模式，默认为production模式。

四，新建babelrc文件，进行相关配置
{
  "presets": ["env","react"],
}

五，新建文件webpack.config.js,然后进行相关配置
module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  }
};