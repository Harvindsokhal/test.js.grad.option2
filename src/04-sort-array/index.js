/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: O(n log(n))
/**
  Explain: Due to the array containing more than 10 elements it is fairly large and with javascripts sorting algorithm it would have an average time complexity of O(n log(n)) to sort,
  although if an array had 10 or fewer elements it would have an average time complexity of O(n^2).
 */

var check = require('check-types');

module.exports = function sortArray(arr) {
    if (check.emptyArray(arr)) { 
        return [] 
    } else if (!check.array.of.integer(arr)) {
        throw TypeError('Input is not integer') ;
    } else {
        arr.sort(function(a, b) {
            return a - b;
        })
        return arr
    }
};
