const letterPositions = function(sentence){
  sentence = sentence.replace(/\s+/g, "");
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if (results[sentence[i]]){
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
}

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

console.log(assertArraysEqual(letterPositions("This is a test")["s"], [3, 5, 9]));
console.log(assertArraysEqual(letterPositions("saad1 a1")["a"], [1, 2, 5]));