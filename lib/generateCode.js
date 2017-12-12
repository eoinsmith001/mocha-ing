var check = require('check-types');

module.exports = function(arg, cb) {
  check.assert.string(arg, 'argument should be a string');
  var result  = arg.split('').reverse().join('');
  cb(null, result);
}
