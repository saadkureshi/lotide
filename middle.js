const middle = function(array) {
  let middleIndex = Math.floor((array.length - 1) / 2);
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    
    return [array[middleIndex], array[middleIndex + 1]];
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;
