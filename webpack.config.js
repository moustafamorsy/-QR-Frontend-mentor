const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: 'web',
    mode:"development",
  entry:'./src/index.js',

 output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: false,
  },
 
  plugins: [
    new HtmlWebpackPlugin(
        { 
            title : "main",
            filename: 'index.html',
            template: 'src/views/index.html',
         
          }
    ),
   new MiniCssExtractPlugin(),
],
devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: false,
    compress: true,
    historyApiFallback: true,
  },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          
      ]
      
    }
};