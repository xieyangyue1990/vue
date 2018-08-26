var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/main.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      filename: "index.html"
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: "url-loader?limit=7631&name=[hash:8]-[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: "url-loader"
      },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.vue$/, use: "vue-loader" }
    ]
  },
  resolve: {
    alias: {
      //修改vue被导入时的路径
      //vue$: "vue/dist/vue.js"
    }
  },
  performance: {
    hints: false
  }
};
