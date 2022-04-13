const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 進入點
  entry: './index.js',
  // 輸出
  output: {
    // 輸出目錄
    path: path.resolve(__dirname, 'dist'),
 
    // 請參考 dist/index.html裡的script src是引用什麼檔案
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {},
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    static : {
      directory : path.join(__dirname, "dist/")
    },
    liveReload: true,
    port: 9000,
    devMiddleware:{
      publicPath: "https://localhost:9000/",
    },
  },
};