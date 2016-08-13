/*eslint no-console:0 */
'use strict';

require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');
var path = require('path');

var app = express();
var isDevelopment = process.env !== 'production';

if (isDevelopment){
  app.use('/assets', proxy(url.parse(`http://localhost:${config.port}/assets`)));
}
else {
  app.use('/assets', express.static('dist'));
}

if (isDevelopment){

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '', '/src/index.html'));
  });

  new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.port, 'localhost', (err) => {
      if (err) {
        console.log(err);
      }
      console.log('Listening at localhost:' + config.port);
      //open('http://localhost:' + config.port + '/webpack-dev-server/');
      console.log('Opening your system browser...');
    });

  app.listen(8080);
  open('http://localhost:8080');
}
