/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let res = "";
  for (let i = 0; i < words.length; i++) {
    res += words[i][0];
  }
  return res === s;
};

console.log(isAcronym(["alice", "bob", "charlie"], "abc")); //true
console.log(isAcronym(["an", "apple"], "a")); //false
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy")); //true
