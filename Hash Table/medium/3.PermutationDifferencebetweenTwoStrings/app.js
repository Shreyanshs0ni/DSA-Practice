/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let pos1 = new Map();
  let pos2 = new Map();
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    pos1.set(s[i], i);
    pos2.set(t[i], i);
  }
  for (let i = 0; i < s.length; i++) {
    res += Math.abs(pos1.get(s[i]) - pos2.get(s[i]));
  }
  return res;
};

console.log(findPermutationDifference("abc", "bac")); //2
console.log(findPermutationDifference("abcde", "edbac")); //12
