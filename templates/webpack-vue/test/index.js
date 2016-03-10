/*
* @Author: CC
* @Date:   2016-03-10 10:27:14
* @Last Modified by:   CC
* @Last Modified time: 2016-03-10 11:30:52
*/

/* eslint-disable */

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// require all test files (files that ends with .spec.js)
var testsContext = require.context('.', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
