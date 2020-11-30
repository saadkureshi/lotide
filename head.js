const assertEqual = require('./assertEqual');

const head = function(array) {
  if (Array.isArray(array))
    return array[0];
  else {
    return "Argument passed was not an array.";
  }
};

module.exports = head;


