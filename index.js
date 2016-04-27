/*!
 * pkg-homepage <https://github.com/jonschlinkert/pkg-homepage>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./utils');

module.exports = function(pkg) {
  if (!utils.isObject(pkg)) {
    throw new TypeError('expected an object');
  }

  if (utils.isString(pkg.homepage)) {
    return pkg.homepage;
  }

  var repository = pkg.repository;
  if (typeof repository === 'undefined') {
    return null;
  }

  if (utils.isObject(repository)) {
    repository = repository.url;
  }

  var parsed = utils.parse(repository);
  return utils.stringify(parsed.owner, parsed.name);
};
