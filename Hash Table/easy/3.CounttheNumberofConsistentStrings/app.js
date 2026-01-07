/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let counter = words.length;
  let set = new Set(allowed);
  for (const word of words) {
    for (const char of word) {
      if (!set.has(char)) {
        counter--;
        break;
      }
    }
  }
  return counter;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])); //2
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
); //7
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
); //4
