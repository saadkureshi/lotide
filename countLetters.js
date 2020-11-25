const assertEqual = function(actual, expected) {

  if (!(actual === expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  let count = {};

  for (let i = 0; i < sentence.length; i++) {
    if (count[sentence[i]]) {
      count[sentence[i]] += 1;
    } else {
      count[sentence[i]] = 1;
    }
  }
  console.log(count);
  return count;
};

assertEqual(countLetters('LHL')["L"], 2);
assertEqual(countLetters('Saad1211')["1"], 3);