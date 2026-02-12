/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  joined1 = word1.join("");
  joined2 = word2.join("");
  return joined1 === joined2;
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])); //true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])); //true
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])); //true
