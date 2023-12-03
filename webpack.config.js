const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/js/index.js")
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: "index.html",
        inject: "body",
        template: "./src/index.html",
    })
  ],
  devServer: {
    static: './dist',
  },
  devtool: "inline-source-map",
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },

    ],

  },
  // optimization: {

  //   runtimeChunk: 'single',

  // },

  
};