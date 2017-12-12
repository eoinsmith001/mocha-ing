'use strict';

var promisify = require('bluebird').promisify;
var Pool = require('pg-pool')
var pool = new Pool();

module.exports = function(params, cb) {
  var getCode = promisify('./generateCode');
  var query   = require('./sql').saveUser;
  var code = getCode(params.firstName)
  .then(function(c) {
    var values  = [params.firstName, params.lastName, c];
    pool.query(query, values, function(err, res) {
      console.log(err, res);
      pool.end();
    });
  })
  .catch(cb);
};
