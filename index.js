/*!
 * pkg-homepage <https://github.com/jonschlinkert/pkg-homepage>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./utils');

module.exports = function(pkg) {
  if (!pkg) return null;
  if (pkg.homepage) return pkg.homepage;
  if (!pkg.repository) return null;

  var res = {};
  if (typeof pkg.repository === 'string') {
    res = utils.parse(pkg.repository);
  } else if (typeof pkg.repository === 'object') {
    res = utils.parse(pkg.repository.url);
  }
  return utils.stringify(res.user, res.repo);
};
