'use strict';
let path = require('path');
let defaultSettings = require('./defaults');
const autoprefixer = require('autoprefixer');

const aliasesKeys = [
  'actions',
  'containers',
  'components',
  'controls',
  'constants',
  'sources',
  'stores',
  'locale',
  'utils',
  'theme'
];

let aliases = {};
aliasesKeys.forEach( aliase => aliases[aliase] = `${defaultSettings.srcPath}/${aliase}/` );

let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ],
    alias: Object.assign(aliases, {
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    })
  },
  module: {},
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: [path.join(__dirname, '/../src')]
  }
};
