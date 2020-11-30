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

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const zz = { c: "1", d: {name: "Saad", city: "MTL"} };
const xx = { d: {city: "MTL", name: "Saad"}, c: "1" };
const yy = { d: {city: "London", name: "Saad"}, c: "1" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(zz, xx);
assertObjectsEqual(zz, yy);

module.exports = assertObjectsEqual;
