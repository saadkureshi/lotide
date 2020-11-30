const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual.js');   
const assertEqual = require('./assertEqual.js');      
const letterPositions = require('./letterPositions.js');
const assertObjectsEqual = require('./assertObjectsEqual.js');  
const map = require('./map.js');
const countLetters = require('./countLetters.js' );  
const countOnly = require('./countOnly.js');   
const eqArrays = require('./eqArrays.js');   
const eqObjects = require('./eqObjects.js');
const findKeyByValue = require('./findKeyByValue.js');
const findKey = require('./findKey.js');             
const takeUntil = require('./takeUntil.js');
const flatten = require('./flatten.js');
const without = require('./without.js');



module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  letterPositions: letterPositions,
  assertObjectsEqual: assertObjectsEqual,
  map: map,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  takeUntil: takeUntil,
  flatten: flatten,
  without: without
};