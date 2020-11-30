const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {

  it("returns true for ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("returns false for [1, 2, '3'] and [1, 2, 3]", () => {
    assert.isFalse(eqArrays([1, 2, "3"], [1, 2, 3]));
  });
});