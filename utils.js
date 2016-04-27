'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('isobject', 'isObject');
require('parse-github-url', 'parse');
require('stringify-github-url', 'stringify');
require = fn;

utils.isString = function(val) {
  return val && typeof val === 'string';
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
