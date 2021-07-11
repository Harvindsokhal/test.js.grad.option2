// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is: O(1)
/**
 Explain: Like the last algorithm this one also has a constant time complexity as it is only carrying out one arithmeric equation 
 which means the time complexity would be O(1 + 1) which is simplified to O(1).
*/

module.exports = function createBase(integer) {
  return function (integer2) { 
    return integer + integer2
  };
};
