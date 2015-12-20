'use strict';

require('mocha');
var assert = require('assert');
var homepage = require('./');

describe('homepage', function() {
  it('should create a homepage from repository.url', function() {
    var url = homepage({
      repository: {
        url: 'https://github.com/jonschlinkert/pkg-homepage.git'
      }
    });
    assert(url === 'https://github.com/jonschlinkert/pkg-homepage');
  });

  it('should return the homepage value when it exists', function() {
    var url = homepage({
      homepage: 'foo',
      repository: {
        url: 'https://github.com/jonschlinkert/pkg-homepage.git'
      }
    });
    assert(url === 'foo');
  });

  it('should create a homepage from a git repository.url', function() {
    var url = homepage({
      repository: {
        url: 'git://github.com/jonschlinkert/pkg-homepage'
      }
    });
    assert(url === 'https://github.com/jonschlinkert/pkg-homepage');
  });

  it('should create a homepage from shortened repository string', function() {
    var url = homepage({
      repository: 'jonschlinkert/pkg-homepage'
    });
    assert(url === 'https://github.com/jonschlinkert/pkg-homepage');
  });
});
