const assertEqual = function(actual, expected) {

  if (!(actual === expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  for (let prop in obj) {
    if (obj[prop] === value || obj[prop].includes(value)) {
      return prop;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestCityByBias = {
  weather: "Atlanta",
  fun: ["Montreal", "Karachi"],
  livability: "London"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(bestCityByBias, "Montreal"), "fun");
assertEqual(findKeyByValue(bestCityByBias, "London"), "livability");