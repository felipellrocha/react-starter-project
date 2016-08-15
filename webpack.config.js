var webpack = require('webpack');
var path = require('path');

console.log(path.resolve('dist'));

module.exports = {
  context: path.resolve('src'),
  devtool: 'inline-sourcemap',
  entry: './Router.js',
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src',
    ],
  },
  devServer: {
    inline: true,
    port: 3333,
  },
  contentBase: path.resolve('dist'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      }
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};
