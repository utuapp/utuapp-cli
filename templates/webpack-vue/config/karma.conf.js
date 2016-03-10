/*
* @Author: CC
* @Date:   2016-03-10 10:34:42
* @Last Modified by:   CC
* @Last Modified time: 2016-03-10 11:44:57
*/

const webpackConf = require('./webpack.base.conf');
delete webpackConf.entry;
webpackConf.devtool = '#inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'es6-shim'],
    reporters: ['spec'],
    files: ['../test/index.js'],
    preprocessors: {
      '../test/index.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
