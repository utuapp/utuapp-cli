/*
* @Author: CC
* @Date:   2016-03-10 10:46:10
* @Last Modified by:   CC
* @Last Modified time: 2016-03-10 10:49:20
*/

const webpack = require('webpack');
const config = require('./webpack.base.conf');

config.devtool = '#eval-source-map';
config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
]);

module.exports = config;
