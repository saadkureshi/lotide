const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, "3"]));

const flatten = function(masterArray) {
  let flatArray = [];
  for (let i = 0; i < masterArray.length; i++) {
    if (Array.isArray(masterArray[i])) {
      for (let j = 0; j < masterArray[i].length; j++) {
        flatArray.push(masterArray[i][j]);
      }
    } else {
      flatArray.push(masterArray[i]);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

console.log(flatten(["hi", [2], ["test", 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;