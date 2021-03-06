var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
            loader: 'url-loader',
            options: {
                // limit: 8000, // Convert images < 8kb to base64 strings
                name: '[path][hash]-[name].[ext]'
            }
        }]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", ".css", "*"]
  }
};
