var path = require("path"),
    BowerWebpackPlugin = require('bower-webpack-plugin'),
    webpack = require("webpack");

module.exports = {
  cache: true,
  entry: {
    egghead: __dirname + "/assets/index.jsx"
  },
  output: {
    path: path.join(__dirname, "public/bundle"),
    filename: "[name].js"
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {

      }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
    { test: /\.css$/,loader: "style-loader!css-loader" },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
    ]
  },

  plugins: [
    new BowerWebpackPlugin({
        modulesDirectories: ['assets/bower_components'],
        manifestFiles: ['bower.json', '.bower.json'],
        includes: /.*/,
        excludes: /.*\.less$/
    })
  ]
}