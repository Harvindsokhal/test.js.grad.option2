/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: O(1)
// Explain: The Algorithm has a constant time complexity as it is not dependent on the size of the input data, and the time required to run is the same every single time.



module.exports = function reverseWordsInSentence(input) {
  return input.split("").reverse().join("").split(" ").reverse().join(" ")
};
