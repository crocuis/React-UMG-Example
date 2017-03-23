var webpack = require('webpack');
var env = process.env.WEBPACK_ENV || 'dev';
var path = require('path');

var appName = 'index';

var plugins = [], outputFile = appName + '.js';

var config = {
  entry: './src/index.jsx',
  target: 'node',
  output: {
    path: __dirname + '/build',
    filename: outputFile,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,        
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                  [ 'es2015', { modules: false } ],
                  'react' 
                ]

            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],   
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
  },
  plugins: [...plugins,            
            new webpack.LoaderOptionsPlugin({ 
              minimize: true, debug: false 
            }),  
            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
              }
            })
           ]
};

module.exports = config;
