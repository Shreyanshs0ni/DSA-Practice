/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let set = new Set(sentence);
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  for (let ch of alphabets) {
    if (!set.has(ch)) {
      return false;
    }
  }

  return true;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); //true
console.log(checkIfPangram("leetcode")); //false
