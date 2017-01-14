var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV || 'dev';
var path = require('path');
var NpmInstallPlugin = require("npm-install-webpack-plugin");

var appName = 'index';

var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = appName + '.min.js';
} else {
  outputFile = appName + '.js';
}

var config = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/build',
    filename: outputFile,
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  plugins: [...plugins, 
            new NpmInstallPlugin(),
            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: JSON.stringify('production')
              }
            })
           ]
};

module.exports = config;
