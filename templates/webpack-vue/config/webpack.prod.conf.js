/*
* @Author: CC
* @Date:   2016-03-10 10:49:32
* @Last Modified by:   CC
* @Last Modified time: 2016-03-10 10:53:53
*/

const webpack = require('webpack');
const config = require('./webpack.base.conf');

config.output.filename = '[name].[chunkhash].js';
config.output.chunkFilename = '[id].[chunkhash].js';
config.devtool = false;
config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
]);

module.exports = config;
