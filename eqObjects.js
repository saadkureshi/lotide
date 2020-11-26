const assertEqual = function(actual, expected) {

  if (!(actual === expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let numOfKeys1 = Object.keys(object1).length;
  let numOfKeys2 = Object.keys(object2).length;

  if (numOfKeys1 !== numOfKeys2) {
    return false;
  }

  for (let obj1Key in object1) {
    if (!object2[obj1Key]) {
      return false;
    } else if (Array.isArray(object1[obj1Key])) {
      if (!(Array.isArray(object2[obj1Key]))) {
        return false;
      } else if (!(eqArrays(object1[obj1Key], object2[obj1Key]))) {
        return false;
      }
    } else if (typeof object1[obj1Key] === "object" && !Array.isArray(object1[obj1Key])) {
      if (!(typeof object2[obj1Key] === "object" && !Array.isArray(object1[obj1Key]))) {
        return false;
      } else if (!(eqObjects(object1[obj1Key], object2[obj1Key]))) {
        return false;
      }
    } else if (object1[obj1Key] !== object2[obj1Key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const newTest = { c: 1, d: ["2", 3]};
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(dc, newTest), false);

const zz = { c: "1", d: {name: "Saad", city: "MTL"} };
const xx = { d: {city: "MTL", name: "Saad"}, c: "1" };
const yy = { d: {city: "London", name: "Saad"}, c: "1" };
assertEqual(eqObjects(zz, xx), true);
assertEqual(eqObjects(zz, yy), false);
