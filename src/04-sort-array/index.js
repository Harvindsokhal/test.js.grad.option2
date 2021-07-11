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
        throw TypeError('Array does not contain only integers') ;
    } else {
        arr.sort(function(a, b) {
            return a - b;
        })
        return arr
    }
};
