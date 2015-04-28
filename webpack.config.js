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
    loaders: [
    { test: /\.css$/,loader: "style-loader!css-loader" },
    { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' }
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